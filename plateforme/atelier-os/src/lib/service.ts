import { updateDb, readDb, nouvelId } from "./db";
import { ajouterJours, debutDeSemaine, formatJour, heureParis, jourParis, parisVersIso, prochainJourOuvre } from "./dates";
import { RELANCES_PAR_DEFAUT } from "@/data/modeles";
import { PROSPECT_DEFAUTS } from "./migration";
import { ecrireCsv, lireCsv } from "./csv";
import {
  EVENT_TYPES,
  FORMULES,
  FORMULE_INFO,
  PONDERATION,
  type Formule,
  type GenreAgenda,
  type Reglages,
  type RendezVous,
  GENRES_AGENDA,
  GENRE_AGENDA_LABEL,
  STATUT_LABEL,
  STATUTS,
  type Db,
  type Email,
  type EventType,
  type Evenement,
  type Modele,
  type Prospect,
  type Relance,
  type Statut,
} from "./types";

export class ErreurMetier extends Error {
  constructor(
    message: string,
    public statut = 400,
  ) {
    super(message);
  }
}

const maintenant = () => new Date().toISOString();
const rang = (s: Statut) => STATUTS.indexOf(s);

/* ------------------------------------------------------------------ validation */

const texte = (v: unknown, max = 5000) => (typeof v === "string" ? v.trim().slice(0, max) : undefined);

const courriel = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function listeEmails(v: unknown): string[] | undefined {
  if (v === undefined) return undefined;
  const arr = Array.isArray(v) ? v : typeof v === "string" ? v.split(/[,;\s]+/) : [];
  const propres = arr.map((x) => String(x).trim().toLowerCase()).filter(Boolean);
  for (const e of propres) if (!courriel.test(e)) throw new ErreurMetier(`Adresse e-mail invalide : ${e}`);
  return Array.from(new Set(propres));
}

function url(v: unknown, champ: string): string | undefined {
  const t = texte(v, 500);
  if (t === undefined || t === "") return t;
  if (!/^https?:\/\//i.test(t)) throw new ErreurMetier(`${champ} : l'adresse doit commencer par http:// ou https://`);
  return t;
}

export interface EntreeProspect {
  entreprise?: unknown;
  dirigeant?: unknown;
  emails?: unknown;
  telephone?: unknown;
  ville?: unknown;
  arrondissement?: unknown;
  siteActuel?: unknown;
  maquetteUrl?: unknown;
  score?: unknown;
  statut?: unknown;
  vague?: unknown;
  offre?: unknown;
  notes?: unknown;
  stop?: unknown;
  formule?: unknown;
  montantDevis?: unknown;
  montantMensuel?: unknown;
  signeLe?: unknown;
}

/** Montant en euros : accepte 1490, "1 490", "1490,50". Vide ou null : null. */
function montant(v: unknown, champ: string): number | null | undefined {
  if (v === undefined) return undefined;
  if (v === null || v === "") return null;
  const n = typeof v === "number" ? v : Number(String(v).replace(/[\s\u00a0\u202f€]/g, "").replace(",", "."));
  if (!Number.isFinite(n) || n < 0 || n > 10_000_000) throw new ErreurMetier(`${champ} : un montant en euros (nombre positif)`);
  return Math.round(n * 100) / 100;
}

function jourOuNull(v: unknown, champ: string): string | null | undefined {
  if (v === undefined) return undefined;
  if (v === null || v === "") return null;
  const t = String(v).trim().slice(0, 10);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(t) || isNaN(Date.parse(t))) throw new ErreurMetier(`${champ} : format AAAA-MM-JJ`);
  return t;
}

function nettoyerProspect(e: EntreeProspect): Partial<Prospect> {
  const out: Partial<Prospect> = {};
  const set = <K extends keyof Prospect>(k: K, v: Prospect[K] | undefined) => {
    if (v !== undefined) out[k] = v;
  };
  set("entreprise", texte(e.entreprise, 200));
  set("dirigeant", texte(e.dirigeant, 200));
  set("emails", listeEmails(e.emails));
  set("telephone", texte(e.telephone, 40));
  set("ville", texte(e.ville, 100));
  set("arrondissement", texte(e.arrondissement, 20));
  set("siteActuel", url(e.siteActuel, "siteActuel"));
  set("maquetteUrl", url(e.maquetteUrl, "maquetteUrl"));
  set("offre", texte(e.offre, 500));
  set("notes", texte(e.notes, 20000));
  if (e.score !== undefined) {
    if (e.score === null || e.score === "") out.score = null;
    else {
      const n = Number(e.score);
      if (!Number.isFinite(n) || n < 0 || n > 100) throw new ErreurMetier("score : un nombre entre 0 et 100");
      out.score = Math.round(n);
    }
  }
  if (e.vague !== undefined) {
    if (e.vague === null || e.vague === "") out.vague = null;
    else {
      const n = Number(e.vague);
      if (!Number.isInteger(n) || n < 1 || n > 9) throw new ErreurMetier("vague : un entier entre 1 et 9");
      out.vague = n;
    }
  }
  if (e.statut !== undefined) {
    if (!STATUTS.includes(e.statut as Statut)) throw new ErreurMetier(`statut : l'une de ${STATUTS.join(", ")}`);
    out.statut = e.statut as Statut;
  }
  if (e.stop !== undefined) out.stop = Boolean(e.stop);
  if (e.formule !== undefined) {
    const f = e.formule === null ? "" : String(e.formule);
    if (f !== "" && !FORMULES.includes(f as Formule)) throw new ErreurMetier(`formule : l'une de ${FORMULES.join(", ")} (ou vide)`);
    out.formule = f as Formule | "";
  }
  set("montantDevis", montant(e.montantDevis, "montantDevis"));
  set("montantMensuel", montant(e.montantMensuel, "montantMensuel"));
  set("signeLe", jourOuNull(e.signeLe, "signeLe"));
  return out;
}

/** Choisir une formule remplit les montants qui ne sont pas fournis ; passer à « signé » date la signature. */
function completerVente(p: Prospect, champs: Partial<Prospect>) {
  if (champs.formule && champs.formule !== "personnalise") {
    const info = FORMULE_INFO[champs.formule];
    if (champs.montantDevis === undefined) p.montantDevis = info.prix;
    if (champs.montantMensuel === undefined) p.montantMensuel = info.mensuel;
  }
  if (p.statut === "signe" && !p.signeLe) p.signeLe = jourParis();
}

