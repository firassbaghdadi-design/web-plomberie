/**
 * Couche d'accès unique à la base.
 *  - DATABASE_URL défini  → Postgres (Neon / Vercel Postgres) via postgres-js.
 *  - sinon                → PGlite (Postgres embarqué en WASM) : fichier local en dev
 *                           (PGLITE_DIR, par défaut .data/pglite), mémoire sur Vercel (mode démo).
 * Les migrations versionnées (./drizzle) sont appliquées au démarrage ; en PGlite,
 * une base vide reçoit les données de démonstration.
 */
import { sql } from "drizzle-orm";
import type { PgDatabase, PgQueryResultHKT } from "drizzle-orm/pg-core";
import * as schema from "./schema";
import { MIGRATIONS } from "./migrations.generated";

export type Base = PgDatabase<PgQueryResultHKT, typeof schema>;
export type ModeBase = "postgres" | "pglite";

export const modeBase = (): ModeBase => (process.env.DATABASE_URL ? "postgres" : "pglite");
/** Mode démo : pas de vraie base de production (PGlite sur un serveur déployé). */
export const estModeDemo = () => modeBase() === "pglite" && (Boolean(process.env.VERCEL) || process.env.ATELIER_MODE_DEMO === "1");

export async function creerBasePostgres(url: string): Promise<Base> {
  const { default: postgres } = await import("postgres");
  const { drizzle } = await import("drizzle-orm/postgres-js");
  const client = postgres(url, { prepare: false, max: 5, idle_timeout: 20 });
  return drizzle(client, { schema }) as unknown as Base;
}

/** `dossier` : chemin d'un dossier, ou "memory://" pour une base éphémère. */
export async function creerBasePGlite(dossier = "memory://"): Promise<Base> {
  const { PGlite } = await import("@electric-sql/pglite");
  const { drizzle } = await import("drizzle-orm/pglite");
  if (dossier !== "memory://") {
    const fs = await import("node:fs");
    fs.mkdirSync(dossier, { recursive: true });
  }
  const client = new PGlite(dossier);
  await client.waitReady;
  return drizzle({ client, schema }) as unknown as Base;
}

/** Applique les migrations embarquées non encore jouées (verrou consultatif : sûr en parallèle). */
export async function migrer(db: Base): Promise<string[]> {
  const appliquees: string[] = [];
  await db.transaction(async (tx) => {
    await tx.execute(sql`select pg_advisory_xact_lock(724519)`);
    await tx.execute(sql`create table if not exists "__migrations" ("tag" text primary key, "empreinte" text not null, "applique_le" timestamptz not null default now())`);
    const res: any = await tx.execute(sql`select tag from "__migrations"`);
    const deja = new Set<string>((res.rows ?? res).map((r: { tag: string }) => r.tag));
    for (const m of MIGRATIONS) {
      if (deja.has(m.tag)) continue;
      for (const instruction of m.sql.split("--> statement-breakpoint")) {
        if (instruction.trim()) await tx.execute(sql.raw(instruction));
      }
      await tx.execute(sql`insert into "__migrations" ("tag", "empreinte") values (${m.tag}, ${m.empreinte})`);
      appliquees.push(m.tag);
    }
  });
  return appliquees;
}

type Global = { __atelierBase?: Promise<Base> };
const g = globalThis as unknown as Global;

async function initialiser(): Promise<Base> {
  if (modeBase() === "postgres") {
    const db = await creerBasePostgres(process.env.DATABASE_URL!);
    if (process.env.ATELIER_MIGRER_AU_DEMARRAGE !== "0") await migrer(db);
    return db;
  }
  const dossier = process.env.PGLITE_DIR || (process.env.VERCEL ? "memory://" : ".data/pglite");
  const db = await creerBasePGlite(dossier);
  await migrer(db);
  const { seed } = await import("./seed");
  const r: any = await db.execute(sql`select count(*)::int as n from organisations`);
  if (Number((r.rows ?? r)[0].n) === 0) await seed(db);
  return db;
}

/** La base de l'application (singleton par processus). */
export function base(): Promise<Base> {
  if (!g.__atelierBase) {
    g.__atelierBase = initialiser().catch((e) => {
      g.__atelierBase = undefined;
      throw e;
    });
  }
  return g.__atelierBase;
}

export { schema };
