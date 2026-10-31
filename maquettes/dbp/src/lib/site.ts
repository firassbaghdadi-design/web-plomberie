export const INDEXABLE = process.env.NEXT_PUBLIC_INDEXABLE === "true";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://dbp-plomberie-chauffage.fr").replace(/\/$/, "");
/** URL servant aux images de partage (og:image) : celle du déploiement Vercel ; le canonical garde le domaine du client. */
export const SHARE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : SITE_URL;
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const LAST_UPDATED = "2026-10-30";

/**
 * Coordonnées relevées le 30 octobre 2026 dans les registres et annuaires publics (PagesJaunes, annuaires en ligne,
 * Sirene). L'entreprise n'a pas de site : aucun texte de sa part, aucun logo, aucune photo.
 * À faire confirmer par l'entreprise : année de fondation (2007, indiquée par Firas), téléphone, horaires (les annuaires
 * donnent 8 h – 17 h 30 ou 7 h 30 – 18 h 30), liste exacte des prestations, adresse e-mail de contact, zone d'intervention.
 */
export const business = {
  name: "DBP Plomberie-Chauffage",
  short: "DBP",
  legalName: "D.B.P, société à responsabilité limitée",
  siren: "494 580 095",
  rcs: "RCS Paris 494 580 095",
  naf: "43.22A, travaux d'installation d'eau et de gaz en tous locaux",
  founded: "2007",
  tagline: "Plombier chauffagiste à Paris 20e depuis 2007",
  phoneDisplay: "01 42 45 91 35",
  phoneTel: "+33142459135",
  address: { street: "1, villa Gagliardini", postalCode: "75020", city: "Paris" },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=1+villa+Gagliardini+75020+Paris",
  googleUrl: "https://www.google.com/maps/search/?api=1&query=DBP+Plomberie+Chauffage+1+villa+Gagliardini+75020+Paris",
  metro: "Porte des Lilas (lignes 11 et 3bis), tramway T3b",
  hours: "Du lundi au vendredi, horaires précis à confirmer par téléphone",
  rating: { value: "4,1", count: 21, date: "octobre 2026" },
  areaServed: ["Paris 20e", "Paris 19e", "Paris 11e", "Les Lilas", "Le Pré-Saint-Gervais", "Bagnolet"],
};

export const PATHS = {
  home: "/",
  contact: "/contact",
  legal: "/mentions-legales",
  plumbing: "/plombier-paris-20",
  heating: "/chauffagiste-paris-20",
} as const;

export const nav = [
  { href: PATHS.plumbing, label: "Plomberie" },
  { href: PATHS.heating, label: "Chauffage" },
  { href: PATHS.contact, label: "Contact" },
] as const;

export const requestTypes = [
  { value: "plomberie", label: "Plomberie (fuite, canalisation, sanitaires)" },
  { value: "debouchage", label: "Débouchage (évier, lavabo, WC, baignoire)" },
  { value: "chauffage", label: "Chauffage (radiateurs, chaudière, entretien)" },
  { value: "copropriete", label: "Copropriété, syndic, gestion d'immeuble" },
  { value: "autre", label: "Autre demande" },
] as const;

export type Faq = { q: string; a: string };
