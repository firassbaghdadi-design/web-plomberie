/**
 * Services métier du CRM : clients, contacts, sites, chantiers, notes, tâches,
 * pièces jointes, étiquettes, journal d'activité.
 * L'interface (server actions) et l'API v2 appellent exactement ces fonctions.
 */
import { and, asc, desc, eq, inArray, like, sql } from "drizzle-orm";
import * as s from "@/db/schema";
import type { Contexte } from "@/lib/contexte";
import { introuvable, invalide } from "@/lib/erreurs";
import { exiger } from "@/lib/permissions";
import * as z from "@/lib/schemas";
import { creerCrud, valider, verifierReferences, type Tx } from "./crud";
import { journaliser } from "./journal";

type Ex = Contexte["db"] | Tx;
export type Client = typeof s.clients.$inferSelect;
export type Contact = typeof s.contacts.$inferSelect;
export type Site = typeof s.sites.$inferSelect;
export type Chantier = typeof s.chantiers.$inferSelect;
export type Note = typeof s.notes.$inferSelect;
export type Tache = typeof s.taches.$inferSelect;
export type PieceJointe = typeof s.piecesJointes.$inferSelect;
export type Etiquette = typeof s.etiquettes.$inferSelect;
export type Activite = typeof s.activites.$inferSelect;

// ───────── Propriété (règles « proprio » du chargé d'affaires) ─────────

export async function estResponsableClient(tx: Ex, ctx: Contexte, clientId: string | null | undefined): Promise<boolean> {
  if (!clientId) return false;
  const [c] = await tx
    .select({ r: s.clients.responsableId })
    .from(s.clients)
    .where(and(eq(s.clients.organisationId, ctx.organisationId), eq(s.clients.id, clientId)))
    .limit(1);
  return c?.r === ctx.utilisateurId;
}

export async function estResponsableChantier(tx: Ex, ctx: Contexte, chantierId: string | null | undefined): Promise<boolean> {
  if (!chantierId) return false;
  const [c] = await tx
    .select({ ca: s.chantiers.chargeAffairesId, client: s.chantiers.clientId })
    .from(s.chantiers)
    .where(and(eq(s.chantiers.organisationId, ctx.organisationId), eq(s.chantiers.id, chantierId)))
    .limit(1);
  if (!c) return false;
  return c.ca === ctx.utilisateurId || (await estResponsableClient(tx, ctx, c.client));
}

const parentPossede = async (tx: Ex, ctx: Contexte, l: { clientId?: string | null; chantierId?: string | null }) =>
  (await estResponsableClient(tx, ctx, l.clientId)) || (await estResponsableChantier(tx, ctx, l.chantierId));

async function clientDuChantier(tx: Ex, ctx: Contexte, chantierId: string): Promise<string> {
  const [c] = await tx
    .select({ clientId: s.chantiers.clientId })
    .from(s.chantiers)
    .where(and(eq(s.chantiers.organisationId, ctx.organisationId), eq(s.chantiers.id, chantierId)))
    .limit(1);
  if (!c) throw invalide(`Référence inconnue : chantierId = ${chantierId}.`);
  return c.clientId;
}

// ───────── Clients ─────────

export const clientsService = creerCrud<Client>({
  ressource: "clients",
  table: s.clients,
  prefixe: "cli",
  libelle: "Client",
  creation: z.clientCreation,
  modification: z.clientModification,
  recherche: [s.clients.nom, s.clients.raisonSociale, s.clients.email, s.clients.telephone],
  filtres: { type: s.clients.type, responsableId: s.clients.responsableId },
  references: { responsableId: "membre" },
  resume: (c) => c.nom,
  liens: (c) => ({ clientId: c.id }),
  proprio: async (ctx, action, c) => action !== "creer" && c.responsableId === ctx.utilisateurId,
  preparer: async (ctx, d, _tx, existant) => {
    if (!existant && d.responsableId === undefined) d.responsableId = ctx.role === "charge_affaires" ? ctx.utilisateurId : null;
    return d;
  },
});

// ───────── Contacts ─────────

export const contactsService = creerCrud<Contact>({
  ressource: "contacts",
  table: s.contacts,
  prefixe: "ctc",
  libelle: "Contact",
  creation: z.contactCreation,
  modification: z.contactModification,
  recherche: [s.contacts.nom, s.contacts.prenom, s.contacts.email, s.contacts.telephone],
  filtres: { clientId: s.contacts.clientId },
  references: { clientId: "clients" },
  resume: (c) => [c.prenom, c.nom].filter(Boolean).join(" "),
  liens: (c) => ({ clientId: c.clientId }),
  proprio: (ctx, _a, c, tx) => estResponsableClient(tx, ctx, c.clientId),
});

