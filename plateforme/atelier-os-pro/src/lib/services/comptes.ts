/**
 * Comptes : connexion, organisation, équipe (membres, invitations), jetons API, administration plateforme.
 */
import { and, asc, desc, eq, isNull, sql } from "drizzle-orm";
import type { Base } from "@/db";
import * as s from "@/db/schema";
import type { Contexte, Role } from "@/lib/contexte";
import { aleatoire, hacherMotDePasse, sha256, verifierMotDePasse } from "@/lib/crypto";
import { ErreurApi, conflit, interdit, introuvable, invalide } from "@/lib/erreurs";
import { nouvelId } from "@/lib/ids";
import { exiger, PORTEES_RESSOURCES } from "@/lib/permissions";
import * as z from "@/lib/schemas";
import { valider } from "./crud";
import { differences, journaliser } from "./journal";

export type Organisation = typeof s.organisations.$inferSelect;

export interface UtilisateurPublic {
  id: string;
  email: string;
  nom: string;
  telephone: string | null;
  estAdminPlateforme: boolean;
}
const publicUtilisateur = (u: typeof s.utilisateurs.$inferSelect): UtilisateurPublic => ({
  id: u.id,
  email: u.email,
  nom: u.nom,
  telephone: u.telephone,
  estAdminPlateforme: u.estAdminPlateforme,
});

// ───────── Connexion et sessions ─────────

export async function connexion(db: Base, email: string, motDePasse: string) {
  const [u] = await db.select().from(s.utilisateurs).where(eq(s.utilisateurs.email, email.trim().toLowerCase())).limit(1);
  // Hash factice pour ne pas révéler l'existence du compte par le temps de réponse.
  const ok = await verifierMotDePasse(motDePasse, u?.motDePasseHash ?? "scrypt$16384$8$1$AAAAAAAAAAAAAAAAAAAAAA$AAAA");
  if (!u || !ok) return null;
  const orgs = await organisationsAccessibles(db, u.id, u.estAdminPlateforme);
  if (orgs.length === 0) return null;
  await db.update(s.utilisateurs).set({ derniereConnexionLe: new Date() }).where(eq(s.utilisateurs.id, u.id));
  return { utilisateur: u, organisations: orgs };
}

export async function organisationsAccessibles(db: Base, utilisateurId: string, admin: boolean) {
  const miennes = await db
    .select({ id: s.organisations.id, nom: s.organisations.nom, role: s.membres.role, estPlateforme: s.organisations.estPlateforme })
    .from(s.membres)
    .innerJoin(s.organisations, eq(s.organisations.id, s.membres.organisationId))
    .where(and(eq(s.membres.utilisateurId, utilisateurId), eq(s.membres.actif, true)))
    .orderBy(desc(s.organisations.estPlateforme), asc(s.organisations.nom));
  if (!admin) return miennes;
  const toutes = await db
    .select({ id: s.organisations.id, nom: s.organisations.nom, estPlateforme: s.organisations.estPlateforme })
    .from(s.organisations)
    .orderBy(desc(s.organisations.estPlateforme), asc(s.organisations.nom));
  return toutes.map((o) => ({ ...o, role: (miennes.find((m) => m.id === o.id)?.role ?? "dirigeant") as Role }));
}

/** Reconstruit le contexte depuis une session signée ; null si l'accès n'est plus valide. */
export async function contexteDepuisSession(db: Base, p: { u: string; o: string; v: number }): Promise<(Contexte & { utilisateur: UtilisateurPublic }) | null> {
  const [u] = await db.select().from(s.utilisateurs).where(eq(s.utilisateurs.id, p.u)).limit(1);
  if (!u || u.versionSession !== p.v) return null;
  const [m] = await db
    .select({ role: s.membres.role })
    .from(s.membres)
    .where(and(eq(s.membres.utilisateurId, u.id), eq(s.membres.organisationId, p.o), eq(s.membres.actif, true)))
    .limit(1);
  if (!m && !u.estAdminPlateforme) return null;
  if (!m) {
    const [org] = await db.select({ id: s.organisations.id }).from(s.organisations).where(eq(s.organisations.id, p.o)).limit(1);
    if (!org) return null;
  }
  return {
    db,
    organisationId: p.o,
    utilisateurId: u.id,
    role: (m?.role ?? "dirigeant") as Role,
    adminPlateforme: u.estAdminPlateforme,
    origine: "interface",
    utilisateur: publicUtilisateur(u),
  };
}

