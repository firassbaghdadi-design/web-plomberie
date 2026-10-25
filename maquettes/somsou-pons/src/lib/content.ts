import type { PhotoId } from "./photos";

export type DeepSection = { h2: string; answer: string; body: string[]; id?: string };
export type PageContent = {
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  lead: string;
  brief: string;
  heroPhoto: PhotoId;
  sections: DeepSection[];
  localTitle: string;
  localParagraphs: string[];
  ctaTitle: string;
  ctaText: string;
};

export const home = {
  title: "Plombier, chauffagiste et rénovation à Paris 16e et 17e",
  description: "Somsou-Pons, entreprise du bâtiment à Paris 16e et 17e : plomberie, chauffage, rénovation et menuiserie. Qualibat, Professionnel du Gaz. Devis sur demande.",
  h1: "Plomberie, chauffage et rénovation à Paris 16e et 17e",
  eyebrow: "Entreprise du bâtiment · Paris 16e · Paris 17e",
  lead: "Une maison parisienne du bâtiment, dont l'histoire commence en 1876. Plomberie, chauffage, rénovation : un seul interlocuteur, du premier appel à la fin du chantier.",
  brief: "Somsou-Pons est une entreprise du bâtiment installée à Paris : le siège est dans le 16e arrondissement, une agence dans le 17e et l'atelier de menuiserie à La Garenne-Colombes. Elle intervient en plomberie, chauffage et rénovation, et affiche ses qualifications Qualibat et Professionnel du Gaz.",
  storyTitle: "Une maison parisienne, de 1876 à aujourd'hui",
  storyText: "Des mosaïques et des carrelages d'abord, puis la maçonnerie, la plomberie, la couverture et la menuiserie : le métier a changé de forme sans changer de ville. Voici les dates que donne l'entreprise.",
  tradesTitle: "Quatre façons de nous confier votre logement",
  agenciesTitle: "Trois adresses, trois téléphones",
  agenciesText: "Chaque agence a son numéro et sa boîte e-mail. Appelez la plus proche de chez vous, ou écrivez-nous depuis la page contact.",
  qualifTitle: "Des qualifications que l'on peut vérifier",
  qualifText: "Les codes Qualibat, la mention Professionnel du Gaz et la mention RGE sont présentés sur la page dédiée, avec ce que chaque qualification couvre.",
  questionTitle: "Comment choisir un plombier chauffagiste à Paris ?",
  questionAnswer: "Regardez d'abord les qualifications : un code Qualibat en plomberie ou en installations thermiques, la mention gaz si vous avez une chaudière. Demandez ensuite un devis écrit détaillé, une adresse réelle et un numéro qui répond, avant de comparer les prix.",
  questionBody: [
    "Un plombier ou un chauffagiste sérieux se reconnaît à des éléments simples à vérifier. Une adresse physique à Paris, par exemple, que l'on peut visiter. Un numéro de SIREN qui figure sur les devis et sur le site. Des qualifications dont on peut demander l'attestation. Et un interlocuteur qui prend le temps de poser des questions avant de donner un prix.",
    "Pour un dépannage, la rapidité compte, mais elle ne remplace pas ces repères. Pour un chantier de rénovation, le devis détaillé fait la différence : ce qui est compris, ce qui ne l'est pas, les matériaux, la durée prévue, les conditions de paiement. C'est ce document, et non le prix seul, qui permet de comparer deux entreprises.",
  ],
  ctaTitle: "Un projet, une fuite, une panne ?",
  ctaText: "Écrivez-nous depuis la page contact, avec quelques photos si vous le pouvez, ou appelez l'agence la plus proche de chez vous.",
};

export const trades = [
  { key: "plumbing", title: "Plomberie", path: "/plombier-paris", cta: "Plombier à Paris 16e et 17e", text: "Alimentation et évacuation d'eau, sanitaires et robinetterie : l'installation, la réparation, le remplacement.", photo: "plombier" as PhotoId },
  { key: "heating", title: "Chauffage", path: "/chauffagiste-paris", cta: "Chauffagiste à Paris 16e et 17e", text: "Chaudières, radiateurs, planchers chauffants et ballons d'eau chaude, avec les qualifications gaz de l'entreprise.", photo: "radiateur" as PhotoId },
  { key: "emergency", title: "Dépannage", path: "/depannage-plomberie-paris", cta: "Dépannage plomberie à Paris", text: "Fuite, engorgement, panne d'eau chaude : ce qu'il faut faire en attendant, et comment joindre l'agence.", photo: "mains" as PhotoId },
  { key: "renovation", title: "Rénovation", path: "/renovation-appartement-paris", cta: "Rénovation d'appartement à Paris", text: "Rénovation partielle ou totale avec un seul interlocuteur : salles de bains et cuisines sur mesure, carrelage, maçonnerie, peinture, électricité.", photo: "salle-de-bains" as PhotoId },
  { key: "joinery", title: "Menuiserie", path: "/menuiserie-la-garenne-colombes", cta: "La menuiserie Transvaal", text: "Portes, placards, cuisines, fenêtres, baies coulissantes : l'atelier Transvaal, à La Garenne-Colombes.", photo: "menuisier" as PhotoId },
] as const;

