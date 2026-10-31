/**
 * Schéma de données d'Atelier OS Pro (Postgres, Drizzle ORM).
 *
 * Règle d'or : toute donnée métier porte `organisation_id`. Les services filtrent
 * systématiquement sur l'organisation du contexte (voir src/lib/contexte.ts).
 * Toute modification de ce fichier doit être suivie de `npm run db:generate`
 * (nouvelle migration versionnée dans ./drizzle).
 */
import { sql } from "drizzle-orm";
import {
  boolean,
  date,
  index,
  integer,
  jsonb,
  pgEnum,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

const horodatage = (nom: string) => timestamp(nom, { withTimezone: true, mode: "date" });
const cree = () => horodatage("cree_le").notNull().defaultNow();
const maj = () => horodatage("maj_le").notNull().defaultNow();
const orgId = () =>
  text("organisation_id")
    .notNull()
    .references(() => organisations.id, { onDelete: "cascade" });

// ───────────────────────── Énumérations ─────────────────────────

export const roleEnum = pgEnum("role", ["dirigeant", "charge_affaires", "adv"]);
export const typeClientEnum = pgEnum("type_client", ["particulier", "professionnel", "syndic", "bailleur"]);
export const statutChantierEnum = pgEnum("statut_chantier", [
  "a_qualifier",
  "en_devis",
  "planifie",
  "en_cours",
  "en_pause",
  "termine",
  "annule",
]);
export const statutTacheEnum = pgEnum("statut_tache", ["a_faire", "faite"]);
export const prioriteEnum = pgEnum("priorite", ["normale", "haute"]);

// ───────────────────────── Comptes et organisations ─────────────────────────

export const organisations = pgTable("organisations", {
  id: text("id").primaryKey(),
  nom: text("nom").notNull(),
  slug: text("slug").notNull().unique(),
  siret: text("siret"),
  tvaIntracom: text("tva_intracom"),
  adresse: text("adresse"),
  telephone: text("telephone"),
  email: text("email"),
  logoUrl: text("logo_url"),
  couleurPrincipale: text("couleur_principale").notNull().default("#C8553D"),
  couleurSecondaire: text("couleur_secondaire").notNull().default("#1D1D1F"),
  /** L'organisation qui exploite la plateforme (Atelier Truelle). */
  estPlateforme: boolean("est_plateforme").notNull().default(false),
  creeLe: cree(),
  majLe: maj(),
});

export const utilisateurs = pgTable("utilisateurs", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  nom: text("nom").notNull(),
  telephone: text("telephone"),
  motDePasseHash: text("mot_de_passe_hash"),
  /** Administrateur de la plateforme (équipe Atelier Truelle) : accès à toutes les organisations. */
  estAdminPlateforme: boolean("est_admin_plateforme").notNull().default(false),
  /** Incrémentée pour invalider toutes les sessions (changement de mot de passe, départ). */
  versionSession: integer("version_session").notNull().default(1),
  derniereConnexionLe: horodatage("derniere_connexion_le"),
  creeLe: cree(),
  majLe: maj(),
});

export const membres = pgTable(
  "membres",
  {
    id: text("id").primaryKey(),
    organisationId: orgId(),
    utilisateurId: text("utilisateur_id")
      .notNull()
      .references(() => utilisateurs.id, { onDelete: "cascade" }),
    role: roleEnum("role").notNull(),
    actif: boolean("actif").notNull().default(true),
    creeLe: cree(),
    majLe: maj(),
  },
  (t) => [uniqueIndex("membres_org_utilisateur").on(t.organisationId, t.utilisateurId)],
);

export const invitations = pgTable(
  "invitations",
  {
    id: text("id").primaryKey(),
    organisationId: orgId(),
    email: text("email").notNull(),
    role: roleEnum("role").notNull(),
    jetonHash: text("jeton_hash").notNull().unique(),
    inviteParId: text("invite_par_id").references(() => utilisateurs.id, { onDelete: "set null" }),
    expireLe: horodatage("expire_le").notNull(),
    accepteeLe: horodatage("acceptee_le"),
    annuleeLe: horodatage("annulee_le"),
    creeLe: cree(),
  },
  (t) => [index("invitations_org").on(t.organisationId)],
);

