import type { PageContent } from "./content";
import type { PhotoId } from "./photos";
import type { Agency, Faq } from "./site";

/**
 * Une page par métier et par arrondissement où l'entreprise a une agence (16e, 17e), et une page pour l'atelier de
 * menuiserie de La Garenne-Colombes. Chaque texte est propre à sa page : aucune phrase n'est partagée.
 */
export type LocalPage = PageContent & {
  slug: string;
  trade: "plumbing" | "heating" | "emergency" | "renovation" | "joinery";
  tradeLabel: string;
  zone: string;
  agency: Agency["key"];
  contactType: string;
  photos: PhotoId[];
  faq: Faq[];
};

export const localPages: LocalPage[] = [
  {
    slug: "plombier-paris-16",
    trade: "plumbing",
    tradeLabel: "Plomberie",
    zone: "Paris 16e",
    agency: "seize",
    contactType: "plomberie",
    title: "Plombier Paris 16e : canalisations, sanitaires, Passy",
    description: "Plombier à Paris 16e, rue Gavarni : remplacement de canalisations anciennes, sanitaires, salle d'eau en chambre de service. Somsou-Pons, qualifiée Qualibat.",
    h1: "Plombier à Paris 16e : canalisations anciennes et sanitaires",
    eyebrow: "Plomberie · Paris 16e",
    lead: "Le siège de Somsou-Pons est rue Gavarni, dans le quartier de Passy. C'est d'ici que partent les plombiers qui travaillent dans les immeubles du 16e arrondissement.",
    brief: "Pour un plombier à Paris 16e, Somsou-Pons a son siège au 9 rue Gavarni (01 42 15 25 15). L'entreprise remplace les canalisations anciennes, installe et répare les sanitaires et la robinetterie, et aménage des salles d'eau, avec des qualifications Qualibat en plomberie et sanitaire.",
    heroPhoto: "balcon",
    photos: ["carreleur", "radiateur-blanc", "carrelage"],
    sections: [
      {
        h2: "Faut-il remplacer les vieilles canalisations d'un immeuble ancien du 16e ?",
        answer: "Les canalisations en plomb doivent être remplacées : la réglementation limite la teneur en plomb de l'eau du robinet à 10 microgrammes par litre depuis 2013. Celles en acier galvanisé s'entartrent et rouillent avec l'âge. Un plombier repère les deux lors d'une visite.",
        body: [
          "Dans les immeubles anciens, nombreux dans le 16e arrondissement, les réseaux d'origine ont souvent été repris par morceaux au fil des décennies. Il n'est pas rare de trouver, dans un même appartement, du cuivre récent, de l'acier galvanisé et un tronçon de plomb oublié derrière une gaine. Le remplacement se fait de préférence lors d'une rénovation, quand les murs sont ouverts.",
          "La partie qui vous appartient commence en général au robinet d'arrêt de votre logement. En amont, la colonne montante relève de la copropriété : signalez au syndic tout tuyau en plomb visible dans les parties communes, pour qu'il soit traité à l'échelle de l'immeuble.",
        ],
      },
      {
        h2: "Peut-on créer une salle d'eau dans une chambre de service ?",
        answer: "Souvent, oui, mais tout dépend de l'évacuation. Une douche et un lavabo demandent une pente vers une descente existante. Le WC à broyeur est encadré par le règlement sanitaire de Paris : il se réserve aux cas où un raccordement classique est impossible.",
        body: [
          "Les chambres de service sous les toits sont fréquentes dans les immeubles de Passy et d'Auteuil. Les transformer en studio suppose de trouver une arrivée d'eau, une évacuation et une ventilation. Le plombier vérifie d'abord où passe la descente la plus proche, puis la hauteur disponible pour poser un receveur de douche avec une pente suffisante.",
          "Avant tout chantier, consultez le règlement de copropriété : raccorder un nouveau point d'eau sur une descente commune peut demander l'accord de l'assemblée générale. Mieux vaut le savoir avant de commander le carrelage.",
        ],
      },
      {
        h2: "Comment se passe une intervention de plomberie dans le 16e ?",
        answer: "Vous décrivez le besoin par téléphone ou par le formulaire, si possible avec des photos. Pour un remplacement simple, l'agence prépare l'intervention à partir de ces éléments ; pour un chantier plus large, une visite précède un devis écrit, remis avant le début des travaux.",
        body: [
          "Le jour de l'intervention, le plombier protège les sols et le mobilier, coupe l'eau au bon endroit et prévient si une coupure touche d'autres logements. Dans les immeubles où l'ascenseur est étroit ou absent, le matériel monte par l'escalier : signalez-le lors de la prise de rendez-vous.",
          "À la fin, il remet l'eau, contrôle les raccords et vous montre ce qui a été fait. C'est aussi le bon moment pour demander où se trouvent vos vannes d'arrêt et comment les manœuvrer.",
        ],
      },
    ],
    faq: [
      { q: "Où est l'agence de plomberie du 16e ?", a: "Au 9 rue Gavarni, 75116 Paris, dans le quartier de Passy. C'est le siège social de Somsou-Pons ; on la joint au 01 42 15 25 15 ou à agence16@somsoupons.fr." },
      { q: "Le plombier peut-il intervenir dans un appartement haussmannien ?", a: "Oui, c'est le cas le plus courant dans l'arrondissement. Les contraintes d'un immeuble ancien, escaliers, gaines étroites, colonnes communes, sont prises en compte dès la visite et figurent dans le devis." },
      { q: "Comment savoir s'il reste du plomb dans mes tuyaux ?", a: "Un tuyau en plomb est gris mat, souple, et se raye facilement avec une pièce de monnaie. En cas de doute, demandez au plombier de vérifier lors de sa visite ; une analyse de l'eau peut aussi être faite par un laboratoire agréé." },
    ],
    localTitle: "Le siège de la rue Gavarni",
    localParagraphs: [
      "La rue Gavarni se trouve dans le quartier de Passy. L'agence y reçoit les demandes de plomberie de tout le 16e arrondissement, du Trocadéro à Auteuil.",
      "Pour une demande qui peut attendre, le formulaire en ligne permet de joindre jusqu'à quatre photos de votre installation.",
    ],
    ctaTitle: "Un projet de plomberie dans le 16e ?",
    ctaText: "Décrivez-le avec quelques photos, l'agence de la rue Gavarni vous répond.",
  },
  {
    slug: "plombier-paris-17",
    trade: "plumbing",
    tradeLabel: "Plomberie",
    zone: "Paris 17e",
    agency: "dixsept",
    contactType: "plomberie",
    title: "Plombier Paris 17e : fuite cachée, chauffe-eau, calcaire",
    description: "Plombier à Paris 17e, rue Ampère : recherche de fuite, remplacement de chauffe-eau électrique, robinetterie et calcaire. Somsou-Pons, agence du 17e (Paris).",
    h1: "Plombier à Paris 17e : fuite cachée, chauffe-eau et robinetterie",
    eyebrow: "Plomberie · Paris 17e",
    lead: "L'agence de la rue Ampère reçoit les demandes de plomberie du 17e arrondissement, des Batignolles aux Ternes. Trois sujets reviennent souvent : la fuite qu'on ne voit pas, le chauffe-eau fatigué, le calcaire.",
    brief: "Pour un plombier à Paris 17e, l'agence Somsou-Pons du 26 rue Ampère répond au 01 46 27 14 86. Elle intervient sur les fuites, les chauffe-eau, la robinetterie et les sanitaires, dans les immeubles anciens comme dans les plus récents, et remet un devis écrit avant tout travail.",
    heroPhoto: "plan-projet",
    photos: ["cle-evier", "douche", "carreleur"],
    sections: [
      {
        h2: "Comment savoir si l'on a une fuite d'eau cachée ?",
        answer: "Relevez votre compteur d'eau le soir, n'utilisez pas d'eau pendant la nuit, puis relevez-le à nouveau le matin. Si l'index a bougé, l'eau s'échappe quelque part. Une chasse d'eau qui coule en continu en est souvent la cause, mais pas toujours.",
        body: [
          "Les signes d'une fuite cachée sont discrets : une facture qui augmente sans raison, une tache qui s'étend au plafond du voisin, un joint de carrelage qui noircit, un bruit d'écoulement quand tout est fermé. Plus on attend, plus les dégâts s'étendent dans les planchers et les cloisons.",
          "Le plombier commence par les points les plus probables : mécanisme de chasse, flexibles, raccords sous les éviers, groupe de sécurité du chauffe-eau. Si la fuite est encastrée, il vous explique les options avant d'ouvrir un mur.",
        ],
      },
      {
        h2: "Quand faut-il remplacer un chauffe-eau électrique ?",
        answer: "Quand il fuit par la cuve, quand l'eau chaude manque malgré une résistance changée, ou quand il atteint un âge avancé et chauffe de plus en plus lentement. Un chauffe-eau entretenu dure plus longtemps : le groupe de sécurité se manœuvre chaque mois.",
        body: [
          "Dans un appartement, la place est comptée : le nouveau ballon doit tenir dans le même placard, passer par les portes et l'escalier, et être fixé sur un mur capable de supporter son poids une fois plein. Notez la capacité et les dimensions de l'ancien, et photographiez sa plaque signalétique.",
          "Le remplacement est l'occasion de vérifier le groupe de sécurité, le raccordement électrique et l'évacuation du trop-plein, trois points souvent négligés lors de la pose d'origine.",
        ],
      },
      {
        h2: "Le calcaire de l'eau parisienne abîme-t-il la robinetterie ?",
        answer: "L'eau distribuée à Paris est moyennement calcaire. Avec le temps, le tartre bloque les mousseurs, durcit les cartouches de mitigeur, réduit le débit des douches et encrasse la résistance des chauffe-eau. Un entretien simple limite ces effets. Le plombier vous montre lequel.",
        body: [
          "Démontez et trempez régulièrement les mousseurs et les pommes de douche dans du vinaigre blanc. Pour un mitigeur qui devient dur ou qui goutte, le remplacement de la cartouche suffit souvent, sans changer tout le robinet.",
          "Un adoucisseur peut être envisagé dans une maison ou un grand logement ; en appartement, la question se pose surtout pour protéger un chauffe-eau. Le plombier vous dira si c'est utile dans votre cas.",
        ],
      },
    ],
    faq: [
      { q: "Où est l'agence de plomberie du 17e ?", a: "Au 26 rue Ampère, 75017 Paris. On la joint au 01 46 27 14 86 ou par e-mail à agence17@somsoupons.fr, pour un devis ou une intervention dans l'arrondissement." },
      { q: "Intervenez-vous dans les immeubles récents des Batignolles ?", a: "L'agence travaille dans tous les types d'immeubles de l'arrondissement. Dans le neuf, les réseaux sont souvent en multicouche et les gaines techniques accessibles ; précisez l'année de construction dans votre demande." },
      { q: "Mon mitigeur goutte : faut-il le changer ?", a: "Pas forcément. Une cartouche entartrée ou un joint usé se remplacent souvent seuls. Envoyez une photo du robinet et de sa marque : l'agence vous dira si une réparation est possible." },
    ],
    localTitle: "L'agence de la rue Ampère",
    localParagraphs: [
      "Installée rue Ampère depuis 2006 selon l'entreprise, l'agence du 17e couvre l'arrondissement, des Ternes aux Épinettes en passant par les Batignolles.",
      "Pour décrire une fuite ou un appareil, une photo vaut mieux qu'un long message : le formulaire en accepte quatre.",
    ],
    ctaTitle: "Une fuite, un chauffe-eau, un robinet dans le 17e ?",
    ctaText: "Écrivez à l'agence de la rue Ampère avec vos photos, ou appelez-la directement.",
  },
  {
    slug: "chauffagiste-paris-16",
    trade: "heating",
    tradeLabel: "Chauffage",
    zone: "Paris 16e",
    agency: "seize",
    contactType: "chauffage",
    title: "Chauffagiste Paris 16e : chaudière gaz et radiateurs fonte",
    description: "Chauffagiste à Paris 16e : remplacement de chaudière gaz, conduit de fumée, radiateurs en fonte, désembouage. Somsou-Pons, Qualibat 5311, Professionnel du Gaz.",
    h1: "Chauffagiste à Paris 16e : chaudière gaz, conduit et radiateurs en fonte",
    eyebrow: "Chauffage · Paris 16e",
    lead: "Dans les grands appartements anciens du 16e, le chauffage individuel au gaz est fréquent, avec des radiateurs en fonte d'origine. Les remplacer ou les garder : le chauffagiste vous aide à décider.",
    brief: "Pour un chauffagiste à Paris 16e, Somsou-Pons intervient depuis son siège de la rue Gavarni (01 42 15 25 15) : remplacement de chaudière gaz, adaptation du conduit, radiateurs, désembouage et ballons d'eau chaude. Elle présente la qualification Qualibat 5311 avec mention gaz et Professionnel du Gaz.",
    heroPhoto: "radiateur",
    photos: ["immeuble", "electricien", "peintres"],
    sections: [
      {
        h2: "Peut-on remplacer une vieille chaudière gaz par une chaudière à condensation ?",
        answer: "C'est souvent possible, mais le conduit de fumée doit être adapté : une chaudière à condensation rejette des fumées humides qui exigent un conduit étanche, généralement par tubage du conduit existant. Il faut aussi prévoir l'évacuation des condensats vers une descente.",
        body: [
          "Dans un immeuble ancien, le conduit est souvent partagé entre plusieurs logements ou passe dans les parties communes : son adaptation peut demander l'accord de la copropriété. Le chauffagiste vérifie ce point dès la visite, car il conditionne le choix de l'appareil.",
          "Le remplacement est aussi le moment de revoir le réglage de l'installation : régulation par thermostat, robinets thermostatiques sur les radiateurs, température de départ adaptée aux émetteurs.",
        ],
      },
      {
        h2: "Faut-il garder les radiateurs en fonte d'origine ?",
        answer: "Souvent, oui. Un radiateur en fonte bien entretenu garde la chaleur longtemps et s'accorde aux appartements anciens. S'il chauffe mal, un désembouage du circuit ou une purge suffit parfois. Le remplacement se justifie s'il fuit ou s'il est mal dimensionné.",
        body: [
          "Avec les années, les boues s'accumulent dans les circuits de chauffage et freinent la circulation de l'eau : le bas des radiateurs reste froid, la chaudière force. Le désembouage consiste à nettoyer le circuit avec un produit et une pompe adaptés, puis à le protéger.",
          "Si vous changez de chaudière, demandez si vos radiateurs peuvent fonctionner à plus basse température : c'est ce qui permet à une chaudière à condensation de donner son meilleur rendement.",
        ],
      },
      {
        h2: "Pourquoi le chauffage d'un appartement ancien est-il inégal d'une pièce à l'autre ?",
        answer: "Parce que le circuit est rarement équilibré : l'eau chaude prend le chemin le plus court et délaisse les radiateurs éloignés. Un équilibrage des débits, une purge de l'air et, si besoin, un désembouage rendent la chaleur plus régulière dans tout le logement.",
        body: [
          "Les grandes hauteurs sous plafond et les fenêtres d'origine accentuent l'écart : la chaleur monte, et les pièces sur cour se refroidissent plus vite. Le chauffagiste mesure, règle les vannes et vous conseille sur ce qui relève du chauffage et ce qui relève de l'isolation.",
          "Notez les pièces trop froides et trop chaudes avant sa visite : ce relevé simple l'aide à trouver la cause.",
        ],
      },
    ],
    faq: [
      { q: "Combien de temps dure l'entretien annuel d'une chaudière ?", a: "En général, une visite suffit pour nettoyer, contrôler et régler la chaudière, puis remettre l'attestation. La durée exacte dépend de l'appareil et de son état ; l'agence vous l'indique à la prise de rendez-vous." },
      { q: "Le chauffagiste du 16e intervient-il sur le gaz ?", a: "Le site de l'entreprise présente une qualification Qualibat 5311 avec mention gaz domestique et Professionnel du Gaz. Demandez les attestations à jour à l'agence de la rue Gavarni avant de signer." },
      { q: "Mon radiateur fait du bruit, est-ce grave ?", a: "Des gargouillis signalent souvent de l'air dans le circuit : une purge règle le problème. Des claquements ou une pression qui baisse souvent demandent l'avis d'un chauffagiste." },
    ],
    localTitle: "Chauffage : l'agence du 16e",
    localParagraphs: [
      "Les demandes de chauffage du 16e arrondissement sont suivies depuis la rue Gavarni. Indiquez le type d'immeuble, l'énergie de votre chauffage et la marque de votre chaudière.",
      "Une photo de la plaque signalétique de l'appareil accélère la préparation de la visite.",
    ],
    ctaTitle: "Une chaudière ou des radiateurs dans le 16e ?",
    ctaText: "Envoyez une photo de votre installation : l'agence de la rue Gavarni vous répond.",
  },
  {
    slug: "chauffagiste-paris-17",
    trade: "heating",
    tradeLabel: "Chauffage",
    zone: "Paris 17e",
    agency: "dixsept",
    contactType: "chauffage",
    title: "Chauffagiste Paris 17e : chauffage collectif et entretien",
    description: "Chauffagiste à Paris 17e : entretien de chaudière, robinets thermostatiques, chauffage collectif, plancher chauffant en rénovation. Somsou-Pons, rue Ampère.",
    h1: "Chauffagiste à Paris 17e : entretien, chauffage collectif et confort",
    eyebrow: "Chauffage · Paris 17e",
    lead: "Chauffage individuel ou collectif, chaudière à entretenir ou radiateurs à régler : l'agence de la rue Ampère accompagne les habitants du 17e arrondissement.",
    brief: "Pour un chauffagiste à Paris 17e, l'agence Somsou-Pons du 26 rue Ampère (01 46 27 14 86) entretient et remplace les chaudières, pose des robinets thermostatiques, intervient sur les radiateurs et les ballons d'eau chaude, et étudie le plancher chauffant lors d'une rénovation.",
    heroPhoto: "radiateur-blanc",
    photos: ["radiateur", "plans", "plan-projet"],
    sections: [
      {
        h2: "Que peut-on faire soi-même quand le chauffage est collectif ?",
        answer: "La chaufferie et les colonnes relèvent de la copropriété, mais chaque logement agit sur ses radiateurs : purge, robinets thermostatiques, réglage pièce par pièce. Dans certains immeubles, des répartiteurs de frais de chauffage mesurent aussi la consommation de chaque logement.",
        body: [
          "Les robinets thermostatiques sont l'outil le plus simple pour réduire la consommation sans perdre en confort : ils ferment le radiateur quand la pièce atteint la température choisie. Leur pose se fait radiateur par radiateur, idéalement en dehors de la saison de chauffe, car elle demande parfois de vidanger une partie du circuit.",
          "Si un radiateur reste froid alors que le reste de l'immeuble est chauffé, prévenez d'abord le gardien ou le syndic : le problème peut venir de la colonne, et non de votre logement.",
        ],
      },
      {
        h2: "Pourquoi l'entretien annuel de la chaudière individuelle compte-t-il ?",
        answer: "Parce qu'il est obligatoire pour les chaudières à combustible de 4 à 400 kW, et parce qu'il protège : une combustion mal réglée peut produire du monoxyde de carbone. L'entretien maintient aussi le rendement et prolonge la durée de vie de l'appareil.",
        body: [
          "Programmez la visite avant l'hiver, quand les chauffagistes sont plus disponibles et que l'on découvre une panne avant d'en avoir besoin. Conservez chaque attestation : votre assureur peut la demander après un sinistre, et un acquéreur ou un locataire aussi.",
          "Un détecteur de monoxyde de carbone près de la chaudière est une précaution simple, en complément de l'entretien et non à sa place.",
        ],
      },
      {
        h2: "Un plancher chauffant est-il possible lors d'une rénovation ?",
        answer: "C'est envisageable quand le sol est entièrement repris : il faut de la hauteur pour l'isolant, les tubes et la chape, et un revêtement compatible. Dans un appartement, l'accord de la copropriété peut être nécessaire selon le raccordement prévu. Une visite le confirme.",
        body: [
          "Le plancher chauffant diffuse une chaleur douce et libère les murs des radiateurs. Il réagit en revanche lentement aux changements de température, et sa mise en œuvre se prévoit dès la conception du chantier, en même temps que le choix des sols.",
          "Le chauffagiste étudie la faisabilité avec le reste de l'équipe de rénovation : c'est l'intérêt d'un seul interlocuteur pour tous les corps de métier.",
        ],
      },
    ],
    faq: [
      { q: "Où joindre le chauffagiste du 17e ?", a: "À l'agence du 26 rue Ampère, 75017 Paris, au 01 46 27 14 86 ou par e-mail à agence17@somsoupons.fr. Précisez si votre chauffage est individuel ou collectif." },
      { q: "Peut-on poser des robinets thermostatiques en hiver ?", a: "C'est possible, mais il faut souvent couper et vidanger une partie du circuit. En chauffage collectif, cela suppose de coordonner l'intervention avec le gardien ou le syndic." },
      { q: "Que faire si l'alarme monoxyde de carbone sonne ?", a: "Ouvrez les fenêtres, arrêtez la chaudière si vous le pouvez, sortez du logement et appelez les secours au 18 ou au 112. Ne rallumez pas l'appareil avant son contrôle par un professionnel." },
    ],
    localTitle: "Chauffage : l'agence du 17e",
    localParagraphs: [
      "L'agence de la rue Ampère suit les demandes de chauffage du 17e arrondissement, de l'entretien d'une chaudière au projet de plancher chauffant.",
      "Indiquez dans votre demande l'énergie de votre chauffage et, si vous l'avez, la date du dernier entretien.",
    ],
    ctaTitle: "Un chauffage à régler dans le 17e ?",
    ctaText: "Décrivez votre installation à l'agence de la rue Ampère, photos à l'appui.",
  },
  {
    slug: "depannage-plomberie-paris-16",
    trade: "emergency",
    tradeLabel: "Dépannage",
    zone: "Paris 16e",
    agency: "seize",
    contactType: "urgence",
    title: "Dépannage plomberie Paris 16e : fuite, dégât des eaux",
    description: "Dépannage plomberie à Paris 16e : fuite, dégât des eaux chez le voisin du dessous, WC bouché. Les bons gestes et l'agence Somsou-Pons de la rue Gavarni.",
    h1: "Dépannage plomberie à Paris 16e : fuite, dégât des eaux, WC bouché",
    eyebrow: "Dépannage · Paris 16e",
    lead: "Dans un immeuble ancien, une fuite descend vite d'un étage à l'autre. Les bons réflexes avant l'arrivée du plombier, et comment joindre l'agence de la rue Gavarni.",
    brief: "Pour un dépannage de plomberie à Paris 16e, coupez l'eau, prévenez les voisins du dessous et appelez l'agence Somsou-Pons de la rue Gavarni au 01 42 15 25 15. L'entreprise propose un service de dépannage rapide en plomberie, sans délai promis à l'avance.",
    heroPhoto: "immeuble",
    photos: ["rue", "plan-projet", "renovation"],
    sections: [
      {
        h2: "Que faire quand l'eau traverse le plafond du voisin du dessous ?",
        answer: "Coupez l'eau de votre logement, prévenez immédiatement le voisin et le gardien, puis cherchez l'origine avec le plombier. Remplissez ensemble un constat amiable de dégât des eaux et déclarez le sinistre à votre assureur dans les cinq jours ouvrés. Gardez les photos.",
        body: [
          "Dans les immeubles anciens, les planchers en bois et plâtre laissent passer l'eau rapidement, et elle peut ressortir loin de la fuite. Ne vous fiez pas à l'emplacement de la tache : c'est la recherche du plombier qui dira d'où vient l'eau, chez vous, chez un voisin ou dans une colonne commune.",
          "Gardez les photos, la date et les factures de l'intervention : elles serviront à l'assureur et, le cas échéant, au syndic.",
        ],
      },
      {
        h2: "Comment déboucher un WC ou un lavabo sans abîmer l'installation ?",
        answer: "Commencez par une ventouse, puis démontez le siphon du lavabo au-dessus d'une bassine. Évitez les produits très corrosifs, qui attaquent les vieux tuyaux et brûlent la peau. Si l'eau remonte ailleurs dans le logement, le bouchon est plus loin : appelez un plombier.",
        body: [
          "Un engorgement qui touche plusieurs appareils, ou plusieurs logements, vient souvent de la descente commune : prévenez le gardien, car l'intervention relève alors de la copropriété.",
          "Pour éviter qu'il revienne, ne jetez dans les canalisations ni lingettes, ni graisses de cuisson, ni restes de mortier après des travaux.",
        ],
      },
      {
        h2: "Comment joindre l'agence du 16e pour une urgence ?",
        answer: "Appelez le siège de la rue Gavarni au 01 42 15 25 15 et décrivez la situation : adresse, étage, pièce, ce que vous avez déjà fait. L'agence vous dit ce qu'elle peut faire et quand. Aucune permanence de nuit n'est annoncée sur le site actuel.",
        body: [
          "Si la fuite est maîtrisée et que la situation peut attendre quelques heures, le formulaire en ligne avec photos est souvent plus efficace qu'un long appel : l'agence voit tout de suite l'installation.",
          "Pour une odeur de gaz, ne contactez pas d'abord l'entreprise : quittez le logement et appelez le numéro d'urgence gaz de GRDF, le 0 800 47 33 33.",
        ],
      },
    ],
    faq: [
      { q: "Le dépannage est-il possible le jour même dans le 16e ?", a: "Cela dépend de la charge de l'agence. Nous ne promettons aucun délai : appelez le 01 42 15 25 15, l'agence vous indiquera ses possibilités." },
      { q: "Qui paie la réparation d'une fuite sur une colonne commune ?", a: "La colonne montante appartient à la copropriété : la réparation est à sa charge, et le syndic fait intervenir l'entreprise de son choix. Signalez la fuite au gardien ou au syndic sans attendre." },
      { q: "Dois-je garder la pièce défectueuse ?", a: "Oui, gardez-la avec les photos et la facture : l'assureur ou l'expert peut vouloir la voir pour établir la cause du sinistre." },
    ],
    localTitle: "Le dépannage depuis la rue Gavarni",
    localParagraphs: [
      "Les dépannages du 16e arrondissement partent du siège, au 9 rue Gavarni. Le numéro direct est le 01 42 15 25 15.",
      "Repérez dès aujourd'hui votre robinet d'arrêt général : c'est le premier geste en cas de fuite.",
    ],
    ctaTitle: "Une fuite dans le 16e ?",
    ctaText: "Coupez l'eau, puis appelez la rue Gavarni ou envoyez une photo par le formulaire.",
  },
  {
    slug: "depannage-plomberie-paris-17",
    trade: "emergency",
    tradeLabel: "Dépannage",
    zone: "Paris 17e",
    agency: "dixsept",
    contactType: "urgence",
    title: "Dépannage plomberie Paris 17e : évier bouché, eau chaude",
    description: "Dépannage plomberie à Paris 17e : évier bouché, panne d'eau chaude, odeur d'égout, chasse d'eau qui fuit. Gestes utiles et agence Somsou-Pons rue Ampère.",
    h1: "Dépannage plomberie à Paris 17e : évier bouché, panne d'eau chaude",
    eyebrow: "Dépannage · Paris 17e",
    lead: "Un évier qui ne se vide plus, une douche froide, une odeur qui remonte : les pannes du quotidien, ce que vous pouvez vérifier, et quand appeler l'agence de la rue Ampère.",
    brief: "Pour un dépannage de plomberie à Paris 17e, l'agence Somsou-Pons du 26 rue Ampère répond au 01 46 27 14 86 : évier bouché, panne d'eau chaude, odeur d'égout, chasse d'eau qui coule. Quelques vérifications simples permettent de mieux décrire la panne au téléphone.",
    heroPhoto: "renovation",
    photos: ["radiateur-blanc", "carreleur", "balcon"],
    sections: [
      {
        h2: "Que vérifier quand il n'y a plus d'eau chaude ?",
        answer: "Pour un chauffe-eau électrique, regardez le disjoncteur dédié au tableau et l'heure creuse : il chauffe parfois seulement la nuit. Pour une chaudière, vérifiez l'affichage, le code erreur et la pression du circuit. Notez ces informations avant d'appeler. Elles aident l'agence.",
        body: [
          "Un chauffe-eau qui disjoncte à chaque remise en route signale souvent une résistance ou un thermostat défectueux ; n'insistez pas, et coupez son alimentation. Une chaudière en sécurité affiche généralement un code : photographiez-le, il dit beaucoup au technicien.",
          "En chauffage et eau chaude collectifs, la panne vient souvent de la chaufferie : interrogez d'abord vos voisins et le gardien.",
        ],
      },
      {
        h2: "D'où vient une odeur d'égout dans la salle de bains ?",
        answer: "Le plus souvent d'un siphon asséché, dans une douche ou un lavabo peu utilisé : faites couler de l'eau quelques minutes. Si l'odeur persiste, un joint de WC, un siphon mal raccordé ou une ventilation de chute peuvent être en cause.",
        body: [
          "Le siphon garde une petite quantité d'eau qui bloque les gaz de la canalisation. Après une absence prolongée, elle s'évapore et laisse passer les odeurs. Le geste est simple, mais si l'odeur revient vite, un plombier doit vérifier les raccords et l'étanchéité.",
          "Ne masquez pas l'odeur avec des produits parfumés : elle signale un défaut d'étanchéité qu'il vaut mieux corriger.",
        ],
      },
      {
        h2: "Comment déboucher un évier de cuisine ?",
        answer: "Retirez l'eau stagnante, utilisez une ventouse en bouchant le trop-plein, puis démontez et nettoyez le siphon au-dessus d'une bassine. Les graisses de cuisson en sont la première cause. Si l'eau ne s'écoule toujours pas, le bouchon est dans la canalisation : appelez un plombier.",
        body: [
          "L'eau bouillante seule aide parfois à dissoudre un dépôt de graisse récent, mais elle ne règle pas un bouchon ancien. Les produits déboucheurs agressifs sont à éviter, surtout sur des tuyaux anciens.",
          "Si votre évier et celui des voisins se bouchent en même temps, la descente commune est en cause : prévenez le syndic.",
        ],
      },
    ],
    faq: [
      { q: "Où appeler pour un dépannage dans le 17e ?", a: "L'agence du 26 rue Ampère, 75017 Paris, au 01 46 27 14 86. Décrivez la panne et ce que vous avez vérifié : l'agence vous indique ce qu'elle peut faire et quand." },
      { q: "Ma chasse d'eau coule en continu : est-ce urgent ?", a: "Ce n'est pas dangereux, mais cela peut consommer beaucoup d'eau. Fermez le robinet du WC en attendant : un joint ou un mécanisme à remplacer règle généralement le problème." },
      { q: "Faut-il un devis pour un dépannage ?", a: "Demandez toujours le prix avant l'intervention, et une estimation écrite pour un travail important. C'est une règle de prudence pour tout dépannage à domicile." },
    ],
    localTitle: "Le dépannage depuis la rue Ampère",
    localParagraphs: [
      "Les dépannages du 17e arrondissement sont suivis par l'agence de la rue Ampère, au 01 46 27 14 86.",
      "Une photo du code d'erreur d'une chaudière ou d'un siphon démonté aide l'agence à préparer la bonne intervention.",
    ],
    ctaTitle: "Une panne dans le 17e ?",
    ctaText: "Décrivez-la avec une photo, ou appelez l'agence de la rue Ampère.",
  },
  {
    slug: "renovation-appartement-paris-16",
    trade: "renovation",
    tradeLabel: "Rénovation",
    zone: "Paris 16e",
    agency: "seize",
    contactType: "renovation",
    title: "Rénovation d'appartement Paris 16e : l'ancien préservé",
    description: "Rénovation d'appartement haussmannien à Paris 16e : parquets, moulures et cheminées préservés, salle de bains et cuisine sur mesure. Somsou-Pons, rue Gavarni.",
    h1: "Rénovation d'appartement à Paris 16e : moderniser sans effacer l'ancien",
    eyebrow: "Rénovation · Paris 16e",
    lead: "Parquets, moulures, cheminées, hauteurs sous plafond : rénover un appartement ancien du 16e, c'est moderniser l'eau, l'électricité et le chauffage en gardant ce qui fait son caractère.",
    brief: "Pour rénover un appartement à Paris 16e, Somsou-Pons coordonne depuis la rue Gavarni tous les corps de métier : plomberie, électricité, chauffage, maçonnerie, carrelage, menuiserie, parquet, peinture. L'objectif : remettre les réseaux à neuf tout en préservant parquets, moulures et cheminées.",
    heroPhoto: "salle-de-bains",
    photos: ["parquet", "peintre", "plans"],
    sections: [
      {
        h2: "Peut-on rénover un appartement haussmannien sans perdre son cachet ?",
        answer: "Oui, à condition de le prévoir dès la visite : on repère ce qu'il faut garder, parquets, moulures, cheminées, portes d'origine, et on fait passer les réseaux de façon à les épargner. Le devis distingue alors ce qui est remplacé de ce qui est protégé et restauré.",
        body: [
          "Les gaines électriques et les canalisations peuvent souvent emprunter les plinthes, les doublages ou les faux plafonds des pièces de service, sans toucher aux pièces de réception. Un parquet ancien se protège pendant le chantier, puis se ponce et se vitrifie à la fin.",
          "La maison a commencé par la mosaïque et le carrelage en 1876 : ce goût de la pose soignée sert aujourd'hui à restaurer un sol ancien autant qu'à poser une salle de bains contemporaine.",
        ],
      },
      {
        h2: "Faut-il refaire l'électricité d'un appartement ancien ?",
        answer: "Souvent, oui, quand l'installation date de plusieurs décennies : absence de terre, tableau sans disjoncteurs différentiels, fils usés. Une mise en sécurité protège les occupants et l'immeuble. Un diagnostic électrique permet de savoir ce qui doit être repris. Il se fait avant les travaux.",
        body: [
          "La rénovation électrique se fait avant les enduits et la peinture, en même temps que la plomberie. C'est le moment de prévoir les prises, l'éclairage et les circuits dont vous aurez besoin, plutôt que de multiplier les rallonges ensuite.",
          "Dans une salle de bains, les règles de sécurité sont particulières : distances entre les points d'eau et les équipements électriques, protection différentielle. L'entreprise en tient compte dans le plan.",
        ],
      },
      {
        h2: "Comment organiser un chantier de rénovation dans un immeuble du 16e ?",
        answer: "En prévenant le syndic et le gardien, en respectant les horaires de travaux du règlement de copropriété, en protégeant les parties communes et en organisant l'évacuation des gravats. Un seul interlocuteur coordonne ces contraintes pour vous. Le voisinage est prévenu à l'avance.",
        body: [
          "Dans les immeubles où l'ascenseur est petit, les matériaux montent par l'escalier de service quand il existe. Les livraisons se planifient selon les possibilités de stationnement de la rue, ce qui se prépare avant le démarrage.",
          "Un planning partagé, des points réguliers et un interlocuteur unique évitent l'essentiel des tensions avec le voisinage.",
        ],
      },
    ],
    faq: [
      { q: "Combien de temps dure la rénovation d'un appartement ?", a: "Cela dépend de la surface, des métiers concernés et des choix de matériaux. La durée prévue figure sur le devis remis après la visite ; nous n'en annonçons aucune à l'avance." },
      { q: "Peut-on habiter l'appartement pendant les travaux ?", a: "Pour une rénovation partielle, c'est parfois possible en organisant le chantier pièce par pièce. Pour une rénovation complète, il vaut mieux prévoir de loger ailleurs ; la visite permet d'en parler." },
      { q: "Qui coordonne les artisans ?", a: "Somsou-Pons, qui réunit plomberie, chauffage, électricité, maçonnerie, carrelage, menuiserie et peinture : vous n'avez qu'un interlocuteur du devis à la réception." },
    ],
    localTitle: "Rénover dans le 16e avec la rue Gavarni",
    localParagraphs: [
      "Les chantiers de rénovation du 16e arrondissement se préparent au siège de la rue Gavarni, au 01 42 15 25 15.",
      "Pour une première demande, joignez le plan de l'appartement et des photos de chaque pièce : la visite n'en sera que plus utile.",
    ],
    ctaTitle: "Rénover un appartement dans le 16e ?",
    ctaText: "Envoyez plan et photos depuis la page contact pour préparer la visite.",
  },
  {
    slug: "renovation-appartement-paris-17",
    trade: "renovation",
    tradeLabel: "Rénovation",
    zone: "Paris 17e",
    agency: "dixsept",
    contactType: "renovation",
    title: "Rénovation d'appartement Paris 17e : cuisine, salle d'eau",
    description: "Rénovation d'appartement à Paris 17e : salle d'eau compacte, cuisine ouverte, rangements sur mesure, peinture et sols. Somsou-Pons, agence rue Ampère.",
    h1: "Rénovation d'appartement à Paris 17e : gagner de la place et de la lumière",
    eyebrow: "Rénovation · Paris 17e",
    lead: "Deux pièces sur cour, studio sous les toits ou appartement familial : dans le 17e, rénover, c'est souvent gagner de la place. Salle d'eau compacte, cuisine ouverte, rangements sur mesure.",
    brief: "Pour rénover un appartement à Paris 17e, l'agence Somsou-Pons de la rue Ampère (01 46 27 14 86) coordonne plomberie, électricité, cloisons, carrelage, menuiserie et peinture. Elle aide à optimiser les petites surfaces : salle d'eau compacte, cuisine ouverte, rangements sur mesure réalisés en atelier.",
    heroPhoto: "douche",
    photos: ["menuisier", "carrelage", "plan-projet"],
    sections: [
      {
        h2: "Comment aménager une salle d'eau dans une petite surface ?",
        answer: "En choisissant une douche à l'italienne ou un receveur extra-plat, un meuble suspendu, une porte coulissante et des niches maçonnées pour ranger. La contrainte principale reste l'évacuation : la position de la descente décide de l'emplacement de la douche et du WC.",
        body: [
          "Un carrelage clair et de grand format agrandit visuellement la pièce, tandis qu'un miroir large renvoie la lumière. La ventilation est indispensable dans une salle d'eau sans fenêtre : une VMC ou un extracteur évite l'humidité et les moisissures.",
          "Le plombier et le carreleur travaillent ensemble sur l'étanchéité, sous le carrelage et autour de la douche : c'est la partie invisible qui fait durer une salle d'eau.",
        ],
      },
      {
        h2: "Peut-on ouvrir la cuisine sur le séjour ?",
        answer: "Souvent, si la cloison n'est pas porteuse. Si elle l'est, une ouverture reste possible avec une étude de structure et, en copropriété, l'accord de l'assemblée générale. L'évacuation de l'évier et la hotte guident aussi l'implantation de la nouvelle cuisine. La visite le précise.",
        body: [
          "Une cuisine ouverte demande de soigner la ventilation et l'éclairage : hotte efficace, prises bien placées, lumière sur le plan de travail. Les réseaux d'eau et d'électricité se déplacent avant de poser les sols et les meubles.",
          "Avant d'abattre une cloison, la maçonnerie vérifie sa nature : brique, carreau de plâtre ou pan de bois n'appellent pas les mêmes précautions.",
        ],
      },
      {
        h2: "Pourquoi faire faire ses rangements sur mesure ?",
        answer: "Parce qu'un placard sur mesure exploite les recoins, les hauteurs et les murs irréguliers des appartements parisiens, là où un meuble standard laisse de la place perdue. L'atelier de menuiserie Transvaal, à La Garenne-Colombes, réalise ces aménagements. Ils sont dessinés après la visite.",
        body: [
          "Dressing dans une alcôve, bibliothèque autour d'une porte, placard sous un escalier : le sur-mesure se dessine après la visite, pour s'accorder aux sols, aux peintures et à l'éclairage prévus dans la rénovation.",
          "Le fait d'avoir la menuiserie dans la même entreprise évite les décalages de planning entre le menuisier et les autres corps de métier.",
        ],
      },
    ],
    faq: [
      { q: "Où préparer une rénovation dans le 17e ?", a: "À l'agence du 26 rue Ampère, 75017 Paris, au 01 46 27 14 86 ou par e-mail à agence17@somsoupons.fr. Joignez un plan et des photos à votre première demande." },
      { q: "Peut-on rénover seulement la cuisine ?", a: "Oui. La rénovation peut être partielle : cuisine, salle d'eau ou une seule pièce, avec la même méthode de visite et de devis détaillé." },
      { q: "Les meubles sur mesure sont-ils fabriqués par l'entreprise ?", a: "La menuiserie est assurée par la SARL Transvaal, à La Garenne-Colombes, qui réalise portes, placards et aménagements de cuisine." },
    ],
    localTitle: "Rénover dans le 17e avec la rue Ampère",
    localParagraphs: [
      "L'agence de la rue Ampère prépare les rénovations du 17e arrondissement, des petites surfaces aux appartements familiaux.",
      "Pour les rangements et les portes sur mesure, elle s'appuie sur l'atelier Transvaal, à La Garenne-Colombes.",
    ],
    ctaTitle: "Un projet de rénovation dans le 17e ?",
    ctaText: "Décrivez-le avec plan et photos : l'agence de la rue Ampère prépare la visite.",
  },
  {
    slug: "menuiserie-la-garenne-colombes",
    trade: "joinery",
    tradeLabel: "Menuiserie",
    zone: "La Garenne-Colombes",
    agency: "transvaal",
    contactType: "menuiserie",
    title: "Menuiserie à La Garenne-Colombes : atelier Transvaal (92)",
    description: "Menuiserie à La Garenne-Colombes : portes, placards, cuisines, fenêtres, baies coulissantes et dépannage. Atelier Transvaal de Somsou-Pons, 5 rue du Transvaal.",
    h1: "Menuiserie à La Garenne-Colombes, aux portes de Paris : l'atelier Transvaal",
    eyebrow: "Menuiserie · Hauts-de-Seine",
    lead: "Le bois de la maison : un atelier de menuiserie créé en 1992, aujourd'hui installé rue du Transvaal à La Garenne-Colombes. Menuiserie intérieure, extérieure et dépannage.",
    brief: "La menuiserie de Somsou-Pons est assurée par l'atelier Transvaal, au 5 rue du Transvaal à La Garenne-Colombes (01 42 42 23 72) : menuiserie intérieure (portes, placards, aménagement de cuisine), menuiserie extérieure (fenêtres, baies coulissantes, portes d'entrée) et dépannage rapide.",
    heroPhoto: "menuisier",
    photos: ["atelier-bois", "carreleur", "immeuble"],
    sections: [
      {
        id: "menuiserie",
        h2: "Que fabrique et pose l'atelier de menuiserie ?",
        answer: "D'après le site de l'entreprise, la menuiserie intérieure couvre les portes, les placards et l'aménagement de cuisine ; la menuiserie extérieure, les fenêtres, les baies coulissantes et les portes d'entrée. S'y ajoute un service de dépannage rapide en menuiserie. Il se demande par téléphone.",
        body: [
          "L'activité de menuiserie est née en 1992, l'année où SOMSOU a racheté la Maison Pons. Elle a ensuite été reprise par la SARL Transvaal, installée au 5 rue du Transvaal, qui a gardé le lien avec les chantiers de rénovation de l'entreprise à Paris.",
          "Le bois complète naturellement les autres métiers de la maison : une porte à recouper après la pose d'un parquet, une cuisine à installer après la plomberie, un placard dans l'alcôve d'une chambre.",
        ],
      },
      {
        h2: "Faut-il un accord pour changer ses fenêtres en copropriété ?",
        answer: "Oui, en général : les fenêtres participent à l'aspect extérieur de l'immeuble. Le règlement de copropriété fixe souvent les matériaux, les couleurs et les formes autorisés, et un changement peut demander l'accord de l'assemblée générale. Consultez le syndic avant de commander.",
        body: [
          "Dans certains secteurs, des règles d'urbanisme s'ajoutent à celles de la copropriété : une déclaration préalable en mairie peut être nécessaire pour modifier l'aspect d'une façade. Renseignez-vous auprès de votre mairie avant de valider le projet.",
          "Le menuisier prend les mesures sur place et vous présente les options compatibles avec ces contraintes, avant tout engagement.",
        ],
      },
      {
        h2: "Qu'est-ce que le dépannage en menuiserie ?",
        answer: "Une intervention pour remettre en état ce qui se bloque ou se casse : porte qui frotte ou ne ferme plus, serrure ou paumelle à reprendre, fenêtre qui ne s'ouvre plus, placard décroché. Décrivez le problème avec une photo, l'atelier vous dira ce qu'il peut faire.",
        body: [
          "Beaucoup de petits défauts viennent du bois qui travaille avec l'humidité et les saisons : un réglage, un rabotage ou le remplacement d'une pièce suffisent souvent, sans changer l'ouvrage entier.",
          "Pour une porte d'entrée qui ne ferme plus correctement, n'attendez pas : la sécurité du logement en dépend.",
        ],
      },
    ],
    faq: [
      { q: "Où se trouve l'atelier de menuiserie ?", a: "Au 5 rue du Transvaal, 92250 La Garenne-Colombes, dans les Hauts-de-Seine. On le joint au 01 42 42 23 72 ou par e-mail à transvaal@somsoupons.fr." },
      { q: "L'atelier travaille-t-il à Paris ?", a: "Oui, il accompagne les chantiers de rénovation des agences parisiennes du 16e et du 17e. Pour un projet ailleurs, posez la question à l'atelier." },
      { q: "Peut-on faire une demande de menuiserie seule ?", a: "Oui. Choisissez « Menuiserie » dans le formulaire de contact : la demande sera orientée vers l'atelier Transvaal." },
    ],
    localTitle: "L'atelier de la rue du Transvaal",
    localParagraphs: [
      "L'atelier Transvaal se trouve au 5 rue du Transvaal, à La Garenne-Colombes, dans les Hauts-de-Seine, à proximité du nord-ouest de Paris.",
      "Pour une demande, joignez des photos de l'ouvrage à reprendre ou de l'endroit à aménager, avec quelques mesures si vous les avez.",
    ],
    ctaTitle: "Un projet de menuiserie ?",
    ctaText: "Décrivez-le avec photos et mesures depuis la page contact.",
  },
];