export const presentation: PageContent = {
  title: "Présentation de Somsou-Pons, entreprise du bâtiment à Paris",
  description: "Histoire de Somsou-Pons, entreprise du bâtiment à Paris : origines en 1876, Maison Pons en 1924, fusion en 1992, agences dans le 16e et le 17e.",
  h1: "Somsou-Pons, entreprise du bâtiment à Paris depuis plus d'un siècle",
  eyebrow: "Présentation",
  lead: "De la mosaïque de 1876 à la plomberie, au chauffage et à la rénovation d'aujourd'hui : l'histoire d'une entreprise parisienne, racontée avec les dates qu'elle donne elle-même.",
  brief: "Somsou-Pons est née en 1992, quand SOMSOU a racheté la Maison Pons, spécialisée en plomberie et en couverture. Ses origines remontent à 1876, avec les Établissements Piquot, fondés par les ancêtres de son dirigeant actuel. Elle est installée à Paris, dans le 16e et le 17e arrondissement.",
  heroPhoto: "facade",
  sections: [
    {
      h2: "D'où vient Somsou-Pons ?",
      answer: "Ses origines remontent à 1876, avec les Établissements Piquot, fabricants et poseurs de mosaïques et de carrelages à Paris, fondés par les ancêtres de Franck Lebailly, l'actuel dirigeant. Ils prennent le nom SOMSOU en 1958, puis deviennent SOMSOU-PONS en 1992.",
      body: [
        "Le récit commence avec le carreau. Les Établissements Piquot fabriquent et posent des mosaïques et des carrelages dans les immeubles parisiens, à une époque où la ville se transforme. D'après la page de présentation de l'entreprise, leurs carrelages sont présentés à l'Exposition universelle de Paris de 1880, et la famille est présente à Paris depuis plus d'un siècle.",
        "Cette ascendance explique qu'on retrouve encore le carrelage dans la liste des métiers de la maison, à côté de la plomberie et du chauffage. C'est un savoir-faire de pose et de finition, exigeant sur les niveaux, les joints et les raccords, qui sert aujourd'hui dans les salles de bains et les cuisines des appartements que l'entreprise rénove.",
      ],
    },
    {
      h2: "Comment SOMSOU est-elle devenue SOMSOU-PONS ?",
      answer: "En 1975, SOMSOU rachète l'entreprise de maçonnerie L'Héritier. En 1992, elle rachète la Maison Pons, créée en 1924 et spécialisée en plomberie et en couverture : c'est la naissance de SOMSOU-PONS. Une activité de menuiserie est créée la même année.",
      body: [
        "Le rachat de 1992 réunit deux métiers qui se complètent sur un chantier. D'un côté, la maison qui pose les sols, monte les murs et reprend les ouvrages. De l'autre, celle qui amène l'eau, évacue les eaux usées, installe le chauffage et traite les toitures. Pour un propriétaire, ce rapprochement évite de multiplier les interlocuteurs.",
        "Le nom conserve la trace des deux histoires : SOMSOU pour la première, PONS pour la seconde. L'activité de menuiserie, née la même année, a ensuite été reprise par une société distincte, la SARL Transvaal, installée au 5 rue du Transvaal à La Garenne-Colombes.",
      ],
    },
    {
      h2: "Quelles reprises ont construit l'entreprise ?",
      answer: "Après la Maison Pons, l'entreprise rachète COLBAL et DUROUCHOUX en 1997, puis Théuloup en 1999, dont l'adresse de la rue Gavarni devient le siège social. Des bureaux s'installent rue Ampère, dans le 17e, en 2006, et CPR rejoint l'entreprise en 2013.",
      body: [
        "Les reprises successives ont élargi le savoir-faire et la clientèle de la maison, toujours dans la plomberie et la couverture. Elles montrent aussi une méthode : plutôt que d'ouvrir de nouveaux métiers en partant de zéro, l'entreprise a préféré racheter des équipes qui les pratiquaient déjà et les intégrer à une organisation commune.",
        "Ces repères sont fournis à titre d'information. Ils proviennent du site actuel de l'entreprise et n'ont pas encore été revus avec elle ; toute date pourra être corrigée avant une éventuelle mise en ligne.",
      ],
    },
    {
      h2: "Que change cette histoire pour un client aujourd'hui ?",
      answer: "Elle donne des repères concrets : une adresse connue à Paris, plusieurs métiers réunis sous un même nom, des qualifications affichées et un interlocuteur identifiable. Ces éléments se vérifient, ce qui compte davantage que l'ancienneté seule.",
      body: [
        "Une longue histoire ne garantit pas, à elle seule, la qualité d'un chantier. Ce qui aide un client, c'est ce qu'elle laisse derrière elle : des agences que l'on peut visiter, des qualifications que l'on peut demander, un nom qui engage et des équipes habituées aux immeubles parisiens, à leurs colonnes d'eau, à leurs étages sans ascenseur et à leurs copropriétés.",
        "Si vous hésitez entre plusieurs entreprises, demandez à chacune ses attestations, des exemples de chantiers comparables au vôtre et un devis écrit détaillé. C'est la meilleure façon de comparer, et c'est ce que nous vous suggérons de faire avec Somsou-Pons comme avec les autres.",
      ],
    },
  ],
  localTitle: "Venir au siège, rue Gavarni",
  localParagraphs: [
    "Le siège social se trouve au 9 rue Gavarni, dans le quartier de Passy, à Paris 16e. C'est là que l'entreprise a son adresse administrative, et le numéro à retenir est le 01 42 15 25 15.",
    "Les bureaux du 17e arrondissement, au 26 rue Ampère, complètent le dispositif parisien. La page des agences détaille les trois adresses et leurs numéros.",
  ],
  ctaTitle: "Parlons de votre logement",
  ctaText: "Un devis, une question, un doute sur un chantier : écrivez-nous depuis la page contact.",
};

