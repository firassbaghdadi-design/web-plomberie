import { PATHS, type Faq } from "./site";
import type { Page } from "./types";

/**
 * Textes de la maquette, repris et réorganisés à partir du site actuel (spc-services.fr, relevé du 28 octobre 2026) :
 * entreprise du 12e depuis 1965, plomberie d'immeuble pour les syndics, couverture et assainissement depuis 2010,
 * équipe de cordistes, balcons en plomb haussmanniens, curage et inspection vidéo, pompes de relevage, dépannage
 * de 6 h à minuit, expertise et devis détaillé, salle de bains, cuisine, mise aux normes PMR.
 * Aucun prix, délai ni chiffre inventé. À faire relire et confirmer par l'entreprise.
 */

export const home = {
  title: "Plombier couvreur Paris 12e depuis 1965 | SPC Services",
  description:
    "SPC, plombier et couvreur à Paris 12e depuis 1965 : plomberie d'immeuble, couverture et travaux sur corde, assainissement, dépannage. Devis gratuit et détaillé.",
  brief:
    "SPC, Société Plomberie Couverture, est plombier couvreur à Paris 12e depuis 1965, au 66, avenue du Général-Michel-Bizot. Spécialiste de la plomberie d'immeuble pour les syndics, l'entreprise a ajouté en 2010 la couverture, les travaux sur corde et l'assainissement : un seul interlocuteur, du faîtage à la cave.",
  faq: [
    {
      q: "Où se trouve l'entreprise SPC ?",
      a: "Au 66, avenue du Général-Michel-Bizot, dans le 12e arrondissement de Paris, près de la station Michel Bizot (ligne 8). Le bureau est ouvert du lundi au vendredi, de 7 h à 17 h 30.",
    },
    {
      q: "SPC intervient-elle en urgence ?",
      a: "Oui. L'entreprise annonce un service de dépannage de 6 h à minuit, tous les jours, y compris les week-ends et les jours fériés. Pour une fuite active, appelez le 01 43 43 35 46 plutôt que d'écrire.",
    },
    {
      q: "Travaillez-vous pour les syndics de copropriété ?",
      a: "C'est le cœur historique du métier de SPC : la plomberie d'immeuble pour les syndicats de copropriétaires, l'entretien des réseaux communs, puis la couverture et l'assainissement. Des contrats d'entretien sont proposés.",
    },
    {
      q: "Comment se passe un devis ?",
      a: "Chaque intervention est précédée d'une expertise sur place et d'un devis détaillé, qui hiérarchise les travaux selon leur nécessité et peut les échelonner dans le temps selon votre budget. La demande de devis est gratuite.",
    },
  ] as Faq[],
};

/** Les métiers, du haut de l'immeuble vers le bas. */
export const trades = [
  { level: "Toiture", title: "Couverture et travaux sur corde", href: PATHS.roofing, text: "Rénovation partielle ou totale, tous matériaux, entretien et démoussage, zinguerie, fenêtres de toit, isolation des combles, balcons en plomb.", who: "Copropriétés, propriétaires" },
  { level: "Étages", title: "Plomberie d'immeuble", href: PATHS.plumbing, text: "Raccordements, sanitaires, réseaux communs, rénovation de plomberie, dépannage urgent de 6 h à minuit.", who: "Syndics, gestionnaires, particuliers" },
  { level: "Appartements", title: "Salle de bains, cuisine, PMR", href: PATHS.homes, text: "Rénovation de salle de bains, réfection de cuisine, mise aux normes pour les personnes à mobilité réduite.", who: "Particuliers" },
  { level: "Cave", title: "Assainissement", href: PATHS.drainage, text: "Curage, débouchage, dégorgement, inspection vidéo, pompes de relevage et collecteurs, contrats d'entretien.", who: "Syndics, commerces" },
] as const;

