import { beforeAll, describe, expect, it } from "vitest";
import { sql } from "drizzle-orm";
import type { Base } from "@/db";
import { seed } from "@/db/seed";
import { activitesService, chantiersService, clientsService, contactsService, ficheClient, maJournee, notesService, tachesService, etiqueter } from "@/lib/services/crm";
import { baseDeTest, ctx, IDS } from "./aide";

let db: Base;
beforeAll(async () => {
  db = await baseDeTest();
});

const compter = async (table: string) => {
  const r: any = await db.execute(sql.raw(`select count(*)::int n from ${table}`));
  return Number((r.rows ?? r)[0].n);
};

describe("seed", () => {
  it("est idempotent", async () => {
    const avant = await Promise.all(["organisations", "utilisateurs", "clients", "chantiers", "taches", "activites"].map(compter));
    await seed(db);
    const apres = await Promise.all(["organisations", "utilisateurs", "clients", "chantiers", "taches", "activites"].map(compter));
    expect(apres).toEqual(avant);
    expect(avant[0]).toBe(2);
    expect(avant[2]).toBeGreaterThanOrEqual(8);
  });
});

describe("clients", () => {
  it("crée, lit, modifie, supprime et journalise chaque écriture", async () => {
    const k = ctx(db, IDS.dirigeant, "dirigeant");
    const c = await clientsService.creer(k, { nom: "Jeanne Test", type: "particulier", telephone: "06 00 00 00 00" });
    expect(c.id).toMatch(/^cli_/);
    expect(c.organisationId).toBe(IDS.orgDemo);
    const m = await clientsService.modifier(k, c.id, { telephone: "06 99 99 99 99" });
    expect(m.telephone).toBe("06 99 99 99 99");
    const journal = await activitesService.lister(k, { filtres: { ressourceId: c.id } });
    expect(journal.donnees.map((a) => a.action).sort()).toEqual(["creation", "modification"]);
    const modif = journal.donnees.find((a) => a.action === "modification")!;
    expect(modif.acteurId).toBe(IDS.dirigeant);
    expect(modif.changements).toEqual({ telephone: ["06 00 00 00 00", "06 99 99 99 99"] });
    await clientsService.supprimer(k, c.id);
    await expect(clientsService.obtenir(k, c.id)).rejects.toMatchObject({ statut: 404 });
    const apres = await activitesService.lister(k, { filtres: { ressourceId: c.id } });
    expect(apres.donnees.some((a) => a.action === "suppression")).toBe(true);
  });

  it("valide les entrées (422, détails par champ)", async () => {
    const k = ctx(db, IDS.dirigeant, "dirigeant");
    await expect(clientsService.creer(k, { nom: "" })).rejects.toMatchObject({ statut: 422, code: "validation" });
    await expect(clientsService.creer(k, { nom: "X", siret: "123" })).rejects.toMatchObject({ statut: 422 });
    await expect(clientsService.creer(k, { nom: "X", champInconnu: 1 })).rejects.toMatchObject({ statut: 422 });
  });

  it("pagine par curseur sans doublon ni trou", async () => {
    const k = ctx(db, IDS.dirigeant, "dirigeant");
    for (let i = 0; i < 23; i++) await clientsService.creer(k, { nom: `Pagination ${i}` });
    const vus: string[] = [];
    let curseur: string | null = null;
    let pages = 0;
    do {
      const p: Awaited<ReturnType<typeof clientsService.lister>> = await clientsService.lister(k, { limite: 7, curseur, q: "Pagination" });
      vus.push(...p.donnees.map((c) => c.id));
      curseur = p.curseurSuivant;
      pages++;
    } while (curseur);
    expect(vus).toHaveLength(23);
    expect(new Set(vus).size).toBe(23);
    expect(pages).toBe(4);
  });

  it("filtre et recherche", async () => {
    const k = ctx(db, IDS.dirigeant, "dirigeant");
    const syndics = await clientsService.lister(k, { filtres: { type: "syndic" } });
    expect(syndics.donnees.every((c) => c.type === "syndic")).toBe(true);
    expect(syndics.donnees.length).toBeGreaterThan(0);
    const r = await clientsService.lister(k, { q: "lemaire" });
    expect(r.donnees[0].nom).toBe("Cabinet Lemaire Gestion");
    await expect(clientsService.lister(k, { filtres: { inconnu: "x" } })).rejects.toMatchObject({ statut: 422 });
  });
});