export const tradesPage: PageContent = {
  title: "Nos métiers : plomberie, chauffage, rénovation à Paris",
  description: "Les métiers de Somsou-Pons à Paris : plomberie, chauffage, petite couverture, maçonnerie, carrelage, menuiserie, peinture et électricité pour votre logement.",
  h1: "Nos métiers à Paris : plomberie, chauffage et rénovation",
  eyebrow: "Nos métiers",
  lead: "Quatre pages pour entrer dans le détail, un seul numéro pour commencer : les métiers que Somsou-Pons exerce à Paris et en petite couronne.",
  brief: "Somsou-Pons propose la rénovation partielle ou totale avec un seul interlocuteur, pour les appartements, pavillons, locaux commerciaux et sociétés : démolition, maçonnerie, plâtrerie, carrelage, plomberie, chauffage, menuiserie, parquet, petite couverture, peinture et électricité. Et un service de dépannage rapide.",
  heroPhoto: "plans",
  sections: [
    {
      h2: "Que fait Somsou-Pons en plomberie et en chauffage ?",
      answer: "En plomberie : alimentation et évacuation d'eau, sanitaires, robinetterie et dépannage rapide. En chauffage : chaudières, planchers chauffants, radiateurs et ballons d'eau chaude. Ces deux métiers sont le cœur de l'activité et reposent sur des qualifications Qualibat.",
      body: [
        "La plomberie recouvre tout ce qui touche à l'eau dans un logement : amener l'eau froide et chaude, évacuer les eaux usées, poser un lavabo, une douche, un WC, changer une robinetterie, remplacer un chauffe-eau. C'est le métier de la maison Pons depuis 1924, et celui qui revient le plus souvent dans les demandes des habitants.",
        "Le chauffage va de la chaudière aux radiateurs, du plancher chauffant au ballon d'eau chaude. Dans un immeuble parisien, il faut tenir compte du mode de chauffage existant, de la place disponible et, pour le collectif, des décisions de la copropriété.",
      ],
    },
    {
      h2: "Que couvre la rénovation avec un seul interlocuteur ?",
      answer: "Le site de l'entreprise présente un service de rénovation partielle ou totale pour les appartements, pavillons, locaux commerciaux et sociétés, avec des salles de bains et des cuisines sur mesure. Un seul interlocuteur coordonne tous les corps de métier, du devis à la réception.",
      body: [
        "Les métiers réunis sont nombreux : démolition, maçonnerie, plâtrerie, carrelage, plomberie, chauffage, menuiserie intérieure et extérieure, parquet, petite couverture, peinture et décoration, électricité. Rénover, c'est les enchaîner dans le bon ordre : on démolit, on reprend les réseaux, on pose les sols, on peint en dernier.",
        "Quand chaque métier dépend d'une entreprise différente, le planning se décale à chaque retard. Avec une seule entreprise, la coordination fait partie du travail. Une rénovation partielle reste possible, une salle de bains ou une cuisine, avec le même principe : une visite, puis un devis qui liste chaque poste.",
      ],
    },
    {
      id: "menuiserie",
      h2: "Que propose l'atelier de menuiserie ?",
      answer: "La menuiserie intérieure (portes, placards, aménagement de cuisine) et extérieure (fenêtres, baies coulissantes, portes d'entrée), ainsi qu'un dépannage rapide en menuiserie. Elle est assurée par la SARL Transvaal, à La Garenne-Colombes, qui a repris l'activité créée en 1992.",
      body: [
        "Le travail du bois accompagne souvent une rénovation : une porte qu'on recoupe après la pose d'un nouveau parquet, un placard sur mesure dans une entrée, une cuisine à aménager. L'atelier travaille depuis le 5 rue du Transvaal, et possède son propre numéro de téléphone et sa propre adresse e-mail, indiqués sur la page des agences.",
        "Pour une demande de menuiserie, choisissez le type de demande correspondant dans le formulaire de contact : elle sera orientée vers le bon interlocuteur.",
      ],
    },
    {
      h2: "Qu'est-ce que le service de dépannage rapide ?",
      answer: "Un service d'intervention pour les petits sinistres : en plomberie, en menuiserie et en petite couverture, avec le nettoyage et les petites réparations de toiture. Pour une fuite ou une panne, la page dépannage rappelle aussi les bons gestes en attendant l'agence.",
      body: [
        "Les quatre pages détaillées ont chacune la même structure : ce que l'on fait, comment cela se passe, ce qu'il faut préparer, et les questions que les habitants posent le plus souvent. Elles sont écrites pour répondre avant de décrocher le téléphone, pas pour remplacer une visite sur place.",
        "Quel que soit le métier, la demande de devis passe par la même porte : la page contact. Un seul formulaire, qui accepte quelques photos, et qui arrive directement dans la boîte e-mail de l'entreprise.",
      ],
    },
  ],
  localTitle: "Où s'adresser selon le métier",
  localParagraphs: [
    "Pour la plomberie, le chauffage et la rénovation, vous pouvez appeler l'agence du 16e (01 42 15 25 15) ou celle du 17e (01 46 27 14 86). Pour la menuiserie, c'est l'atelier de La Garenne-Colombes (01 42 42 23 72).",
    "Les trois adresses sont détaillées, avec leurs e-mails, sur la page des agences.",
  ],
  ctaTitle: "Dites-nous ce que vous voulez faire",
  ctaText: "Décrivez votre projet et joignez quelques photos : le formulaire est la façon la plus simple de commencer.",
};

