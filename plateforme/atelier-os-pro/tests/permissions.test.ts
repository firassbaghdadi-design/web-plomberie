import { beforeAll, describe, expect, it } from "vitest";
import type { Base } from "@/db";
import { chantiersService, clientsService, contactsService, notesService, tachesService, etiqueter } from "@/lib/services/crm";
import { creerInvitation, creerJeton, listerJetons, modifierMembre, modifierOrganisation } from "@/lib/services/comptes";
import { porteeAutorise, regle } from "@/lib/permissions";
import { baseDeTest, ctx, IDS } from "./aide";

let db: Base;
beforeAll(async () => {
  db = await baseDeTest();
});

const julie = () => ctx(db, IDS.julie, "charge_affaires");
const thomas = () => ctx(db, IDS.thomas, "charge_affaires");
const sophie = () => ctx(db, IDS.adv, "adv");
const karim = () => ctx(db, IDS.dirigeant, "dirigeant");
const CLIENT_JULIE = "cli_demo_dupont0000000";
const CLIENT_THOMAS = "cli_demo_lemaire000000";

describe("chargé d'affaires", () => {
  it("lit tout", async () => {
    expect((await clientsService.obtenir(julie(), CLIENT_THOMAS)).nom).toBe("Cabinet Lemaire Gestion");
    expect((await chantiersService.lister(julie(), { limite: 100 })).donnees.length).toBeGreaterThan(5);
  });
  it("modifie ses clients, pas ceux des autres", async () => {
    await expect(clientsService.modifier(julie(), CLIENT_JULIE, { source: "Site web (formulaire)" })).resolves.toBeTruthy();
    await expect(clientsService.modifier(julie(), CLIENT_THOMAS, { source: "x" })).rejects.toMatchObject({ statut: 403 });
    await expect(contactsService.creer(julie(), { clientId: CLIENT_THOMAS, nom: "X" })).rejects.toMatchObject({ statut: 403 });
    await expect(contactsService.creer(julie(), { clientId: CLIENT_JULIE, nom: "Dupont", prenom: "Marc" })).resolves.toBeTruthy();
  });
  it("devient responsable des clients qu'il crée", async () => {
    const c = await clientsService.creer(julie(), { nom: "Nouveau client de Julie" });
    expect(c.responsableId).toBe(IDS.julie);
    await expect(clientsService.modifier(julie(), c.id, { telephone: "01 02 03 04 05" })).resolves.toBeTruthy();
  });
  it("ne supprime pas de client", async () => {
    await expect(clientsService.supprimer(julie(), CLIENT_JULIE)).rejects.toMatchObject({ statut: 403 });
  });
  it("modifie ses chantiers uniquement", async () => {
    await expect(chantiersService.modifier(julie(), "chn_demo_dupont_sdb000", { statut: "en_cours" })).resolves.toBeTruthy();
    await expect(chantiersService.modifier(julie(), "chn_demo_tilleuls_colo", { statut: "annule" })).rejects.toMatchObject({ statut: 403 });
    await expect(chantiersService.creer(julie(), { titre: "Chez Thomas", clientId: CLIENT_THOMAS })).rejects.toMatchObject({ statut: 403 });
  });
  it("notes et tâches : sur ses dossiers, et les siennes", async () => {
    await expect(notesService.creer(julie(), { clientId: CLIENT_THOMAS, contenu: "x" })).rejects.toMatchObject({ statut: 403 });
    await expect(tachesService.modifier(julie(), "tch_demo_03_affichage0", { statut: "faite" })).rejects.toMatchObject({ statut: 403 });
    await expect(tachesService.modifier(julie(), "tch_demo_01_appel_dupo", { priorite: "normale" })).resolves.toBeTruthy();
    const note = await notesService.creer(thomas(), { clientId: CLIENT_THOMAS, contenu: "Note de Thomas" });
    await expect(notesService.modifier(julie(), note.id, { contenu: "modifiée" })).rejects.toMatchObject({ statut: 403 });
  });
  it("étiquette ses clients seulement", async () => {
    await expect(etiqueter(julie(), { etiquetteId: "eti_demo_urgent0000000", typeRessource: "clients", ressourceId: CLIENT_THOMAS })).rejects.toMatchObject({ statut: 403 });
  });
  it("ne gère ni l'équipe, ni l'organisation, ni les jetons", async () => {
    await expect(creerInvitation(julie(), { email: "x@y.fr", role: "adv" })).rejects.toMatchObject({ statut: 403 });
    await expect(modifierOrganisation(julie(), { nom: "Pirate" })).rejects.toMatchObject({ statut: 403 });
    await expect(listerJetons(julie())).rejects.toMatchObject({ statut: 403 });
    await expect(modifierMembre(julie(), "mbr_julie_demo000000000", { role: "dirigeant" })).rejects.toMatchObject({ statut: 403 });
  });
});