const plumbing: Page = {
  path: PATHS.plumbing,
  zone: "Paris 12e",
  title: "Plombier Paris 12e : plomberie d'immeuble et dépannage | SPC",
  description:
    "Plombier à Paris 12e depuis 1965 : plomberie d'immeuble pour syndics, raccordements, sanitaires, rénovation et dépannage de 6 h à minuit. Devis détaillé.",
  h1: "Plombier à Paris 12e, plomberie d'immeuble",
  kicker: "Plomberie · Étages",
  lead: "Raccordements, sanitaires, réseaux communs, dépannage : la plomberie d'immeuble est le métier de SPC depuis 1965, dans le 12e.",
  brief:
    "Plombier à Paris 12e depuis 1965, SPC s'est longtemps consacrée aux travaux de plomberie des syndicats d'immeubles avant de s'ouvrir aux particuliers. L'entreprise rénove les installations, raccorde les sanitaires, entretient les réseaux communs et assure le dépannage de 6 h à minuit, après une expertise et un devis détaillé.",
  contactType: "plomberie",
  service: "Plomberie d'immeuble et dépannage",
  crumb: "Plombier Paris 12e",
  photo: "plomberie",
  caption: "Travaux de plomberie de l'entreprise SPC",
  facts: [
    { label: "Depuis", value: "1965" },
    { label: "Dépannage", value: "6 h – minuit" },
    { label: "Pour", value: "Syndics, particuliers" },
  ],
  sections: [
    {
      h2: "Que fait un plombier d'immeuble à Paris 12e ?",
      answer:
        "Il s'occupe de ce qui appartient à tous : colonnes montantes, descentes, nourrices, compteurs, réseaux d'évacuation des parties communes, mais aussi des raccordements dans les logements. Dans le 12e, SPC fait ce métier depuis 1965, d'abord pour les syndicats d'immeubles, aujourd'hui aussi pour les particuliers.",
      paras: [
        "Un immeuble parisien vit avec une plomberie qui a souvent connu plusieurs époques : plomb, fonte, cuivre, PVC, raccordés au fil des rénovations. Le travail du plombier consiste à comprendre ce réseau avant d'y toucher, pour que la réparation d'un étage ne crée pas un problème à l'étage du dessous.",
        "SPC intervient sur l'ensemble de la chaîne : raccordement et remplacement des sanitaires, rénovation de canalisations, entretien des réseaux communs, recherche de l'origine d'une fuite et réparation. L'équipe est régulièrement formée et l'entreprise est affiliée à la CAPEB et reconnue par la Chambre syndicale de la plomberie (GCCP), selon son site actuel.",
      ],
      original: true,
    },
    {
      h2: "Comment SPC prépare-t-elle des travaux de plomberie ?",
      answer:
        "Par une expertise sur place, puis un devis détaillé. L'entreprise y hiérarchise les travaux selon leur nécessité, ce qui permet à un syndic ou à un propriétaire de traiter l'urgent tout de suite et d'échelonner le reste dans le temps, en accord avec son budget et ses assemblées générales.",
      steps: [
        { t: "Expertise", d: "Visite du réseau concerné, relevé de l'état des canalisations et des équipements, photos à l'appui." },
        { t: "Devis détaillé", d: "Les travaux classés par priorité, avec un échelonnement possible pour les copropriétés." },
        { t: "Intervention", d: "Réalisation dans les règles de l'art, en limitant les coupures d'eau pour les occupants." },
        { t: "Suivi", d: "Contrat d'entretien des réseaux communs pour les immeubles qui le souhaitent." },
      ],
      original: true,
    },
    {
      h2: "Que faire en cas de fuite le soir ou le week-end ?",
      answer:
        "Couper l'arrivée d'eau si possible, protéger ce qui peut l'être, puis appeler. SPC annonce un service de dépannage de 6 h à minuit, tous les jours, y compris les week-ends et les jours fériés, pour les fuites, les engorgements et les pannes qui ne peuvent pas attendre.",
      paras: [
        "Pour aller vite, donnez l'adresse exacte, l'étage, le code d'accès et la personne présente sur place. Une photo de la fuite ou de la tache au plafond aide le plombier à venir avec le bon matériel. Dans une copropriété, prévenez aussi le syndic : si la fuite vient d'une partie commune, c'est lui qui commande la réparation.",
      ],
    },
  ],
  faq: [
    {
      q: "Le plombier peut-il intervenir sur les colonnes d'eau de l'immeuble ?",
      a: "Oui, à la demande du syndic : les colonnes montantes et les réseaux communs relèvent de la copropriété. SPC a longtemps été spécialisée dans ces travaux et propose des contrats d'entretien des réseaux communs.",
    },
    {
      q: "Intervenez-vous aussi chez les particuliers du 12e ?",
      a: "Oui : raccordement de sanitaires, remplacement d'un chauffe-eau ou d'un mitigeur, rénovation de la plomberie d'une salle de bains ou d'une cuisine. La demande de devis est gratuite.",
    },
    {
      q: "Quelles sont les heures du dépannage ?",
      a: "Le site de l'entreprise annonce un dépannage de 6 h à minuit, tous les jours, week-ends et jours fériés compris. Le bureau, lui, est ouvert du lundi au vendredi, de 7 h à 17 h 30.",
    },
  ],
  ctaTitle: "Une fuite, un raccordement, une colonne à reprendre ?",
  ctaText: "Décrivez la situation, joignez une photo : SPC vous rappelle avec une première analyse.",
  related: [PATHS.drainage, PATHS.homes, "/plombier-paris-11", "/plombier-vincennes"],
};