/* ------------------------------------------------------------------ utilitaires internes */

function trouver(db: Db, id: string): Prospect {
  const p = db.prospects.find((x) => x.id === id);
  if (!p) throw new ErreurMetier("Prospect introuvable", 404);
  return p;
}

function journal(db: Db, prospectId: string, type: EventType, titre: string, detail = "", extra: Partial<Evenement> = {}) {
  const ev: Evenement = { id: nouvelId("ev"), prospectId, type, titre, detail, date: maintenant(), ...extra };
  db.evenements.push(ev);
  return ev;
}

function avancer(db: Db, p: Prospect, cible: Statut, raison: string) {
  if (p.statut === "perdu" || p.statut === "signe") return;
  if (rang(cible) > rang(p.statut) && cible !== "perdu") {
    const avant = p.statut;
    p.statut = cible;
    p.modifieLe = maintenant();
    journal(db, p.id, "statut", `Étape : ${STATUT_LABEL[avant]} → ${STATUT_LABEL[cible]}`, raison);
  }
}

function annulerRelances(db: Db, prospectId: string, motif: string) {
  let n = 0;
  for (const r of db.relances) {
    if (r.prospectId === prospectId && r.statut === "planifiee") {
      r.statut = "annulee";
      r.motif = motif;
      n++;
    }
  }
  return n;
}

/** Arrêt automatique des relances : réponse, refus, signature ou perte. */
function reglerRelances(db: Db, p: Prospect) {
  if (p.aRepondu) annulerRelances(db, p.id, "Réponse reçue");
  else if (p.stop) annulerRelances(db, p.id, "Ne plus contacter");
  else if (p.statut === "perdu" || p.statut === "signe") annulerRelances(db, p.id, p.statut === "perdu" ? "Prospect perdu" : "Signé");
}

/* ------------------------------------------------------------------ prospects */

export async function listerProspects() {
  return (await readDb()).prospects;
}

/** Insère un prospect déjà validé dans la base (identifiant unique tiré du nom). */
function insererProspect(db: Db, champs: Partial<Prospect>, note = "Prospect créé"): Prospect {
  const t = maintenant();
  const base = champs.entreprise!
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  let id = base || nouvelId("p");
  let i = 2;
  while (db.prospects.some((p) => p.id === id)) id = `${base}-${i++}`;
  const p: Prospect = {
    id,
    entreprise: "",
    dirigeant: "",
    emails: [],
    telephone: "",
    ville: "Paris",
    arrondissement: "",
    siteActuel: "",
    maquetteUrl: "",
    score: null,
    statut: "a_contacter",
    vague: null,
    rang: null,
    offre: "",
    notes: "",
    aRepondu: false,
    stop: false,
    creeLe: t,
    modifieLe: t,
    ...PROSPECT_DEFAUTS,
    ...champs,
  };
  completerVente(p, champs);
  db.prospects.push(p);
  journal(db, p.id, "note", note);
  return p;
}

export async function creerProspect(entree: EntreeProspect): Promise<Prospect> {
  const champs = nettoyerProspect(entree);
  if (!champs.entreprise) throw new ErreurMetier("entreprise : obligatoire");
  return updateDb((db) => insererProspect(db, champs));
}

export async function modifierProspect(id: string, entree: EntreeProspect, motif = "Modifiée à la main"): Promise<Prospect> {
  const champs = nettoyerProspect(entree);
  if (champs.entreprise === "") throw new ErreurMetier("entreprise : ne peut pas être vide");
  return updateDb((db) => {
    const p = trouver(db, id);
    const avant = p.statut;
    const avantMaquette = p.maquetteUrl;
    Object.assign(p, champs, { modifieLe: maintenant() });
    completerVente(p, champs);
    if (champs.statut && champs.statut !== avant) {
      journal(db, p.id, "statut", `Étape : ${STATUT_LABEL[avant]} → ${STATUT_LABEL[p.statut]}`, motif);
    }
    if (champs.maquetteUrl && champs.maquetteUrl !== avantMaquette) journal(db, p.id, "maquette", "Lien de la maquette enregistré", champs.maquetteUrl);
    if (champs.stop === true) journal(db, p.id, "note", "Marqué « ne plus contacter »");
    reglerRelances(db, p);
    return p;
  });
}

/** Glisser-déposer du pipeline : change l'étape et journalise un événement « statut ». */
export async function deplacerProspect(id: unknown, statut: unknown): Promise<Prospect> {
  const pid = texte(id, 100);
  if (!pid) throw new ErreurMetier("prospectId : obligatoire");
  if (!STATUTS.includes(statut as Statut)) throw new ErreurMetier(`statut : l'une de ${STATUTS.join(", ")}`);
  return modifierProspect(pid, { statut }, "Déplacé dans le pipeline");
}

export async function supprimerProspect(id: string): Promise<void> {
  await updateDb((db) => {
    trouver(db, id);
    db.prospects = db.prospects.filter((p) => p.id !== id);
    db.evenements = db.evenements.filter((e) => e.prospectId !== id);
    db.emails = db.emails.filter((e) => e.prospectId !== id);
    db.relances = db.relances.filter((r) => r.prospectId !== id);
    db.agenda = db.agenda.filter((r) => r.prospectId !== id);
  });
}

/* ------------------------------------------------------------------ événements */

export interface EntreeEvenement {
  type?: unknown;
  titre?: unknown;
  detail?: unknown;
  date?: unknown;
}