export const jetonsApi = pgTable(
  "jetons_api",
  {
    id: text("id").primaryKey(),
    organisationId: orgId(),
    /** Le jeton agit au nom de cet utilisateur (avec son rôle), restreint par ses portées. */
    utilisateurId: text("utilisateur_id")
      .notNull()
      .references(() => utilisateurs.id, { onDelete: "cascade" }),
    nom: text("nom").notNull(),
    prefixe: text("prefixe").notNull().unique(),
    hash: text("hash").notNull().unique(),
    portees: text("portees").array().notNull(),
    dernierUsageLe: horodatage("dernier_usage_le"),
    expireLe: horodatage("expire_le"),
    revoqueLe: horodatage("revoque_le"),
    creeLe: cree(),
  },
  (t) => [index("jetons_org").on(t.organisationId)],
);

// ───────────────────────── CRM ─────────────────────────

export const clients = pgTable(
  "clients",
  {
    id: text("id").primaryKey(),
    organisationId: orgId(),
    type: typeClientEnum("type").notNull().default("particulier"),
    nom: text("nom").notNull(),
    raisonSociale: text("raison_sociale"),
    siret: text("siret"),
    email: text("email"),
    telephone: text("telephone"),
    source: text("source"),
    /** Chargé d'affaires responsable du client. */
    responsableId: text("responsable_id").references(() => utilisateurs.id, { onDelete: "set null" }),
    remarques: text("remarques"),
    creeLe: cree(),
    majLe: maj(),
  },
  (t) => [index("clients_org_cree").on(t.organisationId, t.creeLe, t.id), index("clients_responsable").on(t.organisationId, t.responsableId)],
);

export const contacts = pgTable(
  "contacts",
  {
    id: text("id").primaryKey(),
    organisationId: orgId(),
    clientId: text("client_id")
      .notNull()
      .references(() => clients.id, { onDelete: "cascade" }),
    prenom: text("prenom"),
    nom: text("nom").notNull(),
    fonction: text("fonction"),
    email: text("email"),
    telephone: text("telephone"),
    principal: boolean("principal").notNull().default(false),
    creeLe: cree(),
    majLe: maj(),
  },
  (t) => [index("contacts_client").on(t.organisationId, t.clientId)],
);

export const sites = pgTable(
  "sites",
  {
    id: text("id").primaryKey(),
    organisationId: orgId(),
    clientId: text("client_id")
      .notNull()
      .references(() => clients.id, { onDelete: "cascade" }),
    libelle: text("libelle"),
    adresse: text("adresse").notNull(),
    complement: text("complement"),
    codePostal: text("code_postal"),
    ville: text("ville"),
    codeAcces: text("code_acces"),
    creeLe: cree(),
    majLe: maj(),
  },
  (t) => [index("sites_client").on(t.organisationId, t.clientId)],
);

export const chantiers = pgTable(
  "chantiers",
  {
    id: text("id").primaryKey(),
    organisationId: orgId(),
    reference: text("reference").notNull(),
    titre: text("titre").notNull(),
    description: text("description"),
    statut: statutChantierEnum("statut").notNull().default("a_qualifier"),
    clientId: text("client_id")
      .notNull()
      .references(() => clients.id, { onDelete: "cascade" }),
    siteId: text("site_id").references(() => sites.id, { onDelete: "set null" }),
    chargeAffairesId: text("charge_affaires_id").references(() => utilisateurs.id, { onDelete: "set null" }),
    dateDebut: date("date_debut", { mode: "string" }),
    dateFin: date("date_fin", { mode: "string" }),
    /** Montant estimé hors taxes, en centimes. */
    montantEstimeHt: integer("montant_estime_ht"),
    creeLe: cree(),
    majLe: maj(),
  },
  (t) => [
    uniqueIndex("chantiers_org_reference").on(t.organisationId, t.reference),
    index("chantiers_org_cree").on(t.organisationId, t.creeLe, t.id),
    index("chantiers_client").on(t.organisationId, t.clientId),
  ],
);

export const notes = pgTable(
  "notes",
  {
    id: text("id").primaryKey(),
    organisationId: orgId(),
    clientId: text("client_id").references(() => clients.id, { onDelete: "cascade" }),
    chantierId: text("chantier_id").references(() => chantiers.id, { onDelete: "cascade" }),
    auteurId: text("auteur_id").references(() => utilisateurs.id, { onDelete: "set null" }),
    contenu: text("contenu").notNull(),
    epinglee: boolean("epinglee").notNull().default(false),
    creeLe: cree(),
    majLe: maj(),
  },
  (t) => [index("notes_client").on(t.organisationId, t.clientId), index("notes_chantier").on(t.organisationId, t.chantierId)],
);