const roofing: Page = {
  path: PATHS.roofing,
  zone: "Paris 12e",
  title: "Couvreur Paris 12e : toiture, zinguerie, cordistes | SPC",
  description:
    "Couvreur à Paris 12e : rénovation de toiture tous matériaux, démoussage, zinguerie, fenêtres de toit, combles, balcons en plomb et travaux sur corde. Devis.",
  h1: "Couvreur à Paris 12e, toiture et travaux sur corde",
  kicker: "Couverture · Toiture",
  lead: "Depuis 2010, les couvreurs et les cordistes de SPC rénovent et entretiennent les toits du 12e, y compris là où l'accès est difficile.",
  brief:
    "Couvreur à Paris 12e, SPC rénove les toitures en partie ou en totalité, tous matériaux, et en assure l'entretien et le démoussage. Ses couvreurs posent fenêtres de toit et zinguerie, isolent les combles et rénovent les balcons en plomb haussmanniens, avec une équipe de cordistes pour les accès difficiles.",
  contactType: "couverture",
  service: "Couverture, zinguerie et travaux sur corde",
  crumb: "Couvreur Paris 12e",
  photo: "couverture",
  caption: "Travaux de couverture de l'entreprise SPC",
  facts: [
    { label: "Couverture", value: "Depuis 2010" },
    { label: "Accès", value: "Sur corde" },
    { label: "Matériaux", value: "Tous" },
  ],
  sections: [
    {
      h2: "Quels travaux de toiture SPC réalise-t-elle dans le 12e ?",
      answer:
        "La rénovation de toiture, partielle ou totale, quel que soit le matériau, et son entretien courant : démoussage, nettoyage, reprise des éléments abîmés. S'y ajoutent les accessoires de toiture : zinguerie, fenêtres de toit et isolation des combles, pour offrir une prestation complète à l'immeuble.",
      list: [
        "Rénovation de toiture partielle ou totale, tous matériaux",
        "Entretien, nettoyage et démoussage des toitures",
        "Zinguerie de toiture : chéneaux, gouttières, descentes, habillages",
        "Pose et remplacement de fenêtres de toit",
        "Isolation des combles",
        "Rénovation des balcons en plomb de type haussmannien",
      ],
      paras: [
        "Les équipes de couverture de l'entreprise pratiquent ces travaux depuis une vingtaine d'années, selon le site de SPC. Le zinc des toits parisiens, ses joints debout et ses brisis demandent un savoir-faire précis : un défaut de pente ou une soudure fatiguée suffit à faire entrer l'eau au dernier étage.",
      ],
      original: true,
    },
    {
      h2: "Pourquoi faire appel à des couvreurs cordistes ?",
      answer:
        "Parce qu'une partie des toits et des façades de Paris est difficile d'accès : cours étroites, verrières, terrassons sans garde-corps, courettes. L'équipe de cordistes de SPC intervient sur corde là où un échafaudage serait trop lourd, trop long à monter ou impossible à installer.",
      paras: [
        "Le travail sur corde permet de traiter une gouttière, un solin ou une souche sans immobiliser la rue ni la cour pendant des semaines. Il sert aussi aux contrôles : vérifier l'état d'un chéneau avant l'hiver ou repérer l'origine d'une infiltration qui tache le plafond d'un appartement.",
        "Pour les syndics, c'est une solution souvent plus simple à faire voter : l'intervention est ciblée, l'emprise sur les parties communes est réduite, et le devis reste lisible.",
      ],
      original: true,
    },
    {
      h2: "Qu'est-ce qu'un balcon en plomb haussmannien ?",
      answer:
        "C'est le balcon filant des immeubles du XIXe siècle, dont le dessus est protégé par une feuille de plomb qui renvoie l'eau vers l'extérieur. Avec le temps, le plomb se fend ou se décolle et l'eau attaque la pierre. SPC rénove ces balcons, un savoir-faire qu'elle met en avant.",
    },
  ],
  faq: [
    {
      q: "Faites-vous le démoussage des toitures ?",
      a: "Oui. L'entretien et le démoussage font partie des prestations de couverture de SPC, au même titre que la rénovation partielle ou totale des toitures, quel que soit leur matériau.",
    },
    {
      q: "Pouvez-vous intervenir sans échafaudage ?",
      a: "Souvent, oui : l'équipe de cordistes de l'entreprise travaille sur corde pour les accès difficiles. La faisabilité dépend de l'immeuble et se vérifie lors de l'expertise qui précède le devis.",
    },
    {
      q: "Une infiltration au dernier étage vient-elle forcément du toit ?",
      a: "Pas toujours : un chéneau bouché, une descente fendue ou un solin décollé peuvent aussi en être la cause. Le couvreur cherche l'origine avant de réparer, pour ne pas refaire une toiture qui n'en avait pas besoin.",
    },
  ],
  ctaTitle: "Une infiltration, une gouttière, un toit à reprendre ?",
  ctaText: "Indiquez l'adresse de l'immeuble et ce que vous constatez : SPC organise l'expertise.",
  related: [PATHS.plumbing, "/couvreur-paris-11", "/couvreur-vincennes", "/couvreur-saint-mande"],
};

