import { updateDb, readDb, nouvelId } from "./db";
import { ajouterJours, debutDeSemaine, jourParis, prochainJourOuvre } from "./dates";
import { RELANCES_PAR_DEFAUT } from "@/data/modeles";
import {
  EVENT_TYPES,
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
  return out;
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

export async function creerProspect(entree: EntreeProspect): Promise<Prospect> {
  const champs = nettoyerProspect(entree);
  if (!champs.entreprise) throw new ErreurMetier("entreprise : obligatoire");
  return updateDb((db) => {
    const t = maintenant();
    const base = champs.entreprise!
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
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
      ...champs,
    };
    db.prospects.push(p);
    journal(db, p.id, "note", "Prospect créé");
    return p;
  });
}

export async function modifierProspect(id: string, entree: EntreeProspect): Promise<Prospect> {
  const champs = nettoyerProspect(entree);
  if (champs.entreprise === "") throw new ErreurMetier("entreprise : ne peut pas être vide");
  return updateDb((db) => {
    const p = trouver(db, id);
    const avant = p.statut;
    const avantMaquette = p.maquetteUrl;
    Object.assign(p, champs, { modifieLe: maintenant() });
    if (champs.statut && champs.statut !== avant) {
      journal(db, p.id, "statut", `Étape : ${STATUT_LABEL[avant]} → ${STATUT_LABEL[p.statut]}`, "Modifiée à la main");
    }
    if (champs.maquetteUrl && champs.maquetteUrl !== avantMaquette) journal(db, p.id, "maquette", "Lien de la maquette enregistré", champs.maquetteUrl);
    if (champs.stop === true) journal(db, p.id, "note", "Marqué « ne plus contacter »");
    reglerRelances(db, p);
    return p;
  });
}

export async function supprimerProspect(id: string): Promise<void> {
  await updateDb((db) => {
    trouver(db, id);
    db.prospects = db.prospects.filter((p) => p.id !== id);
    db.evenements = db.evenements.filter((e) => e.prospectId !== id);
    db.emails = db.emails.filter((e) => e.prospectId !== id);
    db.relances = db.relances.filter((r) => r.prospectId !== id);
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
  genre: "relance" | "appel" | "envoi";
  prospectId: string;
  entreprise: string;
  titre: string;
  detail: string;
  relanceId?: string;
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
  return actions.sort((a, b) => b.urgence - a.urgence || a.entreprise.localeCompare(b.entreprise));
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
  };
}

export async function tableauDeBord() {
  return calculerTableauDeBord(await readDb());
}
export async function aFaire() {
  return calculerAFaire(await readDb());
}
