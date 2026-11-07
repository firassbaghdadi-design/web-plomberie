export const INDEXABLE = process.env.NEXT_PUBLIC_INDEXABLE === "true";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://monteil-plomberie.fr").replace(/\/$/, "");
/** Adresse servant aux images de partage (og:image) : l'URL Vercel de la maquette ; le canonical garde le domaine du client. */
export const SHARE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL ? "https://" + process.env.VERCEL_PROJECT_PRODUCTION_URL : SITE_URL;
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const LAST_UPDATED = "2026-10-30";

/**
 * Faits relevés le 30 octobre 2026 sur le site actuel (monteil-info.fr) et dans la liste de prospection.
 * À faire confirmer : année de fondation (1964 sur le site, 1990 au registre), effectif (« une quarantaine »),
 * jours du service client (lundi au samedi ou lundi au vendredi selon la page), forfait de déplacement de 70 € TTC.
 */
export const business = {
  name: "Monteil & Cie",
  short: "Monteil",
  legalName: "Monteil & Cie",
  founded: "1964",
  tagline: "Plomberie, chauffage et couverture à Paris 11e depuis 1964",
  phoneDisplay: "01 47 00 58 33",
  phoneTel: "+33147005833",
  email: "monteil@monteil-plomberie.fr",
  address: { street: "35, rue Saint-Ambroise", postalCode: "75011", city: "Paris" },
  mapsUrl: "https://maps.google.com/?q=Monteil+%26+Cie+35+rue+Saint-Ambroise+Paris",
  metro: "Saint-Ambroise (ligne 9), Voltaire (ligne 9), Rue Saint-Maur (ligne 3)",
  hours: "Service client de 8 h à 19 h ; astreinte 24 h/24 pour les syndics sous contrat",
  googleRating: { value: "3,7", count: 46, date: "20 octobre 2026", url: "https://share.google/lTjcrmw9oNppBC2g3" },
  areaServed: ["Paris 11e", "Paris 3e", "Paris 4e", "Paris 10e", "Paris 12e", "Paris 20e", "Île-de-France"],
};

export const PATHS = {
  home: "/",
  house: "/la-maison",
  contact: "/contact",
  legal: "/mentions-legales",
  plumbing: "/plombier-paris-11",
  leak: "/recherche-de-fuite-paris",
  heating: "/chauffagiste-paris",
  bathroom: "/renovation-salle-de-bains-paris",
  syndic: "/plombier-syndic-copropriete-paris",
  rope: "/cordiste-acces-difficile-paris",
  audit: "/audit-reperage-reseaux-paris",
  roofing: "/couvreur-zingueur-paris",
  works: "/realisations",
} as const;

export const nav = [
  { href: PATHS.plumbing, label: "Plomberie" },
  { href: PATHS.heating, label: "Chauffage" },
  { href: PATHS.roofing, label: "Couverture" },
  { href: PATHS.syndic, label: "Syndics" },
  { href: PATHS.works, label: "Réalisations" },
  { href: PATHS.house, label: "La maison" },
  { href: PATHS.contact, label: "Contact" },
] as const;

export const requestTypes = [
  { value: "plomberie", label: "Plomberie, fuite, dépannage" },
  { value: "chauffage", label: "Chauffage, chaudière, radiateurs" },
  { value: "renovation", label: "Rénovation de salle de bains, sanitaires" },
  { value: "couverture", label: "Couverture, zinc, ardoise, étanchéité" },
  { value: "copropriete", label: "Copropriété, syndic, contrat d'astreinte" },
  { value: "specialise", label: "Travaux sur corde, amiante, audit de réseaux" },
  { value: "autre", label: "Autre demande" },
] as const;

export type Faq = { q: string; a: string };