describe("chantiers", () => {
  it("numérote les références et reprend le chargé d'affaires du client", async () => {
    const k = ctx(db, IDS.dirigeant, "dirigeant");
    const a = await chantiersService.creer(k, { titre: "Test A", clientId: "cli_demo_nguyen0000000" });
    const b = await chantiersService.creer(k, { titre: "Test B", clientId: "cli_demo_nguyen0000000" });
    expect(a.reference).toMatch(/^CH-\d{4}-\d{4}$/);
    expect(Number(b.reference.slice(-4))).toBe(Number(a.reference.slice(-4)) + 1);
    expect(a.chargeAffairesId).toBe(IDS.julie);
  });

  it("refuse une adresse d'un autre client", async () => {
    const k = ctx(db, IDS.dirigeant, "dirigeant");
    await expect(chantiersService.creer(k, { titre: "X", clientId: "cli_demo_nguyen0000000", siteId: "sit_demo_dupont_oberk0" })).rejects.toMatchObject({ statut: 422 });
  });
});

describe("notes, tâches, fiche, ma journée", () => {
  it("rattache la note au client du chantier et complète l'auteur", async () => {
    const k = ctx(db, IDS.julie, "charge_affaires");
    const n = await notesService.creer(k, { contenu: "Accès par la cour", chantierId: "chn_demo_dupont_sdb000" });
    expect(n.clientId).toBe("cli_demo_dupont0000000");
    expect(n.auteurId).toBe(IDS.julie);
  });

  it("marque une tâche faite (horodatage) puis la rouvre", async () => {
    const k = ctx(db, IDS.julie, "charge_affaires");
    const t = await tachesService.creer(k, { titre: "Rappeler", echeance: new Date().toISOString().slice(0, 10) });
    expect(t.assigneId).toBe(IDS.julie);
    const f = await tachesService.modifier(k, t.id, { statut: "faite" });
    expect(f.faiteLe).toBeInstanceOf(Date);
    const o = await tachesService.modifier(k, t.id, { statut: "a_faire" });
    expect(o.faiteLe).toBeNull();
  });

  it("assemble la fiche client et la journée", async () => {
    const k = ctx(db, IDS.julie, "charge_affaires");
    const f = await ficheClient(k, "cli_demo_dupont0000000");
    expect(f.sites).toHaveLength(1);
    expect(f.chantiers.length).toBeGreaterThan(0);
    expect(f.notes[0].epinglee).toBe(true);
    const j = await maJournee(k);
    expect(j.enRetard.length + j.aujourdhui.length).toBeGreaterThan(0);
    expect([...j.enRetard, ...j.aujourdhui, ...j.aVenir].every((t) => t.assigneId === IDS.julie)).toBe(true);
  });

  it("pose et retire une étiquette", async () => {
    const k = ctx(db, IDS.dirigeant, "dirigeant");
    await etiqueter(k, { etiquetteId: "eti_demo_urgent0000000", typeRessource: "clients", ressourceId: "cli_demo_garcia0000000" });
    expect((await ficheClient(k, "cli_demo_garcia0000000")).etiquettes.map((e) => e.nom)).toContain("Urgent");
    await etiqueter(k, { etiquetteId: "eti_demo_urgent0000000", typeRessource: "clients", ressourceId: "cli_demo_garcia0000000" }, true);
    expect((await ficheClient(k, "cli_demo_garcia0000000")).etiquettes).toHaveLength(0);
  });

  it("refuse un contact sans client existant", async () => {
    const k = ctx(db, IDS.dirigeant, "dirigeant");
    await expect(contactsService.creer(k, { clientId: "cli_nexistepas", nom: "X" })).rejects.toMatchObject({ statut: 422 });
  });
});
