/**
 * Fabrique de services CRUD multi-entreprise.
 *
 * Chaque ressource obtient lister / obtenir / creer / modifier / supprimer avec :
 *  - filtre systématique sur ctx.organisationId (isolation stricte) ;
 *  - validation zod des entrées ;
 *  - vérification des références (une ressource ne peut pointer que vers sa propre organisation) ;
 *  - droits par rôle (src/lib/permissions.ts) ;
 *  - journal d'activité dans la même transaction ;
 *  - pagination par curseur (cree_le desc, id desc), filtres d'égalité et recherche plein texte simple.
 */
import { and, desc, eq, gte, ilike, lt, or, type SQL } from "drizzle-orm";
import type { PgColumn, PgTable } from "drizzle-orm/pg-core";
import type { z } from "zod";
import type { Base } from "@/db";
import { chantiers, clients, membres, sites, etiquettes } from "@/db/schema";
import type { Contexte } from "@/lib/contexte";
import { ErreurApi, codePostgres, conflit, introuvable, invalide } from "@/lib/erreurs";
import { nouvelId } from "@/lib/ids";
import { exiger, type Action, type Ressource } from "@/lib/permissions";
import { journaliser, differences } from "./journal";

export type Tx = Parameters<Parameters<Base["transaction"]>[0]>[0];
type Executeur = Base | Tx;

export interface ParametresListe {
  limite?: number;
  curseur?: string | null;
  q?: string | null;
  filtres?: Record<string, string | undefined | null>;
  majDepuis?: string | null;
}
export interface Page<T> {
  donnees: T[];
  curseurSuivant: string | null;
}

type Reference = "clients" | "chantiers" | "sites" | "membre" | "etiquettes";

export interface OptionsCrud<L extends Record<string, any>> {
  ressource: Ressource;
  table: PgTable & Record<string, any>;
  prefixe: string;
  libelle: string;
  creation: z.ZodType<any, any>;
  modification: z.ZodType<any, any>;
  recherche?: PgColumn[];
  filtres?: Record<string, PgColumn>;
  references?: Record<string, Reference>;
  resume: (l: L) => string;
  liens?: (l: L) => { clientId?: string | null; chantierId?: string | null };
  /** Propriété de la cible pour les règles « proprio » (chargé d'affaires, auteur…). */
  proprio?: (ctx: Contexte, action: Action, l: Partial<L>, tx: Executeur) => Promise<boolean>;
  /** Complète / normalise les données avant insertion (valeurs par défaut, cohérence). */
  preparer?: (ctx: Contexte, d: any, tx: Tx, existant?: L) => Promise<any>;
}

export function encoderCurseur(date: Date, id: string): string {
  return Buffer.from(JSON.stringify([date.toISOString(), id])).toString("base64url");
}
export function decoderCurseur(c: string): [Date, string] {
  try {
    const [d, id] = JSON.parse(Buffer.from(c, "base64url").toString("utf8"));
    const date = new Date(d);
    if (Number.isNaN(date.getTime()) || typeof id !== "string") throw new Error();
    return [date, id];
  } catch {
    throw invalide("Curseur de pagination invalide.");
  }
}

export function valider<S extends z.ZodType<any, any>>(schema: S, donnees: unknown): z.output<S> {
  const r = schema.safeParse(donnees);
  if (!r.success) {
    const details = r.error.issues.map((i) => ({ champ: i.path.join("."), message: i.message }));
    throw invalide(details[0]?.message ?? "Données invalides.", details);
  }
  return r.data;
}

const TABLES_REF = { clients, chantiers, sites, etiquettes } as const;

export async function verifierReferences(tx: Executeur, ctx: Contexte, refs: Record<string, Reference> | undefined, d: Record<string, any>) {
  if (!refs) return;
  for (const [champ, type] of Object.entries(refs)) {
    const valeur = d[champ];
    if (valeur === undefined || valeur === null) continue;
    let ok: boolean;
    if (type === "membre") {
      const r = await tx
        .select({ id: membres.id })
        .from(membres)
        .where(and(eq(membres.organisationId, ctx.organisationId), eq(membres.utilisateurId, valeur), eq(membres.actif, true)))
        .limit(1);
      ok = r.length > 0;
    } else {
      const t: any = TABLES_REF[type];
      const r = await tx.select({ id: t.id }).from(t).where(and(eq(t.organisationId, ctx.organisationId), eq(t.id, valeur))).limit(1);
      ok = r.length > 0;
    }
    if (!ok) throw invalide(`Référence inconnue : ${champ} = ${valeur}.`, [{ champ, message: "Introuvable dans votre organisation." }]);
  }
}

function traduireErreurBase(e: unknown, libelle: string): never {
  if (e instanceof ErreurApi) throw e;
  const code = codePostgres(e);
  if (code === "23505") throw conflit(`${libelle} : cette valeur existe déjà.`);
  if (code === "23503") throw invalide("Référence invalide.");
  throw e;
}

