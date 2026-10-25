import { creerBasePGlite, migrer, type Base } from "@/db";
import { seed, IDS } from "@/db/seed";
import * as s from "@/db/schema";
import type { Contexte, Role } from "@/lib/contexte";

export async function baseDeTest(): Promise<Base> {
  const db = await creerBasePGlite("memory://");
  await migrer(db);
  await seed(db);
  return db;
}

export function ctx(db: Base, utilisateurId: string, role: Role, organisationId: string = IDS.orgDemo, extra: Partial<Contexte> = {}): Contexte {
  return { db, organisationId, utilisateurId, role, adminPlateforme: false, origine: "systeme", ...extra };
}

/** Deuxième entreprise, totalement séparée, avec son dirigeant. */
export async function autreOrganisation(db: Base) {
  const now = new Date();
  await db.insert(s.organisations).values({ id: "org_autre", nom: "Chauffage Concurrent", slug: "concurrent", creeLe: now, majLe: now });
  await db.insert(s.utilisateurs).values({ id: "usr_autre", email: "patron@concurrent.fr", nom: "Patron Concurrent", creeLe: now, majLe: now });
  await db.insert(s.membres).values({ id: "mbr_autre", organisationId: "org_autre", utilisateurId: "usr_autre", role: "dirigeant", creeLe: now, majLe: now });
  return ctx(db, "usr_autre", "dirigeant", "org_autre");
}

export { IDS };
