"use server";

/**
 * Server actions de l'interface. Elles ne contiennent aucune règle métier :
 * elles lisent le formulaire et appellent les mêmes services que l'API v2.
 */
import { revalidatePath } from "next/cache";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { base } from "@/db";
import { utilisateurs } from "@/db/schema";
import { ErreurApi } from "@/lib/erreurs";
import type { EtatAction } from "@/lib/etat-action";
import { lireFormulaire } from "@/lib/formulaires";
import { contexteInterface } from "@/lib/serveur";
import * as comptes from "@/lib/services/comptes";
import * as crm from "@/lib/services/crm";
import { COOKIE_SESSION, optionsCookie, signerSession } from "@/lib/session";
import type { Contexte } from "@/lib/contexte";

type Ctx = Awaited<ReturnType<typeof contexteInterface>>;

async function executer(fn: (ctx: Ctx) => Promise<EtatAction | void>, ...chemins: string[]): Promise<EtatAction> {
  const ctx = await contexteInterface();
  try {
    const r = (await fn(ctx)) ?? {};
    for (const c of chemins) revalidatePath(c);
    return { ok: true, n: Date.now(), ...r };
  } catch (e) {
    if (e instanceof ErreurApi) return { erreur: e.message, details: Array.isArray(e.details) ? (e.details as EtatAction["details"]) : undefined, n: Date.now() };
    throw e;
  }
}

const texte = (fd: FormData, c: string) => String(fd.get(c) ?? "");
function origine() {
  const h = headers();
  const hote = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost";
  const proto = h.get("x-forwarded-proto") ?? (hote.startsWith("localhost") || hote.startsWith("127.") ? "http" : "https");
  return `${proto}://${hote}`;
}
async function poserSession(u: { id: string; versionSession: number }, organisationId: string) {
  cookies().set(COOKIE_SESSION, await signerSession({ u: u.id, o: organisationId, v: u.versionSession }), optionsCookie);
}

// ───────── Session ─────────

export async function seConnecter(_e: EtatAction, fd: FormData): Promise<EtatAction> {
  const db = await base();
  const r = await comptes.connexion(db, texte(fd, "email"), texte(fd, "motDePasse"));
  if (!r) return { erreur: "E-mail ou mot de passe incorrect.", n: Date.now() };
  const org = r.organisations.find((o) => !o.estPlateforme) && !r.utilisateur.estAdminPlateforme ? r.organisations.find((o) => !o.estPlateforme)! : r.organisations[0];
  await poserSession(r.utilisateur, org.id);
  const suite = texte(fd, "suite");
  redirect(suite.startsWith("/") && !suite.startsWith("//") ? suite : "/");
}

export async function seDeconnecter() {
  cookies().delete(COOKIE_SESSION);
  redirect("/connexion");
}

export async function changerOrganisation(fd: FormData) {
  const ctx = await contexteInterface();
  const id = texte(fd, "organisationId");
  const accessibles = await comptes.organisationsAccessibles(ctx.db, ctx.utilisateurId, ctx.adminPlateforme);
  if (!accessibles.some((o) => o.id === id)) return;
  const [u] = await ctx.db.select().from(utilisateurs).where(eq(utilisateurs.id, ctx.utilisateurId)).limit(1);
  await poserSession(u, id);
  redirect("/");
}

export async function accepterInvitationAction(_e: EtatAction, fd: FormData): Promise<EtatAction> {
  const db = await base();
  try {
    const r = await comptes.accepterInvitation(db, texte(fd, "jeton"), { ...(fd.has("nom") ? { nom: texte(fd, "nom") } : {}), motDePasse: texte(fd, "motDePasse") });
    await poserSession(r.utilisateur, r.organisationId);
  } catch (e) {
    if (e instanceof ErreurApi) return { erreur: e.message, n: Date.now() };
    throw e;
  }
  redirect("/");
}

export async function changerMotDePasseAction(_e: EtatAction, fd: FormData) {
  return executer(async (ctx) => {
    if (texte(fd, "nouveau") !== texte(fd, "confirmation")) throw new ErreurApi(422, "validation", "Les deux mots de passe ne correspondent pas.");
    const u = await comptes.changerMotDePasse(ctx, texte(fd, "actuel"), texte(fd, "nouveau"));
    await poserSession(u, ctx.organisationId);
    return { message: "Mot de passe modifié. Vos autres sessions sont déconnectées." };
  });
}

// ───────── Clients ─────────

const CHAMPS_CLIENT = ["type", "nom", "raisonSociale", "siret", "email", "telephone", "source", "responsableId", "remarques"];

