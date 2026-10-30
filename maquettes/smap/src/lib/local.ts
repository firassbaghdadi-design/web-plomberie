import { PATHS } from "./site";
import type { Page } from "./types";

/**
 * Pages métier × zone : le 12e (secteur de l'entreprise) et les arrondissements et communes voisins.
 * Repères de quartier institutionnels, à faire relire par un habitant. Aucune distance, aucun délai, aucun prix promis.
 * La zone exacte d'intervention est à faire confirmer par l'entreprise.
 */
type Local = Page & { slug: string; zone: string };

const local = (p: Omit<Local, "path">): Local => ({ ...p, path: `/${p.slug}` });

export const localPages: Local[] = [
  local({
    slug: "plombier-paris-12",
    zone: "Paris 12e",
    title: "Plombier Paris 12e : dépannage et installation | SMAP",
    description:
      "Plombier dans le 12e arrondissement de Paris : SMAP intervient de Bercy à Nation pour fuites, sanitaires, canalisations et rénovations, depuis 2007.",
    h1: "Plombier Paris 12e : de Bercy à la place de la Nation",
    kicker: "Plombier · Paris 12e",
    lead: "Bercy, Gare de Lyon, Daumesnil, Reuilly, Picpus, Nation : le 12e est le secteur de l'entreprise, celui où elle est installée.",
    brief:
      "Pour un plombier à Paris 12e, SMAP est installée dans l'arrondissement et intervient de Bercy à la place de la Nation. Créée en 2007, l'entreprise répare les fuites, remplace la robinetterie et les appareils sanitaires, reprend les canalisations et conduit la rénovation de salles de bains, pour les particuliers comme pour les copropriétés.",
    contactType: "plomberie",
    service: "Plombier à Paris 12e",
    crumb: "Plombier Paris 12e",
    photo: "facade",
    photo2: "cuivre",
    sections: [
      {
        h2: "Pourquoi choisir un plombier installé dans le 12e ?",
        answer:
          "Parce qu'il connaît les immeubles de l'arrondissement et ne traverse pas Paris pour venir. SMAP travaille depuis le 12e : ses équipes retrouvent d'une rue à l'autre les mêmes matériaux, les mêmes colonnes et les mêmes contraintes d'accès, ce qui accélère le diagnostic dès la première visite.",
        paras: [
          "Le 12e est un arrondissement de contrastes. Autour de l'avenue Daumesnil et du boulevard de Reuilly, des immeubles de rapport en pierre ; vers Picpus et Nation, des immeubles de brique du début du XXe siècle ; à Bercy, des programmes récents installés dans l'ancien quartier des entrepôts de vin. Chaque époque a sa façon de faire passer l'eau.",
          "Un artisan proche, c'est aussi un interlocuteur que l'on retrouve : celui qui a changé votre mitigeur peut revenir le surveiller, et le gardien de l'immeuble voisin sait déjà qui appeler.",
        ],
      },
      {
        h2: "Quelles interventions de plomberie dans le 12e arrondissement ?",
        answer:
          "Les fuites sous un évier ou derrière un mur, les WC qui coulent, les mitigeurs et robinets à remplacer, les canalisations anciennes à reprendre, les appareils sanitaires neufs à installer et les salles de bains à refaire. L'équipe intervient chez les particuliers, dans les commerces et dans les parties communes.",
        paras: [
          "Dans un appartement ancien du quartier de la Gare de Lyon ou de Reuilly, les évacuations traversent parfois plusieurs logements. Un plombier qui connaît ces dispositions sait qu'une trace au plafond du voisin peut venir de trois étages plus haut, et il enquête en conséquence.",
          "Dans les passages et les cours intérieures, souvent étroites, l'accès des matériaux se prépare. Précisez dans votre demande l'étage, la présence d'un ascenseur et le code d'accès.",
        ],
      },
      {
        h2: "Comment organiser un rendez-vous avec le plombier ?",
        answer:
          "Appelez le 01 42 49 20 14 ou remplissez le formulaire en indiquant votre adresse dans le 12e, l'objet de la demande et deux ou trois photos. L'équipe vous recontacte pour fixer un rendez-vous. En cas de fuite active, le téléphone reste le moyen le plus direct.",
        paras: [
          "Pour un commerce de la rue de Charenton ou du marché d'Aligre, indiquez vos horaires d'ouverture : l'intervention peut être placée aux heures où elle dérange le moins.",
        ],
      },
    ],
    faq: [
      { q: "Le plombier SMAP intervient-il dans tout le 12e arrondissement ?", a: "L'entreprise est installée à Paris 12e et travaille dans l'arrondissement, de Bercy à Nation. Indiquez votre adresse dans la demande : l'équipe vous confirme l'intervention et propose un rendez-vous." },
      { q: "Peut-on joindre SMAP pour une fuite ?", a: "Le téléphone est le moyen le plus direct : 01 42 49 20 14. Fermez d'abord le robinet d'arrêt, puis décrivez la situation. Aucun délai n'est promis par cette page : l'équipe vous répond selon sa disponibilité." },
      { q: "Faut-il prévenir le syndic avant l'intervention ?", a: "Si la fuite touche une colonne, une descente ou une cave, oui : ces éléments relèvent en général de la copropriété. Pour un appareil de votre appartement, vous pouvez commander l'intervention directement." },
    ],
    ctaTitle: "Un plombier dans votre quartier ?",
    ctaText: "Écrivez à l'équipe du 12e, photos à l'appui.",
    related: [PATHS.plumbing, "/plombier-paris-11", "/plombier-paris-13"],
  }),

  local({
    slug: "renovation-appartement-paris-12",
    zone: "Paris 12e",
    title: "Rénovation d'appartement Paris 12e : salle de bains | SMAP",
    description:
      "Rénovation d'appartement et de salle de bains à Paris 12e : SMAP dessine, chiffre et réalise votre projet avec la plomberie au cœur du chantier.",
    h1: "Rénovation d'appartement à Paris 12e : salle de bains et pièces d'eau",
    kicker: "Rénovation · Paris 12e",
    lead: "Avant le chantier, il y a un plan. Avant le plan, un relevé. SMAP conduit les trois dans le 12e arrondissement.",
    brief:
      "SMAP rénove les appartements du 12e arrondissement de Paris, en particulier les salles de bains et les pièces d'eau. Le projet démarre par un relevé sur place, se précise dans un plan et un devis, puis se réalise avec la plomberie conduite par la même équipe. Demandez un rendez-vous par téléphone ou par le formulaire.",
    contactType: "renovation",
    service: "Rénovation d'appartement et de salle de bains à Paris 12e",
    crumb: "Rénovation Paris 12e",
    photo: "plan",
    photo2: "bains",
    sections: [
      {
        h2: "Pourquoi rénover un appartement du 12e avec une entreprise de plomberie ?",
        answer:
          "Parce que la pièce d'eau commande le reste. Dans un appartement ancien du 12e, la place des colonnes et des évacuations limite l'agencement ; une entreprise qui maîtrise la plomberie dessine un projet réalisable, au lieu d'un plan qu'il faut défaire une fois les murs ouverts.",
        paras: [
          "Les appartements de l'arrondissement vont du deux-pièces d'un immeuble de rapport haussmannien aux logements plus compacts des immeubles de brique du début du XXe siècle. Les salles de bains y sont souvent petites, parfois taillées dans une ancienne cuisine ou un cabinet de toilette.",
          "Optimiser quelques mètres carrés demande de la précision : choix d'une douche à l'italienne, de meubles suspendus, d'un WC suspendu à bâti-support. Chacune de ces options a des conséquences sur la plomberie, à étudier avant d'acheter les appareils.",
        ],
      },
      {
        h2: "Quelles sont les étapes d'une rénovation de salle de bains ?",
        answer:
          "Le relevé des cotes et des réseaux, le plan avec le choix des appareils, le devis, la dépose de l'existant, la reprise de la plomberie, l'étanchéité et le revêtement, la pose des appareils, puis la vérification finale. Chaque étape dépend de la précédente : l'ordre compte.",
        steps: [
          { t: "Relevé", d: "Mesures de la pièce, repérage des arrivées et des évacuations." },
          { t: "Plan", d: "Implantation des appareils, choix des matériaux et des finitions." },
          { t: "Plomberie", d: "Reprise des réseaux avant la fermeture des murs et la pose du revêtement." },
          { t: "Finitions", d: "Pose des appareils, joints, contrôle de l'étanchéité et remise de la pièce." },
        ],
        paras: ["Ces étapes sont celles d'un chantier de salle de bains en général ; le déroulé précis de l'entreprise est à faire confirmer."],
      },
      {
        h2: "Quelles démarches prévoir pour des travaux dans le 12e ?",
        answer:
          "Consultez le règlement de copropriété, informez le syndic et les voisins, vérifiez les horaires de travaux de l'immeuble. Si le projet touche une colonne commune, un mur porteur ou l'aspect extérieur, une autorisation peut être exigée. L'équipe vous aide à poser les bonnes questions avant le chantier.",
        paras: [
          "Pour l'accès, signalez l'étage, la largeur de l'escalier et l'existence d'un ascenseur : cela conditionne la livraison des appareils et l'évacuation des gravats. Dans les cours et passages étroits du faubourg, la logistique est un vrai sujet.",
        ],
      },
    ],
    faq: [
      { q: "Peut-on rénover seulement la salle de bains d'un appartement du 12e ?", a: "Oui. La salle de bains peut être rénovée seule. Décrivez la pièce, envoyez des photos et précisez ce que vous voulez changer : douche, baignoire, meuble, WC. L'équipe fixe ensuite une visite." },
      { q: "SMAP coordonne-t-elle les autres corps d'état ?", a: "La liste exacte des travaux réalisés en propre et de ceux qui sont coordonnés est à confirmer avec l'entreprise lors du premier rendez-vous. Indiquez votre projet complet dans la demande." },
      { q: "Comment obtenir un devis de rénovation ?", a: "Par le formulaire de contact en choisissant « Aménagement et rénovation », ou au 01 42 49 20 14. Joignez des photos de la pièce et, si vous en avez un, un plan à main levée." },
    ],
    ctaTitle: "Votre salle de bains sur le papier d'abord ?",
    ctaText: "Prenez rendez-vous pour un relevé dans le 12e.",
    related: [PATHS.renovation, "/plombier-paris-12", "/plombier-saint-mande"],
  }),

  local({
    slug: "plombier-paris-11",
    zone: "Paris 11e",
    title: "Plombier Paris 11e : Bastille, Oberkampf, Nation | SMAP",
    description:
      "Plombier dans le 11e arrondissement : SMAP, installée à Paris 12e, intervient à Bastille, Oberkampf et Charonne pour fuites, sanitaires et rénovations.",
    h1: "Plombier Paris 11e : Bastille, Oberkampf et faubourg Saint-Antoine",
    kicker: "Plombier · Paris 11e",
    lead: "Le 11e touche le 12e par la rue du Faubourg-Saint-Antoine : un voisin direct de l'atelier de SMAP.",
    brief:
      "SMAP, installée à Paris 12e, intervient dans le 11e arrondissement voisin, de Bastille à Charonne en passant par Oberkampf et Voltaire. L'équipe répare les fuites, installe le sanitaire et la robinetterie, reprend les canalisations et rénove les salles de bains des appartements et des locaux du quartier. Précisez votre adresse dans la demande.",
    contactType: "plomberie",
    service: "Plombier à Paris 11e",
    crumb: "Plombier Paris 11e",
    photo: "renovation",
    photo2: "facade",
    sections: [
      {
        h2: "Pourquoi un plombier du 12e pour le 11e arrondissement ?",
        answer:
          "Les deux arrondissements se touchent le long du faubourg Saint-Antoine et partagent le même bâti : immeubles anciens, cours intérieures, anciens ateliers. Un plombier installé dans le 12e travaille déjà dans ce type de bâtiments et n'a que quelques stations de métro à parcourir.",
        paras: [
          "Le 11e est l'un des arrondissements les plus denses de Paris. On y trouve des immeubles de rapport, des cours d'anciens ateliers de menuisiers et d'ébénistes du faubourg, des passages couverts et des copropriétés aux parties communes serrées.",
          "Dans ces cours, les canalisations ont été modifiées au fil des décennies. Remonter à la source d'une fuite demande de lire plusieurs strates de travaux successifs, un exercice où l'habitude du quartier aide.",
        ],
      },
      {
        h2: "Quels problèmes de plomberie dans les immeubles du 11e ?",
        answer:
          "Des fuites qui traversent les planchers entre logements voisins, des évacuations anciennes mal pentées, des robinets d'arrêt grippés, des canalisations encastrées difficiles à localiser. Dans les anciens ateliers transformés en logements, les alimentations d'eau ont parfois été prolongées plusieurs fois.",
        paras: [
          "Pour les locaux commerçants des rues animées autour d'Oberkampf et de la rue de la Roquette, la continuité d'activité compte : précisez vos horaires, l'équipe adapte le rendez-vous.",
          "En copropriété, la limite entre ce qui est à vous et ce qui est au syndic mérite d'être posée dès le premier appel. L'entreprise travaille aussi pour des copropriétés et sait faire cette distinction.",
        ],
      },
      {
        h2: "Comment demander une intervention dans le 11e ?",
        answer:
          "Par téléphone au 01 42 49 20 14, ou avec le formulaire en précisant votre adresse dans le 11e, l'étage, le code d'accès et la nature du problème. Joignez des photos. L'équipe confirme l'intervention et convient d'un rendez-vous, sans promesse de délai avant d'avoir vu la demande.",
      },
    ],
    faq: [
      { q: "SMAP se déplace-t-elle dans le 11e arrondissement ?", a: "Oui, le 11e est voisin de son secteur. Indiquez votre adresse précise dans la demande ; l'équipe confirme l'intervention et fixe le rendez-vous. La zone exacte est à confirmer avec l'entreprise." },
      { q: "Peut-on faire rénover une salle de bains dans le 11e ?", a: "Oui. SMAP conduit aussi l'aménagement et la rénovation de pièces d'eau. Décrivez votre projet, ajoutez des photos et choisissez « Aménagement et rénovation » dans le formulaire." },
      { q: "Les commerces du 11e peuvent-ils faire appel à SMAP ?", a: "L'entreprise travaille pour des professionnels. Précisez l'activité, les horaires d'ouverture et l'accès pour que l'intervention gêne le moins possible la clientèle." },
    ],
    ctaTitle: "Une fuite côté Bastille ?",
    ctaText: "Appelez ou écrivez à l'équipe voisine du 12e.",
    related: [PATHS.plumbing, "/plombier-paris-12", "/plombier-paris-20"],
  }),

  local({
    slug: "plombier-paris-13",
    zone: "Paris 13e",
    title: "Plombier Paris 13e : Place d'Italie, Gobelins | SMAP",
    description:
      "Plombier dans le 13e arrondissement : SMAP, voisine du 12e, intervient à Place d'Italie, Gobelins et Bibliothèque pour fuites, sanitaires et rénovations.",
    h1: "Plombier Paris 13e : Place d'Italie, Gobelins et Bibliothèque",
    kicker: "Plombier · Paris 13e",
    lead: "De l'autre côté de la Seine, le 13e partage avec le 12e un même secteur de Paris : celui que traverse la ligne 6 du métro.",
    brief:
      "SMAP, installée à Paris 12e, intervient aussi dans le 13e arrondissement, de la place d'Italie à la Bibliothèque François-Mitterrand en passant par Gobelins. L'équipe répare les fuites, remplace la robinetterie et les sanitaires, reprend les canalisations et rénove les salles de bains des appartements et des copropriétés. Indiquez votre adresse dans la demande.",
    contactType: "plomberie",
    service: "Plombier à Paris 13e",
    crumb: "Plombier Paris 13e",
    photo: "chantier",
    photo2: "cuivre",
    sections: [
      {
        h2: "Quels bâtiments du 13e demandent un plombier ?",
        answer:
          "Tous les types : petits immeubles anciens de la Butte-aux-Cailles et des Gobelins, immeubles des années 1930, grands ensembles et tours des années 1960 et 1970 autour de la place d'Italie, programmes récents près de la Bibliothèque. Chaque époque a ses réseaux, ses colonnes et ses points faibles.",
        paras: [
          "Le 13e a été largement reconstruit au XXe siècle. Les tours et les barres comportent de longues colonnes communes, où une intervention touche beaucoup de logements à la fois : mieux vaut en parler au syndic avant de commander des travaux.",
          "À l'inverse, les rues basses de la Butte-aux-Cailles gardent de petites maisons et des immeubles bas, avec des canalisations anciennes que l'on reprend morceau par morceau.",
        ],
      },
      {
        h2: "Comment SMAP travaille-t-elle en copropriété dans le 13e ?",
        answer:
          "En demandant d'abord qui décide : l'occupant pour son logement, le syndic pour les parties communes. L'équipe repère l'origine d'un désordre, signale ce qui relève de la copropriété et chiffre ce qui relève de vous. Elle intervient aussi à la demande de syndics et de gestionnaires.",
        paras: [
          "Pour les résidences de grande taille, indiquez le bâtiment, l'escalier et l'étage, ainsi que le gardien à prévenir. Ces détails évitent de longues recherches le jour du rendez-vous.",
        ],
      },
      {
        h2: "Peut-on rénover une salle de bains dans le 13e avec SMAP ?",
        answer:
          "Oui. L'entreprise réalise l'aménagement et la rénovation de salles de bains et de pièces d'eau. Le projet commence par un relevé sur place, se poursuit par un plan et un devis, puis par le chantier. Décrivez votre souhait et joignez des photos de la pièce actuelle.",
        paras: [
          "Dans les appartements des tours, les gaines techniques sont fixes : on rénove à l'intérieur de ce cadre. Dans les immeubles anciens, on dispose de plus de liberté, mais il faut composer avec des murs irréguliers. Dans les deux cas, le relevé fait la différence.",
        ],
      },
    ],
    faq: [
      { q: "SMAP intervient-elle dans le 13e arrondissement ?", a: "Oui, le 13e fait partie des quartiers voisins de son secteur. Indiquez votre adresse dans la demande ; l'équipe confirme l'intervention. La zone exacte d'intervention est à confirmer avec l'entreprise." },
      { q: "Peut-on joindre SMAP pour un immeuble en copropriété ?", a: "Oui. Le syndic ou le conseil syndical peut utiliser le formulaire en choisissant « Copropriété, syndic ou professionnel » et en précisant l'adresse, la partie commune et la personne à contacter." },
      { q: "Quelles photos joindre à une demande ?", a: "L'appareil ou la fuite en gros plan, puis une vue d'ensemble de la pièce. Une photo du compteur d'eau ou du robinet d'arrêt aide aussi. Quatre photos au maximum peuvent être jointes au formulaire." },
    ],
    ctaTitle: "Une intervention côté Gobelins ?",
    ctaText: "Demandez un rendez-vous à l'équipe de SMAP.",
    related: [PATHS.plumbing, "/plombier-paris-12", "/plombier-charenton-le-pont"],
  }),

  local({
    slug: "plombier-paris-20",
    zone: "Paris 20e",
    title: "Plombier Paris 20e : Nation, Charonne, Belleville | SMAP",
    description:
      "Plombier dans le 20e arrondissement : SMAP, installée à Paris 12e, intervient à Nation, Charonne et Ménilmontant pour fuites, sanitaires et rénovations.",
    h1: "Plombier Paris 20e : Nation, Charonne et Ménilmontant",
    kicker: "Plombier · Paris 20e",
    lead: "La place de la Nation est à la frontière du 12e et du 20e : l'atelier de SMAP est tout près.",
    brief:
      "SMAP, installée à Paris 12e, intervient dans le 20e arrondissement voisin, autour de Nation, de Charonne, de Ménilmontant et de Gambetta. L'équipe répare les fuites, remplace la robinetterie et les sanitaires, reprend les canalisations et rénove les salles de bains. Pour être sûr de l'intervention, indiquez votre adresse précise dans la demande.",
    contactType: "plomberie",
    service: "Plombier à Paris 20e",
    crumb: "Plombier Paris 20e",
    photo: "bains2",
    photo2: "renovation",
    sections: [
      {
        h2: "Que change le relief du 20e pour un plombier ?",
        answer:
          "Le 20e est bâti sur les pentes de Belleville et de Ménilmontant, et la pression d'eau, l'étagement des immeubles et l'accès varient d'une rue à l'autre. Un plombier qui connaît le secteur anticipe ces contraintes : escaliers, cours en contrebas, immeubles hauts accolés à de petites maisons.",
        paras: [
          "Le quartier mêle des immeubles populaires anciens, des maisons de faubourg, des ensembles de logements construits après-guerre et des ateliers transformés en logements. Les canalisations y ont été retouchées plusieurs fois, ce qui demande une lecture attentive avant toute reprise.",
          "Autour de la place de la Nation et de la rue des Pyrénées, les immeubles plus récents côtoient des rues anciennes : la variété du bâti est la règle.",
        ],
      },
      {
        h2: "Quelles interventions SMAP réalise-t-elle dans le 20e ?",
        answer:
          "Les fuites et dépannages, le remplacement de robinetterie et d'appareils sanitaires, la reprise de canalisations, ainsi que l'aménagement et la rénovation de salles de bains. Pour une maison de faubourg comme pour un appartement, l'équipe commence par un échange et, si nécessaire, une visite.",
        paras: [
          "Dans les petites maisons du haut du quartier, la plomberie dépend parfois d'un seul branchement ancien : un projet de salle de bains à l'étage suppose alors de repenser l'alimentation et l'évacuation.",
        ],
      },
      {
        h2: "Comment prendre rendez-vous depuis le 20e ?",
        answer:
          "Par téléphone au 01 42 49 20 14 ou par le formulaire, en précisant votre adresse, l'étage et le code d'accès, avec quelques photos. L'équipe vous recontacte pour proposer un rendez-vous. Pour une fuite en cours, appelez plutôt et fermez le robinet d'arrêt en attendant.",
      },
    ],
    faq: [
      { q: "SMAP travaille-t-elle dans le 20e arrondissement ?", a: "Oui, le 20e est voisin de son secteur. Précisez l'adresse dans la demande : l'équipe confirme l'intervention. La zone exacte d'intervention est à confirmer avec l'entreprise." },
      { q: "Une maison ancienne du 20e peut-elle être rénovée ?", a: "Oui. Une maison ancienne demande un relevé soigné des réseaux existants. Décrivez le projet, joignez des photos et demandez un rendez-vous : l'équipe prépare un plan et un devis." },
      { q: "Quel est le moyen le plus rapide de joindre l'entreprise ?", a: "Le téléphone, au 01 42 49 20 14. Par e-mail : smap.gros@orange.fr. Le formulaire de contact permet d'ajouter des photos et de choisir le type de demande." },
    ],
    ctaTitle: "Une intervention côté Charonne ?",
    ctaText: "Écrivez à l'équipe de SMAP, à deux pas de Nation.",
    related: [PATHS.plumbing, "/plombier-paris-11", "/plombier-paris-12"],
  }),

  local({
    slug: "plombier-saint-mande",
    zone: "Saint-Mandé",
    title: "Plombier à Saint-Mandé (94160) : fuite, sanitaire | SMAP",
    description:
      "Plombier à Saint-Mandé, aux portes du 12e : SMAP intervient pour fuites, sanitaires, canalisations et rénovation de salle de bains en appartement ou en maison.",
    h1: "Plombier à Saint-Mandé : aux portes du bois de Vincennes",
    kicker: "Plombier · Saint-Mandé",
    lead: "Saint-Mandé touche le 12e arrondissement par le cours de Vincennes et le bois : une commune voisine de l'atelier de SMAP.",
    brief:
      "SMAP, installée à Paris 12e, intervient à Saint-Mandé (94160), commune limitrophe de l'arrondissement. L'équipe répare les fuites, remplace la robinetterie et les appareils sanitaires, reprend les canalisations et rénove les salles de bains des appartements et des maisons. Indiquez votre adresse à Saint-Mandé dans la demande.",
    contactType: "plomberie",
    service: "Plombier à Saint-Mandé",
    crumb: "Plombier Saint-Mandé",
    photo: "facade",
    photo2: "bains",
    sections: [
      {
        h2: "Pourquoi SMAP intervient-elle à Saint-Mandé ?",
        answer:
          "Parce que la commune est limitrophe du 12e arrondissement, où l'entreprise est installée. Saint-Mandé se rejoint par le cours de Vincennes ou l'avenue du Général-de-Gaulle : l'équipe peut s'y rendre sans traverser Paris, ce qui facilite les rendez-vous et les retours sur un chantier.",
        paras: [
          "Saint-Mandé est une petite commune du Val-de-Marne, dense et résidentielle, en bordure du bois de Vincennes. On y trouve des immeubles de rapport du début du XXe siècle, des petits immeubles plus récents et des maisons dans les rues calmes.",
          "Cette variété de bâtiments donne des plomberies très différentes : colonnes communes dans les immeubles, branchements individuels dans les maisons.",
        ],
      },
      {
        h2: "Quels travaux dans les maisons et appartements de Saint-Mandé ?",
        answer:
          "Réparation de fuites, remplacement de robinetterie et de sanitaires, reprise d'alimentations et d'évacuations anciennes, création ou rénovation d'une salle de bains. Dans une maison, on regarde aussi l'arrivée d'eau, le compteur et l'état des canalisations enterrées ou en sous-sol.",
        paras: [
          "Une maison de la commune a souvent connu plusieurs agrandissements : une salle de bains ajoutée, une cuisine déplacée. La plomberie suit ces ajouts, parfois de façon peu logique, et un relevé permet de la remettre au clair avant de rénover.",
        ],
      },
      {
        h2: "Comment demander un devis à Saint-Mandé ?",
        answer:
          "Utilisez le formulaire de contact en précisant que le lieu est à Saint-Mandé, avec l'adresse, le type de logement, une description du besoin et quelques photos. Vous pouvez aussi appeler le 01 42 49 20 14. L'équipe vous recontacte pour confirmer l'intervention et fixer un rendez-vous.",
      },
    ],
    faq: [
      { q: "SMAP intervient-elle à Saint-Mandé, dans le Val-de-Marne ?", a: "Saint-Mandé est limitrophe du 12e arrondissement. Indiquez votre adresse dans la demande ; l'équipe confirme l'intervention. La zone exacte d'intervention est à confirmer avec l'entreprise." },
      { q: "Peut-on rénover une salle de bains dans une maison à Saint-Mandé ?", a: "Oui. Décrivez la pièce, joignez des photos et demandez un rendez-vous : un relevé sur place permet de dessiner le projet, de chiffrer les travaux et de planifier le chantier." },
      { q: "Comment joindre l'entreprise ?", a: "Au 01 42 49 20 14 ou à smap.gros@orange.fr. Le formulaire de contact accepte jusqu'à quatre photos et le choix du type de demande." },
    ],
    ctaTitle: "Un projet côté Vincennes ?",
    ctaText: "Parlez-en à l'équipe voisine de SMAP.",
    related: [PATHS.plumbing, "/plombier-paris-12", "/renovation-appartement-paris-12"],
  }),

  local({
    slug: "plombier-charenton-le-pont",
    zone: "Charenton-le-Pont",
    title: "Plombier à Charenton-le-Pont (94220) : sanitaire | SMAP",
    description:
      "Plombier à Charenton-le-Pont, aux portes de Bercy : SMAP intervient pour fuites, sanitaires, canalisations, rénovation de salle de bains et maintenance.",
    h1: "Plombier à Charenton-le-Pont : au confluent de la Seine et de la Marne",
    kicker: "Plombier · Charenton-le-Pont",
    lead: "Charenton-le-Pont commence là où le 12e s'arrête, au-delà de Bercy : une commune voisine, accessible sans traverser Paris.",
    brief:
      "SMAP, installée à Paris 12e, intervient à Charenton-le-Pont (94220), commune limitrophe de l'arrondissement vers Bercy. L'équipe répare les fuites, installe le sanitaire et la robinetterie, reprend les canalisations, rénove les salles de bains et assure la maintenance des installations. Indiquez votre adresse à Charenton-le-Pont dans la demande.",
    contactType: "plomberie",
    service: "Plombier à Charenton-le-Pont",
    crumb: "Plombier Charenton-le-Pont",
    photo: "cuivre",
    photo2: "chantier",
    sections: [
      {
        h2: "Pourquoi SMAP intervient-elle à Charenton-le-Pont ?",
        answer:
          "Parce que la commune est limitrophe du 12e arrondissement, côté Bercy. Entre les quais de Seine et le pont de Charenton, l'équipe peut rejoindre un chantier rapidement, sans traverser Paris. Cette proximité facilite les visites de relevé, les rendez-vous de chantier et les retours après travaux.",
        paras: [
          "Charenton-le-Pont s'étend entre la Seine et la Marne, le long de la lisière du bois de Vincennes. La ville mêle immeubles anciens près du centre, résidences récentes, copropriétés des années 1960 et 1970 et quartiers pavillonnaires.",
          "Chaque type de bâtiment appelle un autre regard sur la plomberie : colonnes communes dans les grandes résidences, branchements individuels dans les pavillons.",
        ],
      },
      {
        h2: "Quelle maintenance pour les immeubles et commerces de la commune ?",
        answer:
          "Un contrôle régulier des organes de coupure, des flexibles, des évacuations et des parties communes, avec réparation des petits défauts avant qu'ils ne causent des dégâts. Les copropriétés et les commerces de la commune peuvent en demander une, selon un périmètre défini ensemble lors d'une visite.",
        paras: [
          "Pour une copropriété, la demande passe par le syndic ou le conseil syndical, avec l'adresse, le bâtiment et la personne à contacter sur place. Pour un commerce, précisez les horaires d'ouverture.",
        ],
      },
      {
        h2: "Comment être rappelé par l'entreprise depuis Charenton-le-Pont ?",
        answer:
          "Remplissez le formulaire en indiquant que le lieu est à Charenton-le-Pont, avec l'adresse, le type de demande et quelques photos, ou appelez le 01 42 49 20 14. L'équipe vous recontacte pour confirmer l'intervention et convenir d'un rendez-vous, sans engagement de délai avant d'avoir lu votre demande.",
      },
    ],
    faq: [
      { q: "SMAP se déplace-t-elle à Charenton-le-Pont ?", a: "Charenton-le-Pont est limitrophe du 12e arrondissement. Indiquez votre adresse dans la demande ; l'équipe confirme l'intervention. La zone exacte d'intervention est à confirmer avec l'entreprise." },
      { q: "SMAP assure-t-elle la rénovation de salles de bains à Charenton-le-Pont ?", a: "Oui, l'aménagement et la rénovation font partie des activités de l'entreprise. Joignez des photos de la pièce et décrivez votre projet pour obtenir une visite de relevé." },
      { q: "Quel est le numéro de téléphone de l'entreprise ?", a: "Le 01 42 49 20 14. Le courriel est smap.gros@orange.fr. Le formulaire de contact du site permet aussi de joindre des photos." },
    ],
    ctaTitle: "Une intervention côté Bercy ?",
    ctaText: "Prenez rendez-vous avec l'équipe de SMAP.",
    related: [PATHS.maintenance, "/plombier-paris-12", "/plombier-paris-13"],
  }),
];