// ───────── Sites (adresses d'intervention) ─────────

export const sitesService = creerCrud<Site>({
  ressource: "sites",
  table: s.sites,
  prefixe: "sit",
  libelle: "Adresse",
  creation: z.siteCreation,
  modification: z.siteModification,
  recherche: [s.sites.adresse, s.sites.ville, s.sites.libelle, s.sites.codePostal],
  filtres: { clientId: s.sites.clientId, codePostal: s.sites.codePostal },
  references: { clientId: "clients" },
  resume: (x) => [x.adresse, x.codePostal, x.ville].filter(Boolean).join(" "),
  liens: (x) => ({ clientId: x.clientId }),
  proprio: (ctx, _a, x, tx) => estResponsableClient(tx, ctx, x.clientId),
});

// ───────── Chantiers ─────────

async function prochaineReference(tx: Tx, ctx: Contexte): Promise<string> {
  const annee = new Date().getFullYear();
  const prefixe = `CH-${annee}-`;
  const [r] = await tx
    .select({ max: sql<string | null>`max(${s.chantiers.reference})` })
    .from(s.chantiers)
    .where(and(eq(s.chantiers.organisationId, ctx.organisationId), like(s.chantiers.reference, `${prefixe}%`)));
  const n = r?.max ? Number(r.max.slice(prefixe.length)) + 1 : 1;
  return `${prefixe}${String(n).padStart(4, "0")}`;
}

export const chantiersService = creerCrud<Chantier>({
  ressource: "chantiers",
  table: s.chantiers,
  prefixe: "chn",
  libelle: "Chantier",
  creation: z.chantierCreation,
  modification: z.chantierModification,
  recherche: [s.chantiers.titre, s.chantiers.reference, s.chantiers.description],
  filtres: { statut: s.chantiers.statut, clientId: s.chantiers.clientId, chargeAffairesId: s.chantiers.chargeAffairesId, siteId: s.chantiers.siteId },
  references: { clientId: "clients", siteId: "sites", chargeAffairesId: "membre" },
  resume: (c) => `${c.reference} — ${c.titre}`,
  liens: (c) => ({ clientId: c.clientId, chantierId: c.id }),
  proprio: async (ctx, action, c, tx) =>
    action === "creer"
      ? c.chargeAffairesId === ctx.utilisateurId || (await estResponsableClient(tx, ctx, c.clientId))
      : c.chargeAffairesId === ctx.utilisateurId || (await estResponsableClient(tx, ctx, c.clientId)),
  preparer: async (ctx, d, tx, existant) => {
    const clientId = existant?.clientId ?? d.clientId;
    if (d.siteId) {
      const [site] = await tx
        .select({ clientId: s.sites.clientId })
        .from(s.sites)
        .where(and(eq(s.sites.organisationId, ctx.organisationId), eq(s.sites.id, d.siteId)))
        .limit(1);
      if (site && site.clientId !== clientId) throw invalide("L'adresse choisie n'appartient pas à ce client.", [{ champ: "siteId", message: "Adresse d'un autre client." }]);
    }
    if (!existant) {
      d.reference = await prochaineReference(tx, ctx);
      if (d.chargeAffairesId === undefined) {
        const [c] = await tx
          .select({ r: s.clients.responsableId })
          .from(s.clients)
          .where(and(eq(s.clients.organisationId, ctx.organisationId), eq(s.clients.id, d.clientId)))
          .limit(1);
        d.chargeAffairesId = c?.r ?? (ctx.role === "charge_affaires" ? ctx.utilisateurId : null);
      }
    }
    if (d.dateDebut && d.dateFin && d.dateFin < d.dateDebut) throw invalide("La date de fin précède la date de début.", [{ champ: "dateFin", message: "Avant la date de début." }]);
    return d;
  },
});

// ───────── Notes ─────────

