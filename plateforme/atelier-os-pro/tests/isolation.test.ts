import { beforeAll, describe, expect, it } from "vitest";
import type { Base } from "@/db";
import type { Contexte } from "@/lib/contexte";
import { activitesService, chantiersService, clientsService, contactsService, etiqueter, ficheClient, notesService, sitesService, tachesService, tableauDeBord } from "@/lib/services/crm";
import { creerJeton, contexteDepuisJeton, listerMembres, modifierMembre, obtenirOrganisation, creerInvitation } from "@/lib/services/comptes";
import { autreOrganisation, baseDeTest, ctx, IDS } from "./aide";

let db: Base;
let autre: Contexte;
let demo: Contexte;
let clientAutre: string;

beforeAll(async () => {
  db = await baseDeTest();
  autre = await autreOrganisation(db);
  demo = ctx(db, IDS.dirigeant, "dirigeant");
  clientAutre = (await clientsService.creer(autre, { nom: "Client secret du concurrent" })).id;
});

describe("isolation multi-entreprise", () => {
  it("les listes ne contiennent que l'organisation du contexte", async () => {
    const a = await clientsService.lister(autre, { limite: 100 });
    expect(a.donnees.map((c) => c.id)).toEqual([clientAutre]);
    const d = await clientsService.lister(demo, { limite: 100 });
    expect(d.donnees.some((c) => c.id === clientAutre)).toBe(false);
    expect(d.donnees.every((c) => c.organisationId === IDS.orgDemo)).toBe(true);
    for (const svc of [chantiersService, tachesService, notesService, contactsService, sitesService, activitesService]) {
      const p = await svc.lister(autre, { limite: 100 });
      expect(p.donnees.every((x: any) => x.organisationId === "org_autre")).toBe(true);
    }
  });

  it("lecture, modification, suppression d'une ressource étrangère : 404", async () => {
    await expect(clientsService.obtenir(demo, clientAutre)).rejects.toMatchObject({ statut: 404 });
    await expect(clientsService.modifier(demo, clientAutre, { nom: "Piraté" })).rejects.toMatchObject({ statut: 404 });
    await expect(clientsService.supprimer(demo, clientAutre)).rejects.toMatchObject({ statut: 404 });
    await expect(ficheClient(demo, clientAutre)).rejects.toMatchObject({ statut: 404 });
    await expect(chantiersService.obtenir(autre, "chn_demo_dupont_sdb000")).rejects.toMatchObject({ statut: 404 });
    expect((await clientsService.obtenir(autre, clientAutre)).nom).toBe("Client secret du concurrent");
  });

  it("impossible de rattacher une ressource à un objet d'une autre organisation", async () => {
    await expect(contactsService.creer(demo, { clientId: clientAutre, nom: "Intrus" })).rejects.toMatchObject({ statut: 422 });
    await expect(chantiersService.creer(demo, { clientId: clientAutre, titre: "Intrus" })).rejects.toMatchObject({ statut: 422 });
    await expect(notesService.creer(autre, { clientId: "cli_demo_dupont0000000", contenu: "Intrus" })).rejects.toMatchObject({ statut: 422 });
    await expect(tachesService.creer(autre, { titre: "Intrus", chantierId: "chn_demo_dupont_sdb000" })).rejects.toMatchObject({ statut: 422 });
    // Assigner à un utilisateur d'une autre organisation.
    await expect(tachesService.creer(autre, { titre: "Intrus", assigneId: IDS.julie })).rejects.toMatchObject({ statut: 422 });
    await expect(clientsService.creer(demo, { nom: "X", responsableId: "usr_autre" })).rejects.toMatchObject({ statut: 422 });
    await expect(etiqueter(autre, { etiquetteId: "eti_demo_urgent0000000", typeRessource: "clients", ressourceId: clientAutre })).rejects.toMatchObject({ statut: 422 });
  });

  it("équipe, organisation et tableau de bord restent cloisonnés", async () => {
    const membres = await listerMembres(autre);
    expect(membres.map((m) => m.utilisateurId)).toEqual(["usr_autre"]);
    await expect(modifierMembre(autre, "mbr_julie_demo000000000", { role: "dirigeant" })).rejects.toMatchObject({ statut: 404 });
    expect((await obtenirOrganisation(autre)).nom).toBe("Chauffage Concurrent");
    expect((await tableauDeBord(autre)).clients).toBe(1);
  });

  it("un jeton API ne voit que son organisation", async () => {
    const { secret } = await creerJeton(autre, { nom: "Intégration", portees: ["*:ecriture"] });
    const k = await contexteDepuisJeton(db, secret);
    expect(k?.organisationId).toBe("org_autre");
    await expect(clientsService.obtenir(k!, "cli_demo_dupont0000000")).rejects.toMatchObject({ statut: 404 });
  });

  it("une invitation est rattachée à l'organisation qui invite", async () => {
    const inv = await creerInvitation(autre, { email: "nouveau@concurrent.fr", role: "adv" });
    expect(inv.organisationId).toBe("org_autre");
  });
});