export const qualifPage: PageContent = {
  title: "Qualibat, Professionnel du Gaz et RGE : nos qualifications",
  description: "Qualifications de Somsou-Pons à Paris : Qualibat plomberie, installations thermiques, carrelage et maçonnerie, Professionnel du Gaz et mention RGE.",
  h1: "Qualibat, Professionnel du Gaz, RGE : les qualifications de notre entreprise à Paris",
  eyebrow: "Nos qualifications",
  lead: "Ce qui est affiché sur le site actuel de l'entreprise, expliqué simplement, avec la façon de le vérifier avant de signer un devis.",
  brief: "Somsou-Pons présente cinq qualifications Qualibat (5111, 5112, 5311, 6311 et 2141), en plomberie et sanitaire, installations thermiques, carrelage et maçonnerie, dont deux avec la mention gaz domestique, ainsi que Professionnel du Gaz et la mention RGE. Demandez les attestations à jour avant de signer.",
  heroPhoto: "mains",
  sections: [
    {
      h2: "Que signifie une qualification Qualibat ?",
      answer: "Qualibat est un organisme indépendant qui vérifie les compétences techniques et le sérieux des entreprises du bâtiment, à partir de leurs références et de leurs moyens. Chaque code correspond à un métier précis, avec un niveau de technicité : courante ou confirmée.",
      body: [
        "Une qualification Qualibat ne remplace pas un devis, mais elle apporte une garantie de départ : l'entreprise a été examinée par un organisme extérieur, qui a vérifié qu'elle savait faire ce qu'elle affiche. Elle se renouvelle, et peut être contrôlée sur le site de l'organisme à partir du nom ou du numéro de SIREN de l'entreprise.",
        "Le site de Somsou-Pons liste cinq codes, sur les métiers qui composent son activité : le 5111, plomberie et sanitaire, en technicité courante ; le 5112, plomberie et sanitaire, en technicité confirmée, avec la mention installations de gaz domestiques ; le 5311, installations thermiques, en technicité courante, avec la mention gaz ; le 6311, carrelage et revêtements, et le 2141, transformation en maçonnerie, tous deux en technicité courante.",
      ],
    },
    {
      h2: "Que signifie la mention Professionnel du Gaz ?",
      answer: "Le site de Somsou-Pons présente Professionnel du Gaz comme un organisme agréé par arrêté ministériel depuis 1992 pour contrôler les installations de gaz dans les logements. Pour un client, c'est l'assurance que l'entreprise est reconnue pour ses interventions sur le gaz.",
      body: [
        "Lorsqu'une chaudière, une cuisinière ou un chauffe-eau fonctionnent au gaz, l'installation et l'entretien exigent des compétences particulières, car une erreur de raccordement ou de ventilation peut être dangereuse. La mention Professionnel du Gaz signale que l'entreprise a satisfait à des contrôles pour ces interventions.",
        "Dans un logement collectif, les règles de sécurité sont plus strictes encore. Quand vous faites appel à une entreprise pour intervenir sur du gaz, demandez à voir son attestation en cours de validité, et gardez-la avec les documents du logement.",
      ],
    },
    {
      h2: "Et la mention RGE, à quoi sert-elle ?",
      answer: "RGE signifie « Reconnu Garant de l'Environnement ». Elle concerne les travaux de rénovation énergétique : isolation, chauffage performant, énergies renouvelables. Elle conditionne en général les aides publiques à ces travaux. Le numéro du certificat n'est pas affiché sur le site actuel.",
      body: [
        "Si vous envisagez de remplacer un système de chauffage ou d'améliorer la performance énergétique d'un logement, la mention RGE de l'entreprise peut être exigée pour bénéficier d'aides. Elle est liée à un domaine de travaux précis et à une période de validité, d'où l'importance de demander l'attestation à jour.",
        "Les aides évoluent régulièrement. Informez-vous auprès d'un conseiller France Rénov' avant de signer, et faites figurer sur le devis les mentions nécessaires à l'obtention de l'aide.",
      ],
    },
    {
      h2: "Comment vérifier ces qualifications avant de signer ?",
      answer: "Demandez à l'entreprise les attestations en cours de validité, puis vérifiez-les sur le site de l'organisme (Qualibat, certificateur RGE) à partir du nom ou du SIREN. Le SIREN de Somsou-Pons figure dans le bas de chaque page : 582 097 457.",
      body: [
        "Cette vérification prend quelques minutes et vaut pour toutes les entreprises que vous consultez. Notez la date de validité, le domaine couvert par chaque qualification et le nom exact de l'entreprise, qui doit correspondre à celui du devis.",
        "N'hésitez pas à poser la question au téléphone : une entreprise sérieuse vous enverra ses attestations sans difficulté.",
      ],
    },
  ],
  localTitle: "Demander les attestations à l'agence",
  localParagraphs: [
    "Les attestations se demandent à l'agence qui suit votre dossier : le 01 42 15 25 15 pour le siège du 16e, le 01 46 27 14 86 pour l'agence du 17e. Précisez le métier concerné.",
    "Pour un devis comportant des travaux sur le gaz ou sur une installation thermique, demandez-les avant la signature, pas après.",
  ],
  ctaTitle: "Une question sur nos qualifications ?",
  ctaText: "Posez-la depuis la page contact : l'agence vous enverra les attestations qui concernent votre chantier.",
};

