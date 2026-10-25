/**
 * Couche de stockage. Tout le reste de l'application passe par readDb() et updateDb().
 *
 * - Production : un document JSON dans un magasin Vercel Blob privé (BLOB_READ_WRITE_TOKEN),
 *   écrit avec un contrôle d'ETag pour éviter que deux requêtes simultanées s'écrasent.
 * - Développement (sans jeton) : le fichier data/db.json.
 *
 * Pour changer de base (Postgres, KV...), il suffit de réécrire les deux fonctions de
 * `backend` ci-dessous ; aucune autre partie du code ne touche au stockage.
 */
import { promises as fs } from "fs";
import path from "path";
import { seedDb } from "@/data/seed";
import { MODELES } from "@/data/modeles";
import type { Db } from "./types";

interface Backend {
  nom: string;
  lire(): Promise<{ db: Db; version: string } | null>;
  ecrire(db: Db, version: string | null): Promise<void>;
}

class Conflit extends Error {}

const BLOB_PATH = "atelier-os/db.json";

const backendBlob: Backend = {
  nom: "vercel-blob",
  async lire() {
    const { get } = await import("@vercel/blob");
    const r = await get(BLOB_PATH, { access: "private", useCache: false });
    if (!r || r.statusCode !== 200) return null;
    const texte = await new Response(r.stream).text();
    return { db: JSON.parse(texte) as Db, version: r.blob.etag };
  },
  async ecrire(db, version) {
    const { put, BlobPreconditionFailedError } = await import("@vercel/blob");
    try {
      await put(BLOB_PATH, JSON.stringify(db), {
        access: "private",
        contentType: "application/json",
        addRandomSuffix: false,
        allowOverwrite: version !== null,
        ...(version ? { ifMatch: version } : {}),
      });
    } catch (e) {
      const msg = e instanceof Error ? e.message : "";
      if (e instanceof BlobPreconditionFailedError || /already exists|precondition/i.test(msg)) throw new Conflit();
      throw e;
    }
  },
};

const FICHIER = path.join(process.cwd(), "data", "db.json");

const backendFichier: Backend = {
  nom: "fichier-local",
  async lire() {
    try {
      const texte = await fs.readFile(FICHIER, "utf8");
      return { db: JSON.parse(texte) as Db, version: String(texte.length) + ":" + (await fs.stat(FICHIER)).mtimeMs };
    } catch {
      return null;
    }
  },
  async ecrire(db) {
    await fs.mkdir(path.dirname(FICHIER), { recursive: true });
    const tmp = FICHIER + ".tmp";
    await fs.writeFile(tmp, JSON.stringify(db, null, 1));
    await fs.rename(tmp, FICHIER);
  },
};

const backend: Backend = process.env.BLOB_READ_WRITE_TOKEN ? backendBlob : backendFichier;

export const stockage = () => backend.nom;

/** Les modèles du code font foi tant qu'ils ne sont pas modifiés : on complète un document ancien. */
function normaliser(db: Db): Db {
  db.prospects ??= [];
  db.evenements ??= [];
  db.emails ??= [];
  db.relances ??= [];
  if (!db.modeles?.length) db.modeles = MODELES;
  return db;
}

async function charger(): Promise<{ db: Db; version: string | null }> {
  const r = await backend.lire();
  if (r) return { db: normaliser(r.db), version: r.version };
  return { db: seedDb(), version: null };
}

export async function readDb(): Promise<Db> {
  return (await charger()).db;
}

/** Lit, applique la modification, réécrit. Relance en cas d'écriture concurrente. */
let verrou: Promise<unknown> = Promise.resolve();
export function updateDb<T>(fn: (db: Db) => T | Promise<T>): Promise<T> {
  const tache = verrou.then(() => essayer(fn));
  verrou = tache.catch(() => undefined);
  return tache;
}

async function essayer<T>(fn: (db: Db) => T | Promise<T>): Promise<T> {
  for (let i = 0; i < 6; i++) {
    const { db, version } = await charger();
    const resultat = await fn(db);
    try {
      await backend.ecrire(db, version);
      return resultat;
    } catch (e) {
      if (!(e instanceof Conflit)) throw e;
      await new Promise((r) => setTimeout(r, 40 + Math.random() * 120));
    }
  }
  throw new Error("Écriture impossible : trop de modifications simultanées.");
}

export const nouvelId = (prefixe: string) => `${prefixe}_${crypto.randomUUID().replace(/-/g, "").slice(0, 16)}`;