// ───────── Organisation ─────────

export async function obtenirOrganisation(ctx: Contexte): Promise<Organisation> {
  await exiger(ctx, "organisation", "lire");
  const [o] = await ctx.db.select().from(s.organisations).where(eq(s.organisations.id, ctx.organisationId)).limit(1);
  if (!o) throw introuvable("Organisation");
  return o;
}

export async function modifierOrganisation(ctx: Contexte, entree: unknown): Promise<Organisation> {
  await exiger(ctx, "organisation", "modifier");
  const d = valider(z.organisationModification, entree);
  return ctx.db.transaction(async (tx) => {
    const [avant] = await tx.select().from(s.organisations).where(eq(s.organisations.id, ctx.organisationId)).limit(1);
    const changements = differences(avant, d);
    if (Object.keys(changements).length === 0) return avant;
    const [apres] = await tx.update(s.organisations).set({ ...d, majLe: new Date() }).where(eq(s.organisations.id, ctx.organisationId)).returning();
    await journaliser(tx, ctx, { action: "modification", typeRessource: "organisation", ressourceId: ctx.organisationId, resume: "Réglages de l'organisation modifiés", changements });
    return apres;
  });
}

// ───────── Membres ─────────

export async function listerMembres(ctx: Contexte) {
  await exiger(ctx, "membres", "lire");
  const lignes = await ctx.db
    .select({ m: s.membres, u: s.utilisateurs })
    .from(s.membres)
    .innerJoin(s.utilisateurs, eq(s.utilisateurs.id, s.membres.utilisateurId))
    .where(eq(s.membres.organisationId, ctx.organisationId))
    .orderBy(desc(s.membres.actif), asc(s.utilisateurs.nom));
  return lignes.map(({ m, u }) => ({ ...m, utilisateur: publicUtilisateur(u), derniereConnexionLe: u.derniereConnexionLe }));
}
export type Membre = Awaited<ReturnType<typeof listerMembres>>[number];

export async function obtenirMembre(ctx: Contexte, id: string): Promise<Membre> {
  const m = (await listerMembres(ctx)).find((x) => x.id === id);
  if (!m) throw introuvable("Membre");
  return m;
}

export async function modifierMembre(ctx: Contexte, id: string, entree: unknown): Promise<Membre> {
  await exiger(ctx, "membres", "modifier");
  const d = valider(z.membreModification, entree);
  await ctx.db.transaction(async (tx) => {
    const [avant] = await tx.select().from(s.membres).where(and(eq(s.membres.organisationId, ctx.organisationId), eq(s.membres.id, id))).limit(1);
    if (!avant) throw introuvable("Membre");
    const perdDirigeant = avant.role === "dirigeant" && avant.actif && (d.role && d.role !== "dirigeant" || d.actif === false);
    if (perdDirigeant) {
      const [r] = await tx
        .select({ n: sql<number>`count(*)::int` })
        .from(s.membres)
        .where(and(eq(s.membres.organisationId, ctx.organisationId), eq(s.membres.role, "dirigeant"), eq(s.membres.actif, true)));
      if (Number(r.n) <= 1) throw invalide("L'organisation doit garder au moins un dirigeant actif.");
    }
    const changements = differences(avant, d);
    if (Object.keys(changements).length === 0) return;
    await tx.update(s.membres).set({ ...d, majLe: new Date() }).where(eq(s.membres.id, id));
    if (d.actif === false) {
      // Coupe les sessions de la personne désactivée.
      await tx.update(s.utilisateurs).set({ versionSession: sql`${s.utilisateurs.versionSession} + 1` }).where(eq(s.utilisateurs.id, avant.utilisateurId));
    }
    await journaliser(tx, ctx, { action: "modification", typeRessource: "membres", ressourceId: id, resume: "Membre de l'équipe modifié", changements });
  });
  return obtenirMembre(ctx, id);
}

// ───────── Invitations ─────────

