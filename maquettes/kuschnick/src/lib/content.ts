import { PATHS, type Faq } from "./site";
import type { Page } from "./types";

/**
 * Textes de la maquette. Le site actuel ne contient aucun texte propre à l'entreprise (modèle WordPress jamais rempli) :
 * tout est rédigé à partir des faits publics (registre : SA fondée en 1957, 54 rue Trousseau, couverture, plomberie,
 * fumisterie, chauffage central, NAF 43.22A). Aucun prix, délai, chiffre ni certification inventés.
 * À faire relire et confirmer par l'entreprise.
 */

export const home = {
  title: "Plombier Paris 11e depuis 1957 | Anciens Éts Kuschnick",
  description:
    "Plombier, couvreur et chauffagiste à Paris 11e depuis 1957, 54 rue Trousseau : plomberie, couverture zinc, chauffage central et fumisterie, devis gratuit.",
  brief:
    "Les Anciens Établissements Kuschnick sont plombiers à Paris 11e depuis 1957, au 54, rue Trousseau, entre le faubourg Saint-Antoine et la rue de Charonne. La maison réunit les quatre métiers de l'immeuble parisien : plomberie, couverture, chauffage central et fumisterie, pour les particuliers, les commerces et les copropriétés.",
  faq: [
    {
      q: "Où se trouvent les Anciens Établissements Kuschnick ?",
      a: "Au 54, rue Trousseau, dans le 11e arrondissement, entre le faubourg Saint-Antoine et la rue de Charonne. Les stations les plus proches sont Ledru-Rollin et Faidherbe-Chaligny (ligne 8), et Charonne (ligne 9).",
    },
    {
      q: "Quels métiers l'entreprise exerce-t-elle ?",
      a: "Quatre métiers complémentaires : la plomberie, la couverture et la zinguerie, le chauffage central et la fumisterie, c'est-à-dire l'entretien et la réfection des conduits et des souches de cheminée.",
    },
    {
      q: "Travaillez-vous pour les syndics et les copropriétés ?",
      a: "Oui. Les parties communes d'un immeuble ancien réunissent justement ces quatre métiers : colonnes d'eau, toiture, chaufferie, conduits. Indiquez l'adresse de l'immeuble et la personne à contacter pour l'accès.",
    },
    {
      q: "Comment obtenir un devis ?",
      a: "Par le formulaire de la page contact, avec l'adresse du lieu et quelques photos, ou par téléphone au 01 43 43 12 33. La demande de devis est gratuite.",
    },
  ] as Faq[],
};

/** Les quatre métiers, présentés comme les lignes d'une facture d'époque (« désignation des travaux »). */
export const trades = [
  { n: "01", title: "Plomberie", href: PATHS.plumbing, text: "Fuites, canalisations, colonnes d'immeuble, sanitaires, robinetterie, évacuations.", who: "Particuliers, commerces, copropriétés" },
  { n: "02", title: "Couverture", href: PATHS.roofing, text: "Toitures en zinc, chéneaux, gouttières, descentes d'eau, solins et noues.", who: "Copropriétés, propriétaires" },
  { n: "03", title: "Chauffage central", href: PATHS.heating, text: "Radiateurs, réseaux de chauffage, chaufferies d'immeuble, désembouage.", who: "Particuliers, copropriétés" },
  { n: "04", title: "Fumisterie", href: PATHS.chimney, text: "Conduits de fumée, souches de cheminée, tubage, raccordements.", who: "Copropriétés, particuliers" },
] as const;

