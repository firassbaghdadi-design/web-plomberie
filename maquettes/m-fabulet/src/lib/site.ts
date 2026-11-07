export const INDEXABLE = process.env.NEXT_PUBLIC_INDEXABLE === "true";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://couverture-mfabulet.fr").replace(/\/$/, "");
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const LAST_UPDATED = "2026-11-04";

/**
 * Faits relevés par Firas (fiche Google, supports imprimés, Pages Jaunes) et sur couverture-mfabulet.fr, le 31/10/2026.
 * À faire confirmer : le 01 48 69 94 32 (fiche Google), les horaires (la fiche indique seulement « ouvre à 9 h le lundi »),
 * les jours de marché, le lien avec couvreur-fabulet-92.fr (Robert Fabulet, Nanterre, autre SIRET).
 */
export const business = {
  name: "M. Fabulet Couverture",
  short: "M. Fabulet",
  legalName: "M. Fabulet Couverture, entreprise artisanale",
  manager: "Emile Eric Fabulet",
  rm: "RM 444 070 197",
  tagline: "Couvreur charpentier à La Garenne-Colombes",
  phoneDisplay: "01 47 82 82 18",
  phoneTel: "+33147828218",
  mobileDisplay: "06 70 74 73 64",
  mobileTel: "+33670747364",
  email: "m.fabulet@live.fr",
  address: { street: "13, boulevard de la République", postalCode: "92250", city: "La Garenne-Colombes" },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=13+boulevard+de+la+R%C3%A9publique+92250+La+Garenne-Colombes",
  hours: "Ouverture à 9 h le lundi d'après la fiche Google ; autres horaires par téléphone",
  areaServed: ["La Garenne-Colombes", "Colombes", "Bois-Colombes", "Courbevoie", "Nanterre", "Asnières-sur-Seine", "Puteaux"],
  insurer: "Generali",
};

export const PATHS = {
  home: "/",
  company: "/l-entreprise",
  works: "/realisations",
  contact: "/contact",
  legal: "/mentions-legales",
  roofing: "/couverture-la-garenne-colombes",
  framing: "/charpente-la-garenne-colombes",
  zinc: "/zinguerie-gouttieres-la-garenne-colombes",
  velux: "/velux-la-garenne-colombes",
  insulation: "/isolation-combles-la-garenne-colombes",
  facade: "/ravalement-facade-la-garenne-colombes",
} as const;

export const nav = [
  { href: PATHS.roofing, label: "Couverture" },
  { href: PATHS.framing, label: "Charpente" },
  { href: PATHS.zinc, label: "Zinguerie" },
  { href: PATHS.velux, label: "Velux" },
  { href: PATHS.works, label: "Réalisations" },
  { href: PATHS.company, label: "L'entreprise" },
] as const;

export const requestTypes = [
  { value: "couverture", label: "Couverture, tuiles, ardoises, fuite de toit" },
  { value: "charpente", label: "Charpente, traitement de charpente" },
  { value: "zinguerie", label: "Zinguerie, gouttières zinc ou PVC" },
  { value: "velux", label: "Fenêtre de toit Velux" },
  { value: "isolation", label: "Isolation de grenier, combles" },
  { value: "ravalement", label: "Ravalement, peinture, traitement de façade" },
  { value: "autre", label: "Autre demande" },
] as const;

export type Faq = { q: string; a: string };

/** URL publique de la maquette (déploiement Vercel) : l'image de partage s'affiche même avant la mise en ligne sur le vrai domaine. */
export const SHARE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : SITE_URL;