describe("ADV", () => {
  it("gère les clients, contacts et adresses", async () => {
    await expect(clientsService.modifier(sophie(), CLIENT_THOMAS, { email: "compta@lemaire-gestion.example" })).resolves.toBeTruthy();
    const c = await clientsService.creer(sophie(), { nom: "Client saisi par l'ADV", type: "professionnel" });
    expect(c.responsableId).toBeNull();
    await expect(contactsService.creer(sophie(), { clientId: CLIENT_THOMAS, nom: "Comptable" })).resolves.toBeTruthy();
  });
  it("lit les chantiers sans les modifier", async () => {
    await expect(chantiersService.obtenir(sophie(), "chn_demo_dupont_sdb000")).resolves.toBeTruthy();
    await expect(chantiersService.modifier(sophie(), "chn_demo_dupont_sdb000", { statut: "termine" })).rejects.toMatchObject({ statut: 403 });
    await expect(chantiersService.creer(sophie(), { titre: "x", clientId: CLIENT_JULIE })).rejects.toMatchObject({ statut: 403 });
  });
  it("crée des tâches de relance", async () => {
    await expect(tachesService.creer(sophie(), { titre: "Relance facture", clientId: CLIENT_THOMAS })).resolves.toBeTruthy();
  });
});

describe("dirigeant", () => {
  it("fait tout dans son organisation", async () => {
    await expect(chantiersService.modifier(karim(), "chn_demo_tilleuls_colo", { statut: "en_cours" })).resolves.toBeTruthy();
    await expect(modifierOrganisation(karim(), { couleurPrincipale: "#123456" })).resolves.toMatchObject({ couleurPrincipale: "#123456" });
  });
  it("ne peut pas retirer le dernier dirigeant", async () => {
    await expect(modifierMembre(karim(), "mbr_karim_demo000000000", { role: "adv" })).rejects.toMatchObject({ statut: 422 });
  });
  it("change le rôle d'un membre", async () => {
    await expect(modifierMembre(karim(), "mbr_sophie_demo00000000", { role: "charge_affaires" })).resolves.toMatchObject({ role: "charge_affaires" });
    await modifierMembre(karim(), "mbr_sophie_demo00000000", { role: "adv" });
  });
});

describe("admin plateforme", () => {
  it("agit comme dirigeant dans n'importe quelle organisation", () => {
    expect(regle({ role: "adv", adminPlateforme: true }, "jetons", "creer")).toBe("oui");
  });
});

describe("portées des jetons", () => {
  it("lecture seule, par ressource, joker", async () => {
    expect(porteeAutorise(["clients:lecture"], "clients", "lire")).toBe(true);
    expect(porteeAutorise(["clients:lecture"], "clients", "creer")).toBe(false);
    expect(porteeAutorise(["clients:ecriture"], "clients", "lire")).toBe(true);
    expect(porteeAutorise(["*:lecture"], "chantiers", "lire")).toBe(true);
    expect(porteeAutorise(["*:lecture"], "chantiers", "modifier")).toBe(false);
    expect(porteeAutorise(undefined, "chantiers", "supprimer")).toBe(true);
    const { secret } = await creerJeton(karim(), { nom: "Lecture", portees: ["clients:lecture"] });
    const { contexteDepuisJeton } = await import("@/lib/services/comptes");
    const k = (await contexteDepuisJeton(db, secret))!;
    await expect(clientsService.lister(k)).resolves.toBeTruthy();
    await expect(clientsService.creer(k, { nom: "x" })).rejects.toMatchObject({ statut: 403 });
    await expect(chantiersService.lister(k)).rejects.toMatchObject({ statut: 403 });
  });
});