export const agenciesPage: PageContent = {
  title: "Nos agences Somsou-Pons : Paris 16e, Paris 17e, La Garenne",
  description: "Les trois adresses de Somsou-Pons : siège rue Gavarni à Paris 16e, agence rue Ampère à Paris 17e, atelier de menuiserie à La Garenne-Colombes. Téléphones et e-mails.",
  h1: "Nos 3 agences à Paris 16e, Paris 17e et La Garenne-Colombes",
  eyebrow: "Nos agences",
  lead: "Un siège, une agence et un atelier : trois adresses, trois numéros de téléphone, trois boîtes e-mail. Choisissez la plus proche de chez vous.",
  brief: "Somsou-Pons compte trois adresses : le siège social au 9 rue Gavarni à Paris 16e, l'agence du 26 rue Ampère à Paris 17e et l'atelier de menuiserie Transvaal au 5 rue du Transvaal à La Garenne-Colombes. Chacune a son téléphone et son adresse e-mail.",
  heroPhoto: "immeuble",
  sections: [
    {
      h2: "Où se trouve le siège social de Somsou-Pons ?",
      answer: "Le siège social est au 9 rue Gavarni, 75116 Paris, dans le 16e arrondissement. On peut y joindre l'entreprise au 01 42 15 25 15 ou par e-mail à agence16@somsoupons.fr, pour un devis, un chantier de rénovation, un dépannage ou une question administrative.",
      body: [
        "La rue Gavarni se situe dans le quartier de Passy, dans l'ouest de Paris. C'est l'adresse administrative de l'entreprise, qui figure sur les devis et les factures, et celle de son siège social.",
        "Les horaires d'ouverture ne figurent pas sur le site actuel. Le plus sûr est d'appeler avant de passer : l'agence vous indiquera quand on peut vous recevoir.",
      ],
    },
    {
      h2: "Où est l'agence du 17e arrondissement ?",
      answer: "L'agence du 17e est au 26 rue Ampère, 75017 Paris. Son téléphone est le 01 46 27 14 86 et son adresse e-mail agence17@somsoupons.fr. D'après l'entreprise, ses bureaux sont installés dans le 17e depuis 2006.",
      body: [
        "Cette agence reçoit les demandes du nord-ouest de la capitale, et complète le siège du 16e pour les plombiers, chauffagistes et chefs de chantier qui interviennent chez les clients. Pour un chantier, la répartition entre agences se fait en fonction de l'adresse et de la charge de travail.",
        "Si vous hésitez entre les deux agences, appelez l'une ou l'autre : elles travaillent ensemble et vous orienteront vers la bonne.",
      ],
    },
    {
      h2: "Que fait l'atelier de La Garenne-Colombes ?",
      answer: "L'atelier Transvaal, au 5 rue du Transvaal à La Garenne-Colombes (92250), est consacré à la menuiserie. Il a son propre numéro, le 01 42 42 23 72, et son adresse e-mail transvaal@somsoupons.fr, pour les demandes de menuiserie.",
      body: [
        "Cette société a été créée par le dirigeant de l'entreprise pour reprendre l'activité de menuiserie lancée en 1992. Elle réalise des ouvrages en bois et peut intervenir seule ou dans le cadre d'une rénovation menée par les agences parisiennes.",
        "La Garenne-Colombes se trouve dans les Hauts-de-Seine, à proximité immédiate de Paris et de ses arrondissements du nord-ouest.",
      ],
    },
    {
      h2: "Quelle agence appeler pour une urgence ?",
      answer: "Appelez l'agence du 16e (01 42 15 25 15) ou celle du 17e (01 46 27 14 86), la plus proche de l'endroit concerné. Pour une odeur de gaz, quittez les lieux et appelez d'abord le numéro d'urgence gaz, avant de contacter l'entreprise.",
      body: [
        "Aucune de ces lignes n'est présentée comme un numéro de garde ouvert à toute heure sur le site actuel : nous ne promettons donc aucun délai d'intervention. Décrivez la situation au téléphone, et demandez ce que l'agence peut faire.",
        "Pour une demande qui peut attendre, le formulaire de contact permet de joindre des photos, ce qui accélère souvent la réponse.",
      ],
    },
  ],
  localTitle: "Choisir la bonne agence",
  localParagraphs: [
    "Vous habitez dans l'ouest de Paris ou à Passy ? Le siège du 16e est le plus proche. Vous êtes dans le 17e ou le nord-ouest ? Prenez l'agence de la rue Ampère. Pour le bois, l'atelier Transvaal.",
    "Dans tous les cas, la demande de devis se fait par la page contact, qui regroupe les trois adresses.",
  ],
  ctaTitle: "Joindre l'agence la plus proche",
  ctaText: "Appelez-la, ou envoyez un message avec vos photos depuis la page contact.",
};

export const plumbing: PageContent = {
  title: "Plombier à Paris 16e et 17e : installation et sanitaires",
  description: "Plombier à Paris 16e et 17e : alimentation, évacuation, sanitaires, robinetterie. Somsou-Pons, qualifiée Qualibat plomberie. Devis sur demande avec photos.",
  h1: "Plombier à Paris 16e et 17e : installation, sanitaires et robinetterie",
  eyebrow: "Plomberie",
  lead: "L'eau, de l'arrivée dans l'immeuble au robinet de votre cuisine : alimentation, évacuation, sanitaires. Un métier que l'entreprise exerce depuis la Maison Pons, en 1924.",
  brief: "Somsou-Pons est un plombier de Paris 16e et 17e : alimentation et évacuation d'eau, sanitaires et robinetterie, installation et remplacement. L'entreprise affiche des qualifications Qualibat 5111 et 5112. Demandez un devis écrit, avec photos de l'installation, depuis la page contact.",
  heroPhoto: "plombier",
  sections: [
    {
      h2: "Que fait un plombier dans un appartement parisien ?",
      answer: "Il amène l'eau froide et chaude, évacue les eaux usées et installe les appareils qui s'y raccordent : lavabos, douches, baignoires, WC, éviers, chauffe-eau, machines. Il répare aussi les fuites et remplace les robinets, siphons et flexibles usés.",
      body: [
        "Dans un immeuble ancien, le travail du plombier dépend beaucoup de ce qu'il trouve derrière les murs. Les canalisations en plomb ou en acier d'origine ne sont plus aux normes ; les colonnes d'eau, partagées entre étages, relèvent de la copropriété ; les évacuations traversent parfois plusieurs logements. Chaque chantier commence donc par une visite.",
        "Un bon plombier explique ce qu'il voit, ce qu'il propose et ce qu'il laisse volontairement de côté. C'est le sens du devis détaillé que l'entreprise remet avant le début des travaux : vous savez ce qui sera fait, avec quelles pièces, et dans quel ordre.",
      ],
    },
    {
      h2: "Quels travaux de plomberie Somsou-Pons réalise-t-elle ?",
      answer: "Son site cite l'alimentation et l'évacuation d'eau, les sanitaires et la robinetterie, ainsi qu'un service de dépannage rapide. Elle intervient dans les logements parisiens, du remplacement d'un mitigeur à l'installation d'une salle de bains complète.",
      body: [
        "L'alimentation désigne tout ce qui amène l'eau jusqu'à vos appareils : tuyaux, vannes, compteurs divisionnaires, groupes de sécurité. L'évacuation regroupe les siphons, les descentes et les raccords aux colonnes de l'immeuble. Les sanitaires, ce sont les appareils eux-mêmes ; la robinetterie, tout ce que l'on manœuvre au quotidien.",
        "Pour un remplacement simple, une photo de l'existant suffit souvent à préparer l'intervention. Pour une salle de bains, le plan et les dimensions comptent davantage, et une visite sur place devient indispensable.",
      ],
    },
    {
      h2: "Comment préparer une demande de devis de plomberie ?",
      answer: "Décrivez le problème ou le projet en quelques phrases, joignez deux ou trois photos, indiquez l'adresse du logement et l'étage, et précisez si vous êtes propriétaire ou locataire. Plus la demande est claire, plus le devis est juste.",
      body: [
        "Les photos les plus utiles montrent l'installation de loin, puis de près : le robinet d'arrêt, le raccord qui suinte, l'emplacement d'une future douche. Si vous le pouvez, ajoutez une photo de la plaque d'un chauffe-eau ou d'un appareil : elle donne la marque et le modèle.",
        "Le formulaire de la page contact accepte jusqu'à quatre photos et les compresse avant l'envoi. Rien ne s'y paie et rien ne vous engage : vous recevez une réponse de l'agence, puis, si le sujet s'y prête, un devis écrit.",
      ],
    },
    {
      h2: "Quelles questions se posent en copropriété ?",
      answer: "Tout ce qui touche aux parties communes (colonnes d'eau, compteurs généraux, évacuations collectives) relève de la copropriété et du syndic. Les équipements de votre logement, après le robinet d'arrêt privatif, vous appartiennent et se décident chez vous.",
      body: [
        "Avant de lancer des travaux de plomberie, vérifiez ce qui est privatif et ce qui est commun. Une fuite sur une colonne montante, par exemple, se signale au syndic ; une fuite sur le flexible d'un lavabo se répare à vos frais, avec ou sans l'aide de votre assurance.",
        "Dans un immeuble parisien, le règlement de copropriété peut aussi encadrer les horaires de chantier et l'usage des ascenseurs. L'entreprise connaît ces contraintes : signalez-les dans votre demande, elles se règlent mieux en amont.",
      ],
    },
  ],
  localTitle: "Votre plombier dans le 16e et le 17e",
  localParagraphs: [
    "Les deux agences parisiennes, au 9 rue Gavarni et au 26 rue Ampère, desservent les logements du 16e et du 17e arrondissement. L'entreprise peut vous dire si un chantier situé ailleurs lui est accessible.",
    "Pour un échange rapide, appelez le 01 42 15 25 15 (siège) ou le 01 46 27 14 86 (agence du 17e).",
  ],
  ctaTitle: "Un robinet, une douche, une salle de bains ?",
  ctaText: "Envoyez-nous votre demande avec des photos, ou appelez l'agence la plus proche.",
};

