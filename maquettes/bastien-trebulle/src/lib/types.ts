import type { Faq } from "./site";

export type Step = { t: string; d: string };

/** Une section de contenu. Si le titre est une question, `answer` est la réponse directe de 40 à 60 mots. */
export type Section = {
  h2: string;
  answer?: string;
  paras?: string[];
  list?: string[];
  listTitle?: string;
  steps?: Step[];
  after?: string[];
  /** Texte repris tel quel du site actuel. */
  original?: boolean;
};

export type PhotoSpec = { theme: "hero" | "couverture" | "plomberie" | "histoire" | "compteur" | "immeubles" | "toits"; n?: number };

export type Page = {
  path: string;
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
  faqTitle?: string;
  facts?: { label: string; value: string }[];
  ctaTitle: string;
  ctaText: string;
  related?: string[];
  /** Phrase d'introduction du bloc adresse, propre à chaque page. */
  approach: string;
  photo: PhotoSpec;
  caption?: string;
  /** Bloc spécifique inséré après « En bref ». */
  extra?: "histoire" | "realisations" | "partenaires" | "depannage";
};