export async function creerClient(_e: EtatAction, fd: FormData): Promise<EtatAction> {
  let id = "";
  const r = await executer(async (ctx) => {
    const d = lireFormulaire(fd, CHAMPS_CLIENT);
    if (d.responsableId === null && ctx.role === "charge_affaires") delete d.responsableId;
    const c = await crm.clientsService.creer(ctx, d);
    id = c.id;
    const adresse = texte(fd, "adresse").trim();
    if (adresse) await crm.sitesService.creer(ctx, { clientId: c.id, ...lireFormulaire(fd, ["adresse", "codePostal", "ville"]) });
  }, "/clients");
  if (r.erreur) return r;
  redirect(`/clients/${id}`);
}

export async function modifierClient(_e: EtatAction, fd: FormData) {
  const id = texte(fd, "id");
  return executer(async (ctx) => {
    await crm.clientsService.modifier(ctx, id, lireFormulaire(fd, CHAMPS_CLIENT));
    return { message: "Enregistré." };
  }, `/clients/${id}`);
}

export async function supprimerClient(fd: FormData) {
  const r = await executer((ctx) => crm.clientsService.supprimer(ctx, texte(fd, "id")), "/clients");
  if (!r.erreur) redirect("/clients");
}

// ───────── Contacts et adresses ─────────

export async function creerContact(_e: EtatAction, fd: FormData) {
  const clientId = texte(fd, "clientId");
  return executer(async (ctx) => {
    await crm.contactsService.creer(ctx, lireFormulaire(fd, ["clientId", "prenom", "nom", "fonction", "email", "telephone", "principal"], { booleens: ["principal"] }));
  }, `/clients/${clientId}`);
}

export async function supprimerContact(fd: FormData) {
  await executer((ctx) => crm.contactsService.supprimer(ctx, texte(fd, "id")), `/clients/${texte(fd, "clientId")}`);
}

export async function creerSite(_e: EtatAction, fd: FormData) {
  return executer(async (ctx) => {
    await crm.sitesService.creer(ctx, lireFormulaire(fd, ["clientId", "libelle", "adresse", "complement", "codePostal", "ville", "codeAcces"]));
  }, `/clients/${texte(fd, "clientId")}`);
}

export async function supprimerSite(fd: FormData) {
  await executer((ctx) => crm.sitesService.supprimer(ctx, texte(fd, "id")), `/clients/${texte(fd, "clientId")}`);
}

// ───────── Chantiers ─────────

const CHAMPS_CHANTIER = ["titre", "description", "statut", "siteId", "chargeAffairesId", "dateDebut", "dateFin", "montantEstimeHt"];

export async function creerChantier(_e: EtatAction, fd: FormData): Promise<EtatAction> {
  let id = "";
  const r = await executer(async (ctx) => {
    const d = lireFormulaire(fd, ["clientId", ...CHAMPS_CHANTIER], { euros: ["montantEstimeHt"] });
    if (d.chargeAffairesId === null) delete d.chargeAffairesId;
    id = (await crm.chantiersService.creer(ctx, d)).id;
  }, "/chantiers");
  if (r.erreur) return r;
  redirect(`/chantiers/${id}`);
}

export async function modifierChantier(_e: EtatAction, fd: FormData) {
  const id = texte(fd, "id");
  return executer(async (ctx) => {
    await crm.chantiersService.modifier(ctx, id, lireFormulaire(fd, CHAMPS_CHANTIER, { euros: ["montantEstimeHt"] }));
    return { message: "Enregistré." };
  }, `/chantiers/${id}`, "/chantiers");
}

export async function changerStatutChantier(fd: FormData) {
  const id = texte(fd, "id");
  await executer((ctx) => crm.chantiersService.modifier(ctx, id, { statut: texte(fd, "statut") }).then(() => undefined), `/chantiers/${id}`, "/chantiers");
}

export async function supprimerChantier(fd: FormData) {
  const r = await executer((ctx) => crm.chantiersService.supprimer(ctx, texte(fd, "id")), "/chantiers");
  if (!r.erreur) redirect("/chantiers");
}

// ───────── Notes ─────────

export async function creerNote(_e: EtatAction, fd: FormData) {
  return executer(async (ctx) => {
    await crm.notesService.creer(ctx, lireFormulaire(fd, ["contenu", "clientId", "chantierId"], { videEnNull: false }));
  }, texte(fd, "chemin") || "/");
}

export async function epinglerNote(fd: FormData) {
  await executer((ctx) => crm.notesService.modifier(ctx, texte(fd, "id"), { epinglee: texte(fd, "epinglee") === "true" }).then(() => undefined), texte(fd, "chemin") || "/");
}

