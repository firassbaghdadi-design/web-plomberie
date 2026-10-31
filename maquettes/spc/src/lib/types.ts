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

export type Page = {
  path: string;
  slug?: string;
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
  /** Thème de la photo du héros (couverture, plomberie, assainissement, particuliers) : photo de l'entreprise si possible. */
  photo: string;
  photoIndex?: number;
  /** Texte alternatif de repli. */
  caption?: string;
};
