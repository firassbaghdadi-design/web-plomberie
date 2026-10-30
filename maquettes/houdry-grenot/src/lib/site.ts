export const INDEXABLE = process.env.NEXT_PUBLIC_INDEXABLE === "true";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://houdry-grenot.com").replace(/\/$/, "");
/** Image de partage : URL Vercel de la maquette si disponible ; le canonical garde le domaine du client. */
export const SHARE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL ? "https://" + process.env.VERCEL_PROJECT_PRODUCTION_URL : SITE_URL;
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const LAST_UPDATED = "2026-10-30";

export const PATHS = {
  home: "/",
  plumbing: "/plomberie",
  repair: "/depannage-plomberie",
  bathroom: "/salle-de-bains",
  legal: "/mentions-legales",
  contact: "/contact",
  sitemap: "/plan-du-site",
} as const;

/**
 * Faits communiqués par l'orchestrateur le 30 octobre 2026 (registre et fiche Google). Le site actuel n'était pas
 * lisible depuis l'environnement de travail : l'adresse de rue, les horaires et la liste exacte des prestations sont à confirmer.
 */
export const business = {
  name: "Houdry-Grenot",
  short: "Houdry-Grenot",
  legalName: "Houdry-Grenot",
  tagline: "Plomberie à Paris 17e",
  founded: "1996",
  phoneDisplay: "01 53 06 97 97",
  phoneTel: "+33153069797",
  email: "plomberie@houdry-grenot.com",
  address: { postalCode: "75017", city: "Paris", district: "Paris 17e" },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Houdry-Grenot+plomberie+Paris+17e",
  trades: ["Plomberie", "Dépannage", "Salle de bains"],
  area: "Paris 17e et les arrondissements voisins",
  /** Fiche Google relevée le 30 octobre 2026. */
  google: { rating: "3,2", count: 10, date: "30 octobre 2026" },
};

export type Faq = { q: string; a: string };

export const requestTypes = [
  { value: "plomberie", label: "Plomberie : sanitaire, robinetterie, tuyauterie" },
  { value: "depannage", label: "Dépannage : fuite, canalisation, panne d'eau" },
  { value: "salle-de-bains", label: "Rénovation de salle de bains" },
  { value: "copropriete", label: "Copropriété, syndic ou professionnel" },
  { value: "autre", label: "Autre demande" },
] as const;

export const nav = [
  { href: PATHS.plumbing, label: "Plomberie" },
  { href: PATHS.repair, label: "Dépannage" },
  { href: PATHS.bathroom, label: "Salle de bains" },
];