export const heating: PageContent = {
  title: "Chauffagiste à Paris 16e et 17e : chaudière et radiateurs",
  description: "Chauffagiste à Paris 16e et 17e : chaudières, radiateurs, planchers chauffants, ballons d'eau chaude. Qualibat installations thermiques et Professionnel du Gaz.",
  h1: "Chauffagiste à Paris 16e et 17e : chaudière, radiateurs et plancher chauffant",
  eyebrow: "Chauffage",
  lead: "Un logement bien chauffé tient à peu de choses : une chaudière entretenue, des radiateurs purgés, un circuit équilibré. L'entreprise installe et remplace les équipements de chauffage.",
  brief: "Somsou-Pons est chauffagiste à Paris 16e et 17e : chaudières, radiateurs, planchers chauffants et ballons d'eau chaude. Elle indique détenir la qualification Qualibat 5311 en installations thermiques, avec mention gaz domestique, et la mention Professionnel du Gaz. Devis écrit avant travaux.",
  heroPhoto: "radiateur",
  sections: [
    {
      h2: "Quels équipements de chauffage Somsou-Pons installe-t-elle ?",
      answer: "Son site cite les chaudières, les planchers chauffants, les radiateurs et les ballons d'eau chaude. Le choix dépend du logement : chauffage individuel ou collectif, énergie disponible, place, hauteur sous plafond et décisions éventuelles de la copropriété.",
      body: [
        "La chaudière est le cœur d'une installation individuelle. Au gaz, elle demande un raccordement, une évacuation des fumées et une ventilation conformes, d'où l'importance d'une entreprise qualifiée. Le ballon d'eau chaude, lui, peut être couplé à la chaudière ou fonctionner seul, selon l'équipement du logement.",
        "Les radiateurs diffusent la chaleur par convection ou par rayonnement ; leur remplacement est souvent l'occasion de revoir le circuit. Le plancher chauffant, plus rare en appartement ancien, exige de la hauteur disponible et un revêtement compatible : il se prévoit surtout dans une rénovation lourde.",
      ],
    },
    {
      h2: "Pourquoi faire entretenir sa chaudière chaque année ?",
      answer: "L'entretien annuel est obligatoire pour les chaudières à combustible de 4 à 400 kW. Il garantit la sécurité (émissions de monoxyde de carbone), préserve le rendement de l'appareil et donne droit à une attestation que vous pouvez devoir présenter à votre assureur.",
      body: [
        "Lors d'un entretien, le professionnel nettoie le brûleur et l'échangeur, contrôle la combustion, vérifie l'évacuation des fumées, la pression du circuit et les organes de sécurité. Il note ses mesures sur l'attestation qu'il vous remet. Cet entretien se fait par une personne qualifiée, jamais par vous-même.",
        "Ne repoussez pas cette visite si la chaudière fait un bruit inhabituel, si l'eau chaude devient irrégulière ou si la pression chute souvent. Ce sont les signes d'une panne à venir, que l'on traite plus simplement quand elle est annoncée.",
      ],
    },
    {
      h2: "Comment savoir si l'entreprise est qualifiée pour le gaz ?",
      answer: "Son site mentionne une qualification Qualibat 5311 (installations thermiques, mention gaz domestique), une 5112 en plomberie avec mention des installations de gaz domestiques, et Professionnel du Gaz. Demandez à l'agence les attestations en cours de validité avant de signer.",
      body: [
        "Sur du gaz, la qualification n'est pas un détail : elle conditionne la sécurité de l'installation, la responsabilité de l'entreprise et, souvent, la prise en charge par votre assurance en cas de sinistre. Gardez dans le dossier du logement l'attestation de l'entreprise et le justificatif de l'installation.",
        "La page des qualifications explique ce que couvre chaque code, et comment vérifier une attestation auprès de l'organisme concerné.",
      ],
    },
    {
      h2: "Que prévoir pour le chauffage dans un immeuble en copropriété ?",
      answer: "Si le chauffage est collectif, c'est la copropriété qui décide des travaux sur la chaufferie et les colonnes. Si le chauffage est individuel, vous décidez de votre équipement, mais le passage des conduits ou de la ventilation peut demander l'accord de l'immeuble.",
      body: [
        "Avant de remplacer une chaudière, vérifiez le règlement de copropriété et, au besoin, interrogez le syndic : le conduit d'évacuation, souvent commun, impose parfois des conditions. Le plus simple est de décrire votre situation à l'agence, qui connaît ces questions dans les immeubles parisiens.",
        "Si vous visez la rénovation énergétique, parlez-en dès la demande de devis : des aides peuvent exister, et elles dépendent de la mention RGE de l'entreprise et de la nature des travaux.",
      ],
    },
  ],
  localTitle: "Votre chauffagiste dans le 16e et le 17e",
  localParagraphs: [
    "Pour un devis ou un entretien, appelez le siège du 16e au 01 42 15 25 15 ou l'agence du 17e au 01 46 27 14 86, en indiquant l'adresse du logement et le type d'installation.",
    "Joignez à votre message une photo de l'appareil et de sa plaque signalétique : elle accélère la préparation de la visite.",
  ],
  ctaTitle: "Une chaudière à changer ou à entretenir ?",
  ctaText: "Décrivez votre installation depuis la page contact, avec une photo de l'appareil.",
};