export async function supprimerNote(fd: FormData) {
  await executer((ctx) => crm.notesService.supprimer(ctx, texte(fd, "id")), texte(fd, "chemin") || "/");
}

// ───────── Tâches ─────────

export async function creerTache(_e: EtatAction, fd: FormData) {
  return executer(async (ctx) => {
    const d = lireFormulaire(fd, ["titre", "echeance", "priorite", "assigneId", "clientId", "chantierId"], { videEnNull: false });
    await crm.tachesService.creer(ctx, d);
  }, texte(fd, "chemin") || "/taches", "/taches", "/");
}

export async function basculerTache(fd: FormData) {
  await executer(
    (ctx) => crm.tachesService.modifier(ctx, texte(fd, "id"), { statut: texte(fd, "statut") === "faite" ? "faite" : "a_faire" }).then(() => undefined),
    texte(fd, "chemin") || "/taches",
    "/taches",
    "/",
  );
}

export async function supprimerTache(fd: FormData) {
  await executer((ctx) => crm.tachesService.supprimer(ctx, texte(fd, "id")), texte(fd, "chemin") || "/taches", "/taches");
}

// ───────── Étiquettes ─────────

export async function basculerEtiquette(fd: FormData) {
  const typeRessource = texte(fd, "typeRessource");
  const ressourceId = texte(fd, "ressourceId");
  await executer(
    (ctx) => crm.etiqueter(ctx, { etiquetteId: texte(fd, "etiquetteId"), typeRessource, ressourceId }, texte(fd, "retirer") === "true").then(() => undefined),
    `/${typeRessource}/${ressourceId}`,
  );
}

export async function creerEtiquette(_e: EtatAction, fd: FormData) {
  return executer(async (ctx) => {
    const e = await crm.etiquettesService.creer(ctx, lireFormulaire(fd, ["nom", "couleur"], { videEnNull: false }));
    const ressourceId = texte(fd, "ressourceId");
    if (ressourceId) await crm.etiqueter(ctx, { etiquetteId: e.id, typeRessource: texte(fd, "typeRessource"), ressourceId });
  }, texte(fd, "chemin") || "/");
}

// ───────── Organisation, équipe, jetons ─────────

export async function modifierOrganisationAction(_e: EtatAction, fd: FormData) {
  return executer(async (ctx) => {
    await comptes.modifierOrganisation(ctx, lireFormulaire(fd, ["nom", "siret", "tvaIntracom", "adresse", "telephone", "email", "logoUrl", "couleurPrincipale", "couleurSecondaire"]));
    return { message: "Réglages enregistrés." };
  }, "/", "/reglages");
}

export async function inviter(_e: EtatAction, fd: FormData) {
  return executer(async (ctx) => {
    const inv = await comptes.creerInvitation(ctx, { email: texte(fd, "email").trim(), role: texte(fd, "role") }, origine());
    return { message: `Invitation créée pour ${inv.email}. Envoyez-lui ce lien (valable 7 jours) :`, donnees: { lien: inv.lien } };
  }, "/equipe");
}

export async function annulerInvitationAction(fd: FormData) {
  await executer((ctx) => comptes.annulerInvitation(ctx, texte(fd, "id")), "/equipe");
}

export async function modifierMembreAction(_e: EtatAction, fd: FormData) {
  return executer(async (ctx) => {
    const d: Record<string, unknown> = {};
    if (fd.has("role")) d.role = texte(fd, "role");
    if (fd.has("actif")) d.actif = texte(fd, "actif") === "true";
    await comptes.modifierMembre(ctx, texte(fd, "id"), d);
    return { message: "Enregistré." };
  }, "/equipe");
}

export async function creerJetonAction(_e: EtatAction, fd: FormData) {
  return executer(async (ctx) => {
    const portees = fd.getAll("portees").map(String);
    const j = await comptes.creerJeton(ctx, { nom: texte(fd, "nom"), portees: portees.length ? portees : ["*:lecture"] });
    return { message: "Copiez ce jeton maintenant : il ne sera plus jamais affiché.", donnees: { secret: j.secret } };
  }, "/reglages/jetons");
}

export async function revoquerJetonAction(fd: FormData) {
  await executer((ctx) => comptes.revoquerJeton(ctx, texte(fd, "id")), "/reglages/jetons");
}

export async function creerOrganisationAction(_e: EtatAction, fd: FormData) {
  return executer(async (ctx: Contexte) => {
    const r = await comptes.creerOrganisation(ctx, { nom: texte(fd, "nom"), emailDirigeant: texte(fd, "email") }, origine());
    return { message: `Organisation « ${r.organisation.nom} » créée. Lien d'invitation du dirigeant :`, donnees: { lien: r.invitation.lien } };
  }, "/organisations");
}
