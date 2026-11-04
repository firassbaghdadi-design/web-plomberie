import type { Faq } from "./site";

/** Une section de contenu. Si le titre est une question, `answer` est la réponse directe de 40 à 60 mots. */
export type Section = {
  h2: string;
  answer?: string;
  paras?: string[];
  list?: string[];
  listTitle?: string;
  /** Photo montrée à côté de la section. */
  photo?: string;
  /** Texte repris du site actuel (couverture-mfabulet.fr). */
  original?: boolean;
};

export type Page = {
  path: string;
  kind: "metier" | "zone" | "maison";
  zone?: string;
  title: string;
  description: string;
  h1: string;
  kicker: string;
  lead: string;
  brief: string;
  contactType: string;
  service?: string;
  crumb: string;
  sections: Section[];
  faq: Faq[];
  ctaTitle: string;
  related: string[];
  photo: string;
  photoPos?: string;
  /** Repère institutionnel de la commune (pages zone). */
  landmark?: string;
};
