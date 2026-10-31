/**
 * Migration douce : les documents déjà enregistrés (production) n'ont pas les champs récents.
 * On complète à la lecture, sans jamais rien effacer ; l'écriture suivante les rend durables.
 */
import { FORMULES, METIERS, REGLAGES_DEFAUT, type Db, type Prospect } from "./types";

/** « 3,7/5 (63 avis) » → { note: 3.7, avis: 63 } */
export function lireGoogle(texte: string): { note: number | null; avis: number | null } {
  const m = /(\d(?:[.,]\d)?)\s*\/\s*5(?:\s*\((\d[\d\s\u202f]*)\s*avis\))?/i.exec(texte);
  if (!m) return { note: null, avis: null };
  const note = Number(m[1].replace(",", "."));
  return { note: note >= 0 && note <= 5 ? note : null, avis: m[2] ? Number(m[2].replace(/\D/g, "")) : null };
}

/** Valeurs des champs ajoutés après la première version. */
export const PROSPECT_DEFAUTS = {
  metier: "",
  source: "",
  noteGoogle: null,
  avisGoogle: null,
  pointsFaibles: "",
  prochaineAction: "",
  prochaineActionLe: null,
  formule: "",
  montantDevis: null,
  montantMensuel: null,
  signeLe: null,
} satisfies Partial<Prospect>;

const nombreOuNull = (v: unknown) => (typeof v === "number" && Number.isFinite(v) ? v : null);

export function normaliserProspect(p: Prospect): Prospect {
  const x = p as Prospect & Record<string, unknown>;
  // Documents antérieurs aux champs de vente : tous les prospects d'alors étaient des plombiers,
  // et la note Google figurait dans les notes (« Google : 3,7/5 (63 avis) »).
  if (x.metier === undefined) x.metier = "plombier";
  if (x.noteGoogle === undefined) {
    const g = /Google\s*:\s*([^.\n]*)/i.exec(p.notes ?? "");
    const noteSurGoogle = /Not[ée]+ [^.\n]*sur Google/i.exec(p.notes ?? "");
    const { note, avis } = lireGoogle(g?.[1] ?? noteSurGoogle?.[0] ?? "");
    x.noteGoogle = note;
    x.avisGoogle = avis;
  }
  for (const [k, v] of Object.entries(PROSPECT_DEFAUTS)) if (x[k] === undefined) x[k] = v;
  if (!(FORMULES as readonly string[]).includes(p.formule)) p.formule = "";
  if (!(METIERS as readonly string[]).includes(p.metier)) p.metier = "";
  for (const k of ["source", "pointsFaibles", "prochaineAction"] as const) if (typeof p[k] !== "string") p[k] = "";
  p.noteGoogle = nombreOuNull(p.noteGoogle);
  p.avisGoogle = nombreOuNull(p.avisGoogle);
  if (typeof p.prochaineActionLe !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(p.prochaineActionLe)) p.prochaineActionLe = null;
  p.montantDevis = nombreOuNull(p.montantDevis);
  p.montantMensuel = nombreOuNull(p.montantMensuel);
  if (typeof p.signeLe !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(p.signeLe)) p.signeLe = null;
  return p;
}

export function normaliserDb(db: Db): Db {
  db.reglages = { ...REGLAGES_DEFAUT, ...(db.reglages ?? {}) };
  db.agenda ??= [];
  for (const p of db.prospects) normaliserProspect(p);
  return db;
}
