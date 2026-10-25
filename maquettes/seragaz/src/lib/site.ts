export const INDEXABLE = process.env.NEXT_PUBLIC_INDEXABLE === "true";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://seragaz.fr").replace(/\/$/, "");
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const LAST_UPDATED = "2026-10-25";

/** Adresses des pages : les huit premières reprennent exactement les URL du site actuel (seragaz.fr). */
export const PATHS = {
  home: "/",
  presentation: "/presentation-seragaz-specialiste-chaudiere-gaz-a-paris-9-75009",
  replacement: "/remplacement-chaudiere-gaz-a-paris-9-75009",
  descaling: "/desembouage-a-paris-9-75009",
  sweeping: "/ramonage-a-paris-9-75009",
  repair: "/depannage-de-chaudiere-gaz-a-paris-9-75009",
  meter: "/deplacement-de-compteur",
  reviews: "/avis-clients-seragaz-chauffagiste-a-paris-9-75009",
  contact: "/contact-devis-gratuit-chauffagiste-a-paris-9-75009",
  legal: "/mentions-legales",
  sitemap: "/plan-du-site",
  maintenance: "/contrat-entretien-chaudiere-gaz-paris",
} as const;

/** Faits relevés sur seragaz.fr le 25 octobre 2026 (pages d'accueil, « Qui sommes-nous ? », contact, mentions légales). */
export const business = {
  name: "SERAGAZ",
  legalName: "SERAGAZ",
  longName: "Société d'entretien et réparation d'appareils à gaz",
  tagline: "Spécialiste chaudière gaz à Paris depuis 1985",
  founded: "1985",
  familySince: "1903",
  manager: "Jérémy Franche",
  legalForm: "SAS au capital de 13 500 €",
  registry: "33203912200012",
  phoneDisplay: "01 42 80 03 01",
  phoneTel: "+33142800301",
  email: "contact@seragaz.fr",
  address: { street: "69 rue de Dunkerque", postalCode: "75009", city: "Paris", district: "Paris 9e" },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=SERAGAZ+69+rue+de+Dunkerque+75009+Paris",
  /** Deux horaires différents figurent sur le site actuel : à faire trancher par l'entreprise. */
  hours: "Du lundi au vendredi, de 7 h 30 à 17 h 30",
  phoneHours: "Au téléphone : de 8 h à 12 h et de 14 h à 17 h",
  openingSpec: [{ days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:30", closes: "17:30" }],
  radius: "dans un rayon de 15 km autour de Paris 9e",
  area: "Paris et la petite couronne",
  /** Liste reprise du pied de page du site actuel. */
  areaList: [
    "Paris 1er à 20e",
    "Clichy",
    "Levallois-Perret",
    "Boulogne-Billancourt",
    "Le Pré-Saint-Gervais",
    "Saint-Mandé",
    "Vincennes",
  ],
};

export const qualifications = [
  { title: "Partenaire GRDF", text: "Partenariat mis en avant sur les pages « Qui sommes-nous ? » et « Déplacement de compteur »." },
  { title: "RGE Qualibat", text: "Qualification « Reconnu Garant de l'Environnement » délivrée par Qualibat." },
  { title: "PG PMG", text: "Professionnel du Gaz, installation et maintenance, avec audits réguliers de Qualigaz." },
  { title: "Station technique", text: "Station technique et entreprise référencée chez plusieurs fabricants de chaudières." },
];

/** Marques citées sur la page « Qui sommes-nous ? » (station technique et référencement). */
export const brandsCited = ["Elm Leblanc", "Frisquet", "Saunier Duval", "Chappée", "De Dietrich"];
/** Logos de marques affichés sur la page d'accueil du site actuel. */
export const brandLogos = [
  { key: "marque-saunier-duval", name: "Saunier Duval" },
  { key: "marque-frisquet", name: "Frisquet" },
  { key: "marque-de-dietrich", name: "De Dietrich" },
  { key: "marque-chappee", name: "Chappée" },
  { key: "marque-viessmann", name: "Viessmann" },
  { key: "marque-ferroli", name: "Ferroli" },
  { key: "marque-chaffoteaux", name: "Chaffoteaux" },
  { key: "marque-auer", name: "Auer" },
  { key: "marque-atlantic", name: "Atlantic" },
];

/** Note relevée sur la fiche Google le 20 octobre 2026 (classement de prospection). Aucun avis n'est cité. */
export const reviews = {
  ratingText: "4,7",
  count: 310,
  observed: "20 octobre 2026",
  url: "https://www.google.com/maps/search/?api=1&query=SERAGAZ+69+rue+de+Dunkerque+Paris",
};

export const requestTypes = [
  { value: "depannage", label: "Dépannage de chaudière gaz" },
  { value: "entretien", label: "Entretien annuel ou contrat d'entretien" },
  { value: "remplacement", label: "Installation ou remplacement de chaudière" },
  { value: "chauffe-eau", label: "Chauffe-eau gaz" },
  { value: "desembouage", label: "Désembouage ou détartrage" },
  { value: "ramonage", label: "Ramonage du conduit" },
  { value: "compteur", label: "Déplacement de compteur gaz" },
  { value: "autre", label: "Autre demande (syndic, agence, professionnel…)" },
] as const;

export type Faq = { q: string; a: string };

export const nav = [
  { href: PATHS.repair, label: "Dépannage", short: "Dépannage" },
  { href: PATHS.maintenance, label: "Contrat d'entretien", short: "Entretien" },
  { href: PATHS.replacement, label: "Remplacement de chaudière", short: "Chaudières" },
  { href: PATHS.descaling, label: "Détartrage et désembouage", short: "Désembouage" },
  { href: PATHS.sweeping, label: "Ramonage", short: "Ramonage" },
  { href: PATHS.meter, label: "Déplacement de compteur", short: "Compteur" },
];

export const navSecondary = [
  { href: PATHS.presentation, label: "Qui sommes-nous ?" },
  { href: PATHS.reviews, label: "Avis clients" },
  { href: PATHS.contact, label: "Contact" },
];
