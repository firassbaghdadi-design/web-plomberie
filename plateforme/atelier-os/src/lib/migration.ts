/**
 * Migration douce : les documents déjà enregistrés (production) n'ont pas les champs récents.
 * On complète à la lecture, sans jamais rien effacer ; l'écriture suivante les rend durables.
 */
import { FORMULES, REGLAGES_DEFAUT, type Db, type Prospect } from "./types";

/** Valeurs des champs ajoutés après la première version. */
export const PROSPECT_DEFAUTS = {
  formule: "",
  montantDevis: null,
  montantMensuel: null,
  signeLe: null,
} satisfies Partial<Prospect>;

const nombreOuNull = (v: unknown) => (typeof v === "number" && Number.isFinite(v) ? v : null);

export function normaliserProspect(p: Prospect): Prospect {
  const x = p as Prospect & Record<string, unknown>;
  for (const [k, v] of Object.entries(PROSPECT_DEFAUTS)) if (x[k] === undefined) x[k] = v;
  if (!(FORMULES as readonly string[]).includes(p.formule)) p.formule = "";
  p.montantDevis = nombreOuNull(p.montantDevis);
  p.montantMensuel = nombreOuNull(p.montantMensuel);
  if (typeof p.signeLe !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(p.signeLe)) p.signeLe = null;
  return p;
}

export function normaliserDb(db: Db): Db {
  db.reglages = { ...REGLAGES_DEFAUT, ...(db.reglages ?? {}) };
  for (const p of db.prospects) normaliserProspect(p);
  return db;
}
