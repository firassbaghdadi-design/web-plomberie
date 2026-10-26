export const INDEXABLE = process.env.NEXT_PUBLIC_INDEXABLE === "true";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.martinet-thibault.com").replace(/\/$/, "");
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const LAST_UPDATED = "2026-10-26";

/**
 * Coordonnées relevées le 25 octobre 2026 sur le site actuel (pages Contact et pied de page).
 * Le site actuel n'affiche aucune adresse e-mail : les demandes écrites passent par le formulaire.
 */
export const business = {
  name: "Martinet Thibault Entreprise",
  short: "Martinet Thibault",
  legalName: "Martinet-Thibault Entreprise (M.T.E.)",
  siren: "408 403 632",
  ape: "4322A",
  vat: "FR28 408403632",
  founded: "1880",
  tagline: "Plomberie, chauffage et couverture à Paris 10e depuis 1880",
  phoneDisplay: "01 48 24 80 57",
  phoneTel: "+33148248057",
  address: { street: "34, passage du Désir", postalCode: "75010", city: "Paris" },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Martinet+Thibault+Entreprise+34+passage+du+D%C3%A9sir+75010+Paris",
  hours: "Du lundi au vendredi, de 8 h à 12 h et de 13 h 30 à 17 h",
  hoursSpec: [{ days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "12:00" }, { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "13:30", closes: "17:00" }],
  area: "Paris 10e et arrondissements voisins",
  areaServed: ["Paris 10e arrondissement", "Paris 9e arrondissement", "Paris 11e arrondissement", "Paris 18e arrondissement", "Paris 19e arrondissement", "Paris 3e arrondissement"],
};

/** Les interlocuteurs tels que les présente la page Contact du site actuel. */
export const contacts = [
  { service: "Standard", name: "", phoneDisplay: "01 48 24 80 57", phoneTel: "+33148248057" },
  { service: "Service plomberie", name: "M. Yvan Badjic", phoneDisplay: "01 48 24 80 59", phoneTel: "+33148248059" },
  { service: "Service couverture", name: "M. Olivier Moulin", phoneDisplay: "01 48 24 80 60", phoneTel: "+33148248060" },
  { service: "Service comptabilité", name: "Mme Pascaline Estebe", phoneDisplay: "01 48 24 80 58", phoneTel: "+33148248058" },
] as const;
export const director = "Mathieu Thibault, dirigeant et chargé d'affaires plomberie";

export const PATHS = {
  home: "/",
  history: "/historique.html",
  services: "/services.html",
  works: "/realisations.html",
  partners: "/partenaires.html",
  contact: "/contact.html",
  plumbing: "/plombier-paris-10",
  heating: "/chauffagiste-paris-10",
  roofing: "/couvreur-paris-10",
  emergency: "/depannage-plomberie-paris-10",
  bathroom: "/renovation-salle-de-bains-paris-10",
} as const;

export const nav = [
  { href: PATHS.history, label: "Historique" },
  { href: PATHS.services, label: "Services" },
  { href: PATHS.works, label: "Réalisations" },
  { href: PATHS.partners, label: "Partenaires" },
  { href: PATHS.contact, label: "Contact" },
] as const;

export const trades = [
  { key: "plumbing", href: PATHS.plumbing, label: "Plomberie", long: "Plombier à Paris 10e", focus: "eau" },
  { key: "heating", href: PATHS.heating, label: "Chauffage", long: "Chauffagiste à Paris 10e", focus: "chauffage" },
  { key: "roofing", href: PATHS.roofing, label: "Couverture", long: "Couvreur à Paris 10e", focus: "toit" },
  { key: "emergency", href: PATHS.emergency, label: "Dépannage", long: "Dépannage plomberie, Paris 10e", focus: "cave" },
  { key: "bathroom", href: PATHS.bathroom, label: "Salle de bains", long: "Salle de bains et cuisine, Paris 10e", focus: "bain" },
] as const;

export const requestTypes = [
  { value: "depannage", label: "Dépannage ou dégorgement" },
  { value: "plomberie", label: "Plomberie (canalisations, robinetterie, sanitaires)" },
  { value: "chauffage", label: "Chauffage ou climatisation" },
  { value: "couverture", label: "Toiture, chéneaux, descentes d'eau" },
  { value: "renovation", label: "Cuisine ou salle de bains complète" },
  { value: "autre", label: "Autre demande" },
] as const;

/** Repères donnés par la page « Historique » du site actuel. */
export const timeline = [
  { year: "1880", who: "Lucien Tournaire", text: "Fonde l'entreprise à Paris, dans le 10e arrondissement." },
  { year: "1928", who: "Henri Martinet", text: "Reprend l'entreprise de son beau-père." },
  { year: "1967", who: "Michel Martinet", text: "Le fils d'Henri Martinet reprend le flambeau." },
  { year: "1996", who: "Patrick Thibault", text: "Chargé d'affaires dans la maison, il en devient le dirigeant." },
  { year: "2010", who: "Mathieu Thibault", text: "Reprend à son tour l'entreprise des mains de son père." },
] as const;

export type Faq = { q: string; a: string };