const DUREE_INVITATION_JOURS = 7;
type Invitation = typeof s.invitations.$inferSelect;
const publicInvitation = ({ jetonHash: _h, ...i }: Invitation) => i;

export async function listerInvitations(ctx: Contexte) {
  await exiger(ctx, "invitations", "lire");
  const lignes = await ctx.db
    .select()
    .from(s.invitations)
    .where(and(eq(s.invitations.organisationId, ctx.organisationId), isNull(s.invitations.accepteeLe), isNull(s.invitations.annuleeLe)))
    .orderBy(desc(s.invitations.creeLe));
  return lignes.map(publicInvitation);
}

/** Crée une invitation ; renvoie le lien (le jeton brut n'est jamais stocké). */
export async function creerInvitation(ctx: Contexte, entree: unknown, origine = "") {
  await exiger(ctx, "invitations", "creer");
  const d = valider(z.invitationCreation, entree);
  const email = d.email.toLowerCase();
  const deja = await ctx.db
    .select({ id: s.membres.id })
    .from(s.membres)
    .innerJoin(s.utilisateurs, eq(s.utilisateurs.id, s.membres.utilisateurId))
    .where(and(eq(s.membres.organisationId, ctx.organisationId), eq(s.utilisateurs.email, email)))
    .limit(1);
  if (deja.length) throw conflit("Cette personne fait déjà partie de l'équipe.");
  const jeton = aleatoire(24);
  const inv = await ctx.db.transaction(async (tx) => {
    const [i] = await tx
      .insert(s.invitations)
      .values({
        id: nouvelId("inv"),
        organisationId: ctx.organisationId,
        email,
        role: d.role,
        jetonHash: sha256(jeton),
        inviteParId: ctx.utilisateurId,
        expireLe: new Date(Date.now() + DUREE_INVITATION_JOURS * 86400_000),
        creeLe: new Date(),
      })
      .returning();
    await journaliser(tx, ctx, { action: "creation", typeRessource: "invitations", ressourceId: i.id, resume: `Invitation envoyée à ${email}` });
    return i;
  });
  return { ...publicInvitation(inv), lien: `${origine}/invitation/${jeton}` };
}

export async function annulerInvitation(ctx: Contexte, id: string) {
  await exiger(ctx, "invitations", "supprimer");
  await ctx.db.transaction(async (tx) => {
    const r = await tx
      .update(s.invitations)
      .set({ annuleeLe: new Date() })
      .where(and(eq(s.invitations.organisationId, ctx.organisationId), eq(s.invitations.id, id), isNull(s.invitations.accepteeLe)))
      .returning();
    if (!r.length) throw introuvable("Invitation");
    await journaliser(tx, ctx, { action: "suppression", typeRessource: "invitations", ressourceId: id, resume: `Invitation annulée (${r[0].email})` });
  });
}

export async function consulterInvitation(db: Base, jeton: string) {
  const [l] = await db
    .select({ i: s.invitations, org: s.organisations.nom })
    .from(s.invitations)
    .innerJoin(s.organisations, eq(s.organisations.id, s.invitations.organisationId))
    .where(eq(s.invitations.jetonHash, sha256(jeton)))
    .limit(1);
  if (!l || l.i.accepteeLe || l.i.annuleeLe || l.i.expireLe < new Date()) return null;
  const [existant] = await db.select({ id: s.utilisateurs.id }).from(s.utilisateurs).where(eq(s.utilisateurs.email, l.i.email)).limit(1);
  return { ...publicInvitation(l.i), organisation: l.org, compteExistant: Boolean(existant) };
}

