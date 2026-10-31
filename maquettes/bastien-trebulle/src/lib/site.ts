export const INDEXABLE = process.env.NEXT_PUBLIC_INDEXABLE === "true";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://bastien-trebulle.com").replace(/\/$/, "");
/** Les images de partage (og:image) pointent vers l'URL Vercel de la maquette ; le canonical garde le domaine du client. */
export const SHARE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL ? "https://" + process.env.VERCEL_PROJECT_PRODUCTION_URL : SITE_URL;
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const LAST_UPDATED = "2026-10-30";

/**
 * Coordonnées et faits relevés le 30 octobre 2026 sur bastien-trebulle.com (pages, mentions légales) et fournis par
 * l'orchestrateur (note Google 4,6/5, 205 avis, 20 à 49 salariés, téléphone d'urgence).
 * À faire confirmer par l'entreprise : voir la liste « à confirmer » du rapport de la maquette.
 */
export const business = {
  name: "Bastien & Trebulle",
  short: "Bastien & Trebulle",
  legalName: "ETS ANDRE BASTIEN & CIE, SAS au capital de 77 600 €",
  legalShort: "ETS ANDRE BASTIEN & CIE",
  siren: "602 000 630",
  rcs: "RCS Paris 602 000 630",
  vat: "FR30602000630",
  founded: "1880",
  tagline: "Plomberie, couverture et chauffage à Paris 16e depuis 1880",
  phoneDisplay: "01 45 24 77 89",
  phoneTel: "+33145247789",
  phoneOfficeDisplay: "01 45 24 66 66",
  phoneOfficeTel: "+33145246666",
  email: "contact@bastien-trebulle.com",
  address: { street: "3, rue Gros", postalCode: "75016", city: "Paris" },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bastien+%26+Trebulle+3+rue+Gros+75016+Paris",
  hours: "Dépannage d'urgence 24h/24 et 7j/7 ; horaires du bureau communiqués par téléphone",
  areaServed: ["Paris 16e", "Paris 8e", "Paris 17e", "Paris 7e", "Paris 15e", "Levallois-Perret", "Île-de-France"],
};

/** Réputation : relevé fourni le 30 octobre 2026 (fiche Google). Le site actuel affiche 193 avis (widget Trustindex). */
export const reputation = { rating: "4,6", ratingNum: 4.6, reviews: 205, date: "30 octobre 2026" };

export const PATHS = {
  home: "/",
  history: "/notre-histoire",
  individuals: "/particuliers",
  pros: "/syndicats-et-hotels",
  emergency: "/depannage",
  works: "/nos-realisations",
  partners: "/nos-partenaires",
  contact: "/contact",
  legal: "/mentions-legales",
  plumbing: "/plombier-paris-16",
  roofing: "/couvreur-zingueur-paris-16",
  heating: "/chauffagiste-paris-16",
  bathroom: "/salle-de-bains-cle-en-main-paris-16",
} as const;

/** Menu du site actuel : Accueil, Notre histoire, Particuliers, Syndics / Hôtels, Dépannage, Nos réalisations, Contact. */
export const nav = [
  { href: PATHS.history, label: "Notre histoire" },
  { href: PATHS.individuals, label: "Particuliers" },
  { href: PATHS.pros, label: "Syndics / Hôtels" },
  { href: PATHS.emergency, label: "Dépannage" },
  { href: PATHS.works, label: "Réalisations" },
  { href: PATHS.contact, label: "Contact" },
] as const;

export const requestTypes = [
  { value: "plomberie", label: "Plomberie" },
  { value: "chauffage", label: "Chauffage et énergie" },
  { value: "couverture", label: "Couverture et toiture" },
  { value: "salle-de-bains", label: "Salle de bains" },
  { value: "depannage", label: "Dépannage" },
  { value: "entretien", label: "Contrat d'entretien" },
  { value: "copropriete", label: "Syndic, copropriété, hôtel" },
  { value: "autre", label: "Autre demande" },
] as const;

export type Faq = { q: string; a: string };
