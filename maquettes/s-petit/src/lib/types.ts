import type { Faq } from "./site";

/** Une section de contenu. Si le titre est une question, `answer` est la réponse directe de 40 à 60 mots. */
export type Section = {
  h2: string;
  answer?: string;
  paras?: string[];
  list?: string[];
  listTitle?: string;
};

export type Page = {
  path: string;
  zone: string;
  title: string;
  description: string;
  h1: string;
  kicker: string;
  lead: string;
  brief: string;
  contactType: string;
  service: string;
  crumb: string;
  sections: Section[];
  faq: Faq[];
  faqTitle?: string;
  /** Texte d'introduction du bloc adresse, propre à la page. */
  approach: string;
  ctaTitle: string;
  ctaText: string;
  related: string[];
  photo: string;
  photoPos?: string;
  caption?: string;
};