const drainage: Page = {
  path: PATHS.drainage,
  zone: "Paris 12e",
  title: "Assainissement Paris 12e : curage, débouchage, relevage | SPC",
  description:
    "Assainissement à Paris 12e : curage, débouchage, dégorgement et inspection vidéo des canalisations, pompes de relevage, contrats d'entretien pour syndics.",
  h1: "Assainissement à Paris 12e, curage et pompes de relevage",
  kicker: "Assainissement · Cave",
  lead: "Ce qui se passe sous l'immeuble se voit rarement, jusqu'au jour où ça remonte. SPC entretient canalisations, collecteurs et pompes de relevage.",
  brief:
    "Pour l'assainissement à Paris 12e, SPC entretient les équipements et les réseaux communs des immeubles : curage, débouchage, dégorgement et inspection vidéo de toutes les canalisations, remplacement des pompes de relevage et des collecteurs associés. L'entreprise propose aussi des contrats d'entretien, pour les syndics comme pour les professionnels.",
  contactType: "assainissement",
  service: "Assainissement et entretien des réseaux",
  crumb: "Assainissement Paris 12e",
  photo: "assainissement",
  caption: "Travaux d'assainissement de l'entreprise SPC",
  facts: [
    { label: "Depuis", value: "2010" },
    { label: "Inspection", value: "Vidéo" },
    { label: "Contrats", value: "D'entretien" },
  ],
  sections: [
    {
      h2: "Quelles prestations d'assainissement pour un immeuble du 12e ?",
      answer:
        "Le curage des canalisations, le débouchage et le dégorgement des évacuations bouchées, l'inspection vidéo pour voir l'intérieur des conduites sans casser, et l'entretien ou le remplacement des pompes de relevage et de leurs collecteurs. SPC fait ces travaux depuis 2010, pour les syndics et les professionnels.",
      list: [
        "Curage des canalisations et des collecteurs",
        "Débouchage et dégorgement des évacuations",
        "Inspection vidéo des canalisations",
        "Remplacement de pompes de relevage et des collecteurs associés",
        "Contrats d'entretien des réseaux communs",
      ],
      original: true,
    },
    {
      h2: "À quoi sert une pompe de relevage ?",
      answer:
        "Elle remonte jusqu'au réseau public les eaux usées produites plus bas que l'égout : caves, sous-sols, loges, commerces en contrebas, parkings. Quand elle tombe en panne, les effluents stagnent et remontent. Un entretien régulier et un remplacement préparé évitent la panne un dimanche soir.",
      paras: [
        "Dans les immeubles anciens du 12e, les sous-sols ont souvent été réaménagés au fil des décennies : buanderies, locaux poubelles, ateliers, réserves de boutiques. Chaque évacuation située sous le niveau de la rue dépend alors d'un poste de relevage, et donc de sa pompe et de son clapet.",
        "SPC propose des contrats d'entretien et des prestations de remplacement de pompe de relevage et des collecteurs associés. Le remplacement se prépare : on choisit le modèle en fonction du volume à relever et de la hauteur, et on prévoit, si possible, une solution de secours pendant l'intervention.",
      ],
      original: true,
    },
    {
      h2: "Pourquoi faire une inspection vidéo des canalisations ?",
      answer:
        "Pour savoir ce qui se passe à l'intérieur d'une conduite avant de décider des travaux : dépôt, racine, contre-pente, fissure, raccord déboîté. L'inspection vidéo évite de casser à l'aveugle et donne au syndic un constat objectif à présenter en assemblée générale.",
    },
  ],
  faq: [
    {
      q: "Les évacuations d'un immeuble se bouchent souvent : que faire ?",
      a: "Faire un curage complet plutôt que des débouchages ponctuels, puis une inspection vidéo pour en trouver la cause. Un contrat d'entretien des réseaux communs permet ensuite d'anticiper au lieu de subir.",
    },
    {
      q: "Intervenez-vous pour les commerces et les restaurants ?",
      a: "Oui : SPC répond aux besoins des professionnels pour l'entretien de leurs équipements d'assainissement, curage, débouchage et pompes de relevage, avec des contrats d'entretien si nécessaire.",
    },
    {
      q: "Qui paie le débouchage d'une canalisation commune ?",
      a: "En général la copropriété, puisque la canalisation est une partie commune ; si l'obstruction vient d'un logement, le syndic peut se retourner vers son occupant. C'est le syndic qui commande l'intervention.",
    },
  ],
  ctaTitle: "Une évacuation bouchée, une pompe qui faiblit ?",
  ctaText: "Décrivez l'installation et les symptômes : SPC vous propose un diagnostic et un devis détaillé.",
  related: [PATHS.plumbing, PATHS.roofing, "/plombier-paris-20", "/plombier-saint-mande"],
};