export const taches = pgTable(
  "taches",
  {
    id: text("id").primaryKey(),
    organisationId: orgId(),
    titre: text("titre").notNull(),
    description: text("description"),
    statut: statutTacheEnum("statut").notNull().default("a_faire"),
    priorite: prioriteEnum("priorite").notNull().default("normale"),
    echeance: date("echeance", { mode: "string" }),
    assigneId: text("assigne_id").references(() => utilisateurs.id, { onDelete: "set null" }),
    clientId: text("client_id").references(() => clients.id, { onDelete: "cascade" }),
    chantierId: text("chantier_id").references(() => chantiers.id, { onDelete: "cascade" }),
    creeParId: text("cree_par_id").references(() => utilisateurs.id, { onDelete: "set null" }),
    faiteLe: horodatage("faite_le"),
    creeLe: cree(),
    majLe: maj(),
  },
  (t) => [index("taches_assigne").on(t.organisationId, t.assigneId, t.statut), index("taches_client").on(t.organisationId, t.clientId)],
);

export const piecesJointes = pgTable(
  "pieces_jointes",
  {
    id: text("id").primaryKey(),
    organisationId: orgId(),
    clientId: text("client_id").references(() => clients.id, { onDelete: "cascade" }),
    chantierId: text("chantier_id").references(() => chantiers.id, { onDelete: "cascade" }),
    nom: text("nom").notNull(),
    typeMime: text("type_mime").notNull(),
    taille: integer("taille").notNull(),
    /** Clé dans le stockage de fichiers (Vercel Blob plus tard). */
    cleStockage: text("cle_stockage").notNull(),
    url: text("url"),
    televerseParId: text("televerse_par_id").references(() => utilisateurs.id, { onDelete: "set null" }),
    creeLe: cree(),
    majLe: maj(),
  },
  (t) => [index("pj_client").on(t.organisationId, t.clientId)],
);

export const etiquettes = pgTable(
  "etiquettes",
  {
    id: text("id").primaryKey(),
    organisationId: orgId(),
    nom: text("nom").notNull(),
    couleur: text("couleur").notNull().default("#8E8E93"),
    creeLe: cree(),
    majLe: maj(),
  },
  (t) => [uniqueIndex("etiquettes_org_nom").on(t.organisationId, t.nom)],
);

/** Liaison polymorphe étiquette ↔ ressource (client, chantier…). */
export const etiquetages = pgTable(
  "etiquetages",
  {
    organisationId: orgId(),
    etiquetteId: text("etiquette_id")
      .notNull()
      .references(() => etiquettes.id, { onDelete: "cascade" }),
    typeRessource: text("type_ressource").notNull(),
    ressourceId: text("ressource_id").notNull(),
    creeLe: cree(),
  },
  (t) => [primaryKey({ columns: [t.etiquetteId, t.typeRessource, t.ressourceId] }), index("etiquetages_ressource").on(t.organisationId, t.typeRessource, t.ressourceId)],
);

/** Journal d'activité : toute écriture (interface ou API) y laisse une trace. Pas de clé étrangère vers la ressource : la trace survit à la suppression. */
export const activites = pgTable(
  "activites",
  {
    id: text("id").primaryKey(),
    organisationId: orgId(),
    acteurId: text("acteur_id").references(() => utilisateurs.id, { onDelete: "set null" }),
    jetonId: text("jeton_id"),
    origine: text("origine").notNull(), // "interface" | "api" | "systeme"
    action: text("action").notNull(), // "creation" | "modification" | "suppression" | …
    typeRessource: text("type_ressource").notNull(),
    ressourceId: text("ressource_id").notNull(),
    /** Client et chantier concernés, pour afficher l'activité sur leur fiche. */
    clientId: text("client_id"),
    chantierId: text("chantier_id"),
    resume: text("resume").notNull(),
    changements: jsonb("changements"),
    creeLe: cree(),
  },
  (t) => [
    index("activites_org_cree").on(t.organisationId, t.creeLe, t.id),
    index("activites_client").on(t.organisationId, t.clientId),
    index("activites_ressource").on(t.organisationId, t.typeRessource, t.ressourceId),
  ],
);

