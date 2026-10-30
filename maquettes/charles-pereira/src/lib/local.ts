import { PATHS } from "./site";
import type { Page } from "./types";

/**
 * Pages métier × zone : le 7e, le 14e, le 16e, Issy-les-Moulineaux et Boulogne-Billancourt, voisins du 15e.
 * Chaque page a son propre angle et son propre texte. Les repères locaux sont institutionnels (monuments, gares, lignes) ;
 * la zone d'intervention réelle de l'entreprise est à confirmer avec elle. Aucun chantier, client ou délai inventé.
 */

export const localPages: Page[] = [
  {
    path: "/plombier-paris-7",
    slug: "plombier-paris-7",
    zone: "Paris 7e",
    title: "Plombier Paris 7e : fuite, sanitaires, chauffe-eau | Pereira",
    description:
      "Plombier pour le 7e arrondissement, voisin du 15e : fuite, sanitaires, chauffe-eau et débouchage par l'Entreprise Charles Pereira, depuis le boulevard Garibaldi.",
    h1: "Plombier à Paris 7e, voisin du 15e",
    kicker: "Plomberie · Paris 7e",
    lead: "Des immeubles de pierre, des parquets et des moulures à protéger : un plombier du 15e qui travaille avec soin dans le 7e.",
    brief:
      "Le 7e arrondissement touche le 15e côté École militaire et Invalides. L'Entreprise Charles Pereira, installée boulevard Garibaldi depuis 2008, y propose de la plomberie, de la recherche de fuite, du débouchage et des chauffe-eau, avec un soin particulier pour les logements anciens, leurs sols et leurs décors.",
    contactType: "plomberie",
    service: "Plomberie à Paris 7e",
    crumb: "Plombier Paris 7e",
    approach: "Depuis le boulevard Garibaldi, le 7e se rejoint par l'École militaire ou par l'avenue de Suffren : un voisin direct du 15e.",
    sections: [
      {
        h2: "Qu'est-ce qui rend la plomberie particulière dans le 7e ?",
        answer:
          "Le 7e réunit beaucoup d'immeubles anciens, de bureaux et de résidences de standing, souvent avec gardien, parquets d'époque et moulures. La plomberie y demande surtout du soin : protéger les sols, limiter les ouvertures dans les murs et organiser l'accès avec la copropriété avant de couper l'eau.",
        paras: [
          "Entre les Invalides, le Champ-de-Mars et la rue Cler, le quartier alterne grands appartements, logements plus modestes sous les toits et locaux d'activité. Les réseaux d'eau y ont été modifiés au fil des propriétaires et des rénovations, et leur tracé n'est pas toujours documenté.",
          "Un plombier qui intervient là doit donc savoir lire une installation avant de la toucher, repérer les vannes, éviter les surprises derrière une cloison et proposer, quand c'est possible, un passage de tuyaux qui épargne les décors.",
        ],
      },
      {
        h2: "Comment organiser des travaux dans un immeuble du 7e ?",
        answer:
          "Prévenez le gardien ou le syndic dès la demande de devis : l'ascenseur, les horaires de travaux et les coupures d'eau sont réglementés par l'immeuble. Indiquez l'étage, la présence d'un ascenseur de service et la personne qui remettra les clés. Le plombier prépare alors son passage.",
        paras: [
          "Dans les copropriétés de standing, le règlement impose parfois des horaires de bruit, des protections dans les parties communes et un nettoyage soigné. Ces contraintes se discutent avant le chantier, pas pendant.",
          "Le formulaire de contact prévoit l'adresse précise du lieu et jusqu'à quatre photos : l'entrée de l'immeuble, la gaine technique, la pièce d'eau concernée. Elles évitent un déplacement pour une simple prise de mesure.",
        ],
        list: [
          "Avertir le gardien ou le syndic avant l'intervention",
          "Prévoir l'accès à la cave ou à la gaine technique",
          "Protéger les sols et les parties communes",
          "Annoncer à l'avance toute coupure d'eau",
        ],
        listTitle: "À préparer avant la visite",
      },
      {
        h2: "Peut-on rénover une salle de bains ancienne sans tout casser ?",
        answer:
          "Souvent oui, en conservant les arrivées existantes quand elles sont saines et en ne remplaçant que ce qui est abîmé : robinetterie, flexibles, siphons, évacuation. Quand les canalisations sont en mauvais état, il vaut mieux les reprendre au moment des travaux, pour ne pas rouvrir les murs ensuite.",
        paras: [
          "Dans un appartement ancien, la salle de bains a parfois été créée après coup, dans un ancien cabinet ou un placard. Les évacuations y sont contraintes, avec des pentes faibles. Mieux vaut le savoir avant de choisir un receveur extra-plat ou une grande douche à l'italienne.",
          "Le plombier travaille ici en lien avec le carreleur et l'électricien, quand il y en a un : l'ordre des interventions compte plus que la vitesse. Une conduite bien posée n'apparaîtra pas dans le résultat final, et c'est sa meilleure réussite.",
        ],
      },
    ],
    faq: [
      { q: "Le 7e est-il dans votre zone d'intervention ?", a: "Le 7e est voisin du 15e, où l'entreprise est installée. La zone exacte et les modalités de déplacement sont à confirmer avec elle lors du premier échange téléphonique." },
      { q: "Faut-il une autorisation pour couper l'eau dans l'immeuble ?", a: "Pour une coupure limitée à votre logement, le robinet d'arrêt privatif suffit. Pour la colonne commune, il faut prévenir le syndic ou le gardien, qui organise la coupure et prévient les voisins." },
      { q: "Intervenez-vous dans les locaux professionnels ?", a: "Les commerces et bureaux font partie des demandes possibles. Précisez dans le formulaire l'adresse, l'activité et les horaires d'accès, afin de choisir un créneau qui ne gêne pas l'exploitation." },
    ],
    ctaTitle: "Un plombier pour votre logement du 7e.",
    ctaText: "Décrivez votre demande et joignez des photos : l'Entreprise Charles Pereira vous répond.",
    related: [PATHS.plumbing, PATHS.leak, "/plombier-paris-14", "/plombier-paris-16"],
  },
  {
    path: "/plombier-paris-14",
    slug: "plombier-paris-14",
    zone: "Paris 14e",
    title: "Plombier Paris 14e : dépannage et installation | Pereira",
    description:
      "Plombier pour le 14e, de Montparnasse à Alésia, par l'Entreprise Charles Pereira du 15e voisin : dépannage, débouchage, sanitaires et chauffe-eau. Devis gratuit.",
    h1: "Plombier à Paris 14e, de Montparnasse à Alésia",
    kicker: "Plomberie · Paris 14e",
    lead: "Petites surfaces, ateliers d'artistes, immeubles de rapport : le 14e a des installations à son image, variées.",
    brief:
      "Le 14e arrondissement est le voisin immédiat du 15e, de l'autre côté de la gare Montparnasse. L'Entreprise Charles Pereira peut y intervenir pour la plomberie, la recherche de fuite, le débouchage et les chauffe-eau, dans des logements aussi différents que des studios, des ateliers d'artistes et des immeubles de rapport.",
    contactType: "plomberie",
    service: "Plomberie à Paris 14e",
    crumb: "Plombier Paris 14e",
    approach: "La gare Montparnasse marque la frontière : depuis le boulevard Garibaldi, le 14e est à quelques stations de métro ou une courte course en voiture.",
    sections: [
      {
        h2: "Quels logements trouve-t-on dans le 14e arrondissement ?",
        answer:
          "Le 14e mélange immeubles de rapport, ensembles de logements des années 1930 à 1970, petits immeubles de faubourg, anciens ateliers d'artistes avec verrière et logements étudiants autour de la Cité universitaire. Chaque type pose ses propres questions de plomberie : surface réduite, évacuation difficile ou chauffage collectif.",
        paras: [
          "Montparnasse et Alésia ont attiré peintres et sculpteurs, et il reste dans le quartier d'anciens ateliers aménagés en logements. Ces volumes en hauteur ont souvent été équipés d'une cuisine ou d'une salle d'eau en mezzanine, avec des conduites ajoutées au fil du temps.",
          "Pour le plombier, c'est une invitation à la méthode : repérer les arrivées, comprendre où passent les évacuations et ne rien supposer. Une photographie de l'existant, envoyée avec la demande de devis, fait gagner un temps précieux.",
        ],
      },
      {
        h2: "Un studio ou un petit appartement pose-t-il des contraintes ?",
        answer:
          "Oui : dans une petite surface, chaque centimètre compte. Les chauffe-eau doivent être compacts, les évacuations sont courtes mais mal pentées, et le coin cuisine partage souvent sa colonne avec la salle d'eau. Le plombier propose des appareils qui rentrent vraiment et un cheminement des tuyaux qui reste discret.",
        paras: [
          "Beaucoup de locataires et de jeunes propriétaires du 14e vivent dans des studios. Les demandes les plus courantes y concernent un évier qui se vide mal, un mitigeur qui goutte, un chauffe-eau sous l'évier qui ne chauffe plus ou une chasse d'eau qui fuit.",
          "Précisez dans le formulaire si vous êtes locataire ou propriétaire : certains travaux sont à la charge du bailleur, d'autres de l'occupant. Un plombier peut décrire le problème par écrit, ce qui aide à engager la discussion avec le propriétaire ou l'agence.",
        ],
        list: [
          "Chauffe-eau compact sous évier ou vertical mural",
          "Évier, lavabo ou douche qui s'écoule mal",
          "Mitigeur, robinet ou chasse d'eau qui fuit",
          "Remplacement de flexibles et de joints usés",
        ],
        listTitle: "Les demandes les plus fréquentes",
      },
      {
        h2: "Comment réagir à un dégât des eaux entre voisins ?",
        answer:
          "Coupez l'eau si l'origine est chez vous, prévenez vos voisins et le syndic, photographiez les dégâts et remplissez un constat amiable. Faites ensuite trouver la cause par un plombier : sa description écrite et ses photos aident les assureurs à répartir les responsabilités entre les logements concernés.",
        paras: [
          "Dans les immeubles anciens du 14e, les fuites traversent souvent plusieurs étages avant de se voir : l'origine est parfois deux niveaux plus haut que la tache. Chercher au bon endroit évite de multiplier les ouvertures inutiles.",
          "Si la fuite vient d'une partie commune, comme une colonne d'eau, le syndic doit être informé immédiatement. Si elle vient d'un appareil privatif, la réparation relève de son propriétaire. Dans tous les cas, garder les factures et les photos facilite les démarches.",
        ],
      },
    ],
    faq: [
      { q: "Pouvez-vous intervenir à Alésia ou à Denfert ?", a: "Le 14e est voisin du 15e, mais les secteurs précis couverts sont à confirmer par téléphone avec l'entreprise, qui vous indiquera aussi les possibilités de rendez-vous." },
      { q: "Locataire, qui doit payer la réparation ?", a: "Cela dépend de la cause : l'entretien courant revient en général au locataire, les réparations liées à la vétusté ou à un défaut de l'installation au propriétaire. Demandez conseil à votre bailleur ou à une association de locataires." },
      { q: "Puis-je envoyer une photo de mon installation ?", a: "Oui, jusqu'à quatre photos par le formulaire de contact. La plaque de l'appareil, le dessous de l'évier ou la zone humide sont les plus utiles pour préparer une visite." },
    ],
    ctaTitle: "Un plombier du 15e pour votre logement du 14e.",
    ctaText: "Décrivez votre problème et joignez des photos : devis gratuit, sans engagement.",
    related: [PATHS.plumbing, PATHS.drain, "/plombier-paris-7", "/plombier-paris-16"],
  },
  {
    path: "/plombier-paris-16",
    slug: "plombier-paris-16",
    zone: "Paris 16e",
    title: "Plombier Paris 16e : chauffe-eau, fuite, sanitaires | Pereira",
    description:
      "Plombier pour le 16e, de Passy à Auteuil, par l'Entreprise Charles Pereira, voisine du boulevard Garibaldi : chauffe-eau, fuite, sanitaires et débouchage.",
    h1: "Plombier à Paris 16e, de Passy à Auteuil",
    kicker: "Plomberie · Paris 16e",
    lead: "De grands appartements, plusieurs salles d'eau, des réseaux étendus : des installations qui demandent méthode et régularité.",
    brief:
      "Le 16e arrondissement fait face au 15e de l'autre côté de la Seine, par les ponts de Grenelle et de Bir-Hakeim. L'Entreprise Charles Pereira y propose plomberie, recherche de fuite, chauffe-eau et débouchage pour de grands logements, souvent dotés de plusieurs salles d'eau et d'installations étendues.",
    contactType: "plomberie",
    service: "Plomberie à Paris 16e",
    crumb: "Plombier Paris 16e",
    approach: "La Seine seule sépare le 15e du 16e : depuis le boulevard Garibaldi, on rejoint Passy ou Auteuil par les ponts, sans traverser tout Paris.",
    sections: [
      {
        h2: "Qu'a de particulier la plomberie des grands appartements du 16e ?",
        answer:
          "Dans les grands logements, les réseaux sont étendus : plusieurs salles de bains, des cuisines séparées, parfois une buanderie. Les canalisations sont longues, les points de puisage éloignés du chauffe-eau, et une fuite peut toucher plusieurs pièces avant d'être vue. L'entretien régulier prend donc plus d'importance.",
        paras: [
          "Le 16e compte de nombreux immeubles de pierre de taille construits entre la fin du XIXe siècle et les années 1930, notamment autour de Passy, de la Muette et d'Auteuil. Leurs appartements, souvent vastes, ont connu plusieurs rénovations successives, chacune ayant laissé ses raccords.",
          "Il faut alors un plombier qui prenne le temps de cartographier l'installation : où se trouve la nourrice, quelles salles d'eau dépendent de quelle colonne, quelles vannes isolent quoi. Ce repérage est le premier travail, avant même la première réparation.",
        ],
      },
      {
        h2: "Quel chauffe-eau pour plusieurs salles de bains ?",
        answer:
          "Pour deux ou trois salles d'eau utilisées en même temps, un ballon de grande capacité ou deux appareils répartis conviennent mieux qu'un seul petit chauffe-eau. Le choix dépend de la distance entre les points de puisage et de la place disponible. Le plombier propose après avoir vu les lieux.",
        paras: [
          "Plus un point de puisage est loin du ballon, plus il faut attendre que l'eau chaude arrive, en gaspillant de l'eau froide. Dans les grands appartements, un second chauffe-eau près de la salle de bains éloignée peut avoir plus de sens qu'un très gros ballon au fond de la cuisine.",
          "Le groupe de sécurité, le raccordement à l'évacuation et l'alimentation électrique font partie de l'installation et doivent être conformes. Un bon plombier explique ce qui a été fait, où se trouve la vanne d'arrêt et comment vérifier le groupe de sécurité de temps en temps.",
        ],
        list: [
          "Ballon de grande capacité pour plusieurs salles d'eau",
          "Second chauffe-eau près d'un point de puisage éloigné",
          "Vérification du groupe de sécurité",
          "Contrôle de l'évacuation et de l'alimentation",
        ],
        listTitle: "Les options à étudier",
      },
      {
        h2: "Comment prévenir les fuites dans un grand logement ancien ?",
        answer:
          "Quelques gestes réguliers suffisent : manœuvrer les robinets d'arrêt une ou deux fois par an, remplacer les flexibles tous les dix ans environ, surveiller le compteur quand personne n'utilise d'eau, et faire contrôler les réseaux anciens avant une absence prolongée. Une fuite évitée coûte toujours moins qu'un dégât des eaux.",
        paras: [
          "Dans un logement occupé de façon irrégulière, comme une résidence secondaire parisienne ou un appartement laissé vide pendant des vacances, les fuites passent inaperçues plus longtemps. Fermer l'arrivée générale avant de partir est un réflexe simple et efficace.",
          "Si un doute existe, la méthode du compteur est fiable : fermez tous les robinets, relevez l'index, attendez une heure sans utiliser d'eau et relisez-le. Un chiffre qui a bougé indique une consommation cachée, donc une fuite à rechercher.",
        ],
      },
    ],
    faq: [
      { q: "Intervenez-vous dans le 16e ?", a: "Le 16e est voisin du 15e, de l'autre côté de la Seine. Les secteurs précis et les créneaux sont à confirmer par téléphone avec l'entreprise avant de vous déplacer." },
      { q: "Peut-on remplacer un chauffe-eau sans refaire la salle de bains ?", a: "Oui, dans la plupart des cas : le ballon se remplace à l'emplacement de l'ancien, avec un nouveau groupe de sécurité. Joignez une photo de l'ancien appareil pour confirmer qu'il peut être remplacé à l'identique." },
      { q: "Faites-vous les contrôles avant absence prolongée ?", a: "Vous pouvez demander une vérification de l'installation avant de partir. Décrivez le logement et la durée de l'absence dans le formulaire, pour que l'entreprise vous réponde en connaissance de cause." },
    ],
    ctaTitle: "Un plombier du 15e à votre porte, dans le 16e.",
    ctaText: "Décrivez votre installation, joignez des photos : devis gratuit.",
    related: [PATHS.heating, PATHS.leak, "/plombier-paris-7", "/plombier-boulogne-billancourt"],
  },
  {
    path: "/plombier-issy-les-moulineaux",
    slug: "plombier-issy-les-moulineaux",
    zone: "Issy-les-Moulineaux",
    title: "Plombier Issy-les-Moulineaux : dépannage, sanitaires | Pereira",
    description:
      "Plombier à Issy-les-Moulineaux, commune voisine du 15e : l'Entreprise Charles Pereira intervient pour fuite, débouchage, sanitaires, chauffe-eau et chauffage.",
    h1: "Plombier à Issy-les-Moulineaux, voisin du 15e",
    kicker: "Plomberie · Issy-les-Moulineaux",
    lead: "Au sud-ouest du 15e, une commune d'immeubles récents, de pavillons et de bureaux : le plombier du boulevard Garibaldi est tout proche.",
    brief:
      "Issy-les-Moulineaux, dans les Hauts-de-Seine, est la commune voisine du 15e côté Porte de Versailles. L'Entreprise Charles Pereira peut y intervenir pour la plomberie, la recherche de fuite, le débouchage, le chauffe-eau et le chauffage, dans des immeubles récents comme dans des maisons plus anciennes.",
    contactType: "plomberie",
    service: "Plomberie à Issy-les-Moulineaux",
    crumb: "Plombier Issy-les-Moulineaux",
    approach: "Issy se rejoint depuis le 15e par la Porte de Versailles ou le tramway : la commune est contiguë à l'arrondissement, la distance est courte.",
    sections: [
      {
        h2: "Quelle plomberie dans une ville de maisons et d'immeubles récents ?",
        answer:
          "Issy-les-Moulineaux mêle des immeubles de bureaux et de logements récents, des résidences des dernières décennies et des quartiers de maisons plus anciennes. Les besoins diffèrent : réseaux modernes en plastique et en multicouche d'un côté, canalisations anciennes en plomb ou en fonte de l'autre.",
        paras: [
          "La commune s'est beaucoup transformée, des anciennes usines de bord de Seine aux quartiers d'affaires du Val de Seine, en passant par les abords du fort et du parc Henri-Barbusse. Les logements neufs ou rénovés côtoient des maisons dont l'installation date d'avant la guerre.",
          "Face à une maison ancienne, un plombier commence par un état des lieux de l'alimentation : matériau des tuyaux, présence de plomb, état du compteur et de la vanne d'arrêt. Face à un immeuble récent, il s'intéresse plutôt aux appareils, aux joints et aux colonnes techniques.",
        ],
      },
      {
        h2: "Que contrôler dans une maison avant l'hiver ?",
        answer:
          "Protégez les canalisations extérieures et les compteurs contre le gel, purgez les robinets de jardin, vérifiez l'isolation des tuyaux en cave ou en garage, et faites contrôler la chaudière ou le chauffe-eau. Un gel qui fait éclater une conduite provoque l'un des dégâts des eaux les plus coûteux.",
        paras: [
          "Dans une maison, la partie la plus exposée est souvent celle qu'on oublie : le robinet extérieur, l'alimentation de la cave, la conduite qui traverse un garage non chauffé. Une simple coque isolante ou un robinet d'arrêt manœuvré à temps peut éviter une mauvaise surprise.",
          "Le chauffe-eau mérite lui aussi un contrôle annuel : on vérifie le groupe de sécurité, l'état de l'évacuation et l'absence de traces de fuite à la base du ballon. L'entretien est discret, mais il prolonge la vie de l'appareil.",
        ],
        list: [
          "Isoler les tuyaux de cave, de garage ou de combles",
          "Purger et protéger les robinets extérieurs",
          "Faire vérifier le chauffe-eau et son groupe de sécurité",
          "Repérer la vanne d'arrêt générale",
        ],
        listTitle: "Les gestes de saison",
      },
      {
        h2: "Faut-il faire remplacer des canalisations anciennes en plomb ?",
        answer:
          "Des canalisations en plomb se rencontrent encore dans de vieilles installations. Leur remplacement est recommandé, car le plomb peut passer dans l'eau. Un plombier identifie le matériau, estime l'étendue des travaux et propose un remplacement par du cuivre ou du multicouche, en commençant par les tronçons accessibles.",
        paras: [
          "Pour savoir si une conduite est en plomb, on observe sa couleur grise, son aspect mat et sa souplesse : on peut la rayer à l'ongle. Photographiez-la avant de nous écrire, avec un objet pour donner l'échelle.",
          "Le remplacement peut se faire par étapes si le budget ou l'organisation l'exigent, en priorisant les parties qui desservent l'eau potable. L'important est d'établir un plan clair, puis de le suivre sans improviser entre deux interventions.",
        ],
      },
    ],
    faq: [
      { q: "Issy-les-Moulineaux est-elle dans votre secteur ?", a: "La commune est voisine du 15e, où se trouve le siège. Les déplacements en banlieue proche sont à confirmer par téléphone au 01 42 51 42 42, avant l'envoi d'un devis." },
      { q: "Intervenez-vous dans les maisons individuelles ?", a: "Les maisons font partie des demandes possibles. Précisez la surface, l'âge approximatif de l'installation et le problème rencontré, avec des photos de la cave, du compteur et de l'appareil concerné." },
      { q: "Comment connaître le matériau de mes canalisations ?", a: "Regardez-les en cave ou sous l'évier : le cuivre est brun-rouge, le plomb gris mat et souple, l'acier galvanisé gris clair et dur, le plastique blanc ou gris. Une photo suffit souvent pour orienter le diagnostic." },
    ],
    ctaTitle: "Un plombier proche d'Issy-les-Moulineaux.",
    ctaText: "Décrivez votre logement, joignez des photos : l'Entreprise Charles Pereira vous répond.",
    related: [PATHS.drain, PATHS.heating, "/plombier-paris-14", "/plombier-boulogne-billancourt"],
  },
  {
    path: "/plombier-boulogne-billancourt",
    slug: "plombier-boulogne-billancourt",
    zone: "Boulogne-Billancourt",
    title: "Plombier Boulogne-Billancourt : fuite, chauffe-eau | Pereira",
    description:
      "Plombier à Boulogne-Billancourt, de l'autre côté de la Seine par rapport au 15e : l'Entreprise Charles Pereira, fuite, sanitaires, chauffe-eau et débouchage.",
    h1: "Plombier à Boulogne-Billancourt, face au 15e",
    kicker: "Plomberie · Boulogne-Billancourt",
    lead: "Entre les bords de Seine et les rues du centre-ville, des immeubles des années 1930 et des maisons de ville à entretenir.",
    brief:
      "Boulogne-Billancourt, dans les Hauts-de-Seine, borde la Seine face au 15e arrondissement. L'Entreprise Charles Pereira peut y intervenir pour la plomberie, la recherche de fuite, le débouchage et les chauffe-eau, dans des immeubles de l'entre-deux-guerres, des ensembles plus récents et des maisons de ville.",
    contactType: "plomberie",
    service: "Plomberie à Boulogne-Billancourt",
    crumb: "Plombier Boulogne-Billancourt",
    approach: "Le plombier vient du boulevard Garibaldi : Boulogne-Billancourt est voisine du 15e, en suivant la Seine vers l'ouest.",
    sections: [
      {
        h2: "Quelles installations trouve-t-on à Boulogne-Billancourt ?",
        answer:
          "La ville réunit des immeubles de l'entre-deux-guerres, souvent dotés d'une architecture soignée, des résidences des années 1960 et 1970, des programmes récents autour de l'île Seguin et des maisons de ville. Les installations sont donc de tous âges, avec des réseaux plus ou moins remaniés selon les copropriétés.",
        paras: [
          "Boulogne-Billancourt a longtemps été une ville d'usines, notamment automobiles, puis a transformé ses friches en quartiers d'habitation, de bureaux et d'espaces verts. Cette histoire explique la diversité du bâti : un même quartier peut associer un immeuble de 1930 et un ensemble livré récemment.",
          "Pour le plombier, c'est un terrain varié. Les immeubles de l'entre-deux-guerres demandent souvent un examen des colonnes et des raccords anciens. Les programmes récents posent plutôt des questions d'accès aux gaines techniques et de compatibilité entre appareils.",
        ],
      },
      {
        h2: "Comment gérer l'humidité d'un rez-de-chaussée ou d'une cave ?",
        answer:
          "Cherchez d'abord l'origine : fuite de canalisation, infiltration extérieure, condensation ou remontée d'humidité. Un plombier vérifie les réseaux d'eau et d'évacuation proches. Si l'eau ne vient pas d'une canalisation, d'autres corps de métier interviennent, mais éliminer la plomberie est la première étape du diagnostic.",
        paras: [
          "À proximité de la Seine, certaines caves et rez-de-chaussée subissent plus d'humidité que d'autres. Il est tentant d'y voir une fatalité, alors qu'un tuyau qui suinte peut en être la cause. Une vérification du compteur, canalisations fermées, permet de trancher rapidement.",
          "Quand un sous-sol comporte une évacuation en dessous du niveau de la rue, un dispositif de relevage peut être nécessaire pour évacuer les eaux usées. Son entretien et son bon fonctionnement sont essentiels : il se contrôle comme un appareil, pas comme un détail.",
        ],
        list: [
          "Compteur relevé avant et après une heure sans consommation",
          "Examen des canalisations de la cave et du rez-de-chaussée",
          "Vérification des évacuations et des regards accessibles",
          "Contrôle d'un éventuel dispositif de relevage",
        ],
        listTitle: "Comment procéder, dans l'ordre",
      },
      {
        h2: "Peut-on demander un devis pour plusieurs petits travaux à la fois ?",
        answer:
          "Oui, et c'est même recommandé : regrouper un robinet qui goutte, un siphon à changer et un chauffe-eau à contrôler évite plusieurs déplacements. Listez tout dans le formulaire, avec des photos. Le devis détaille chaque poste, de sorte que vous puissiez décider de ce que vous faites tout de suite.",
        paras: [
          "Beaucoup de petits défauts de plomberie sont connus de l'occupant depuis longtemps : une chasse d'eau qui coule, un joint qui suinte, un robinet qui grince. On les repousse parce qu'ils ne sont pas urgents, puis ils se transforment en panne au pire moment.",
          "Une visite unique permet de traiter ces points ensemble et de constater l'état général de l'installation. Le plombier signale alors ce qui peut attendre et ce qu'il vaut mieux faire vite, sans dramatiser ni minimiser.",
        ],
      },
    ],
    faq: [
      { q: "Intervenez-vous à Boulogne-Billancourt ?", a: "La ville est voisine du 15e, mais les secteurs couverts et les conditions de déplacement sont à confirmer par téléphone avec l'entreprise avant d'envoyer votre demande." },
      { q: "Pouvez-vous intervenir dans une copropriété de l'entre-deux-guerres ?", a: "Les copropriétés anciennes font partie des demandes possibles. Indiquez l'adresse, l'étage, la présence d'un gardien et la partie concernée : appartement ou partie commune." },
      { q: "Comment vérifier une fuite avec le compteur d'eau ?", a: "Fermez tous les robinets, notez les chiffres du compteur, patientez une heure sans consommer, puis relisez-les. Si le compteur a avancé, il existe une fuite quelque part dans l'installation." },
    ],
    ctaTitle: "Un plombier à Boulogne-Billancourt, depuis le 15e.",
    ctaText: "Décrivez votre demande et joignez des photos : devis gratuit, sans engagement.",
    related: [PATHS.plumbing, PATHS.leak, "/plombier-paris-16", "/plombier-issy-les-moulineaux"],
  },
];
