import { PATHS } from "./site";
import type { Page } from "./types";

/** Accueil : textes fixes de la page d'accueil (le site n'existait pas, tout vient des sources publiques). */
export const home = {
  title: "Plombier Paris 14e depuis 2007 : S. Petit, Jean Moulin",
  description:
    "S. Petit, plombier à Paris 14e depuis 2007 : dépannage, salles de bains, chauffage et gaz. 4,6/5 sur 44 avis Google. 36 avenue Jean Moulin, 01 45 42 42 84.",
  h1: "Plombier à Paris 14e",
  lead: "Une entreprise de quartier, fondée en 2007, avenue Jean Moulin. Dépannage, salles de bains, chauffage et gaz.",
  brief:
    "S. Petit est un plombier installé au 36 avenue Jean Moulin, à Paris 14e, depuis 2007. L'entreprise, de dix à dix-neuf salariés, intervient pour les fuites et le dépannage, les salles de bains et douches, le chauffage et le gaz. Sa fiche Google affiche 4,6 sur 5 pour 44 avis.",
};

export const trades = [
  { path: PATHS.plumbing, n: "01", title: "Plomberie et dépannage", text: "Fuites, canalisations, sanitaires, robinetterie, chauffe-eau : le quotidien d'un immeuble parisien." },
  { path: PATHS.bathroom, n: "02", title: "Salles de bains et douches", text: "Remplacer une baignoire, créer une douche, adapter une pièce d'eau à la mobilité réduite." },
  { path: PATHS.heating, n: "03", title: "Chauffage et gaz", text: "Installations au gaz, chauffe-eau, radiateurs : un travail de professionnel du gaz." },
];

export const homeFaq = [
  {
    q: "Où se trouve S. Petit et comment les joindre ?",
    a: "S. Petit est installé au 36 avenue Jean Moulin, 75014 Paris. Le standard répond au 01 45 42 42 84 du lundi au jeudi de 7 h 30 à 17 h 20, et le vendredi jusqu'à 16 h 20. Vous pouvez aussi envoyer une demande avec photos depuis la page contact.",
  },
  {
    q: "Quels travaux S. Petit réalise-t-il ?",
    a: "La plomberie et le dépannage, les salles de bains et les douches, y compris leur adaptation à la mobilité réduite, le chauffage et les installations au gaz. Pour l'électricité et la peinture d'un chantier, l'entreprise s'appuie, selon un client, sur des artisans partenaires.",
  },
  {
    q: "S. Petit est-il certifié pour le gaz ?",
    a: "Sa fiche Pages Jaunes mentionne la qualification Professionnel du Gaz (PG), signe de qualité des installateurs de systèmes au gaz. L'entreprise est enregistrée sous le code d'activité 43.22A, installation d'eau et de gaz. Demandez le justificatif au moment du devis.",
  },
  {
    q: "Quels moyens de paiement sont acceptés ?",
    a: "La fiche professionnelle indique les espèces, le chèque et le virement bancaire. Les modalités précises, l'acompte éventuel et le délai de règlement figurent sur le devis : lisez-les avant de signer, et posez la question si un point reste flou.",
  },
  {
    q: "Dans quels quartiers S. Petit intervient-il ?",
    a: "Le cœur de l'activité est le 14e arrondissement. Les pages de ce site détaillent aussi les 13e, 15e et 6e arrondissements, ainsi que Montrouge et Gentilly, voisins immédiats. Pour un autre secteur, appelez : on vous dira honnêtement si c'est possible.",
  },
];

