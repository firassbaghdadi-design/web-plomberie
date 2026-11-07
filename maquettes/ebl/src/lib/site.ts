export const INDEXABLE = process.env.NEXT_PUBLIC_INDEXABLE === "true";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://ebl-plomberie.fr").replace(/\/$/, "");
/** og:image : l'URL Vercel de la maquette (le canonical garde le domaine du client). */
export const SHARE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL ? "https://" + process.env.VERCEL_PROJECT_PRODUCTION_URL : SITE_URL;
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const LAST_UPDATED = "2026-10-30";

/** Adresses du site. L'entreprise n'a aucun site actuel : toutes les pages sont nouvelles. */
export const PATHS = {
  home: "/",
  plumbing: "/plomberie",
  gas: "/gaz",
  heating: "/chauffage",
  legal: "/mentions-legales",
  contact: "/contact",
  sitemap: "/plan-du-site",
} as const;

/**
 * Faits relevés le 30 octobre 2026 : Pages Jaunes (adresse, téléphone, horaires, certification « Professionnel du Gaz »,
 * prestation « fuite de gaz », effectif), registre (SIREN, forme juridique, création, code NAF), classement de prospection
 * (fiche Google : 3,7/5, 3 avis). Rien d'autre n'est affirmé.
 */
export const business = {
  name: "EBL",
  full: "Entreprise Bernard Lemaître",
  legalName: "Entreprise Bernard Lemaître (EBL)",
  tagline: "Plomberie et gaz à Paris 14e depuis 1978",
  founded: "1978",
  siren: "312 906 126",
  legalForm: "Société à responsabilité limitée à associé unique",
  naf: "4322A",
  phoneDisplay: "01 43 31 26 77",
  phoneTel: "+33143312677",
  /** Aucune adresse e-mail publique relevée : le formulaire écrit à CONTACT_TO_EMAIL. */
  address: { street: "5 rue d'Alésia", postalCode: "75014", city: "Paris", district: "Paris 14e" },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=EBL+5+rue+d%27Al%C3%A9sia+75014+Paris",
  trades: ["Plomberie", "Gaz", "Chauffage"],
  area: "Paris 14e et les quartiers voisins",
  google: { rating: "3,7", count: 3, date: "octobre 2026" },
  hours: [
    ["Lundi au jeudi", "8 h – 12 h 30 et 13 h 30 – 18 h"],
    ["Vendredi", "8 h – 12 h 30 et 13 h 30 – 17 h"],
    ["Samedi et dimanche", "Fermé"],
  ] as [string, string][],
};

export type Faq = { q: string; a: string };

export const requestTypes = [
  { value: "plomberie", label: "Plomberie : fuite, sanitaire, robinetterie, tuyauterie" },
  { value: "gaz", label: "Gaz : installation, entretien, fuite" },
  { value: "chauffage", label: "Chauffage : chaudière, radiateurs, eau chaude" },
  { value: "syndic", label: "Syndic, copropriété ou professionnel" },
  { value: "autre", label: "Autre demande" },
] as const;

export const nav = [
  { href: PATHS.plumbing, label: "Plomberie" },
  { href: PATHS.gas, label: "Gaz" },
  { href: PATHS.heating, label: "Chauffage" },
];