export async function ajouterEvenement(prospectId: string, e: EntreeEvenement): Promise<Evenement> {
  const type = e.type as EventType;
  if (!EVENT_TYPES.includes(type)) throw new ErreurMetier(`type : l'un de ${EVENT_TYPES.join(", ")}`);
  const detail = texte(e.detail, 10000) ?? "";
  let date = maintenant();
  if (e.date !== undefined && e.date !== "") {
    const d = new Date(String(e.date));
    if (isNaN(d.getTime())) throw new ErreurMetier("date : format ISO attendu (2026-10-26T09:00:00Z)");
    date = d.toISOString();
  }
  const defauts: Partial<Record<EventType, string>> = {
    note: "Note",
    appel: "Appel",
    email_envoye: "E-mail envoyé",
    reponse: "Réponse reçue",
    rendez_vous: "Rendez-vous",
    devis: "Devis envoyé",
    signature: "Signature",
  };
  const titre = texte(e.titre, 200) || defauts[type] || type;
  return updateDb((db) => {
    const p = trouver(db, prospectId);
    const ev = journal(db, p.id, type, titre, detail, { date });
    p.modifieLe = maintenant();
    if (type === "appel") avancer(db, p, "appel_fait", "Appel enregistré");
    if (type === "rendez_vous") avancer(db, p, "rendez_vous", "Rendez-vous enregistré");
    if (type === "devis") avancer(db, p, "devis", "Devis enregistré");
    if (type === "email_envoye") avancer(db, p, "maquette_envoyee", "E-mail enregistré");
    if (type === "signature") {
      p.statut = "signe";
      p.aRepondu = true;
      if (!p.signeLe) p.signeLe = jourParis(date);
    }
    if (type === "reponse") p.aRepondu = true;
    reglerRelances(db, p);
    return ev;
  });
}

export async function supprimerEvenement(id: string) {
  await updateDb((db) => {
    if (!db.evenements.some((e) => e.id === id)) throw new ErreurMetier("Événement introuvable", 404);
    db.evenements = db.evenements.filter((e) => e.id !== id);
  });
}

/* ------------------------------------------------------------------ e-mails */

export function nomDeFamille(dirigeant: string): string {
  const premier = dirigeant.split(/,| et /)[0].replace(/\(.*?\)/g, "").trim();
  const mots = premier.split(/\s+/).filter((m) => !/^[A-ZÉ]\.?(-[A-Z]\.?)?$/.test(m));
  return mots.join(" ");
}

export function rendreModele(m: Modele, p: Prospect, lien: string) {
  const nom = nomDeFamille(p.dirigeant);
  const remplace = (s: string) =>
    s
      .replace(/\[Nom\]/g, nom || "[Nom]")
      .replace(/\[lien\]/g, lien || "[lien]")
      .replace(/\[plomberie\]/g, "plomberie")
      .replace(/\[16e\]/g, p.arrondissement || "[arrondissement]");
  return { objet: remplace(m.objet), corps: remplace(m.corps) };
}

export interface EntreeEmail {
  prospectId?: unknown;
  modeleId?: unknown;
  objet?: unknown;
  corps?: unknown;
  destinataire?: unknown;
  statut?: unknown;
  envoyeLe?: unknown;
  cible?: unknown;
}

/**
 * Crée une entrée du journal. Par défaut en brouillon (rien n'est envoyé).
 * Avec statut "envoye" on enregistre un e-mail déjà parti (envoi manuel depuis Gmail, par exemple).
 */
export async function creerEmail(e: EntreeEmail, baseUrl: string): Promise<Email> {
  const prospectId = texte(e.prospectId, 100);
  if (!prospectId) throw new ErreurMetier("prospectId : obligatoire");
  const statut = (texte(e.statut, 20) || "brouillon") as Email["statut"];
  if (!["brouillon", "planifie", "envoye"].includes(statut)) throw new ErreurMetier("statut : brouillon, planifie ou envoye");
  const cibleSaisie = url(e.cible, "cible");
  const id = nouvelId("e").slice(2, 16);
  return updateDb((db) => {
    const p = trouver(db, prospectId);
    const modele = db.modeles.find((m) => m.id === texte(e.modeleId, 50));
    const cible = cibleSaisie || p.maquetteUrl;
    const lien = cible ? `${baseUrl}/t/c/${id}` : "";
    const rendu = modele ? rendreModele(modele, p, lien) : { objet: "", corps: "" };
    const objet = texte(e.objet, 300) ?? rendu.objet;
    const corps = texte(e.corps, 20000) ?? rendu.corps;
    if (!objet || !corps) throw new ErreurMetier("objet et corps (ou modeleId) : obligatoires");
    const dest = texte(e.destinataire, 200)?.toLowerCase() || p.emails[0] || "";
    if (dest && !courriel.test(dest)) throw new ErreurMetier("destinataire : adresse invalide");
    const mail: Email = {
      id,
      prospectId,
      modeleId: modele?.id ?? "",
      objet,
      corps,
      destinataire: dest,
      statut: "brouillon",
      creeLe: maintenant(),
      envoyeLe: null,
      cible,
      ouvertures: 0,
      clics: 0,
      premiereOuvertureLe: null,
      erreur: "",
    };
    db.emails.push(mail);
    if (statut === "envoye") {
      const d = e.envoyeLe ? new Date(String(e.envoyeLe)) : new Date();
      if (isNaN(d.getTime())) throw new ErreurMetier("envoyeLe : format ISO attendu");
      appliquerEnvoi(db, mail, d.toISOString());
    } else mail.statut = statut;
    return mail;
  });
}

/** Marque un e-mail comme envoyé, journalise, avance l'étape et planifie les relances. */
function appliquerEnvoi(db: Db, mail: Email, quand: string) {
  mail.statut = "envoye";
  mail.envoyeLe = quand;
  mail.erreur = "";
  const p = trouver(db, mail.prospectId);
  journal(db, p.id, "email_envoye", `E-mail envoyé : ${mail.objet}`, mail.destinataire ? `À ${mail.destinataire}` : "", {
    emailId: mail.id,
    date: quand,
  });
  const premierMail = mail.modeleId === "m1";
  if (premierMail) avancer(db, p, "maquette_envoyee", "Premier e-mail envoyé");
  if (premierMail && !p.aRepondu && !p.stop) planifierRelancesParDefaut(db, p.id, quand);
  const relance = db.relances.find((r) => r.prospectId === p.id && r.statut === "planifiee" && r.modeleId === mail.modeleId);
  if (relance) relance.statut = "envoyee";
}

