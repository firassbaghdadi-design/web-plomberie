import { rousseau } from "./brands/rousseau";
import { sandrin } from "./brands/sandrin";

export const INDEXABLE = process.env.NEXT_PUBLIC_INDEXABLE === "true";

export const brand = process.env.NEXT_PUBLIC_BRAND === "sandrin" ? sandrin : rousseau;

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? brand.siteUrl).replace(/\/$/, "");

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export const LAST_UPDATED = "2026-10-20";

export const business = brand.business;
export const sister = brand.sister;
export const copy = brand.copy;

export const PATHS = {
  home: "/",
  bathrooms: "/salles-de-bains-douches",
  plumbing: "/nos-services-plomberie",
  heating: "/nos-services-chauffage",
  contact: "/nous-contacter-ou-envoyer-un-message-sur-formulaire",
} as const;

export const nav = [
  { href: PATHS.home, label: "Accueil" },
  { href: PATHS.bathrooms, label: "Salles de bains / douches" },
  { href: PATHS.plumbing, label: "Plomberie" },
  { href: PATHS.heating, label: "Chauffage" },
  { href: PATHS.contact, label: "Contact" },
] as const;

export const reviews = brand.reviews;

export const services = {
  plumbing: { path: PATHS.plumbing, ...brand.services.plumbing },
  heating: { path: PATHS.heating, ...brand.services.heating },
  bathrooms: { path: PATHS.bathrooms, ...brand.services.bathrooms },
};

export const steps = brand.steps;
export const reflexes = brand.reflexes;
export const emergency = brand.emergency;
export const faqs = brand.faqs;
export const shortAnswer = brand.shortAnswer;

export const requestTypes = [
  { value: "urgence", label: "Dépannage urgent (fuite, engorgement…)" },
  { value: "plomberie", label: "Plomberie (sanitaires, robinetterie, chauffe-eau)" },
  { value: "chauffage", label: "Chauffage (chaudière, radiateurs, entretien)" },
  { value: "salle-de-bains", label: "Salle de bains / douche (installation, rénovation)" },
  { value: "autre", label: "Autre demande" },
] as const;
