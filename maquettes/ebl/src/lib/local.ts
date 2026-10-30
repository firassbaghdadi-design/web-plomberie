import { PATHS } from "./site";
import type { Page } from "./types";

/**
 * Pages métier × zone : le 14e (adresse de l'entreprise) et cinq voisins limitrophes ou proches.
 * Repères de quartier institutionnels (gares, mairies, parcs, grandes rues), à faire relire par un habitant.
 * Aucune distance, aucun délai, aucun prix promis. La zone exacte d'intervention est à faire confirmer par l'entreprise.
 */
type Local = Page & { slug: string; zone: string };

const local = (p: Omit<Local, "path">): Local => ({ ...p, path: `/${p.slug}` });

export const localPages: Local[] = [
  local({
    slug: "plombier-paris-14",
    zone: "Paris 14e",
    title: "Plombier Paris 14e, rue d'Alésia depuis 1978 | EBL",
    description:
      "Plombier dans le 14e arrondissement de Paris : EBL, installée rue d'Alésia depuis 1978, pour fuites, sanitaire, tuyauterie, gaz et chauffage des immeubles.",
    h1: "Plombier Paris 14e : l'entreprise de la rue d'Alésia",
    kicker: "Plombier · Paris 14e",
    lead: "Alésia, Pernety, Plaisance, Montsouris, Montparnasse : le 14e est le quartier de l'entreprise, et celui où elle travaille depuis 1978.",
    brief:
      "Pour un plombier à Paris 14e, EBL est installée au 5 rue d'Alésia, au cœur de l'arrondissement, depuis 1978. L'Entreprise Bernard Lemaître intervient dans tout le 14e pour les fuites, le sanitaire, la tuyauterie, le gaz et le chauffage, chez les particuliers, dans les commerces et pour les syndics. Appelez le 01 43 31 26 77.",
    contactType: "plomberie",
    service: "Plombier à Paris 14e",
    crumb: "Plombier Paris 14e",
    photo: "raccords",
    sections: [
      {
        h2: "Pourquoi choisir un plombier installé dans le 14e ?",
        answer:
          "Parce qu'il connaît les immeubles de l'arrondissement et qu'il n'a pas Paris à traverser pour venir. EBL est rue d'Alésia depuis 1978 : les caves, les colonnes et les escaliers du quartier, ses compagnons les ont souvent déjà vus de l'intérieur, parfois plusieurs fois.",
        paras: [
          "Le 14e est un arrondissement de contrastes. Des immeubles de pierre du côté d'Alésia et de la rue Daguerre, des ateliers d'artistes et des cours autour de Montparnasse, des cités et des immeubles en brique le long des boulevards des Maréchaux, des pavillons près du parc Montsouris. Chaque époque a ses matériaux et sa façon de faire passer l'eau.",
          "Une entreprise du quartier est aussi un interlocuteur que l'on retrouve : celui qui a posé votre chauffe-eau peut revenir le voir, et le syndic de l'immeuble d'à côté le connaît souvent déjà.",
        ],
      },
      {
        h2: "Quelles interventions de plomberie dans le 14e arrondissement ?",
        answer:
          "La plomberie courante et le gaz : une fuite sous un évier, un WC qui coule en continu, un mitigeur à changer, une canalisation ancienne à reprendre, une chaudière à raccorder. L'entreprise est aussi certifiée Professionnel du Gaz pour les installations et l'entretien des systèmes au gaz.",
        paras: [
          "Dans les copropriétés du 14e, une partie du réseau appartient à l'immeuble. EBL travaille pour des particuliers, pour des commerces et pour des syndics : elle sait distinguer ce qui relève de votre appartement et ce qui doit être signalé au gestionnaire.",
        ],
      },
      {
        h2: "Comment préparer la visite du plombier ?",
        answer:
          "Indiquez l'adresse exacte, l'étage, le code d'accès et la personne présente. Décrivez le problème en une phrase et joignez deux ou trois photos : l'appareil, la fuite, l'endroit à équiper. Repérez aussi le robinet d'arrêt de l'appartement, souvent près du compteur d'eau.",
        paras: [
          "Pour une adresse commerçante comme la rue Daguerre, la rue d'Alésia ou l'avenue du Maine, précisez s'il s'agit d'un local professionnel et les horaires où l'intervention gêne le moins votre activité.",
        ],
      },
    ],
    faq: [
      {
        q: "Où est installée l'entreprise EBL dans le 14e ?",
        a: "Au 5 rue d'Alésia, 75014 Paris, dans le quartier d'Alésia. Téléphone : 01 43 31 26 77, du lundi au vendredi aux heures d'ouverture annoncées sur la page de contact.",
      },
      {
        q: "L'entreprise intervient-elle dans tout le 14e ?",
        a: "Le 14e est son arrondissement : de Montparnasse à la porte d'Orléans et de Pernety à la Cité universitaire. Indiquez votre adresse dans la demande pour organiser le rendez-vous.",
      },
      {
        q: "Peut-on demander une intervention pour un local commercial ?",
        a: "Oui, les commerces et les bureaux du quartier font partie des lieux où l'entreprise travaille. Précisez l'activité, les horaires d'ouverture et les contraintes d'accès dans votre demande.",
      },
    ],
    ctaTitle: "Un plombier dans votre arrondissement.",
    ctaText: "L'équipe de la rue d'Alésia organise le rendez-vous avec vous.",
    related: [PATHS.plumbing, PATHS.gas, "/plombier-paris-15"],
  }),
  local({
    slug: "plombier-paris-15",
    zone: "Paris 15e",
    title: "Plombier Paris 15e : Montparnasse et Vaugirard | EBL",
    description:
      "Plombier dans le 15e arrondissement de Paris : EBL, entreprise du 14e voisine de Montparnasse, intervient à Vaugirard, Pasteur et Convention. Plomberie et gaz.",
    h1: "Plombier Paris 15e : de Montparnasse à Vaugirard",
    kicker: "Plombier · Paris 15e",
    lead: "Le 15e commence là où finit le 14e, derrière la gare Montparnasse : une même clientèle d'immeubles, à quelques rues de l'atelier.",
    brief:
      "Pour un plombier à Paris 15e, EBL part de la rue d'Alésia, dans le 14e voisin, pour intervenir autour de Montparnasse, de Pasteur et de Vaugirard. Entreprise de plomberie créée en 1978, certifiée Professionnel du Gaz, elle travaille pour les particuliers, les commerces et les syndics. Décrivez votre adresse, l'entreprise confirme avec vous sa venue.",
    contactType: "plomberie",
    service: "Plombier à Paris 15e",
    crumb: "Plombier Paris 15e",
    photo: "evier",
    sections: [
      {
        h2: "Pourquoi appeler un plombier du 14e pour le 15e arrondissement ?",
        answer:
          "Parce que les deux arrondissements se touchent le long du faisceau de la gare Montparnasse et de la rue de Vaugirard. Une entreprise de la rue d'Alésia est plus proche de Pasteur ou de Falguière que bien des plombiers installés à l'autre bout du 15e, qui est très étendu.",
        paras: [
          "Le 15e est le plus peuplé des arrondissements de Paris. Du côté de Montparnasse, de Falguière et de Pasteur, ses immeubles ressemblent beaucoup à ceux du 14e : pierre de taille, escaliers à demi-paliers, colonnes d'eau en fonte, caves voûtées. Les gestes de l'entreprise s'y transposent sans difficulté.",
          "Plus à l'ouest, vers Convention et la porte de Versailles, les immeubles de brique des années 1930 et les grands ensembles changent les habitudes. Précisez simplement votre adresse : la venue se confirme avec vous au téléphone.",
        ],
      },
      {
        h2: "Quels problèmes de plomberie reviennent dans les immeubles du 15e ?",
        answer:
          "Des robinets d'arrêt qui ne ferment plus après des années sans être manœuvrés, des joints de WC fatigués, des siphons qui se bouchent et des canalisations d'évacuation anciennes. Dans les ensembles plus récents, des chauffe-eau et des mitigeurs à remplacer reviennent aussi souvent.",
        paras: [
          "Les tours et grands ensembles du Front de Seine et de Beaugrenelle fonctionnent avec des réseaux collectifs importants : en cas de fuite, le premier réflexe est de prévenir le gardien ou le gestionnaire, qui coupe la colonne concernée.",
          "Dans un petit immeuble ancien, c'est souvent à vous de manœuvrer le robinet d'arrêt. Faites-le une fois par an : il reste ainsi souple le jour où vous en aurez besoin.",
        ],
      },
      {
        h2: "Comment demander une intervention au gaz dans le 15e ?",
        answer:
          "En téléphonant à l'entreprise ou en remplissant le formulaire, en précisant le type d'appareil, l'étage et l'adresse. Joignez une photo de l'installation. EBL étant certifiée Professionnel du Gaz, elle peut organiser une visite pour un raccordement, un contrôle ou une fuite.",
        paras: [
          "En cas d'odeur de gaz, ne cherchez pas d'abord le plombier : ouvrez les fenêtres, sortez et appelez le numéro d'urgence du gestionnaire du réseau. L'entreprise intervient ensuite pour rechercher et réparer l'origine de la fuite.",
        ],
      },
    ],
    faq: [
      {
        q: "EBL dessert-elle tout le 15e arrondissement ?",
        a: "L'entreprise est installée dans le 14e et intervient d'abord à proximité de Montparnasse, de Pasteur et de Vaugirard. Pour les autres quartiers du 15e, indiquez votre adresse dans la demande et la venue sera confirmée.",
      },
      {
        q: "Quel est le numéro de téléphone pour un plombier dans le 15e ?",
        a: "Le 01 43 31 26 77, du lundi au vendredi aux horaires d'ouverture de l'entreprise : 8 h à 12 h 30 puis 13 h 30 à 18 h, et jusqu'à 17 h le vendredi.",
      },
      {
        q: "Peut-on joindre l'entreprise pour un syndic du 15e ?",
        a: "Oui. Choisissez « Syndic, copropriété ou professionnel » dans le formulaire, indiquez l'adresse de l'immeuble, la partie concernée et la personne à contacter sur place pour l'accès.",
      },
    ],
    ctaTitle: "Un plombier à deux pas de Montparnasse.",
    ctaText: "Donnez votre adresse du 15e, l'équipe de la rue d'Alésia vous répond.",
    related: ["/plombier-paris-14", PATHS.gas, "/plombier-paris-6"],
  }),
  local({
    slug: "plombier-paris-6",
    zone: "Paris 6e",
    title: "Plombier Paris 6e : Vavin, Luxembourg et Montparnasse | EBL",
    description:
      "Plombier dans le 6e arrondissement de Paris : EBL, plomberie du 14e installée depuis 1978, intervient à Vavin, Notre-Dame-des-Champs et autour du Luxembourg.",
    h1: "Plombier Paris 6e : Vavin, Luxembourg, Montparnasse",
    kicker: "Plombier · Paris 6e",
    lead: "Le boulevard du Montparnasse sépare les deux arrondissements : le 6e est le voisin le plus proche de l'atelier par le nord.",
    brief:
      "Pour un plombier à Paris 6e, EBL intervient depuis la rue d'Alésia, dans le 14e voisin, sur la partie sud de l'arrondissement : Vavin, Notre-Dame-des-Champs, les abords du jardin du Luxembourg. L'entreprise de plomberie fondée en 1978 est certifiée Professionnel du Gaz. Indiquez votre adresse, la venue se confirme au téléphone.",
    contactType: "plomberie",
    service: "Plombier à Paris 6e",
    crumb: "Plombier Paris 6e",
    photo: "outils",
    sections: [
      {
        h2: "Un plombier du 14e peut-il intervenir dans le 6e arrondissement ?",
        answer:
          "Oui : les deux arrondissements sont limitrophes, séparés par le boulevard du Montparnasse et la rue Vavin. Pour les adresses du sud du 6e, entre Vavin, Notre-Dame-des-Champs et Raspail, l'entreprise confirme avec vous sa venue après avoir pris votre adresse.",
        paras: [
          "Le sud du 6e est un quartier d'ateliers d'artistes, d'écoles, d'immeubles bourgeois de la fin du XIXe siècle et d'hôtels particuliers. Les appartements y sont souvent grands, les salles de bains refaites par étapes au fil des décennies, les canalisations de plusieurs époques cohabitent.",
        ],
      },
      {
        h2: "Quelles contraintes pour une intervention dans un immeuble haussmannien ?",
        answer:
          "Des escaliers étroits, parfois sans ascenseur, des étages élevés et des règlements de copropriété précis sur les horaires de travaux. Il est utile de prévenir le gardien, de réserver l'ascenseur de service s'il existe et de dégager l'accès aux canalisations avant la visite.",
        paras: [
          "Les immeubles anciens ont des gaines techniques étroites : une colonne d'eau y passe parfois derrière un placard ou dans une trappe. Indiquez-nous où elle se situe si vous le savez, ou envoyez une photo de la trappe de visite.",
          "Les travaux bruyants sont réglementés par la copropriété : renseignez-vous auprès du syndic ou du règlement avant de fixer la date d'une dépose ou d'un percement.",
        ],
      },
      {
        h2: "Pourquoi vérifier le gaz dans un appartement ancien du 6e ?",
        answer:
          "Parce que les installations au gaz y datent souvent de plusieurs décennies : flexibles, robinets, évacuations de fumées et ventilations vieillissent. Un contrôle par un professionnel certifié permet de remplacer ce qui est usé avant qu'une fuite ou un mauvais tirage ne se produise.",
        paras: [
          "EBL détient la certification Professionnel du Gaz. Pour une cuisine à rénover ou une chaudière à changer, une visite préalable est la meilleure façon de connaître l'état de l'existant et d'établir un devis juste.",
        ],
      },
    ],
    faq: [
      {
        q: "Jusqu'où EBL intervient-elle dans le 6e arrondissement ?",
        a: "Principalement au sud de l'arrondissement, du côté de Vavin, de Notre-Dame-des-Champs et de Montparnasse. Pour une adresse plus éloignée, indiquez-la dans la demande : l'entreprise vous dira si elle peut vous prendre en charge.",
      },
      {
        q: "Comment réserver une intervention dans un immeuble avec gardien ?",
        a: "Précisez le nom du gardien ou le code d'accès dans votre message, ainsi que l'étage et la porte. Si le règlement impose des horaires, mentionnez-les : ils sont pris en compte pour fixer le créneau.",
      },
      {
        q: "L'entreprise est-elle ouverte le samedi ?",
        a: "Les horaires relevés vont du lundi au vendredi ; le samedi et le dimanche figurent fermés. Un autre jour peut s'organiser pour un chantier, à confirmer directement avec l'entreprise.",
      },
    ],
    ctaTitle: "Un plombier de l'autre côté du boulevard.",
    ctaText: "Écrivez ou appelez la rue d'Alésia, nous confirmons votre adresse du 6e.",
    related: ["/plombier-paris-14", "/plombier-paris-15", PATHS.plumbing],
  }),
  local({
    slug: "plombier-paris-13",
    zone: "Paris 13e",
    title: "Plombier Paris 13e : Gobelins, Glacière, Butte-aux-Cailles | EBL",
    description:
      "Plombier dans le 13e arrondissement de Paris : EBL, entreprise du 14e installée depuis 1978, intervient à la Glacière, à la Butte-aux-Cailles et près de Denfert.",
    h1: "Plombier Paris 13e : Glacière, Butte-aux-Cailles",
    kicker: "Plombier · Paris 13e",
    lead: "Au sud-est du 14e, la rue de la Santé et le boulevard Auguste-Blanqui mènent droit aux quartiers du 13e.",
    brief:
      "Pour un plombier à Paris 13e, EBL se rend depuis la rue d'Alésia, dans le 14e voisin, vers la Glacière, la Butte-aux-Cailles et les alentours de la place d'Italie. Entreprise de plomberie fondée en 1978, certifiée Professionnel du Gaz, elle travaille pour les particuliers, les commerces et les syndics. Décrivez votre adresse pour confirmer la venue.",
    contactType: "plomberie",
    service: "Plombier à Paris 13e",
    crumb: "Plombier Paris 13e",
    photo: "raccords",
    sections: [
      {
        h2: "Quels quartiers du 13e sont proches de l'atelier d'EBL ?",
        answer:
          "Ceux de l'ouest de l'arrondissement : la Glacière, la Butte-aux-Cailles, Tolbiac et les abords de la place d'Italie. Ils sont voisins du 14e par le boulevard Auguste-Blanqui et la rue de la Santé. Pour les quartiers plus lointains, l'entreprise confirme avec vous après avoir pris l'adresse.",
        paras: [
          "Le 13e juxtapose des rues presque villageoises, comme celles de la Butte-aux-Cailles avec ses petites maisons et ses immeubles bas, et des quartiers de tours et d'ensembles des années 1960 et 1970. Les installations n'y ont ni le même âge ni les mêmes gestes : une maison basse a ses propres tuyaux, un ensemble collectif a une chaufferie et des colonnes.",
        ],
      },
      {
        h2: "Que changer dans une salle d'eau d'un petit immeuble de la Butte-aux-Cailles ?",
        answer:
          "Souvent peu de choses suffisent : un mitigeur, un siphon, des joints, parfois un lavabo ou un WC. Dans de petits immeubles à deux ou trois étages, il arrive que l'évacuation soit commune avec le voisin ; il faut alors s'assurer de ce qui est privatif avant d'intervenir.",
        paras: [
          "Les maisons de ville et petits immeubles du quartier ont souvent été divisés en appartements au fil du temps : une salle de bains insérée dans un ancien couloir, une cuisine déplacée, des canalisations ajoutées au gré des travaux. Un constat sur place est la meilleure façon d'y voir clair.",
          "Prenez quelques photos de l'ensemble du circuit, de l'arrivée d'eau jusqu'à l'évacuation : elles aident le plombier à repérer ce qui est d'origine et ce qui a été ajouté plus tard.",
        ],
      },
      {
        h2: "Comment gérer un dégât des eaux entre voisins dans un immeuble du 13e ?",
        answer:
          "Coupez l'eau, prévenez le voisin concerné et le syndic, puis remplissez ensemble un constat amiable en notant la date, la cause supposée et les pièces touchées. Faites ensuite intervenir un plombier pour trouver et réparer l'origine, et conservez sa facture pour l'assurance.",
        paras: [
          "L'entreprise peut établir par écrit ce qu'elle a constaté et réparé, ce qui facilite les échanges avec l'assurance. Précisez dans votre demande qu'il s'agit d'un dégât des eaux, afin que le rendez-vous soit organisé en priorité.",
        ],
      },
    ],
    faq: [
      {
        q: "EBL se déplace-t-elle jusqu'à la place d'Italie ?",
        a: "La place d'Italie et ses abords font partie du voisinage immédiat du 14e. Indiquez votre adresse et l'entreprise confirme avec vous sa venue, selon la nature de la demande.",
      },
      {
        q: "Peut-on demander un devis pour une salle d'eau dans le 13e ?",
        a: "Oui. Décrivez la pièce, joignez des photos et précisez l'adresse : l'entreprise fixe ensuite un rendez-vous pour constater et chiffrer les travaux sur place.",
      },
      {
        q: "Faut-il être propriétaire pour demander une intervention ?",
        a: "Non, un locataire peut demander un dépannage ou un constat. Pour des travaux importants, l'accord du propriétaire ou du bailleur est nécessaire : mentionnez-le dans votre demande.",
      },
    ],
    ctaTitle: "Un plombier entre Glacière et Alésia.",
    ctaText: "Appelez la rue d'Alésia, nous confirmons votre adresse du 13e.",
    related: ["/plombier-paris-14", PATHS.heating, "/plombier-montrouge"],
  }),
  local({
    slug: "plombier-montrouge",
    zone: "Montrouge",
    title: "Plombier Montrouge : porte d'Orléans, rue d'Alésia | EBL",
    description:
      "Plombier à Montrouge : EBL, entreprise de la rue d'Alésia à Paris 14e depuis 1978, intervient chez les particuliers, commerces et syndics de la commune voisine.",
    h1: "Plombier Montrouge : porte d'Orléans, hôtel de ville",
    kicker: "Plombier · Montrouge",
    lead: "Montrouge commence à la porte d'Orléans, au bout de l'avenue du Général-Leclerc : la commune est la voisine immédiate de l'atelier.",
    brief:
      "Pour un plombier à Montrouge, EBL part de Paris 14e, rue d'Alésia, et rejoint la commune voisine par la porte d'Orléans. Entreprise de plomberie fondée en 1978, certifiée Professionnel du Gaz, elle travaille pour les particuliers, les commerces et les copropriétés. Donnez votre adresse à Montrouge, la venue se confirme avec vous.",
    contactType: "plomberie",
    service: "Plombier à Montrouge",
    crumb: "Plombier Montrouge",
    photo: "evier",
    sections: [
      {
        h2: "Pourquoi appeler un plombier de la rue d'Alésia pour Montrouge ?",
        answer:
          "Parce que l'atelier est du bon côté du périphérique : la rue d'Alésia, puis l'avenue du Général-Leclerc, mène en ligne droite à la limite de Montrouge. Pour la plupart des adresses de la commune, la distance se compte en quelques stations de métro, sans traverser Paris.",
        paras: [
          "Montrouge est une ville dense, juste au sud de Paris, aux immeubles de rapport des années 1900 le long des grandes rues, aux pavillons de brique et aux résidences plus récentes dans les quartiers proches du Beffroi, de l'hôtel de ville et de la mairie. On y trouve donc à la fois de l'ancien et du neuf, deux univers de plomberie.",
        ],
      },
      {
        h2: "Qu'ajoute une entreprise parisienne pour une copropriété de banlieue proche ?",
        answer:
          "L'habitude des immeubles anciens, de leurs colonnes en fonte, de leurs caves et de leurs règlements de copropriété. Les immeubles de Montrouge construits autour de 1900 ressemblent à ceux du 14e, et les mêmes gestes y trouvent leur place, avec le même interlocuteur.",
        paras: [
          "Pour une copropriété, indiquez l'adresse de l'immeuble, le nombre de logements concernés et le nom du syndic. Une visite avec le gardien ou un conseil syndical permet de mieux cerner le problème et de proposer l'intervention la plus utile.",
          "Si plusieurs logements sont touchés par le même symptôme, comme une pression faible ou une eau trouble, la cause est souvent dans la colonne commune plutôt que dans chaque appartement.",
        ],
      },
      {
        h2: "Comment se passe une demande de dépannage depuis Montrouge ?",
        answer:
          "Vous appelez le 01 43 31 26 77 aux heures d'ouverture ou vous envoyez le formulaire avec l'adresse, le code d'accès et une photo. L'entreprise vous rappelle pour confirmer le déplacement et fixer le créneau, sans promesse de délai avant d'avoir pris connaissance de votre situation.",
        paras: [
          "Pour un problème de gaz, mettez-vous d'abord en sécurité et appelez le numéro d'urgence du gestionnaire de réseau. L'entreprise intervient ensuite pour la remise en état de l'installation.",
        ],
      },
    ],
    faq: [
      {
        q: "EBL intervient-elle à Montrouge ?",
        a: "L'entreprise est installée à Paris 14e, à côté de la limite de Montrouge. Le déplacement se confirme au téléphone, après avoir pris votre adresse et la nature de votre demande.",
      },
      {
        q: "Comment aller de Montrouge à l'atelier de la rue d'Alésia ?",
        a: "Par l'avenue du Général-Leclerc puis la rue d'Alésia, ou par les lignes de métro et de tramway qui relient la porte d'Orléans au 14e. Appelez avant de vous déplacer.",
      },
      {
        q: "Les commerces de Montrouge peuvent-ils faire appel à EBL ?",
        a: "Oui. Précisez l'activité, les horaires d'ouverture et l'accès dans votre demande : le rendez-vous est organisé de manière à perturber le moins possible votre journée de vente.",
      },
    ],
    ctaTitle: "Un plombier au bout de l'avenue.",
    ctaText: "Donnez votre adresse à Montrouge, la rue d'Alésia confirme la venue.",
    related: ["/plombier-paris-14", "/plombier-malakoff", PATHS.gas],
  }),
  local({
    slug: "plombier-malakoff",
    zone: "Malakoff",
    title: "Plombier Malakoff : Plateau et porte de Vanves | EBL",
    description:
      "Plombier à Malakoff : EBL, entreprise de plomberie du 14e installée depuis 1978 rue d'Alésia, intervient sur le plateau de Vanves et autour de l'hôtel de ville.",
    h1: "Plombier Malakoff : le Plateau et la porte de Vanves",
    kicker: "Plombier · Malakoff",
    lead: "Malakoff touche le 14e par la porte de Châtillon et la porte de Vanves : même métro, même horizon, un autre quartier.",
    brief:
      "Pour un plombier à Malakoff, EBL part de la rue d'Alésia, à Paris 14e, vers le plateau de Vanves et l'hôtel de ville de la commune. Entreprise de plomberie fondée en 1978, certifiée Professionnel du Gaz, elle travaille pour les particuliers, les commerces et les syndics. Donnez votre adresse, la venue se confirme au téléphone.",
    contactType: "plomberie",
    service: "Plombier à Malakoff",
    crumb: "Plombier Malakoff",
    photo: "outils",
    sections: [
      {
        h2: "Quel lien entre Malakoff et le quartier de Plaisance dans le 14e ?",
        answer:
          "Un lien direct : Plaisance et Didot, côté 14e, se prolongent par la porte de Vanves vers Malakoff. Beaucoup d'habitants passent d'une commune à l'autre sans le remarquer. L'entreprise du 14e est donc proche de Malakoff autant que de certains quartiers parisiens.",
        paras: [
          "Malakoff alterne les immeubles anciens de la rue Etienne-Dolet et du plateau, les résidences des années 1960 et 1970 et des programmes plus récents. Le plateau domine les environs, ce qui signifie aussi des immeubles sur pente, dont les caves et les évacuations suivent le relief.",
        ],
      },
      {
        h2: "À quoi faire attention pour une plomberie dans un immeuble sur pente ?",
        answer:
          "Aux évacuations et à la pression : sur un terrain en pente, les niveaux de cave et de rez-de-chaussée ne sont pas les mêmes d'un côté à l'autre de l'immeuble, et les eaux usées se ventilent différemment. Un plombier expérimenté les repère en parcourant l'immeuble avec le gardien.",
        paras: [
          "En haut de l'immeuble, la pression peut être plus faible, et un surpresseur ou un réducteur bien réglé améliore le confort. En bas, c'est l'inverse : une pression trop forte use les joints et les robinets.",
          "Dans tous les cas, les mesures se font sur place. Évitez de commander un appareil avant la visite : le compagnon pourra vous conseiller après avoir regardé votre installation.",
        ],
      },
      {
        h2: "Comment demander une intervention gaz ou chauffage à Malakoff ?",
        answer:
          "Par téléphone ou par le formulaire, en précisant l'appareil, son âge approximatif et l'étage. Joignez une photo de l'installation et de la plaque de l'appareil. EBL étant certifiée Professionnel du Gaz, elle peut organiser un contrôle ou un entretien après avoir confirmé le déplacement.",
        paras: [
          "Une chaudière au gaz doit être entretenue chaque année par un professionnel : conservez les attestations, elles vous seront demandées par votre assurance ou votre bailleur lors d'un sinistre ou d'un changement de locataire.",
        ],
      },
    ],
    faq: [
      {
        q: "EBL intervient-elle à Malakoff ?",
        a: "La commune est voisine du 14e, où l'entreprise est installée. Le déplacement est à confirmer au téléphone selon l'adresse et la nature de la demande, du lundi au vendredi aux horaires d'ouverture.",
      },
      {
        q: "Faut-il venir à l'atelier pour obtenir un devis ?",
        a: "Non. Le devis se prépare à partir de votre description et de vos photos, puis d'une visite sur place. Pour tout déplacement jusqu'à la rue d'Alésia, appelez d'abord l'entreprise afin de vous assurer qu'on peut vous y recevoir.",
      },
      {
        q: "L'entreprise travaille-t-elle avec les syndics de Malakoff ?",
        a: "Oui, elle intervient pour des syndics comme pour des particuliers. Indiquez l'adresse de l'immeuble, la partie commune concernée et un contact sur place pour l'accès dans votre demande.",
      },
    ],
    ctaTitle: "Un plombier de l'autre côté de la porte.",
    ctaText: "Appelez la rue d'Alésia, nous confirmons votre adresse à Malakoff.",
    related: ["/plombier-montrouge", "/plombier-paris-14", PATHS.heating],
  }),
];
