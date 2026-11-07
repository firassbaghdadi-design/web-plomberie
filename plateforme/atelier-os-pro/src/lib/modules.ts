/**
 * Modules de la plateforme : source unique de la navigation (barre latérale, onglets iPhone, page « Plus »).
 * Un module futur est déclaré `bientot: true` : il apparaît grisé avec sa page de présentation.
 */
export interface Module {
  id: string;
  label: string;
  href: string;
  icone: string;
  groupe: "crm" | "bientot" | "organisation";
  onglet?: boolean; // affiché dans la barre d'onglets iPhone
  bientot?: boolean;
  phase?: number;
  resume?: string;
  points?: string[];
  dirigeant?: boolean; // réservé au dirigeant
}

export const MODULES: Module[] = [
  { id: "accueil", label: "Accueil", href: "/", icone: "accueil", groupe: "crm", onglet: true },
  { id: "clients", label: "Clients", href: "/clients", icone: "clients", groupe: "crm", onglet: true },
  { id: "chantiers", label: "Chantiers", href: "/chantiers", icone: "chantiers", groupe: "crm", onglet: true },
  { id: "taches", label: "Ma journée", href: "/taches", icone: "taches", groupe: "crm", onglet: true },
  {
    id: "boite-mail",
    label: "Boîte mail",
    href: "/bientot/boite-mail",
    icone: "emails",
    groupe: "bientot",
    bientot: true,
    phase: 2,
    resume: "Votre adresse e-mail branchée sur le CRM : chaque message rattaché au bon client, des réponses proposées par l'IA.",
    points: ["Connexion Gmail ou Microsoft 365", "Rattachement automatique au client, au chantier ou au devis", "Réponses rédigées par l'IA, envoyées après relecture", "Alertes : e-mail important, sans réponse depuis X heures, demande de devis"],
  },
  {
    id: "devis",
    label: "Devis",
    href: "/bientot/devis",
    icone: "devis",
    groupe: "bientot",
    bientot: true,
    phase: 3,
    resume: "À la fin de l'appel, le devis est déjà pré-rempli. Vous le peaufinez, puis l'envoyez.",
    points: ["Catalogue de prestations de l'entreprise", "Transcription de l'appel et extraction du besoin", "Devis PDF, signature électronique, suivi d'ouverture", "Relances automatiques"],
  },
  {
    id: "factures",
    label: "Factures",
    href: "/bientot/factures",
    icone: "factures",
    groupe: "bientot",
    bientot: true,
    phase: 4,
    resume: "Facture en un clic depuis le devis signé, avec les mentions du BTP.",
    points: ["Acomptes, situations de travaux, solde", "TVA 10 % / 5,5 % / 20 %, autoliquidation", "Relances d'impayés et trésorerie", "Facture électronique Factur-X"],
  },
  {
    id: "marketing",
    label: "Marketing",
    href: "/bientot/marketing",
    icone: "marketing",
    groupe: "bientot",
    bientot: true,
    phase: 5,
    resume: "Réseaux sociaux, fiche Google et e-mailing : l'IA prépare, vous validez.",
    points: ["Facebook, Instagram, LinkedIn, Google Business Profile", "Calendrier éditorial unique", "Campagnes e-mailing aux couleurs de l'entreprise", "Demandes et réponses aux avis clients"],
  },
  {
    id: "statistiques",
    label: "Statistiques",
    href: "/bientot/statistiques",
    icone: "statistiques",
    groupe: "bientot",
    bientot: true,
    phase: 7,
    resume: "Les chiffres qui comptent, partout : commercial, facturation, réseaux, site web.",
    points: ["Demandes, devis envoyés, taux de signature", "CA facturé, encaissé, impayés", "Vues et interactions des publications", "Trafic du site et demandes générées"],
  },
  { id: "equipe", label: "Équipe", href: "/equipe", icone: "equipe", groupe: "organisation" },
  { id: "reglages", label: "Réglages", href: "/reglages", icone: "reglages", groupe: "organisation" },
  { id: "jetons", label: "Jetons API", href: "/reglages/jetons", icone: "cle", groupe: "organisation", dirigeant: true },
  { id: "docs", label: "Documentation API", href: "/docs", icone: "docs", groupe: "organisation" },
];

export const GROUPES: Record<Module["groupe"], string> = { crm: "CRM", bientot: "Prochainement", organisation: "Organisation" };