const homes: Page = {
  path: PATHS.homes,
  zone: "Paris 12e",
  title: "Rénovation de salle de bains Paris 12e, cuisine, PMR | SPC",
  description:
    "Rénovation de salle de bains à Paris 12e, réfection de cuisine et mise aux normes PMR par SPC, plombier depuis 1965 : expertise, devis détaillé et gratuit.",
  h1: "Rénovation de salle de bains à Paris 12e",
  kicker: "Particuliers · Appartements",
  lead: "Après des décennies dans les parties communes, les plombiers de SPC montent aussi dans les appartements : salle de bains, cuisine, accessibilité.",
  brief:
    "Pour une rénovation de salle de bains à Paris 12e, SPC met au service des particuliers l'expérience de la plomberie d'immeuble acquise depuis 1965. L'entreprise rénove salles de bains et cuisines et réalise les mises aux normes pour les personnes à mobilité réduite, après une visite et un devis détaillé, gratuit.",
  contactType: "particulier",
  service: "Rénovation de salle de bains, cuisine et mise aux normes PMR",
  crumb: "Salle de bains Paris 12e",
  photo: "particuliers",
  caption: "Salle de bains rénovée par l'entreprise SPC",
  facts: [
    { label: "Pièces", value: "Bain, cuisine" },
    { label: "Accessibilité", value: "Normes PMR" },
    { label: "Devis", value: "Gratuit" },
  ],
  sections: [
    {
      h2: "Pourquoi confier sa salle de bains à un plombier d'immeuble ?",
      answer:
        "Parce qu'une salle de bains, dans un immeuble ancien, se raccorde à un réseau commun qui a son âge et ses contraintes : diamètres, pentes, colonnes partagées avec les voisins. Un plombier qui connaît ces réseaux depuis 1965 sait où passer, ce qui est possible et ce qu'il faut demander au syndic.",
      paras: [
        "Remplacer une baignoire par une douche de plain-pied, déplacer un WC, ajouter un lave-mains : chaque projet commence par une question de plomberie. L'évacuation doit garder sa pente jusqu'à la chute, et le raccordement ne doit pas fragiliser la colonne qui dessert les étages.",
        "SPC réalise l'ensemble des raccordements, la pose des sanitaires et de la robinetterie, et coordonne les travaux de la pièce. Le devis détaille chaque poste pour que vous sachiez précisément ce qui est prévu.",
      ],
      original: true,
    },
    {
      h2: "Qu'est-ce qu'une mise aux normes PMR ?",
      answer:
        "C'est l'adaptation d'une salle de bains ou d'un WC aux personnes à mobilité réduite : douche sans ressaut, barres d'appui, sanitaires à la bonne hauteur, espace de manœuvre pour un fauteuil. SPC réalise ces mises aux normes, pour un parent âgé, un handicap ou par anticipation.",
      list: [
        "Douche de plain-pied à la place de la baignoire",
        "WC et lavabo à hauteur adaptée",
        "Barres d'appui et siège de douche",
        "Robinetterie facile à manœuvrer",
      ],
    },
    {
      h2: "Rénovez-vous aussi les cuisines ?",
      answer:
        "Oui, la réfection de cuisine fait partie des prestations de SPC : déplacement ou création des arrivées d'eau et des évacuations, raccordement de l'évier, du lave-vaisselle et du lave-linge, reprise des canalisations vieillissantes cachées derrière les meubles.",
    },
  ],
  faq: [
    {
      q: "Peut-on créer une douche à l'italienne dans un immeuble ancien ?",
      a: "Souvent, mais tout dépend de la hauteur disponible pour l'évacuation et de la position de la chute. La visite technique avant devis permet de le vérifier, et d'envisager une solution adaptée si le plancher ne le permet pas.",
    },
    {
      q: "Faut-il prévenir le syndic avant de rénover sa salle de bains ?",
      a: "Pour les travaux privatifs, une information suffit en général ; s'ils touchent les colonnes ou la structure, l'accord de la copropriété est nécessaire. Votre règlement de copropriété le précise.",
    },
    {
      q: "Le devis est-il payant ?",
      a: "Non, la demande de devis est gratuite. Il est établi après une visite, pour décrire précisément chaque poste de travaux.",
    },
  ],
  ctaTitle: "Un projet de salle de bains ou de cuisine ?",
  ctaText: "Envoyez quelques photos de la pièce et vos envies : SPC vous propose une visite.",
  related: [PATHS.plumbing, "/plombier-vincennes", "/plombier-saint-mande", "/plombier-paris-11"],
};

