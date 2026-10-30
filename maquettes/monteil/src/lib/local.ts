import { PATHS } from "./site";
import type { Page } from "./types";

/**
 * Pages plombier × arrondissement voisin du 11e : 3e, 4e, 10e, 12e, 20e.
 * Chaque page part d'un type d'immeuble et d'une question propres au quartier, pour un texte réellement différent.
 * Repères de quartier institutionnels, à faire relire par un habitant. Aucun prix, délai ni chiffre inventé :
 * seuls les faits du site actuel de la maison sont repris (techniques, chantiers, forfait de déplacement, astreinte).
 */
export const localPages: Page[] = [
  {
    path: "/plombier-paris-3",
    zone: "Paris 3e",
    title: "Plombier Paris 3e : Marais, immeubles anciens | Monteil",
    description:
      "Plombier à Paris 3e, du Haut Marais au Temple : salles d'eau, évacuations et colonnes d'immeubles anciens. Une maison du 11e fondée en 1964, rue Saint-Ambroise.",
    h1: "Plombier à Paris 3e, du Marais au Temple",
    kicker: "Plomberie · Paris 3e",
    lead: "Des hôtels particuliers du Marais aux immeubles de la rue de Bretagne : la plomberie des bâtiments les plus anciens de Paris, par une maison voisine.",
    brief:
      "Plombier à Paris 3e, Monteil & Cie intervient dans le Marais et autour du Temple depuis son atelier de la rue Saint-Ambroise, à quelques stations de métro. Créer une salle d'eau dans un appartement ancien, reprendre une évacuation, remplacer une colonne : la maison connaît les contraintes de ces immeubles très anciens.",
    contactType: "plomberie",
    service: "Plomberie",
    crumb: "Plombier Paris 3e",
    photo: "equipe-1",
    caption: "Une intervention, de l'autre côté du boulevard",
    facts: [
      { label: "Quartier", value: "Marais, Temple" },
      { label: "Métro", value: "Filles du Calvaire" },
      { label: "Depuis", value: "1964" },
    ],
    sections: [
      {
        h2: "Peut-on créer une salle d'eau dans un appartement ancien du Marais ?",
        answer:
          "Souvent, oui, mais tout se joue sur l'évacuation. L'eau usée doit rejoindre une chute existante avec une pente suffisante, sans percer une poutre ni un mur porteur. Avant de dessiner la pièce, le plombier repère donc la chute la plus proche et le chemin possible des tuyaux.",
        paras: [
          "Dans le 3e, beaucoup d'appartements occupent d'anciens hôtels particuliers ou des immeubles des XVIIe et XVIIIe siècles, découpés au fil du temps. Les pièces d'eau y ont été ajoutées après coup, parfois loin des descentes. Un projet bien préparé évite les coffrages disgracieux et les évacuations qui s'engorgent.",
          "Le quartier est protégé : les travaux qui touchent aux façades, aux parties communes ou aux éléments protégés passent par les autorisations prévues. La maison vous signale ce qui relève de votre syndic ou de démarches particulières.",
        ],
        list: [
          "Création et déplacement de salles d'eau et de WC",
          "Raccordement aux chutes et reprise des évacuations",
          "Remplacement de robinetterie et de sanitaires",
          "Recherche de fuite sous parquet ou en faux plafond",
        ],
      },
      {
        h2: "Comment protéger les parquets et les boiseries pendant les travaux ?",
        answer:
          "En préparant le chantier comme une intervention de précision : protection des sols dès l'entrée, passage des tuyaux par les chemins qui abîment le moins, et recherche de fuite non invasive plutôt que démolition quand une cloison est en cause. La remise en état des finitions est incluse.",
        paras: [
          "Les parquets anciens, les moulures et les cloisons en plâtre supportent mal les chantiers brutaux. Pour une fuite, la caméra thermique et l'écoute des canalisations évitent d'ouvrir à l'aveugle : la maison ne perce qu'une fois la zone localisée.",
        ],
      },
      {
        h2: "Qui s'occupe des petits immeubles de copropriété du Marais ?",
        paras: [
          "Les immeubles du 3e sont souvent de petites copropriétés, avec peu de lots et un syndic bénévole ou professionnel. La maison, qui travaille avec des syndics parisiens, propose des contrats de maintenance préventive et le repérage des réseaux.",
          "Une colonne repérée et étiquetée se coupe sans tâtonner le jour où une fuite survient. C'est un gain de temps réel dans des bâtiments où personne ne se souvient du tracé d'origine.",
        ],
      },
    ],
    faq: [
      {
        q: "Où se trouve l'atelier par rapport au Marais ?",
        a: "Au 35, rue Saint-Ambroise, dans le 11e. Depuis le Marais, la ligne 3 permet de rejoindre la rue Saint-Maur et la ligne 9 la station Saint-Ambroise, ce qui garde la maison proche de ses chantiers du 3e.",
      },
      {
        q: "Remplacez-vous les anciennes tuyauteries en plomb ?",
        a: "Oui, c'est une prestation de la maison. Dans un immeuble ancien du Marais, le devis précise les tronçons à remplacer et la remise en état des finitions après le passage des tuyaux.",
      },
      {
        q: "Un forfait de déplacement est-il demandé ?",
        a: "Selon le site actuel de la maison, un forfait de 70 € TTC est facturé aux particuliers et déduit du devis en cas d'acceptation. Les copropriétés sous contrat n'ont pas de frais de déplacement.",
      },
      {
        q: "Travaillez-vous pour les commerces du quartier ?",
        a: "La maison intervient pour les particuliers, les syndics et les gestionnaires. Pour un local commercial, expliquez l'usage des lieux dans votre demande afin que le compagnon prépare l'intervention.",
      },
    ],
    ctaTitle: "Un appartement ancien du Marais à reprendre ?",
    ctaText: "Décrivez les lieux et joignez des photos : un compagnon vous rappelle.",
    related: [PATHS.plumbing, PATHS.bathroom, "/plombier-paris-4", "/plombier-paris-10"],
  },
  {
    path: "/plombier-paris-4",
    zone: "Paris 4e",
    title: "Plombier Paris 4e : Bastille, Saint-Paul et îles | Monteil",
    description:
      "Plombier et couvreur à Paris 4e, de la Bastille à l'île Saint-Louis : colonnes en fonte, toitures en zinc, copropriétés anciennes. Monteil & Cie, depuis 1964.",
    h1: "Plombier à Paris 4e, de la Bastille à Saint-Paul",
    kicker: "Plomberie · Paris 4e",
    lead: "Des immeubles de la place des Vosges à ceux de l'île Saint-Louis : colonnes, toitures et réseaux des copropriétés les plus anciennes de la rive droite.",
    brief:
      "Plombier et couvreur à Paris 4e, Monteil & Cie intervient de la Bastille à l'île Saint-Louis. Colonnes en fonte, réseaux d'immeubles anciens, toitures en zinc et en ardoise, travaux sur corde dans les cours étroites : la maison, installée rue Saint-Ambroise, suit syndics et copropriétaires du quartier.",
    contactType: "copropriete",
    service: "Plomberie et couverture",
    crumb: "Plombier Paris 4e",
    photo: "cordiste",
    caption: "Un cordiste de la maison en hauteur",
    facts: [
      { label: "Quartier", value: "Bastille, Saint-Paul" },
      { label: "Métro", value: "Bastille" },
      { label: "Depuis", value: "1964" },
    ],
    sections: [
      {
        h2: "Pourquoi remplacer une colonne en fonte dans un immeuble du 4e ?",
        answer:
          "Parce qu'une colonne d'eaux usées en fonte vieillit de l'intérieur : elle se corrode, se fissure et finit par fuir dans les étages. Le remplacement par tronçons, en site occupé, évite les dégâts des eaux et se prépare avec le syndic.",
        paras: [
          "La maison a remplacé une colonne en fonte dans un immeuble de sept étages, par tronçons nocturnes pour limiter la gêne aux résidents. Ce type de chantier convient aux copropriétés du 4e, dont les immeubles anciens ont souvent conservé leurs colonnes d'origine.",
        ],
        list: [
          "Remplacement de colonnes d'eaux usées en fonte",
          "Dépose et repose de réseaux en parties communes",
          "Remplacement de vannes d'arrêt et de disconnecteurs",
          "Étiquetage complet des réseaux",
        ],
      },
      {
        h2: "Comment réparer un toit quand la cour est trop étroite pour un échafaudage ?",
        answer:
          "Par une intervention sur corde. Le cordiste accède aux façades, aux corniches et aux toitures sans échafaudage ni autorisation de voirie, ce qui convient aux cours étroites et aux rues piétonnes. La même équipe peut ensuite refaire le zinc ou remplacer les ardoises.",
        paras: [
          "Entre les rues du Marais historique et celles de l'île Saint-Louis, les toitures en zinc et en ardoise dominent. Noues, chatières et abergements y demandent un entretien régulier, que la maison assure avec des compagnons formés au travail en hauteur.",
        ],
      },
      {
        h2: "Quel contrat pour une copropriété du 4e ?",
        paras: [
          "Beaucoup d'immeubles du 4e sont gérés par des syndics qui souhaitent une seule maison pour la plomberie, le chauffage et la toiture. Les contrats de maintenance préventive de Monteil & Cie répondent à ce besoin, avec des interlocuteurs dédiés.",
          "L'astreinte de nuit et de week-end, réservée aux copropriétés sous contrat, couvre les urgences de l'immeuble sans que les occupants aient à chercher un numéro au milieu de la nuit.",
        ],
      },
    ],
    faq: [
      {
        q: "Intervenez-vous sur l'île Saint-Louis ?",
        a: "La maison intervient dans tous les arrondissements de Paris, le 4e compris. Précisez l'adresse exacte dans votre demande : les contraintes d'accès et de stationnement se préparent avant le chantier.",
      },
      {
        q: "Peut-on travailler dans un immeuble occupé ?",
        a: "Oui. La maison a conduit des chantiers en site occupé, par tronçons de nuit, avec remise en état des finitions. L'organisation est définie avec le syndic avant le début des travaux.",
      },
      {
        q: "Comment mettre en place un contrat de maintenance ?",
        a: "En écrivant au service client par la page contact, en choisissant « Copropriété » et en indiquant l'adresse de l'immeuble. La maison répond avec une proposition adaptée.",
      },
      {
        q: "Les travaux sur corde sont-ils sûrs ?",
        a: "Ils sont réalisés par des compagnons habilités, formés aux travaux sur corde lisse. Chaque site est étudié avant l'intervention, avec les mesures de sécurité propres à l'accès.",
      },
    ],
    ctaTitle: "Un immeuble du 4e à entretenir ?",
    ctaText: "Indiquez l'adresse et la nature du souci : la maison propose une visite.",
    related: [PATHS.syndic, PATHS.rope, PATHS.roofing, "/plombier-paris-3"],
  },
  {
    path: "/plombier-paris-10",
    zone: "Paris 10e",
    title: "Plombier Paris 10e : canal Saint-Martin, gares | Monteil",
    description:
      "Plombier à Paris 10e, du canal Saint-Martin aux gares de l'Est et du Nord : fuite, dégât des eaux, chaudière collective et rez-de-chaussée commerçants. Monteil & Cie.",
    h1: "Plombier à Paris 10e, du canal aux gares",
    kicker: "Plomberie · Paris 10e",
    lead: "Immeubles de rapport, rez-de-chaussée commerçants et appartements en étage : la plomberie d'un arrondissement dense, par une maison du 11e voisin.",
    brief:
      "Plombier à Paris 10e, Monteil & Cie travaille entre le canal Saint-Martin, la gare de l'Est et la gare du Nord. Dégâts des eaux entre voisins, chaudière collective, rez-de-chaussée commerçants : la maison localise la fuite sans casser inutilement, la répare et remet l'ensemble en état.",
    contactType: "plomberie",
    service: "Plomberie",
    crumb: "Plombier Paris 10e",
    photo: "equipe-fuite",
    caption: "Une recherche de fuite par un technicien",
    facts: [
      { label: "Quartier", value: "Canal, gares" },
      { label: "Voisin", value: "Le 11e, par République" },
      { label: "Depuis", value: "1964" },
    ],
    sections: [
      {
        h2: "Que faire en cas de dégât des eaux entre voisins dans le 10e ?",
        answer:
          "Couper l'eau si possible, prévenir le voisin et le syndic, photographier les dégâts, puis faire localiser l'origine. Dans un immeuble dense, la fuite vient rarement de l'étage où l'on voit la tache ; une recherche méthodique évite les accusations hâtives.",
        paras: [
          "La maison localise l'origine d'une fuite par thermographie, écoute électro-acoustique, gaz traceur ou inspection télévisuelle, puis remet un rapport d'intervention. Ce document sert de base aux échanges avec l'assurance et le syndic, sans rien démolir avant d'avoir trouvé.",
        ],
        list: [
          "Thermographie infrarouge des cloisons et plafonds",
          "Écoute électro-acoustique des canalisations encastrées",
          "Gaz traceur sous dalle ou bitume",
          "Rapport d'intervention détaillé",
        ],
      },
      {
        h2: "Comment entretenir une chaudière collective dans un immeuble de rapport ?",
        answer:
          "Par un contrat d'entretien annuel et une surveillance de la pression, du circulateur et de l'évacuation des fumées. Les techniciens gaz de la maison, habilités gaz naturel et propane, assurent dépannage et maintenance des installations d'immeuble.",
        paras: [
          "Beaucoup d'immeubles du 10e, construits au XIXe siècle autour des gares, ont gardé un chauffage central. Les réseaux de distribution et les radiateurs vieillissent avec la chaufferie : un désembouage, une purge ou un remplacement de circulateur se planifie mieux avant l'hiver.",
        ],
      },
      {
        h2: "Quels travaux pour un local commercial au rez-de-chaussée ?",
        paras: [
          "Sous les logements, les commerces du 10e dépendent des mêmes colonnes. Une fuite dans le local d'un restaurateur ou d'un commerçant peut venir de l'étage au-dessus, et inversement. La maison intervient pour les uns et les autres, en coordonnant avec le syndic.",
          "Remplacement de sanitaires, reprise d'évacuations, création d'un point d'eau : les demandes se précisent par le formulaire, avec l'adresse et des photos du local.",
        ],
      },
    ],
    faq: [
      {
        q: "Intervenez-vous près de la gare de l'Est et de la gare du Nord ?",
        a: "Oui, la maison intervient dans tous les arrondissements de Paris. Depuis la rue Saint-Ambroise, les quartiers de la gare de l'Est et du canal Saint-Martin se rejoignent en quelques stations de métro.",
      },
      {
        q: "Qui paie la recherche de fuite entre voisins ?",
        a: "Cela dépend de l'origine de la fuite et des contrats d'assurance de chacun. La maison localise et documente l'origine ; la répartition relève de votre assurance et de votre syndic.",
      },
      {
        q: "Peut-on obtenir une astreinte pour notre immeuble ?",
        a: "Oui, par un contrat avec la maison, réservé aux syndics et copropriétés. L'astreinte couvre les urgences de nuit et de week-end, 24 h sur 24.",
      },
      {
        q: "Remplacez-vous des vannes générales ?",
        a: "Oui. La maison a remplacé douze vannes d'arrêt et disconnecteurs dans un immeuble parisien, avec étiquetage complet des réseaux, un chantier utile à toute copropriété du 10e.",
      },
    ],
    ctaTitle: "Un dégât des eaux dans le 10e ?",
    ctaText: "Envoyez des photos de la tache et de l'étage au-dessus : la maison vous guide.",
    related: [PATHS.leak, PATHS.heating, PATHS.audit, "/plombier-paris-3"],
  },
  {
    path: "/plombier-paris-12",
    zone: "Paris 12e",
    title: "Plombier Paris 12e : Bercy, Nation, faubourg | Monteil",
    description:
      "Plombier à Paris 12e, d'Aligre à Bercy et à Nation : résidences récentes, parkings souterrains, immeubles du faubourg Saint-Antoine. Monteil & Cie, depuis 1964.",
    h1: "Plombier à Paris 12e, d'Aligre à Bercy",
    kicker: "Plomberie · Paris 12e",
    lead: "Des immeubles du faubourg Saint-Antoine aux résidences de Bercy : les réseaux d'un arrondissement à deux visages, par la maison voisine du 11e.",
    brief:
      "Plombier à Paris 12e, Monteil & Cie intervient d'Aligre à Bercy et jusqu'à la Nation. Immeubles du faubourg Saint-Antoine, résidences plus récentes, parkings souterrains : la maison remplace canalisations, vannes et réseaux, entretient le chauffage collectif et rénove les salles de bains.",
    contactType: "renovation",
    service: "Plomberie et rénovation",
    crumb: "Plombier Paris 12e",
    photo: "equipe-5",
    caption: "Un compagnon sous un évier",
    facts: [
      { label: "Quartier", value: "Aligre, Bercy, Nation" },
      { label: "Voisin", value: "Le 11e, par le faubourg" },
      { label: "Depuis", value: "1964" },
    ],
    sections: [
      {
        h2: "Quels réseaux fatiguent le plus dans les résidences du 12e ?",
        answer:
          "Souvent ceux des sous-sols : canalisations en plafond de parking, colonnes en fonte et collecteurs. Moins visibles que les colonnes d'étage, ils sont remplacés lorsque l'usure apparaît. La maison les dépose et pose un réseau neuf en PVC sans fermer le parking.",
        paras: [
          "Plusieurs chantiers de parkings souterrains figurent dans les réalisations de la maison : remplacement de canalisations vétustes, fixation en paroi, manchons inox sur un réseau en fonte, intervention en présence d'amiante avec isolation thermique.",
        ],
      },
      {
        h2: "Comment rénover une salle de bains dans un immeuble du faubourg Saint-Antoine ?",
        answer:
          "En commençant par la visite, qui révèle l'état des réseaux et de l'évacuation. Les immeubles du faubourg ont des planchers et des chutes d'âges différents : le compagnon adapte la douche, le carrelage et les arrivées d'eau à ce qui existe, sans promesse avant d'avoir vu.",
        paras: [
          "Entre le marché d'Aligre et la Nation, beaucoup d'appartements sont d'anciens logements d'ouvriers ou d'artisans réaménagés. La salle de bains y est souvent la pièce la plus contrainte, ce qui plaide pour un projet complet et un interlocuteur unique.",
        ],
        steps: [
          { t: "Visite et relevé", d: "État du plancher, des arrivées d'eau et de la chute d'évacuation." },
          { t: "Devis détaillé", d: "Conception, démolition, réseaux, carrelage, sanitaires." },
          { t: "Chantier suivi", d: "Un seul interlocuteur, du premier jour à la réception." },
        ],
      },
      {
        h2: "Quel chauffage pour les immeubles collectifs du 12e ?",
        paras: [
          "Les résidences de Bercy et les immeubles plus anciens du 12e se chauffent souvent par une chaufferie collective. Dépannage de chaudière gaz, entretien annuel réglementaire, prévention de la légionellose et réseaux de chauffage central sont des prestations de la maison.",
          "Pour un copropriétaire, le point d'entrée est le syndic : le contrat d'entretien se discute en assemblée générale, la maison fournissant les éléments techniques.",
        ],
      },
    ],
    faq: [
      {
        q: "Intervenez-vous du côté de Bercy et de la gare de Lyon ?",
        a: "Oui, la maison intervient dans tous les arrondissements de Paris et en proche Île-de-France. Indiquez l'adresse exacte du chantier dans votre demande pour préparer l'accès et le matériel.",
      },
      {
        q: "Que devient le parking pendant les travaux ?",
        a: "Sur l'un des chantiers présentés par la maison, le parking souterrain est resté ouvert pendant les travaux de dépose et de repose du réseau. Cette organisation se prépare avec le syndic.",
      },
      {
        q: "Le diagnostic amiante est-il nécessaire ?",
        a: "Oui. En présence d'amiante, un repérage avant travaux est obligatoire et doit être fourni avant l'intervention. Les compagnons de la maison sont habilités sous-section 4.",
      },
      {
        q: "Comment obtenir un devis pour une salle de bains ?",
        a: "Par la page contact, en choisissant « Rénovation de salle de bains » et en joignant des photos. Le devis est établi après visite ; le forfait de déplacement de 70 € TTC est déduit en cas d'acceptation.",
      },
    ],
    ctaTitle: "Un projet de réseaux ou de salle de bains dans le 12e ?",
    ctaText: "Décrivez les lieux : la maison fixe une visite.",
    related: [PATHS.bathroom, PATHS.works, PATHS.heating, "/plombier-paris-20"],
  },
  {
    path: "/plombier-paris-20",
    zone: "Paris 20e",
    title: "Plombier Paris 20e : Belleville, Ménilmontant | Monteil",
    description:
      "Plombier à Paris 20e, de Ménilmontant à Gambetta et à Belleville : pression d'eau en étage, petits immeubles et cours, chaudière individuelle. Monteil & Cie.",
    h1: "Plombier à Paris 20e, de Ménilmontant à Gambetta",
    kicker: "Plomberie · Paris 20e",
    lead: "Les pentes de Belleville, les cours et les petits immeubles du faubourg : la plomberie d'un arrondissement de relief, par une maison voisine du 11e.",
    brief:
      "Plombier à Paris 20e, Monteil & Cie intervient de Ménilmontant à Gambetta et à Belleville. Pression d'eau en étage élevé, petits immeubles autour de cours, chaudière individuelle, salle de bains à rénover : la maison, installée rue Saint-Ambroise, prend en charge ces demandes avec un interlocuteur unique.",
    contactType: "chauffage",
    service: "Plomberie et chauffage",
    crumb: "Plombier Paris 20e",
    photo: "equipe-3",
    caption: "Un compagnon à l'atelier, rue Saint-Ambroise",
    facts: [
      { label: "Quartier", value: "Belleville, Gambetta" },
      { label: "Voisin", value: "Le 11e, par Ménilmontant" },
      { label: "Depuis", value: "1964" },
    ],
    sections: [
      {
        h2: "Pourquoi la pression d'eau varie-t-elle dans les étages du 20e ?",
        answer:
          "Le 20e est un arrondissement de relief : l'altitude, la hauteur de l'immeuble et l'état des canalisations jouent sur la pression à l'étage. Une pression faible ou instable peut venir d'un réducteur, d'une vanne partiellement fermée ou d'une colonne entartrée, à vérifier un par un.",
        paras: [
          "Le plombier contrôle d'abord ce que vous pouvez voir : robinet d'arrêt, réducteur, groupe de sécurité. Il remonte ensuite aux colonnes avec le syndic si le désordre touche plusieurs logements. Aucune solution ne se choisit sans mesure préalable.",
        ],
      },
      {
        h2: "Comment intervenir dans un petit immeuble organisé autour d'une cour ?",
        answer:
          "En préparant l'accès : les petits immeubles de Belleville et de Ménilmontant s'ouvrent sur des cours étroites, parfois sans ascenseur. Le compagnon repère le cheminement du matériel avant l'intervention et choisit des méthodes qui limitent le bruit et la poussière.",
        paras: [
          "Ces copropriétés comptent peu de lots, et chaque décision se prend à quelques-uns. La maison propose des interventions claires, avec devis détaillé, et un suivi par les mêmes interlocuteurs d'une visite à l'autre.",
        ],
        list: [
          "Remplacement de robinetterie et de sanitaires",
          "Reprise d'une évacuation de cour",
          "Remplacement de tuyauteries en plomb",
          "Recherche de fuite non invasive",
        ],
      },
      {
        h2: "Chaudière individuelle : entretien et dépannage",
        paras: [
          "Beaucoup d'appartements du 20e ont une chaudière gaz individuelle. L'entretien annuel réglementaire est assuré par des techniciens gaz certifiés, habilités gaz naturel et propane, qui contrôlent la combustion et l'évacuation des fumées.",
          "En cas de panne, le service client indique le créneau réel : la maison annonce une intervention le jour même selon disponibilité, sans garantie de délai. Le remplacement par une chaudière neuve se décide ensuite sur devis.",
        ],
      },
    ],
    faq: [
      {
        q: "Intervenez-vous jusqu'à Belleville et Gambetta ?",
        a: "Oui. La maison intervient dans tous les arrondissements de Paris. Depuis la rue Saint-Ambroise, la ligne 3 mène directement à Gambetta, ce qui garde les chantiers du 20e à portée.",
      },
      {
        q: "Faut-il être présent pendant l'intervention ?",
        a: "Pour un logement, une présence ou un accès organisé est nécessaire. Précisez les horaires de disponibilité et les conditions d'accès dans votre demande ; le service client s'adapte.",
      },
      {
        q: "Entretenez-vous les chaudières à gaz ?",
        a: "Oui. Entretien annuel réglementaire, dépannage et installation de chaudière neuve figurent parmi les prestations de la maison, assurés par des techniciens gaz certifiés.",
      },
      {
        q: "Les petites copropriétés peuvent-elles signer un contrat ?",
        a: "Oui. Les contrats de maintenance de la maison s'adressent aux syndics et gestionnaires, quelle que soit la taille de l'immeuble. Proposez votre cas par la page contact.",
      },
    ],
    ctaTitle: "Une pression d'eau instable, une chaudière à revoir ?",
    ctaText: "Dites-nous l'étage et l'adresse : la maison vous rappelle.",
    related: [PATHS.heating, PATHS.plumbing, PATHS.bathroom, "/plombier-paris-12"],
  },
];
