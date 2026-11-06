import { PATHS } from "./site";
import type { Page } from "./types";

/**
 * Pages nouvelles métier × zone : le 15e (adresse de l'entreprise) et les arrondissements et communes voisins.
 * Repères de quartier institutionnels, à faire relire par un habitant. Aucune distance, aucun délai, aucun prix promis.
 * La zone exacte d'intervention est à faire confirmer par l'entreprise.
 */
type Local = Page & { slug: string; zone: string };

const local = (p: Omit<Local, "path">): Local => ({ ...p, path: `/${p.slug}` });

export const localPages: Local[] = [
  local({
    slug: "plombier-paris-15",
    zone: "Paris 15e",
    title: "Plombier Paris 15e, rue d'Ouessant depuis 1943 | Clairon",
    description:
      "Plombier dans le 15e arrondissement de Paris : l'Entreprise Clairon, installée rue d'Ouessant depuis 1943, pour fuites, sanitaires, tuyauterie et rénovations.",
    h1: "Plombier Paris 15e : l'entreprise de la rue d'Ouessant",
    kicker: "Plombier · Paris 15e",
    lead: "Grenelle, Dupleix, Commerce, Vaugirard, Convention : le 15e est le quartier de l'entreprise, et celui où elle travaille depuis 1943.",
    brief:
      "Pour un plombier à Paris 15e, l'Entreprise Clairon est installée 23 rue d'Ouessant, entre Dupleix et La Motte-Picquet. Entreprise familiale créée en 1943, elle intervient dans tout l'arrondissement pour les fuites, le sanitaire, la robinetterie, la tuyauterie et la rénovation de salle de bains, chez les particuliers comme pour les syndics.",
    contactType: "plomberie",
    service: "Plombier à Paris 15e",
    crumb: "Plombier Paris 15e",
    photo: "plans",
    sections: [
      {
        h2: "Pourquoi choisir un plombier installé dans le 15e ?",
        answer:
          "Parce qu'il connaît les immeubles de l'arrondissement et qu'il n'a pas Paris à traverser pour venir. L'Entreprise Clairon est rue d'Ouessant depuis des décennies : les bâtiments du quartier, leurs colonnes et leurs caves, ses compagnons les ont souvent déjà vus de l'intérieur.",
        paras: [
          "Le 15e est le plus peuplé des arrondissements de Paris, et l'un des plus variés : immeubles de rapport en pierre autour du boulevard de Grenelle, immeubles de brique des années 1930 vers Convention et la porte de Versailles, tours du Front de Seine le long du quai, ateliers et cours du côté de Vaugirard. Chaque époque a ses matériaux et ses façons de faire passer l'eau.",
          "Une entreprise du quartier, c'est aussi un interlocuteur que l'on retrouve : celui qui a posé votre chauffe-eau peut revenir le voir, et le syndic de l'immeuble d'à côté le connaît souvent déjà.",
        ],
      },
      {
        h2: "Quelles interventions de plomberie dans le 15e arrondissement ?",
        answer:
          "Les quatre domaines présentés par l'entreprise : le sanitaire, la robinetterie, la tuyauterie et la rénovation de salle de bains. Concrètement : une fuite sous un évier, un WC qui coule en continu, un mitigeur à changer, une canalisation ancienne à reprendre, une salle de bains entière à refaire.",
        paras: [
          "Dans les grands ensembles du Front de Seine comme dans les immeubles anciens du quartier Saint-Lambert, une partie du réseau appartient à la copropriété. L'entreprise travaille pour des particuliers et pour des syndics : elle sait distinguer ce qui relève de votre appartement et ce qui doit être signalé au gestionnaire.",
        ],
      },
      {
        h2: "Comment préparer la visite du plombier ?",
        answer:
          "Indiquez l'adresse exacte, l'étage, le code d'accès et la personne présente. Décrivez le problème en une phrase et joignez deux ou trois photos : l'appareil, la fuite, l'endroit à équiper. Repérez aussi le robinet d'arrêt de l'appartement, souvent près du compteur d'eau.",
        paras: [
          "Pour les rues commerçantes comme la rue du Commerce ou la rue Lecourbe, précisez s'il s'agit d'un local professionnel et les horaires où l'intervention gêne le moins votre activité.",
        ],
      },
    ],
    faq: [
      {
        q: "Où est installé le plombier Clairon dans le 15e ?",
        a: "Au 23 rue d'Ouessant, 75015 Paris, dans le quartier de Grenelle, près des stations Dupleix et La Motte-Picquet–Grenelle. Téléphone : 01 47 83 88 40.",
      },
      {
        q: "L'entreprise intervient-elle dans tout le 15e ?",
        a: "Le 15e est son arrondissement : de Grenelle à la porte de Versailles et de Beaugrenelle à Vaugirard. Indiquez votre adresse dans la demande pour organiser le rendez-vous.",
      },
      {
        q: "Peut-on demander une intervention pour un local commercial ?",
        a: "Oui, l'entreprise travaille aussi pour une clientèle de professionnels. Précisez l'activité, les horaires d'ouverture et les contraintes d'accès dans votre demande.",
      },
    ],
    ctaTitle: "Un plombier dans votre arrondissement.",
    ctaText: "L'équipe de la rue d'Ouessant organise le rendez-vous avec vous.",
    related: [PATHS.plumbing, "/renovation-salle-de-bains-paris-15", "/plombier-paris-7"],
  }),
  local({
    slug: "couvreur-paris-15",
    zone: "Paris 15e",
    title: "Couvreur Paris 15e : toitures et gouttières | Clairon",
    description:
      "Couvreur à Paris 15e : l'Entreprise Clairon répare toitures, chéneaux et descentes d'eau pluviale des immeubles de l'arrondissement, depuis la rue d'Ouessant.",
    h1: "Couvreur Paris 15e : toitures, chéneaux et descentes",
    kicker: "Couvreur · Paris 15e",
    lead: "Des toits de Grenelle aux terrasses du Front de Seine, la couverture est l'un des métiers historiques de l'entreprise.",
    brief:
      "Couvreur à Paris 15e, l'Entreprise Clairon entretient et répare les toitures de l'arrondissement depuis sa création en 1943 : couverture, chéneaux, gouttières et descentes d'eau pluviale. Plombiers et couvreurs à la fois, ses compagnons suivent l'eau de pluie du toit jusqu'au réseau, pour les particuliers, les professionnels et les syndics.",
    contactType: "couverture",
    service: "Couvreur à Paris 15e",
    crumb: "Couvreur Paris 15e",
    photo: "toits",
    sections: [
      {
        h2: "Quels toits trouve-t-on dans le 15e arrondissement ?",
        answer:
          "Une grande variété. Toits en pente couverts de zinc et brisis d'ardoise sur les immeubles en pierre, toitures-terrasses sur les bâtiments plus récents et les tours du Front de Seine, verrières et petits toits d'ateliers dans les cours. Chacun demande des gestes et des matériaux différents.",
        paras: [
          "Les toits de zinc gris bleuté font partie du paysage parisien depuis le XIXe siècle. Ils vivent avec le temps : les soudures et les relevés autour des cheminées, des lucarnes et des chéneaux sont les points à surveiller.",
          "Sur une toiture-terrasse, ce sont plutôt les évacuations et les relevés en bordure qui posent problème : une crapaudine bouchée suffit à transformer une averse en infiltration.",
        ],
      },
      {
        h2: "Quand faire vérifier la couverture de son immeuble ?",
        answer:
          "Après un coup de vent, à l'automne quand les feuilles tombent dans les gouttières, et dès qu'une tache apparaît au dernier étage. Un contrôle régulier des chéneaux et des descentes coûte peu d'efforts et évite des dégâts des eaux beaucoup plus lourds pour la copropriété.",
        paras: [
          "Les grands arbres des avenues et des squares de l'arrondissement, du square Saint-Lambert au parc André-Citroën, alimentent généreusement les gouttières en feuilles chaque automne.",
        ],
      },
      {
        h2: "Qui décide des travaux de toiture en copropriété ?",
        answer:
          "La toiture est en général une partie commune : les travaux importants sont décidés par la copropriété et commandés par le syndic. Une réparation urgente pour mettre l'immeuble hors d'eau peut être engagée par le syndic. Un occupant qui constate une fuite doit le prévenir sans attendre.",
        paras: [
          "L'Entreprise Clairon travaille avec des syndics comme avec des particuliers : décrivez la situation, et elle vous indiquera la marche à suivre selon que le problème touche votre lot ou les parties communes.",
        ],
      },
    ],
    faq: [
      {
        q: "Je vois de l'eau couler le long de la façade : est-ce la toiture ?",
        a: "Souvent, c'est une descente d'eau pluviale fendue ou un chéneau qui déborde. Une photo prise depuis la rue ou la cour aide le compagnon à localiser l'origine avant de monter.",
      },
      {
        q: "L'entreprise intervient-elle sur les toitures-terrasses ?",
        a: "Décrivez votre toiture dans la demande : type, accès, surface approximative. L'équipe vous dira ce qu'elle peut faire et organisera la visite.",
      },
      {
        q: "Comment contacter le couvreur ?",
        a: "Au 01 47 83 88 40, par e-mail à info@clairon.org ou via le formulaire. L'entreprise est au 23 rue d'Ouessant, Paris 15e.",
      },
    ],
    ctaTitle: "Un toit à faire vérifier dans le 15e ?",
    ctaText: "Décrivez ce que vous voyez ; l'équipe organise la visite.",
    related: [PATHS.roofing, "/plombier-syndic-copropriete-paris-15", "/plombier-paris-15"],
  }),
  local({
    slug: "chauffagiste-paris-15",
    zone: "Paris 15e",
    title: "Chauffagiste Paris 15e : chauffage et entretien | Clairon",
    description:
      "Chauffagiste à Paris 15e : l'Entreprise Clairon installe, répare et entretient chaudières et radiateurs dans l'arrondissement, depuis la rue d'Ouessant.",
    h1: "Chauffagiste Paris 15e : chaudières, radiateurs, entretien",
    kicker: "Chauffagiste · Paris 15e",
    lead: "Chaudière individuelle ou chauffage collectif : le chauffage fait partie des quatre métiers de l'entreprise depuis 1943.",
    brief:
      "Chauffagiste à Paris 15e, l'Entreprise Clairon intervient sur les installations de chauffage de l'arrondissement : chaudières individuelles, radiateurs, circuits et production d'eau chaude. Entreprise familiale créée en 1943 et installée rue d'Ouessant, elle travaille pour les particuliers, les professionnels et les syndics de copropriété.",
    contactType: "chauffage",
    service: "Chauffagiste à Paris 15e",
    crumb: "Chauffagiste Paris 15e",
    photo: "chantier",
    sections: [
      {
        h2: "Chauffage individuel ou collectif : qu'est-ce qui change ?",
        answer:
          "Avec une chaudière individuelle, l'appareil et son entretien sont l'affaire de l'occupant ou du propriétaire. Avec un chauffage collectif, fréquent dans les grands immeubles du 15e, la chaufferie et le réseau relèvent de la copropriété ; seuls les radiateurs et leurs robinets concernent directement votre logement.",
        paras: [
          "Avant de demander une intervention, regardez donc si votre logement a sa propre chaudière ou s'il dépend d'une chaufferie d'immeuble. Si vous ne savez pas, l'entreprise vous aidera à le déterminer au téléphone.",
        ],
      },
      {
        h2: "Que faire si le chauffage ne repart pas à l'automne ?",
        answer:
          "Vérifiez d'abord l'alimentation électrique, le thermostat et, pour une chaudière, la pression indiquée sur le manomètre. Si un code d'erreur s'affiche, notez-le. Si rien ne change après une remise en marche simple, appelez un chauffagiste plutôt que de démonter l'appareil vous-même.",
        paras: [
          "Les premiers jours froids d'octobre et de novembre sont ceux où les demandes se multiplient dans tout Paris. Faire entretenir la chaudière avant la saison évite bien des pannes au moment de la remise en route.",
          "Dans un chauffage collectif, si tous les voisins ont froid en même temps, prévenez le syndic : la cause est sans doute dans la chaufferie.",
        ],
      },
      {
        h2: "Comment rendre son chauffage plus confortable sans tout changer ?",
        answer:
          "Souvent par des gestes simples : purger les radiateurs, faire équilibrer le circuit pour que toutes les pièces chauffent de la même façon, poser des robinets thermostatiques, nettoyer un circuit encrassé. Le compagnon regarde ce qui peut être amélioré avant de proposer un remplacement.",
        paras: [
          "Les radiateurs en fonte des immeubles anciens du 15e chauffent longtemps et régulièrement ; ils méritent souvent d'être conservés et simplement entretenus.",
        ],
      },
    ],
    faq: [
      {
        q: "L'entretien annuel de la chaudière est-il obligatoire ?",
        a: "Oui, pour les chaudières individuelles. Une attestation est remise après la visite ; conservez-la, elle peut être demandée par votre assureur ou votre propriétaire.",
      },
      {
        q: "L'entreprise intervient-elle pour un syndic ?",
        a: "Oui, l'Entreprise Clairon travaille avec des syndics, des professionnels et des particuliers. Pour un chauffage collectif, la demande passe généralement par le syndic.",
      },
      {
        q: "Où se trouve le chauffagiste ?",
        a: "Au 23 rue d'Ouessant, 75015 Paris. Téléphone : 01 47 83 88 40, e-mail : info@clairon.org.",
      },
    ],
    ctaTitle: "Un chauffage à remettre en route ?",
    ctaText: "Prenez rendez-vous avec un compagnon de la rue d'Ouessant.",
    related: [PATHS.heating, "/plombier-paris-15", "/couvreur-paris-15"],
  }),
  local({
    slug: "renovation-salle-de-bains-paris-15",
    zone: "Paris 15e",
    title: "Rénovation de salle de bains Paris 15e | Entreprise Clairon",
    description:
      "Rénovation de salle de bains à Paris 15e par l'Entreprise Clairon : plomberie, sanitaires, robinetterie et petite maçonnerie réunis dans une même équipe.",
    h1: "Rénovation de salle de bains à Paris 15e",
    kicker: "Salle de bains · Paris 15e",
    lead: "Une salle de bains se refait avec un plombier au centre du projet : l'eau d'abord, la finition ensuite.",
    brief:
      "Pour une rénovation de salle de bains à Paris 15e, l'Entreprise Clairon réunit dans la même équipe la plomberie, les sanitaires, la robinetterie et la petite maçonnerie. Installée rue d'Ouessant depuis 1943, elle connaît les contraintes des salles de bains parisiennes : petites surfaces, évacuations anciennes et voisins au-dessous.",
    contactType: "salle-de-bains",
    service: "Rénovation de salle de bains à Paris 15e",
    crumb: "Salle de bains Paris 15e",
    photo: "carrelage",
    sections: [
      {
        h2: "Par où commence une rénovation de salle de bains ?",
        answer:
          "Par l'eau : où arrivent les alimentations, où partent les évacuations, et quelle pente est possible jusqu'à la descente de l'immeuble. Ces contraintes décident de l'emplacement de la douche, du WC et du meuble vasque, bien avant le choix du carrelage ou de la robinetterie.",
        paras: [
          "Dans beaucoup d'appartements anciens, la salle de bains a été créée après coup, dans une ancienne alcôve ou un bout de couloir. On y découvre des évacuations de petit diamètre, des raccords successifs et parfois d'anciennes canalisations en plomb : autant de choses à reprendre pendant que les murs sont ouverts.",
        ],
      },
      {
        h2: "Peut-on remplacer une baignoire par une douche ?",
        answer:
          "Oui, c'est l'une des demandes les plus courantes. La question technique est celle de l'évacuation : un receveur extra-plat demande une pente suffisante jusqu'à la descente. Le compagnon vérifie sur place la hauteur disponible et l'emplacement de l'évacuation avant de valider la solution.",
        paras: [
          "Une douche à l'italienne, de plain-pied, se prévoit encore plus soigneusement dans un immeuble ancien : l'épaisseur du plancher et l'étanchéité sous le carrelage conditionnent la réussite du projet, et la tranquillité du voisin du dessous.",
        ],
      },
      {
        h2: "Pourquoi confier plomberie et maçonnerie à la même entreprise ?",
        answer:
          "Parce que les deux s'enchaînent sans arrêt : saignées pour les tuyaux, scellements, reprises de murs et de sols, puis raccordements. Une seule équipe évite les allers-retours entre corps de métier et les responsabilités qui se renvoient. L'Entreprise Clairon pratique la plomberie et la petite maçonnerie.",
        steps: [
          { t: "La visite", d: "Mesures, état des alimentations et des évacuations, vos envies et vos contraintes." },
          { t: "Le devis", d: "Détaillé, poste par poste, remis avant le début du chantier." },
          { t: "Le chantier", d: "Dépose, réseaux, maçonnerie, puis pose des équipements." },
          { t: "La remise", d: "Essais d'eau, vérification des évacuations, pièce rendue propre." },
        ],
      },
    ],
    faq: [
      {
        q: "Faut-il prévenir le syndic avant de refaire sa salle de bains ?",
        a: "Si les travaux touchent les colonnes ou descentes communes, oui. Pour une rénovation intérieure sans toucher aux parties communes, une information au syndic reste une bonne pratique, notamment pour l'accès et le bruit.",
      },
      {
        q: "Peut-on garder la baignoire et changer seulement la robinetterie ?",
        a: "Bien sûr. La robinetterie fait partie des domaines de l'entreprise : mitigeur, colonne de douche ou robinet thermostatique peuvent être remplacés sans refaire la pièce.",
      },
      {
        q: "Comment présenter son projet ?",
        a: "Par le formulaire, avec des photos de la pièce, ses dimensions approximatives et ce que vous souhaitez changer. Vous pouvez aussi appeler le 01 47 83 88 40.",
      },
    ],
    ctaTitle: "Une salle de bains à refaire ?",
    ctaText: "Envoyez quelques photos de la pièce : l'équipe prépare la visite.",
    related: [PATHS.plumbing, "/plombier-paris-15", "/plombier-paris-16"],
  }),
  local({
    slug: "plombier-syndic-copropriete-paris-15",
    zone: "Paris 15e",
    title: "Plombier pour syndic et copropriété à Paris 15e | Clairon",
    description:
      "Plombier et couvreur pour syndics et copropriétés à Paris 15e : l'Entreprise Clairon intervient sur colonnes, descentes, toitures et parties communes.",
    h1: "Plombier pour syndics et copropriétés à Paris 15e",
    kicker: "Syndics · Paris 15e",
    lead: "L'entreprise le dit simplement : elle intervient auprès des particuliers, des professionnels et des syndics.",
    brief:
      "Pour les syndics et les copropriétés de Paris 15e, l'Entreprise Clairon intervient sur les parties communes comme dans les lots : colonnes d'eau, descentes, toitures, chéneaux et chauffage. Plombier, couvreur et chauffagiste installé rue d'Ouessant depuis 1943, elle réunit dans une même équipe les métiers qui se croisent dans un immeuble.",
    contactType: "syndic",
    service: "Plomberie et couverture pour syndics à Paris 15e",
    crumb: "Syndics Paris 15e",
    photo: "chantier",
    sections: [
      {
        h2: "Quelles interventions pour une copropriété ?",
        answer:
          "Les fuites sur colonnes montantes et descentes, les engorgements d'évacuations communes, les infiltrations par la toiture ou les chéneaux, les réparations sur le chauffage collectif et les petites reprises de maçonnerie qui suivent ces travaux. L'entreprise couvre ces quatre métiers sans faire appel à plusieurs prestataires.",
        paras: [
          "Dans un immeuble, une fuite se promène : l'eau qui apparaît au deuxième étage peut venir du quatrième, et celle du dernier étage d'un chéneau. Une équipe qui intervient à la fois en plomberie et en couverture remonte plus facilement jusqu'à la cause.",
        ],
      },
      {
        h2: "Comment transmettre une demande d'intervention en tant que syndic ?",
        answer:
          "Par le formulaire, en choisissant « Syndic, copropriété ou professionnel », ou par téléphone. Indiquez l'adresse de l'immeuble, le lot ou la partie commune concernée, la personne à contacter sur place pour l'accès, et joignez les photos transmises par les occupants si vous en avez.",
        paras: [
          "Pour une recherche de fuite entre plusieurs lots, précisez les appartements touchés et l'ordre d'apparition des traces : c'est souvent le meilleur indice pour localiser la canalisation en cause.",
        ],
      },
      {
        h2: "Que doit faire un occupant qui constate une fuite dans les parties communes ?",
        answer:
          "Prévenir immédiatement le syndic ou le gardien, et limiter les dégâts chez lui : couper l'eau si la fuite vient de son installation, protéger les meubles, prendre des photos. Le syndic missionne ensuite l'entreprise. En cas de doute, l'équipe aide à déterminer ce qui est privatif ou commun.",
        paras: [
          "Les immeubles du 15e sont souvent anciens et transformés au fil des décennies : une canalisation qui traverse un appartement peut desservir tout l'immeuble. D'où l'intérêt d'un constat fait par quelqu'un qui connaît ces bâtiments.",
        ],
      },
    ],
    faq: [
      {
        q: "L'Entreprise Clairon travaille-t-elle déjà avec des syndics ?",
        a: "Oui, l'entreprise indique sur son site intervenir auprès des syndics, en plus des particuliers et des professionnels.",
      },
      {
        q: "Peut-on demander un devis pour des travaux votés en assemblée générale ?",
        a: "Oui. Joignez à votre demande le descriptif des travaux envisagés et les plans ou photos disponibles ; l'entreprise organise la visite de l'immeuble.",
      },
      {
        q: "Quelles sont les coordonnées de l'entreprise ?",
        a: "Entreprise Clairon, 23 rue d'Ouessant, 75015 Paris. Téléphone : 01 47 83 88 40. E-mail : info@clairon.org.",
      },
    ],
    ctaTitle: "Un immeuble à faire intervenir ?",
    ctaText: "Transmettez l'adresse et le contact sur place : l'équipe s'organise.",
    related: [PATHS.roofing, PATHS.plumbing, "/couvreur-paris-15"],
  }),
  local({
    slug: "plombier-paris-7",
    zone: "Paris 7e",
    title: "Plombier Paris 7e : Gros-Caillou, École militaire | Clairon",
    description:
      "Plombier pour le 7e arrondissement de Paris : l'Entreprise Clairon, voisine du 15e depuis 1943, intervient en sanitaire, tuyauterie et salle de bains.",
    h1: "Plombier Paris 7e : de l'École militaire au Gros-Caillou",
    kicker: "Plombier · Paris 7e",
    lead: "Le 7e commence à quelques rues de l'entreprise, de l'autre côté de l'avenue de Suffren.",
    brief:
      "Pour un plombier à Paris 7e, l'Entreprise Clairon intervient depuis le 15e voisin, où elle est installée rue d'Ouessant depuis 1943. Sanitaire, robinetterie, tuyauterie et rénovation de salle de bains : ses compagnons connaissent les immeubles bourgeois et les hôtels particuliers du quartier de l'École militaire et du Gros-Caillou.",
    contactType: "plomberie",
    service: "Plombier à Paris 7e",
    crumb: "Plombier Paris 7e",
    photo: "plans",
    sections: [
      {
        h2: "Quelles particularités pour la plomberie dans le 7e ?",
        answer:
          "Des immeubles anciens et souvent prestigieux, avec de hauts plafonds, des parquets à protéger et des pièces d'eau aménagées après coup. Les réseaux y ont été modifiés plusieurs fois au fil du temps, ce qui demande de bien lire l'existant avant de couper ou de raccorder quoi que ce soit.",
        paras: [
          "Autour du Champ-de-Mars, de l'avenue Bosquet et de la rue Cler, beaucoup d'appartements ont gardé leurs volumes d'origine. Une salle de bains y occupe parfois un ancien cabinet de toilette, avec des évacuations qui serpentent sous le parquet : la reprise se prépare avec soin.",
          "Dans un immeuble classé ou en secteur protégé, certains travaux visibles depuis l'extérieur demandent des autorisations ; pour la plomberie intérieure, c'est surtout le respect des parties communes et des voisins qui compte.",
        ],
      },
      {
        h2: "Comment protéger un intérieur ancien pendant les travaux ?",
        answer:
          "En le préparant ensemble : protection des sols et des meubles sur le passage, accès par l'escalier de service quand il existe, horaires convenus avec la copropriété. Le compagnon travaille proprement, coupe l'eau le moins longtemps possible et rend la pièce nettoyée en fin d'intervention.",
        paras: [
          "Signalez dans votre demande les éléments fragiles : parquet ancien, moulures, marbre d'une cheminée voisine. Ces précisions permettent d'arriver avec le matériel de protection adapté.",
        ],
      },
      {
        h2: "Pourquoi faire appel à une entreprise du 15e pour le 7e ?",
        answer:
          "Parce que la rue d'Ouessant est à quelques minutes de l'École militaire. L'Entreprise Clairon, créée en 1943, travaille dans ce secteur de Paris depuis longtemps ; elle associe plomberie, chauffage, couverture et petite maçonnerie, ce qui évite de multiplier les intervenants dans un appartement ancien.",
      },
    ],
    faq: [
      {
        q: "L'entreprise se déplace-t-elle dans le 7e arrondissement ?",
        a: "Le 7e est voisin du 15e, où l'entreprise est installée. Indiquez votre adresse dans la demande : l'équipe vous confirmera l'intervention et organisera le rendez-vous.",
      },
      {
        q: "Peut-on faire intervenir un plombier dans un immeuble à gardien ?",
        a: "Oui. Prévenez le gardien de la date de passage et indiquez dans votre demande comment accéder à l'immeuble et à la cave si le robinet d'arrêt général s'y trouve.",
      },
      {
        q: "Comment joindre l'Entreprise Clairon ?",
        a: "Au 01 47 83 88 40, à info@clairon.org ou par le formulaire de contact. L'entreprise est au 23 rue d'Ouessant, 75015 Paris.",
      },
    ],
    ctaTitle: "Un plombier pour le 7e ?",
    ctaText: "L'équipe de la rue d'Ouessant est installée à quelques rues du 7e.",
    related: ["/plombier-paris-15", "/plombier-paris-16", PATHS.plumbing],
  }),
  local({
    slug: "plombier-paris-14",
    zone: "Paris 14e",
    title: "Plombier Paris 14e : Montparnasse, Plaisance | Clairon",
    description:
      "Plombier pour le 14e arrondissement de Paris : l'Entreprise Clairon intervient à Montparnasse, Plaisance et Pernety pour sanitaire, fuites et tuyauterie.",
    h1: "Plombier Paris 14e : Montparnasse, Plaisance, Pernety",
    kicker: "Plombier · Paris 14e",
    lead: "Ateliers d'artistes, villas pavées, immeubles de brique : le 14e réserve des installations qu'on ne voit nulle part ailleurs.",
    brief:
      "Pour un plombier à Paris 14e, l'Entreprise Clairon intervient depuis le 15e voisin, où elle est installée depuis 1943. Sanitaire, robinetterie, tuyauterie et salle de bains : ses compagnons travaillent dans les immeubles de Montparnasse, les ateliers de Plaisance et les maisons des villas du 14e, pour les particuliers et les syndics.",
    contactType: "plomberie",
    service: "Plombier à Paris 14e",
    crumb: "Plombier Paris 14e",
    photo: "chantier",
    sections: [
      {
        h2: "Quelles installations rencontre-t-on dans le 14e ?",
        answer:
          "Un peu de tout : immeubles de rapport le long des grandes avenues, immeubles de brique des années 1930, ateliers d'artistes avec verrières, et petites maisons dans les villas et impasses. Dans ces dernières, l'installation est souvent individuelle, du compteur jusqu'au toit, ce qui change la façon d'intervenir.",
        paras: [
          "Dans un atelier ou une maison de ville, le plombier gère seul tout le réseau, sans colonne d'immeuble : il faut retrouver le compteur, le regard d'évacuation et parfois une gouttière qui rejoint la même canalisation.",
          "Les anciens ateliers transformés en logements cachent aussi des réseaux ajoutés au fil des aménagements : un relevé de l'existant précède toujours les travaux importants.",
        ],
      },
      {
        h2: "Que vérifier dans une maison de ville parisienne ?",
        answer:
          "Le robinet d'arrêt général et son accessibilité, l'état des canalisations visibles en cave, les évacuations et leurs regards, et les gouttières qui rejoignent souvent le même réseau. Une maison combine plomberie et couverture : l'entreprise pratique les deux métiers, ce qui simplifie le diagnostic.",
        paras: [
          "Avant l'hiver, pensez aussi aux robinets extérieurs et aux canalisations qui traversent une cour ou un local non chauffé : les vidanger évite le gel.",
        ],
      },
      {
        h2: "Comment organiser l'intervention dans le 14e ?",
        answer:
          "Envoyez votre adresse, le type de logement et quelques photos par le formulaire, ou appelez la rue d'Ouessant. Pour une villa privée ou une impasse, précisez l'accès et le stationnement possible pour le véhicule : ce détail pratique compte beaucoup dans ces rues étroites.",
      },
    ],
    faq: [
      {
        q: "L'entreprise intervient-elle dans le 14e arrondissement ?",
        a: "Le 14e touche le 15e, où l'entreprise est installée. Indiquez votre adresse dans la demande : l'équipe confirmera l'intervention et vous proposera un rendez-vous.",
      },
      {
        q: "Mon atelier a une verrière qui fuit : plombier ou couvreur ?",
        a: "Les deux métiers sont pratiqués par l'Entreprise Clairon. Décrivez la fuite et joignez des photos de la verrière et de son pourtour : le compagnon regardera la couverture comme les évacuations.",
      },
      {
        q: "Comment contacter l'entreprise ?",
        a: "Téléphone : 01 47 83 88 40. E-mail : info@clairon.org. Adresse : 23 rue d'Ouessant, 75015 Paris.",
      },
    ],
    ctaTitle: "Une installation à reprendre dans le 14e ?",
    ctaText: "Décrivez votre logement : l'équipe organise la visite.",
    related: ["/plombier-paris-15", "/plombier-vanves", PATHS.plumbing],
  }),
  local({
    slug: "plombier-paris-16",
    zone: "Paris 16e",
    title: "Plombier Paris 16e : Passy, Auteuil, Javel | Clairon",
    description:
      "Plombier pour le 16e arrondissement de Paris, juste de l'autre côté de la Seine : l'Entreprise Clairon intervient à Passy et à Auteuil depuis le 15e voisin.",
    h1: "Plombier Paris 16e : Passy, Auteuil, bords de Seine",
    kicker: "Plombier · Paris 16e",
    lead: "Le pont de Grenelle et le pont Mirabeau relient le 15e au 16e : la rive d'en face est aussi celle de l'entreprise.",
    brief:
      "Pour un plombier à Paris 16e, l'Entreprise Clairon intervient depuis le 15e, de l'autre côté de la Seine, où elle est installée depuis 1943. Sanitaire, robinetterie, tuyauterie et rénovation de salle de bains : ses compagnons travaillent dans les immeubles de Passy et d'Auteuil, pour les particuliers, les professionnels et les syndics.",
    contactType: "plomberie",
    service: "Plombier à Paris 16e",
    crumb: "Plombier Paris 16e",
    photo: "carrelage",
    sections: [
      {
        h2: "Quels immeubles trouve-t-on dans le 16e ?",
        answer:
          "Des immeubles haussmanniens, des immeubles Art nouveau et Art déco, de grands ensembles des années 1950 à 1970 et des hôtels particuliers. Les salles de bains y ont souvent été refaites plusieurs fois, et les réseaux portent la trace de chaque rénovation : il faut savoir les lire avant d'intervenir.",
        paras: [
          "Le quartier d'Auteuil abrite plusieurs immeubles d'Hector Guimard, dont le Castel Béranger, rue La Fontaine. Dans ces bâtiments remarquables, les interventions se font avec un respect particulier des parties communes et des décors.",
          "Les immeubles des années 1930 du 16e ont souvent des salles de bains d'origine, carrelées, avec des appareils d'époque : on peut moderniser la plomberie en gardant le caractère de la pièce.",
        ],
      },
      {
        h2: "Rénover une salle de bains dans un immeuble ancien : quelles précautions ?",
        answer:
          "Repérer d'abord le passage des évacuations et l'état des canalisations encastrées, vérifier la possibilité de créer une douche de plain-pied selon l'épaisseur du plancher, et prévoir une étanchéité soignée sous les carrelages. Le voisin du dessous vous remerciera, et la copropriété aussi.",
        paras: [
          "L'Entreprise Clairon associe plomberie et petite maçonnerie : saignées, reprises de cloisons et scellements sont faits par la même équipe que les raccordements.",
        ],
      },
      {
        h2: "Comment faire venir un plombier du 15e dans le 16e ?",
        answer:
          "Simplement en envoyant votre demande avec l'adresse, l'étage et l'objet de l'intervention, ou en appelant la rue d'Ouessant. Les ponts de Grenelle, Mirabeau et de Bir-Hakeim relient directement les deux arrondissements : le 16e sud fait pratiquement partie du voisinage de l'entreprise.",
      },
    ],
    faq: [
      {
        q: "L'Entreprise Clairon intervient-elle dans le 16e ?",
        a: "Le 16e fait face au 15e, de l'autre côté de la Seine. Précisez votre adresse dans la demande : l'équipe vous confirmera l'intervention et le rendez-vous.",
      },
      {
        q: "Peut-on conserver une salle de bains ancienne en changeant la plomberie ?",
        a: "Souvent, oui. Les canalisations et la robinetterie peuvent être reprises en conservant carrelages et appareils d'époque, quand leur état le permet. Le compagnon vous le dira sur place.",
      },
      {
        q: "Comment joindre l'entreprise ?",
        a: "Par téléphone au 01 47 83 88 40, par e-mail à info@clairon.org, ou via le formulaire de contact.",
      },
    ],
    ctaTitle: "Un plombier de l'autre côté de la Seine.",
    ctaText: "Envoyez votre demande : l'équipe organise le rendez-vous.",
    related: ["/plombier-paris-15", "/renovation-salle-de-bains-paris-15", "/plombier-issy-les-moulineaux"],
  }),
  local({
    slug: "plombier-issy-les-moulineaux",
    zone: "Issy-les-Moulineaux",
    title: "Plombier à Issy-les-Moulineaux, voisin du 15e | Clairon",
    description:
      "Plombier à Issy-les-Moulineaux : l'Entreprise Clairon, installée dans le 15e voisin depuis 1943, intervient en plomberie, chauffage et couverture à Issy.",
    h1: "Plombier à Issy-les-Moulineaux, aux portes du 15e",
    kicker: "Plombier · Issy-les-Moulineaux",
    lead: "Passé la porte de Versailles et le boulevard périphérique, Issy-les-Moulineaux prolonge le 15e.",
    brief:
      "Pour un plombier à Issy-les-Moulineaux, l'Entreprise Clairon intervient depuis le 15e arrondissement voisin, où elle est installée rue d'Ouessant depuis 1943. Plomberie, chauffage, couverture et petite maçonnerie : ses compagnons travaillent dans les immeubles, les maisons et les locaux professionnels de la commune, pour les particuliers et les syndics.",
    contactType: "plomberie",
    service: "Plombier à Issy-les-Moulineaux",
    crumb: "Plombier Issy-les-Moulineaux",
    photo: "plans",
    sections: [
      {
        h2: "Quels logements trouve-t-on à Issy-les-Moulineaux ?",
        answer:
          "Une ville en plusieurs visages : pavillons et petits immeubles anciens sur les coteaux, immeubles de rapport près de Corentin-Celton, et quartiers récents le long de la Seine. Les installations vont de la plomberie d'origine à reprendre jusqu'aux réseaux neufs à entretenir.",
        paras: [
          "Dans une maison des hauteurs d'Issy, l'installation est entièrement privée : de l'arrivée d'eau aux gouttières, tout relève du propriétaire. Un artisan qui pratique à la fois la plomberie et la couverture voit l'ensemble d'un seul coup d'œil.",
          "Dans les résidences récentes, ce sont plutôt la robinetterie, les sanitaires et l'entretien du chauffage qui occupent le plombier.",
        ],
      },
      {
        h2: "Plomberie et couverture d'une maison : par quoi commencer ?",
        answer:
          "Par ce qui protège la maison de l'eau : toiture, gouttières et évacuations, puis les canalisations intérieures. Une gouttière bouchée peut abîmer une façade et une cave aussi sûrement qu'une fuite intérieure. L'Entreprise Clairon pratique les deux métiers et peut regarder l'ensemble lors d'une même visite.",
        paras: [
          "Avant l'hiver, vérifiez les robinets de jardin, les canalisations qui passent dans un garage ou une cave non chauffés, et l'écoulement des gouttières après la chute des feuilles.",
        ],
      },
      {
        h2: "Comment demander une intervention à Issy-les-Moulineaux ?",
        answer:
          "Par le formulaire de contact ou par téléphone, en précisant l'adresse, le type de logement et l'objet de la demande, avec quelques photos. L'entreprise, installée rue d'Ouessant, vous confirme ensuite l'intervention dans la commune et organise le rendez-vous avec vous.",
      },
    ],
    faq: [
      {
        q: "L'entreprise se déplace-t-elle à Issy-les-Moulineaux ?",
        a: "Issy-les-Moulineaux touche le 15e arrondissement, où l'entreprise est installée. Indiquez votre adresse dans la demande pour que l'équipe vous confirme l'intervention.",
      },
      {
        q: "Intervenez-vous dans les locaux professionnels ?",
        a: "Oui, l'Entreprise Clairon travaille aussi pour une clientèle de professionnels. Précisez l'activité et les horaires d'accès dans votre demande.",
      },
      {
        q: "Quelles sont les coordonnées de l'entreprise ?",
        a: "Entreprise Clairon, 23 rue d'Ouessant, 75015 Paris. Téléphone : 01 47 83 88 40. E-mail : info@clairon.org.",
      },
    ],
    ctaTitle: "Un plombier pour Issy-les-Moulineaux ?",
    ctaText: "L'équipe du 15e voisin organise la visite avec vous.",
    related: ["/plombier-vanves", "/plombier-paris-15", PATHS.roofing],
  }),
  local({
    slug: "plombier-vanves",
    zone: "Vanves",
    title: "Plombier à Vanves : maisons et immeubles | Clairon",
    description:
      "Plombier à Vanves : l'Entreprise Clairon, du 15e arrondissement voisin, intervient en plomberie, chauffage et couverture dans les maisons et immeubles.",
    h1: "Plombier à Vanves : maisons, pavillons et immeubles",
    kicker: "Plombier · Vanves",
    lead: "De la porte Brancion au centre de Vanves, quelques rues séparent la commune du sud du 15e.",
    brief:
      "Pour un plombier à Vanves, l'Entreprise Clairon intervient depuis le 15e arrondissement, où elle est installée depuis 1943. Plomberie, chauffage, couverture et petite maçonnerie : ses compagnons connaissent les pavillons en meulière, les petits immeubles et les maisons de ville de la commune, pour les particuliers comme pour les copropriétés.",
    contactType: "plomberie",
    service: "Plombier à Vanves",
    crumb: "Plombier Vanves",
    photo: "toits",
    sections: [
      {
        h2: "Quelles installations dans les maisons de Vanves ?",
        answer:
          "Beaucoup de maisons et de pavillons du début du XXe siècle, en meulière ou en brique, avec cave, chaudière individuelle et toiture à entretenir. Leurs réseaux ont souvent été complétés au fil des générations : un relevé de l'existant permet de distinguer ce qui peut rester de ce qu'il vaut mieux reprendre.",
        paras: [
          "Dans ces maisons, le plombier, le chauffagiste et le couvreur interviennent sur la même enveloppe. L'Entreprise Clairon pratique ces trois métiers, ainsi que la petite maçonnerie qui accompagne les raccordements.",
        ],
      },
      {
        h2: "Chaudière, radiateurs, eau chaude : quoi vérifier chaque année ?",
        answer:
          "L'entretien annuel obligatoire de la chaudière, la pression du circuit, la purge des radiateurs avant l'hiver et l'état du ballon d'eau chaude s'il y en a un. Ces vérifications simples évitent la plupart des pannes de saison et prolongent la vie de l'installation.",
        paras: [
          "Gardez l'attestation d'entretien de la chaudière : elle peut être demandée par votre assureur, et elle sert de mémoire de l'installation lors des visites suivantes.",
        ],
      },
      {
        h2: "Comment contacter l'Entreprise Clairon depuis Vanves ?",
        answer:
          "Par le formulaire, en précisant l'adresse à Vanves, le type de logement et l'objet de votre demande, ou par téléphone au 01 47 83 88 40. Joignez des photos : chaudière, fuite, gouttière ou pièce à rénover. L'équipe vous confirme l'intervention et fixe le rendez-vous.",
      },
    ],
    faq: [
      {
        q: "L'entreprise intervient-elle à Vanves ?",
        a: "Vanves est voisine du sud du 15e et du 14e. Précisez votre adresse dans la demande : l'équipe vous confirmera l'intervention et vous proposera un rendez-vous.",
      },
      {
        q: "Une même entreprise peut-elle s'occuper de la toiture et de la plomberie ?",
        a: "Oui, l'Entreprise Clairon est à la fois plombier, couvreur et chauffagiste, avec de la petite maçonnerie. C'est pratique dans une maison où tout est lié.",
      },
      {
        q: "Comment joindre l'entreprise ?",
        a: "Au 01 47 83 88 40 ou à info@clairon.org. Adresse : 23 rue d'Ouessant, 75015 Paris.",
      },
    ],
    ctaTitle: "Une maison à entretenir à Vanves ?",
    ctaText: "Envoyez votre demande, photos à l'appui.",
    related: ["/plombier-issy-les-moulineaux", "/plombier-paris-14", PATHS.heating],
  }),
];
