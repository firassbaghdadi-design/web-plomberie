import { PATHS } from "./site";
import type { Page } from "./types";

/**
 * Pages plombier chauffagiste × zone voisine du 20e : Paris 19e, Paris 11e, Les Lilas, Le Pré-Saint-Gervais, Bagnolet.
 * Chaque page part d'un type de logement et d'une question propres à la zone, pour un texte réellement différent.
 * Repères de quartier institutionnels, à faire relire par un habitant. Aucun prix, délai ni chiffre inventé.
 */
export const localPages: Page[] = [
  {
    path: "/plombier-chauffagiste-paris-19",
    slug: "plombier-chauffagiste-paris-19",
    zone: "Paris 19e",
    title: "Plombier chauffagiste Paris 19e : Buttes-Chaumont | DBP",
    description:
      "Plombier chauffagiste à Paris 19e, à deux pas de la porte des Lilas : fuites, colonnes d'immeubles des années 1930, radiateurs et chaudière. DBP Plomberie-Chauffage.",
    h1: "Plombier chauffagiste à Paris 19e, côté Buttes-Chaumont",
    kicker: "Plomberie et chauffage · Paris 19e",
    lead: "Des villas des Buttes-Chaumont aux immeubles de la place des Fêtes : un plombier chauffagiste voisin, installé à la limite du 19e.",
    brief:
      "Plombier chauffagiste à Paris 19e, DBP Plomberie-Chauffage se trouve villa Gagliardini, à la limite du 19e et du 20e. L'entreprise intervient autour des Buttes-Chaumont, de la place des Fêtes et de Belleville : fuites, débouchage, sanitaires, radiateurs et chaudière, dans les appartements comme dans les parties communes.",
    contactType: "plomberie",
    service: "Plomberie et chauffage",
    crumb: "Plombier chauffagiste Paris 19e",
    photo: "cle",
    photoPos: "50% 45%",
    caption: "Une clé, un raccord, une fuite en moins",
    facts: [
      { label: "Quartiers", value: "Buttes-Chaumont, Fêtes" },
      { label: "Bâti", value: "Faubourg, entre-deux-guerres" },
      { label: "Depuis", value: "2007" },
    ],
    sections: [
      {
        h2: "Quelles installations surveiller dans un immeuble des années 1930 ?",
        answer:
          "Les colonnes d'eau d'origine, souvent en acier galvanisé, qui se corrodent de l'intérieur, les robinets d'arrêt durcis par les années et les radiateurs en fonte reliés à de vieilles tuyauteries. Une eau jaunâtre au premier jet ou une pression qui baisse sont les premiers signes d'usure.",
        paras: [
          "Le 19e compte beaucoup d'immeubles construits entre les deux guerres, notamment autour de la place des Fêtes et le long des boulevards des Maréchaux. Leurs installations ont parfois été reprises logement par logement, sans plan d'ensemble : un tuyau neuf peut y côtoyer un raccord d'origine.",
          "Avant de refaire une salle de bains, un plombier regarde donc ce qui l'alimente. Remplacer un mitigeur sur un robinet d'arrêt grippé conduit souvent à changer aussi ce robinet : mieux vaut le prévoir dès le devis.",
        ],
        list: [
          "Contrôle des robinets d'arrêt et des raccords avant travaux",
          "Remplacement de tuyaux fatigués dans le logement",
          "Signalement au syndic d'une colonne commune à reprendre",
        ],
      },
      {
        h2: "Comment joindre DBP quand on habite le 19e ?",
        answer:
          "L'atelier est villa Gagliardini, à environ 300 mètres de la porte des Lilas, côté 20e mais contre le 19e. Pour une demande, téléphonez au 01 42 45 91 35 ou envoyez le formulaire de la page contact avec l'adresse exacte, l'étage et quelques photos.",
        paras: [
          "Depuis les Buttes-Chaumont, le parc, la rue de Belleville et la rue Haxo mènent en quelques minutes vers l'atelier. La proximité compte pour les petites interventions : on n'attend pas un plombier venu de l'autre bout de Paris pour un siphon à changer.",
        ],
      },
      {
        h2: "Villa, pavillon ou cité du 19e : qu'est-ce qui change ?",
        paras: [
          "Le 19e garde des villas et des cités aux maisons basses, héritées de l'ancien faubourg. Ces petites maisons ont leur propre compteur, leur propre chaudière, parfois une cave où passent les tuyaux : la chaudière individuelle et son entretien annuel y sont l'affaire du propriétaire.",
          "Dans un immeuble collectif, l'occupant s'occupe de l'intérieur de son logement, et la copropriété du reste. Cette frontière, qui sépare un radiateur d'une colonne, se pose dès l'appel : indiquez si vous habitez une maison ou un appartement.",
        ],
        after: [
          "Dans les deux cas, le chauffagiste vérifie la pression du circuit, l'état des robinets thermostatiques et l'équilibre entre les pièces avant de proposer un remplacement.",
        ],
      },
    ],
    faq: [
      {
        q: "DBP intervient-elle dans tout le 19e ?",
        a: "L'entreprise est basée à la limite du 19e et du 20e et intervient dans les quartiers voisins, des Buttes-Chaumont à Belleville. Pour une adresse plus éloignée, appelez : la réponse dépend de la demande.",
      },
      {
        q: "Peut-on demander un devis pour une salle de bains ?",
        a: "Oui. Décrivez la pièce, ajoutez des photos et indiquez si l'ancienne installation reste en place. Le devis nomme les opérations de plomberie, les fournitures et les reprises éventuelles.",
      },
      {
        q: "Qui paie la réparation d'une colonne d'eau commune ?",
        a: "La copropriété, sur décision du syndic. Prévenez-le dès que vous voyez une fuite ou une eau trouble, et gardez le rapport du plombier pour appuyer votre demande.",
      },
    ],
    ctaTitle: "Voisin des Buttes-Chaumont ? Un plombier à deux pas.",
    ctaText: "Appelez ou écrivez avec une photo : DBP vous répond depuis la porte des Lilas.",
    related: [PATHS.plumbing, PATHS.heating, "/plombier-chauffagiste-les-lilas", "/plombier-chauffagiste-paris-11"],
  },
  {
    path: "/plombier-chauffagiste-paris-11",
    slug: "plombier-chauffagiste-paris-11",
    zone: "Paris 11e",
    title: "Plombier chauffagiste Paris 11e : Ménilmontant | DBP",
    description:
      "Plombier chauffagiste à Paris 11e, côté Ménilmontant et Père-Lachaise : fuites, WC et lavabos bouchés, petites salles de bains, radiateurs. DBP Plomberie-Chauffage.",
    h1: "Plombier chauffagiste à Paris 11e, côté Ménilmontant",
    kicker: "Plomberie et chauffage · Paris 11e",
    lead: "Des petits appartements sur cour aux anciens ateliers : un plombier chauffagiste qui connaît les logements compacts de l'est parisien.",
    brief:
      "Plombier chauffagiste à Paris 11e, DBP Plomberie-Chauffage vient du 20e voisin, depuis la villa Gagliardini. L'entreprise intervient autour de Ménilmontant, de Charonne et du Père-Lachaise : fuites, débouchage, remplacement de robinetterie, radiateurs et chaudière, dans des logements souvent petits et sans ascenseur.",
    contactType: "plomberie",
    service: "Plomberie et chauffage",
    crumb: "Plombier chauffagiste Paris 11e",
    photo: "radiateur",
    photoPos: "50% 50%",
    caption: "Un radiateur ancien, un logement à régler",
    facts: [
      { label: "Quartiers", value: "Ménilmontant, Charonne" },
      { label: "Logements", value: "Petits, sur cour" },
      { label: "Depuis", value: "2007" },
    ],
    sections: [
      {
        h2: "Peut-on refaire une petite salle de bains dans un appartement du 11e ?",
        answer:
          "Souvent oui, même sur quelques mètres carrés, à condition de bien placer l'évacuation. Une douche à l'italienne, un lavabo suspendu et un WC compact tiennent dans peu d'espace. Le plombier repère d'abord la chute commune et le chemin des tuyaux avant que la pièce soit dessinée.",
        paras: [
          "Beaucoup d'appartements du 11e donnent sur une cour et occupent un étage sans ascenseur. Cela compte pour les travaux : les appareils montent à pied, les gravats descendent par l'escalier, et l'accès aux parties communes se prépare avec le gardien ou le syndic.",
          "Une salle de bains ancienne cache parfois des tuyaux en plomb ou en acier. Le plombier les signale et propose de les remplacer pendant que les murs sont ouverts, plutôt que d'y revenir dans deux ans.",
        ],
        list: [
          "Remplacement de baignoire par une douche",
          "Pose de lavabo, vasque, mitigeur et WC",
          "Reprise des arrivées et des évacuations apparentes",
        ],
      },
      {
        h2: "Pourquoi un lavabo ou des toilettes se bouchent-ils à répétition ?",
        answer:
          "Quand le même appareil se rebouche, l'obstruction n'est pas dans le siphon mais plus loin : tuyau trop plat, dépôts calcaires ou graisseux, coude mal posé. Un nettoyage superficiel ne suffit plus. Le plombier inspecte l'écoulement et reprend la pente ou le tronçon en cause.",
        paras: [
          "Dans les vieux immeubles de l'est parisien, les évacuations passent souvent par de longs trajets horizontaux avant de rejoindre la chute. Plus le trajet est long et plat, plus les dépôts s'y fixent. Des lingettes jetées aux toilettes, même annoncées jetables, aggravent le phénomène.",
        ],
      },
      {
        h2: "Chauffage individuel dans un petit logement : comment bien régler ?",
        paras: [
          "Dans un deux-pièces du 11e, une petite chaudière individuelle ou un chauffage électrique suffit, à condition d'être bien réglé. Les radiateurs en fonte hérités de l'ancien chauffage collectif donnent une chaleur douce mais lente à monter : on les laisse chauffer régulièrement plutôt que de les pousser au maximum.",
          "Un robinet thermostatique par radiateur évite de surchauffer une chambre quand le salon réclame de la chaleur. DBP peut les poser et purger le circuit dans la même visite.",
        ],
        after: [
          "Pensez à l'entretien annuel de la chaudière, obligatoire, qui se fait mieux avant les premiers froids qu'en pleine panne.",
        ],
      },
    ],
    faq: [
      {
        q: "Intervenez-vous dans les immeubles sans ascenseur ?",
        a: "Oui. Indiquez l'étage et l'accès dès la demande : le plombier prévoit le matériel en conséquence et vous dit s'il doit venir avec des pièces supplémentaires.",
      },
      {
        q: "Un propriétaire bailleur peut-il vous appeler pour son locataire ?",
        a: "Oui, en précisant le nom et le téléphone du locataire pour fixer le rendez-vous. Le devis et la facture sont établis au nom du bailleur, ce qui facilite la gestion locative.",
      },
      {
        q: "Combien de temps faut-il pour un remplacement de robinetterie ?",
        a: "Aucun délai ne peut être annoncé sans voir l'installation. Un mitigeur sur des robinets d'arrêt en bon état est rapide ; il l'est moins si l'on découvre un raccord corrodé en démontant.",
      },
    ],
    ctaTitle: "Un petit logement, un grand confort.",
    ctaText: "Dites-nous l'étage et le problème : DBP prépare l'intervention avant de monter.",
    related: [PATHS.plumbing, PATHS.heating, "/plombier-chauffagiste-paris-19", "/plombier-chauffagiste-les-lilas"],
  },
  {
    path: "/plombier-chauffagiste-les-lilas",
    slug: "plombier-chauffagiste-les-lilas",
    zone: "Les Lilas",
    title: "Plombier chauffagiste aux Lilas (93) : maisons | DBP",
    description:
      "Plombier chauffagiste aux Lilas, de l'autre côté de la porte des Lilas : maisons anciennes, canalisations en plomb, chaudière individuelle et radiateurs. DBP.",
    h1: "Plombier chauffagiste aux Lilas, à deux pas de Paris",
    kicker: "Plomberie et chauffage · Les Lilas",
    lead: "Une commune voisine, séparée de l'atelier par le boulevard périphérique : des maisons, des chaudières individuelles et une eau à vérifier.",
    brief:
      "Plombier chauffagiste aux Lilas, DBP Plomberie-Chauffage est installée à Paris 20e, villa Gagliardini, tout près de la porte des Lilas. L'entreprise se déplace dans cette commune de Seine-Saint-Denis pour les fuites, le débouchage, la chaudière individuelle, les radiateurs et les canalisations des maisons et petits immeubles.",
    contactType: "plomberie",
    service: "Plomberie et chauffage",
    crumb: "Plombier chauffagiste Les Lilas",
    photo: "thermostat",
    photoPos: "40% 50%",
    caption: "Le thermostat d'une maison des Lilas",
    facts: [
      { label: "Commune", value: "Les Lilas (93)" },
      { label: "Logements", value: "Maisons, petits immeubles" },
      { label: "Depuis", value: "2007" },
    ],
    sections: [
      {
        h2: "Comment savoir si une maison ancienne a des canalisations en plomb ?",
        answer:
          "Les tuyaux en plomb sont gris mat, mous, faciles à rayer à l'ongle ou au tournevis, et ne résonnent pas quand on les tape. Si vous en voyez entre le compteur et vos robinets, demandez leur remplacement : la limite de plomb dans l'eau du robinet est stricte depuis 2013.",
        paras: [
          "Les Lilas comptent de nombreuses maisons et petits immeubles construits au fil du XXe siècle, souvent rénovés par morceaux. Il n'est pas rare qu'un branchement d'origine subsiste entre la rue et le compteur. Le propriétaire peut demander à la commune et au distributeur d'eau l'état du branchement.",
          "Remplacer la partie intérieure d'une canalisation en plomb est un travail de plombier : cuivre, multicouche ou autre matériau sont choisis selon l'installation et le budget. Le devis précise ce qui est repris et ce qui reste.",
        ],
        list: [
          "Repérage des tuyaux en plomb entre compteur et robinets",
          "Remplacement par un matériau adapté à l'installation",
          "Contrôle de l'étanchéité après changement",
        ],
      },
      {
        h2: "Faut-il entretenir une chaudière individuelle dans une maison ?",
        answer:
          "Oui, une fois par an, que la maison soit occupée par son propriétaire ou louée. L'entretien est obligatoire pour les chaudières de 4 à 400 kilowatts. Il vérifie la combustion, l'évacuation des fumées et la sécurité, et donne lieu à une attestation à conserver.",
        paras: [
          "Dans une maison, la chaudière est souvent à la cave ou dans un cellier : on l'oublie jusqu'à la première panne. Un entretien avant l'automne permet de repérer un brûleur encrassé ou une pression trop basse, bien avant le froid.",
        ],
      },
      {
        h2: "Pourquoi faire venir un plombier de Paris pour une commune voisine ?",
        paras: [
          "Les Lilas sont à quelques minutes de la villa Gagliardini : le trajet est celui d'un voisin, pas d'un déplacement lointain. L'entreprise connaît le secteur de la porte des Lilas, où le métro, le tramway et les rues se croisent.",
          "Pour fixer un rendez-vous, donnez l'adresse exacte, le type de logement et les photos du problème. L'équipe voit alors si la demande relève d'une intervention simple ou d'un devis plus complet.",
        ],
      },
    ],
    faq: [
      {
        q: "DBP intervient-elle dans les communes autour de Paris ?",
        a: "Oui, dans les communes voisines du 20e comme Les Lilas, selon la demande. Appelez le 01 42 45 91 35 pour confirmer que votre adresse fait partie de la zone d'intervention.",
      },
      {
        q: "Peut-on faire installer un chauffage dans une maison sans chauffage ?",
        a: "C'est un projet de chauffagiste qui demande une visite : surface, isolation, source d'énergie et emplacement des radiateurs. Demandez un devis en décrivant la maison et ses contraintes.",
      },
      {
        q: "Les Lilas sont-elles en zone parisienne pour les démarches ?",
        a: "Non, c'est une commune de Seine-Saint-Denis. Les démarches administratives, comme l'accès à un branchement d'eau, passent par la commune et le distributeur local, pas par la Ville de Paris.",
      },
    ],
    ctaTitle: "Une maison aux Lilas ? Un plombier juste de l'autre côté.",
    ctaText: "Décrivez la maison et la panne : DBP vous dit comment procéder.",
    related: [PATHS.plumbing, PATHS.heating, "/plombier-chauffagiste-le-pre-saint-gervais", "/plombier-chauffagiste-bagnolet"],
  },
  {
    path: "/plombier-chauffagiste-le-pre-saint-gervais",
    slug: "plombier-chauffagiste-le-pre-saint-gervais",
    zone: "Le Pré-Saint-Gervais",
    title: "Plombier chauffagiste au Pré-Saint-Gervais (93) | DBP",
    description:
      "Plombier chauffagiste au Pré-Saint-Gervais, commune voisine du 19e : petites copropriétés, chauffage collectif, répartiteurs, robinets thermostatiques. DBP.",
    h1: "Plombier chauffagiste au Pré-Saint-Gervais",
    kicker: "Plomberie et chauffage · Le Pré-Saint-Gervais",
    lead: "Une petite commune collée au 19e : des copropriétés à taille humaine, un chauffage collectif à régler et des factures à comprendre.",
    brief:
      "Plombier chauffagiste au Pré-Saint-Gervais, DBP Plomberie-Chauffage travaille depuis la villa Gagliardini, à la porte des Lilas, de l'autre côté du 19e. L'entreprise s'occupe des petites copropriétés de la commune : colonnes d'eau, chaufferies collectives, robinets thermostatiques, fuites et débouchage des parties communes.",
    contactType: "copropriete",
    service: "Plomberie et chauffage",
    crumb: "Plombier chauffagiste Pré-Saint-Gervais",
    photo: "immeuble",
    photoPos: "50% 40%",
    caption: "Les immeubles voisins du 19e",
    facts: [
      { label: "Commune", value: "Pré-Saint-Gervais (93)" },
      { label: "Logements", value: "Petites copropriétés" },
      { label: "Depuis", value: "2007" },
    ],
    sections: [
      {
        h2: "Comment équilibrer le chauffage collectif d'une petite copropriété ?",
        answer:
          "Avec un chauffage collectif, les appartements proches de la chaufferie chauffent trop et les plus éloignés trop peu. L'équilibrage règle le débit dans chaque colonne ; les robinets thermostatiques, eux, ajustent chaque radiateur. Les deux se complètent, et le syndic commande l'opération.",
        paras: [
          "Au Pré-Saint-Gervais, de nombreux immeubles sont de petite taille, avec une seule chaufferie et quelques colonnes. Un déséquilibre s'y voit vite : un étage trop chaud dont on ouvre les fenêtres, un autre où l'on garde son manteau. C'est une perte d'énergie évitable.",
          "Le chauffagiste mesure, règle, remplace les robinets défaillants et note les valeurs pour les prochains entretiens. Le compte rendu est remis au syndic, qui le présente à l'assemblée générale.",
        ],
        list: [
          "Équilibrage des colonnes de chauffage",
          "Pose et remplacement de robinets thermostatiques",
          "Purge des radiateurs et remise en pression",
        ],
      },
      {
        h2: "Qui décide de remplacer une chaudière collective ?",
        answer:
          "L'assemblée générale des copropriétaires, sur proposition du syndic et après devis. Le chauffagiste peut établir un diagnostic de l'état de la chaudière et des colonnes pour éclairer le vote. Aucune décision n'est prise par un seul copropriétaire.",
        paras: [
          "Pour préparer ce vote, le syndic demande souvent plusieurs devis comparables. Donnez-lui l'âge de la chaudière, ses pannes récentes et la consommation des dernières années : un devis est plus juste quand il part de faits.",
        ],
      },
      {
        h2: "Une fuite dans les parties communes : comment réagir ?",
        paras: [
          "Si vous voyez de l'eau dans une cage d'escalier, une cave ou un local technique, prévenez le syndic ou le gardien, qui coupe l'arrivée concernée. Photographiez la fuite et notez l'heure : le plombier arrivera mieux préparé.",
          "L'intervention sur une partie commune se fait sur ordre du syndic. Le plombier remet un compte rendu daté, qui sert à la copropriété pour son assurance et son carnet d'entretien.",
        ],
        after: [
          "Dans une petite copropriété sans gardien, désignez une personne qui ouvre aux intervenants : c'est souvent là que le temps se perd.",
        ],
      },
    ],
    faq: [
      {
        q: "DBP travaille-t-elle avec les syndics de la commune ?",
        a: "Les copropriétés font partie des clients visés par l'entreprise. Pour un syndic, indiquez l'adresse de l'immeuble, la nature de la demande et la personne à contacter pour l'accès.",
      },
      {
        q: "Peut-on obtenir un diagnostic avant de voter des travaux ?",
        a: "Oui, une visite permet de décrire l'état de l'installation et de chiffrer plusieurs options. Le syndic peut ensuite présenter ce diagnostic à l'assemblée générale.",
      },
      {
        q: "Comment prendre rendez-vous pour une copropriété ?",
        a: "Par la page contact, en choisissant « Copropriété », ou par téléphone au 01 42 45 91 35. Précisez l'étage, le local concerné et le moyen d'accès.",
      },
    ],
    ctaTitle: "Une copropriété bien chauffée, étage par étage.",
    ctaText: "Syndic, gardien ou copropriétaire : décrivez l'installation, DBP prépare le devis.",
    related: [PATHS.heating, PATHS.plumbing, "/plombier-chauffagiste-paris-19", "/plombier-chauffagiste-bagnolet"],
  },
  {
    path: "/plombier-chauffagiste-bagnolet",
    slug: "plombier-chauffagiste-bagnolet",
    zone: "Bagnolet",
    title: "Plombier chauffagiste à Bagnolet (93) : résidences | DBP",
    description:
      "Plombier chauffagiste à Bagnolet, près de la porte de Bagnolet : colonnes d'évacuation, fuites en résidence, radiateurs, chaudière. DBP Plomberie-Chauffage, Paris 20e.",
    h1: "Plombier chauffagiste à Bagnolet, près de la porte de Bagnolet",
    kicker: "Plomberie et chauffage · Bagnolet",
    lead: "Des résidences, des immeubles collectifs et des pavillons : un plombier chauffagiste voisin, à quelques minutes de la porte des Lilas.",
    brief:
      "Plombier chauffagiste à Bagnolet, DBP Plomberie-Chauffage intervient depuis Paris 20e, villa Gagliardini, de l'autre côté du boulevard périphérique. L'entreprise travaille dans les résidences, les immeubles collectifs et les pavillons de la commune : fuites, évacuations bouchées, radiateurs, robinets thermostatiques et chaudière.",
    contactType: "plomberie",
    service: "Plomberie et chauffage",
    crumb: "Plombier chauffagiste Bagnolet",
    photo: "plombier",
    photoPos: "40% 50%",
    caption: "Des mains de plombier, de Paris à Bagnolet",
    facts: [
      { label: "Commune", value: "Bagnolet (93)" },
      { label: "Logements", value: "Résidences, pavillons" },
      { label: "Depuis", value: "2007" },
    ],
    sections: [
      {
        h2: "Pourquoi l'eau remonte-t-elle dans un logement en rez-de-chaussée de résidence ?",
        answer:
          "Quand la colonne d'évacuation commune est obstruée, l'eau cherche la sortie la plus basse : le rez-de-chaussée ou le sous-sol. Les appareils du bas, douche ou lavabo, refoulent alors. Il faut prévenir le syndic, qui fait déboucher la colonne ; le plombier du logement ne peut pas agir seul.",
        paras: [
          "Dans une résidence collective, des dizaines de logements se vident dans les mêmes colonnes. Un bouchon à l'étage supérieur se manifeste d'abord chez les occupants du bas, parfois plusieurs jours avant qu'on ne le voie ailleurs.",
          "Un débouchage de colonne se prépare : accès aux regards, information des résidents, coupure éventuelle de l'eau. DBP peut intervenir sur demande du syndic, qui désigne la personne ouvrant les locaux techniques.",
        ],
        list: [
          "Débouchage d'une colonne d'évacuation commune",
          "Recherche de l'origine d'un refoulement",
          "Compte rendu daté remis au syndic",
        ],
      },
      {
        h2: "Un radiateur chauffe-t-il moins bien s'il est caché derrière un meuble ?",
        answer:
          "Oui. Un meuble, un rideau long ou un cache-radiateur trop fermé bloque la chaleur et empêche l'air de circuler. Le thermostat croit la pièce plus froide et fait chauffer davantage. Dégager l'appareil de quelques centimètres améliore le confort et la consommation.",
        paras: [
          "Dans les résidences de Bagnolet, les radiateurs sont souvent placés sous la fenêtre : c'est là que l'on pose volontiers un meuble bas. Avant de conclure à une panne, dégagez l'appareil et vérifiez qu'il chauffe de façon homogène.",
        ],
      },
      {
        h2: "Pavillon à Bagnolet : par où commencer pour moderniser le chauffage ?",
        paras: [
          "Pour un pavillon, la première étape est un état des lieux : âge de la chaudière, nombre et état des radiateurs, qualité de l'isolation. Un chauffagiste voit sur place si un entretien suffit ou si un remplacement s'impose.",
          "Les aides à la rénovation énergétique existent, mais leurs conditions changent : renseignez-vous auprès des organismes officiels avant de signer un devis, et demandez à l'entreprise ce que son devis couvre exactement.",
        ],
        after: [
          "DBP ne promet aucune aide ni aucun montant ; le devis précise seulement les travaux de plomberie et de chauffage prévus.",
        ],
      },
    ],
    faq: [
      {
        q: "Jusqu'où DBP se déplace-t-elle autour du 20e ?",
        a: "L'entreprise intervient dans les arrondissements et communes limitrophes, dont Bagnolet. Pour une adresse plus lointaine, la réponse dépend de la nature de la demande.",
      },
      {
        q: "Peut-on joindre un plombier le week-end à Bagnolet ?",
        a: "Les annuaires indiquent une ouverture du lundi au vendredi. Pour une urgence un week-end, téléphonez : l'entreprise vous dira ce qui est possible, sans promesse.",
      },
      {
        q: "Qu'est-ce qui dépend du syndic dans une résidence ?",
        a: "Les colonnes communes d'eau, d'évacuation et de chauffage, les locaux techniques et la chaufferie. Dans le logement, les appareils, les robinets et les radiateurs relèvent de l'occupant ou du propriétaire.",
      },
    ],
    ctaTitle: "Bagnolet, à quelques minutes de la porte des Lilas.",
    ctaText: "Décrivez la résidence ou le pavillon : DBP organise l'intervention.",
    related: [PATHS.plumbing, PATHS.heating, "/plombier-chauffagiste-les-lilas", "/plombier-chauffagiste-le-pre-saint-gervais"],
  },
];