/** Accepte une invitation : crée le compte (ou rattache un compte existant après vérification du mot de passe). */
export async function accepterInvitation(db: Base, jeton: string, entree: unknown) {
  const inv = await consulterInvitation(db, jeton);
  if (!inv) throw new ErreurApi(410, "invitation_invalide", "Ce lien d'invitation n'est plus valable.");
  const d = valider(inv.compteExistant ? z.acceptationInvitation.partial({ nom: true }) : z.acceptationInvitation, entree);
  return db.transaction(async (tx) => {
    let [u] = await tx.select().from(s.utilisateurs).where(eq(s.utilisateurs.email, inv.email)).limit(1);
    if (u) {
      if (!(await verifierMotDePasse(d.motDePasse, u.motDePasseHash))) throw invalide("Mot de passe incorrect pour ce compte existant.");
    } else {
      [u] = await tx
        .insert(s.utilisateurs)
        .values({ id: nouvelId("usr"), email: inv.email, nom: d.nom!, motDePasseHash: await hacherMotDePasse(d.motDePasse), creeLe: new Date(), majLe: new Date() })
        .returning();
    }
    const m = { id: nouvelId("mbr"), organisationId: inv.organisationId, utilisateurId: u.id, role: inv.role, creeLe: new Date(), majLe: new Date() };
    await tx.insert(s.membres).values(m).onConflictDoUpdate({ target: [s.membres.organisationId, s.membres.utilisateurId], set: { actif: true, role: inv.role } });
    await tx.update(s.invitations).set({ accepteeLe: new Date() }).where(eq(s.invitations.id, inv.id));
    const ctx = { db, organisationId: inv.organisationId, utilisateurId: u.id, role: inv.role, adminPlateforme: false, origine: "interface" } as Contexte;
    await journaliser(tx, ctx, { action: "invitation_acceptee", typeRessource: "membres", ressourceId: m.id, resume: `${u.nom} a rejoint l'équipe` });
    return { utilisateur: u, organisationId: inv.organisationId };
  });
}

export async function changerMotDePasse(ctx: Contexte, actuel: string, nouveau: string) {
  if (nouveau.length < 10) throw invalide("10 caractères minimum.");
  const [u] = await ctx.db.select().from(s.utilisateurs).where(eq(s.utilisateurs.id, ctx.utilisateurId)).limit(1);
  if (!u || !(await verifierMotDePasse(actuel, u.motDePasseHash))) throw invalide("Mot de passe actuel incorrect.");
  const [apres] = await ctx.db
    .update(s.utilisateurs)
    .set({ motDePasseHash: await hacherMotDePasse(nouveau), versionSession: u.versionSession + 1, majLe: new Date() })
    .where(eq(s.utilisateurs.id, u.id))
    .returning();
  return apres;
}

// ───────── Jetons API ─────────

type Jeton = typeof s.jetonsApi.$inferSelect;
const publicJeton = ({ hash: _h, ...j }: Jeton) => j;
export const PORTEES_DISPONIBLES = ["*:lecture", "*:ecriture", ...PORTEES_RESSOURCES.flatMap((r) => [`${r}:lecture`, `${r}:ecriture`])];

export async function listerJetons(ctx: Contexte) {
  await exiger(ctx, "jetons", "lire");
  const l = await ctx.db.select().from(s.jetonsApi).where(eq(s.jetonsApi.organisationId, ctx.organisationId)).orderBy(desc(s.jetonsApi.creeLe));
  return l.map(publicJeton);
}

/** Crée un jeton. Le secret n'est renvoyé qu'une fois ; seul son hash est conservé. */
export async function creerJeton(ctx: Contexte, entree: unknown) {
  await exiger(ctx, "jetons", "creer");
  const d = valider(z.jetonCreation, entree);
  const inconnues = d.portees.filter((p) => !PORTEES_DISPONIBLES.includes(p));
  if (inconnues.length) throw invalide(`Portée inconnue : ${inconnues.join(", ")}.`);
  const prefixe = `aos_${nouvelId("x", 8).slice(2)}`;
  const secret = `${prefixe}_${aleatoire(24)}`;
  const j = await ctx.db.transaction(async (tx) => {
    const [j] = await tx
      .insert(s.jetonsApi)
      .values({
        id: nouvelId("jet"),
        organisationId: ctx.organisationId,
        utilisateurId: ctx.utilisateurId,
        nom: d.nom,
        prefixe,
        hash: sha256(secret),
        portees: d.portees,
        expireLe: d.expireLe ? new Date(d.expireLe) : null,
        creeLe: new Date(),
      })
      .returning();
    await journaliser(tx, ctx, { action: "creation", typeRessource: "jetons", ressourceId: j.id, resume: `Jeton API créé : ${d.nom} (${prefixe}…)` });
    return j;
  });
  return { ...publicJeton(j), secret };
}

