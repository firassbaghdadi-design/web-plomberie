import { PATHS } from "./site";
import type { Page } from "./types";

/**
 * Textes du site actuel (entreprise-clairon.fr, relevé du 27 octobre 2026), repris mot pour mot et signalés `original`,
 * puis complétés de textes nouveaux. Aucun prix, délai, chiffre ou label n'est ajouté.
 */

export const about = {
  /** Page d'accueil actuelle, section « Qui sommes nous ? » (fautes de frappe corrigées : « qualifiés », « professionnels »). */
  paras: [
    "L'entreprise CLAIRON est une entreprise familiale créée en 1943, située à PARIS (75015), 23, rue d'Ouessant.",
    "Nous sommes une entreprise de plomberie, couverture, chauffage et petite maçonnerie composée d'une équipe de compagnons qualifiés.",
    "Nous intervenons aussi bien auprès d'une clientèle de particuliers que d'une clientèle de professionnels mais également auprès de syndics.",
  ],
  /** Balise description du site actuel. */
  description:
    "Clairon, votre expert en plomberie, couverture et chauffage. Avec des décennies d'expérience, nous offrons des services de qualité pour vos besoins en installation, réparation et entretien.",
};

export const home = {
  title: "Plombier couvreur Paris 15e depuis 1943 | Entreprise Clairon",
  description:
    "Entreprise Clairon, plombier, couvreur et chauffagiste à Paris 15e depuis 1943 : entreprise familiale du 23 rue d'Ouessant, pour particuliers et syndics.",
  brief:
    "Entreprise Clairon est un plombier, couvreur et chauffagiste installé à Paris 15e, 23 rue d'Ouessant. Entreprise familiale créée en 1943, elle réunit une équipe de compagnons qualifiés en plomberie, couverture, chauffage et petite maçonnerie, au service des particuliers, des professionnels et des syndics du quartier.",
};

