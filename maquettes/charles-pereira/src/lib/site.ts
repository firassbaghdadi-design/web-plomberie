export const INDEXABLE = process.env.NEXT_PUBLIC_INDEXABLE === "true";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://entreprise-charles-pereira.fr").replace(/\/$/, "");
/** Image de partage : toujours l'URL Vercel de la maquette. La balise canonical garde le domaine du client. */
export const SHARE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : SITE_URL;
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const LAST_UPDATED = "2026-10-30";

/**
 * Coordonnées relevées le 30 octobre 2026 dans les registres et annuaires publics (Pappers, societe.com, PagesJaunes,
 * Mappy, annuaires). L'entreprise n'a pas de site : aucun texte d'origine à reprendre.
 * À faire confirmer par l'entreprise : téléphone, horaires, liste exacte des métiers, zone d'intervention, effectif.
 */
export const business = {
  name: "Entreprise Charles Pereira",
  short: "Charles Pereira",
  legalName: "Entreprise Charles Pereira, SARL au capital de 10 000 €",
  siren: "508 728 557",
  rcs: "RCS Paris 508 728 557",
  naf: "43.22A, travaux d'installation d'eau et de gaz en tous locaux",
  founded: "2008",
  tagline: "Plomberie et chauffage à Paris 15e depuis 2008",
  phoneDisplay: "01 42 51 42 42",
  phoneTel: "+33142514242",
  address: { street: "26, boulevard Garibaldi", postalCode: "75015", city: "Paris" },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=26+boulevard+Garibaldi+75015+Paris",
  metro: "Cambronne et Sèvres-Lecourbe (ligne 6)",
  agency: "35, rue Franklin, 78500 Sartrouville",
  hours: "Horaires communiqués par téléphone",
  googleRating: "4,3/5",
  googleCount: "16 avis",
  googleDate: "octobre 2026",
  areaServed: ["Paris 15e", "Paris 7e", "Paris 14e", "Paris 16e", "Issy-les-Moulineaux", "Boulogne-Billancourt"],
};

export const PATHS = {
  home: "/",
  plumbing: "/plombier-paris-15",
  leak: "/depannage-fuite-paris-15",
  drain: "/debouchage-canalisation-paris-15",
  heating: "/chauffe-eau-chauffage-paris-15",
  contact: "/contact",
  legal: "/mentions-legales",
} as const;

export const nav = [
  { href: PATHS.plumbing, label: "Plomberie" },
  { href: PATHS.leak, label: "Fuites" },
  { href: PATHS.drain, label: "Débouchage" },
  { href: PATHS.heating, label: "Chauffage" },
  { href: PATHS.contact, label: "Contact" },
] as const;

export const requestTypes = [
  { value: "plomberie", label: "Plomberie (installation, sanitaires, robinetterie)" },
  { value: "fuite", label: "Fuite, recherche de fuite, dégât des eaux" },
  { value: "debouchage", label: "Débouchage, évacuation bouchée" },
  { value: "chauffage", label: "Chauffe-eau, chauffage, radiateurs" },
  { value: "copropriete", label: "Copropriété, syndic, gestion d'immeuble" },
  { value: "autre", label: "Autre demande" },
] as const;

export type Faq = { q: string; a: string };