export const servicePages: Page[] = [
  {
    path: PATHS.plumbing,
    slug: "plombier-paris-11",
    zone: "Paris 11e",
    title: "Plombier Paris 11e : fuite, colonnes, sanitaires | Kuschnick",
    description:
      "Plombier à Paris 11e depuis 1957, rue Trousseau : recherche de fuite, colonnes d'immeuble, sanitaires et robinetterie pour particuliers et copropriétés.",
    h1: "Plombier à Paris 11e, rue Trousseau",
    kicker: "N° 01 · Plomberie",
    lead: "Fuites, colonnes, sanitaires : le plombier du faubourg Saint-Antoine depuis 1957, pour les appartements, les boutiques et les parties communes.",
    brief:
      "Pour un plombier à Paris 11e, les Anciens Établissements Kuschnick interviennent depuis le 54, rue Trousseau : recherche et réparation de fuites, remplacement de canalisations et de colonnes, pose de sanitaires et de robinetterie, reprise des évacuations. La maison travaille pour les particuliers, les commerçants et les syndics de copropriété du quartier.",
    contactType: "plomberie",
    service: "Plomberie",
    crumb: "Plombier Paris 11e",
    photo: "outils",
    caption: "Pince-étau et clé : les outils du plombier",
    facts: [
      { label: "Fondée en", value: "1957" },
      { label: "Atelier", value: "Rue Trousseau" },
      { label: "Métro", value: "Ledru-Rollin" },
    ],
    sections: [
      {
        h2: "Quels travaux de plomberie dans le 11e arrondissement ?",
        answer:
          "Dans le 11e, la plupart des demandes concernent des immeubles anciens : une fuite sous un évier ou dans un plafond, une colonne d'eau fatiguée, une salle de bains à reprendre, une évacuation qui s'engorge. Les Anciens Établissements Kuschnick traitent ces travaux en appartement, en boutique et dans les parties communes.",
        paras: [
          "Le quartier mêle des immeubles de faubourg, avec leurs cours et leurs anciens ateliers, et des immeubles de rapport de la fin du XIXe siècle le long des grandes voies. Les réseaux y ont souvent été modifiés au fil des propriétaires : un tronçon refait ici, un raccord ajouté là. Avant de remplacer quoi que ce soit, il faut comprendre ce qui alimente quoi.",
          "C'est le savoir d'une maison installée dans le quartier depuis 1957 : où se trouve la vanne d'arrêt d'une cave, comment passer un tuyau sans abîmer un parquet ou une moulure, qui prévenir dans la copropriété avant de couper l'eau d'une colonne.",
        ],
        list: [
          "Recherche et réparation de fuites, en appartement comme en partie commune",
          "Remplacement de canalisations d'alimentation et de raccords",
          "Reprise d'évacuations, de siphons et de chutes",
          "Pose de sanitaires, de robinetterie et de mitigeurs",
        ],
      },
      {
        h2: "Faut-il remplacer les vieilles canalisations d'un immeuble ?",
        answer:
          "Pas toutes, et pas d'un coup. Une visite permet de repérer les tronçons corrodés, les raccords qui suintent et les anciennes conduites encore présentes dans certains immeubles. Le devis détaille ensuite ce qui doit être remplacé, ce qui peut attendre et les matériaux proposés pour chaque partie du réseau.",
        paras: [
          "Dans une copropriété, le remplacement d'une colonne montante se prépare avec le syndic : coupures d'eau annoncées aux occupants, accès aux appartements, ordre de passage étage par étage. Mieux vaut le prévoir que le subir après un dégât des eaux.",
        ],
      },
      {
        h2: "Comment se déroule une intervention de plomberie ?",
        answer:
          "Vous décrivez le problème par téléphone ou par le formulaire, si possible avec une photo de la fuite ou de l'installation. L'entreprise convient d'un rendez-vous, vérifie les accès et les coupures nécessaires, puis intervient. Pour des travaux plus importants, un devis écrit est remis après la visite.",
        steps: [
          { t: "La demande", d: "Un appel ou le formulaire, avec l'adresse, l'étage et quelques photos." },
          { t: "La visite", d: "Le diagnostic sur place : origine de la fuite, état du réseau, accès." },
          { t: "Le devis", d: "Un document écrit qui détaille les travaux, ligne par ligne." },
          { t: "Les travaux", d: "Réalisés aux dates convenues, en prévenant les voisins si une colonne est coupée." },
        ],
      },
    ],
    faq: [
      {
        q: "Intervenez-vous pour une fuite chez un voisin du dessus ?",
        a: "Oui. Le plus simple est de prévenir l'occupant ou le syndic, puis de nous indiquer les deux adresses de lots concernées : la recherche de fuite se fait souvent depuis l'appartement d'où vient l'eau.",
      },
      {
        q: "Travaillez-vous pour les commerces du faubourg Saint-Antoine ?",
        a: "Oui, l'entreprise intervient pour les particuliers comme pour les commerces et les ateliers. Précisez vos horaires d'ouverture pour organiser l'intervention sans gêner votre activité.",
      },
      {
        q: "La demande de devis de plomberie est-elle payante ?",
        a: "Non, la demande de devis par le formulaire est gratuite. Les modalités d'une éventuelle visite de diagnostic vous sont précisées lors du premier échange.",
      },
    ],
    ctaTitle: "Une fuite, une colonne, une salle de bains ?",
    ctaText: "Décrivez-nous l'installation : la maison vous rappelle.",
    related: [PATHS.heating, PATHS.roofing, "/plombier-paris-12", "/plombier-paris-20"],
  },
  {
    path: PATHS.roofing,
    slug: "couvreur-paris-11",
    zone: "Paris 11e",
    title: "Couvreur zingueur Paris 11e : toiture zinc, chéneaux",
    description:
      "Couvreur zingueur à Paris 11e depuis 1957 : toitures en zinc, chéneaux, gouttières, descentes d'eau, solins et noues, pour copropriétés et propriétaires.",
    h1: "Couvreur zingueur à Paris 11e",
    kicker: "N° 02 · Couverture",
    lead: "Le zinc, les chéneaux, les descentes d'eau : tout ce qui protège un immeuble du 11e de la pluie, du dernier étage jusqu'au caniveau.",
    brief:
      "Couvreur zingueur à Paris 11e, les Anciens Établissements Kuschnick entretiennent et refont les toitures des immeubles du quartier depuis 1957 : couvertures en zinc, chéneaux et gouttières, descentes d'eau pluviale, solins le long des murs mitoyens, noues et lucarnes. La maison travaille surtout pour les copropriétés et leurs syndics.",
    contactType: "couverture",
    service: "Couverture et zinguerie",
    crumb: "Couvreur Paris 11e",
    photo: "toiture",
    caption: "Une souche de cheminée et ses fenêtres de toit",
    facts: [
      { label: "Matériau", value: "Zinc" },
      { label: "Pour", value: "Copropriétés" },
      { label: "Depuis", value: "1957" },
    ],
    sections: [
      {
        h2: "Pourquoi une toiture parisienne fuit-elle ?",
        answer:
          "Rarement à cause de la feuille de zinc elle-même. Les infiltrations viennent presque toujours des jonctions : une noue encrassée, un solin décollé le long d'un mur mitoyen, un raccord fatigué entre le chéneau et la descente, une soudure fendue autour d'une souche. Le couvreur commence donc par chercher le détail en cause.",
        paras: [
          "Les toits du 11e sont un paysage de zinc, de mansardes et de souches de cheminée. Le zinc vit : il se dilate l'été, se contracte l'hiver, et les points où il rencontre la maçonnerie travaillent davantage que le reste. Une tache au plafond du dernier étage se lit souvent à plusieurs mètres de son origine.",
        ],
        list: [
          "Recherche et réparation d'infiltrations en toiture",
          "Remplacement de chéneaux, de gouttières et de descentes d'eau",
          "Reprise de solins, de noues et d'abergements de souches",
          "Réfection partielle ou complète de couvertures en zinc",
        ],
      },
      {
        h2: "Réparer ou refaire toute la couverture ?",
        answer:
          "Tout dépend de l'état général du zinc et du support. Une couverture saine avec un défaut localisé se répare. Une couverture ancienne, percée en plusieurs endroits ou posée sur un voligeage abîmé, se refait par pans. Le devis distingue clairement les deux options pour que la copropriété puisse décider.",
        paras: [
          "Pour une réfection, le syndic prévoit le vote en assemblée générale, l'échafaudage ou l'accès par les toits, et l'information des occupants des derniers étages. Les photos prises pendant la visite accompagnent le devis : elles aident les copropriétaires à comprendre ce qu'ils votent.",
        ],
      },
      {
        h2: "Comment la couverture s'articule-t-elle avec les autres métiers ?",
        answer:
          "Sur un toit parisien, la couverture rencontre la fumisterie aux souches de cheminée et la plomberie aux descentes d'eau. Réunir ces métiers dans une même maison évite les allers-retours entre entreprises : celui qui refait le zinc autour d'une souche sait aussi contrôler le conduit qui la traverse.",
        paras: [
          "C'est l'esprit des anciennes maisons de couverture-plomberie parisiennes, dont les Anciens Établissements Kuschnick sont l'héritière depuis 1957 : un seul interlocuteur pour l'eau qui arrive, l'eau qui s'évacue et l'eau qui tombe du ciel.",
        ],
      },
    ],
    faq: [
      {
        q: "Intervenez-vous sur les toits des maisons de ville ?",
        a: "Oui, sur les immeubles comme sur les maisons de ville et les ateliers sur cour du quartier. Indiquez le type de toiture et les accès possibles dans votre demande.",
      },
      {
        q: "Faut-il l'accord de la copropriété pour réparer une fuite de toit ?",
        a: "La toiture est en général une partie commune : le syndic commande les travaux. En cas d'infiltration active, prévenez-le sans attendre et transmettez-lui des photos des dégâts.",
      },
      {
        q: "Que joindre à une demande de devis de couverture ?",
        a: "L'adresse, l'étage concerné, des photos des traces d'infiltration au plafond et, si vous en avez, des photos du toit prises depuis une fenêtre ou une cour.",
      },
    ],
    ctaTitle: "Une tache au plafond du dernier étage ?",
    ctaText: "Envoyez des photos : la maison vous dit d'où vient l'eau.",
    related: [PATHS.chimney, PATHS.plumbing, "/plombier-paris-20", "/plombier-paris-3"],
  },
  {
    path: PATHS.heating,
    slug: "chauffage-central-paris-11",
    zone: "Paris 11e",
    title: "Chauffage central Paris 11e : radiateurs, réseaux anciens",
    description:
      "Chauffage central à Paris 11e depuis 1957 : radiateurs, réseaux d'eau chaude, chaufferies d'immeuble et désembouage, pour particuliers et copropriétés.",
    h1: "Chauffage central à Paris 11e",
    kicker: "N° 03 · Chauffage central",
    lead: "Radiateurs en fonte, réseaux d'eau chaude, chaufferies d'immeuble : le chauffage des immeubles anciens du 11e, entretenu par une maison de 1957.",
    brief:
      "Pour le chauffage central à Paris 11e, les Anciens Établissements Kuschnick interviennent sur les radiateurs, les réseaux d'eau chaude, les robinets et les chaufferies d'immeuble : pose, déplacement, remplacement, désembouage et remise en route. La maison travaille pour les particuliers comme pour les copropriétés dotées d'un chauffage collectif.",
    contactType: "chauffage",
    service: "Chauffage central",
    crumb: "Chauffage central Paris 11e",
    photo: "radiateur",
    caption: "Un radiateur en fonte d'immeuble ancien",
    facts: [
      { label: "Réseaux", value: "Eau chaude" },
      { label: "Collectif", value: "Chaufferies" },
      { label: "Depuis", value: "1957" },
    ],
    sections: [
      {
        h2: "Que recouvre le chauffage central dans un immeuble ancien ?",
        answer:
          "Le chauffage central désigne un réseau d'eau chaude qui part d'une chaudière, individuelle ou collective, et alimente des radiateurs dans chaque pièce. Dans le 11e, beaucoup d'immeubles ont gardé des radiateurs en fonte et des réseaux anciens, parfaitement capables de durer s'ils sont entretenus et équilibrés.",
        paras: [
          "Un réseau ancien a ses symptômes : un radiateur froid en haut et tiède en bas, un étage qui chauffe mal quand les autres chauffent trop, des bruits de circulation, une pression qui baisse. Ces signes renseignent sur l'équilibrage, l'air dans les circuits ou les boues accumulées.",
        ],
        list: [
          "Pose, dépose et déplacement de radiateurs",
          "Remplacement de robinets et de têtes thermostatiques",
          "Désembouage et purge des réseaux",
          "Interventions sur les réseaux de chaufferies d'immeuble",
        ],
      },
      {
        h2: "Faut-il garder ses radiateurs en fonte ?",
        answer:
          "Souvent, oui. Un radiateur en fonte bien raccordé diffuse une chaleur douce et durable, et il habille une pièce ancienne. On le remplace quand il fuit, quand il est trop petit pour la pièce ou quand un projet de rénovation le déplace. Le désembouage suffit souvent à lui rendre son efficacité.",
        paras: [
          "Avant de changer un radiateur, on vérifie le réseau qui l'alimente : un radiateur neuf branché sur un circuit embourbé ne chauffera pas mieux que l'ancien. C'est l'intérêt d'une maison qui pratique aussi la plomberie : elle regarde l'installation dans son ensemble.",
        ],
      },
      {
        h2: "Quand prévoir une intervention sur le chauffage ?",
        answer:
          "Idéalement avant la saison de chauffe, à la fin de l'été ou au début de l'automne, pour remettre le réseau en eau, purger, contrôler les robinets et repérer les fuites. En copropriété, la remise en route du chauffage collectif se programme avec le syndic et le gardien.",
        paras: [
          "En plein hiver, une panne se traite en priorité ; mais les travaux de fond, comme un désembouage ou un déplacement de radiateurs, se font plus sereinement quand l'installation peut être arrêtée quelques heures sans gêner les occupants.",
        ],
      },
    ],
    faq: [
      {
        q: "Intervenez-vous sur les chaudières individuelles ?",
        a: "Le chauffage central est l'un des métiers de la maison. Précisez dans votre demande la marque et le modèle de votre chaudière, avec une photo de sa plaque signalétique, pour que l'entreprise vous réponde précisément.",
      },
      {
        q: "Un radiateur froid en haut, est-ce grave ?",
        a: "C'est souvent de l'air dans le radiateur, qu'une purge règle. Si le problème revient ou touche plusieurs radiateurs, le réseau peut être encrassé ou mal équilibré : un contrôle s'impose.",
      },
      {
        q: "Travaillez-vous sur les chauffages collectifs d'immeuble ?",
        a: "Oui, à la demande du syndic ou du conseil syndical : réseaux, colonnes de chauffage et radiateurs des parties communes. Indiquez l'adresse et le contact sur place.",
      },
    ],
    ctaTitle: "Un radiateur qui chauffe mal ?",
    ctaText: "Décrivez l'installation : la maison vous conseille avant l'hiver.",
    related: [PATHS.plumbing, PATHS.chimney, "/plombier-paris-10", "/plombier-paris-4"],
  },
  {
    path: PATHS.chimney,
    slug: "fumisterie-paris-11",
    zone: "Paris 11e",
    title: "Fumisterie Paris 11e : conduits, souches de cheminée",
    description:
      "Fumiste à Paris 11e depuis 1957 : conduits de fumée, tubage, souches de cheminée et raccordements d'appareils, pour copropriétés et particuliers du quartier.",
    h1: "Fumisterie à Paris 11e : conduits et souches",
    kicker: "N° 04 · Fumisterie",
    lead: "Un vieux métier parisien : les conduits de fumée, leurs souches sur les toits et les raccordements des appareils, entretenus depuis 1957.",
    brief:
      "La fumisterie à Paris 11e est l'un des quatre métiers des Anciens Établissements Kuschnick depuis 1957. Elle concerne les conduits de fumée et leurs souches sur les toits : vérification, tubage, réfection, raccordement des chaudières et des appareils. La maison intervient pour les copropriétés comme pour les particuliers du quartier.",
    contactType: "fumisterie",
    service: "Fumisterie",
    crumb: "Fumisterie Paris 11e",
    photo: "toits",
    caption: "Les souches de cheminée, au crépuscule",
    facts: [
      { label: "Métier", value: "Fumiste" },
      { label: "Ouvrages", value: "Conduits" },
      { label: "Depuis", value: "1957" },
    ],
    sections: [
      {
        h2: "Qu'est-ce que la fumisterie ?",
        answer:
          "La fumisterie est le métier des conduits de fumée : ceux qui évacuent les gaz d'une chaudière, d'un poêle ou d'une cheminée jusqu'au toit. Le fumiste vérifie leur état, les tube, les répare et les raccorde aux appareils. Sur les toits, il travaille aux souches, ces cheminées de briques qui dessinent le paysage parisien.",
        paras: [
          "Le mot surprend aujourd'hui, mais il désignait un métier courant dans le Paris des immeubles chauffés au charbon. Les conduits sont restés : ils traversent les étages, se partagent parfois entre plusieurs appartements, et se réutilisent pour de nouveaux appareils à condition d'être contrôlés et adaptés.",
        ],
        list: [
          "Vérification et diagnostic de conduits existants",
          "Tubage de conduits pour le raccordement d'une chaudière",
          "Réfection et rejointoiement de souches de cheminée",
          "Raccordement d'appareils et mise hors service de conduits",
        ],
      },
      {
        h2: "Peut-on réutiliser un ancien conduit de cheminée ?",
        answer:
          "Souvent, mais jamais sans vérification. Un conduit ancien peut être fissuré, encrassé ou trop large pour l'appareil prévu. Le fumiste contrôle son état et son tirage, puis propose le plus souvent un tubage, c'est-à-dire un conduit neuf glissé à l'intérieur de l'ancien, adapté à l'appareil raccordé.",
        paras: [
          "Dans un immeuble, le conduit appartient souvent aux parties communes ou traverse plusieurs lots : la copropriété doit être informée, et parfois donner son accord, avant les travaux. La maison vous indique les démarches à prévoir.",
        ],
      },
      {
        h2: "Pourquoi réunir fumisterie, couverture et chauffage ?",
        answer:
          "Parce qu'un conduit commence à la chaudière et finit sur le toit. Le chauffagiste raccorde l'appareil, le fumiste s'occupe du conduit, le couvreur reprend l'étanchéité autour de la souche. Quand ces trois métiers travaillent ensemble, les responsabilités sont claires et le chantier se fait en une fois.",
        paras: [
          "C'est l'organisation des Anciens Établissements Kuschnick depuis leur création : couverture, plomberie, fumisterie et chauffage central sous une même enseigne, au 54, rue Trousseau.",
        ],
      },
    ],
    faq: [
      {
        q: "Une souche de cheminée qui s'effrite est-elle dangereuse ?",
        a: "Elle doit être examinée rapidement : des briques ou des joints qui se délitent peuvent tomber sur le toit ou dans la rue. Prévenez le syndic et envoyez des photos prises depuis une fenêtre voisine.",
      },
      {
        q: "Faites-vous le ramonage ?",
        a: "Posez la question lors de votre demande : l'entreprise vous indiquera ce qu'elle prend en charge. Le diagnostic et la réfection des conduits et des souches font partie de son métier de fumiste.",
      },
      {
        q: "Peut-on supprimer un conduit inutilisé ?",
        a: "Un conduit inutilisé peut être mis hors service dans les règles. Dans un immeuble, cette décision passe souvent par la copropriété, car le conduit traverse plusieurs étages.",
      },
    ],
    ctaTitle: "Un conduit à vérifier, une souche à refaire ?",
    ctaText: "Le fumiste de la maison vous répond.",
    related: [PATHS.roofing, PATHS.heating, "/plombier-paris-10", "/plombier-paris-12"],
  },
];