const history: Page = {
  path: PATHS.history,
  zone: "Paris 12e",
  title: "Notre histoire : SPC, plombier dans le 12e depuis 1965",
  description:
    "L'histoire de SPC, entreprise de plomberie de quartier à Paris 12e depuis 1965 : la plomberie d'immeuble, puis la couverture, les cordistes et l'assainissement.",
  h1: "Notre histoire, une entreprise de quartier à Paris 12e",
  kicker: "Notre histoire · Depuis 1965",
  lead: "Une entreprise de plomberie « de quartier », à taille humaine : c'est ainsi que SPC se présente, dans le 12e depuis 1965.",
  brief:
    "SPC est une entreprise de plomberie de quartier, à taille humaine, installée dans le 12e arrondissement de Paris depuis 1965. Longtemps spécialisée dans la plomberie des syndicats d'immeubles, elle s'est diversifiée en 2010 vers la couverture et l'assainissement, avec une équipe formée aux travaux sur corde.",
  contactType: "autre",
  crumb: "Notre histoire",
  photo: "couverture",
  photoIndex: 1,
  caption: "L'équipe SPC au travail",
  facts: [
    { label: "Fondée", value: "1965" },
    { label: "Couverture", value: "2010" },
    { label: "Équipe", value: "10 à 19" },
  ],
  sections: [
    {
      h2: "Comment est née l'entreprise SPC ?",
      answer:
        "Comme une entreprise de plomberie de quartier, dans le 12e arrondissement, en 1965. Pendant des années, son métier a été la plomberie des immeubles pour le compte des syndicats de copropriétaires : colonnes, réseaux communs, raccordements, dépannages dans les parties communes.",
      paras: [
        "Au fil des années et des évolutions, l'entreprise s'est transformée et diversifiée pour offrir à chacun de ses clients les prestations nécessaires à son confort quotidien, selon ses propres mots. Les particuliers du quartier sont venus s'ajouter aux syndics.",
      ],
      original: true,
    },
    {
      h2: "Pourquoi SPC est-elle devenue aussi couvreur ?",
      answer:
        "Parce que l'eau d'un immeuble ne s'arrête pas aux canalisations : elle tombe aussi sur le toit et descend par les gouttières. En 2010, SPC s'est élargie aux travaux de couverture et d'assainissement, en formant une équipe professionnelle aux travaux sur corde pour les projets en hauteur.",
      paras: [
        "Ce double métier explique le nom de l'entreprise, Société Plomberie Couverture, et sa façon de travailler : un seul interlocuteur pour le toit, les étages et la cave. Pour un syndic, c'est une seule expertise, un seul devis et un seul responsable du chantier.",
      ],
      original: true,
    },
    {
      h2: "Quelles garanties l'entreprise met-elle en avant ?",
      answer:
        "Son site cite la qualification Qualibat RGE pour des chantiers respectueux de l'environnement, une garantie civile et décennale pour les travaux, l'affiliation à la CAPEB et la reconnaissance de la Chambre syndicale de la plomberie (GCCP). Ces mentions sont à vérifier avec l'entreprise avant toute publication.",
      list: [
        "Qualibat RGE : des chantiers réalisés dans le respect de l'environnement",
        "Garantie décennale : des travaux couverts par une garantie civile et décennale",
        "Affiliée à la CAPEB",
        "Reconnue par la Chambre syndicale de la plomberie (GCCP)",
      ],
      original: true,
    },
  ],
  faq: [
    {
      q: "Combien de personnes travaillent chez SPC ?",
      a: "Les registres publics indiquent une équipe de 10 à 19 salariés : plombiers, couvreurs et cordistes, réunis dans une entreprise qui se veut à taille humaine.",
    },
    {
      q: "SPC est-elle toujours une entreprise du 12e ?",
      a: "Oui : son bureau est au 66, avenue du Général-Michel-Bizot, et l'entreprise intervient dans le 12e, à Saint-Mandé et dans les alentours.",
    },
    {
      q: "Que signifie le sigle SPC ?",
      a: "Société Plomberie Couverture : les deux métiers de l'entreprise, la plomberie d'immeuble d'origine et la couverture ajoutée en 2010.",
    },
  ],
  ctaTitle: "Une entreprise de quartier, pour votre immeuble.",
  ctaText: "Parlez-nous de votre projet : plomberie, toiture ou assainissement.",
  related: [PATHS.plumbing, PATHS.roofing, PATHS.drainage],
};

export const servicePages: Page[] = [plumbing, roofing, drainage, homes];
export const historyPage = history;