export const clesIdempotence = pgTable(
  "cles_idempotence",
  {
    organisationId: orgId(),
    cle: text("cle").notNull(),
    methode: text("methode").notNull(),
    chemin: text("chemin").notNull(),
    empreinte: text("empreinte").notNull(),
    statutHttp: integer("statut_http").notNull(),
    reponse: jsonb("reponse"),
    creeLe: cree(),
  },
  (t) => [primaryKey({ columns: [t.organisationId, t.cle] })],
);

// ───────────────────────── Points d'extension (phases 2 à 5) ─────────────────────────
// Tables créées vides pour figer les relations ; aucune logique pour l'instant.

/** Phase 2 — Boîte mail intelligente. */
export const messagesEmail = pgTable(
  "messages_email",
  {
    id: text("id").primaryKey(),
    organisationId: orgId(),
    fournisseur: text("fournisseur"), // gmail | microsoft | imap
    idExterne: text("id_externe"),
    fil: text("fil"),
    sens: text("sens").notNull(), // entrant | sortant
    de: text("de").notNull(),
    a: text("a").array().notNull().default(sql`'{}'::text[]`),
    objet: text("objet"),
    extrait: text("extrait"),
    clientId: text("client_id").references(() => clients.id, { onDelete: "set null" }),
    chantierId: text("chantier_id").references(() => chantiers.id, { onDelete: "set null" }),
    recuLe: horodatage("recu_le"),
    creeLe: cree(),
  },
  (t) => [index("emails_org").on(t.organisationId, t.recuLe)],
);

/** Phase 3 — Téléphonie et transcription. */
export const appels = pgTable("appels", {
  id: text("id").primaryKey(),
  organisationId: orgId(),
  sens: text("sens").notNull(), // entrant | sortant
  numero: text("numero"),
  dureeSecondes: integer("duree_secondes"),
  transcription: text("transcription"),
  clientId: text("client_id").references(() => clients.id, { onDelete: "set null" }),
  chantierId: text("chantier_id").references(() => chantiers.id, { onDelete: "set null" }),
  utilisateurId: text("utilisateur_id").references(() => utilisateurs.id, { onDelete: "set null" }),
  debutLe: horodatage("debut_le"),
  creeLe: cree(),
});

/** Phase 3 — Devis. */
export const devis = pgTable("devis", {
  id: text("id").primaryKey(),
  organisationId: orgId(),
  numero: text("numero").notNull(),
  statut: text("statut").notNull().default("brouillon"),
  clientId: text("client_id")
    .notNull()
    .references(() => clients.id, { onDelete: "restrict" }),
  chantierId: text("chantier_id").references(() => chantiers.id, { onDelete: "set null" }),
  appelId: text("appel_id").references(() => appels.id, { onDelete: "set null" }),
  totalHt: integer("total_ht").notNull().default(0),
  totalTtc: integer("total_ttc").notNull().default(0),
  creeLe: cree(),
  majLe: maj(),
});

/** Phase 4 — Facturation. */
export const factures = pgTable("factures", {
  id: text("id").primaryKey(),
  organisationId: orgId(),
  numero: text("numero").notNull(),
  type: text("type").notNull().default("facture"), // acompte | situation | solde | avoir
  statut: text("statut").notNull().default("brouillon"),
  clientId: text("client_id")
    .notNull()
    .references(() => clients.id, { onDelete: "restrict" }),
  devisId: text("devis_id").references(() => devis.id, { onDelete: "set null" }),
  totalHt: integer("total_ht").notNull().default(0),
  totalTtc: integer("total_ttc").notNull().default(0),
  echeance: date("echeance", { mode: "string" }),
  creeLe: cree(),
  majLe: maj(),
});

/** Phase 5 — Marketing (réseaux sociaux, Google Business Profile, e-mailing). */
export const publications = pgTable("publications", {
  id: text("id").primaryKey(),
  organisationId: orgId(),
  canal: text("canal").notNull(), // facebook | instagram | linkedin | google | email
  statut: text("statut").notNull().default("brouillon"), // brouillon | a_valider | programmee | publiee
  texte: text("texte"),
  medias: jsonb("medias"),
  chantierId: text("chantier_id").references(() => chantiers.id, { onDelete: "set null" }),
  programmeeLe: horodatage("programmee_le"),
  creeLe: cree(),
  majLe: maj(),
});