function planifierRelancesParDefaut(db: Db, prospectId: string, depuis: string) {
  const base = jourParis(depuis);
  for (const etape of RELANCES_PAR_DEFAUT) {
    if (db.relances.some((r) => r.prospectId === prospectId && r.modeleId === etape.modeleId && r.statut !== "annulee")) continue;
    db.relances.push({
      id: nouvelId("r"),
      prospectId,
      modeleId: etape.modeleId,
      echeance: prochainJourOuvre(ajouterJours(base, etape.jours)),
      statut: "planifiee",
      motif: "",
      creeLe: maintenant(),
    });
  }
}

export async function marquerEnvoye(emailId: string) {
  return updateDb((db) => {
    const m = db.emails.find((x) => x.id === emailId);
    if (!m) throw new ErreurMetier("E-mail introuvable", 404);
    appliquerEnvoi(db, m, maintenant());
    return m;
  });
}

export async function marquerEchec(emailId: string, erreur: string) {
  return updateDb((db) => {
    const m = db.emails.find((x) => x.id === emailId);
    if (!m) throw new ErreurMetier("E-mail introuvable", 404);
    m.statut = "echec";
    m.erreur = erreur.slice(0, 500);
    return m;
  });
}

export async function annulerEmail(emailId: string) {
  return updateDb((db) => {
    const m = db.emails.find((x) => x.id === emailId);
    if (!m) throw new ErreurMetier("E-mail introuvable", 404);
    if (m.statut === "envoye") throw new ErreurMetier("Cet e-mail est déjà parti", 409);
    m.statut = "annule";
    return m;
  });
}

/* ------------------------------------------------------------------ relances */

export async function creerRelance(e: { prospectId?: unknown; modeleId?: unknown; echeance?: unknown }): Promise<Relance> {
  const prospectId = texte(e.prospectId, 100);
  const modeleId = texte(e.modeleId, 50);
  const echeance = texte(e.echeance, 10);
  if (!prospectId || !modeleId || !echeance) throw new ErreurMetier("prospectId, modeleId et echeance (AAAA-MM-JJ) : obligatoires");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(echeance)) throw new ErreurMetier("echeance : format AAAA-MM-JJ");
  return updateDb((db) => {
    const p = trouver(db, prospectId);
    if (!db.modeles.some((m) => m.id === modeleId)) throw new ErreurMetier("modeleId inconnu");
    if (p.aRepondu || p.stop) throw new ErreurMetier("Ce prospect a répondu ou ne veut plus être contacté : aucune relance possible", 409);
    const r: Relance = { id: nouvelId("r"), prospectId, modeleId, echeance, statut: "planifiee", motif: "", creeLe: maintenant() };
    db.relances.push(r);
    journal(db, p.id, "relance", `Relance planifiée pour le ${echeance}`, modeleId);
    return r;
  });
}

export async function annulerRelance(id: string, motif = "Annulée à la main"): Promise<Relance> {
  return updateDb((db) => {
    const r = db.relances.find((x) => x.id === id);
    if (!r) throw new ErreurMetier("Relance introuvable", 404);
    if (r.statut !== "planifiee") throw new ErreurMetier("Cette relance n'est plus planifiée", 409);
    r.statut = "annulee";
    r.motif = motif;
    journal(db, r.prospectId, "relance", "Relance annulée", motif);
    return r;
  });
}

/* ------------------------------------------------------------------ suivi (pixel et clic) */

const ROBOTS =
  /bot|crawl|spider|slurp|preview|facebookexternalhit|whatsapp|telegram|slack|skype|headless|phantom|curl|wget|python|node-fetch|axios|go-http|java\/|libwww|monitor|uptime|scanner|barracuda|proofpoint|mimecast|symantec|trendmicro|safelinks|bingpreview|yahoo! slurp|googleimageproxy|ggpht|feedfetcher|mail\.ru|virustotal|urlscan/i;

export const estRobot = (ua: string | null) => !ua || ROBOTS.test(ua);

export async function enregistrerSuivi(emailId: string, genre: "ouverture" | "clic", ua: string | null): Promise<Email | null> {
  if (estRobot(ua)) return null;
  const db0 = await readDb();
  const m0 = db0.emails.find((x) => x.id === emailId);
  if (!m0 || m0.statut !== "envoye" || !m0.envoyeLe) return null;
  if (Date.now() - new Date(m0.envoyeLe).getTime() < 10_000) return null;
  return updateDb((db) => {
    const m = db.emails.find((x) => x.id === emailId);
    if (!m) return null;
    const p = db.prospects.find((x) => x.id === m.prospectId);
    if (!p) return null;
    if (genre === "ouverture") {
      m.ouvertures++;
      if (!m.premiereOuvertureLe) {
        m.premiereOuvertureLe = maintenant();
        journal(db, p.id, "email_ouvert", `E-mail ouvert : ${m.objet}`, "", { emailId: m.id });
      }
      avancer(db, p, "ouverte", "E-mail ouvert");
    } else {
      m.clics++;
      journal(db, p.id, "clic", "Clic sur le lien de la maquette", m.cible, { emailId: m.id });
      avancer(db, p, "ouverte", "Clic sur la maquette");
    }
    return m;
  });
}

/* ------------------------------------------------------------------ à faire et tableau de bord */

export interface ActionAFaire {
  genre: "relance" | "appel" | "envoi" | "rendez_vous" | "rappel";
  prospectId: string;
  entreprise: string;
  titre: string;
  detail: string;
  relanceId?: string;
  agendaId?: string;
  /** HH:MM (Paris) pour les rendez-vous et rappels du jour */
  heure?: string;
  urgence: number;
}

