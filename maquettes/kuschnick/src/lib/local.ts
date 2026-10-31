import { PATHS } from "./site";
import type { Page } from "./types";

/**
 * Pages plombier × arrondissement voisin du 11e : 3e, 4e, 10e, 12e, 20e.
 * Chaque page part d'un type d'immeuble et d'une question propres au quartier, pour un texte réellement différent.
 * Repères de quartier institutionnels, à faire relire par un habitant. Aucun prix, délai ni chiffre inventé.
 */
export const localPages: Page[] = [
  {
    path: "/plombier-paris-3",
    slug: "plombier-paris-3",
    zone: "Paris 3e",
    title: "Plombier Paris 3e : Marais, immeubles anciens | Kuschnick",
    description:
      "Plombier à Paris 3e pour les immeubles anciens du Haut Marais : salles d'eau, évacuations, colonnes et robinetterie. Une maison du 11e fondée en 1957.",
    h1: "Plombier à Paris 3e, dans le Haut Marais",
    kicker: "Plomberie · Paris 3e",
    lead: "Des hôtels particuliers aux immeubles de la rue de Bretagne : la plomberie des bâtiments les plus anciens de Paris, par une maison voisine.",
    brief:
      "Plombier à Paris 3e, les Anciens Établissements Kuschnick interviennent dans le Haut Marais depuis leur atelier de la rue Trousseau, de l'autre côté du boulevard Beaumarchais. Créer une salle d'eau dans un appartement ancien, reprendre une évacuation, remplacer une colonne : la maison connaît les contraintes de ces immeubles très anciens.",
    contactType: "plomberie",
    service: "Plomberie",
    crumb: "Plombier Paris 3e",
    photo: "outils",
    photoPos: "40% 50%",
    caption: "Les outils, avant les tuyaux",
    facts: [
      { label: "Quartier", value: "Haut Marais" },
      { label: "Bâti", value: "XVIIe–XIXe" },
      { label: "Depuis", value: "1957" },
    ],
    sections: [
      {
        h2: "Peut-on créer une salle d'eau dans un appartement ancien du Marais ?",
        answer:
          "Souvent, oui, mais tout se joue sur l'évacuation. L'eau usée doit rejoindre une chute existante avec une pente suffisante, sans percer de poutre ni de mur porteur. Avant de dessiner la pièce, le plombier repère donc la chute la plus proche et le chemin possible des tuyaux sous le plancher.",
        paras: [
          "Dans le 3e, beaucoup d'appartements occupent d'anciens hôtels particuliers ou des immeubles des XVIIe et XVIIIe siècles, découpés au fil du temps. Les pièces d'eau y ont été ajoutées après coup, parfois loin des descentes. Un projet bien préparé évite les coffrages disgracieux et les évacuations qui s'engorgent.",
          "Le quartier est couvert par le plan de sauvegarde du Marais : les travaux qui touchent aux façades, aux parties communes ou aux éléments protégés passent par les autorisations prévues. La maison vous signale ce qui relève de votre syndic ou de ces démarches.",
        ],
        list: [
          "Création et déplacement de salles d'eau et de WC",
          "Raccordement aux chutes et reprise des évacuations",
          "Remplacement de robinetterie et de sanitaires",
          "Recherche de fuites sous parquet ou en faux plafond",
        ],
      },
      {
        h2: "Comment protéger les parquets et les boiseries pendant les travaux ?",
        answer:
          "En préparant le passage des tuyaux avant de déposer quoi que ce soit : repérage des lames à soulever, protection des sols et des boiseries, découpes limitées au strict nécessaire. Dans un appartement ancien, la plomberie se fait en artisan, avec la même attention que celle d'un menuisier du faubourg.",
        paras: [
          "Les lames de parquet anciennes se déposent et se reposent ; une moulure se contourne plutôt que de se casser. Ce soin a un coût en temps, que le devis présente clairement, mais il préserve ce qui fait la valeur d'un appartement du Marais.",
        ],
      },
      {
        h2: "Intervenez-vous pour les boutiques et les galeries du 3e ?",
        answer:
          "Oui. Les commerces, ateliers et galeries du Haut Marais ont souvent un point d'eau, un WC et parfois une petite cuisine en arrière-boutique. L'intervention s'organise selon vos horaires d'ouverture, pour réparer une fuite ou installer un équipement sans fermer plus que nécessaire.",
        paras: [
          "Pour un local commercial, précisez dans votre demande si les travaux touchent une canalisation commune à l'immeuble : le syndic ou le propriétaire des murs doit alors être informé.",
        ],
      },
    ],
    faq: [
      {
        q: "Êtes-vous loin du 3e arrondissement ?",
        a: "Non : la rue Trousseau est dans le 11e, à quelques minutes du boulevard Beaumarchais, qui sépare les deux arrondissements. Le Haut Marais fait partie du secteur habituel de la maison.",
      },
      {
        q: "Faut-il une autorisation pour des travaux de plomberie dans le Marais ?",
        a: "Pas pour une réparation ou un remplacement à l'intérieur d'un logement. Les travaux qui touchent la façade ou les parties communes passent par la copropriété et, le cas échéant, par les autorisations d'urbanisme.",
      },
      {
        q: "Que préparer avant la visite ?",
        a: "Des photos de la pièce, de l'évacuation existante et, si possible, un plan de l'appartement. Indiquez l'étage et les conditions d'accès à l'immeuble.",
      },
    ],
    ctaTitle: "Un projet de salle d'eau dans le Marais ?",
    ctaText: "Envoyez un plan et quelques photos : la maison étudie le passage des tuyaux.",
    related: [PATHS.plumbing, "/plombier-paris-4", "/plombier-paris-10", PATHS.heating],
  },
  {
    path: "/plombier-paris-4",
    slug: "plombier-paris-4",
    zone: "Paris 4e",
    title: "Plombier Paris 4e : Saint-Paul, îles, Hôtel de Ville",
    description:
      "Plombier à Paris 4e, de Saint-Paul à l'île Saint-Louis : fuites, robinetterie, chauffe-eau et colonnes d'immeubles anciens. Une maison du 11e depuis 1957.",
    h1: "Plombier à Paris 4e, de Saint-Paul aux îles",
    kicker: "Plomberie · Paris 4e",
    lead: "Le cœur historique de Paris, ses appartements de caractère et ses pied-à-terre : une plomberie qui s'organise aussi en votre absence.",
    brief:
      "Plombier à Paris 4e, les Anciens Établissements Kuschnick interviennent de Saint-Paul à l'île Saint-Louis et autour de l'Hôtel de Ville. Fuites, robinetterie, chauffe-eau, colonnes et évacuations : la maison du 11e, fondée en 1957, connaît les immeubles anciens du centre et s'organise avec les gardiens quand l'occupant est absent.",
    contactType: "plomberie",
    service: "Plomberie",
    crumb: "Plombier Paris 4e",
    photo: "cle",
    caption: "L'outil du plombier, sur l'établi",
    facts: [
      { label: "Quartiers", value: "Saint-Paul, îles" },
      { label: "Accès", value: "Gardien, clés" },
      { label: "Depuis", value: "1957" },
    ],
    sections: [
      {
        h2: "Pouvez-vous intervenir quand l'appartement est inoccupé ?",
        answer:
          "Oui, si l'accès est organisé à l'avance. Beaucoup de logements du 4e sont des pied-à-terre ou des locations : le gardien, une agence ou un voisin de confiance peut ouvrir. Vous recevez ensuite un compte rendu de l'intervention, avec des photos de la réparation et de l'installation.",
        paras: [
          "Une fuite dans un appartement vide se découvre souvent par le voisin du dessous. Dans ce cas, le premier geste est de couper l'arrivée d'eau du logement ; si personne ne sait où se trouve la vanne, le gardien ou le syndic peut couper la colonne le temps de l'intervention.",
        ],
        list: [
          "Recherche et réparation de fuites, y compris logement inoccupé",
          "Remplacement de chauffe-eau électriques et de groupes de sécurité",
          "Robinetterie, mitigeurs, robinets d'arrêt",
          "Débouchage et reprise d'évacuations",
        ],
      },
      {
        h2: "Pourquoi les immeubles du centre demandent-ils une attention particulière ?",
        answer:
          "Parce qu'ils sont parmi les plus anciens de Paris. Leurs réseaux ont été ajoutés, modifiés et prolongés pendant plus d'un siècle, souvent dans des cages d'escalier étroites et des murs épais. Chaque intervention commence par comprendre le parcours de l'eau, de la colonne jusqu'au robinet.",
        paras: [
          "Sur les îles, autour de la rue Saint-Antoine ou dans le quartier Saint-Gervais, les escaliers sont étroits et les caves anciennes. Le matériel se porte à la main, les pièces de rechange se prévoient avant la visite : une photo de l'installation dans la demande fait gagner un déplacement.",
        ],
      },
      {
        h2: "Faut-il changer un vieux chauffe-eau avant qu'il ne fuie ?",
        answer:
          "Quand il approche de la fin de sa vie, oui, c'est plus raisonnable. Un ballon qui fuit en votre absence peut causer un dégât des eaux chez les voisins. Le remplacement préventif se planifie, alors que la panne s'impose. Le groupe de sécurité, lui, se contrôle régulièrement.",
        paras: [
          "Dans les petits logements du 4e, le chauffe-eau est souvent logé dans un placard ou au-dessus d'une porte : la taille du nouvel appareil et son accès se vérifient lors de la visite.",
        ],
      },
    ],
    faq: [
      {
        q: "Intervenez-vous sur l'île Saint-Louis et l'île de la Cité ?",
        a: "Oui, les deux îles font partie du 4e arrondissement, que la maison dessert depuis la rue Trousseau. Précisez les conditions d'accès et de stationnement dans votre demande.",
      },
      {
        q: "Pouvez-vous envoyer des photos après l'intervention ?",
        a: "Pour un logement inoccupé, demandez-le lors de la prise de rendez-vous : un compte rendu avec photos vous permet de suivre l'intervention à distance.",
      },
      {
        q: "Que faire en cas de fuite chez le voisin du dessous ?",
        a: "Coupez l'eau de votre logement si vous le pouvez, prévenez le gardien ou le syndic, puis appelez le 01 43 43 12 33 pour organiser la recherche de fuite.",
      },
    ],
    ctaTitle: "Un pied-à-terre dans le 4e ?",
    ctaText: "Organisons l'accès : la maison intervient et vous envoie le compte rendu.",
    related: [PATHS.plumbing, "/plombier-paris-3", "/plombier-paris-12", PATHS.heating],
  },
  {
    path: "/plombier-paris-10",
    slug: "plombier-paris-10",
    zone: "Paris 10e",
    title: "Plombier Paris 10e : commerces, cuisines, évacuations",
    description:
      "Plombier à Paris 10e, du canal Saint-Martin au faubourg Saint-Denis : évacuations, cuisines de restaurants, sanitaires et fuites. Maison du 11e depuis 1957.",
    h1: "Plombier à Paris 10e, du canal aux faubourgs",
    kicker: "Plomberie · Paris 10e",
    lead: "Restaurants, boutiques, ateliers et appartements : la plomberie d'un arrondissement commerçant, par une maison voisine installée depuis 1957.",
    brief:
      "Plombier à Paris 10e, les Anciens Établissements Kuschnick interviennent du canal Saint-Martin au faubourg Saint-Denis, depuis leur atelier du 11e. Évacuations de cuisines, sanitaires de commerces, fuites et colonnes d'immeubles : la maison travaille pour les restaurateurs, les commerçants, les particuliers et les copropriétés de cet arrondissement très vivant.",
    contactType: "plomberie",
    service: "Plomberie",
    crumb: "Plombier Paris 10e",
    photo: "atelier",
    caption: "Le travail d'atelier, le geste juste",
    facts: [
      { label: "Pour", value: "Commerces" },
      { label: "Quartiers", value: "Canal, faubourgs" },
      { label: "Depuis", value: "1957" },
    ],
    sections: [
      {
        h2: "Pourquoi les évacuations des restaurants s'engorgent-elles ?",
        answer:
          "Parce que les graisses de cuisson figent dans les canalisations en refroidissant, puis retiennent tout ce qui passe. Dans un immeuble ancien, la pente des évacuations est parfois faible et les coudes nombreux. Un débouchage ponctuel soulage, mais il faut souvent reprendre une partie du réseau pour régler le problème durablement.",
        paras: [
          "Le 10e compte un grand nombre de restaurants, de cafés et de commerces de bouche, notamment le long du faubourg Saint-Denis et autour du canal Saint-Martin. Leurs cuisines sollicitent fortement des évacuations conçues à l'origine pour des logements.",
          "La maison examine le parcours de l'évacuation, la pente, les raccordements à la chute de l'immeuble, et propose les corrections utiles. Pour un établissement recevant du public, l'intervention se cale sur les heures de fermeture.",
        ],
        list: [
          "Débouchage et reprise d'évacuations de cuisines",
          "Plomberie de sanitaires de commerces et de bureaux",
          "Raccordement de lave-vaisselle et d'équipements",
          "Recherche de fuites en sous-sol et en cave",
        ],
      },
      {
        h2: "Comment intervenir sans fermer son commerce ?",
        answer:
          "En planifiant. La maison convient avec vous d'un créneau avant l'ouverture, pendant la fermeture hebdomadaire ou en fin de service, et prépare les pièces à partir des photos envoyées. Seule une fuite active impose d'intervenir tout de suite ; tout le reste peut s'organiser autour de votre activité.",
        paras: [
          "Pour les locaux situés en rez-de-chaussée d'immeuble, les canalisations traversent souvent la cave commune : l'accord et la présence du gardien facilitent l'intervention.",
        ],
      },
      {
        h2: "Intervenez-vous aussi chez les particuliers du 10e ?",
        answer:
          "Bien sûr. Les immeubles du 10e, autour des gares, du canal ou de la rue de Lancry, abritent de nombreux appartements anciens. Fuite, robinetterie, salle de bains, colonne de copropriété : la maison y intervient comme dans le 11e voisin, avec le même soin et le même interlocuteur.",
        paras: [
          "Le 10e et le 11e se touchent le long du boulevard du Temple et de la rue du Faubourg-du-Temple : depuis la rue Trousseau, le quartier du canal n'est qu'à quelques stations de métro.",
        ],
      },
    ],
    faq: [
      {
        q: "Pouvez-vous intervenir avant l'ouverture d'un restaurant ?",
        a: "Oui, l'intervention peut se programmer à un horaire compatible avec votre service. Indiquez vos horaires d'ouverture et le créneau souhaité dans votre demande.",
      },
      {
        q: "Un débouchage suffit-il pour une cuisine professionnelle ?",
        a: "Il soulage, mais si les engorgements reviennent, le réseau doit être examiné : pente, coudes, raccordement à la chute. Le devis propose alors les corrections nécessaires.",
      },
      {
        q: "Travaillez-vous pour les syndics du 10e ?",
        a: "Oui, pour les colonnes, les évacuations et les réseaux des parties communes. Indiquez l'adresse de l'immeuble et le contact du gardien pour l'accès.",
      },
    ],
    ctaTitle: "Une évacuation qui s'engorge ?",
    ctaText: "Planifions l'intervention autour de votre activité.",
    related: [PATHS.plumbing, "/plombier-paris-3", "/plombier-paris-20", PATHS.chimney],
  },
  {
    path: "/plombier-paris-12",
    slug: "plombier-paris-12",
    zone: "Paris 12e",
    title: "Plombier Paris 12e : Aligre, Bercy et copropriétés",
    description:
      "Plombier à Paris 12e, d'Aligre au Viaduc des Arts et à Bercy : colonnes de copropriété, fuites, chauffe-eau et salles de bains. Maison du 11e depuis 1957.",
    h1: "Plombier à Paris 12e, d'Aligre à Bercy",
    kicker: "Plomberie · Paris 12e",
    lead: "Le voisin immédiat de la rue Trousseau : le faubourg Saint-Antoine se prolonge dans le 12e, ses immeubles et ses copropriétés aussi.",
    brief:
      "Plombier à Paris 12e, les Anciens Établissements Kuschnick sont à deux pas : la rue Trousseau donne sur le faubourg Saint-Antoine, qui sépare le 11e du 12e. D'Aligre au Viaduc des Arts et jusqu'à Bercy, la maison intervient pour les colonnes de copropriété, les fuites, les chauffe-eau et les salles de bains.",
    contactType: "copropriete",
    service: "Plomberie",
    crumb: "Plombier Paris 12e",
    photo: "radiateur",
    photoPos: "50% 60%",
    caption: "Les réseaux d'un immeuble ancien",
    facts: [
      { label: "Distance", value: "Le faubourg" },
      { label: "Pour", value: "Copropriétés" },
      { label: "Depuis", value: "1957" },
    ],
    sections: [
      {
        h2: "Quand faut-il remplacer une colonne d'eau en copropriété ?",
        answer:
          "Quand les fuites se répètent d'un étage à l'autre, quand l'eau arrive colorée après une coupure ou quand la pression faiblit dans les étages hauts. Une colonne ancienne se remplace en général entièrement, en une opération votée par la copropriété, plutôt que par réparations successives qui finissent par coûter davantage.",
        paras: [
          "Le 12e réunit des immeubles très différents : immeubles de faubourg autour d'Aligre, immeubles de rapport du boulevard Diderot, ensembles plus récents vers Bercy. Les colonnes y ont des âges et des matériaux variés ; le diagnostic commence par les identifier, cave par cave.",
          "La maison prépare avec le syndic un devis lisible pour l'assemblée générale : longueur de colonne, nombre de piquages, ordre des interventions dans les appartements, coupures d'eau à annoncer.",
        ],
        list: [
          "Diagnostic et remplacement de colonnes montantes",
          "Remplacement de compteurs divisionnaires et de vannes",
          "Recherche de fuites entre étages",
          "Chauffe-eau, salles de bains et robinetterie",
        ],
      },
      {
        h2: "Comment se passe un chantier de colonne pour les occupants ?",
        answer:
          "L'eau est coupée sur la colonne pendant des périodes annoncées à l'avance par affichage. Les compagnons passent dans chaque appartement concerné pour raccorder le nouveau piquage, en protégeant les sols. À la fin, chaque logement est remis en eau et contrôlé avant que l'équipe ne quitte l'immeuble.",
        paras: [
          "Les occupants absents laissent une clé au gardien ou conviennent d'un rendez-vous : un seul appartement inaccessible peut retarder toute la colonne. Le planning en tient compte dès le départ.",
        ],
      },
      {
        h2: "Pourquoi choisir une maison aussi proche ?",
        answer:
          "Parce que la proximité compte quand une fuite se déclare ou qu'un chantier dure plusieurs jours. Depuis la rue Trousseau, le marché d'Aligre et le Viaduc des Arts sont à quelques minutes à pied. La maison connaît ces immeubles, leurs caves et leurs gardiens, et revient facilement si besoin.",
        paras: [
          "Le faubourg Saint-Antoine, où ébénistes et artisans travaillaient côte à côte, s'étend des deux côtés de la rue. Les Anciens Établissements Kuschnick en sont un voisin depuis 1957.",
        ],
      },
    ],
    faq: [
      {
        q: "Intervenez-vous près du marché d'Aligre ?",
        a: "Oui, c'est l'un des quartiers les plus proches de l'atelier de la rue Trousseau, de l'autre côté du faubourg Saint-Antoine.",
      },
      {
        q: "Pouvez-vous présenter un devis en assemblée générale ?",
        a: "Le devis est rédigé pour être compris par les copropriétaires : travaux, étapes, coupures d'eau. Le syndic le joint à la convocation de l'assemblée générale.",
      },
      {
        q: "Travaillez-vous aussi vers Bercy et la porte de Charenton ?",
        a: "Oui, tout le 12e fait partie du secteur de la maison. Précisez l'adresse, l'étage et les conditions d'accès dans votre demande.",
      },
    ],
    ctaTitle: "Une colonne à remplacer dans le 12e ?",
    ctaText: "Le devis est prêt pour votre assemblée générale.",
    related: [PATHS.plumbing, "/plombier-paris-4", "/plombier-paris-20", PATHS.roofing],
  },
  {
    path: "/plombier-paris-20",
    slug: "plombier-paris-20",
    zone: "Paris 20e",
    title: "Plombier Paris 20e : Charonne, Belleville, maisons",
    description:
      "Plombier à Paris 20e, de Charonne à Belleville et Ménilmontant : maisons de ville, villas, cours, branchements et chauffe-eau. Maison du 11e depuis 1957.",
    h1: "Plombier à Paris 20e, de Charonne à Belleville",
    kicker: "Plomberie · Paris 20e",
    lead: "Maisons de ville, villas et cités du 20e : une plomberie qui va du compteur au jardin, par une maison qui travaille au bout de la rue de Charonne.",
    brief:
      "Plombier à Paris 20e, les Anciens Établissements Kuschnick prolongent la rue de Charonne jusqu'au village de Charonne, à Belleville et Ménilmontant. Maisons de ville, villas, cités et petits immeubles sur cour : la maison intervient sur les branchements, les chauffe-eau, les évacuations et les eaux pluviales des cours.",
    contactType: "plomberie",
    service: "Plomberie",
    crumb: "Plombier Paris 20e",
    photo: "toiture",
    photoPos: "50% 40%",
    caption: "Toits, souches et lucarnes des maisons de ville",
    facts: [
      { label: "Bâti", value: "Maisons, villas" },
      { label: "Quartiers", value: "Charonne" },
      { label: "Depuis", value: "1957" },
    ],
    sections: [
      {
        h2: "Une maison de ville se dépanne-t-elle comme un appartement ?",
        answer:
          "Pas tout à fait. Dans une maison, tout le réseau vous appartient : du compteur au robinet, et jusqu'au regard qui rejoint l'égout. Une fuite peut se trouver sous la cour, une évacuation peut s'engorger dans le jardin. Le plombier raisonne donc sur l'ensemble de la parcelle, pas seulement sur la pièce.",
        paras: [
          "Le 20e garde des villas, des cités et des maisons de ville, autour de la rue de Bagnolet, du village de Charonne ou sur les pentes de Belleville et de Ménilmontant. Ces maisons ont souvent été agrandies, et leurs réseaux avec elles : une extension ajoutée, une salle d'eau aménagée sous les combles.",
        ],
        list: [
          "Recherche de fuites après compteur, y compris enterrées",
          "Reprise d'évacuations, de regards et de canalisations de cour",
          "Gestion des eaux pluviales : descentes, raccordements",
          "Chauffe-eau, salles d'eau sous combles, sanitaires",
        ],
      },
      {
        h2: "Que faire si le compteur tourne alors que tout est fermé ?",
        answer:
          "C'est le signe d'une fuite après compteur. Relevez l'index, ne tirez pas d'eau pendant une heure, puis relevez-le à nouveau : s'il a bougé, l'eau s'échappe quelque part. Notez ces relevés et transmettez-les avec votre demande ; ils orientent la recherche de fuite dès l'arrivée du plombier.",
        paras: [
          "Une chasse d'eau qui coule en continu ou un groupe de sécurité de chauffe-eau qui goutte sont les causes les plus fréquentes, et les plus simples. Une fuite enterrée sous une cour demande davantage de méthode : on procède par tronçons pour la localiser avant d'ouvrir.",
        ],
      },
      {
        h2: "Les eaux pluviales d'une cour sont-elles l'affaire du plombier ?",
        answer:
          "Souvent, oui. Les descentes d'eau du toit rejoignent des canalisations qui traversent la cour avant de rejoindre le réseau public. Quand une cour inonde à chaque orage, le problème se situe en général dans ces canalisations ou dans un regard obstrué, et la maison couvre à la fois le toit et le sol.",
        paras: [
          "C'est l'avantage d'une entreprise qui pratique la couverture et la plomberie : la gouttière, la descente et la canalisation enterrée sont traitées comme un seul parcours de l'eau.",
        ],
      },
    ],
    faq: [
      {
        q: "Intervenez-vous dans les villas et cités privées du 20e ?",
        a: "Oui. Indiquez le code ou les conditions d'accès à la villa dans votre demande, ainsi que l'emplacement du compteur si vous le connaissez.",
      },
      {
        q: "Pouvez-vous chercher une fuite sous une cour sans tout casser ?",
        a: "La recherche se fait par étapes : relevés de compteur, isolement des tronçons, écoute. L'ouverture du sol n'intervient qu'une fois la zone de la fuite localisée.",
      },
      {
        q: "La maison est-elle loin du 20e ?",
        a: "Non : la rue Trousseau donne sur la rue de Charonne, qui mène directement au 20e. Charonne, Bagnolet et le Père-Lachaise sont dans le secteur habituel de la maison.",
      },
    ],
    ctaTitle: "Une maison de ville dans le 20e ?",
    ctaText: "Du compteur au regard de la cour, la maison s'occupe de tout le parcours de l'eau.",
    related: [PATHS.plumbing, PATHS.roofing, "/plombier-paris-12", "/plombier-paris-10"],
  },
];