export const notesService = creerCrud<Note>({
  ressource: "notes",
  table: s.notes,
  prefixe: "not",
  libelle: "Note",
  creation: z.noteCreation,
  modification: z.noteModification,
  recherche: [s.notes.contenu],
  filtres: { clientId: s.notes.clientId, chantierId: s.notes.chantierId, auteurId: s.notes.auteurId },
  references: { clientId: "clients", chantierId: "chantiers" },
  resume: (n) => (n.contenu.length > 60 ? n.contenu.slice(0, 57) + "…" : n.contenu),
  liens: (n) => ({ clientId: n.clientId, chantierId: n.chantierId }),
  proprio: async (ctx, action, n, tx) => (action === "creer" ? parentPossede(tx, ctx, n) : n.auteurId === ctx.utilisateurId),
  preparer: async (ctx, d, tx, existant) => {
    if (!existant) {
      d.auteurId = ctx.utilisateurId;
      if (d.chantierId && !d.clientId) d.clientId = await clientDuChantier(tx, ctx, d.chantierId);
    }
    return d;
  },
});

// ───────── Tâches ─────────

export const tachesService = creerCrud<Tache>({
  ressource: "taches",
  table: s.taches,
  prefixe: "tch",
  libelle: "Tâche",
  creation: z.tacheCreation,
  modification: z.tacheModification,
  recherche: [s.taches.titre, s.taches.description],
  filtres: { statut: s.taches.statut, assigneId: s.taches.assigneId, clientId: s.taches.clientId, chantierId: s.taches.chantierId, priorite: s.taches.priorite, echeance: s.taches.echeance },
  references: { assigneId: "membre", clientId: "clients", chantierId: "chantiers" },
  resume: (t) => t.titre,
  liens: (t) => ({ clientId: t.clientId, chantierId: t.chantierId }),
  proprio: async (ctx, action, t, tx) =>
    t.assigneId === ctx.utilisateurId || (action !== "creer" && t.creeParId === ctx.utilisateurId) || (ctx.role === "charge_affaires" && (await parentPossede(tx, ctx, t))),
  preparer: async (ctx, d, tx, existant) => {
    if (!existant) {
      d.creeParId = ctx.utilisateurId;
      if (d.assigneId === undefined) d.assigneId = ctx.utilisateurId;
      if (d.statut === "faite") d.faiteLe = new Date();
    } else if (d.statut && d.statut !== existant.statut) {
      d.faiteLe = d.statut === "faite" ? new Date() : null;
    }
    if (d.chantierId && !d.clientId && !existant?.clientId) d.clientId = await clientDuChantier(tx, ctx, d.chantierId);
    return d;
  },
});

// ───────── Pièces jointes (métadonnées ; le fichier vit dans le stockage, voir src/lib/stockage.ts) ─────────

export const piecesJointesService = creerCrud<PieceJointe>({
  ressource: "pieces_jointes",
  table: s.piecesJointes,
  prefixe: "pj",
  libelle: "Pièce jointe",
  creation: z.pieceJointeCreation,
  modification: z.pieceJointeModification,
  recherche: [s.piecesJointes.nom],
  filtres: { clientId: s.piecesJointes.clientId, chantierId: s.piecesJointes.chantierId },
  references: { clientId: "clients", chantierId: "chantiers" },
  resume: (p) => p.nom,
  liens: (p) => ({ clientId: p.clientId, chantierId: p.chantierId }),
  proprio: async (ctx, action, p, tx) => (action !== "creer" && p.televerseParId === ctx.utilisateurId) || (await parentPossede(tx, ctx, p)),
  preparer: async (ctx, d, tx, existant) => {
    if (!existant) {
      d.televerseParId = ctx.utilisateurId;
      if (d.chantierId && !d.clientId) d.clientId = await clientDuChantier(tx, ctx, d.chantierId);
    }
    return d;
  },
});

// ───────── Étiquettes ─────────

export const etiquettesService = creerCrud<Etiquette>({
  ressource: "etiquettes",
  table: s.etiquettes,
  prefixe: "eti",
  libelle: "Étiquette",
  creation: z.etiquetteCreation,
  modification: z.etiquetteModification,
  recherche: [s.etiquettes.nom],
  resume: (e) => e.nom,
});