const plumbing: Page = {
  path: PATHS.plumbing,
  title: "Plombier à Paris 15e : sanitaire et tuyauterie | Clairon",
  description:
    "Plombier à Paris 15e depuis 1943 : sanitaire, robinetterie, tuyauterie et rénovation de salle de bains par l'Entreprise Clairon, au 23 rue d'Ouessant.",
  h1: "Plombier à Paris 15e : sanitaire, robinetterie et tuyauterie",
  kicker: "Plomberie",
  lead: "Un service adapté à vos besoins, du robinet qui goutte à la salle de bains refaite, par l'équipe de compagnons de la rue d'Ouessant.",
  brief:
    "Plombier à Paris 15e depuis 1943, l'Entreprise Clairon intervient en sanitaire, robinetterie, tuyauterie et rénovation de salle de bains. Ses compagnons travaillent chez les particuliers, pour les professionnels et pour les syndics de copropriété, dans les immeubles anciens comme récents du quartier. Prenez rendez-vous par téléphone ou par le formulaire.",
  contactType: "plomberie",
  service: "Plomberie : sanitaire, robinetterie, tuyauterie",
  crumb: "Plomberie",
  photo: "plans",
  facts: [
    { label: "Depuis", value: "1943" },
    { label: "Atelier", value: "Paris 15e" },
    { label: "Pour", value: "Particuliers, syndics" },
  ],
  sections: [
    {
      h2: "Que comprend le service de plomberie de l'Entreprise Clairon ?",
      answer:
        "Quatre domaines, repris du site de l'entreprise : le sanitaire, la robinetterie, la tuyauterie et la rénovation de salle de bains. Autrement dit, tout ce qui amène l'eau dans le logement, la distribue aux appareils et l'évacue, jusqu'à la transformation complète d'une pièce d'eau.",
      listTitle: "Un service adapté à vos besoins",
      list: ["Sanitaire", "Robinetterie", "Tuyauterie", "Rénovation de salle de bains"],
      originalList: "plomberie",
      after: ["Organisez votre rendez-vous en nous contactant."],
      original: true,
    },
    {
      h2: "Quels travaux de sanitaire et de robinetterie sont possibles ?",
      answer:
        "Le remplacement d'un lavabo, d'un WC, d'un évier ou d'une baignoire, la pose d'un mitigeur, d'une colonne de douche ou d'un robinet thermostatique, et la réparation de ce qui fuit : joints, flexibles, mécanismes de chasse d'eau, robinets d'arrêt devenus durs ou qui ne ferment plus complètement.",
      paras: [
        "Dans un appartement parisien, ces travaux se jouent souvent à quelques centimètres près : une niche étroite sous un évier, une évacuation ancienne au diamètre inhabituel, un mur porteur qu'on ne peut pas creuser. L'œil d'un compagnon habitué aux immeubles du 15e fait gagner du temps dès la première visite.",
        "Avant de choisir un appareil, pensez à mesurer l'espace disponible et à repérer l'emplacement des arrivées d'eau. Une photo de l'existant, envoyée avec votre demande, permet de préparer la visite et d'arriver avec les bonnes pièces.",
      ],
    },
    {
      h2: "Comment intervient-on sur la tuyauterie d'un immeuble ancien ?",
      answer:
        "En commençant par identifier ce qui est en place : cuivre, acier galvanisé, fonte pour les descentes, parfois encore du plomb sur d'anciennes alimentations. On raccorde ensuite les nouvelles canalisations avec les pièces adaptées à chaque matériau, sans fragiliser ce qui dépend des parties communes.",
      paras: [
        "Le mot « plombier » vient du plomb, le métal avec lequel on façonnait autrefois les conduites d'eau. Ces canalisations ont été progressivement remplacées dans les logements ; lorsqu'il en reste, leur remplacement fait partie des travaux de tuyauterie à prévoir.",
        "Dans une copropriété, la limite entre parties privatives et parties communes compte : une colonne montante ou une descente d'eaux usées relève en général du syndic, le branchement de votre appartement relève de vous. L'entreprise travaillant aussi pour des syndics, elle connaît ces deux interlocuteurs.",
      ],
    },
    {
      h2: "Fuite d'eau : que faire en attendant le plombier ?",
      answer:
        "Fermez le robinet d'arrêt de l'appartement, ou celui de l'appareil concerné. Coupez l'électricité si l'eau approche d'une prise ou d'un tableau. Épongez, protégez le sol, puis prévenez le voisin du dessous et le syndic. Prenez enfin des photos : elles serviront pour le constat et pour l'assurance.",
      paras: [
        "Le robinet d'arrêt général d'un appartement se trouve le plus souvent près du compteur d'eau, dans la cuisine, la salle de bains ou un placard technique du palier. Le repérer avant d'en avoir besoin est un bon réflexe.",
        "En cas de dégât des eaux entre deux logements, un constat amiable est rempli avec le voisin concerné. Notez la date, l'origine supposée de la fuite et les pièces touchées : le plombier qui intervient pourra ensuite décrire précisément la cause et la réparation effectuée.",
      ],
    },
    {
      h2: "Comment se passe une intervention, du premier appel à la fin des travaux ?",
      answer:
        "Vous appelez ou envoyez votre demande, l'entreprise fixe un rendez-vous, un compagnon constate sur place et vous explique ce qu'il voit. Pour des travaux plus importants, un devis vous est remis avant de commencer. Le chantier est ensuite réalisé, contrôlé et rendu propre.",
      steps: [
        { t: "Votre demande", d: "Par téléphone au 01 47 83 88 40, ou par le formulaire avec l'adresse et quelques photos." },
        { t: "Le rendez-vous", d: "Organisez votre rendez-vous en nous contactant : date et créneau fixés avec vous." },
        { t: "Le constat", d: "Un compagnon regarde l'installation et vous dit ce qu'il propose, simplement." },
        { t: "Les travaux", d: "Réalisés, vérifiés, puis le chantier est laissé propre." },
      ],
    },
  ],
  faq: [
    {
      q: "L'Entreprise Clairon intervient-elle chez les particuliers ?",
      a: "Oui. L'entreprise indique travailler aussi bien pour une clientèle de particuliers que pour des professionnels et des syndics. Un appartement, une maison de ville ou un local commercial du 15e arrondissement entrent dans son quotidien.",
    },
    {
      q: "Où se trouve l'entreprise ?",
      a: "Au 23 rue d'Ouessant, 75015 Paris, dans le quartier de Grenelle, à quelques rues du Champ-de-Mars. Le téléphone est le 01 47 83 88 40 et l'adresse e-mail info@clairon.org.",
    },
    {
      q: "Faut-il un devis pour remplacer un robinet ou un WC ?",
      a: "Pour un petit remplacement, le compagnon vous explique sur place ce qu'il prévoit. Pour une rénovation ou des travaux de tuyauterie plus étendus, demandez un devis : décrivez votre projet dans le formulaire, photos à l'appui, et l'entreprise revient vers vous.",
    },
    {
      q: "Mon immeuble a encore des canalisations en plomb : que faire ?",
      a: "Signalez-le dans votre demande. Pour la partie privative, le remplacement par une canalisation actuelle se prévoit avec l'entreprise ; pour les colonnes communes, la décision revient à la copropriété, que l'entreprise peut renseigner si le syndic la sollicite.",
    },
  ],
  ctaTitle: "Une fuite, un projet de salle de bains ?",
  ctaText: "Organisez votre rendez-vous avec l'équipe de la rue d'Ouessant.",
  related: ["/renovation-salle-de-bains-paris-15", "/plombier-paris-15", PATHS.heating],
};

