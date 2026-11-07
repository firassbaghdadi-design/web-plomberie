/**
 * Envoyeur d'e-mails. DÉSACTIVÉ PAR DÉFAUT : rien ne part tant que EMAIL_SENDING_ENABLED
 * n'est pas "true" ET qu'un transport réel est branché dans `transport` ci-dessous.
 *
 * Garde-fous (toujours appliqués, dans cet ordre) :
 *  1. envoi activé,
 *  2. jamais le week-end (heure de Paris),
 *  3. uniquement entre 8 h et 9 h 30, ou entre 13 h 30 et 14 h 30 (heure de Paris),
 *  4. 15 e-mails par jour au maximum,
 *  5. pas de prospect qui a répondu ou demandé l'arrêt,
 *  6. une adresse de destination valide.
 */
import { readDb } from "./db";
import { jourParis, partiesParis } from "./dates";
import { marquerEchec, marquerEnvoye } from "./service";
import type { Email } from "./types";

export const MAX_PAR_JOUR = 15;
export const CRENEAUX = [
  { debut: 8 * 60, fin: 9 * 60 + 30, label: "8 h – 9 h 30" },
  { debut: 13 * 60 + 30, fin: 14 * 60 + 30, label: "13 h 30 – 14 h 30" },
];

export interface MessageASortir {
  id: string;
  a: string;
  objet: string;
  corps: string;
}

/**
 * À brancher plus tard : connecteur Gmail (brouillon puis envoi) ou Resend.
 * Doit lever une erreur en cas d'échec. Texte brut uniquement.
 */
async function transport(_message: MessageASortir): Promise<void> {
  throw new Error("Aucun transport d'envoi n'est branché (Gmail ou Resend).");
}

export const envoiActive = () => process.env.EMAIL_SENDING_ENABLED === "true";

export type Refus = { ok: false; raison: string };
export type VerdictEnvoi = { ok: true } | Refus;

export function verifierCreneau(maintenant: Date = new Date()): VerdictEnvoi {
  const p = partiesParis(maintenant);
  if (p.jourSemaine > 5) return { ok: false, raison: "Pas d'envoi le week-end." };
  const minutes = p.heure * 60 + p.minute;
  if (!CRENEAUX.some((c) => minutes >= c.debut && minutes <= c.fin))
    return { ok: false, raison: `Hors créneau : envois de ${CRENEAUX.map((c) => c.label).join(" ou ")} (heure de Paris).` };
  return { ok: true };
}

export function verifierQuota(envoyesAujourdhui: number): VerdictEnvoi {
  return envoyesAujourdhui >= MAX_PAR_JOUR ? { ok: false, raison: `Limite de ${MAX_PAR_JOUR} e-mails par jour atteinte.` } : { ok: true };
}

export async function etatEnvoyeur(maintenant: Date = new Date()) {
  const db = await readDb();
  const aujourdhui = jourParis(maintenant);
  const envoyesAujourdhui = db.emails.filter((m) => m.statut === "envoye" && m.envoyeLe && jourParis(m.envoyeLe) === aujourdhui).length;
  const creneau = verifierCreneau(maintenant);
  return {
    active: envoiActive(),
    transportBranche: false,
    maxParJour: MAX_PAR_JOUR,
    envoyesAujourdhui,
    restantAujourdhui: Math.max(0, MAX_PAR_JOUR - envoyesAujourdhui),
    creneauxOuverts: creneau.ok,
    creneauxLabel: CRENEAUX.map((c) => c.label).join(" · "),
    raisonCreneau: creneau.ok ? "" : creneau.raison,
  };
}

export type ResultatEnvoi = { envoye: true; email: Email } | { envoye: false; raison: string };

/** Point d'entrée unique pour envoyer un e-mail du journal. */
export async function send(emailId: string, maintenant: Date = new Date()): Promise<ResultatEnvoi> {
  if (!envoiActive()) return { envoye: false, raison: "Envoi désactivé (EMAIL_SENDING_ENABLED n'est pas à « true »)." };

  const db = await readDb();
  const mail = db.emails.find((m) => m.id === emailId);
  if (!mail) return { envoye: false, raison: "E-mail introuvable." };
  if (mail.statut === "envoye") return { envoye: false, raison: "Cet e-mail est déjà parti." };
  if (mail.statut === "annule") return { envoye: false, raison: "Cet e-mail est annulé." };
  const p = db.prospects.find((x) => x.id === mail.prospectId);
  if (!p) return { envoye: false, raison: "Prospect introuvable." };
  if (p.stop) return { envoye: false, raison: "Ce prospect ne veut plus être contacté." };
  if (p.aRepondu && mail.modeleId !== "m4" && mail.modeleId !== "m-confirmation" && mail.modeleId !== "m6")
    return { envoye: false, raison: "Ce prospect a déjà répondu : plus de relance automatique." };
  if (!mail.destinataire) return { envoye: false, raison: "Aucune adresse de destination." };

  const creneau = verifierCreneau(maintenant);
  if (!creneau.ok) return { envoye: false, raison: creneau.raison };
  const aujourdhui = jourParis(maintenant);
  const deja = db.emails.filter((m) => m.statut === "envoye" && m.envoyeLe && jourParis(m.envoyeLe) === aujourdhui).length;
  const quota = verifierQuota(deja);
  if (!quota.ok) return { envoye: false, raison: quota.raison };

  try {
    await transport({ id: mail.id, a: mail.destinataire, objet: mail.objet, corps: mail.corps });
  } catch (e) {
    const raison = e instanceof Error ? e.message : "Échec de l'envoi.";
    await marquerEchec(mail.id, raison);
    return { envoye: false, raison };
  }
  return { envoye: true, email: await marquerEnvoye(mail.id) };
}