export async function etiquettesDe(ctx: Contexte, typeRessource: "clients" | "chantiers", ressourceIds: string[]): Promise<Record<string, Etiquette[]>> {
  await exiger(ctx, "etiquettes", "lire");
  if (ressourceIds.length === 0) return {};
  const lignes = await ctx.db
    .select({ rid: s.etiquetages.ressourceId, e: s.etiquettes })
    .from(s.etiquetages)
    .innerJoin(s.etiquettes, eq(s.etiquettes.id, s.etiquetages.etiquetteId))
    .where(and(eq(s.etiquetages.organisationId, ctx.organisationId), eq(s.etiquetages.typeRessource, typeRessource), inArray(s.etiquetages.ressourceId, ressourceIds)))
    .orderBy(asc(s.etiquettes.nom));
  const r: Record<string, Etiquette[]> = {};
  for (const l of lignes) (r[l.rid] ??= []).push(l.e);
  return r;
}

/** Pose ou retire une étiquette : droit de modifier la ressource visée. */
export async function etiqueter(ctx: Contexte, entree: unknown, retirer = false) {
  const d = valider(z.etiquetageCreation, entree);
  const service = d.typeRessource === "clients" ? clientsService : chantiersService;
  const cible: any = await (service as typeof clientsService).charger(ctx.db, ctx, d.ressourceId);
  await exiger(ctx, d.typeRessource, "modifier", async () =>
    d.typeRessource === "clients" ? cible.responsableId === ctx.utilisateurId : cible.chargeAffairesId === ctx.utilisateurId || (await estResponsableClient(ctx.db, ctx, cible.clientId)),
  );
  return ctx.db.transaction(async (tx) => {
    await verifierReferences(tx, ctx, { etiquetteId: "etiquettes" }, d);
    if (retirer) {
      await tx
        .delete(s.etiquetages)
        .where(and(eq(s.etiquetages.organisationId, ctx.organisationId), eq(s.etiquetages.etiquetteId, d.etiquetteId), eq(s.etiquetages.typeRessource, d.typeRessource), eq(s.etiquetages.ressourceId, d.ressourceId)));
    } else {
      await tx.insert(s.etiquetages).values({ ...d, organisationId: ctx.organisationId, creeLe: new Date() }).onConflictDoNothing();
    }
    await journaliser(tx, ctx, {
      action: retirer ? "etiquette_retiree" : "etiquette_posee",
      typeRessource: d.typeRessource,
      ressourceId: d.ressourceId,
      resume: `Étiquette ${retirer ? "retirée" : "posée"}`,
      clientId: d.typeRessource === "clients" ? d.ressourceId : cible.clientId,
      chantierId: d.typeRessource === "chantiers" ? d.ressourceId : null,
    });
    return { ...d, retiree: retirer };
  });
}

// ───────── Journal d'activité (lecture seule) ─────────

const lectureSeule = { safeParse: () => ({ success: false, error: { issues: [{ path: [], message: "Lecture seule." }] } }) } as any;
export const activitesService = creerCrud<Activite>({
  ressource: "activites",
  table: s.activites,
  prefixe: "act",
  libelle: "Activité",
  creation: lectureSeule,
  modification: lectureSeule,
  recherche: [s.activites.resume],
  filtres: {
    clientId: s.activites.clientId,
    chantierId: s.activites.chantierId,
    typeRessource: s.activites.typeRessource,
    ressourceId: s.activites.ressourceId,
    acteurId: s.activites.acteurId,
    origine: s.activites.origine,
  },
  resume: (a) => a.resume,
});

// ───────── Vues composées pour l'interface ─────────

export async function ficheClient(ctx: Contexte, id: string) {
  const client = await clientsService.obtenir(ctx, id);
  const f = { clientId: id };
  const [contacts, sites, chantiers, notes, taches, activite, pj, etiq] = await Promise.all([
    contactsService.lister(ctx, { filtres: f, limite: 100 }),
    sitesService.lister(ctx, { filtres: f, limite: 100 }),
    chantiersService.lister(ctx, { filtres: f, limite: 100 }),
    notesService.lister(ctx, { filtres: f, limite: 50 }),
    tachesService.lister(ctx, { filtres: f, limite: 100 }),
    activitesService.lister(ctx, { filtres: f, limite: 30 }),
    piecesJointesService.lister(ctx, { filtres: f, limite: 50 }),
    etiquettesDe(ctx, "clients", [id]),
  ]);
  return {
    client,
    contacts: contacts.donnees.sort((a, b) => Number(b.principal) - Number(a.principal)),
    sites: sites.donnees,
    chantiers: chantiers.donnees,
    notes: notes.donnees.sort((a, b) => Number(b.epinglee) - Number(a.epinglee)),
    taches: taches.donnees,
    activite: activite.donnees,
    piecesJointes: pj.donnees,
    etiquettes: etiq[id] ?? [],
  };
}

