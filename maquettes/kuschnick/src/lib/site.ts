export const INDEXABLE = process.env.NEXT_PUBLIC_INDEXABLE === "true";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://kuschnick.fr").replace(/\/$/, "");
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const LAST_UPDATED = "2026-10-28";

/**
 * Coordonnées relevées le 28 octobre 2026 dans les registres publics (Sirene, annuaires 118 712 et PagesJaunes).
 * Le site actuel (kuschnick.fr) est un modèle WordPress jamais rempli : aucun texte, aucune coordonnée.
 * L'adresse info@divielectric.com qui y figure appartient au modèle (Divi Electric Inc., New Jersey) : elle n'est pas affichée.
 * À faire confirmer par l'entreprise : téléphone, horaires, liste des métiers.
 */
export const business = {
  name: "Anciens Établissements Kuschnick",
  short: "Kuschnick",
  legalName: "Anciens Établissements Kuschnick, SA au capital de 121 800 €",
  siren: "572 182 178",
  rcs: "RCS Paris 572 182 178",
  naf: "43.22A, travaux d'installation d'eau et de gaz en tous locaux",
  founded: "1957",
  tagline: "Plomberie, couverture et chauffage à Paris 11e depuis 1957",
  phoneDisplay: "01 43 43 12 33",
  phoneTel: "+33143431233",
  address: { street: "54, rue Trousseau", postalCode: "75011", city: "Paris" },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=54+rue+Trousseau+75011+Paris",
  metro: "Ledru-Rollin (ligne 8), Faidherbe-Chaligny (ligne 8), Charonne (ligne 9)",
  hours: "Horaires communiqués par téléphone",
  areaServed: ["Paris 11e", "Paris 3e", "Paris 4e", "Paris 10e", "Paris 12e", "Paris 20e"],
};

export const PATHS = {
  home: "/",
  house: "/la-maison",
  contact: "/contact",
  legal: "/mentions-legales",
  plumbing: "/plombier-paris-11",
  roofing: "/couvreur-paris-11",
  heating: "/chauffage-central-paris-11",
  chimney: "/fumisterie-paris-11",
} as const;

/** Les quatre métiers déclarés au registre (couverture, plomberie, fumisterie, chauffage central). */
export const nav = [
  { href: PATHS.plumbing, label: "Plomberie" },
  { href: PATHS.roofing, label: "Couverture" },
  { href: PATHS.heating, label: "Chauffage" },
  { href: PATHS.chimney, label: "Fumisterie" },
  { href: PATHS.house, label: "La maison" },
  { href: PATHS.contact, label: "Contact" },
] as const;

export const requestTypes = [
  { value: "plomberie", label: "Plomberie (fuite, canalisations, sanitaires)" },
  { value: "couverture", label: "Couverture, zinc, chéneaux" },
  { value: "chauffage", label: "Chauffage central, radiateurs" },
  { value: "fumisterie", label: "Fumisterie, conduits, souches de cheminée" },
  { value: "copropriete", label: "Copropriété, syndic, gestion d'immeuble" },
  { value: "autre", label: "Autre demande" },
] as const;

export type Faq = { q: string; a: string };

/** URL publique de la maquette (déploiement Vercel) : l'image de partage doit s'afficher quand on envoie le lien, même avant la mise en ligne sur le vrai domaine. */
export const SHARE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : SITE_URL;
