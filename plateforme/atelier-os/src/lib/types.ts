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
  offre: string;
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

export interface Db {
  version: 1;
  prospects: Prospect[];
  evenements: Evenement[];
  emails: Email[];
  relances: Relance[];
  modeles: Modele[];
}