export const emergency: PageContent = {
  title: "Dépannage plomberie à Paris 16e et 17e : fuite, panne",
  description: "Dépannage plomberie à Paris 16e et 17e : les bons gestes en cas de fuite, d'engorgement ou de panne d'eau chaude, et les numéros des agences Somsou-Pons.",
  h1: "Dépannage plomberie à Paris 16e et 17e : fuite, engorgement et panne",
  eyebrow: "Dépannage",
  lead: "Quand l'eau coule là où elle ne devrait pas, les premières minutes comptent. Voici les gestes qui limitent les dégâts, puis comment joindre l'agence.",
  brief: "En cas de fuite à Paris 16e ou 17e : coupez l'eau au robinet d'arrêt général, coupez l'électricité si l'eau approche des prises, photographiez les dégâts, puis appelez l'agence Somsou-Pons au 01 42 15 25 15 ou au 01 46 27 14 86. Aucun délai n'est promis à l'avance.",
  heroPhoto: "mains",
  sections: [
    {
      h2: "Que faire immédiatement en cas de fuite d'eau ?",
      answer: "Fermez le robinet d'arrêt général de l'eau, souvent près du compteur. Si l'eau atteint des prises ou le tableau, coupez le courant sans toucher aux appareils mouillés. Épongez, déplacez les objets fragiles, photographiez les dégâts, puis appelez un plombier.",
      body: [
        "Repérez le robinet d'arrêt général avant d'en avoir besoin : dans un appartement parisien, il se trouve le plus souvent dans la cuisine, la salle de bains, ou à côté du compteur dans les parties privatives. Apprenez à le manœuvrer, il peut être dur s'il n'a pas servi depuis longtemps.",
        "Les photos et la date de découverte serviront à votre déclaration de sinistre. Ne jetez pas la pièce abîmée si vous la remplacez : l'assureur ou l'expert peut vouloir la voir.",
      ],
    },
    {
      h2: "Comment décrire une panne de plomberie au téléphone ?",
      answer: "Indiquez l'adresse et l'étage, la pièce concernée, depuis quand le problème dure, ce que vous avez déjà fait et si l'eau continue de couler. Ces quelques informations permettent à l'agence de préparer la bonne intervention et d'apporter le bon matériel.",
      body: [
        "Pour un engorgement, précisez si l'eau remonte, si le bruit vient de la colonne ou de l'appareil, et si d'autres logements sont touchés. Pour une panne d'eau chaude, indiquez si c'est un chauffe-eau électrique, une chaudière ou un système collectif, et si la pression a changé.",
        "Une photo envoyée par le formulaire de la page contact évite souvent un aller-retour. L'agence la lit en même temps que votre message.",
      ],
    },
    {
      h2: "Que faire si la fuite vient du voisin ?",
      answer: "Prévenez le voisin et le gardien ou le syndic, remplissez avec lui un constat amiable de dégât des eaux, puis déclarez le sinistre à votre assureur sous cinq jours ouvrés. L'intervention sur la canalisation relève de celui chez qui la fuite a lieu.",
      body: [
        "Le constat amiable de dégât des eaux est un formulaire commun aux assureurs, rempli en commun par le voisin responsable et vous. Il accélère l'indemnisation, mais il ne tranche pas la question des responsabilités : l'assureur ou l'expert s'en charge si besoin.",
        "Si l'eau provient d'une colonne commune, le syndic est l'interlocuteur. N'attendez pas pour le signaler : une fuite sur une colonne peut toucher plusieurs étages.",
      ],
    },
    {
      h2: "Que faire en cas d'odeur de gaz ?",
      answer: "N'allumez aucune flamme, n'actionnez aucun interrupteur, ouvrez les fenêtres, fermez le robinet de gaz si vous pouvez l'atteindre, puis quittez les lieux et appelez le numéro d'urgence gaz de GRDF : 0 800 47 33 33, depuis l'extérieur du bâtiment.",
      body: [
        "Ne téléphonez pas depuis le logement et ne revenez pas avant l'autorisation des secours. Prévenez vos voisins en frappant aux portes plutôt qu'en sonnant. Une fois le danger écarté, faites vérifier l'installation par un professionnel qualifié avant de remettre le gaz en service.",
        "Somsou-Pons indique détenir la mention Professionnel du Gaz : l'agence peut intervenir pour vérifier ou reprendre une installation, mais jamais avant les secours.",
      ],
    },
  ],
  localTitle: "Appeler l'agence la plus proche",
  localParagraphs: [
    "Pour un dépannage dans l'ouest de Paris, le siège du 16e répond au 01 42 15 25 15. Pour le nord-ouest, l'agence du 17e répond au 01 46 27 14 86. Décrivez la situation, et demandez ce que l'agence peut faire et quand.",
    "Le site actuel ne présente pas de permanence à toute heure : aucun délai ni disponibilité n'est donc promis ici.",
  ],
  ctaTitle: "Signaler un problème",
  ctaText: "Décrivez-le avec une photo depuis la page contact, ou appelez directement l'agence.",
};

