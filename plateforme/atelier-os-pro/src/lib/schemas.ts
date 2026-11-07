/**
 * Schémas d'entrée (zod) : la même validation sert l'interface, l'API et la documentation OpenAPI.
 */
import { z } from "zod";

const texte = (max = 200) => z.string().trim().max(max);
const opt = (max = 200) => texte(max).nullable().optional();
const id = (desc: string) => z.string().min(3).max(64).describe(desc);
const idOpt = (desc: string) => id(desc).nullable().optional();
const jour = () => z.iso.date().nullable().optional();
const email = () => z.email("Adresse e-mail invalide.").max(200).nullable().optional();
const couleur = () => z.string().regex(/^#[0-9a-fA-F]{6}$/, "Couleur au format #RRGGBB.");

export const TYPES_CLIENT = ["particulier", "professionnel", "syndic", "bailleur"] as const;
export const STATUTS_CHANTIER = ["a_qualifier", "en_devis", "planifie", "en_cours", "en_pause", "termine", "annule"] as const;
export const ROLES = ["dirigeant", "charge_affaires", "adv"] as const;

export const clientCreation = z.strictObject({
  type: z.enum(TYPES_CLIENT).default("particulier").describe("particulier, professionnel, syndic ou bailleur"),
  nom: texte().min(1, "Le nom est obligatoire.").describe("Nom affiché (personne ou entreprise)"),
  raisonSociale: opt(),
  siret: z.string().regex(/^\d{14}$/, "Le SIRET compte 14 chiffres.").nullable().optional(),
  email: email(),
  telephone: opt(40),
  source: opt(80).describe("Origine du client : site, bouche-à-oreille, Google…"),
  responsableId: idOpt("Chargé d'affaires responsable (utilisateur). Par défaut : l'auteur s'il est chargé d'affaires."),
  remarques: opt(4000),
});
export const clientModification = clientCreation.partial();

export const contactCreation = z.strictObject({
  clientId: id("Client rattaché"),
  prenom: opt(80),
  nom: texte(120).min(1, "Le nom est obligatoire."),
  fonction: opt(120),
  email: email(),
  telephone: opt(40),
  principal: z.boolean().optional(),
});
export const contactModification = contactCreation.omit({ clientId: true }).partial();

export const siteCreation = z.strictObject({
  clientId: id("Client rattaché"),
  libelle: opt(120).describe("Ex. « Résidence Les Tilleuls — bât. B »"),
  adresse: texte(240).min(1, "L'adresse est obligatoire."),
  complement: opt(240),
  codePostal: z.string().regex(/^\d{5}$/, "Code postal à 5 chiffres.").nullable().optional(),
  ville: opt(120),
  codeAcces: opt(120),
});
export const siteModification = siteCreation.omit({ clientId: true }).partial();

export const chantierCreation = z.strictObject({
  titre: texte().min(1, "Le titre est obligatoire."),
  description: opt(8000),
  statut: z.enum(STATUTS_CHANTIER).default("a_qualifier"),
  clientId: id("Client du chantier"),
  siteId: idOpt("Adresse d'intervention (site du client)"),
  chargeAffairesId: idOpt("Chargé d'affaires. Par défaut : responsable du client."),
  dateDebut: jour(),
  dateFin: jour(),
  montantEstimeHt: z.number().int().min(0).max(1_000_000_000).nullable().optional().describe("Montant estimé HT en centimes"),
});
export const chantierModification = chantierCreation.omit({ clientId: true }).partial();

export const noteCreation = z
  .strictObject({
    contenu: texte(20000).min(1, "La note est vide."),
    clientId: idOpt("Client concerné"),
    chantierId: idOpt("Chantier concerné"),
    epinglee: z.boolean().optional(),
  })
  .refine((n) => n.clientId || n.chantierId, { message: "Une note se rattache à un client ou à un chantier.", path: ["clientId"] });
export const noteModification = z.strictObject({ contenu: texte(20000).min(1).optional(), epinglee: z.boolean().optional() });

export const tacheCreation = z.strictObject({
  titre: texte().min(1, "Le titre est obligatoire."),
  description: opt(4000),
  statut: z.enum(["a_faire", "faite"]).default("a_faire"),
  priorite: z.enum(["normale", "haute"]).default("normale"),
  echeance: jour(),
  assigneId: idOpt("Utilisateur assigné. Par défaut : l'auteur."),
  clientId: idOpt("Client concerné"),
  chantierId: idOpt("Chantier concerné"),
});
export const tacheModification = tacheCreation.partial();

export const pieceJointeCreation = z
  .strictObject({
    nom: texte(240).min(1),
    typeMime: texte(120).min(1),
    taille: z.number().int().min(0).max(500 * 1024 * 1024),
    cleStockage: texte(500).min(1).describe("Clé du fichier dans le stockage (Vercel Blob)"),
    url: z.url().max(2000).nullable().optional(),
    clientId: idOpt("Client concerné"),
    chantierId: idOpt("Chantier concerné"),
  })
  .refine((n) => n.clientId || n.chantierId, { message: "Une pièce jointe se rattache à un client ou à un chantier.", path: ["clientId"] });
export const pieceJointeModification = z.strictObject({ nom: texte(240).min(1).optional() });

export const etiquetteCreation = z.strictObject({ nom: texte(40).min(1), couleur: couleur().optional() });
export const etiquetteModification = etiquetteCreation.partial();

export const etiquetageCreation = z.strictObject({
  etiquetteId: id("Étiquette"),
  typeRessource: z.enum(["clients", "chantiers"]),
  ressourceId: id("Ressource étiquetée"),
});

export const organisationModification = z.strictObject({
  nom: texte(120).min(1).optional(),
  siret: z.string().regex(/^\d{14}$/, "Le SIRET compte 14 chiffres.").nullable().optional(),
  tvaIntracom: z.string().regex(/^FR[0-9A-Z]{2}\d{9}$/, "N° de TVA au format FRXX999999999.").nullable().optional(),
  adresse: opt(300),
  telephone: opt(40),
  email: email(),
  logoUrl: z.url().max(2000).nullable().optional(),
  couleurPrincipale: couleur().optional(),
  couleurSecondaire: couleur().optional(),
});

export const invitationCreation = z.strictObject({ email: z.email("Adresse e-mail invalide.").max(200), role: z.enum(ROLES) });
export const membreModification = z.strictObject({ role: z.enum(ROLES).optional(), actif: z.boolean().optional() });

export const jetonCreation = z.strictObject({
  nom: texte(80).min(1, "Donnez un nom au jeton."),
  portees: z.array(z.string().regex(/^[a-z_*]+:(lecture|ecriture)$/)).min(1).default(["*:lecture"]),
  expireLe: z.iso.datetime().nullable().optional(),
});

export const acceptationInvitation = z.strictObject({
  nom: texte(120).min(1, "Votre nom est obligatoire."),
  motDePasse: z.string().min(10, "10 caractères minimum.").max(200),
});