export function calculerAFaire(db: Db, aujourdhui = jourParis()): ActionAFaire[] {
  const actions: ActionAFaire[] = [];
  const actif = (p: Prospect) => !p.stop && !p.aRepondu && p.statut !== "perdu" && p.statut !== "signe";

  for (const r of db.relances) {
    if (r.statut !== "planifiee" || r.echeance > aujourdhui) continue;
    const p = db.prospects.find((x) => x.id === r.prospectId);
    if (!p || !actif(p)) continue;
    const m = db.modeles.find((x) => x.id === r.modeleId);
    actions.push({
      genre: "relance",
      prospectId: p.id,
      entreprise: p.entreprise,
      titre: `Relance : ${m?.nom ?? r.modeleId}`,
      detail: r.echeance < aujourdhui ? `Prévue le ${r.echeance}, en retard` : "Prévue aujourd'hui",
      relanceId: r.id,
      urgence: r.echeance < aujourdhui ? 2 : 1,
    });
  }

  for (const p of db.prospects) {
    if (!actif(p)) continue;
    const mails = db.emails.filter((m) => m.prospectId === p.id && m.statut === "envoye" && m.envoyeLe);
    const dernierAppel = db.evenements.filter((e) => e.prospectId === p.id && e.type === "appel").map((e) => e.date).sort().pop();
    if (p.statut === "maquette_envoyee" || p.statut === "ouverte") {
      const premier = mails.map((m) => m.envoyeLe!).sort()[0];
      const ouverture = db.evenements
        .filter((e) => e.prospectId === p.id && (e.type === "email_ouvert" || e.type === "clic"))
        .map((e) => e.date)
        .sort()
        .pop();
      if (ouverture && (!dernierAppel || dernierAppel < ouverture)) {
        actions.push({
          genre: "appel",
          prospectId: p.id,
          entreprise: p.entreprise,
          titre: "Appeler : il a ouvert la maquette",
          detail: p.telephone || "Téléphone à renseigner",
          urgence: 3,
        });
      } else if (premier && !dernierAppel && aujourdhui >= ajouterJours(jourParis(premier), 3)) {
        actions.push({
          genre: "appel",
          prospectId: p.id,
          entreprise: p.entreprise,
          titre: "Appeler (J+3)",
          detail: p.telephone || "Téléphone à renseigner",
          urgence: 1,
        });
      }
    }
    if (p.statut === "a_contacter" && p.maquetteUrl && !db.emails.some((m) => m.prospectId === p.id && m.statut !== "annule")) {
      actions.push({
        genre: "envoi",
        prospectId: p.id,
        entreprise: p.entreprise,
        titre: "Envoyer la maquette",
        detail: p.emails.length ? p.emails[0] : "Adresse e-mail à trouver",
        urgence: 0,
      });
    }
  }
  const duJour = db.agenda
    .filter((r) => !r.fait && jourParis(r.debut) === aujourdhui)
    .sort((a, b) => a.debut.localeCompare(b.debut))
    .map((r): ActionAFaire => {
      const p = r.prospectId ? db.prospects.find((x) => x.id === r.prospectId) : undefined;
      const heure = heureParis(r.debut);
      return {
        genre: r.genre,
        prospectId: p?.id ?? "",
        entreprise: p?.entreprise ?? r.titre,
        titre: `${heure} · ${r.titre}`,
        detail: r.lieu || (p?.telephone ?? "") || GENRE_AGENDA_LABEL[r.genre],
        agendaId: r.id,
        heure,
        urgence: 4,
      };
    });
  return [...duJour, ...actions.sort((a, b) => b.urgence - a.urgence || a.entreprise.localeCompare(b.entreprise))];
}

export interface Chiffres {
  emailsEnvoyes: number;
  ouvertures: number;
  clics: number;
  reponses: number;
  appelsFaits: number;
  rendezVous: number;
}

function chiffresEntre(db: Db, du: string, au: string): Chiffres {
  const dans = (iso: string | null | undefined) => {
    if (!iso) return false;
    const j = jourParis(iso);
    return j >= du && j <= au;
  };
  const evs = (t: EventType) => db.evenements.filter((e) => e.type === t && dans(e.date)).length;
  return {
    emailsEnvoyes: db.emails.filter((m) => m.statut === "envoye" && dans(m.envoyeLe)).length,
    ouvertures: evs("email_ouvert"),
    clics: evs("clic"),
    reponses: evs("reponse"),
    appelsFaits: evs("appel"),
    rendezVous: evs("rendez_vous"),
  };
}

export function calculerTableauDeBord(db: Db, aujourdhui = jourParis()) {
  const lundi = debutDeSemaine(aujourdhui);
  const parStatut = Object.fromEntries(STATUTS.map((s) => [s, 0])) as Record<Statut, number>;
  for (const p of db.prospects) parStatut[p.statut]++;
  const aFaire = calculerAFaire(db, aujourdhui);
  const envoyes = db.emails.filter((m) => m.statut === "envoye");
  return {
    date: aujourdhui,
    jour: chiffresEntre(db, aujourdhui, aujourdhui),
    semaine: chiffresEntre(db, lundi, ajouterJours(lundi, 6)),
    appelsAFaire: aFaire.filter((a) => a.genre === "appel").length,
    relancesDues: aFaire.filter((a) => a.genre === "relance").length,
    entonnoir: STATUTS.map((s) => ({ statut: s, nombre: parStatut[s] })),
    totaux: {
      prospects: db.prospects.length,
      emailsEnvoyes: envoyes.length,
      emailsOuverts: envoyes.filter((m) => m.ouvertures > 0).length,
      relancesPlanifiees: db.relances.filter((r) => r.statut === "planifiee").length,
    },
    aFaire,
    argent: calculerArgent(db, aujourdhui),
  };
}

export async function tableauDeBord() {
  return calculerTableauDeBord(await readDb());
}
export async function aFaire() {
  return calculerAFaire(await readDb());
}

/* ------------------------------------------------------------------ pipeline */

export function calculerPipeline(db: Db) {
  return STATUTS.map((statut) => {
    const prospects = db.prospects
      .filter((p) => p.statut === statut)
      .sort((a, b) => (b.score ?? -1) - (a.score ?? -1) || a.entreprise.localeCompare(b.entreprise));
    return { statut, label: STATUT_LABEL[statut], nombre: prospects.length, prospects };
  });
}

export async function pipeline() {
  return calculerPipeline(await readDb());
}

/* ------------------------------------------------------------------ argent */

/** Valeur d'un prospect : le devis s'il existe, sinon le prix de la formule choisie. */
export const valeurProspect = (p: Prospect) => p.montantDevis ?? (p.formule ? FORMULE_INFO[p.formule].prix : null) ?? 0;
export const mensuelProspect = (p: Prospect) => p.montantMensuel ?? (p.formule ? FORMULE_INFO[p.formule].mensuel : null) ?? 0;

const arrondi = (n: number) => Math.round(n);