export async function revoquerJeton(ctx: Contexte, id: string) {
  await exiger(ctx, "jetons", "supprimer");
  await ctx.db.transaction(async (tx) => {
    const r = await tx
      .update(s.jetonsApi)
      .set({ revoqueLe: new Date() })
      .where(and(eq(s.jetonsApi.organisationId, ctx.organisationId), eq(s.jetonsApi.id, id), isNull(s.jetonsApi.revoqueLe)))
      .returning();
    if (!r.length) throw introuvable("Jeton");
    await journaliser(tx, ctx, { action: "revocation", typeRessource: "jetons", ressourceId: id, resume: `Jeton API révoqué : ${r[0].nom}` });
  });
}

/** Authentifie `Authorization: Bearer aos_…` ; le jeton agit avec le rôle de son créateur, restreint par ses portées. */
export async function contexteDepuisJeton(db: Base, brut: string): Promise<Contexte | null> {
  const m = /^(aos_[0-9a-z]{8})_[A-Za-z0-9_-]{20,}$/.exec(brut);
  if (!m) return null;
  const [l] = await db
    .select({ j: s.jetonsApi, role: s.membres.role, actif: s.membres.actif, admin: s.utilisateurs.estAdminPlateforme })
    .from(s.jetonsApi)
    .innerJoin(s.utilisateurs, eq(s.utilisateurs.id, s.jetonsApi.utilisateurId))
    .leftJoin(s.membres, and(eq(s.membres.utilisateurId, s.jetonsApi.utilisateurId), eq(s.membres.organisationId, s.jetonsApi.organisationId)))
    .where(eq(s.jetonsApi.prefixe, m[1]))
    .limit(1);
  if (!l || l.j.hash !== sha256(brut) || l.j.revoqueLe || (l.j.expireLe && l.j.expireLe < new Date())) return null;
  if (!l.admin && (!l.role || !l.actif)) return null;
  if (!l.j.dernierUsageLe || Date.now() - l.j.dernierUsageLe.getTime() > 60_000) {
    await db.update(s.jetonsApi).set({ dernierUsageLe: new Date() }).where(eq(s.jetonsApi.id, l.j.id));
  }
  return {
    db,
    organisationId: l.j.organisationId,
    utilisateurId: l.j.utilisateurId,
    role: (l.role ?? "dirigeant") as Role,
    adminPlateforme: l.admin,
    origine: "api",
    jetonId: l.j.id,
    portees: l.j.portees,
  };
}

// ───────── Administration plateforme ─────────

export async function listerOrganisations(ctx: Contexte) {
  if (!ctx.adminPlateforme) throw interdit("Réservé à l'administration de la plateforme.");
  const r: any = await ctx.db.execute(sql`
    select o.id, o.nom, o.slug, o.est_plateforme as "estPlateforme", o.cree_le as "creeLe",
      (select count(*)::int from membres m where m.organisation_id = o.id and m.actif) as membres,
      (select count(*)::int from clients c where c.organisation_id = o.id) as clients
    from organisations o order by o.est_plateforme desc, o.nom asc`);
  return (r.rows ?? r) as { id: string; nom: string; slug: string; estPlateforme: boolean; creeLe: string; membres: number; clients: number }[];
}

export async function creerOrganisation(ctx: Contexte, entree: { nom: string; emailDirigeant: string }, origine = "") {
  if (!ctx.adminPlateforme) throw interdit("Réservé à l'administration de la plateforme.");
  const nom = String(entree.nom ?? "").trim();
  if (!nom) throw invalide("Le nom est obligatoire.");
  const slug =
    nom
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 40) +
    "-" +
    nouvelId("x", 4).slice(2);
  const [org] = await ctx.db.insert(s.organisations).values({ id: nouvelId("org"), nom, slug, creeLe: new Date(), majLe: new Date() }).returning();
  const sous: Contexte = { ...ctx, organisationId: org.id, role: "dirigeant" };
  const invitation = await creerInvitation(sous, { email: entree.emailDirigeant, role: "dirigeant" }, origine);
  return { organisation: org, invitation };
}
