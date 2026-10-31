export const INDEXABLE = process.env.NEXT_PUBLIC_INDEXABLE === "true";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://smap-renovation.fr").replace(/\/$/, "");
/** Domaine servant aux images de partage (og:image, twitter:image) : l'URL Vercel de la maquette. Le canonical garde le domaine du client. */
export const SHARE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL ? "https://" + process.env.VERCEL_PROJECT_PRODUCTION_URL : SITE_URL;
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const LAST_UPDATED = "2026-10-30";

/** Adresses des pages principales. Les pages métier × zone sont dans local.ts. */
export const PATHS = {
  home: "/",
  plumbing: "/plomberie",
  renovation: "/renovation",
  maintenance: "/maintenance",
  legal: "/mentions-legales",
  contact: "/contact",
  sitemap: "/plan-du-site",
} as const;

/**
 * Faits connus, relevés au registre et sur la fiche Google le 20 octobre 2026 (classement de prospection) :
 * nom, Paris 12e, 10 à 19 salariés, création en 2007, note Google 3,7/5 (3 avis), téléphone et e-mail du site actuel.
 * Le site actuel (smap-renovation.fr, Wix) n'a pas pu être lu depuis l'environnement de travail : le build en relève
 * les textes et les images (journal de build, src/lib/original.generated.json). L'adresse de rue n'est pas connue.
 * À faire confirmer par l'entreprise : adresse, horaires, liste exacte des prestations, zone d'intervention.
 */
export const business = {
  name: "SMAP",
  short: "SMAP",
  fullName: "SMAP (Maintenance, Aménagement, Plomberie)",
  legalName: "SMAP, Maintenance, Aménagement, Plomberie",
  tagline: "Plomberie, rénovation et maintenance à Paris 12e",
  founded: "2007",
  phoneDisplay: "01 42 49 20 14",
  phoneTel: "+33142492014",
  email: "smap.gros@orange.fr",
  address: { postalCode: "75012", city: "Paris", district: "Paris 12e" },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=SMAP+plomberie+am%C3%A9nagement+maintenance+75012+Paris",
  trades: ["Plomberie", "Aménagement et rénovation", "Maintenance"],
  clients: "Particuliers, professionnels et copropriétés",
  area: "Paris 12e et les quartiers voisins",
};

export type Faq = { q: string; a: string };

export const requestTypes = [
  { value: "plomberie", label: "Plomberie : fuite, sanitaire, robinetterie, canalisations" },
  { value: "renovation", label: "Aménagement et rénovation (salle de bains, cuisine, appartement)" },
  { value: "maintenance", label: "Maintenance et entretien d'un immeuble ou d'un local" },
  { value: "copropriete", label: "Copropriété, syndic ou professionnel" },
  { value: "autre", label: "Autre demande" },
] as const;

export const nav = [
  { href: PATHS.plumbing, label: "Plomberie" },
  { href: PATHS.renovation, label: "Rénovation" },
  { href: PATHS.maintenance, label: "Maintenance" },
];