const roofing: Page = {
  path: PATHS.roofing,
  title: "Couvreur à Paris 15e : réparation de toiture | Clairon",
  description:
    "Couvreur à Paris 15e depuis 1943 : entretien et réparation de toiture, gouttières et descentes d'eau pluviale par l'Entreprise Clairon, 23 rue d'Ouessant.",
  h1: "Couvreur à Paris 15e : entretien et réparation de toiture",
  kicker: "Couverture",
  lead: "Un service adapté à vos besoins, sur les toits du 15e : couverture, évacuation des eaux de pluie et reprises après un coup de vent.",
  brief:
    "Couvreur à Paris 15e, l'Entreprise Clairon entretient et répare les toitures du quartier depuis 1943. Ses compagnons interviennent pour des particuliers, des professionnels et des syndics de copropriété : couverture, gouttières, descentes d'eau pluviale et petites reprises de maçonnerie en toiture. Organisez votre rendez-vous par téléphone ou par le formulaire.",
  contactType: "couverture",
  service: "Couverture : entretien et réparation de toiture",
  crumb: "Couverture",
  photo: "toits",
  facts: [
    { label: "Depuis", value: "1943" },
    { label: "Toits de", value: "Paris 15e" },
    { label: "Pour", value: "Particuliers, syndics" },
  ],
  sections: [
    {
      h2: "Que propose l'Entreprise Clairon en couverture ?",
      answer:
        "La couverture fait partie des métiers historiques de l'entreprise, avec la plomberie, le chauffage et la petite maçonnerie. Le site de l'entreprise présente ce service sous le titre « Un service adapté à vos besoins », avec la liste des prestations ci-dessous, et vous invite à organiser un rendez-vous.",
      listTitle: "Un service adapté à vos besoins",
      originalList: "couverture",
      after: ["Organisez votre rendez-vous en nous contactant."],
      original: true,
    },
    {
      h2: "Pourquoi un plombier fait-il aussi de la couverture ?",
      answer:
        "Parce qu'à Paris, les deux métiers se rejoignent sur le toit. Gouttières, chéneaux et descentes d'eau pluviale sont des ouvrages de plomberie autant que de couverture, et les toitures en zinc sont façonnées par des artisans qui travaillent le métal. Une seule entreprise suit donc l'eau du faîtage jusqu'à l'égout.",
      paras: [
        "Historiquement, les plombiers-couvreurs parisiens travaillaient le plomb puis le zinc : feuilles de couverture, noues, solins et chéneaux. Cette double compétence reste précieuse dans les immeubles du 15e, où une infiltration au dernier étage peut venir d'un joint de toiture comme d'une évacuation encombrée.",
        "Pour un syndic, c'est aussi un interlocuteur unique : le compagnon qui constate une descente bouchée peut regarder dans le même passage l'état du chéneau qui l'alimente.",
      ],
    },
    {
      h2: "Quels signes doivent faire appeler un couvreur ?",
      answer:
        "Une tache d'humidité au plafond du dernier étage, de l'eau qui déborde d'une gouttière par forte pluie, une descente qui goutte le long de la façade, un élément de couverture déplacé après un coup de vent, ou des débris tombés dans la cour. Mieux vaut faire vérifier tôt qu'attendre l'infiltration.",
      paras: [
        "Les feuilles mortes des platanes et des marronniers du quartier finissent souvent dans les chéneaux à l'automne. Un nettoyage régulier des gouttières et des moignons évite qu'un simple bouchon ne se transforme en dégât des eaux chez le voisin du dessous.",
        "Après un épisode de vent fort, levez les yeux depuis la rue ou la cour : un élément qui dépasse, un solin décollé ou une souche de cheminée abîmée se voient parfois d'en bas.",
      ],
    },
    {
      h2: "Comment se déroule une intervention en toiture ?",
      answer:
        "Le compagnon accède d'abord au toit en sécurité, par l'immeuble ou depuis une nacelle ou un échafaudage selon les cas, puis il constate l'état de la couverture et des évacuations. Il vous décrit ce qu'il a vu, photos à l'appui si possible, avant toute réparation importante.",
      steps: [
        { t: "La demande", d: "Adresse, étage, accès au toit, et une photo de la tache ou de la gouttière concernée." },
        { t: "L'accès", d: "Organisé avec vous ou avec le syndic : clés, trappe, cour, autorisations éventuelles." },
        { t: "Le constat", d: "Couverture, chéneaux, descentes : on cherche l'origine, pas seulement la trace." },
        { t: "La réparation", d: "Réalisée, puis vérifiée par temps de pluie quand c'est utile." },
      ],
    },
  ],
  faq: [
    {
      q: "Je suis au dernier étage et j'ai une tache au plafond : à qui m'adresser ?",
      a: "Prévenez votre syndic, la toiture étant en général une partie commune, et décrivez la tache à l'entreprise : étage, pièce, depuis quand, par quel temps elle apparaît. Le compagnon cherchera si l'eau vient de la couverture, d'un chéneau ou d'une canalisation.",
    },
    {
      q: "L'Entreprise Clairon travaille-t-elle pour les syndics ?",
      a: "Oui, l'entreprise indique intervenir auprès des syndics en plus des particuliers et des professionnels. Indiquez l'adresse de l'immeuble, le lot ou la zone concernée et la personne à contacter pour l'accès au toit.",
    },
    {
      q: "Peut-on monter sur un toit par temps de pluie ?",
      a: "Le travail en toiture se fait par temps sec, pour la sécurité des compagnons comme pour la qualité de la réparation. En attendant, une bâche ou un seau sous la fuite limite les dégâts ; l'entreprise vous dira quoi faire au téléphone.",
    },
    {
      q: "Où est installée l'entreprise ?",
      a: "Au 23 rue d'Ouessant, 75015 Paris. Vous pouvez joindre l'équipe au 01 47 83 88 40 ou écrire à info@clairon.org pour organiser votre rendez-vous.",
    },
  ],
  ctaTitle: "Une gouttière qui déborde, une infiltration ?",
  ctaText: "Décrivez ce que vous voyez : l'équipe organise le rendez-vous.",
  related: ["/couvreur-paris-15", PATHS.plumbing, "/plombier-syndic-copropriete-paris-15"],
};

