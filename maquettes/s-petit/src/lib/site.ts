export const INDEXABLE = process.env.NEXT_PUBLIC_INDEXABLE === "true";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://societe-spetit.fr").replace(/\/$/, "");
/** Image de partage : sert depuis l'URL Vercel de la maquette (le domaine du client n'est pas encore branché). Le canonical garde le domaine du client. */
export const SHARE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL ? "https://" + process.env.VERCEL_PROJECT_PRODUCTION_URL : SITE_URL;
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const LAST_UPDATED = "2026-10-30";

/**
 * Coordonnées relevées le 30 octobre 2026 sur la fiche Pages Jaunes (qui reprend Sirene et le BODACC) et recoupées avec
 * trois annuaires (Bottin, 118 000, Firmania). L'entreprise n'a pas de site : societe-spetit.fr, indiqué sur Pages Jaunes,
 * renvoie « Site not installed » (OVH). Le nom de domaine est donc supposé acquis, à faire confirmer.
 * À faire confirmer : horaires, deuxième numéro, métro, liste exacte des prestations, adresse e-mail publique.
 */
export const business = {
  name: "S. Petit",
  short: "S. Petit",
  legalName: "S PETIT, SARL à associé unique",
  siren: "498 235 589",
  rcs: "RCS Paris 498 235 589",
  naf: "43.22A, travaux d'installation d'eau et de gaz en tous locaux",
  founded: "2007",
  tagline: "Plombier à Paris 14e depuis 2007",
  phoneDisplay: "01 45 42 42 84",
  phoneTel: "+33145424284",
  phone2Display: "01 45 42 42 83",
  address: { street: "36, avenue Jean Moulin", postalCode: "75014", city: "Paris" },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=36+avenue+Jean+Moulin+75014+Paris",
  metro: "Alésia (ligne 4), à quelques minutes à pied",
  hours: "Du lundi au jeudi de 7 h 30 à 17 h 20, le vendredi de 7 h 30 à 16 h 20. Fermé le week-end.",
  googleRating: "4,6",
  googleCount: "44",
  ratingDate: "octobre 2026",
  areaServed: ["Paris 14e", "Paris 13e", "Paris 15e", "Paris 6e", "Montrouge", "Gentilly"],
};

export const PATHS = {
  home: "/",
  plumbing: "/plombier-paris-14",
  bathroom: "/salle-de-bains-paris-14",
  heating: "/chauffage-gaz-paris-14",
  contact: "/contact",
  legal: "/mentions-legales",
} as const;

export const nav = [
  { href: PATHS.plumbing, label: "Plomberie" },
  { href: PATHS.bathroom, label: "Salles de bains" },
  { href: PATHS.heating, label: "Chauffage et gaz" },
  { href: PATHS.contact, label: "Contact" },
] as const;

export const requestTypes = [
  { value: "plomberie", label: "Plomberie (fuite, canalisations, sanitaires)" },
  { value: "salle-de-bains", label: "Salle de bains, douche, toilettes" },
  { value: "chauffage", label: "Chauffage, gaz, chauffe-eau" },
  { value: "copropriete", label: "Copropriété, syndic, gestion d'immeuble" },
  { value: "autre", label: "Autre demande" },
] as const;

export type Faq = { q: string; a: string };
