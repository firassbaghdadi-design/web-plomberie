import classement from "./classement.json";
import { MODELES } from "./modeles";
import type { Db, Evenement, Prospect } from "@/lib/types";

const MAQUETTES: Record<string, string> = {
  "Gaz Flash": "https://gaz-flash-maquette.vercel.app",
  "Somsou-Pons": "https://somsou-pons-maquette.vercel.app",
};

/** Coordonnées publiques déjà relevées dans le dépôt (sites des entreprises). Rien d'autre n'est renseigné. */
const CONTACTS: Record<string, { emails?: string[]; telephone?: string }> = {
  "Gaz Flash": { telephone: "01 42 64 80 51" },
  "Somsou-Pons": { emails: ["agence16@somsoupons.fr", "agence17@somsoupons.fr", "transvaal@somsoupons.fr"] },
  "Entreprise Clairon": { emails: ["info@clairon.org"] },
};

export const slug = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const DATE_SEED = "2026-10-25T09:00:00.000Z";

export function seedDb(): Db {
  const prospects: Prospect[] = [];
  const evenements: Evenement[] = [];

  const maquetteEvent = (p: Prospect) =>
    evenements.push({
      id: `ev-${p.id}-maquette`,
      prospectId: p.id,
      type: "maquette",
      date: DATE_SEED,
      titre: "Maquette terminée",
      detail: `${p.maquetteUrl} (pas encore envoyée)`,
    });

  for (const c of classement) {
    const ct = CONTACTS[c.entreprise] ?? {};
    const p: Prospect = {
      id: slug(c.entreprise),
      entreprise: c.entreprise,
      dirigeant: c.dirigeant,
      emails: ct.emails ?? [],
      telephone: ct.telephone ?? "",
      ville: "Paris",
      arrondissement: c.arrondissement,
      siteActuel: c.siteActuel ? (c.httpOnly ? `http://${c.siteActuel}` : `https://${c.siteActuel}`) : "",
      maquetteUrl: MAQUETTES[c.entreprise] ?? "",
      score: c.score,
      statut: "a_contacter",
      vague: c.vague,
      rang: c.rang,
      offre: c.offre,
      notes: `${c.note}\n\nGoogle : ${c.google}. Effectif ${c.effectif}. Créée en ${c.creeeEn}.`,
      aRepondu: false,
      stop: false,
      creeLe: DATE_SEED,
      modifieLe: DATE_SEED,
    };
    prospects.push(p);
    evenements.push({
      id: `ev-${p.id}-import`,
      prospectId: p.id,
      type: "note",
      date: DATE_SEED,
      titre: "Ajouté depuis le classement des 20 prochaines cibles",
      detail: `Rang ${c.rang}, score ${c.score}/100, vague ${c.vague}.`,
    });
    if (p.maquetteUrl) maquetteEvent(p);
  }

  const extras: Array<Partial<Prospect> & { entreprise: string; maquetteUrl: string }> = [
    {
      entreprise: "Entreprise Rousseau",
      arrondissement: "14e",
      emails: ["contact@entreprise-rousseau.fr"],
      telephone: "01 45 38 91 91",
      siteActuel: "https://www.entreprise-rousseau.fr",
      maquetteUrl: "https://entreprise-rousseau-maquette.vercel.app",
      notes: "Maquette pilote (Paris 14e). Même société que Sandrin-Rousseau (SIREN 552 034 704). Noté 4,4/5 sur Google.",
    },
    {
      entreprise: "Sandrin-Rousseau",
      ville: "Bourg-la-Reine",
      emails: ["contact@sandrin.fr"],
      telephone: "01 46 61 88 55",
      siteActuel: "https://www.sandrin.fr",
      maquetteUrl: "https://sandrin-rousseau-maquette.vercel.app",
      notes: "Établissement de Bourg-la-Reine d'Entreprise Rousseau : le site actuel renvoie vers celui de Paris 14e. À présenter avec Entreprise Rousseau.",
    },
  ];
  for (const e of extras) {
    const p: Prospect = {
      id: slug(e.entreprise),
      entreprise: e.entreprise,
      dirigeant: "",
      emails: e.emails ?? [],
      telephone: e.telephone ?? "",
      ville: e.ville ?? "Paris",
      arrondissement: e.arrondissement ?? "",
      siteActuel: e.siteActuel ?? "",
      maquetteUrl: e.maquetteUrl,
      score: null,
      statut: "a_contacter",
      vague: 1,
      rang: null,
      offre: "",
      notes: e.notes ?? "",
      aRepondu: false,
      stop: false,
      creeLe: DATE_SEED,
      modifieLe: DATE_SEED,
    };
    prospects.push(p);
    maquetteEvent(p);
  }

  return { version: 1, prospects, evenements, emails: [], relances: [], modeles: MODELES };
}
