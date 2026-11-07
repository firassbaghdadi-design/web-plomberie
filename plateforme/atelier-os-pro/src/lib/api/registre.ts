/**
 * Registre des ressources de l'API v2. Il alimente à la fois les routes génériques
 * (/api/v2/[ressource] et /api/v2/[ressource]/[id]) et la documentation OpenAPI.
 * Ajouter un module = ajouter une entrée ici (voir README « Ajouter un module »).
 */
import type { PgTable } from "drizzle-orm/pg-core";
import type { z } from "zod";
import * as s from "@/db/schema";
import type { Contexte } from "@/lib/contexte";
import * as sc from "@/lib/schemas";
import * as crm from "@/lib/services/crm";
import * as comptes from "@/lib/services/comptes";
import type { ParametresListe, ServiceCrud } from "@/lib/services/crud";

export interface EntreeRegistre {
  nom: string;
  singulier: string;
  description: string;
  table: PgTable;
  masquer?: string[];
  /** Champs calculés ajoutés à la sortie (documentation). */
  enPlus?: Record<string, object>;
  creation?: z.ZodType<any, any>;
  modification?: z.ZodType<any, any>;
  filtres?: string[];
  recherche?: boolean;
  lister?: (ctx: Contexte, p: ParametresListe) => Promise<{ donnees: unknown[]; curseurSuivant: string | null }>;
  obtenir?: (ctx: Contexte, id: string) => Promise<unknown>;
  creer?: (ctx: Contexte, corps: unknown, origine: string) => Promise<unknown>;
  modifier?: (ctx: Contexte, id: string, corps: unknown) => Promise<unknown>;
  supprimer?: (ctx: Contexte, id: string) => Promise<void>;
  libelleSuppression?: string;
}

function depuisCrud(svc: ServiceCrud, e: Omit<EntreeRegistre, "table" | "lister" | "obtenir" | "creer" | "modifier" | "supprimer" | "filtres" | "creation" | "modification">, ops = { ecriture: true }): EntreeRegistre {
  const o = svc.options;
  return {
    ...e,
    table: o.table,
    filtres: Object.keys(o.filtres ?? {}),
    recherche: Boolean(o.recherche?.length),
    lister: svc.lister,
    obtenir: svc.obtenir,
    ...(ops.ecriture
      ? { creation: o.creation, modification: o.modification, creer: (ctx, corps) => svc.creer(ctx, corps), modifier: svc.modifier, supprimer: svc.supprimer }
      : {}),
  };
}

const sansPage = <T,>(f: (ctx: Contexte) => Promise<T[]>) => async (ctx: Contexte) => ({ donnees: await f(ctx), curseurSuivant: null });

export const REGISTRE: EntreeRegistre[] = [
  depuisCrud(crm.clientsService, { nom: "clients", singulier: "Client", description: "Clients de l'entreprise : particuliers, professionnels, syndics, bailleurs." }),
  depuisCrud(crm.contactsService, { nom: "contacts", singulier: "Contact", description: "Personnes à joindre chez un client (gestionnaire, gardien, comptable…)." }),
  depuisCrud(crm.sitesService, { nom: "sites", singulier: "Site", description: "Adresses d'intervention d'un client." }),
  depuisCrud(crm.chantiersService, { nom: "chantiers", singulier: "Chantier", description: "Chantiers et interventions. La référence (CH-AAAA-NNNN) est attribuée automatiquement." }),
  depuisCrud(crm.notesService, { nom: "notes", singulier: "Note", description: "Notes libres sur un client ou un chantier." }),
  depuisCrud(crm.tachesService, { nom: "taches", singulier: "Tâche", description: "Tâches à faire, assignées à un membre de l'équipe." }),
  depuisCrud(crm.piecesJointesService, {
    nom: "pieces-jointes",
    singulier: "Pièce jointe",
    description: "Métadonnées des fichiers (photos, PDF). Le fichier lui-même est déposé dans le stockage (Vercel Blob) puis déclaré ici avec sa clé.",
  }),
  depuisCrud(crm.etiquettesService, { nom: "etiquettes", singulier: "Étiquette", description: "Étiquettes de couleur posées sur les clients et chantiers (voir /etiquetages)." }),
  depuisCrud(crm.activitesService, { nom: "activites", singulier: "Activité", description: "Journal d'activité : chaque écriture (interface ou API) avec son auteur, sa date et les champs modifiés. Lecture seule." }, { ecriture: false }),
  {
    nom: "membres",
    singulier: "Membre",
    description: "Membres de l'équipe et leur rôle (dirigeant, charge_affaires, adv).",
    table: s.membres,
    enPlus: { utilisateur: { type: "object", properties: { id: { type: "string" }, email: { type: "string" }, nom: { type: "string" } } } },
    modification: sc.membreModification,
    lister: sansPage(comptes.listerMembres),
    obtenir: comptes.obtenirMembre,
    modifier: comptes.modifierMembre,
  },
  {
    nom: "invitations",
    singulier: "Invitation",
    description: "Invitations en attente. La création renvoie le lien d'invitation (une seule fois). DELETE annule l'invitation.",
    table: s.invitations,
    masquer: ["jetonHash"],
    enPlus: { lien: { type: "string", description: "Renvoyé uniquement à la création." } },
    creation: sc.invitationCreation,
    lister: sansPage(comptes.listerInvitations),
    creer: (ctx, corps, origine) => comptes.creerInvitation(ctx, corps, origine),
    supprimer: comptes.annulerInvitation,
    libelleSuppression: "Annuler",
  },
  {
    nom: "jetons",
    singulier: "Jeton API",
    description: "Jetons d'accès à l'API, par organisation. Seul le hash est conservé : le secret est renvoyé une seule fois à la création. DELETE révoque le jeton.",
    table: s.jetonsApi,
    masquer: ["hash"],
    enPlus: { secret: { type: "string", description: "Renvoyé uniquement à la création." } },
    creation: sc.jetonCreation,
    lister: sansPage(comptes.listerJetons),
    creer: (ctx, corps) => comptes.creerJeton(ctx, corps),
    supprimer: comptes.revoquerJeton,
    libelleSuppression: "Révoquer",
  },
];

export const trouverRessource = (nom: string) => REGISTRE.find((r) => r.nom === nom);
