export const STATUTS = [
  "a_contacter",
  "maquette_envoyee",
  "ouverte",
  "appel_fait",
  "rendez_vous",
  "devis",
  "signe",
  "perdu",
] as const;
export type Statut = (typeof STATUTS)[number];

export const STATUT_LABEL: Record<Statut, string> = {
  a_contacter: "À contacter",
  maquette_envoyee: "Maquette envoyée",
  ouverte: "Ouverte",
  appel_fait: "Appel fait",
  rendez_vous: "Rendez-vous",
  devis: "Devis",
  signe: "Signé",
  perdu: "Perdu",
};

/** Probabilité de signer selon l'étape : sert au chiffre d'affaires « en devis » pondéré. */
export const PONDERATION: Record<Statut, number> = {
  a_contacter: 0.05,
  maquette_envoyee: 0.1,
  ouverte: 0.2,
  appel_fait: 0.3,
  rendez_vous: 0.5,
  devis: 0.7,
  signe: 1,
  perdu: 0,
};

export const FORMULES = ["essentiel", "visibilite", "croissance", "personnalise"] as const;
export type Formule = (typeof FORMULES)[number];

export const FORMULE_INFO: Record<Formule, { label: string; prix: number | null; mensuel: number | null }> = {
  essentiel: { label: "Essentiel", prix: 1490, mensuel: 49 },
  visibilite: { label: "Visibilité", prix: 2490, mensuel: 99 },
  croissance: { label: "Croissance", prix: 3490, mensuel: 199 },
  personnalise: { label: "Personnalisé", prix: null, mensuel: null },
};

export const EVENT_TYPES = [
  "note",
  "appel",
  "email_envoye",
  "email_ouvert",
  "clic",
  "reponse",
  "rendez_vous",
  "devis",
  "signature",
  "statut",
  "relance",
  "maquette",
] as const;
export type EventType = (typeof EVENT_TYPES)[number];

export const EVENT_LABEL: Record<EventType, string> = {
  note: "Note",
  appel: "Appel",
  email_envoye: "E-mail envoyé",
  email_ouvert: "E-mail ouvert",
  clic: "Clic sur la maquette",
  reponse: "Réponse reçue",
  rendez_vous: "Rendez-vous",
  devis: "Devis",
  signature: "Signature",
  statut: "Changement d'étape",
  relance: "Relance",
  maquette: "Maquette",
};

export interface Prospect {
  id: string;
  entreprise: string;
  dirigeant: string;
  emails: string[];
  telephone: string;
  ville: string;
  arrondissement: string;
  siteActuel: string;
  maquetteUrl: string;
  score: number | null;
  statut: Statut;
  vague: number | null;
  rang: number | null;
  /** texte libre : angle de l'offre à proposer */
  offre: string;
  /** formule commerciale choisie ("" = pas encore choisie) */
  formule: Formule | "";
  /** montant du devis, en euros HT */
  montantDevis: number | null;
  /** abonnement mensuel, en euros HT */
  montantMensuel: number | null;
  /** jour de signature AAAA-MM-JJ (Paris) */
  signeLe: string | null;
  notes: string;
  /** vrai quand la personne a répondu : plus aucune relance automatique */
  aRepondu: boolean;
  /** "ne plus contacter" */
  stop: boolean;
  creeLe: string;
  modifieLe: string;
}

export interface Evenement {
  id: string;
  prospectId: string;
  type: EventType;
  date: string;
  titre: string;
  detail: string;
  emailId?: string;
}

export type EmailStatut = "brouillon" | "planifie" | "envoye" | "echec" | "annule";

export interface Email {
  /** identifiant d'envoi : sert au pixel et au lien suivi */
  id: string;
  prospectId: string;
  modeleId: string;
  objet: string;
  corps: string;
  destinataire: string;
  statut: EmailStatut;
  creeLe: string;
  envoyeLe: string | null;
  /** adresse vers laquelle /t/c/[id] redirige */
  cible: string;
  ouvertures: number;
  clics: number;
  premiereOuvertureLe: string | null;
  erreur: string;
}

export type RelanceStatut = "planifiee" | "envoyee" | "annulee";

export interface Relance {
  id: string;
  prospectId: string;
  modeleId: string;
  echeance: string; // AAAA-MM-JJ, Paris
  statut: RelanceStatut;
  motif: string;
  creeLe: string;
}

export interface Modele {
  id: string;
  numero: number;
  nom: string;
  quand: string;
  objet: string;
  corps: string;
}

export const GENRES_AGENDA = ["rendez_vous", "rappel"] as const;
export type GenreAgenda = (typeof GENRES_AGENDA)[number];
export const GENRE_AGENDA_LABEL: Record<GenreAgenda, string> = { rendez_vous: "Rendez-vous", rappel: "Rappel" };

export interface RendezVous {
  id: string;
  /** null : rendez-vous ou rappel sans prospect */
  prospectId: string | null;
  genre: GenreAgenda;
  titre: string;
  /** début, ISO 8601 UTC (saisi en heure de Paris) */
  debut: string;
  dureeMin: number;
  lieu: string;
  detail: string;
  fait: boolean;
  creeLe: string;
  modifieLe: string;
}

export interface Reglages {
  /** objectif de chiffre d'affaires signé par mois, en euros */
  objectifMensuel: number;
}

export const REGLAGES_DEFAUT: Reglages = { objectifMensuel: 5000 };

export interface Db {
  version: 1;
  reglages: Reglages;
  agenda: RendezVous[];
  prospects: Prospect[];
  evenements: Evenement[];
  emails: Email[];
  relances: Relance[];
  modeles: Modele[];
}
