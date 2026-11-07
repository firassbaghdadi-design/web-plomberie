export const INDEXABLE = process.env.NEXT_PUBLIC_INDEXABLE === "true";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://entreprise-clairon.fr").replace(/\/$/, "");
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const LAST_UPDATED = "2026-10-27";

/** Adresses : les quatre premières reprennent les pages du site actuel (sans la barre finale, redirigée par Next). */
export const PATHS = {
  home: "/",
  plumbing: "/plomberie",
  roofing: "/couverture",
  heating: "/chauffage",
  legal: "/mentions-legales",
  contact: "/contact",
  sitemap: "/plan-du-site",
} as const;

/** Faits relevés sur entreprise-clairon.fr le 27 octobre 2026, et au registre (date d'immatriculation, dirigeant). */
export const business = {
  name: "Entreprise Clairon",
  short: "Clairon",
  legalName: "Société Clairon",
  tagline: "Plomberie, couverture et chauffage à Paris 15e",
  /** « Entreprise familiale créée en 1943 » : texte du site actuel. */
  founded: "1943",
  /** Date de création de la société au registre (classement de prospection). */
  registered: "1957",
  manager: "C. Cormier",
  phoneDisplay: "01 47 83 88 40",
  phoneTel: "+33147838840",
  email: "info@clairon.org",
  address: { street: "23 rue d'Ouessant", postalCode: "75015", city: "Paris", district: "Paris 15e" },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Entreprise+Clairon+23+rue+d%27Ouessant+75015+Paris",
  trades: ["Plomberie", "Couverture", "Chauffage", "Petite maçonnerie"],
  clients: "Particuliers, professionnels et syndics",
  area: "Paris 15e et les quartiers voisins",
};

export type Faq = { q: string; a: string };

export const requestTypes = [
  { value: "plomberie", label: "Plomberie : fuite, sanitaire, robinetterie, tuyauterie" },
  { value: "salle-de-bains", label: "Rénovation de salle de bains" },
  { value: "couverture", label: "Couverture : toiture, zinguerie, gouttières" },
  { value: "chauffage", label: "Chauffage : chaudière, radiateurs, eau chaude" },
  { value: "maconnerie", label: "Petite maçonnerie" },
  { value: "syndic", label: "Syndic, copropriété ou professionnel" },
  { value: "autre", label: "Autre demande" },
] as const;

export const nav = [
  { href: PATHS.plumbing, label: "Plomberie" },
  { href: PATHS.roofing, label: "Couverture" },
  { href: PATHS.heating, label: "Chauffage" },
];

/** URL publique de la maquette (déploiement Vercel) : l'image de partage doit s'afficher quand on envoie le lien, même avant la mise en ligne sur le vrai domaine. */
export const SHARE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : SITE_URL;