export function calculerArgent(db: Db, aujourdhui = jourParis()) {
  const mois = aujourdhui.slice(0, 7);
  const signes = db.prospects.filter((p) => p.statut === "signe");
  const enCours = db.prospects.filter((p) => p.statut !== "signe" && p.statut !== "perdu");
  const somme = (l: Prospect[], f: (p: Prospect) => number) => l.reduce((s, p) => s + f(p), 0);
  const signesDuMois = signes.filter((p) => (p.signeLe ?? jourParis(p.modifieLe)).startsWith(mois));
  const caSigneMois = somme(signesDuMois, valeurProspect);
  const objectif = db.reglages.objectifMensuel;
  return {
    mois,
    caSigneMois: arrondi(caSigneMois),
    signesDuMois: signesDuMois.length,
    caSigneTotal: arrondi(somme(signes, valeurProspect)),
    caDevis: arrondi(somme(enCours, valeurProspect)),
    caDevisPondere: arrondi(somme(enCours, (p) => valeurProspect(p) * PONDERATION[p.statut])),
    revenuMensuel: arrondi(somme(signes, mensuelProspect)),
    objectifMensuel: objectif,
    progression: objectif > 0 ? Math.round((caSigneMois / objectif) * 1000) / 1000 : 0,
    parEtape: STATUTS.map((statut) => {
      const l = db.prospects.filter((p) => p.statut === statut);
      return { statut, ponderation: PONDERATION[statut], nombre: l.length, montant: arrondi(somme(l, valeurProspect)), pondere: arrondi(somme(l, (p) => valeurProspect(p) * PONDERATION[statut])) };
    }),
  };
}

export async function argent() {
  return calculerArgent(await readDb());
}

/* ------------------------------------------------------------------ réglages */

export async function lireReglages(): Promise<Reglages> {
  return (await readDb()).reglages;
}

export async function modifierReglages(e: { objectifMensuel?: unknown }): Promise<Reglages> {
  const objectif = montant(e.objectifMensuel, "objectifMensuel");
  if (objectif === null) throw new ErreurMetier("objectifMensuel : un montant en euros");
  return updateDb((db) => {
    if (objectif !== undefined) db.reglages.objectifMensuel = objectif;
    return db.reglages;
  });
}

/* ------------------------------------------------------------------ agenda */

export interface EntreeAgenda {
  prospectId?: unknown;
  genre?: unknown;
  titre?: unknown;
  debut?: unknown;
  jour?: unknown;
  heure?: unknown;
  dureeMin?: unknown;
  lieu?: unknown;
  detail?: unknown;
  fait?: unknown;
}

function nettoyerAgenda(e: EntreeAgenda): Partial<RendezVous> {
  const out: Partial<RendezVous> = {};
  if (e.genre !== undefined) {
    if (!GENRES_AGENDA.includes(e.genre as GenreAgenda)) throw new ErreurMetier(`genre : l'un de ${GENRES_AGENDA.join(", ")}`);
    out.genre = e.genre as GenreAgenda;
  }
  if (e.prospectId !== undefined) out.prospectId = texte(e.prospectId, 100) || null;
  const titre = texte(e.titre, 200);
  if (titre !== undefined) out.titre = titre;
  if (e.debut !== undefined && e.debut !== "") {
    const d = new Date(String(e.debut));
    if (isNaN(d.getTime())) throw new ErreurMetier("debut : format ISO attendu (2026-10-29T09:00:00Z)");
    out.debut = d.toISOString();
  } else if (e.jour !== undefined || e.heure !== undefined) {
    const jour = texte(e.jour, 10) ?? "";
    const heure = texte(e.heure, 5) || "09:00";
    if (!/^\d{4}-\d{2}-\d{2}$/.test(jour) || isNaN(Date.parse(jour))) throw new ErreurMetier("jour : format AAAA-MM-JJ");
    if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(heure)) throw new ErreurMetier("heure : format HH:MM (heure de Paris)");
    out.debut = parisVersIso(jour, heure);
  }
  if (e.dureeMin !== undefined && e.dureeMin !== "") {
    const n = Number(e.dureeMin);
    if (!Number.isInteger(n) || n < 0 || n > 24 * 60) throw new ErreurMetier("dureeMin : un nombre de minutes entre 0 et 1440");
    out.dureeMin = n;
  }
  const lieu = texte(e.lieu, 300);
  if (lieu !== undefined) out.lieu = lieu;
  const detail = texte(e.detail, 5000);
  if (detail !== undefined) out.detail = detail;
  if (e.fait !== undefined) out.fait = Boolean(e.fait);
  return out;
}

const quandLisible = (iso: string) => `${formatJour(jourParis(iso))} à ${heureParis(iso).replace(":", " h ")}`;

export function listerAgendaDb(db: Db, f: { du?: string; au?: string; prospectId?: string; fait?: boolean } = {}) {
  return db.agenda
    .filter((r) => (!f.du || jourParis(r.debut) >= f.du) && (!f.au || jourParis(r.debut) <= f.au))
    .filter((r) => (!f.prospectId || r.prospectId === f.prospectId) && (f.fait === undefined || r.fait === f.fait))
    .sort((a, b) => a.debut.localeCompare(b.debut));
}

export async function listerAgenda(f: { du?: string; au?: string; prospectId?: string; fait?: boolean } = {}) {
  return listerAgendaDb(await readDb(), f);
}

export async function lireAgenda(id: string) {
  const db = await readDb();
  const r = db.agenda.find((x) => x.id === id);
  if (!r) throw new ErreurMetier("Rendez-vous introuvable", 404);
  return { rendezVous: r, prospect: r.prospectId ? db.prospects.find((p) => p.id === r.prospectId) ?? null : null };
}

