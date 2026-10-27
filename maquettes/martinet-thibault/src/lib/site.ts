export const INDEXABLE = process.env.NEXT_PUBLIC_INDEXABLE === "true";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.martinet-thibault.com").replace(/\/$/, "");
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const LAST_UPDATED = "2026-10-27";

/**
 * Coordonnées relevées le 27 octobre 2026 sur le site actuel (accueil, pages Historique et Contact).
 * Le site actuel n'affiche aucune adresse e-mail : les demandes écrites passent par le formulaire.
 */
export const business = {
  name: "Martinet Thibault Entreprise",
  short: "Martinet Thibault",
  legalName: "Martinet-Thibault Entreprise (M.T.E.)",
  siret: "408 403 632 0006",
  ape: "4322A",
  vat: "FR28 408403632",
  /** Fondation de la maison par Lucien Tournaire (page Historique). */
  founded: "1880",
  /** Reprise par Patrick Thibault : date de la société actuelle. */
  company: "1996",
  tagline: "Plomberie, chauffage et toiture à Paris 10e depuis 1880",
  phoneDisplay: "01 48 24 80 57",
  phoneTel: "+33148248057",
  address: { street: "34, passage du Désir", postalCode: "75010", city: "Paris" },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=34+passage+du+D%C3%A9sir+75010+Paris",
  hours: "Du lundi au vendredi, de 8 h à 12 h et de 13 h 30 à 17 h",
  hoursShort: "Lun.–ven. 8 h–12 h, 13 h 30–17 h",
  hoursSpec: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "12:00" },
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "13:30", closes: "17:00" },
  ],
  director: "Mathieu Thibault",
  areaServed: ["Paris 10e", "Paris 9e", "Paris 11e", "Paris 18e", "Paris 19e", "Paris 3e"],
};

/** Les interlocuteurs tels que les présente la page Contact du site actuel. */
export const contacts = [
  { service: "Standard", name: "", phoneDisplay: "01 48 24 80 57", phoneTel: "+33148248057" },
  { service: "Service plomberie", name: "M. Yvan Badjic", phoneDisplay: "01 48 24 80 59", phoneTel: "+33148248059" },
  { service: "Service couverture", name: "M. Olivier Moulin", phoneDisplay: "01 48 24 80 60", phoneTel: "+33148248060" },
  { service: "Service comptabilité", name: "Mme Pascaline Estebe", phoneDisplay: "01 48 24 80 58", phoneTel: "+33148248058" },
] as const;

export const PATHS = {
  home: "/",
  history: "/historique.html",
  services: "/services.html",
  works: "/realisations.html",
  partners: "/partenaires.html",
  contact: "/contact.html",
  legal: "/mentions-legales",
  plumbing: "/plombier-paris-10",
  roofing: "/couvreur-paris-10",
  heating: "/chauffagiste-paris-10",
  emergency: "/depannage-plomberie-paris-10",
  bathroom: "/renovation-salle-de-bains-paris-10",
} as const;

/** Menu : les pages du site actuel, dans le même ordre. */
export const nav = [
  { href: PATHS.history, label: "Historique" },
  { href: PATHS.services, label: "Services" },
  { href: PATHS.works, label: "Réalisations" },
  { href: PATHS.partners, label: "Partenaires" },
  { href: PATHS.contact, label: "Contact" },
] as const;

export const requestTypes = [
  { value: "depannage", label: "Dépannage, fuite ou dégorgement" },
  { value: "plomberie", label: "Plomberie (canalisations, robinetterie, sanitaires)" },
  { value: "chauffage", label: "Chauffage ou climatisation" },
  { value: "couverture", label: "Toiture, chéneaux, descentes d'eau" },
  { value: "renovation", label: "Cuisine ou salle de bains complète" },
  { value: "autre", label: "Autre demande" },
] as const;

/** Les cinq générations, d'après la page « Historique » du site actuel. */
export const generations = [
  { year: "1880", who: "Lucien Tournaire", short: "L. Tournaire", text: "Crée l'entreprise à Paris, dans le 10e arrondissement." },
  { year: "1928", who: "Henri Martinet", short: "H. Martinet", text: "Reprend l'entreprise de son beau-père." },
  { year: "1967", who: "Michel Martinet", short: "M. Martinet", text: "Le fils d'Henri Martinet reprend le flambeau." },
  { year: "1996", who: "Patrick Thibault", short: "P. Thibault", text: "Chargé d'affaires dans l'entreprise, il en prend la direction." },
  { year: "2010", who: "Mathieu Thibault", short: "M. Thibault", text: "Reprend à son tour l'entreprise des mains de son père." },
] as const;

/** Garanties affichées par l'entreprise sur son site actuel (pages Historique et Services). */
export const guarantees = [
  { title: "Qualibat RGE", text: "Logo de qualification affiché par l'entreprise dans « Qualité et certification »." },
  { title: "Qualigaz", text: "Logo affiché par l'entreprise dans « Qualité et certification »." },
  { title: "Chambre syndicale", text: "Membre de la chambre syndicale de la couverture, de la plomberie et du génie climatique." },
  { title: "Astreinte CP24", text: "Un groupement de 14 entreprises parisiennes assure une astreinte la nuit, le week-end et les jours fériés." },
] as const;

export type Faq = { q: string; a: string };
