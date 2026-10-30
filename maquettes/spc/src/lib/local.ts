import { PATHS } from "./site";
import type { Page } from "./types";

/**
 * Pages métier × zone autour du 12e : plombier et couvreur dans le 11e, le 20e, à Vincennes et à Saint-Mandé
 * (le site actuel cite Saint-Mandé et « les alentours »). Textes tous différents ; repères de quartier généraux,
 * à faire relire. Aucun délai d'intervention promis.
 */
export const localPages: Page[] = [
  {
    path: "/plombier-paris-11",
    zone: "Paris 11e",
    title: "Plombier Paris 11e : immeubles, fuites, dépannage | SPC",
    description:
      "Plombier pour le 11e arrondissement, depuis le 12e voisin : plomberie d'immeuble, recherche de fuite, sanitaires et dépannage de 6 h à minuit. Devis détaillé.",
    h1: "Plombier à Paris 11e, depuis le 12e voisin",
    kicker: "Plomberie · Paris 11e",
    lead: "Faubourg Saint-Antoine, Charonne, Voltaire : des immeubles de rapport et d'anciens ateliers, dont la plomberie a connu toutes les époques.",
    brief:
      "Plombier à Paris 11e, SPC intervient depuis son bureau du 12e, de l'autre côté de la place de la Nation. L'entreprise y apporte son métier d'origine, la plomberie d'immeuble pour les syndics, ainsi que les raccordements, la rénovation de sanitaires et le dépannage de 6 h à minuit pour les particuliers.",
    contactType: "plomberie",
    service: "Plomberie",
    crumb: "Plombier Paris 11e",
    photo: "plomberie",
    photoIndex: 1,
    caption: "Intervention de plomberie de l'entreprise SPC",
    sections: [
      {
        h2: "Quelles particularités pour la plomberie d'un immeuble du 11e ?",
        answer:
          "Le 11e mêle immeubles de rapport du XIXe siècle et anciens ateliers transformés en logements. Les réseaux y ont été prolongés, déviés, raccordés au fil des usages. Avant de réparer, le plombier doit retrouver le trajet réel de l'eau, de la colonne commune jusqu'au logement concerné.",
        paras: [
          "Dans une cour d'artisans reconvertie en lofts, une même évacuation peut desservir plusieurs lots créés à des époques différentes. Une fuite apparente au rez-de-chaussée a parfois son origine deux étages plus haut, dans un raccord ajouté lors d'une transformation.",
          "C'est précisément l'expérience que SPC a construite depuis 1965 en travaillant pour les syndicats d'immeubles : comprendre un réseau commun avant d'y toucher, et proposer au syndic des travaux hiérarchisés plutôt qu'une succession de réparations.",
        ],
      },
      {
        h2: "Comment se déroule un dépannage de plomberie dans le 11e ?",
        answer:
          "Vous appelez le 01 43 43 35 46 en décrivant la situation : fuite, engorgement, absence d'eau chaude. Le plombier vient avec le matériel adapté, sécurise l'installation, puis répare ou vous propose un devis si des travaux plus importants s'imposent. Le dépannage est annoncé de 6 h à minuit, tous les jours.",
        steps: [
          { t: "Appel", d: "Adresse, étage, code d'accès, nature du problème ; une photo envoyée par message aide beaucoup." },
          { t: "Mise en sécurité", d: "Coupure de l'eau concernée, protection du logement et des voisins du dessous." },
          { t: "Réparation", d: "Remplacement de la pièce en cause ou réparation provisoire si une pièce doit être commandée." },
          { t: "Compte rendu", d: "Ce qui a été fait, et ce qui reste à prévoir, pour vous ou pour le syndic." },
        ],
      },
    ],
    faq: [
      {
        q: "SPC se déplace-t-elle vraiment dans le 11e ?",
        a: "Oui : le 11e touche le 12e à la place de la Nation et le long du faubourg Saint-Antoine. Le site actuel de l'entreprise indique qu'elle intervient dans le 12e, à Saint-Mandé et aux alentours.",
      },
      {
        q: "Un syndic du 11e peut-il confier l'entretien de ses réseaux à SPC ?",
        a: "Oui, l'entreprise propose des contrats d'entretien des réseaux communs, son métier d'origine. L'expertise initiale permet de dresser un état des lieux et de planifier les travaux.",
      },
      {
        q: "Peut-on obtenir un devis par photos ?",
        a: "Une première estimation, parfois ; un devis précis, après une visite. Les photos jointes au formulaire de contact permettent au plombier de préparer cette visite et de venir avec le bon matériel.",
      },
    ],
    ctaTitle: "Une fuite ou un projet dans le 11e ?",
    ctaText: "Décrivez-nous la situation : SPC vous rappelle depuis le 12e.",
    related: [PATHS.plumbing, "/couvreur-paris-11", "/plombier-paris-20"],
  },
  {
    path: "/couvreur-paris-11",
    zone: "Paris 11e",
    title: "Couvreur Paris 11e : zinc, gouttières, accès sur corde | SPC",
    description:
      "Couvreur pour le 11e arrondissement : rénovation de toiture en zinc, gouttières et chéneaux, fenêtres de toit, démoussage et travaux sur corde. Devis détaillé.",
    h1: "Couvreur à Paris 11e, zinc et travaux sur corde",
    kicker: "Couverture · Paris 11e",
    lead: "Toits de zinc, verrières d'anciens ateliers, courettes étroites : dans le 11e, la couverture demande souvent de passer par la corde.",
    brief:
      "Couvreur à Paris 11e, SPC rénove et entretient les toitures depuis son bureau du 12e voisin : zinc, gouttières et chéneaux, fenêtres de toit, démoussage. Son équipe de cordistes intervient là où les cours étroites et les verrières d'anciens ateliers rendent un échafaudage difficile ou inutilement coûteux.",
    contactType: "couverture",
    service: "Couverture",
    crumb: "Couvreur Paris 11e",
    photo: "couverture",
    photoIndex: 1,
    caption: "Chantier de couverture de l'entreprise SPC",
    sections: [
      {
        h2: "Pourquoi les toits du 11e posent-ils des problèmes d'accès ?",
        answer:
          "Parce que l'arrondissement est dense : immeubles mitoyens, passages et cours d'artisans, verrières posées sur d'anciens ateliers. Monter un échafaudage y est souvent long et encombrant. Les cordistes de SPC atteignent la gouttière, le solin ou le chéneau directement, en limitant la gêne pour les habitants.",
        paras: [
          "Le travail sur corde n'est pas un pis-aller : c'est une technique à part entière, encadrée, qui demande une formation spécifique. SPC a formé une équipe professionnelle aux travaux sur corde lorsqu'elle s'est ouverte à la couverture, en 2010.",
          "Pour une copropriété, la différence se voit sur le devis et sur le calendrier : pas de location d'échafaudage pendant des semaines, une intervention ciblée, et une cour qui reste praticable.",
        ],
      },
      {
        h2: "Quels signes doivent alerter sur une toiture en zinc ?",
        answer:
          "Une tache qui s'étend au plafond du dernier étage, une gouttière qui déborde à chaque averse, des traînées sur la façade sous le chéneau, une feuille de zinc soulevée par le vent. Le zinc vieillit lentement mais ses soudures et ses fixations, elles, fatiguent : mieux vaut les contrôler avant l'hiver.",
        list: [
          "Infiltration ou auréole au dernier étage",
          "Gouttière ou chéneau qui déborde",
          "Mousses et dépôts sur les pentes",
          "Joints, solins ou abergements décollés",
        ],
      },
    ],
    faq: [
      {
        q: "Faites-vous l'entretien annuel des gouttières dans le 11e ?",
        a: "SPC assure l'entretien des toitures et de leurs accessoires, dont la zinguerie. Un nettoyage régulier des chéneaux et des descentes évite la plupart des débordements et des infiltrations en façade.",
      },
      {
        q: "Pouvez-vous remplacer une fenêtre de toit dans un appartement sous les combles ?",
        a: "Oui, l'installation de fenêtres de toit fait partie des accessoires de toiture que posent les couvreurs de l'entreprise, avec l'isolation des combles. L'accord du syndic est généralement nécessaire.",
      },
      {
        q: "Le 11e est-il dans votre secteur habituel ?",
        a: "Oui, il est limitrophe du 12e, où se trouve le bureau de l'entreprise, avenue du Général-Michel-Bizot.",
      },
    ],
    ctaTitle: "Une gouttière qui déborde, un toit qui fuit ?",
    ctaText: "Indiquez l'adresse et ce que vous voyez : SPC prépare l'expertise.",
    related: [PATHS.roofing, "/plombier-paris-11", "/couvreur-paris-20"],
  },
  {
    path: "/plombier-paris-20",
    zone: "Paris 20e",
    title: "Plombier Paris 20e : copropriétés et particuliers | SPC",
    description:
      "Plombier pour le 20e arrondissement : plomberie de copropriété, rénovation de canalisations, raccordement de sanitaires et dépannage 6 h – minuit. Devis gratuit.",
    h1: "Plombier à Paris 20e, copropriétés et particuliers",
    kicker: "Plomberie · Paris 20e",
    lead: "Des immeubles anciens de Charonne aux ensembles plus récents des portes, le 20e réunit toutes les générations de plomberie.",
    brief:
      "Plombier à Paris 20e, SPC intervient depuis le 12e voisin auprès des copropriétés et des particuliers : rénovation de canalisations, raccordement de sanitaires, entretien des réseaux communs et dépannage de 6 h à minuit. Chaque chantier commence par une expertise et un devis détaillé qui hiérarchise les travaux à prévoir.",
    contactType: "plomberie",
    service: "Plomberie",
    crumb: "Plombier Paris 20e",
    photo: "plomberie",
    photoIndex: 2,
    caption: "Travaux de plomberie de l'entreprise SPC",
    sections: [
      {
        h2: "Comment rénover la plomberie d'une copropriété du 20e ?",
        answer:
          "En commençant par un état des lieux : quelles colonnes, quels matériaux, quelles fuites déjà réparées, quelles évacuations fatiguées. SPC établit ensuite un devis qui hiérarchise les travaux selon leur nécessité et peut les échelonner sur plusieurs exercices, pour que l'assemblée générale vote en connaissance de cause.",
        paras: [
          "Le 20e compte beaucoup d'immeubles d'avant-guerre, où subsistent parfois des canalisations en plomb ou en fonte, mais aussi des ensembles des années soixante et soixante-dix dont les réseaux arrivent à leur tour en fin de vie. Les deux situations ne se traitent pas de la même façon.",
          "Le rôle du plombier est de dire ce qui est urgent, ce qui peut attendre, et ce qui coûtera plus cher si on le reporte. C'est le sens de l'étalonnage des travaux que SPC propose dans ses devis.",
        ],
      },
      {
        h2: "Quels travaux SPC réalise-t-elle chez les particuliers du 20e ?",
        answer:
          "Le raccordement et le remplacement des sanitaires, la rénovation de la plomberie d'une salle de bains ou d'une cuisine, les mises aux normes pour les personnes à mobilité réduite, et le dépannage quand une fuite ou un engorgement ne peut pas attendre le lendemain.",
        list: [
          "Remplacement d'un WC, d'un lavabo ou d'un mitigeur",
          "Rénovation de salle de bains et de cuisine",
          "Mise aux normes PMR",
          "Recherche et réparation de fuite",
        ],
      },
    ],
    faq: [
      {
        q: "Combien coûte une intervention de plomberie dans le 20e ?",
        a: "Le prix dépend de la nature du problème et des pièces à remplacer : SPC établit un devis détaillé avant les travaux. Les tarifs sont à demander directement à l'entreprise.",
      },
      {
        q: "Intervenez-vous dans les immeubles sans ascenseur ?",
        a: "Bien sûr : c'est le cas d'une grande partie des immeubles anciens de l'est parisien. Précisez simplement l'étage et les conditions d'accès lors de votre demande.",
      },
      {
        q: "Le 20e est-il loin de votre bureau ?",
        a: "Non, il touche le 12e par le cours de Vincennes et la porte de Vincennes. Le bureau de SPC est avenue du Général-Michel-Bizot.",
      },
    ],
    ctaTitle: "Un projet de plomberie dans le 20e ?",
    ctaText: "Copropriété ou appartement : décrivez le besoin, SPC vous recontacte.",
    related: [PATHS.plumbing, "/couvreur-paris-20", "/plombier-paris-11"],
  },
  {
    path: "/couvreur-paris-20",
    zone: "Paris 20e",
    title: "Couvreur Paris 20e : toiture, démoussage, zinguerie | SPC",
    description:
      "Couvreur pour le 20e arrondissement : rénovation de toiture tous matériaux, démoussage, zinguerie, fenêtres de toit, isolation des combles, travaux sur corde.",
    h1: "Couvreur à Paris 20e, toitures de tous matériaux",
    kicker: "Couverture · Paris 20e",
    lead: "Zinc, ardoise, tuile, toits-terrasses : sur les hauteurs du 20e, les toitures sont aussi variées que les immeubles.",
    brief:
      "Couvreur à Paris 20e, SPC rénove les toitures de tous matériaux, en partie ou en totalité, et en assure l'entretien et le démoussage. Ses couvreurs reprennent la zinguerie, posent des fenêtres de toit, isolent les combles et interviennent sur corde quand l'accès l'exige, depuis le bureau de l'entreprise dans le 12e.",
    contactType: "couverture",
    service: "Couverture",
    crumb: "Couvreur Paris 20e",
    photo: "couverture",
    photoIndex: 2,
    caption: "Toiture rénovée par l'entreprise SPC",
    sections: [
      {
        h2: "Pourquoi les toitures du 20e sont-elles si variées ?",
        answer:
          "Parce que l'arrondissement s'est construit par couches : maisons de village à Charonne, immeubles de rapport, petits collectifs, ensembles plus récents. On y trouve du zinc, de l'ardoise, de la tuile, des toits-terrasses. SPC travaille tous ces matériaux, ce qui évite de multiplier les intervenants.",
        paras: [
          "Sur une maison de ville, un couvreur peut traiter la toiture entière en une fois. Dans une copropriété, il s'agit plus souvent de reprendre une partie : un versant, une noue, un chéneau, une souche. Le devis détaillé permet de choisir ce qui est fait maintenant et ce qui est programmé.",
        ],
      },
      {
        h2: "Le démoussage d'une toiture est-il vraiment utile ?",
        answer:
          "Oui, dès que la mousse retient l'humidité et soulève les éléments de couverture. Sur les toits peu exposés au soleil, elle s'installe vite, bouche les gouttières et accélère le vieillissement. L'entretien et le démoussage font partie des prestations régulières des couvreurs de SPC.",
        paras: [
          "Le démoussage est aussi l'occasion d'un contrôle complet : état des fixations, des solins, des faîtages et de la zinguerie. Les petits défauts repérés à ce moment-là coûtent beaucoup moins cher à corriger qu'une infiltration découverte au plafond.",
        ],
      },
    ],
    faq: [
      {
        q: "Isolez-vous les combles des maisons du 20e ?",
        a: "Oui, l'isolation des combles fait partie des accessoires de toiture réalisés par l'entreprise, avec la pose de fenêtres de toit et la zinguerie.",
      },
      {
        q: "Travaillez-vous sur les toits-terrasses ?",
        a: "SPC rénove des toitures de tous matériaux ; pour un toit-terrasse, l'expertise préalable détermine l'état de l'étanchéité et les travaux à prévoir.",
      },
      {
        q: "Comment demander une expertise de toiture ?",
        a: "Par le formulaire de la page contact, en choisissant « Couverture », ou par téléphone au 01 43 43 35 46. Joignez si possible une photo de la toiture ou du dégât constaté.",
      },
    ],
    ctaTitle: "Une toiture à entretenir ou à rénover dans le 20e ?",
    ctaText: "Envoyez l'adresse et une photo : SPC organise la visite.",
    related: [PATHS.roofing, "/plombier-paris-20", "/couvreur-paris-11"],
  },
  {
    path: "/plombier-vincennes",
    zone: "Vincennes",
    title: "Plombier Vincennes : salle de bains, fuites, dépannage | SPC",
    description:
      "Plombier à Vincennes, depuis le 12e voisin : recherche de fuite, rénovation de salle de bains et de cuisine, plomberie de copropriété et dépannage 6 h – minuit.",
    h1: "Plombier à Vincennes, aux portes du 12e",
    kicker: "Plomberie · Vincennes",
    lead: "De l'autre côté du périphérique, Vincennes est à quelques minutes du bureau de SPC : copropriétés, maisons et appartements.",
    brief:
      "Plombier à Vincennes, SPC intervient depuis son bureau du 12e, juste de l'autre côté de la porte de Vincennes. L'entreprise y réalise la recherche et la réparation de fuites, la rénovation de salles de bains et de cuisines, l'entretien des réseaux de copropriété et le dépannage de 6 h à minuit, tous les jours.",
    contactType: "plomberie",
    service: "Plomberie",
    crumb: "Plombier Vincennes",
    photo: "particuliers",
    photoIndex: 1,
    caption: "Rénovation de plomberie par l'entreprise SPC",
    sections: [
      {
        h2: "Que faire face à une fuite dans un appartement à Vincennes ?",
        answer:
          "Couper l'eau au robinet d'arrêt du logement, ou au compteur si la fuite ne s'arrête pas, protéger le sol et prévenir le voisin du dessous. Ensuite, appeler un plombier : SPC annonce un dépannage de 6 h à minuit, tous les jours, y compris le week-end et les jours fériés.",
        paras: [
          "Une fois la fuite stoppée, reste à en trouver l'origine : un joint, un flexible, un raccord encastré, une évacuation fendue. Le plombier répare, puis vous indique s'il faut déclarer un dégât des eaux et prévenir le syndic, lorsque la canalisation en cause appartient à la copropriété.",
        ],
      },
      {
        h2: "SPC rénove-t-elle les salles de bains à Vincennes ?",
        answer:
          "Oui. L'entreprise rénove les salles de bains et les cuisines et réalise les mises aux normes pour les personnes à mobilité réduite. Son expérience de la plomberie d'immeuble aide à résoudre la question clé de ces projets : où et comment raccorder les évacuations sans toucher à l'équilibre du réseau commun.",
        list: [
          "Remplacement d'une baignoire par une douche",
          "Déplacement ou création de points d'eau",
          "Raccordement de la cuisine et de l'électroménager",
          "Adaptation pour une personne à mobilité réduite",
        ],
        after: [
          "Chaque projet commence par une visite et un devis détaillé, gratuit, qui décrit les travaux poste par poste.",
        ],
      },
    ],
    faq: [
      {
        q: "Vincennes fait-elle partie de votre secteur ?",
        a: "Oui : la commune touche le 12e arrondissement, où se trouve le bureau de SPC. L'entreprise indique intervenir dans le 12e, à Saint-Mandé et dans les alentours, dont Vincennes.",
      },
      {
        q: "Travaillez-vous pour les copropriétés vincennoises ?",
        a: "Oui, la plomberie d'immeuble pour les syndics est le métier d'origine de l'entreprise, avec des contrats d'entretien des réseaux communs si la copropriété le souhaite.",
      },
      {
        q: "Faut-il être présent pendant l'intervention ?",
        a: "Pour un dépannage, oui, ou une personne de confiance. Pour des travaux programmés, les modalités d'accès se décident au moment du devis.",
      },
    ],
    ctaTitle: "Une fuite ou un projet de salle de bains à Vincennes ?",
    ctaText: "Écrivez-nous ou appelez : SPC est juste de l'autre côté du périphérique.",
    related: [PATHS.plumbing, PATHS.homes, "/couvreur-vincennes", "/plombier-saint-mande"],
  },
  {
    path: "/couvreur-vincennes",
    zone: "Vincennes",
    title: "Couvreur Vincennes : toitures, gouttières, combles | SPC",
    description:
      "Couvreur à Vincennes : rénovation de toiture partielle ou totale, entretien et démoussage, gouttières, fenêtres de toit et isolation des combles. Devis détaillé.",
    h1: "Couvreur à Vincennes, maisons et immeubles",
    kicker: "Couverture · Vincennes",
    lead: "Maisons à toit de tuile ou d'ardoise, immeubles coiffés de zinc : à Vincennes, les toits changent d'une rue à l'autre.",
    brief:
      "Couvreur à Vincennes, SPC rénove les toitures des maisons comme des immeubles, en partie ou en totalité et quel que soit le matériau. Ses couvreurs assurent l'entretien et le démoussage, la zinguerie, la pose de fenêtres de toit et l'isolation des combles, avec une équipe de cordistes pour les accès difficiles.",
    contactType: "couverture",
    service: "Couverture",
    crumb: "Couvreur Vincennes",
    photo: "couverture",
    photoIndex: 3,
    caption: "Chantier de toiture de l'entreprise SPC",
    sections: [
      {
        h2: "Rénovation partielle ou totale : comment choisir pour sa toiture ?",
        answer:
          "Tout dépend de l'état général. Si les désordres sont localisés, une rénovation partielle suffit : un versant, une noue, un faîtage. Si la couverture est usée partout, réparer au coup par coup finit par coûter plus cher. L'expertise qui précède le devis de SPC sert précisément à trancher.",
        paras: [
          "À Vincennes, beaucoup de maisons ont gardé leur couverture d'origine en tuile ou en ardoise, tandis que les immeubles sont plus souvent couverts de zinc. Chaque matériau a sa durée de vie et ses points faibles ; un couvreur qui les pratique tous peut comparer honnêtement les options.",
        ],
      },
      {
        h2: "Faut-il isoler les combles en même temps que la toiture ?",
        answer:
          "C'est souvent le bon moment : quand la couverture est déposée ou que l'on travaille déjà en hauteur, l'isolation des combles se fait dans de meilleures conditions. SPC réalise l'isolation des combles et la pose de fenêtres de toit dans le cadre de ses prestations de couverture.",
        paras: [
          "L'entreprise met en avant sa qualification RGE sur son site ; c'est la mention qui conditionne l'accès à certaines aides publiques à la rénovation énergétique. Sa validité et son périmètre sont à vérifier avec l'entreprise pour chaque projet.",
        ],
      },
    ],
    faq: [
      {
        q: "Intervenez-vous sur les maisons individuelles à Vincennes ?",
        a: "Oui : la couverture de SPC concerne aussi bien les maisons que les immeubles, pour la rénovation, l'entretien, le démoussage et les accessoires de toiture.",
      },
      {
        q: "Une gouttière qui déborde, est-ce grave ?",
        a: "Pas forcément, mais à surveiller : l'eau qui ruisselle sur la façade finit par l'abîmer et peut entrer par les menuiseries. Souvent, un nettoyage ou une reprise de pente suffit.",
      },
      {
        q: "Combien de temps dure une rénovation de toiture ?",
        a: "Cela dépend de la surface, du matériau et de la météo : la durée est précisée dans le devis, après l'expertise, sans promesse faite à l'avance.",
      },
    ],
    ctaTitle: "Un projet de toiture à Vincennes ?",
    ctaText: "Maison ou immeuble : décrivez-nous la toiture, SPC vient l'expertiser.",
    related: [PATHS.roofing, "/plombier-vincennes", "/couvreur-saint-mande"],
  },
  {
    path: "/plombier-saint-mande",
    zone: "Saint-Mandé",
    title: "Plombier Saint-Mandé : immeubles, sanitaires, urgences | SPC",
    description:
      "Plombier à Saint-Mandé, voisin direct du 12e : plomberie d'immeuble, raccordement de sanitaires, assainissement et dépannage de 6 h à minuit. Devis détaillé.",
    h1: "Plombier à Saint-Mandé, voisin du 12e",
    kicker: "Plomberie · Saint-Mandé",
    lead: "Saint-Mandé est la commune que le site de SPC cite en premier parmi ses lieux d'intervention, juste à côté du 12e.",
    brief:
      "Plombier à Saint-Mandé, SPC y intervient depuis son bureau du 12e, à quelques rues de la porte de Saint-Mandé. Copropriétés et particuliers y retrouvent les métiers de l'entreprise : plomberie d'immeuble, raccordement de sanitaires, rénovation de salles de bains, assainissement et dépannage de 6 h à minuit, tous les jours.",
    contactType: "plomberie",
    service: "Plomberie",
    crumb: "Plombier Saint-Mandé",
    photo: "plomberie",
    photoIndex: 3,
    caption: "Intervention de plomberie de l'entreprise SPC",
    sections: [
      {
        h2: "Pourquoi choisir un plombier installé juste à côté de Saint-Mandé ?",
        answer:
          "Pour la proximité, d'abord : moins de trajet, c'est plus de disponibilité pour les urgences et pour les visites de chantier. Ensuite pour la connaissance des immeubles du secteur, construits à la même époque et avec les mêmes réseaux que ceux du 12e, où SPC travaille depuis 1965.",
        paras: [
          "Saint-Mandé compte de nombreuses copropriétés de standing, souvent gérées par des syndics professionnels qui attendent des devis clairs et des comptes rendus précis. C'est le fonctionnement habituel de SPC : expertise, devis détaillé avec hiérarchie des travaux, puis intervention.",
        ],
      },
      {
        h2: "SPC s'occupe-t-elle aussi des évacuations et des sous-sols ?",
        answer:
          "Oui. Depuis 2010, l'entreprise réalise aussi l'assainissement : curage, débouchage, dégorgement et inspection vidéo des canalisations, entretien et remplacement des pompes de relevage. Une même entreprise suit donc le réseau d'eau du logement jusqu'au sous-sol de l'immeuble.",
        list: [
          "Curage et débouchage des canalisations communes",
          "Inspection vidéo avant travaux",
          "Pompes de relevage des caves et parkings",
          "Contrats d'entretien pour les syndics",
        ],
      },
    ],
    faq: [
      {
        q: "Intervenez-vous le dimanche à Saint-Mandé ?",
        a: "Le site de l'entreprise annonce un service de dépannage de 6 h à minuit tous les jours, y compris les week-ends et les jours fériés. Appelez le 01 43 43 35 46.",
      },
      {
        q: "Pouvez-vous rénover une salle de bains à Saint-Mandé ?",
        a: "Oui : rénovation de salle de bains, réfection de cuisine et mise aux normes PMR font partie des prestations de SPC pour les particuliers, sur devis détaillé et gratuit.",
      },
      {
        q: "Qui contacter pour un problème dans les parties communes ?",
        a: "Le syndic de l'immeuble, qui commande les travaux. Vous pouvez lui transmettre les coordonnées de SPC, spécialiste de la plomberie d'immeuble depuis 1965.",
      },
    ],
    ctaTitle: "Un besoin de plombier à Saint-Mandé ?",
    ctaText: "Le bureau de SPC est à quelques minutes : décrivez-nous la situation.",
    related: [PATHS.plumbing, PATHS.drainage, "/couvreur-saint-mande", "/plombier-vincennes"],
  },
  {
    path: "/couvreur-saint-mande",
    zone: "Saint-Mandé",
    title: "Couvreur Saint-Mandé : zinc, balcons en plomb, cordistes | SPC",
    description:
      "Couvreur à Saint-Mandé : toitures en zinc, zinguerie, fenêtres de toit, balcons en plomb haussmanniens et travaux sur corde pour les accès difficiles. Devis.",
    h1: "Couvreur à Saint-Mandé, zinc et balcons en plomb",
    kicker: "Couverture · Saint-Mandé",
    lead: "Façades en pierre, balcons filants, toits de zinc : les immeubles de Saint-Mandé ressemblent à ceux du 12e, et vieillissent de la même façon.",
    brief:
      "Couvreur à Saint-Mandé, SPC rénove et entretient les toitures en zinc et leur zinguerie, pose des fenêtres de toit et rénove les balcons en plomb des immeubles de type haussmannien. Son équipe de cordistes intervient en façade et en toiture sans échafaudage lorsque l'accès le permet, depuis le 12e voisin.",
    contactType: "couverture",
    service: "Couverture",
    crumb: "Couvreur Saint-Mandé",
    photo: "couverture",
    photoIndex: 4,
    caption: "Travaux en hauteur de l'entreprise SPC",
    sections: [
      {
        h2: "Comment rénover un balcon en plomb sur un immeuble ancien ?",
        answer:
          "On dépose l'ancienne feuille de plomb fendue ou décollée, on vérifie la pierre et le support, puis on façonne et on pose un nouveau revêtement en respectant la pente vers l'extérieur et les relevés contre la façade. SPC rénove ces balcons de type haussmannien, souvent en intervenant sur corde.",
        paras: [
          "Un balcon filant mal protégé laisse l'eau s'infiltrer dans la pierre, qui éclate au gel et finit par tomber dans la rue. C'est un sujet de sécurité autant que d'esthétique, que les syndics surveillent de près lors des ravalements.",
          "Le travail sur corde permet souvent de traiter un ou plusieurs balcons sans attendre un ravalement complet ni monter un échafaudage sur toute la façade.",
        ],
      },
      {
        h2: "Quel entretien pour une toiture en zinc à Saint-Mandé ?",
        answer:
          "Un contrôle régulier des chéneaux, des descentes et des soudures, le nettoyage des gouttières, la vérification des abergements autour des cheminées et des fenêtres de toit. Le zinc dure longtemps, mais ses points singuliers demandent de l'attention. SPC assure cet entretien comme la rénovation complète.",
      },
    ],
    faq: [
      {
        q: "Vos cordistes interviennent-ils en façade ?",
        a: "Oui, l'équipe de cordistes de SPC répond aux besoins de chaque construction en accès difficile, en toiture comme sur les balcons et les éléments de façade.",
      },
      {
        q: "Peut-on rénover un seul balcon ?",
        a: "Oui, si la copropriété le décide. L'expertise permet de voir l'état des autres balcons et de proposer, le cas échéant, un programme échelonné.",
      },
      {
        q: "Saint-Mandé est-elle dans votre secteur ?",
        a: "Oui, le site de l'entreprise la cite expressément : SPC intervient sur Saint-Mandé et les alentours, depuis son bureau du 12e.",
      },
    ],
    ctaTitle: "Un balcon, une toiture, une gouttière à Saint-Mandé ?",
    ctaText: "Indiquez l'adresse de l'immeuble : SPC organise l'expertise.",
    related: [PATHS.roofing, "/plombier-saint-mande", "/couvreur-vincennes"],
  },
];