/** Page « La maison » : l'histoire, telle qu'elle peut être établie à partir des registres publics. */
export const housePage: Page = {
  path: PATHS.house,
  zone: "Paris 11e",
  title: "La maison : plombier couvreur à Paris 11e depuis 1957",
  description:
    "Les Anciens Établissements Kuschnick, maison de couverture, plomberie, fumisterie et chauffage central installée rue Trousseau à Paris 11e depuis 1957.",
  h1: "Une maison de Paris 11e depuis 1957",
  kicker: "La maison · 1957",
  lead: "Une société anonyme du faubourg Saint-Antoine, quatre métiers sous une même enseigne et un nom qui dit son ancienneté.",
  brief:
    "Les Anciens Établissements Kuschnick sont une maison de Paris 11e fondée en 1957 et installée au 54, rue Trousseau. Société anonyme au capital de 121 800 €, elle exerce les quatre métiers historiques de l'immeuble parisien : couverture, plomberie, fumisterie et chauffage central, avec une équipe de dix à dix-neuf salariés.",
  contactType: "autre",
  crumb: "La maison",
  photo: "cle",
  caption: "Une clé de plombier, sur l'établi",
  facts: [
    { label: "Fondée en", value: "1957" },
    { label: "Forme", value: "SA" },
    { label: "Équipe", value: "10 à 19" },
  ],
  sections: [
    {
      h2: "Que veut dire « Anciens Établissements » ?",
      answer:
        "C'est une formule de la tradition commerciale française. Elle désigne une maison qui reprend et prolonge les établissements d'un fondateur en gardant son nom : « Anciens Établissements Kuschnick » signifie que l'entreprise continue l'œuvre des Établissements Kuschnick. On la lisait autrefois peinte au-dessus des devantures et imprimée sur les factures.",
      paras: [
        "Le nom fait partie de l'histoire du quartier, comme les enseignes peintes qui subsistent encore sur certaines façades du faubourg. Il dit une chose simple : cette maison n'est pas née hier.",
      ],
      original: false,
    },
    {
      h2: "Pourquoi la rue Trousseau, dans le 11e ?",
      answer:
        "La rue Trousseau se trouve au cœur du faubourg Saint-Antoine, le quartier des artisans de Paris, entre la rue du Faubourg-Saint-Antoine et la rue de Charonne. Ateliers sur cour, passages et immeubles de rapport y forment un tissu ancien qui a besoin, depuis toujours, de plombiers, de couvreurs et de fumistes.",
      paras: [
        "Le faubourg Saint-Antoine doit sa réputation aux ébénistes et aux artisans qui s'y sont installés pendant des siècles. Les Anciens Établissements Kuschnick appartiennent à cette famille de maisons de métier, implantées dans un quartier et connues de ses immeubles.",
      ],
    },
    {
      h2: "Quels sont les quatre métiers de la maison ?",
      answer:
        "La couverture protège l'immeuble de la pluie, la plomberie y amène et en évacue l'eau, la fumisterie entretient les conduits de fumée et le chauffage central distribue la chaleur dans les étages. Ces quatre métiers se rencontrent sans cesse dans un immeuble parisien : les réunir simplifie la vie des copropriétés.",
      steps: [
        { t: "Couverture", d: "Zinc, chéneaux, descentes d'eau, solins et noues." },
        { t: "Plomberie", d: "Fuites, canalisations, colonnes, sanitaires et évacuations." },
        { t: "Fumisterie", d: "Conduits de fumée, tubage, souches de cheminée." },
        { t: "Chauffage central", d: "Radiateurs, réseaux, chaufferies d'immeuble." },
      ],
    },
  ],
  faq: [
    {
      q: "Depuis quand l'entreprise existe-t-elle ?",
      a: "La société Anciens Établissements Kuschnick a été créée en 1957. Elle est immatriculée au registre du commerce de Paris sous le numéro 572 182 178.",
    },
    {
      q: "Quelle est la forme juridique de l'entreprise ?",
      a: "C'est une société anonyme au capital de 121 800 €, dont le siège est au 54, rue Trousseau, 75011 Paris.",
    },
    {
      q: "Combien de personnes travaillent dans l'entreprise ?",
      a: "Les registres publics indiquent une équipe de dix à dix-neuf salariés, entre les chantiers de plomberie, de couverture, de chauffage et de fumisterie.",
    },
  ],
  ctaTitle: "Une maison de quartier, depuis 1957.",
  ctaText: "Parlez-nous de votre immeuble ou de votre appartement.",
  related: [PATHS.plumbing, PATHS.roofing, PATHS.heating, PATHS.chimney],
};