export const servicePages: Page[] = [
  {
    path: PATHS.plumbing,
    zone: "Paris 14e",
    title: "Plombier Paris 14e : dépannage et installation | S. Petit",
    description:
      "Plombier à Paris 14e : fuite d'eau, canalisation, sanitaires, chauffe-eau. S. Petit, avenue Jean Moulin, depuis 2007. Contactez-nous au 01 45 42 42 84.",
    h1: "Plombier à Paris 14e : dépannage et installation",
    kicker: "Plomberie · Paris 14e",
    lead: "Fuite, évacuation bouchée, robinetterie ou sanitaires à remplacer : une équipe installée avenue Jean Moulin depuis 2007.",
    brief:
      "À Paris 14e, S. Petit assure la plomberie du quotidien : recherche et réparation de fuites, canalisations, sanitaires, robinetterie et chauffe-eau. L'entreprise est installée au 36 avenue Jean Moulin depuis 2007. Pour une fuite, coupez l'arrivée d'eau puis appelez le 01 45 42 42 84 aux heures d'ouverture.",
    contactType: "plomberie",
    service: "Plomberie et dépannage",
    crumb: "Plombier Paris 14e",
    approach: "L'entreprise est dans la partie sud du 14e, près d'Alésia : pour Plaisance, Pernety ou Montparnasse, on reste dans le quartier.",
    photo: "mains",
    photoPos: "50% 40%",
    caption: "Sous l'évier, un raccord à reprendre",
    sections: [
      {
        h2: "Que faire en cas de fuite d'eau dans un appartement ?",
        answer:
          "Fermez d'abord le robinet d'arrêt, sous l'évier ou au compteur, puis coupez l'électricité si l'eau approche une prise. Épongez, photographiez les dégâts pour l'assurance et appelez un plombier. Ne cherchez pas à réparer une canalisation encastrée vous-même : l'eau suit les gaines et reparaît ailleurs.",
        paras: [
          "Dans un immeuble parisien, une fuite ne reste presque jamais chez celui qui l'a : elle traverse le plancher, tache le plafond du voisin et finit en dossier de sinistre. Plus l'arrivée d'eau est coupée tôt, plus la facture de remise en état baisse. Repérez le robinet d'arrêt général de votre logement avant d'en avoir besoin, et vérifiez qu'il tourne.",
          "Quand le plombier arrive, il remonte le chemin de l'eau : compteur, colonne, branchements, appareils. L'objectif est de trouver la vraie origine et pas seulement la tache visible. C'est là que l'expérience d'une équipe qui connaît les immeubles du quartier fait gagner du temps.",
        ],
      },
      {
        h2: "Quelles interventions de plomberie sont réalisées à Paris 14e ?",
        answer:
          "S. Petit intervient sur les fuites, les canalisations et évacuations, les sanitaires, la robinetterie et les chauffe-eau, ainsi que sur les salles de bains et le gaz. Chaque demande est décrite au téléphone ou par le formulaire, avec des photos si possible, afin de venir avec le bon matériel.",
        list: [
          "Recherche et réparation de fuites sur alimentation et évacuation",
          "Remplacement de robinetterie, mitigeurs, flexibles et siphons",
          "Pose et remplacement de WC, lavabos, éviers et lave-linge raccordés",
          "Chauffe-eau et ballons d'eau chaude : remplacement et raccordement",
          "Reprise de canalisations anciennes en plomb, acier ou cuivre",
        ],
      },
      {
        h2: "Pourquoi les canalisations anciennes posent-elles problème à Paris ?",
        answer:
          "Beaucoup d'immeubles du 14e datent d'avant-guerre, avec des colonnes en fonte, en acier ou en plomb et des raccords vieillis. Ces matériaux s'entartrent, se percent ou suintent aux jonctions. Un diagnostic précis évite de remplacer un tronçon sain ou de laisser un tronçon fragile derrière un mur.",
        paras: [
          "Entre Montparnasse, Alésia et Denfert-Rochereau, on rencontre des immeubles de pierre du XIXe siècle comme des ensembles des années 1930. Chaque époque a sa tuyauterie, ses dimensions, ses habitudes de pose. Intervenir sans connaître ces différences, c'est prendre le risque d'un raccord mal adapté.",
        ],
      },
      {
        h2: "Comment se déroule une intervention chez un particulier ou en copropriété ?",
        answer:
          "Vous décrivez le problème par téléphone ou par le formulaire, avec photos et adresse. Le plombier confirme le créneau, constate sur place, annonce par écrit ce qu'il propose et ce que cela coûte, puis réalise le travail une fois le devis accepté. En copropriété, le syndic ou le gardien est prévenu.",
        paras: [
          "Pour une partie commune, le syndic donne l'ordre de service ; pour une partie privative, c'est l'occupant ou le propriétaire. Si l'intervention touche plusieurs lots, il est utile d'indiquer qui ouvre l'accès à la colonne ou au local technique. Un client cité sur la fiche Pages Jaunes raconte qu'une erreur qu'il avait lui-même provoquée a été reprise sans frais : un détail qui en dit long sur l'état d'esprit.",
        ],
      },
      {
        h2: "Quel est le tarif d'un plombier à Paris 14e ?",
        answer:
          "Aucun tarif n'est publié ici : le prix dépend de l'accès, de l'état des canalisations et du matériel. Le devis écrit annonce le coût avant le début du travail. Comparez ce qu'il comprend, déplacement, main-d'œuvre, fournitures et évacuation des déchets, plutôt que le seul montant.",
        paras: [
          "Un devis sérieux détaille les fournitures, la main-d'œuvre et l'éventuel déplacement. Si le chantier révèle une surprise, par exemple une colonne plus abîmée que prévu, l'entreprise doit vous le dire et vous proposer un avenant avant de poursuivre.",
        ],
      },
    ],
    faq: [
      { q: "Pouvez-vous intervenir le jour même ?", a: "Cela dépend de la charge de l'équipe. Appelez en début de journée au 01 45 42 42 84 : un client a raconté qu'un technicien était venu dans les heures suivant son appel. Aucun délai n'est garanti ici, la réponse se donne au téléphone." },
      { q: "Faut-il être présent pendant la réparation ?", a: "Une personne doit ouvrir et valider le travail. Dans un logement occupé, la présence est vivement conseillée pour montrer le robinet d'arrêt et l'emplacement des appareils. En copropriété, prévenez le gardien ou le syndic pour l'accès aux colonnes et aux caves." },
      { q: "Peut-on joindre des photos à une demande ?", a: "Oui, jusqu'à quatre photos depuis la page contact : la fuite, le compteur, l'appareil à remplacer. Elles permettent de venir avec le bon matériel et d'éviter un second passage. Une photo de l'étiquette d'un chauffe-eau aide aussi à trouver la bonne pièce." },
      { q: "Intervenez-vous pour les copropriétés ?", a: "Oui, pour les parties communes comme pour les logements : colonnes, caves, chaufferies, compteurs. Indiquez dans le formulaire le nom du syndic ou du gardien et la personne qui ouvre l'accès. Le devis est alors adressé au syndic pour validation." },
    ],
    ctaTitle: "Une fuite ou un sanitaire à remplacer à Paris 14e ?",
    ctaText: "Décrivez le problème en deux lignes, joignez une photo : l'équipe de l'avenue Jean Moulin vous répond.",
    related: [PATHS.bathroom, PATHS.heating, "/plombier-paris-13", "/plombier-paris-15"],
  },
  {
    path: PATHS.bathroom,
    zone: "Paris 14e",
    title: "Salle de bains à Paris 14e : douche et rénovation | S. Petit",
    description:
      "Rénovation de salle de bains et de douche à Paris 14e, y compris l'adaptation à la mobilité réduite. S. Petit, plombier depuis 2007. Appelez le 01 45 42 42 84.",
    h1: "Salle de bains à Paris 14e : douche, WC et rénovation",
    kicker: "Salles de bains · Paris 14e",
    lead: "Remplacer une baignoire par une douche, déplacer des sanitaires, adapter une pièce d'eau : du plan jusqu'à la dernière finition.",
    brief:
      "S. Petit rénove les salles de bains et les douches à Paris 14e, du remplacement d'une baignoire à l'adaptation complète d'une pièce d'eau pour une personne à mobilité réduite. La plomberie est assurée par l'entreprise ; l'électricité et la peinture peuvent être confiées à des artisans partenaires. Appelez le 01 45 42 42 84.",
    contactType: "salle-de-bains",
    service: "Rénovation de salle de bains et de douche",
    crumb: "Salle de bains Paris 14e",
    approach: "Pour une salle de bains du 14e, le plus simple est de passer avenue Jean Moulin parler du projet, plans ou photos en main.",
    photo: "bain",
    photoPos: "50% 45%",
    caption: "Une goutte au bec du mitigeur",
    sections: [
      {
        h2: "Comment remplacer une baignoire par une douche à Paris ?",
        answer:
          "Il faut déposer la baignoire, reprendre l'évacuation à la bonne pente, refaire l'étanchéité du sol et des murs, puis poser le receveur et la robinetterie. Dans un immeuble ancien, vérifiez le règlement de copropriété et l'état du plancher avant de commencer : tout se joue sous le receveur.",
        paras: [
          "La hauteur finie d'un receveur dépend de son épaisseur et de la place disponible pour la bonde. Un receveur extra-plat demande une évacuation bien positionnée, une paroi plutôt qu'un rideau et une pente soignée. Un receveur plus épais est plus simple à raccorder mais se franchit plus haut. Ces choix se discutent avant le devis, pas après la pose.",
          "Une règle simple évite les surprises : faites écrire sur le devis la hauteur finie du receveur, le type de paroi ou de rideau prévu et l'emplacement de la bonde. Ce sont les trois points qui se constatent tout de suite une fois la douche posée.",
        ],
      },
      {
        h2: "Peut-on adapter une salle de bains à une personne en fauteuil ?",
        answer:
          "Oui, en supprimant une cloison si besoin, en regroupant douche et toilettes, en déplaçant les appareils et en remettant le sol à niveau. Une cliente a décrit sur Pages Jaunes un tel chantier réalisé pour un fauteuil électrique, avec finitions confiées à des artisans associés. Chaque pièce demande une étude précise.",
        paras: [
          "Les cotes comptent plus que tout : largeur de passage, diamètre de rotation, hauteur de l'assise, emplacement des barres d'appui. Un projet d'accessibilité commence par des mesures et un échange avec la personne concernée, pas par un catalogue.",
        ],
      },
      {
        h2: "Quelles étapes suivent un chantier de salle de bains ?",
        answer:
          "Le chantier suit un ordre logique : dépose et démolition, reprise des alimentations et des évacuations, étanchéité, électricité, carrelage et sols, pose des appareils, peinture, finitions. Chaque étape conditionne la suivante, d'où l'intérêt d'un interlocuteur unique qui coordonne les corps de métier.",
        list: [
          "Visite, mesures et projet décrit sur un devis écrit",
          "Dépose des anciens appareils et protection des parties communes",
          "Alimentations, évacuations et étanchéité",
          "Électricité et peinture, par des artisans partenaires si besoin",
          "Pose des appareils, robinetterie, joints et réception du chantier",
        ],
      },
      {
        h2: "Qui s'occupe de l'électricité et de la peinture ?",
        answer:
          "Selon l'avis d'une cliente, S. Petit confie l'électricité et la peinture d'une salle d'eau à des artisans partenaires et coordonne l'ensemble. Cette organisation évite de multiplier les interlocuteurs. Demandez au moment du devis qui intervient, avec quelles assurances, et qui répond de quoi.",
        paras: [
          "Un chantier de salle de bains mêle eau et électricité : le respect des volumes de sécurité autour de la douche n'est pas négociable. Faites préciser sur le devis qui réalise la mise en conformité, et conservez l'attestation éventuelle.",
        ],
      },
    ],
    faq: [
      { q: "Combien de temps dure une rénovation de salle de bains ?", a: "La durée dépend de la surface, de la démolition et du séchage des étanchéités. Elle se fixe au devis, après visite : aucun délai n'est annoncé ici. Demandez un calendrier écrit par étape, et prévoyez que l'eau sera coupée certains jours." },
      { q: "Faut-il prévenir la copropriété ?", a: "Si le chantier touche une colonne, une évacuation commune ou génère du bruit, oui : informez le syndic et vérifiez le règlement. Un chantier de salle de bains modifie souvent l'évacuation, parfois la structure du plancher, d'où l'intérêt de poser la question tôt." },
      { q: "Peut-on voir des exemples de réalisations ?", a: "Ce site n'en affiche pas encore : l'entreprise n'a pas de photos publiques de chantiers. Demandez-en à l'accueil au 01 45 42 42 84, ou consultez les avis publics sur la fiche Pages Jaunes pour mesurer la satisfaction des clients." },
    ],
    ctaTitle: "Un projet de salle de bains ou de douche à Paris 14e ?",
    ctaText: "Envoyez des photos de la pièce et vos souhaits : on vous rappelle pour fixer une visite.",
    related: [PATHS.plumbing, PATHS.heating, "/plombier-paris-15", "/plombier-montrouge"],
  },
  {
    path: PATHS.heating,
    zone: "Paris 14e",
    title: "Chauffage et gaz à Paris 14e : installation | S. Petit",
    description:
      "Chauffage, chauffe-eau et gaz à Paris 14e par un professionnel du gaz (PG). S. Petit, avenue Jean Moulin, plombier depuis 2007. Appelez le 01 45 42 42 84.",
    h1: "Chauffage et gaz à Paris 14e : chauffe-eau, radiateurs",
    kicker: "Chauffage et gaz · Paris 14e",
    lead: "Chauffe-eau, radiateurs, raccordements au gaz : un travail encadré, réalisé par un professionnel du gaz.",
    brief:
      "À Paris 14e, S. Petit réalise des travaux de chauffage et d'installation au gaz. Sa fiche Pages Jaunes indique la qualification Professionnel du Gaz (PG) et l'activité enregistrée est l'installation d'eau et de gaz. Pour une odeur de gaz, quittez les lieux et appelez le 0 800 47 33 33 (numéro gratuit des urgences gaz).",
    contactType: "chauffage",
    service: "Chauffage, chauffe-eau et installations au gaz",
    crumb: "Chauffage et gaz Paris 14e",
    approach: "Pour le chauffage comme pour le gaz, on se déplace dans tout le 14e : de la porte d'Orléans jusqu'à Montparnasse.",
    photo: "cuivre",
    photoPos: "50% 40%",
    caption: "Un robinet raccordé, du travail de précision",
    sections: [
      {
        h2: "Que faire en cas d'odeur de gaz dans un logement ?",
        answer:
          "Ne touchez à aucun interrupteur et ne fumez pas. Ouvrez portes et fenêtres, fermez le robinet de gaz si vous y accédez, puis sortez et appelez depuis l'extérieur le numéro gratuit des urgences gaz, le 0 800 47 33 33. Ne rentrez qu'après l'autorisation des secours ou du distributeur.",
        paras: [
          "Une odeur de gaz est un cas d'urgence, avant tout un travail de sécurité pour le distributeur. Le plombier-gaziste intervient ensuite pour contrôler l'installation intérieure, réparer un raccord ou remplacer un tuyau flexible périmé.",
        ],
      },
      {
        h2: "Que signifie être « Professionnel du Gaz » ?",
        answer:
          "Professionnel du Gaz (PG) est un signe de qualité des installateurs de systèmes au gaz, mentionné sur la fiche Pages Jaunes de S. Petit. Il atteste d'un savoir-faire sur ces installations. Demandez le justificatif en vigueur au moment du devis, comme pour toute qualification.",
        paras: [
          "La notion compte parce que le gaz ne se traite pas comme l'eau : tuyaux, raccords, ventilation, évacuation des fumées et contrôle d'étanchéité obéissent à des règles précises. Avant toute mise en service, un contrôle de l'installation s'impose.",
        ],
      },
      {
        h2: "Peut-on remplacer un chauffe-eau sans refaire toute la plomberie ?",
        answer:
          "Souvent oui : on dépose l'ancien appareil, on installe le nouveau et on reprend les raccordements en eau, en évacuation et en électricité ou en gaz. Le groupe de sécurité et l'évacuation de la soupape sont à contrôler. Un cas par cas, tranché sur photo ou lors d'une visite.",
        list: [
          "Chauffe-eau électrique, ballon ou cumulus : dépose et remplacement",
          "Chauffe-eau et chaudière au gaz : raccordement par un professionnel du gaz",
          "Radiateurs : dépose, repose, purge et robinets thermostatiques",
          "Tuyaux flexibles de gaz arrivés à échéance",
        ],
      },
      {
        h2: "Quand faire contrôler son installation de chauffage ?",
        answer:
          "Faites-la contrôler quand un radiateur reste froid, quand la pression chute, quand un bruit apparaît ou avant l'hiver. Un entretien régulier réduit le risque de panne en pleine période de froid. Dans un immeuble à chauffage collectif, signalez d'abord l'anomalie au gardien ou au syndic.",
        paras: [
          "En copropriété, la chaufferie relève du syndic et d'un contrat d'entretien ; à l'intérieur du logement, les radiateurs, robinets et branchements restent à la charge de l'occupant ou du propriétaire. Savoir qui paie évite bien des malentendus.",
        ],
      },
    ],
    faq: [
      { q: "S. Petit installe-t-il des chaudières ?", a: "L'activité enregistrée est l'installation d'eau et de gaz, et la fiche indique la qualification Professionnel du Gaz. Pour une chaudière précise, marque et puissance, parlez-en au téléphone : la réponse dépend du modèle et de la configuration du logement." },
      { q: "Le gaz de ville est-il obligatoire pour demander un devis ?", a: "Non. Vous pouvez demander un devis pour un chauffe-eau électrique, des radiateurs ou un raccordement au gaz. Décrivez l'existant dans le formulaire : type d'énergie, âge de l'appareil, accès au local, photos de l'étiquette." },
      { q: "Qui contrôle l'installation après les travaux ?", a: "Le contrôle d'étanchéité et de bon fonctionnement fait partie du travail et doit figurer au devis. Gardez le justificatif remis après l'intervention : il sert pour l'assurance habitation et pour une éventuelle revente du logement." },
    ],
    ctaTitle: "Un chauffe-eau ou une installation au gaz à vérifier ?",
    ctaText: "Joignez la photo de l'étiquette de l'appareil : elle suffit souvent pour préparer le devis.",
    related: [PATHS.plumbing, PATHS.bathroom, "/plombier-paris-13", "/plombier-gentilly"],
  },
];
