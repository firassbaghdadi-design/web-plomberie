/**
 * Textes repris mot pour mot du site actuel somsoupons.fr (relevés le 25 octobre 2026), avec leurs fautes de frappe
 * corrigées seulement quand elles gênent la lecture. Chaque bloc n'apparaît que sur la page qui lui correspond.
 */

export const historique = [
  "SOMSOU-PONS est une entreprise du Bâtiment présente à Paris depuis plus d'un siècle (elle exposait ses fabrications de carrelages à l'exposition universelle de Paris de 1880).",
  "En effet, c'est en 1876 que naissent les Etablissements PIQUOT, fabricants et poseurs de mosaïques et de carrelages, fondés par les ancêtres de Monsieur Franck LEBAILLY, actuel dirigeant de SOMSOU-PONS.",
  "En 1958, ces établissements prennent le nom de SOMSOU. En 1975, ils se diversifient : ils rachètent l'entreprise de Maçonnerie L'HÉRITIER. Puis en 1992 la Maison PONS (créée en 1924) et spécialisée en Plomberie et Couverture. Ainsi, la société SOMSOU-PONS est née. Cette même année, SOMSOU-PONS crée une filiale spécialisée en Menuiserie.",
  "En 1997, forte de se développer, elle rachète les sociétés COLBAL et DUROUCHOUX, entreprises de Plomberie et Couverture. En 1999, elle crée son siège social en rachetant l'Entreprise THEULOUP située 9, rue Gavarni 75116 PARIS, également spécialisée en Plomberie et Couverture.",
  "En 2006, SOMSOU-PONS transfère ses bureaux au 26, rue Ampère 75017 PARIS. Son dirigeant crée la SARL TRANSVAAL, domiciliée 5, rue du Transvaal 92250 LA GARENNE-COLOMBES, qui reprend l'activité de menuiserie créée en 1992. En 2013, SOMSOU-PONS rachète la société CPR, spécialisée en Plomberie et Couverture.",
];

export const organigramme = [
  { name: "Franck LEBAILLY", role: "Président" },
  { name: "Nathalie BEGUE", role: "Comptable" },
  { name: "Guillaume LEBAILLY", role: "Responsable de l'agence du 16e" },
  { name: "Suzanna DOMINGUES", role: "Assistante, agence du 16e" },
  { name: "Franck LEBAILLY", role: "Responsable de l'agence du 17e" },
  { name: "Nathalie JEUFFRAIN", role: "Assistante, agence du 17e" },
];

export const agencyTeams: Record<string, { name: string; role: string }[]> = {
  seize: [
    { name: "Guillaume LEBAILLY", role: "Responsable d'agence" },
    { name: "Suzanna DOMINGUES", role: "Assistante" },
  ],
  dixsept: [
    { name: "Franck LEBAILLY", role: "Responsable d'agence" },
    { name: "Nathalie JEUFFRAIN", role: "Assistante" },
  ],
};

export const agencyActivities = "Plomberie, dépannage, maçonnerie, carrelage, menuiserie, petite couverture, peinture, électricité";

export const metiersIntro = "Vous avez des projets ? Nous vous aidons à les réaliser !";
export const metiersLead =
  "L'entreprise Somsou-Pons Transvaal propose un service de rénovation partielle ou totale (appartements, pavillons, locaux commerciaux, sociétés, salles de bain sur mesure, cuisines sur mesure…) avec un seul interlocuteur :";
export const metiersList = [
  { name: "Démolition", detail: "" },
  { name: "Maçonnerie", detail: "ouvertures de murs porteurs, renforts de fondation, planchers béton, chapes, murs en parpaings, surélévations, agrandissements…" },
  { name: "Plâtrerie", detail: "cloisons, faux plafonds, doublage, staff…" },
  { name: "Carrelage, marbre, pierre, mosaïque", detail: "" },
  { name: "Plomberie", detail: "arrivées et évacuations, pose de sanitaires, robinetteries…" },
  { name: "Chauffage", detail: "chaudières, planchers chauffants, radiateurs, ballons d'eau chaude…" },
  { name: "Menuiserie intérieure", detail: "portes, placards, bibliothèques, fabrication et pose de cuisines…" },
  { name: "Parquet", detail: "pose traditionnelle, collée ou flottante, ponçage et vitrification…" },
  { name: "Menuiserie extérieure", detail: "fenêtres, portes-fenêtres, baies coulissantes, volets, portes d'entrée…" },
  { name: "Petite couverture", detail: "" },
  { name: "Peinture, décoration, moquette", detail: "" },
  { name: "Électricité", detail: "courant faible, courant fort" },
];
export const depannageList = ["En plomberie", "En menuiserie", "En couverture (nettoyage et petites réparations)"];

export const qualifIntro = "Nos qualifications vous garantissent qualité et fiabilité !";
export const qualibatText =
  "QUALIBAT est un organisme indépendant, composé de tous les intervenants à l'acte de construire. Depuis 1949, la mission est de vérifier en toute objectivité les compétences techniques et les garanties de sérieux des entreprises de bâtiment. La rigueur de nos procédures et de nos exigences sont autant d'atouts pour vous aider à sélectionner vos futurs partenaires en toute transparence.";
export const pgText =
  "Professionnel du Gaz est un organisme de contrôle continûment agréé par arrêtés ministériels depuis le 1er décembre 1992, dans le cadre du contrôle des installations de gaz dans l'habitat, défini à l'article 26 de l'arrêté du 2 août 1977 modifié.";
export const rgeText =
  "La mention RGE (Reconnu Garant de l'Environnement) s'adresse aux artisans et entreprises du bâtiment spécialisés dans les travaux d'efficacité énergétique en rénovation et l'installation d'équipements utilisant des énergies renouvelables.";