export async function ficheChantier(ctx: Contexte, id: string) {
  const chantier = await chantiersService.obtenir(ctx, id);
  const f = { chantierId: id };
  const [client, site, notes, taches, activite] = await Promise.all([
    clientsService.obtenir(ctx, chantier.clientId),
    chantier.siteId ? sitesService.obtenir(ctx, chantier.siteId).catch(() => null) : null,
    notesService.lister(ctx, { filtres: f, limite: 50 }),
    tachesService.lister(ctx, { filtres: f, limite: 100 }),
    activitesService.lister(ctx, { filtres: f, limite: 30 }),
  ]);
  return { chantier, client, site, notes: notes.donnees, taches: taches.donnees, activite: activite.donnees };
}

/** « Ma journée » : tâches ouvertes de l'utilisateur, triées par échéance. */
export async function maJournee(ctx: Contexte, aujourdhui = new Date().toISOString().slice(0, 10)) {
  await exiger(ctx, "taches", "lire");
  const ouvertes = await ctx.db
    .select()
    .from(s.taches)
    .where(and(eq(s.taches.organisationId, ctx.organisationId), eq(s.taches.assigneId, ctx.utilisateurId), eq(s.taches.statut, "a_faire")))
    .orderBy(sql`${s.taches.echeance} asc nulls last`, desc(s.taches.priorite), asc(s.taches.creeLe))
    .limit(200);
  const faitesAujourdhui = await ctx.db
    .select()
    .from(s.taches)
    .where(
      and(
        eq(s.taches.organisationId, ctx.organisationId),
        eq(s.taches.assigneId, ctx.utilisateurId),
        eq(s.taches.statut, "faite"),
        sql`${s.taches.faiteLe} >= ${new Date(`${aujourdhui}T00:00:00`)}`,
      ),
    )
    .orderBy(desc(s.taches.faiteLe))
    .limit(50);
  return {
    enRetard: ouvertes.filter((t) => t.echeance && t.echeance < aujourdhui),
    aujourdhui: ouvertes.filter((t) => t.echeance === aujourdhui),
    aVenir: ouvertes.filter((t) => t.echeance && t.echeance > aujourdhui),
    sansDate: ouvertes.filter((t) => !t.echeance),
    faites: faitesAujourdhui,
  };
}

export async function tableauDeBord(ctx: Contexte) {
  await exiger(ctx, "clients", "lire");
  const o = ctx.organisationId;
  const n = (r: any) => Number((r.rows ?? r)[0]?.n ?? 0);
  const jour = new Date().toISOString().slice(0, 10);
  const [clientsN, chantiersActifs, mesTaches, retard, recents] = await Promise.all([
    ctx.db.execute(sql`select count(*)::int n from clients where organisation_id = ${o}`),
    ctx.db.execute(sql`select count(*)::int n from chantiers where organisation_id = ${o} and statut in ('planifie','en_cours')`),
    ctx.db.execute(sql`select count(*)::int n from taches where organisation_id = ${o} and assigne_id = ${ctx.utilisateurId} and statut = 'a_faire' and (echeance is null or echeance <= ${jour})`),
    ctx.db.execute(sql`select count(*)::int n from taches where organisation_id = ${o} and assigne_id = ${ctx.utilisateurId} and statut = 'a_faire' and echeance < ${jour}`),
    activitesService.lister(ctx, { limite: 8 }),
  ]);
  const parStatut = await ctx.db
    .select({ statut: s.chantiers.statut, n: sql<number>`count(*)::int` })
    .from(s.chantiers)
    .where(eq(s.chantiers.organisationId, o))
    .groupBy(s.chantiers.statut);
  return {
    clients: n(clientsN),
    chantiersActifs: n(chantiersActifs),
    tachesDuJour: n(mesTaches),
    tachesEnRetard: n(retard),
    chantiersParStatut: Object.fromEntries(parStatut.map((p) => [p.statut, Number(p.n)])) as Record<string, number>,
    activiteRecente: recents.donnees,
  };
}

export async function verifierExiste(ctx: Contexte, table: "clients" | "chantiers", id: string) {
  const t: any = table === "clients" ? s.clients : s.chantiers;
  const [r] = await ctx.db.select({ id: t.id }).from(t).where(and(eq(t.organisationId, ctx.organisationId), eq(t.id, id))).limit(1);
  if (!r) throw introuvable();
}