const heating: Page = {
  path: PATHS.heating,
  title: "Chauffagiste à Paris 15e : chaudière, radiateurs | Clairon",
  description:
    "Chauffagiste à Paris 15e depuis 1943 : installation, réparation et entretien de chauffage, chaudières et radiateurs par l'Entreprise Clairon, rue d'Ouessant.",
  h1: "Chauffagiste à Paris 15e : chaudières, radiateurs et eau chaude",
  kicker: "Chauffage",
  lead: "Un service adapté à vos besoins, pour un logement chauffé sans surprise : installation, réparation et entretien.",
  brief:
    "Chauffagiste à Paris 15e, l'Entreprise Clairon installe, répare et entretient les installations de chauffage depuis 1943 : chaudières, radiateurs, circuits et production d'eau chaude. L'équipe de la rue d'Ouessant intervient chez les particuliers, pour les professionnels et dans les copropriétés gérées par des syndics. Prenez rendez-vous par téléphone ou par le formulaire.",
  contactType: "chauffage",
  service: "Chauffage : installation, réparation et entretien",
  crumb: "Chauffage",
  photo: "plans",
  facts: [
    { label: "Depuis", value: "1943" },
    { label: "Atelier", value: "Paris 15e" },
    { label: "Métiers", value: "Chauffage, plomberie" },
  ],
  sections: [
    {
      h2: "Que propose l'Entreprise Clairon en chauffage ?",
      answer:
        "Le chauffage est l'un des quatre métiers de l'entreprise, avec la plomberie, la couverture et la petite maçonnerie. Le site de l'entreprise le présente sous le titre « Un service adapté à vos besoins » et renvoie, pour chaque demande, vers un rendez-vous pris directement avec l'équipe.",
      listTitle: "Un service adapté à vos besoins",
      originalList: "chauffage",
      after: ["Organisez votre rendez-vous en nous contactant."],
      original: true,
    },
    {
      h2: "Radiateurs froids en bas, bruits dans les tuyaux : de quoi s'agit-il ?",
      answer:
        "Souvent d'air ou de boues dans le circuit. Un radiateur tiède en haut et froid en bas signale fréquemment un embouage ; des glouglous ou des sifflements, de l'air ou une pression mal réglée. Une purge, un rééquilibrage ou un nettoyage du circuit règlent la plupart de ces cas.",
      paras: [
        "Avant d'appeler, notez quels radiateurs sont concernés, la pression affichée par la chaudière s'il y en a une, et depuis quand le problème existe. Ces informations aident le chauffagiste à orienter son diagnostic.",
        "Dans les immeubles à chauffage collectif, fréquents dans le 15e, une partie du réseau dépend de la copropriété : le compagnon vérifie ce qui relève de votre logement et ce qui doit être signalé au syndic.",
      ],
    },
    {
      h2: "Pourquoi faire entretenir sa chaudière chaque année ?",
      answer:
        "Parce que c'est une obligation pour les chaudières individuelles, et parce qu'un appareil entretenu fonctionne plus sûrement. L'entretien comprend le nettoyage des éléments principaux, le contrôle des réglages et de la combustion, et la remise d'une attestation à conserver, souvent demandée par l'assureur ou le propriétaire.",
      paras: [
        "Dans un logement loué, l'entretien courant de la chaudière individuelle revient en général à l'occupant, sauf clause contraire du bail ; le remplacement d'un appareil usé revient au propriétaire. L'attestation d'entretien sert aux deux.",
        "L'automne, avant la remise en route du chauffage, est le moment où les demandes affluent : prévoir la visite un peu en avance évite d'attendre au premier froid.",
      ],
    },
    {
      h2: "Faut-il remplacer une installation de chauffage ancienne ?",
      answer:
        "Pas systématiquement. Un radiateur en fonte peut chauffer très longtemps, une tuyauterie saine se conserve. En revanche, une chaudière en fin de vie, des pannes répétées ou des pièces introuvables justifient d'étudier un remplacement. Le compagnon vous dit honnêtement ce qui peut encore servir.",
      paras: [
        "Le remplacement se prépare : emplacement de l'appareil, évacuation des fumées, raccordements, et, en copropriété, règles propres à l'immeuble. Un devis détaillé vous est remis avant les travaux.",
      ],
    },
  ],
  faq: [
    {
      q: "L'Entreprise Clairon intervient-elle sur le chauffage collectif ?",
      a: "L'entreprise travaille pour les particuliers, les professionnels et les syndics. Pour un chauffage collectif, la demande passe en général par le syndic ; pour un problème dans votre logement, décrivez-le directement à l'équipe, qui vous dira à qui s'adresser.",
    },
    {
      q: "Comment préparer la visite du chauffagiste ?",
      a: "Notez la marque et le modèle de la chaudière s'il y en a une, sa pression, les radiateurs concernés et les symptômes. Une photo de la plaque signalétique de l'appareil, jointe à votre demande, fait gagner du temps.",
    },
    {
      q: "Mon radiateur chauffe à moitié : est-ce grave ?",
      a: "Rarement, mais c'est le signe que le circuit mérite une vérification : air, boues ou réglage. Une purge peut suffire ; si le problème revient ou touche plusieurs radiateurs, faites contrôler l'installation.",
    },
    {
      q: "Comment joindre l'Entreprise Clairon ?",
      a: "Par téléphone au 01 47 83 88 40, par e-mail à info@clairon.org, ou par le formulaire de contact. L'entreprise est installée 23 rue d'Ouessant, dans le 15e arrondissement.",
    },
  ],
  ctaTitle: "Un radiateur froid, une chaudière à entretenir ?",
  ctaText: "Organisez votre rendez-vous avec un compagnon de l'entreprise.",
  related: ["/chauffagiste-paris-15", PATHS.plumbing, PATHS.roofing],
};

export const originalPages: Page[] = [plumbing, roofing, heating];
