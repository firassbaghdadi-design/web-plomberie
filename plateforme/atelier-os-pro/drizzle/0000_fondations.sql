CREATE TYPE "public"."priorite" AS ENUM('normale', 'haute');--> statement-breakpoint
CREATE TYPE "public"."role" AS ENUM('dirigeant', 'charge_affaires', 'adv');--> statement-breakpoint
CREATE TYPE "public"."statut_chantier" AS ENUM('a_qualifier', 'en_devis', 'planifie', 'en_cours', 'en_pause', 'termine', 'annule');--> statement-breakpoint
CREATE TYPE "public"."statut_tache" AS ENUM('a_faire', 'faite');--> statement-breakpoint
CREATE TYPE "public"."type_client" AS ENUM('particulier', 'professionnel', 'syndic', 'bailleur');--> statement-breakpoint
CREATE TABLE "activites" (
	"id" text PRIMARY KEY NOT NULL,
	"organisation_id" text NOT NULL,
	"acteur_id" text,
	"jeton_id" text,
	"origine" text NOT NULL,
	"action" text NOT NULL,
	"type_ressource" text NOT NULL,
	"ressource_id" text NOT NULL,
	"client_id" text,
	"chantier_id" text,
	"resume" text NOT NULL,
	"changements" jsonb,
	"cree_le" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "appels" (
	"id" text PRIMARY KEY NOT NULL,
	"organisation_id" text NOT NULL,
	"sens" text NOT NULL,
	"numero" text,
	"duree_secondes" integer,
	"transcription" text,
	"client_id" text,
	"chantier_id" text,
	"utilisateur_id" text,
	"debut_le" timestamp with time zone,
	"cree_le" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "chantiers" (
	"id" text PRIMARY KEY NOT NULL,
	"organisation_id" text NOT NULL,
	"reference" text NOT NULL,
	"titre" text NOT NULL,
	"description" text,
	"statut" "statut_chantier" DEFAULT 'a_qualifier' NOT NULL,
	"client_id" text NOT NULL,
	"site_id" text,
	"charge_affaires_id" text,
	"date_debut" date,
	"date_fin" date,
	"montant_estime_ht" integer,
	"cree_le" timestamp with time zone DEFAULT now() NOT NULL,
	"maj_le" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "cles_idempotence" (
	"organisation_id" text NOT NULL,
	"cle" text NOT NULL,
	"methode" text NOT NULL,
	"chemin" text NOT NULL,
	"empreinte" text NOT NULL,
	"statut_http" integer NOT NULL,
	"reponse" jsonb,
	"cree_le" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "cles_idempotence_organisation_id_cle_pk" PRIMARY KEY("organisation_id","cle")
);
--> statement-breakpoint
CREATE TABLE "clients" (
	"id" text PRIMARY KEY NOT NULL,
	"organisation_id" text NOT NULL,
	"type" "type_client" DEFAULT 'particulier' NOT NULL,
	"nom" text NOT NULL,
	"raison_sociale" text,
	"siret" text,
	"email" text,
	"telephone" text,
	"source" text,
	"responsable_id" text,
	"remarques" text,
	"cree_le" timestamp with time zone DEFAULT now() NOT NULL,
	"maj_le" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "contacts" (
	"id" text PRIMARY KEY NOT NULL,
	"organisation_id" text NOT NULL,
	"client_id" text NOT NULL,
	"prenom" text,
	"nom" text NOT NULL,
	"fonction" text,
	"email" text,
	"telephone" text,
	"principal" boolean DEFAULT false NOT NULL,
	"cree_le" timestamp with time zone DEFAULT now() NOT NULL,
	"maj_le" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "devis" (
	"id" text PRIMARY KEY NOT NULL,
	"organisation_id" text NOT NULL,
	"numero" text NOT NULL,
	"statut" text DEFAULT 'brouillon' NOT NULL,
	"client_id" text NOT NULL,
	"chantier_id" text,
	"appel_id" text,
	"total_ht" integer DEFAULT 0 NOT NULL,
	"total_ttc" integer DEFAULT 0 NOT NULL,
	"cree_le" timestamp with time zone DEFAULT now() NOT NULL,
	"maj_le" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "etiquetages" (
	"organisation_id" text NOT NULL,
	"etiquette_id" text NOT NULL,
	"type_ressource" text NOT NULL,
	"ressource_id" text NOT NULL,
	"cree_le" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "etiquetages_etiquette_id_type_ressource_ressource_id_pk" PRIMARY KEY("etiquette_id","type_ressource","ressource_id")
);
--> statement-breakpoint
CREATE TABLE "etiquettes" (
	"id" text PRIMARY KEY NOT NULL,
	"organisation_id" text NOT NULL,
	"nom" text NOT NULL,
	"couleur" text DEFAULT '#8E8E93' NOT NULL,
	"cree_le" timestamp with time zone DEFAULT now() NOT NULL,
	"maj_le" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "factures" (
	"id" text PRIMARY KEY NOT NULL,
	"organisation_id" text NOT NULL,
	"numero" text NOT NULL,
	"type" text DEFAULT 'facture' NOT NULL,
	"statut" text DEFAULT 'brouillon' NOT NULL,
	"client_id" text NOT NULL,
	"devis_id" text,
	"total_ht" integer DEFAULT 0 NOT NULL,
	"total_ttc" integer DEFAULT 0 NOT NULL,
	"echeance" date,
	"cree_le" timestamp with time zone DEFAULT now() NOT NULL,
	"maj_le" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "invitations" (
	"id" text PRIMARY KEY NOT NULL,
	"organisation_id" text NOT NULL,
	"email" text NOT NULL,
	"role" "role" NOT NULL,
	"jeton_hash" text NOT NULL,
	"invite_par_id" text,
	"expire_le" timestamp with time zone NOT NULL,
	"acceptee_le" timestamp with time zone,
	"annulee_le" timestamp with time zone,
	"cree_le" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "invitations_jeton_hash_unique" UNIQUE("jeton_hash")
);
--> statement-breakpoint
CREATE TABLE "jetons_api" (
	"id" text PRIMARY KEY NOT NULL,
	"organisation_id" text NOT NULL,
	"utilisateur_id" text NOT NULL,
	"nom" text NOT NULL,
	"prefixe" text NOT NULL,
	"hash" text NOT NULL,
	"portees" text[] NOT NULL,
	"dernier_usage_le" timestamp with time zone,
	"expire_le" timestamp with time zone,
	"revoque_le" timestamp with time zone,
	"cree_le" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "jetons_api_prefixe_unique" UNIQUE("prefixe"),
	CONSTRAINT "jetons_api_hash_unique" UNIQUE("hash")
);
--> statement-breakpoint
CREATE TABLE "membres" (
	"id" text PRIMARY KEY NOT NULL,
	"organisation_id" text NOT NULL,
	"utilisateur_id" text NOT NULL,
	"role" "role" NOT NULL,
	"actif" boolean DEFAULT true NOT NULL,
	"cree_le" timestamp with time zone DEFAULT now() NOT NULL,
	"maj_le" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "messages_email" (
	"id" text PRIMARY KEY NOT NULL,
	"organisation_id" text NOT NULL,
	"fournisseur" text,
	"id_externe" text,
	"fil" text,
	"sens" text NOT NULL,
	"de" text NOT NULL,
	"a" text[] DEFAULT '{}'::text[] NOT NULL,
	"objet" text,
	"extrait" text,
	"client_id" text,
	"chantier_id" text,
	"recu_le" timestamp with time zone,
	"cree_le" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "notes" (
	"id" text PRIMARY KEY NOT NULL,
	"organisation_id" text NOT NULL,
	"client_id" text,
	"chantier_id" text,
	"auteur_id" text,
	"contenu" text NOT NULL,
	"epinglee" boolean DEFAULT false NOT NULL,
	"cree_le" timestamp with time zone DEFAULT now() NOT NULL,
	"maj_le" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "organisations" (
	"id" text PRIMARY KEY NOT NULL,
	"nom" text NOT NULL,
	"slug" text NOT NULL,
	"siret" text,
	"tva_intracom" text,
	"adresse" text,
	"telephone" text,
	"email" text,
	"logo_url" text,
	"couleur_principale" text DEFAULT '#C8553D' NOT NULL,
	"couleur_secondaire" text DEFAULT '#1D1D1F' NOT NULL,
	"est_plateforme" boolean DEFAULT false NOT NULL,
	"cree_le" timestamp with time zone DEFAULT now() NOT NULL,
	"maj_le" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "organisations_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "pieces_jointes" (
	"id" text PRIMARY KEY NOT NULL,
	"organisation_id" text NOT NULL,
	"client_id" text,
	"chantier_id" text,
	"nom" text NOT NULL,
	"type_mime" text NOT NULL,
	"taille" integer NOT NULL,
	"cle_stockage" text NOT NULL,
	"url" text,
	"televerse_par_id" text,
	"cree_le" timestamp with time zone DEFAULT now() NOT NULL,
	"maj_le" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "publications" (
	"id" text PRIMARY KEY NOT NULL,
	"organisation_id" text NOT NULL,
	"canal" text NOT NULL,
	"statut" text DEFAULT 'brouillon' NOT NULL,
	"texte" text,
	"medias" jsonb,
	"chantier_id" text,
	"programmee_le" timestamp with time zone,
	"cree_le" timestamp with time zone DEFAULT now() NOT NULL,
	"maj_le" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "sites" (
	"id" text PRIMARY KEY NOT NULL,
	"organisation_id" text NOT NULL,
	"client_id" text NOT NULL,
	"libelle" text,
	"adresse" text NOT NULL,
	"complement" text,
	"code_postal" text,
	"ville" text,
	"code_acces" text,
	"cree_le" timestamp with time zone DEFAULT now() NOT NULL,
	"maj_le" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "taches" (
	"id" text PRIMARY KEY NOT NULL,
	"organisation_id" text NOT NULL,
	"titre" text NOT NULL,
	"description" text,
	"statut" "statut_tache" DEFAULT 'a_faire' NOT NULL,
	"priorite" "priorite" DEFAULT 'normale' NOT NULL,
	"echeance" date,
	"assigne_id" text,
	"client_id" text,
	"chantier_id" text,
	"cree_par_id" text,
	"faite_le" timestamp with time zone,
	"cree_le" timestamp with time zone DEFAULT now() NOT NULL,
	"maj_le" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "utilisateurs" (
	"id" text PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"nom" text NOT NULL,
	"telephone" text,
	"mot_de_passe_hash" text,
	"est_admin_plateforme" boolean DEFAULT false NOT NULL,
	"version_session" integer DEFAULT 1 NOT NULL,
	"derniere_connexion_le" timestamp with time zone,
	"cree_le" timestamp with time zone DEFAULT now() NOT NULL,
	"maj_le" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "utilisateurs_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "activites" ADD CONSTRAINT "activites_organisation_id_organisations_id_fk" FOREIGN KEY ("organisation_id") REFERENCES "public"."organisations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "activites" ADD CONSTRAINT "activites_acteur_id_utilisateurs_id_fk" FOREIGN KEY ("acteur_id") REFERENCES "public"."utilisateurs"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "appels" ADD CONSTRAINT "appels_organisation_id_organisations_id_fk" FOREIGN KEY ("organisation_id") REFERENCES "public"."organisations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "appels" ADD CONSTRAINT "appels_client_id_clients_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."clients"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "appels" ADD CONSTRAINT "appels_chantier_id_chantiers_id_fk" FOREIGN KEY ("chantier_id") REFERENCES "public"."chantiers"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "appels" ADD CONSTRAINT "appels_utilisateur_id_utilisateurs_id_fk" FOREIGN KEY ("utilisateur_id") REFERENCES "public"."utilisateurs"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "chantiers" ADD CONSTRAINT "chantiers_organisation_id_organisations_id_fk" FOREIGN KEY ("organisation_id") REFERENCES "public"."organisations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "chantiers" ADD CONSTRAINT "chantiers_client_id_clients_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."clients"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "chantiers" ADD CONSTRAINT "chantiers_site_id_sites_id_fk" FOREIGN KEY ("site_id") REFERENCES "public"."sites"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "chantiers" ADD CONSTRAINT "chantiers_charge_affaires_id_utilisateurs_id_fk" FOREIGN KEY ("charge_affaires_id") REFERENCES "public"."utilisateurs"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cles_idempotence" ADD CONSTRAINT "cles_idempotence_organisation_id_organisations_id_fk" FOREIGN KEY ("organisation_id") REFERENCES "public"."organisations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "clients" ADD CONSTRAINT "clients_organisation_id_organisations_id_fk" FOREIGN KEY ("organisation_id") REFERENCES "public"."organisations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "clients" ADD CONSTRAINT "clients_responsable_id_utilisateurs_id_fk" FOREIGN KEY ("responsable_id") REFERENCES "public"."utilisateurs"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_organisation_id_organisations_id_fk" FOREIGN KEY ("organisation_id") REFERENCES "public"."organisations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_client_id_clients_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."clients"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "devis" ADD CONSTRAINT "devis_organisation_id_organisations_id_fk" FOREIGN KEY ("organisation_id") REFERENCES "public"."organisations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "devis" ADD CONSTRAINT "devis_client_id_clients_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."clients"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "devis" ADD CONSTRAINT "devis_chantier_id_chantiers_id_fk" FOREIGN KEY ("chantier_id") REFERENCES "public"."chantiers"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "devis" ADD CONSTRAINT "devis_appel_id_appels_id_fk" FOREIGN KEY ("appel_id") REFERENCES "public"."appels"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "etiquetages" ADD CONSTRAINT "etiquetages_organisation_id_organisations_id_fk" FOREIGN KEY ("organisation_id") REFERENCES "public"."organisations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "etiquetages" ADD CONSTRAINT "etiquetages_etiquette_id_etiquettes_id_fk" FOREIGN KEY ("etiquette_id") REFERENCES "public"."etiquettes"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "etiquettes" ADD CONSTRAINT "etiquettes_organisation_id_organisations_id_fk" FOREIGN KEY ("organisation_id") REFERENCES "public"."organisations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "factures" ADD CONSTRAINT "factures_organisation_id_organisations_id_fk" FOREIGN KEY ("organisation_id") REFERENCES "public"."organisations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "factures" ADD CONSTRAINT "factures_client_id_clients_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."clients"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "factures" ADD CONSTRAINT "factures_devis_id_devis_id_fk" FOREIGN KEY ("devis_id") REFERENCES "public"."devis"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "invitations" ADD CONSTRAINT "invitations_organisation_id_organisations_id_fk" FOREIGN KEY ("organisation_id") REFERENCES "public"."organisations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "invitations" ADD CONSTRAINT "invitations_invite_par_id_utilisateurs_id_fk" FOREIGN KEY ("invite_par_id") REFERENCES "public"."utilisateurs"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "jetons_api" ADD CONSTRAINT "jetons_api_organisation_id_organisations_id_fk" FOREIGN KEY ("organisation_id") REFERENCES "public"."organisations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "jetons_api" ADD CONSTRAINT "jetons_api_utilisateur_id_utilisateurs_id_fk" FOREIGN KEY ("utilisateur_id") REFERENCES "public"."utilisateurs"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "membres" ADD CONSTRAINT "membres_organisation_id_organisations_id_fk" FOREIGN KEY ("organisation_id") REFERENCES "public"."organisations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "membres" ADD CONSTRAINT "membres_utilisateur_id_utilisateurs_id_fk" FOREIGN KEY ("utilisateur_id") REFERENCES "public"."utilisateurs"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "messages_email" ADD CONSTRAINT "messages_email_organisation_id_organisations_id_fk" FOREIGN KEY ("organisation_id") REFERENCES "public"."organisations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "messages_email" ADD CONSTRAINT "messages_email_client_id_clients_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."clients"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "messages_email" ADD CONSTRAINT "messages_email_chantier_id_chantiers_id_fk" FOREIGN KEY ("chantier_id") REFERENCES "public"."chantiers"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notes" ADD CONSTRAINT "notes_organisation_id_organisations_id_fk" FOREIGN KEY ("organisation_id") REFERENCES "public"."organisations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notes" ADD CONSTRAINT "notes_client_id_clients_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."clients"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notes" ADD CONSTRAINT "notes_chantier_id_chantiers_id_fk" FOREIGN KEY ("chantier_id") REFERENCES "public"."chantiers"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notes" ADD CONSTRAINT "notes_auteur_id_utilisateurs_id_fk" FOREIGN KEY ("auteur_id") REFERENCES "public"."utilisateurs"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pieces_jointes" ADD CONSTRAINT "pieces_jointes_organisation_id_organisations_id_fk" FOREIGN KEY ("organisation_id") REFERENCES "public"."organisations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pieces_jointes" ADD CONSTRAINT "pieces_jointes_client_id_clients_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."clients"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pieces_jointes" ADD CONSTRAINT "pieces_jointes_chantier_id_chantiers_id_fk" FOREIGN KEY ("chantier_id") REFERENCES "public"."chantiers"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pieces_jointes" ADD CONSTRAINT "pieces_jointes_televerse_par_id_utilisateurs_id_fk" FOREIGN KEY ("televerse_par_id") REFERENCES "public"."utilisateurs"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "publications" ADD CONSTRAINT "publications_organisation_id_organisations_id_fk" FOREIGN KEY ("organisation_id") REFERENCES "public"."organisations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "publications" ADD CONSTRAINT "publications_chantier_id_chantiers_id_fk" FOREIGN KEY ("chantier_id") REFERENCES "public"."chantiers"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sites" ADD CONSTRAINT "sites_organisation_id_organisations_id_fk" FOREIGN KEY ("organisation_id") REFERENCES "public"."organisations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sites" ADD CONSTRAINT "sites_client_id_clients_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."clients"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "taches" ADD CONSTRAINT "taches_organisation_id_organisations_id_fk" FOREIGN KEY ("organisation_id") REFERENCES "public"."organisations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "taches" ADD CONSTRAINT "taches_assigne_id_utilisateurs_id_fk" FOREIGN KEY ("assigne_id") REFERENCES "public"."utilisateurs"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "taches" ADD CONSTRAINT "taches_client_id_clients_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."clients"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "taches" ADD CONSTRAINT "taches_chantier_id_chantiers_id_fk" FOREIGN KEY ("chantier_id") REFERENCES "public"."chantiers"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "taches" ADD CONSTRAINT "taches_cree_par_id_utilisateurs_id_fk" FOREIGN KEY ("cree_par_id") REFERENCES "public"."utilisateurs"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "activites_org_cree" ON "activites" USING btree ("organisation_id","cree_le","id");--> statement-breakpoint
CREATE INDEX "activites_client" ON "activites" USING btree ("organisation_id","client_id");--> statement-breakpoint
CREATE INDEX "activites_ressource" ON "activites" USING btree ("organisation_id","type_ressource","ressource_id");--> statement-breakpoint
CREATE UNIQUE INDEX "chantiers_org_reference" ON "chantiers" USING btree ("organisation_id","reference");--> statement-breakpoint
CREATE INDEX "chantiers_org_cree" ON "chantiers" USING btree ("organisation_id","cree_le","id");--> statement-breakpoint
CREATE INDEX "chantiers_client" ON "chantiers" USING btree ("organisation_id","client_id");--> statement-breakpoint
CREATE INDEX "clients_org_cree" ON "clients" USING btree ("organisation_id","cree_le","id");--> statement-breakpoint
CREATE INDEX "clients_responsable" ON "clients" USING btree ("organisation_id","responsable_id");--> statement-breakpoint
CREATE INDEX "contacts_client" ON "contacts" USING btree ("organisation_id","client_id");--> statement-breakpoint
CREATE INDEX "etiquetages_ressource" ON "etiquetages" USING btree ("organisation_id","type_ressource","ressource_id");--> statement-breakpoint
CREATE UNIQUE INDEX "etiquettes_org_nom" ON "etiquettes" USING btree ("organisation_id","nom");--> statement-breakpoint
CREATE INDEX "invitations_org" ON "invitations" USING btree ("organisation_id");--> statement-breakpoint
CREATE INDEX "jetons_org" ON "jetons_api" USING btree ("organisation_id");--> statement-breakpoint
CREATE UNIQUE INDEX "membres_org_utilisateur" ON "membres" USING btree ("organisation_id","utilisateur_id");--> statement-breakpoint
CREATE INDEX "emails_org" ON "messages_email" USING btree ("organisation_id","recu_le");--> statement-breakpoint
CREATE INDEX "notes_client" ON "notes" USING btree ("organisation_id","client_id");--> statement-breakpoint
CREATE INDEX "notes_chantier" ON "notes" USING btree ("organisation_id","chantier_id");--> statement-breakpoint
CREATE INDEX "pj_client" ON "pieces_jointes" USING btree ("organisation_id","client_id");--> statement-breakpoint
CREATE INDEX "sites_client" ON "sites" USING btree ("organisation_id","client_id");--> statement-breakpoint
CREATE INDEX "taches_assigne" ON "taches" USING btree ("organisation_id","assigne_id","statut");--> statement-breakpoint
CREATE INDEX "taches_client" ON "taches" USING btree ("organisation_id","client_id");