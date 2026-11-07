import { PATHS } from "./site";
import type { Page } from "./types";

/**
 * Pages métier × quartier : le 10e (siège, passage du Désir) et les arrondissements voisins (9e, 11e, 18e, 19e, 3e).
 * Chaque texte est propre à sa page. Repères de quartier institutionnels, à faire relire par un habitant.
 * Aucun prix, délai, chiffre ni certification inventés.
 */
const r = (...n: number[]) => n.map((i) => `realisation-0${i}`);

export const localPages: Page[] = [
  {
    path: PATHS.plumbing,
    slug: "plombier-paris-10",
    zone: "Paris 10e",
    title: "Plombier Paris 10e : canalisations et robinetterie | MTE",
    description:
      "Plombier à Paris 10e depuis 1880, passage du Désir : canalisations, robinetterie, sanitaires et dégorgements, pour particuliers, syndics et commerces.",
    h1: "Plombier à Paris 10e, passage du Désir",
    kicker: "Plomberie · Paris 10e",
    lead: "Canalisations, robinetterie, sanitaires : le plombier du quartier depuis 1880, à deux pas de la gare de l'Est et du faubourg Saint-Denis.",
    brief:
      "Pour un plombier à Paris 10e, Martinet Thibault Entreprise intervient depuis le 34, passage du Désir : création et remplacement de canalisations, robinetterie, sanitaires de salle de bains et de cuisine, dégorgements et dépannages. Le service plomberie, dirigé par M. Yvan Badjic, répond au 01 48 24 80 59.",
    contactType: "plomberie",
    service: "Plomberie",
    crumb: "Plombier Paris 10e",
    photo: "plombier",
    caption: "Raccord serré à la clé, sur un réseau d'eau",
    gallery: r(1, 2, 3),
    facts: [
      { label: "Depuis", value: "1880" },
      { label: "Ligne directe", value: "01 48 24 80 59" },
      { label: "Quartier", value: "Faubourgs" },
    ],
    sections: [
      {
        h2: "Quels travaux de plomberie dans le 10e arrondissement ?",
        answer:
          "Les demandes les plus courantes dans le 10e touchent les canalisations d'immeubles anciens, la robinetterie à remplacer, les sanitaires à poser ou à déplacer et les évacuations à déboucher. Martinet Thibault Entreprise traite ces travaux pour les appartements, les boutiques, les restaurants et les parties communes.",
        paras: [
          "Le 10e réunit des immeubles de faubourg aux cours profondes, des constructions de la seconde moitié du XIXe siècle autour des gares et de nombreux commerces en rez-de-chaussée. Chaque type de bâtiment a ses habitudes : colonnes montantes partagées, réseaux modifiés au fil des propriétaires, cuisines professionnelles qui sollicitent fortement les évacuations.",
          "Connaître ces bâtiments évite bien des surprises : savoir où chercher une vanne d'arrêt dans une cave, comment passer une canalisation sans abîmer un parquet ancien, ou qui prévenir dans la copropriété avant de couper l'eau.",
        ],
      },
      {
        h2: "Faut-il remplacer de vieilles canalisations ?",
        answer:
          "Pas forcément toutes. Un diagnostic sur place permet de distinguer ce qui peut être conservé de ce qui doit être remplacé : tronçons corrodés, raccords qui fuient, anciennes conduites en plomb encore présentes dans certains immeubles. Le devis détaille ensuite les tronçons à reprendre et les matériaux proposés.",
        list: [
          "Remplacement de conduites d'alimentation et de raccords fuyards",
          "Reprise d'évacuations, de siphons et de chutes",
          "Pose et changement de robinetterie, mitigeurs, robinets d'arrêt",
          "Raccordement de lave-linge et de lave-vaisselle",
        ],
      },
      {
        h2: "Comment se passe une intervention dans un immeuble du 10e ?",
        answer:
          "Vous décrivez le problème au standard ou par le formulaire, avec une photo si possible. Le service plomberie fixe un rendez-vous, vérifie les accès et les coupures d'eau nécessaires, puis intervient. Pour des travaux plus importants, un devis écrit est établi après la visite.",
        paras: [
          "En copropriété, il est utile de prévenir le gardien ou le syndic lorsque l'intervention touche une colonne commune : une coupure d'eau générale se prépare et s'affiche à l'avance.",
        ],
      },
    ],
    faq: [
      {
        q: "Quel est le numéro du service plomberie ?",
        a: "Le service plomberie répond au 01 48 24 80 59 (M. Yvan Badjic). Le standard, au 01 48 24 80 57, oriente aussi les appels du lundi au vendredi.",
      },
      {
        q: "Intervenez-vous dans les commerces du faubourg Saint-Denis ?",
        a: "Oui, l'entreprise intervient pour les particuliers comme pour les professionnels du 10e. Précisez vos horaires d'ouverture pour organiser l'intervention.",
      },
      {
        q: "Le devis de plomberie est-il gratuit ?",
        a: "La demande de devis par le formulaire est gratuite. Les conditions d'une éventuelle visite sont précisées par l'entreprise lors du premier échange.",
      },
    ],
    ctaTitle: "Un plombier du quartier, depuis 1880.",
    ctaText: "Décrivez votre besoin de plomberie : le service vous rappelle.",
    related: [PATHS.emergency, PATHS.bathroom, PATHS.heating, "/plombier-paris-9"],
  },
  {
    path: PATHS.roofing,
    slug: "couvreur-paris-10",
    zone: "Paris 10e",
    title: "Couvreur zingueur Paris 10e : toiture et chéneaux | MTE",
    description:
      "Couvreur à Paris 10e : couverture zinc, chéneaux, descentes d'eau pluviale et usée, toitures et bardages. Service couverture de Martinet Thibault Entreprise.",
    h1: "Couvreur zingueur à Paris 10e",
    kicker: "Couverture · Paris 10e",
    lead: "Zinc, chéneaux, descentes d'eau : un service couverture dédié pour les toits des immeubles du 10e, des gares au canal Saint-Martin.",
    brief:
      "Couvreur à Paris 10e, Martinet Thibault Entreprise dispose d'un service couverture dédié, dirigé par M. Olivier Moulin et joignable au 01 48 24 80 60. Il traite tous travaux de couverture, chéneaux, descentes d'eau pluviale et usée, toitures et bardages, pour les copropriétés, les propriétaires et les commerces du quartier.",
    contactType: "couverture",
    service: "Couverture et zinguerie",
    crumb: "Couvreur Paris 10e",
    photo: "couvreur",
    caption: "Un couvreur au travail sur un toit",
    gallery: r(4, 5, 6),
    facts: [
      { label: "Service", value: "Couverture" },
      { label: "Ligne directe", value: "01 48 24 80 60" },
      { label: "Partenaire", value: "Velux" },
    ],
    sections: [
      {
        h2: "Que fait le service couverture de Martinet Thibault ?",
        answer:
          "Il prend en charge tout ce qui protège l'immeuble de la pluie : la couverture elle-même, souvent en zinc à Paris, les chéneaux qui recueillent l'eau en bas de pente, les descentes d'eau pluviale et usée, ainsi que les bardages. Il intervient en réparation comme en réfection.",
        paras: [
          "Sur les toits du 10e, le zinc domine, avec ses lucarnes, ses souches de cheminée et ses mansardes. Les points sensibles se situent presque toujours aux jonctions : noues, solins le long des murs mitoyens, raccords entre chéneau et descente. Une fuite au dernier étage vient souvent d'un de ces détails plutôt que de la feuille de zinc elle-même.",
        ],
        list: [
          "Recherche et réparation de fuites en toiture",
          "Remplacement de chéneaux et de gouttières",
          "Reprise de descentes d'eau pluviale et usée",
          "Pose de fenêtres de toit (Velux, partenaire de l'entreprise)",
        ],
      },
      {
        h2: "Pourquoi un même artisan pour le toit et la plomberie ?",
        answer:
          "Parce que l'eau de pluie ne s'arrête pas au chéneau : elle descend dans les colonnes, traverse parfois les étages et rejoint le réseau d'évacuation. Une maison qui maîtrise la couverture et la plomberie suit le parcours de l'eau du toit jusqu'à la cave, sans renvoyer la responsabilité à un autre corps de métier.",
        paras: [
          "C'est une particularité historique des entreprises parisiennes de plomberie-couverture, et c'est le cas de Martinet Thibault Entreprise, membre de la chambre syndicale de la couverture, de la plomberie et du génie climatique.",
        ],
      },
      {
        h2: "Comment demander un devis de toiture en copropriété ?",
        answer:
          "Le plus souvent, la demande passe par le syndic ou le conseil syndical. Indiquez l'adresse, l'accès au toit, les logements touchés par d'éventuelles infiltrations et joignez des photos des traces au plafond. Le service couverture organise ensuite une visite pour établir son devis.",
      },
    ],
    faq: [
      {
        q: "Qui contacter pour une fuite sous le toit ?",
        a: "Le service couverture, M. Olivier Moulin, au 01 48 24 80 60. Prévenez aussi votre syndic si l'immeuble est en copropriété : la toiture est en général une partie commune.",
      },
      {
        q: "L'entreprise pose-t-elle des bardages ?",
        a: "Oui, la page Services mentionne « toitures et bardages » parmi les travaux de couverture.",
      },
      {
        q: "Intervenez-vous sur les descentes d'eau usée ?",
        a: "Oui, les descentes d'eau pluviale et usée font partie des travaux de couverture présentés par l'entreprise.",
      },
    ],
    ctaTitle: "Le toit, puis tout le parcours de l'eau.",
    ctaText: "Joignez des photos du toit ou des traces d'infiltration à votre demande.",
    related: ["/couvreur-paris-18", PATHS.plumbing, PATHS.partners],
  },
  {
    path: PATHS.heating,
    slug: "chauffagiste-paris-10",
    zone: "Paris 10e",
    title: "Chauffagiste Paris 10e : chauffage et climatisation | MTE",
    description:
      "Chauffagiste à Paris 10e : chauffage domestique, de locaux et de salle de bains, chauffage réversible en climatisation. Martinet Thibault, depuis 1880.",
    h1: "Chauffagiste à Paris 10e : chauffage et climatisation",
    kicker: "Chauffage · Paris 10e",
    lead: "Chaudière, radiateurs, sèche-serviettes ou climatisation réversible : le confort thermique des appartements et des locaux du 10e.",
    brief:
      "Chauffagiste à Paris 10e, Martinet Thibault Entreprise installe et remplace des équipements de chauffage domestique, de chauffage de locaux professionnels et de salle de bains, ainsi que des systèmes de chauffage réversible en climatisation. L'entreprise affiche les logos Qualibat RGE et Qualigaz sur sa page Services.",
    contactType: "chauffage",
    service: "Chauffage et climatisation",
    crumb: "Chauffagiste Paris 10e",
    photo: "chaudiere",
    caption: "Réglage d'une chaudière pendant une intervention",
    gallery: r(7, 8, 9),
    facts: [
      { label: "Chauffage", value: "Tous locaux" },
      { label: "Climatisation", value: "Réversible" },
      { label: "Logos affichés", value: "RGE, Qualigaz" },
    ],
    sections: [
      {
        h2: "Quels équipements de chauffage l'entreprise installe-t-elle ?",
        answer:
          "Selon sa page Services, l'entreprise propose le chauffage domestique, le chauffage industriel et de tous locaux, le chauffage de salle de bains et le chauffage réversible en climatisation. Le choix de l'équipement dépend du logement, de l'énergie disponible dans l'immeuble et de l'usage des pièces.",
        paras: [
          "Dans le 10e, on rencontre aussi bien des appartements chauffés par une chaudière individuelle au gaz que des immeubles raccordés à un chauffage collectif, ou des locaux commerciaux équipés de systèmes réversibles. Le diagnostic commence donc par une question simple : d'où vient la chaleur aujourd'hui, et que peut-on modifier sans toucher aux parties communes ?",
        ],
      },
      {
        h2: "Chauffage réversible ou climatisation : quelle différence ?",
        answer:
          "Un système réversible chauffe l'hiver et rafraîchit l'été avec le même équipement, alors qu'une climatisation simple ne fait que refroidir. Dans un appartement parisien, l'emplacement de l'unité extérieure et l'accord de la copropriété sont souvent les vraies questions à régler avant toute installation.",
        list: [
          "Vérifier le règlement de copropriété pour l'unité extérieure",
          "Prévoir l'évacuation des condensats",
          "Dimensionner l'appareil selon la pièce et son exposition",
        ],
      },
      {
        h2: "Que signifient les logos RGE et Qualigaz ?",
        answer:
          "La mention RGE, attribuée par Qualibat, signale une entreprise qualifiée pour des travaux de rénovation énergétique. Qualigaz est un organisme lié à la sécurité des installations de gaz. Martinet Thibault Entreprise affiche ces deux logos ; demandez-lui ses certificats en cours pour votre dossier.",
      },
    ],
    faq: [
      {
        q: "Peut-on installer un sèche-serviettes dans une petite salle de bains ?",
        a: "Le chauffage de salle de bains fait partie des services présentés par l'entreprise. La solution dépend de la place disponible et du réseau existant : un devis sur place permet de la choisir.",
      },
      {
        q: "Intervenez-vous pour les bureaux et les boutiques ?",
        a: "Oui. La page Services mentionne le chauffage industriel et de tous locaux, en plus du chauffage domestique.",
      },
      {
        q: "Comment demander un devis de chauffage ?",
        a: "Par le formulaire de contact, en choisissant « Chauffage ou climatisation », ou par le standard au 01 48 24 80 57.",
      },
    ],
    ctaTitle: "La bonne chaleur, dans la bonne pièce.",
    ctaText: "Indiquez votre équipement actuel et la surface à chauffer.",
    related: ["/chauffagiste-paris-19", PATHS.plumbing, PATHS.bathroom],
  },
  {
    path: PATHS.emergency,
    slug: "depannage-plomberie-paris-10",
    zone: "Paris 10e",
    title: "Dépannage plomberie Paris 10e : fuite et dégorgement | MTE",
    description:
      "Dépannage de plomberie à Paris 10e : fuite d'eau, canalisation bouchée, dégorgement. Astreinte CP24 nuits, week-ends et jours fériés. Martinet Thibault.",
    h1: "Dépannage plomberie à Paris 10e : fuite et dégorgement",
    kicker: "Dépannage · Paris 10e",
    lead: "Une fuite, un évier qui ne s'écoule plus, une odeur dans la cour : les bons gestes d'abord, puis une entreprise du quartier pour réparer.",
    brief:
      "Pour un dépannage de plomberie à Paris 10e, appelez Martinet Thibault Entreprise au 01 48 24 80 57 aux heures d'ouverture. L'entreprise traite les fuites, les canalisations bouchées et les dégorgements. Membre du groupement CP24, elle bénéficie d'une astreinte d'urgence la nuit, le week-end et les jours fériés.",
    contactType: "depannage",
    service: "Dépannage de plomberie et dégorgement",
    crumb: "Dépannage Paris 10e",
    photo: "plombier",
    photoPos: "30% 50%",
    caption: "Intervention sur un raccord de canalisation",
    gallery: r(2, 5, 8),
    facts: [
      { label: "Standard", value: "01 48 24 80 57" },
      { label: "Astreinte", value: "CP24" },
      { label: "Dégorgement", value: "Oui" },
    ],
    sections: [
      {
        h2: "Que faire tout de suite en cas de fuite d'eau ?",
        answer:
          "Fermez le robinet d'arrêt de l'appartement, souvent sous l'évier ou près du compteur, coupez l'électricité si l'eau approche d'une prise, épongez et prévenez le voisin du dessous. Prenez ensuite des photos de la fuite : elles aideront le plombier comme l'assurance.",
        steps: [
          { t: "Couper l'eau", d: "Robinet d'arrêt général du logement ou, à défaut, celui de l'appareil qui fuit." },
          { t: "Sécuriser", d: "Couper le disjoncteur de la pièce si l'eau s'approche d'une installation électrique." },
          { t: "Prévenir", d: "Le voisin du dessous, puis le gardien ou le syndic si une partie commune est touchée." },
          { t: "Appeler", d: "Le standard au 01 48 24 80 57, avec l'adresse, l'étage et des photos." },
        ],
      },
      {
        h2: "Qu'est-ce qu'un dégorgement de canalisation ?",
        answer:
          "C'est le débouchage d'une évacuation obstruée : évier, lavabo, douche, WC ou canalisation commune. Selon l'endroit du bouchon, le plombier intervient sur le siphon, sur la conduite de l'appartement ou sur la chute de l'immeuble. Les dégorgements font partie des travaux présentés par l'entreprise.",
        paras: [
          "Évitez les produits très agressifs versés en grande quantité : ils abîment certains tuyaux anciens et rendent l'intervention plus délicate. Un bouchon qui revient régulièrement signale souvent un défaut de pente ou un dépôt plus loin dans le réseau.",
        ],
      },
      {
        h2: "Qui intervient la nuit et le week-end ?",
        answer:
          "En dehors des heures d'ouverture, l'entreprise s'appuie sur le groupement CP24, qui réunit, selon elle, quatorze entreprises parisiennes pour assurer une astreinte d'urgence la nuit, le week-end et les jours fériés. Cette continuité de service est réservée aux clients de l'entreprise.",
      },
    ],
    faq: [
      {
        q: "Combien coûte un dépannage de plomberie ?",
        a: "Le prix dépend de la panne, de l'accès et des pièces à remplacer. L'entreprise ne publie pas de tarif : demandez une estimation au téléphone avant l'intervention.",
      },
      {
        q: "Une fuite chez le voisin du dessus : qui appeler ?",
        a: "Prévenez d'abord le voisin et le gardien ou le syndic. Si la fuite vient d'une partie commune, c'est en général au syndic de mandater l'intervention.",
      },
      {
        q: "Faut-il être présent pendant le dégorgement ?",
        a: "Oui, ou une personne qui vous représente, pour donner accès aux évacuations et vérifier le bon écoulement après l'intervention.",
      },
    ],
    ctaTitle: "La fuite est coupée ? Appelez-nous.",
    ctaText: "Adresse, étage et une photo suffisent pour commencer.",
    related: [PATHS.plumbing, "/plombier-paris-11", PATHS.history],
  },
  {
    path: PATHS.bathroom,
    slug: "renovation-salle-de-bains-paris-10",
    zone: "Paris 10e",
    title: "Rénovation salle de bains et cuisine Paris 10e | MTE",
    description:
      "Rénovation complète de salle de bains et de cuisine à Paris 10e, tout corps d'état : plomberie, électricité, maçonnerie, carrelage, peinture. Martinet Thibault.",
    h1: "Rénovation de salle de bains et de cuisine à Paris 10e",
    kicker: "Salle de bains et cuisine · Paris 10e",
    lead: "Une seule entreprise pour toute la pièce : la plomberie, mais aussi l'électricité, la maçonnerie, le carrelage et la peinture.",
    brief:
      "Pour rénover une salle de bains ou une cuisine à Paris 10e, Martinet Thibault Entreprise propose un service spécialisé de réfection complète, tout corps d'état inclus : plomberie, électricité, maçonnerie, carrelage et peinture. Lavabo, baignoire, douche, évier ou lave-vaisselle : l'ensemble est coordonné par un seul interlocuteur.",
    contactType: "renovation",
    service: "Rénovation de salle de bains et de cuisine",
    crumb: "Salle de bains Paris 10e",
    photo: "salle-de-bains",
    caption: "Contrôle d'une salle de bains avant les travaux",
    gallery: r(1, 4, 7),
    facts: [
      { label: "Corps d'état", value: "Tous inclus" },
      { label: "Interlocuteur", value: "Un seul" },
      { label: "Sanitaires", value: "Villeroy & Boch" },
    ],
    sections: [
      {
        h2: "Que comprend une réfection complète de salle de bains ?",
        answer:
          "Tout ce qu'il faut pour transformer la pièce : dépose de l'existant, reprise des arrivées et évacuations, électricité, maçonnerie, carrelage, peinture et pose des sanitaires (lavabo, baignoire, douche, lave-mains, bidet). L'entreprise coordonne ces métiers, ce qui évite les trous entre deux intervenants.",
        paras: [
          "Dans les appartements anciens du 10e, une salle de bains est souvent une ancienne pièce de service ou un cabinet de toilette agrandi. Les contraintes sont connues : pente des évacuations limitée, plancher bois à protéger, colonne d'eau à rejoindre. Une douche de plain-pied, par exemple, se décide après avoir vérifié la hauteur disponible sous le receveur.",
        ],
      },
      {
        h2: "Et pour la cuisine ?",
        answer:
          "Le même service s'applique à la cuisine et à ses annexes : évier, paillasse, bac, raccordement du lave-vaisselle et du lave-linge. La plomberie est prévue avant la pose des meubles, pour que chaque arrivée et chaque évacuation tombe au bon endroit, sans rallonge ni coude inutile.",
        list: [
          "Déplacement d'un évier ou création d'un îlot raccordé",
          "Arrivées et évacuations pour lave-vaisselle et lave-linge",
          "Crédence, carrelage et peinture dans le même chantier",
        ],
      },
      {
        h2: "Comment se déroule le chantier ?",
        answer:
          "En quatre temps : une visite pour relever les dimensions et les réseaux, un devis détaillé par corps d'état, les travaux eux-mêmes, puis la mise en service avec les essais d'eau et d'écoulement. Le même chargé d'affaires vous accompagne du premier rendez-vous jusqu'à la réception de la pièce.",
        steps: [
          { t: "Visite", d: "Relevé des dimensions, des réseaux existants et des accès de l'immeuble." },
          { t: "Devis", d: "Un devis détaillé par corps d'état, sur la base de vos choix d'équipements." },
          { t: "Travaux", d: "Dépose, réseaux, maçonnerie et électricité, puis carrelage et peinture." },
          { t: "Mise en service", d: "Pose des sanitaires, essais d'eau et d'écoulement, nettoyage." },
        ],
      },
    ],
    faq: [
      {
        q: "Combien de temps dure une rénovation de salle de bains ?",
        a: "Cela dépend de la surface, des réseaux à reprendre et des délais de livraison des équipements. Le calendrier est précisé avec le devis, après la visite.",
      },
      {
        q: "Peut-on garder sa baignoire et changer le reste ?",
        a: "Oui, une réfection peut être partielle. Le chargé d'affaires vérifie alors que l'équipement conservé reste compatible avec les nouveaux réseaux.",
      },
      {
        q: "Faut-il prévenir la copropriété ?",
        a: "Pour des travaux qui touchent une colonne commune ou qui sont bruyants, il est d'usage de prévenir le syndic et les voisins. Le règlement de copropriété peut fixer des horaires.",
      },
    ],
    ctaTitle: "Une pièce entière, un seul interlocuteur.",
    ctaText: "Joignez des photos de la pièce actuelle et vos idées.",
    related: [PATHS.plumbing, PATHS.works, "/plombier-paris-3"],
  },
  {
    path: "/plombier-paris-9",
    slug: "plombier-paris-9",
    zone: "Paris 9e",
    title: "Plombier Paris 9e : immeubles haussmanniens | Martinet",
    description:
      "Plombier dans le 9e arrondissement de Paris, de Montholon aux Grands Boulevards : canalisations, robinetterie, sanitaires et colonnes d'immeubles anciens.",
    h1: "Plombier à Paris 9e, voisin du passage du Désir",
    kicker: "Plomberie · Paris 9e",
    lead: "Du square Montholon à la rue des Martyrs, les beaux immeubles du 9e cachent des réseaux d'eau qui ont souvent plus d'un siècle.",
    brief:
      "Plombier à Paris 9e, Martinet Thibault Entreprise part de son atelier du passage du Désir, dans le 10e voisin, pour intervenir dans les immeubles du 9e : colonnes d'eau, canalisations, robinetterie, sanitaires et évacuations. La maison connaît ces bâtiments de la fin du XIXe siècle depuis sa fondation en 1880.",
    contactType: "plomberie",
    service: "Plomberie",
    crumb: "Plombier Paris 9e",
    photo: "plombier",
    photoPos: "75% 40%",
    caption: "Reprise d'un raccord sur une conduite d'eau",
    gallery: r(3, 6, 9),
    sections: [
      {
        h2: "Pourquoi les immeubles du 9e demandent-ils un plombier expérimenté ?",
        answer:
          "Beaucoup d'immeubles du 9e datent des grands travaux du XIXe siècle : planchers en bois, gaines étroites, colonnes modifiées à chaque rénovation d'appartement. Intervenir proprement suppose de savoir lire ces réseaux successifs avant d'ouvrir un mur ou un plafond décoré.",
        paras: [
          "Entre les Grands Boulevards, Notre-Dame-de-Lorette et la Nouvelle Athènes, les appartements ont souvent conservé moulures, parquets et cheminées. Le plombier doit composer avec : passer par un placard plutôt que par un plafond, protéger un parquet en point de Hongrie, prévoir des trappes de visite discrètes.",
          "Martinet Thibault Entreprise intervient dans ces immeubles en voisin. Le passage du Désir n'est qu'à quelques rues de la limite entre les deux arrondissements.",
        ],
      },
      {
        h2: "Peut-on remplacer une colonne d'eau dans un appartement ?",
        answer:
          "La colonne montante est en général une partie commune : son remplacement se décide en copropriété, sur devis présenté au syndic. Dans l'appartement, en revanche, le plombier peut reprendre la distribution privative à partir du robinet d'arrêt, ce qui règle déjà de nombreux problèmes de pression ou de fuite.",
        list: [
          "Distribution privative en cuivre ou en multicouche",
          "Remplacement des robinets d'arrêt et des clapets",
          "Reprise de raccords anciens sur colonne",
        ],
      },
      {
        h2: "Quels travaux pour un commerce des Grands Boulevards ?",
        answer:
          "Restaurants, cafés et boutiques ont des besoins spécifiques : bacs et éviers professionnels, lave-vaisselle à fort débit, évacuations très sollicitées. L'entreprise présente ses réalisations pour particuliers et professionnels, en travaux neufs comme en entretien, dégorgements compris ; l'intervention s'organise selon vos horaires d'ouverture.",
      },
    ],
    faq: [
      {
        q: "Intervenez-vous dans tout le 9e arrondissement ?",
        a: "Le 9e est voisin du 10e, où se trouve l'atelier. Indiquez votre adresse au standard : il confirmera l'intervention et le service concerné.",
      },
      {
        q: "Le plombier peut-il travailler sans abîmer les moulures ?",
        a: "C'est l'objet de la visite préalable : repérer le meilleur passage pour les canalisations et prévoir les protections nécessaires avant les travaux.",
      },
      {
        q: "Qui paie le remplacement d'une colonne commune ?",
        a: "En règle générale, la copropriété, puisqu'il s'agit d'une partie commune. Votre syndic peut le confirmer selon le règlement de l'immeuble.",
      },
    ],
    ctaTitle: "Le 9e, à quelques rues de l'atelier.",
    ctaText: "Indiquez l'adresse et l'étage de votre logement dans le 9e.",
    related: [PATHS.plumbing, "/plombier-paris-3", PATHS.emergency],
  },
  {
    path: "/plombier-paris-11",
    slug: "plombier-paris-11",
    zone: "Paris 11e",
    title: "Plombier Paris 11e : ateliers, cours et lofts | Martinet",
    description:
      "Plombier à Paris 11e, d'Oberkampf au faubourg Saint-Antoine : canalisations, évacuations, salles d'eau et dégorgements dans les anciens ateliers et les cours.",
    h1: "Plombier à Paris 11e, d'Oberkampf à la Roquette",
    kicker: "Plomberie · Paris 11e",
    lead: "Anciens ateliers transformés en lofts, cours pavées, rez-de-chaussée commerçants : le 11e a des réseaux d'eau aussi variés que ses bâtiments.",
    brief:
      "Plombier à Paris 11e, Martinet Thibault Entreprise intervient depuis le 10e voisin dans les immeubles, cours et anciens ateliers de l'arrondissement : canalisations, évacuations, salles d'eau créées dans des lofts, robinetterie et dégorgements. Le service plomberie se joint au 01 48 24 80 59, du lundi au vendredi.",
    contactType: "plomberie",
    service: "Plomberie",
    crumb: "Plombier Paris 11e",
    photo: "plombier",
    photoPos: "45% 60%",
    caption: "Serrage d'un raccord à la clé",
    gallery: r(2, 4, 9),
    sections: [
      {
        h2: "Créer une salle d'eau dans un ancien atelier, est-ce possible ?",
        answer:
          "Souvent, oui, à condition de trouver une évacuation avec une pente suffisante. Dans les anciens ateliers du 11e, la chute la plus proche peut être éloignée : le plombier étudie alors le tracé, la hauteur d'un éventuel plancher technique ou le recours à une pompe de relevage adaptée.",
        paras: [
          "Le 11e garde de nombreuses traces de son passé artisanal : passages, cours industrielles, bâtiments d'ateliers du faubourg Saint-Antoine et de la rue de la Roquette. Les transformer en logements suppose de créer des réseaux qui n'existaient pas, sans compromettre ceux des voisins.",
        ],
      },
      {
        h2: "Pourquoi les évacuations se bouchent-elles dans les cours ?",
        answer:
          "Dans les cours et passages, les eaux de plusieurs bâtiments rejoignent parfois une même canalisation, avec des regards anciens et des pentes faibles. Graisses de cuisine, lingettes et dépôts s'y accumulent. Un dégorgement règle le bouchon ; un diagnostic de la canalisation évite qu'il ne revienne.",
        list: [
          "Dégorgement des évacuations privatives et communes",
          "Reprise de siphons et de regards",
          "Conseils d'entretien pour les commerces de bouche",
        ],
      },
      {
        h2: "L'entreprise intervient-elle pour les restaurants du 11e ?",
        answer:
          "Oui : les réalisations de Martinet Thibault Entreprise concernent les particuliers comme les professionnels, en travaux neufs et en entretien. Pour un restaurant, précisez les horaires de service et l'emplacement des bacs à graisse afin d'organiser l'intervention en dehors des heures d'affluence.",
      },
    ],
    faq: [
      {
        q: "Une pompe de relevage est-elle toujours nécessaire en loft ?",
        a: "Non. Elle n'est utile que si l'évacuation gravitaire est impossible. Le plombier vérifie d'abord la pente disponible jusqu'à la chute.",
      },
      {
        q: "Qui est responsable d'une canalisation de cour ?",
        a: "Cela dépend du statut de la cour : partie commune d'une copropriété, servitude entre immeubles ou voie privée. Le syndic ou le gestionnaire peut vous renseigner.",
      },
      {
        q: "Comment joindre le service plomberie ?",
        a: "Au 01 48 24 80 59, ou par le standard au 01 48 24 80 57, du lundi au vendredi de 8 h à 12 h et de 13 h 30 à 17 h.",
      },
    ],
    ctaTitle: "Un loft, une cour, un atelier.",
    ctaText: "Décrivez le lieu : la plomberie s'adapte au bâtiment.",
    related: [PATHS.emergency, PATHS.bathroom, PATHS.plumbing],
  },
  {
    path: "/couvreur-paris-18",
    slug: "couvreur-paris-18",
    zone: "Paris 18e",
    title: "Couvreur Paris 18e : zinc, chéneaux et toits | Martinet",
    description:
      "Couvreur à Paris 18e, de Montmartre à la Chapelle : couverture zinc, chéneaux, descentes d'eau, fenêtres de toit et bardages. Service couverture dédié.",
    h1: "Couvreur à Paris 18e, de Montmartre à la Chapelle",
    kicker: "Couverture · Paris 18e",
    lead: "Pentes, escaliers, vues sur tout Paris : les toits du 18e sont parmi les plus exposés de la ville, au vent comme à la pluie.",
    brief:
      "Couvreur à Paris 18e, Martinet Thibault Entreprise met son service couverture au service des immeubles de Montmartre, de Barbès et de la Chapelle : couverture en zinc, chéneaux, descentes d'eau pluviale et usée, fenêtres de toit et bardages. Le service est joignable au 01 48 24 80 60, auprès de M. Olivier Moulin.",
    contactType: "couverture",
    service: "Couverture et zinguerie",
    crumb: "Couvreur Paris 18e",
    photo: "toiture",
    caption: "Une toiture dégagée avant réfection",
    gallery: r(3, 5, 7),
    facts: [
      { label: "Service", value: "Couverture" },
      { label: "Ligne directe", value: "01 48 24 80 60" },
      { label: "Toits", value: "Zinc" },
    ],
    sections: [
      {
        h2: "Pourquoi les toits du 18e s'usent-ils différemment ?",
        answer:
          "Sur la butte Montmartre et ses pentes, les immeubles sont souvent plus exposés : le vent soulève plus facilement les éléments mal fixés et la pluie frappe de biais. Les rues en pente compliquent aussi les accès et l'installation des protections de chantier, qu'il faut prévoir dès le devis.",
        paras: [
          "Plus au nord et à l'est, vers Barbès, la Goutte-d'Or et la Chapelle, les immeubles de rapport du XIXe siècle et les constructions plus modestes alternent. On y trouve des couvertures en zinc, des terrassons, des verrières de cour et des chéneaux qui ont parfois été repris de nombreuses fois.",
        ],
      },
      {
        h2: "Quand faut-il refaire un chéneau ?",
        answer:
          "Quand il fuit malgré les réparations, que l'eau stagne ou déborde, ou que le métal est percé par endroits. Un chéneau en mauvais état mouille la corniche puis la façade, et finit par atteindre les appartements du dernier étage : le reprendre tôt évite des dégâts bien plus coûteux.",
        list: [
          "Traces d'humidité sous la corniche ou en haut de façade",
          "Débordements visibles par forte pluie",
          "Soudures ouvertes ou zinc percé",
        ],
      },
      {
        h2: "L'entreprise pose-t-elle des fenêtres de toit dans le 18e ?",
        answer:
          "Velux figure parmi les partenaires présentés par l'entreprise, et la couverture fait partie de ses métiers. Une fenêtre de toit dans un comble parisien demande souvent une autorisation d'urbanisme et l'accord de la copropriété : vérifiez ces deux points avant de fixer une date.",
      },
    ],
    faq: [
      {
        q: "Intervenez-vous sur les toits de Montmartre ?",
        a: "Oui, le 18e fait partie des arrondissements voisins desservis depuis le 10e. Le service couverture étudie l'accès au toit lors de la visite.",
      },
      {
        q: "Faut-il un échafaudage pour réparer un chéneau ?",
        a: "Cela dépend de l'immeuble et de l'accès au toit. Le moyen d'accès est défini lors de la visite et figure dans le devis.",
      },
      {
        q: "Qui décide des travaux de toiture en copropriété ?",
        a: "L'assemblée générale des copropriétaires, sur proposition du syndic, sauf urgence. Le devis du couvreur sert de base à la décision.",
      },
    ],
    ctaTitle: "Les toits du 18e, vus de près.",
    ctaText: "Joignez des photos de la corniche, du chéneau ou des traces au plafond.",
    related: [PATHS.roofing, "/chauffagiste-paris-19", PATHS.partners],
  },
  {
    path: "/chauffagiste-paris-19",
    slug: "chauffagiste-paris-19",
    zone: "Paris 19e",
    title: "Chauffagiste Paris 19e : chauffage et clim | Martinet",
    description:
      "Chauffagiste à Paris 19e, du bassin de la Villette aux Buttes-Chaumont : chauffage, radiateurs, chauffage de salle de bains et climatisation réversible.",
    h1: "Chauffagiste à Paris 19e, de la Villette aux Buttes-Chaumont",
    kicker: "Chauffage · Paris 19e",
    lead: "Le canal Saint-Martin continue vers le bassin de la Villette : l'entreprise du passage du Désir suit le même chemin pour chauffer le 19e.",
    brief:
      "Chauffagiste à Paris 19e, Martinet Thibault Entreprise intervient depuis le 10e dans les appartements, les résidences et les locaux de l'arrondissement : chauffage domestique et de locaux, radiateurs, chauffage de salle de bains et climatisation réversible. L'entreprise affiche les logos Qualibat RGE et Qualigaz sur son site.",
    contactType: "chauffage",
    service: "Chauffage et climatisation",
    crumb: "Chauffagiste Paris 19e",
    photo: "chaudiere",
    photoPos: "40% 50%",
    caption: "Intervention sur une chaudière",
    gallery: r(1, 6, 8),
    facts: [
      { label: "Chauffage", value: "Tous locaux" },
      { label: "Depuis", value: "Le 10e" },
      { label: "Logos affichés", value: "RGE, Qualigaz" },
    ],
    sections: [
      {
        h2: "Quels logements chauffe-t-on dans le 19e ?",
        answer:
          "Le 19e mêle immeubles anciens, ensembles construits dans la seconde moitié du XXe siècle et résidences récentes. Chacun a sa logique : chaudière individuelle au gaz, chauffage collectif avec radiateurs à régler, ou équipements électriques à remplacer. Le chauffagiste part toujours de l'installation existante.",
        paras: [
          "Autour du bassin de la Villette, du parc des Buttes-Chaumont ou de la place de la Bataille-de-Stalingrad, beaucoup d'appartements sont raccordés à un chauffage collectif. L'intervention privative porte alors sur les radiateurs, leurs robinets et leur équilibrage, la chaufferie relevant de la copropriété.",
        ],
      },
      {
        h2: "Un radiateur reste froid : que faire ?",
        answer:
          "Vérifiez d'abord que son robinet est ouvert, puis purgez-le si le haut reste froid alors que le bas chauffe : c'est souvent de l'air. Si le problème persiste ou touche plusieurs radiateurs, un désembouage ou un rééquilibrage du réseau peut être nécessaire : faites alors appel au chauffagiste.",
        list: [
          "Purge des radiateurs en début de saison",
          "Remplacement de robinets et de têtes thermostatiques",
          "Ajout ou déplacement d'un radiateur",
        ],
      },
      {
        h2: "La climatisation réversible convient-elle aux derniers étages ?",
        answer:
          "C'est souvent là qu'elle est la plus utile, car les derniers étages sous les toits chauffent fortement l'été. L'entreprise propose le chauffage réversible en climatisation ; reste à vérifier l'emplacement de l'unité extérieure et l'accord de la copropriété avant de lancer le projet.",
      },
    ],
    faq: [
      {
        q: "Intervenez-vous sur un chauffage collectif ?",
        a: "Sur la partie privative de votre logement, oui : radiateurs, robinets, raccordements. La chaufferie et le réseau commun relèvent de la copropriété et de son prestataire.",
      },
      {
        q: "Le 19e est-il loin de l'atelier ?",
        a: "Non, il est voisin du 10e. Indiquez votre adresse au standard pour organiser le rendez-vous.",
      },
      {
        q: "Peut-on remplacer un vieux chauffe-eau en même temps ?",
        a: "Oui, la plomberie et le chauffage sont traités par la même entreprise. Précisez-le dans votre demande pour un devis commun.",
      },
    ],
    ctaTitle: "Au fil du canal, jusqu'au 19e.",
    ctaText: "Décrivez votre chauffage actuel et le problème rencontré.",
    related: [PATHS.heating, "/couvreur-paris-18", PATHS.plumbing],
  },
  {
    path: "/plombier-paris-3",
    slug: "plombier-paris-3",
    zone: "Paris 3e",
    title: "Plombier Paris 3e : Marais et hôtels particuliers | MTE",
    description:
      "Plombier à Paris 3e, du Haut-Marais aux Arts-et-Métiers : canalisations, salles de bains et robinetterie dans les immeubles anciens et les hôtels particuliers.",
    h1: "Plombier à Paris 3e, dans le Haut-Marais",
    kicker: "Plomberie · Paris 3e",
    lead: "Poutres apparentes, murs épais, escaliers étroits : dans le Marais, la plomberie se glisse dans des bâtiments parfois plus anciens que l'entreprise elle-même.",
    brief:
      "Plombier à Paris 3e, Martinet Thibault Entreprise intervient depuis le 10e dans les immeubles anciens et les hôtels particuliers du Haut-Marais et des Arts-et-Métiers : canalisations, salles de bains et cuisines, robinetterie et évacuations. Elle propose aussi la réfection complète de pièces d'eau, tout corps d'état inclus.",
    contactType: "plomberie",
    service: "Plomberie",
    crumb: "Plombier Paris 3e",
    photo: "salle-de-bains",
    photoPos: "60% 50%",
    caption: "Vérification d'une salle de bains dans un immeuble ancien",
    gallery: r(4, 8, 9),
    sections: [
      {
        h2: "Quelles contraintes pour la plomberie dans le Marais ?",
        answer:
          "Les bâtiments du 3e sont parmi les plus anciens de Paris : murs porteurs épais, planchers anciens, cages d'escalier étroites, parfois des éléments protégés. Les canalisations doivent suivre des chemins discrets, et certains travaux visibles demandent l'avis des services d'urbanisme ou de l'architecte de la copropriété.",
        paras: [
          "Entre la rue de Bretagne, le Carreau du Temple et le quartier des Arts-et-Métiers, les salles de bains sont souvent installées dans des espaces contraints : soupentes, anciennes alcôves, dégagements. Le plombier y travaille au centimètre, en protégeant les matériaux d'origine.",
        ],
      },
      {
        h2: "Peut-on installer une douche à l'italienne dans un immeuble ancien ?",
        answer:
          "C'est possible si la pente d'évacuation le permet : il faut de la hauteur sous le receveur ou un plancher qui peut être creusé sans risque. Dans un immeuble ancien, cette vérification se fait avant tout engagement, car l'ouverture du sol révèle souvent la structure réelle du plancher.",
        list: [
          "Relevé de la hauteur disponible et de la position de la chute",
          "Étanchéité sous carrelage adaptée au plancher",
          "Choix d'un receveur extra-plat si nécessaire",
        ],
      },
      {
        h2: "Pourquoi confier ces travaux à une maison fondée en 1880 ?",
        answer:
          "Parce que l'expérience des bâtiments anciens ne s'improvise pas. Depuis sa création dans le 10e, la maison a vu passer plusieurs générations de canalisations, du plomb au cuivre puis aux matériaux actuels. Elle sait ce que l'on peut conserver, ce qu'il faut remplacer, et comment le faire proprement.",
      },
    ],
    faq: [
      {
        q: "Faut-il une autorisation pour des travaux de plomberie dans le Marais ?",
        a: "Les travaux intérieurs courants n'en demandent généralement pas, mais tout ce qui modifie l'aspect extérieur ou des éléments protégés peut en nécessiter. Renseignez-vous auprès de la mairie et de votre syndic.",
      },
      {
        q: "Intervenez-vous dans les hôtels particuliers ?",
        a: "Oui, dans les logements et les locaux du 3e. Précisez le type de bâtiment lors de votre demande pour préparer la visite.",
      },
      {
        q: "Peut-on rénover toute la salle de bains avec vous ?",
        a: "Oui, l'entreprise propose une réfection complète tout corps d'état : plomberie, électricité, maçonnerie, carrelage et peinture.",
      },
    ],
    ctaTitle: "Le Marais demande de la précision.",
    ctaText: "Décrivez la pièce et l'immeuble : la visite fera le reste.",
    related: [PATHS.bathroom, "/plombier-paris-9", PATHS.history],
  },
];