export const renovation: PageContent = {
  title: "Rénovation d'appartement à Paris 16e et 17e : un interlocuteur",
  description: "Rénovation d'appartement à Paris 16e et 17e : salle de bains, cuisine, plomberie, électricité, carrelage, peinture avec un seul interlocuteur. Devis sur demande.",
  h1: "Rénovation d'appartement à Paris 16e et 17e avec un seul interlocuteur",
  eyebrow: "Rénovation",
  lead: "Rénover, c'est enchaîner des métiers dans le bon ordre. Somsou-Pons réunit plomberie, chauffage, carrelage, maçonnerie, menuiserie, peinture et électricité sous un même nom.",
  brief: "Somsou-Pons rénove des logements à Paris 16e et 17e, en totalité ou en partie, avec un seul interlocuteur : plomberie, chauffage, carrelage, maçonnerie, menuiserie, peinture et électricité. Une visite précède un devis écrit détaillé, remis avant le début de tout travail.",
  heroPhoto: "salle-de-bains",
  sections: [
    {
      h2: "Que couvre une rénovation d'appartement à Paris ?",
      answer: "Elle peut couvrir toutes les pièces ou une seule : démolition et reprise des cloisons, réseaux d'eau, d'électricité et de chauffage, sols et carrelage, menuiseries, peinture. L'entreprise coordonne ces métiers, de la visite préalable à la réception des travaux.",
      body: [
        "Dans un appartement parisien, la rénovation se heurte à des contraintes particulières : étages sans ascenseur, escaliers étroits, cours intérieures, horaires de chantier fixés par la copropriété. Elles influent sur le planning et sur la logistique, et se règlent mieux quand l'entreprise les connaît.",
        "Le point de départ est toujours une visite : on mesure, on regarde l'état des réseaux et des murs, on écoute ce que vous voulez changer. C'est elle qui permet de chiffrer sans surprise.",
      ],
    },
    {
      h2: "Comment se déroule une rénovation avec un seul interlocuteur ?",
      answer: "Vous échangez avec une seule entreprise : visite, devis détaillé, planning, puis chantier suivi du début à la réception. Elle gère les métiers et leurs enchaînements, et vous rend compte à chaque étape sans que vous ayez à coordonner les artisans.",
      body: [
        "Un chantier se déroule généralement en grandes phases : la préparation et la protection des lieux, la démolition, les réseaux, les cloisons et enduits, les sols, les finitions, puis le nettoyage et la réception. Chaque phase a son ordre, et la plomberie comme l'électricité passent avant le carrelage et la peinture.",
        "Avec une seule entreprise, vous savez qui appeler à chaque étape. Si un imprévu surgit, par exemple une canalisation en mauvais état découverte derrière un mur, la solution et son coût vous sont présentés avant de continuer.",
      ],
    },
    {
      h2: "Peut-on rénover seulement une salle de bains ?",
      answer: "Oui. Une salle de bains se rénove seule : dépose de l'existant, reprise de la plomberie et de l'évacuation, carrelage, installation de la douche ou de la baignoire, robinetterie, meuble et peinture. La visite précise ce qui est faisable sans toucher aux cloisons.",
      body: [
        "La salle de bains est le chantier où plomberie et carrelage se rencontrent, ce qui correspond à l'histoire de l'entreprise : le carreau d'un côté, l'eau de l'autre. Les points sensibles sont l'étanchéité, la pente d'évacuation de la douche et la ventilation, qui conditionnent la durée de vie de l'ensemble.",
        "Apportez à la visite une idée de ce que vous aimez : photos d'inspiration, carreaux repérés, dimensions du meuble. Elles aident à traduire vos goûts en un devis concret.",
      ],
    },
    {
      h2: "Que prévoir avant de signer le devis de rénovation ?",
      answer: "Vérifiez que le devis détaille chaque poste, les matériaux, la durée prévue et les conditions de paiement. Demandez les attestations de l'entreprise, prévenez le syndic si les parties communes sont concernées, et faites écrire tout changement en cours de chantier.",
      body: [
        "Un devis précis protège les deux parties : il fixe ce qui est inclus, ce qui est exclu et ce qui dépend d'un choix de votre part, comme le carrelage ou la robinetterie. N'hésitez pas à demander des précisions ; une entreprise sérieuse préfère clarifier avant que corriger après.",
        "Pour les travaux qui touchent aux parties communes, à la façade ou aux colonnes de l'immeuble, l'accord de la copropriété peut être nécessaire. Anticipez-le : il se prépare en même temps que le devis.",
      ],
    },
  ],
  localTitle: "Rénover à Paris 16e et 17e",
  localParagraphs: [
    "Les chantiers de rénovation se préparent depuis les agences du 16e (9 rue Gavarni) et du 17e (26 rue Ampère). Pour une menuiserie sur mesure, l'atelier de La Garenne-Colombes complète l'équipe.",
    "Appelez le 01 42 15 25 15 ou le 01 46 27 14 86 pour fixer une visite, ou envoyez votre demande avec photos depuis la page contact.",
  ],
  ctaTitle: "Un projet de rénovation ?",
  ctaText: "Décrivez-le depuis la page contact, avec des photos et vos dimensions si vous les avez.",
};

export const contact = {
  title: "Contact Somsou-Pons : devis ou intervention à Paris",
  description: "Contactez Somsou-Pons à Paris : formulaire de demande de devis ou d'intervention avec photos, téléphones et e-mails des agences du 16e, du 17e et de La Garenne.",
  h1: "Contacter Somsou-Pons : devis ou intervention à Paris",
  lead: "Un seul formulaire pour toute demande : devis, dépannage, rénovation. Il arrive directement dans la boîte e-mail de l'entreprise.",
};