export async function creerAgenda(e: EntreeAgenda): Promise<RendezVous> {
  const c = nettoyerAgenda(e);
  if (!c.debut) throw new ErreurMetier("debut (ISO) ou jour + heure (Paris) : obligatoires");
  const genre = c.genre ?? "rendez_vous";
  return updateDb((db) => {
    const p = c.prospectId ? trouver(db, c.prospectId) : null;
    const t = maintenant();
    const r: RendezVous = {
      id: nouvelId("rdv"),
      prospectId: p?.id ?? null,
      genre,
      titre: c.titre || (genre === "rendez_vous" ? `Rendez-vous${p ? ` · ${p.entreprise}` : ""}` : `Rappel${p ? ` · ${p.entreprise}` : ""}`),
      debut: c.debut!,
      dureeMin: c.dureeMin ?? (genre === "rendez_vous" ? 60 : 15),
      lieu: c.lieu ?? "",
      detail: c.detail ?? "",
      fait: c.fait ?? false,
      creeLe: t,
      modifieLe: t,
    };
    db.agenda.push(r);
    if (p) {
      if (genre === "rendez_vous") {
        journal(db, p.id, "rendez_vous", `Rendez-vous le ${quandLisible(r.debut)}`, [r.lieu, r.detail].filter(Boolean).join("\n"));
        avancer(db, p, "rendez_vous", "Rendez-vous planifié");
      } else journal(db, p.id, "note", `Rappel le ${quandLisible(r.debut)}`, r.titre);
      p.modifieLe = t;
    }
    return r;
  });
}

export async function modifierAgenda(id: string, e: EntreeAgenda): Promise<RendezVous> {
  const c = nettoyerAgenda(e);
  if (c.titre === "") throw new ErreurMetier("titre : ne peut pas être vide");
  return updateDb((db) => {
    const r = db.agenda.find((x) => x.id === id);
    if (!r) throw new ErreurMetier("Rendez-vous introuvable", 404);
    if (c.prospectId) trouver(db, c.prospectId);
    const deplace = c.debut && c.debut !== r.debut;
    Object.assign(r, c, { modifieLe: maintenant() });
    if (deplace && r.prospectId) journal(db, r.prospectId, "note", `${GENRE_AGENDA_LABEL[r.genre]} déplacé au ${quandLisible(r.debut)}`, r.titre);
    return r;
  });
}

export async function supprimerAgenda(id: string) {
  await updateDb((db) => {
    if (!db.agenda.some((r) => r.id === id)) throw new ErreurMetier("Rendez-vous introuvable", 404);
    db.agenda = db.agenda.filter((r) => r.id !== id);
  });
}

/* fichier .ics (RFC 5545) : heures en UTC, lignes repliées à 75 octets, fin de ligne CRLF */
const icsTexte = (s: string) => s.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\r?\n/g, "\\n");
const icsDate = (iso: string) => new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

function replier(ligne: string): string {
  const morceaux: string[] = [];
  let courant = "";
  let octets = 0;
  for (const ch of ligne) {
    const n = new TextEncoder().encode(ch).length;
    if (octets + n > (morceaux.length ? 74 : 75)) {
      morceaux.push(courant);
      courant = "";
      octets = 0;
    }
    courant += ch;
    octets += n;
  }
  morceaux.push(courant);
  return morceaux.join("\r\n ");
}

export function versIcs(r: RendezVous, p: Prospect | null): string {
  const fin = new Date(new Date(r.debut).getTime() + Math.max(r.dureeMin, 0) * 60_000).toISOString();
  const description = [p ? `${p.entreprise}${p.dirigeant ? ` (${p.dirigeant})` : ""}` : "", p?.telephone ? `Tél. ${p.telephone}` : "", r.detail]
    .filter(Boolean)
    .join("\n");
  const lignes = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Atelier Truelle//Atelier OS//FR",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${r.id}@atelier-os`,
    `DTSTAMP:${icsDate(r.modifieLe)}`,
    `DTSTART:${icsDate(r.debut)}`,
    `DTEND:${icsDate(fin)}`,
    `SUMMARY:${icsTexte(r.titre)}`,
    ...(r.lieu ? [`LOCATION:${icsTexte(r.lieu)}`] : []),
    ...(description ? [`DESCRIPTION:${icsTexte(description)}`] : []),
    "BEGIN:VALARM",
    `TRIGGER:${r.genre === "rappel" ? "PT0M" : "-PT30M"}`,
    "ACTION:DISPLAY",
    `DESCRIPTION:${icsTexte(r.titre)}`,
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return lignes.map(replier).join("\r\n") + "\r\n";
}

/* ------------------------------------------------------------------ import et export CSV */

/** Colonnes de l'export, dans l'ordre. L'import accepte ces noms et quelques synonymes. */
export const COLONNES_CSV: Array<{ cle: keyof Prospect; alias: string[] }> = [
  { cle: "entreprise", alias: ["nom", "societe", "raison sociale", "entreprise", "nom de l'entreprise", "company"] },
  { cle: "dirigeant", alias: ["gerant", "contact", "nom du dirigeant", "dirigeants"] },
  { cle: "emails", alias: ["email", "e-mail", "mail", "courriel", "adresse e-mail", "adresses e-mail"] },
  { cle: "telephone", alias: ["tel", "tel.", "portable", "phone", "numero"] },
  { cle: "ville", alias: ["commune", "city"] },
  { cle: "arrondissement", alias: ["arr", "arr.", "code postal", "cp"] },
  { cle: "siteActuel", alias: ["site", "site web", "site internet", "site actuel", "url", "website"] },
  { cle: "maquetteUrl", alias: ["maquette", "lien maquette"] },
  { cle: "statut", alias: ["etape", "statut"] },
  { cle: "score", alias: [] },
  { cle: "vague", alias: [] },
  { cle: "offre", alias: [] },
  { cle: "formule", alias: [] },
  { cle: "montantDevis", alias: ["devis", "montant", "montant du devis"] },
  { cle: "montantMensuel", alias: ["mensuel", "abonnement"] },
  { cle: "signeLe", alias: ["date de signature", "signe le"] },
  { cle: "notes", alias: ["note", "commentaire", "commentaires", "remarques"] },
  { cle: "aRepondu", alias: [] },
  { cle: "stop", alias: ["ne plus contacter"] },
  { cle: "id", alias: [] },
  { cle: "creeLe", alias: [] },
  { cle: "modifieLe", alias: [] },
];

/** Colonnes que l'import n'écrit jamais (calculées par l'application). */
const COLONNES_LECTURE_SEULE = new Set<keyof Prospect>(["id", "creeLe", "modifieLe", "aRepondu"]);

const sansAccents = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