export function creerCrud<L extends Record<string, any>>(o: OptionsCrud<L>) {
  const t = o.table as any;

  async function charger(tx: Executeur, ctx: Contexte, id: string): Promise<L> {
    const [l] = await tx.select().from(t).where(and(eq(t.organisationId, ctx.organisationId), eq(t.id, id))).limit(1);
    if (!l) throw introuvable(o.libelle);
    return l as L;
  }

  async function lister(ctx: Contexte, p: ParametresListe = {}): Promise<Page<L>> {
    await exiger(ctx, o.ressource, "lire");
    const limite = Math.min(Math.max(Number(p.limite) || 25, 1), 100);
    const conds: (SQL | undefined)[] = [eq(t.organisationId, ctx.organisationId)];
    for (const [cle, valeur] of Object.entries(p.filtres ?? {})) {
      if (valeur === undefined || valeur === null || valeur === "") continue;
      const col = o.filtres?.[cle];
      if (!col) throw invalide(`Filtre inconnu : ${cle}.`);
      conds.push(eq(col, valeur));
    }
    if (p.q && o.recherche?.length) {
      const motif = `%${p.q.trim().replace(/[%_\\]/g, (c) => "\\" + c)}%`;
      conds.push(or(...o.recherche.map((c) => ilike(c, motif))));
    }
    if (p.majDepuis) {
      const d = new Date(p.majDepuis);
      if (Number.isNaN(d.getTime())) throw invalide("majDepuis doit être une date ISO 8601.");
      conds.push(gte(t.majLe ?? t.creeLe, d));
    }
    if (p.curseur) {
      const [date, id] = decoderCurseur(p.curseur);
      conds.push(or(lt(t.creeLe, date), and(eq(t.creeLe, date), lt(t.id, id))));
    }
    const lignes = (await ctx.db
      .select()
      .from(t)
      .where(and(...conds))
      .orderBy(desc(t.creeLe), desc(t.id))
      .limit(limite + 1)) as L[];
    const suite = lignes.length > limite;
    const donnees = suite ? lignes.slice(0, limite) : lignes;
    const der = donnees[donnees.length - 1];
    return { donnees, curseurSuivant: suite && der ? encoderCurseur(der.creeLe, der.id) : null };
  }

  async function obtenir(ctx: Contexte, id: string): Promise<L> {
    await exiger(ctx, o.ressource, "lire");
    return charger(ctx.db, ctx, id);
  }

  async function creer(ctx: Contexte, entree: unknown): Promise<L> {
    let d = valider(o.creation, entree);
    try {
      return await ctx.db.transaction(async (tx) => {
        if (o.preparer) d = await o.preparer(ctx, d, tx);
        await verifierReferences(tx, ctx, o.references, d);
        await exiger(ctx, o.ressource, "creer", () => o.proprio?.(ctx, "creer", d, tx) ?? false);
        const maintenant = new Date();
        const ligne = { ...d, id: nouvelId(o.prefixe), organisationId: ctx.organisationId, creeLe: maintenant, ...(t.majLe ? { majLe: maintenant } : {}) };
        const [cree] = (await tx.insert(t).values(ligne).returning()) as L[];
        await journaliser(tx, ctx, {
          action: "creation",
          typeRessource: o.ressource,
          ressourceId: cree.id,
          resume: `${o.libelle} créé : ${o.resume(cree)}`,
          ...(o.liens?.(cree) ?? {}),
        });
        return cree;
      });
    } catch (e) {
      traduireErreurBase(e, o.libelle);
    }
  }

  async function modifier(ctx: Contexte, id: string, entree: unknown): Promise<L> {
    let d = valider(o.modification, entree);
    try {
      return await ctx.db.transaction(async (tx) => {
        const avant = await charger(tx, ctx, id);
        await exiger(ctx, o.ressource, "modifier", () => o.proprio?.(ctx, "modifier", avant, tx) ?? false);
        if (o.preparer) d = await o.preparer(ctx, d, tx, avant);
        await verifierReferences(tx, ctx, o.references, d);
        const changements = differences(avant, d);
        if (Object.keys(changements).length === 0) return avant;
        const [apres] = (await tx
          .update(t)
          .set({ ...d, ...(t.majLe ? { majLe: new Date() } : {}) })
          .where(and(eq(t.organisationId, ctx.organisationId), eq(t.id, id)))
          .returning()) as L[];
        await journaliser(tx, ctx, {
          action: "modification",
          typeRessource: o.ressource,
          ressourceId: id,
          resume: `${o.libelle} modifié : ${o.resume(apres)}`,
          changements,
          ...(o.liens?.(apres) ?? {}),
        });
        return apres;
      });
    } catch (e) {
      traduireErreurBase(e, o.libelle);
    }
  }

  async function supprimer(ctx: Contexte, id: string): Promise<void> {
    try {
      await ctx.db.transaction(async (tx) => {
        const avant = await charger(tx, ctx, id);
        await exiger(ctx, o.ressource, "supprimer", () => o.proprio?.(ctx, "supprimer", avant, tx) ?? false);
        await tx.delete(t).where(and(eq(t.organisationId, ctx.organisationId), eq(t.id, id)));
        await journaliser(tx, ctx, {
          action: "suppression",
          typeRessource: o.ressource,
          ressourceId: id,
          resume: `${o.libelle} supprimé : ${o.resume(avant)}`,
          ...(o.liens?.(avant) ?? {}),
        });
      });
    } catch (e) {
      traduireErreurBase(e, o.libelle);
    }
  }

  return { lister, obtenir, creer, modifier, supprimer, charger, options: o };
}

export type ServiceCrud = ReturnType<typeof creerCrud<any>>;
