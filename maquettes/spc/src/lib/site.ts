export const INDEXABLE = process.env.NEXT_PUBLIC_INDEXABLE === "true";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://spc-services.fr").replace(/\/$/, "");
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const LAST_UPDATED = "2026-10-30";

/**
 * Coordonnées reprises du site actuel (spc-services.fr, relevé du 28 octobre 2026) et des registres publics.
 * À faire confirmer par l'entreprise : année de fondation (le site dit 1965, le registre date la société actuelle de 2005),
 * adresse (le pied de page du site mentionne aussi le 39, avenue du Général-Michel-Bizot), horaires, dépannage 6 h – minuit,
 * qualifications (Qualibat RGE, CAPEB, GCCP), note Google.
 */
export const business = {
  name: "SPC, Société Plomberie Couverture",
  short: "SPC",
  legalName: "Société Plomberie Couverture (SPC)",
  siren: "483 311 882",
  founded: "1965",
  roofingSince: "2010",
  manager: "F. Delmolino",
  tagline: "Plombier couvreur à Paris 12e depuis 1965",
  phoneDisplay: "01 43 43 35 46",
  phoneTel: "+33143433546",
  mobileDisplay: "06 99 17 22 53",
  mobileTel: "+33699172253",
  email: "contact@spc-services.fr",
  instagram: "s.p.c_plomberie_couverture",
  address: { street: "66, avenue du Général-Michel-Bizot", postalCode: "75012", city: "Paris" },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=66+avenue+du+G%C3%A9n%C3%A9ral+Michel+Bizot+75012+Paris",
  metro: "Michel Bizot (ligne 8)",
  hours: "Du lundi au vendredi, 7 h – 17 h 30",
  emergency: "Dépannage de 6 h à minuit, tous les jours, week-ends et jours fériés",
  rating: { value: "4,0", count: 25, date: "octobre 2026" },
  areaServed: ["Paris 12e", "Paris 11e", "Paris 20e", "Vincennes", "Saint-Mandé"],
};

export const PATHS = {
  home: "/",
  history: "/notre-histoire",
  contact: "/contact",
  legal: "/mentions-legales",
  plumbing: "/plombier-paris-12",
  roofing: "/couvreur-paris-12",
  drainage: "/assainissement-paris-12",
  homes: "/renovation-salle-de-bains-paris-12",
  gallery: "/realisations",
} as const;

export const nav = [
  { href: PATHS.plumbing, label: "Plomberie" },
  { href: PATHS.roofing, label: "Couverture" },
  { href: PATHS.drainage, label: "Assainissement" },
  { href: PATHS.homes, label: "Particuliers" },
  { href: PATHS.history, label: "Notre histoire" },
  { href: PATHS.contact, label: "Contact" },
] as const;

export const requestTypes = [
  { value: "plomberie", label: "Plomberie (fuite, sanitaires, colonnes)" },
  { value: "depannage", label: "Dépannage urgent" },
  { value: "couverture", label: "Couverture, zinguerie, travaux sur corde" },
  { value: "assainissement", label: "Assainissement, curage, pompe de relevage" },
  { value: "particulier", label: "Salle de bains, cuisine, mise aux normes PMR" },
  { value: "copropriete", label: "Copropriété, syndic, contrat d'entretien" },
  { value: "autre", label: "Autre demande" },
] as const;

export type Faq = { q: string; a: string };

/** Les images de partage (og:image) pointent vers l'URL Vercel de la maquette ; la balise canonical garde le domaine du client. */
export const SHARE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : SITE_URL;