/** Clé de dédoublonnage du nom : sans accents, sans ponctuation ni forme juridique. */
export const cleEntreprise = (s: string) =>
  sansAccents(s)
    .replace(/\b(sarl|sas|sasu|eurl|sa|sci|ets|etablissements)\b/g, " ")
    .replace(/[^a-z0-9]+/g, "");

function versCellule(p: Prospect, cle: keyof Prospect): unknown {
  const v = p[cle];
  if (Array.isArray(v)) return v.join(", ");
  if (typeof v === "boolean") return v ? "oui" : "";
  return v;
}

export function exporterCsvDb(db: Db): string {
  const tri = [...db.prospects].sort((a, b) => a.entreprise.localeCompare(b.entreprise));
  return ecrireCsv([COLONNES_CSV.map((c) => c.cle), ...tri.map((p) => COLONNES_CSV.map((c) => versCellule(p, c.cle)))]);
}

export async function exporterCsv() {
  return exporterCsvDb(await readDb());
}

export interface LigneImport {
  ligne: number;
  entreprise: string;
  emails: string[];
  etat: "nouveau" | "doublon" | "erreur";
  motif: string;
  doublonDe?: { id: string; entreprise: string };
}

function lireEntreeCsv(entete: Array<keyof Prospect | null>, cellules: string[]): EntreeProspect {
  const e: Record<string, unknown> = {};
  entete.forEach((cle, i) => {
    if (!cle || COLONNES_LECTURE_SEULE.has(cle)) return;
    const v = (cellules[i] ?? "").trim();
    if (v === "") return;
    if (cle === "statut") {
      const s = STATUTS.find((x) => x === v || sansAccents(STATUT_LABEL[x]) === sansAccents(v));
      e.statut = s ?? v;
    } else if (cle === "formule") {
      const f = FORMULES.find((x) => x === sansAccents(v) || sansAccents(FORMULE_INFO[x].label) === sansAccents(v));
      e.formule = f ?? v;
    } else if (cle === "siteActuel" || cle === "maquetteUrl") e[cle] = /^https?:\/\//i.test(v) ? v : `https://${v}`;
    else if (cle === "stop") e.stop = /^(oui|vrai|true|1|x)$/i.test(v);
    else e[cle] = v;
  });
  return e as EntreeProspect;
}

/** Analyse un CSV sans rien écrire : nouveaux, doublons (nom ou e-mail déjà connus) et erreurs. */
export function analyserImport(db: Db, csv: string) {
  const lignes = lireCsv(csv);
  if (lignes.length < 2) throw new ErreurMetier("CSV vide : une ligne d'en-tête puis au moins une ligne de données");
  const entete = lignes[0].map((h) => {
    const n = sansAccents(h).replace(/[_]+/g, " ");
    const c = COLONNES_CSV.find((x) => sansAccents(x.cle) === n || x.alias.includes(n));
    return c ? c.cle : null;
  });
  if (!entete.includes("entreprise")) throw new ErreurMetier("Colonne « entreprise » introuvable dans l'en-tête");
  if (lignes.length > 2001) throw new ErreurMetier("2 000 lignes au plus par import");
  const noms = new Map(db.prospects.map((p) => [cleEntreprise(p.entreprise), p]));
  const mails = new Map(db.prospects.flatMap((p) => p.emails.map((m) => [m, p] as const)));
  const resultat: Array<LigneImport & { champs?: Partial<Prospect> }> = [];
  lignes.slice(1).forEach((cellules, i) => {
    const entree = lireEntreeCsv(entete, cellules);
    const base = { ligne: i + 2, entreprise: String(entree.entreprise ?? ""), emails: [] as string[] };
    try {
      const champs = nettoyerProspect(entree);
      if (!champs.entreprise) throw new ErreurMetier("entreprise vide");
      base.emails = champs.emails ?? [];
      const existant = noms.get(cleEntreprise(champs.entreprise)) ?? base.emails.map((m) => mails.get(m)).find(Boolean);
      if (existant) {
        const dansFichier = !db.prospects.includes(existant);
        resultat.push({ ...base, etat: "doublon", motif: dansFichier ? "Déjà présent plus haut dans le fichier" : "Déjà dans Atelier OS", doublonDe: { id: existant.id, entreprise: existant.entreprise } });
        return;
      }
      const fictif = { ...champs, id: `ligne-${i + 2}`, emails: base.emails } as Prospect;
      noms.set(cleEntreprise(champs.entreprise), fictif);
      for (const m of base.emails) mails.set(m, fictif);
      resultat.push({ ...base, etat: "nouveau", motif: "", champs });
    } catch (e) {
      resultat.push({ ...base, etat: "erreur", motif: e instanceof Error ? e.message : "Ligne invalide" });
    }
  });
  const colonnesIgnorees = lignes[0].filter((_, i) => !entete[i]);
  return { lignes: resultat, colonnesIgnorees };
}

const resume = (l: Array<LigneImport & { champs?: Partial<Prospect> }>) => ({
  nouveaux: l.filter((x) => x.etat === "nouveau").length,
  doublons: l.filter((x) => x.etat === "doublon").length,
  erreurs: l.filter((x) => x.etat === "erreur").length,
});

export async function importerCsv(csv: string, apercu: boolean) {
  if (!csv.trim()) throw new ErreurMetier("csv : obligatoire");
  if (csv.length > 2_000_000) throw new ErreurMetier("CSV trop volumineux (2 Mo au plus)");
  if (apercu) {
    const a = analyserImport(await readDb(), csv);
    return { apercu: true, ...resume(a.lignes), colonnesIgnorees: a.colonnesIgnorees, lignes: a.lignes.map(({ champs: _c, ...l }) => l) };
  }
  return updateDb((db) => {
    const a = analyserImport(db, csv);
    const crees = a.lignes.filter((l) => l.etat === "nouveau").map((l) => insererProspect(db, l.champs!, "Importé depuis un fichier CSV"));
    return { apercu: false, ...resume(a.lignes), importes: crees.length, colonnesIgnorees: a.colonnesIgnorees, prospects: crees.map((p) => ({ id: p.id, entreprise: p.entreprise })), lignes: a.lignes.map(({ champs: _c, ...l }) => l) };
  });
}
