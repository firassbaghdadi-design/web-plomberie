import { PATHS } from "./site";
import type { Faq } from "./site";
import type { Page } from "./types";

/**
 * Accueil : textes et questions repris du site actuel (bastien-trebulle.com), à confirmer par l'entreprise.
 * Aucun prix, délai garanti ni certification inventés : les chiffres (1880, 1886, 1960, 2010, 2 heures, 40 salariés,
 * 24h/24) viennent du site actuel, la note et le nombre d'avis ont été relevés le 30 octobre 2026.
 */
export const home = {
  title: "Plombier couvreur à Paris 16e : Bastien & Trebulle",
  description:
    "Bastien & Trebulle, plombier couvreur à Paris 16e depuis 1880 : plomberie, chauffage, couverture, salles de bains clé en main et dépannage. Devis gratuit.",
  brief:
    "Bastien & Trebulle est une entreprise de plomberie, de couverture et de chauffage installée au 3, rue Gros, à Paris 16e. Fondée en 1880, elle compte plus de 40 salariés, intervient chez les particuliers, les syndics et les hôtels, réalise des salles de bains clé en main et dépanne jour et nuit.",
};

export const homeFaq: Faq[] = [
  {
    q: "Quels sont les métiers de Bastien & Trebulle ?",
    a: "L'entreprise intervient sur trois grands métiers : la plomberie, la couverture et le chauffage. Cette polyvalence lui permet de gérer aussi bien les travaux de rénovation que les dépannages, l'entretien et les projets complets de salles de bains.",
  },
  {
    q: "Bastien & Trebulle réalise-t-elle des salles de bains clé en main ?",
    a: "Oui, l'entreprise est spécialisée depuis les années 70 dans la réalisation de salles de bains « clé en main ». Elle prend en charge la conception, les études techniques, les différents corps d'état et la réalisation finale du projet.",
  },
  {
    q: "Quels travaux de plomberie sont proposés ?",
    a: "Bastien & Trebulle réalise les installations et raccordements de sanitaires, robinetteries, baignoires, douches, lavabos, WC et chauffe-eau. L'entreprise intervient aussi sur les tuyauteries en cuivre, fonte, acier et PVC.",
  },
  {
    q: "Intervenez-vous en urgence ?",
    a: "Oui, Bastien & Trebulle propose un service de dépannage d'urgence 24h/24, 7j/7, y compris les dimanches et jours fériés. L'intervention se fait avec un tarif forfaitaire et préétabli pour éviter les mauvaises surprises dans toute la région parisienne.",
  },
  {
    q: "Quel est le délai d'intervention en cas d'urgence ?",
    a: "L'entreprise intervient sous 2 heures dans toute la région parisienne pour les urgences plomberie. Ce service concerne notamment les dégorgements, ruptures de canalisation, débouchages, fuites et dégâts des eaux.",
  },
];

export const trades = [
  { n: "01", title: "Plomberie", text: "Robinetterie, tuyauterie, chauffe-eau, rénovation de salle de bains, mise aux normes.", href: PATHS.plumbing },
  { n: "02", title: "Chauffage et énergie", text: "Chaudières, pompes à chaleur, chauffe-eau.", href: PATHS.heating },
  { n: "03", title: "Couverture et toiture", text: "Charpente, patrimoine, zinguerie, toiture, entretien, isolation.", href: PATHS.roofing },
  { n: "04", title: "Salle de bain", text: "Rénovation de votre salle de bain en un espace de bien-être et d'élégance.", href: PATHS.bathroom },
];

const ALL = [PATHS.plumbing, PATHS.roofing, PATHS.heating, PATHS.bathroom];

export const servicePages: Page[] = [
  /* ————————————————————— Notre histoire ————————————————————— */
  {
    path: PATHS.history,
    title: "Notre histoire : plombiers couvreurs à Paris depuis 1880",
    description:
      "Cinq générations d'artisans plombiers et couvreurs à Paris : de Le Bey en 1880 à Bastien & Trebulle en 2010, l'histoire d'une maison du 16e arrondissement.",
    h1: "Cinq générations d'artisans au service de Paris",
    kicker: "Notre histoire · depuis 1880",
    lead: "Fondée en 1880, Bastien & Trebulle perpétue un savoir-faire d'excellence en plomberie, couverture et chauffage.",
    brief:
      "Bastien & Trebulle, entreprise de plomberie, de couverture et de chauffage du 16e arrondissement de Paris, est née en 1880 sous le nom de Le Bey. Cinq générations de dirigeants plus tard, après le rapprochement avec la maison Trebulle en 2010, elle réunit plus de 40 salariés autour des trois corps d'état.",
    contactType: "plomberie",
    service: "Plomberie, couverture et chauffage",
    crumb: "Notre histoire",
    photo: { theme: "histoire" },
    caption: "Une maison parisienne, de génération en génération",
    approach: "La maison est installée dans le 16e arrondissement, rue Gros, là où son histoire a continué de s'écrire.",
    facts: [{ label: "Fondée en", value: "1880" }, { label: "Générations", value: "5" }, { label: "Équipe", value: "40+" }],
    extra: "histoire",
    sections: [
      {
        h2: "Qui a fondé Bastien & Trebulle, et quand ?",
        answer:
          "La maison Bastien a été fondée en 1880 sous le nom de Le Bey, spécialisée en couverture et plomberie. Elle est reprise par André Bastien dans les années 1930, par Robert Bastien en 1960, puis par Édouard Bastien en 1997. La société Trebulle date de 1886.",
        paras: [
          "Depuis 1880, Bastien perpétue à Paris un héritage familial transmis sur cinq générations. Née sous le nom de Le Bey, l'entreprise s'est d'abord développée autour de la couverture et de la plomberie avant d'être reprise par André Bastien, puis par Robert Bastien, et enfin par Édouard Bastien.",
        ],
        original: true,
      },
      {
        h2: "Que sont devenues les deux maisons, Bastien et Trebulle ?",
        answer:
          "Trebulle, fondée en 1886 et également spécialisée en couverture-plomberie, était installée au 88, boulevard de Picpus, à Paris. En 2010, Bastien rachète Trebulle et devient Bastien & Trebulle : deux maisons historiques, un même engagement artisanal, désormais réunies sous un seul nom.",
        paras: [
          "Le rapprochement de 2010 donne naissance à une entreprise parisienne reconnue pour son expertise. La maison BASTIEN apporte son héritage de couverture et de plomberie ; la maison TREBULLE y ajoute son propre savoir-faire de couvreur-plombier, transmis de génération en génération.",
          "Aujourd'hui, la société se compose de plus de 40 salariés, experts en plomberie, couverture et chauffage.",
        ],
        original: true,
      },
      {
        h2: "Qu'est-ce qui définit Bastien & Trebulle aujourd'hui ?",
        answer:
          "Trois corps d'état réunis sous un seul interlocuteur, plus de 40 salariés experts au service des particuliers et des professionnels, et une appartenance au GCCP, ancienne Chambre Syndicale de Couverture Plomberie Chauffage, depuis 1905. Un ancrage professionnel de plus d'un siècle.",
        list: [
          "Trois corps d'état : plomberie, couverture et chauffage, un seul interlocuteur pour tous vos projets",
          "Plus de 40 salariés experts : des compagnons qualifiés au service des particuliers et des professionnels",
          "Adhérent GCCP depuis 1905 : plus d'un siècle d'ancrage professionnel et de transmission du savoir-faire",
        ],
        paras: [
          "Depuis les années 70, la maison est spécialisée dans la réalisation de salles de bains « clé en main », qu'elle mène du premier croquis à la réception, avec tous les corps d'état.",
        ],
      },
    ],
    faq: [
      {
        q: "Depuis quand l'entreprise existe-t-elle ?",
        a: "Depuis 1880 pour la maison Bastien, née sous le nom de Le Bey. La maison Trebulle a été fondée en 1886. Elles sont réunies depuis 2010 sous le nom Bastien & Trebulle, dans le 16e arrondissement de Paris.",
      },
      {
        q: "Où se trouve l'entreprise ?",
        a: "Au 3, rue Gros, à Paris 16e. Le bureau répond au 01 45 24 66 66, et le numéro d'urgence, joignable jour et nuit, est le 01 45 24 77 89.",
      },
      {
        q: "L'entreprise est-elle indépendante ?",
        a: "Elle est dirigée par la famille Bastien depuis cinq générations. Le site actuel présente aussi trois partenaires, Verzotti, Virtuose et Bath Shop, qui complètent l'offre pour le ravalement, la décoration et la salle de bains.",
      },
    ],
    ctaTitle: "Poursuivre l'histoire avec vous.",
    ctaText: "Particulier ou professionnel, parlez-nous de votre projet : plomberie, couverture, chauffage ou salle de bains.",
    related: [PATHS.individuals, PATHS.pros, PATHS.works],
  },

  /* ————————————————————— Particuliers ————————————————————— */
  {
    path: PATHS.individuals,
    title: "Plombier à Paris pour particuliers : devis gratuit",
    description:
      "Plomberie, chauffage, couverture et salles de bains clé en main pour votre appartement ou votre maison à Paris et en Île-de-France. Un seul interlocuteur.",
    h1: "L'excellence artisanale pour votre logement à Paris",
    kicker: "Particuliers · Paris et Île-de-France",
    lead: "Plomberie, chauffage, couverture et salles de bains clé en main pour votre appartement ou votre maison à Paris et en Île-de-France.",
    brief:
      "Pour un appartement ou une maison à Paris et en Île-de-France, Bastien & Trebulle réunit plomberie, chauffage, couverture et salles de bains clé en main sous un seul interlocuteur. Le devis est gratuit et détaillé, les travaux sont menés par des compagnons qualifiés internes, et le dépannage 24h/24 reste ouvert aux clients.",
    contactType: "plomberie",
    service: "Plomberie et rénovation pour particuliers",
    crumb: "Particuliers",
    photo: { theme: "plomberie", n: 2 },
    caption: "Un appartement parisien, de la dépose à la réception",
    approach: "Rue Gros, dans le 16e, l'équipe vous reçoit ou se déplace chez vous pour la prise de besoin.",
    facts: [{ label: "Devis", value: "Gratuit" }, { label: "Métiers", value: "3" }, { label: "Zone", value: "Paris, IDF" }],
    sections: [
      {
        h2: "Pourquoi confier tout un logement à un seul interlocuteur ?",
        answer:
          "Parce que plomberie, chauffage et couverture se croisent dans un logement parisien : une fuite de toit touche un plafond, un radiateur dépend d'une colonne. Un interlocuteur unique coordonne les trois corps d'état, évite les renvois de responsabilité et garde une vue d'ensemble du chantier.",
        paras: [
          "Entreprise familiale depuis 1880, Bastien & Trebulle intervient chez les particuliers avec le même niveau d'exigence que sur ses chantiers patrimoniaux. Les compagnons qualifiés sont ceux de l'entreprise, sans sous-traitance opaque.",
        ],
        original: true,
      },
      {
        h2: "Comment se déroule un projet, de la première visite à la réception ?",
        answer:
          "En quatre temps : l'écoute, à domicile ou au téléphone, puis l'étude avec relevés, photos et devis détaillé gratuit, les travaux menés par des compagnons qualifiés avec un chantier suivi, et enfin le suivi, avec conseils d'entretien et garanties. Chaque étape est expliquée.",
        steps: [
          { t: "Écoute", d: "Prise de besoin à domicile ou au téléphone." },
          { t: "Étude", d: "Relevés, photos, devis détaillé gratuit." },
          { t: "Travaux", d: "Compagnons qualifiés, chantier suivi." },
          { t: "Suivi", d: "Conseils d'entretien et garanties." },
        ],
      },
      {
        h2: "Quels savoir-faire pour un appartement ou une maison ?",
        answer:
          "Quatre savoir-faire : la plomberie (robinetterie, tuyauterie, chauffe-eau, mise aux normes), le chauffage et l'énergie (chaudières, pompes à chaleur), la couverture et la toiture (zinguerie, entretien, isolation) et la rénovation de salle de bains, de l'étude à la finition. Un même devis les réunit.",
        paras: [
          "Chaque savoir-faire a sa page, avec ses questions et ses réalisations. Si votre projet en mêle plusieurs, le même devis les rassemble : c'est tout l'intérêt de confier le logement à une maison qui couvre les trois métiers.",
        ],
        list: [
          "Devis gratuit et transparent",
          "Compagnons qualifiés internes, sans sous-traitance opaque",
          "Dépannage 24h/24 pour les clients",
          "Paris et Île-de-France",
        ],
        listTitle: "Pourquoi nous confier votre logement",
      },
    ],
    faq: [
      {
        q: "Le devis est-il vraiment gratuit ?",
        a: "Oui. Le site de l'entreprise annonce un devis gratuit, détaillé et transparent, établi après des relevés et des photos de votre logement.",
      },
      {
        q: "Intervenez-vous en dehors de Paris ?",
        a: "L'entreprise intervient à Paris et en Île-de-France pour les particuliers. Elle a réalisé des chantiers dans le 16e, le 7e, le 8e et à Levallois-Perret.",
      },
      {
        q: "Puis-je vous appeler pour un dépannage ?",
        a: "Oui, l'astreinte est ouverte 24h/24 et 7j/7 au 01 45 24 77 89, y compris les dimanches et jours fériés, avec un tarif forfaitaire annoncé à l'avance.",
      },
    ],
    ctaTitle: "Parlons de votre projet.",
    ctaText: "Devis gratuit, conseil technique ou urgence, nous sommes à votre écoute.",
    related: [PATHS.bathroom, PATHS.plumbing, PATHS.emergency],
  },

  /* ————————————————————— Syndics / Hôtels ————————————————————— */
  {
    path: PATHS.pros,
    title: "Plombier couvreur pour syndics et hôtels, Paris 16e",
    description:
      "Entretien, audits, contrats de maintenance et interventions d'urgence pour copropriétés, hôtels et gestionnaires à Paris : plomberie, couverture, chauffage.",
    h1: "Le partenaire technique des syndics et des immeubles à Paris",
    kicker: "Professionnels · syndics, hôtels, gestionnaires",
    lead: "Entretien, audits, contrats de maintenance et interventions d'urgence pour copropriétés, hôtels et gestionnaires à Paris.",
    brief:
      "Bastien & Trebulle accompagne les syndics, les gestionnaires et les hôtels de Paris : audits de réseaux, contrats d'entretien, couverture d'immeuble, plomberie collective et chauffage. Une entreprise de plus de 40 salariés, fondée en 1880, remet des devis documentés par des photos et des croquis cotés, et assure une astreinte 24h/24.",
    contactType: "copropriete",
    service: "Plomberie, couverture et chauffage pour copropriétés et hôtels",
    crumb: "Syndics / Hôtels",
    photo: { theme: "couverture", n: 1 },
    caption: "Couverture et zinguerie d'un immeuble parisien",
    approach: "Pour un immeuble, un hôtel ou un portefeuille de copropriétés, un premier échange rue Gros ou sur site cadre l'intervention.",
    facts: [{ label: "Astreinte", value: "24h/24" }, { label: "Équipe", value: "40+" }, { label: "Depuis", value: "1880" }],
    sections: [
      {
        h2: "Quels enjeux pour un syndic, une copropriété ou un hôtel ?",
        answer:
          "Trois enjeux reviennent : l'entretien des immeubles (colonnes, toitures, chaudières collectives, réseaux privatifs), la qualité de finition et la discrétion dans les établissements de prestige, et la continuité de service grâce à une astreinte 24h/24 pour les résidents et les occupants.",
        paras: [
          "Une entreprise structurée de plus de 40 salariés, pour des interventions fiables, réactives et documentées. En cas d'urgence, le dépannage se fait à tarif forfaitaire, afin d'éviter les mauvaises surprises.",
        ],
        original: true,
      },
      {
        h2: "Quelles prestations professionnelles sont proposées ?",
        answer:
          "Six prestations : audits de réseaux communs et privatifs, contrats d'entretien des chaudières et des couvertures, couverture d'immeuble en zinc ou en ardoise, plomberie collective, chauffage individuel et collectif, et devis documentés par des photos, croquis cotés et annotations. Chaque prestation est documentée.",
        list: [
          "Audits de réseaux : plans, photos et rapports exploitables",
          "Contrats d'entretien : visites programmées et suivi régulier",
          "Couverture d'immeuble : zinc, ardoise, zinguerie et patrimoine ancien",
          "Plomberie collective : colonnes, fuites, mises aux normes et interventions planifiées",
          "Chauffage : installations et maintenance, avec une expertise QUALIBAT",
          "Devis documentés : photos, croquis cotés et annotations pour validation en assemblée générale ou en comité technique",
        ],
      },
      {
        h2: "Comment se déroule une intervention pour un immeuble ?",
        answer:
          "En quatre étapes : le brief, qui prend en compte vos contraintes d'accès, le diagnostic sur site avec relevés et rapport, le chiffrage avec options et planning adapté aux assemblées générales, puis l'exécution, avec chantier suivi, comptes rendus réguliers et astreinte si nécessaire.",
        steps: [
          { t: "Brief", d: "Prise en compte de votre besoin, des contraintes d'accès et du contexte syndic ou exploitant." },
          { t: "Diagnostic", d: "Visite sur site, relevés techniques, prises de vues et rapport clair." },
          { t: "Chiffrage", d: "Devis détaillé, options de travaux et planning adapté aux assemblées générales." },
          { t: "Exécution", d: "Chantier suivi, comptes rendus réguliers et astreinte si nécessaire." },
        ],
        after: ["Parmi les chantiers de la maison figurent des couvertures d'immeubles à Paris et à Levallois-Perret, et la rénovation de salles de bains d'un hôtel du 1er arrondissement."],
      },
    ],
    faq: [
      {
        q: "Intervenez-vous pour des hôtels ?",
        a: "Oui. Le chantier de l'Hôtel Opéra Richepanse, à Paris 1er, a été mené dans le respect des contraintes d'exploitation et avec une discrétion absolue.",
      },
      {
        q: "Vos devis conviennent-ils à une assemblée générale ?",
        a: "Ils sont conçus pour cela : photos, croquis cotés et annotations permettent une validation en assemblée générale ou en comité technique, avec un planning adapté.",
      },
      {
        q: "Proposez-vous des contrats d'entretien ?",
        a: "Oui, pour les chaudières et les couvertures, avec des visites programmées et un suivi régulier. Les modalités se précisent après un premier échange.",
      },
    ],
    ctaTitle: "Échangeons sur votre parc immobilier.",
    ctaText: "Un immeuble, un hôtel, un portefeuille de copropriétés : construisons un cadre d'intervention.",
    related: [PATHS.roofing, PATHS.heating, PATHS.emergency],
  },

  /* ————————————————————— Dépannage ————————————————————— */
  {
    path: PATHS.emergency,
    title: "Dépannage plomberie d'urgence à Paris, 24h/24 et 7j/7",
    description:
      "Fuite, engorgement, canalisation, chaudière : dépannage d'urgence à Paris et en région parisienne, 24h/24, dimanches et jours fériés, à tarif forfaitaire.",
    h1: "Dépannage d'urgence à Paris, 24h/24 et 7j/7",
    kicker: "Dépannage · 01 45 24 77 89",
    lead: "Fuite, engorgement, canalisation, chaudière : nos compagnons interviennent rapidement, à tarif forfaitaire.",
    brief:
      "Pour une fuite, un engorgement, une rupture de canalisation ou une panne de chaudière à Paris, Bastien & Trebulle assure un dépannage d'urgence 24h/24 et 7j/7, dimanches et jours fériés compris. Ses propres artisans interviennent sous 2 heures dans la région parisienne, à un tarif forfaitaire annoncé à l'avance.",
    contactType: "depannage",
    service: "Dépannage d'urgence plomberie",
    crumb: "Dépannage",
    photo: { theme: "plomberie", n: 0 },
    caption: "Des artisans de l'entreprise, pas un centre d'appels",
    approach: "Pour une urgence, appelez directement le numéro d'astreinte : ce sont les équipes de la rue Gros qui se déplacent.",
    facts: [{ label: "Astreinte", value: "24h/24" }, { label: "Intervention", value: "< 2 h" }, { label: "Tarif", value: "Forfait" }],
    extra: "depannage",
    sections: [
      {
        h2: "Qui intervient quand j'appelle pour une urgence ?",
        answer:
          "Les compagnons de l'entreprise elle-même, pas un centre d'appels anonyme. Bastien & Trebulle propose à ses clients une assistance dépannage 24 heures sur 24, tous les jours, toute l'année, avec le même niveau d'exigence que sur ses chantiers de plomberie, couverture et chauffage.",
        paras: [
          "Nos équipes de compagnons hautement qualifiés interviennent sous 2 heures à un tarif forfaitaire et préétabli dans toute la région parisienne, sans mauvaises surprises sur la facture. L'assistance s'adresse aux particuliers comme aux professionnels.",
        ],
        original: true,
      },
      {
        h2: "Dans quels cas peut-on faire appel au dépannage ?",
        answer:
          "Six cas d'intervention : le dégorgement, la rupture de canalisation, le débouchage, la recherche de fuite, le dégât des eaux, et la panne de chauffage ou de chauffe-eau. Ils concernent les particuliers comme les professionnels, partout en région parisienne. Chacun donne lieu à un tarif forfaitaire annoncé.",
        steps: [
          { t: "Dégorgement", d: "Nous libérons vos canalisations engorgées pour rétablir rapidement l'évacuation des eaux usées." },
          { t: "Rupture de canalisation", d: "Nous sécurisons la zone, stoppons la fuite et réparons la canalisation endommagée sans délai." },
          { t: "Débouchage", d: "Nous débouchons WC, éviers, douches et colonnes pour un écoulement fluide et durable." },
          { t: "Recherche de fuite", d: "Nous localisons l'origine de la fuite, diagnostiquons la cause et procédons à la réparation adaptée." },
          { t: "Dégât des eaux", d: "En cas d'inondation ou d'infiltration, nous intervenons en urgence pour limiter les dégâts et sécuriser les lieux." },
          { t: "Chauffage et chauffe-eau", d: "En panne de chaudière ou de ballon, nos spécialistes rétablissent le confort thermique au plus vite." },
        ],
        original: true,
      },
      {
        h2: "Que faire en attendant l'artisan ?",
        answer:
          "Si vous le pouvez sans risque, coupez l'arrivée d'eau au compteur ou au robinet d'arrêt, éloignez les appareils électriques de l'eau, protégez ce qui peut l'être et prenez quelques photos. Puis appelez le 01 45 24 77 89 : mieux vaut un appel qu'un message.",
        paras: [
          "En cas d'odeur de gaz, ne cherchez pas à réparer vous-même : aérez, évitez toute flamme ou étincelle et appelez les secours compétents avant l'artisan. Pour un dégât des eaux, prévenez aussi votre assureur et conservez vos photos.",
        ],
      },
    ],
    faq: [
      {
        q: "Le dépannage est-il ouvert le dimanche ?",
        a: "Oui, l'astreinte fonctionne 24h/24 et 7j/7, y compris les dimanches et jours fériés, d'après le site de l'entreprise.",
      },
      {
        q: "Le tarif est-il annoncé à l'avance ?",
        a: "Oui : l'intervention d'urgence se fait à un tarif forfaitaire et préétabli, pour éviter les mauvaises surprises. Le montant se précise au téléphone.",
      },
      {
        q: "Intervenez-vous seulement à Paris ?",
        a: "L'entreprise annonce intervenir sous 2 heures dans toute la région parisienne pour les urgences plomberie.",
      },
    ],
    ctaTitle: "Urgence en cours ?",
    ctaText: "Appelez maintenant, et nous intervenons dans la foulée. Pour un projet non urgent, demandez un devis.",
    related: [PATHS.plumbing, PATHS.heating, PATHS.individuals],
  },

  /* ————————————————————— Nos réalisations ————————————————————— */
  {
    path: PATHS.works,
    title: "Nos réalisations : plomberie et couverture à Paris",
    description:
      "Vingt chantiers de plomberie, de couverture, de zinguerie et de salles de bains à Paris et à Levallois-Perret : Étoile, Quai Voltaire, Hôtel Opéra Richepanse.",
    h1: "L'exigence de nos réalisations, à Paris",
    kicker: "Réalisations · galerie de nos travaux",
    lead: "Plomberie, couverture, chauffage et salles de bains : une sélection de chantiers à Paris et en Île-de-France.",
    brief:
      "Cette galerie rassemble vingt chantiers de Bastien & Trebulle à Paris et à Levallois-Perret : restaurations de couverture et de zinguerie sur des immeubles du 7e et du 16e, rénovations de salles de bains en appartement, et plomberie d'un hôtel du 1er arrondissement. Chaque fiche indique le métier, le lieu et le type de travaux.",
    contactType: "plomberie",
    service: "Plomberie et couverture, réalisations",
    crumb: "Réalisations",
    photo: { theme: "hero" },
    caption: "Un chantier de l'entreprise à Paris",
    approach: "Les chantiers de cette galerie rayonnent autour du 16e, de l'Étoile aux quais de la rive gauche.",
    facts: [{ label: "Chantiers", value: "20" }, { label: "Métiers", value: "2" }, { label: "Zone", value: "Paris" }],
    extra: "realisations",
    sections: [
      {
        h2: "Quels types de chantiers l'entreprise réalise-t-elle à Paris ?",
        answer:
          "Deux grandes familles : la couverture et la zinguerie d'immeubles, en restauration patrimoniale, et la plomberie avec la rénovation de salles de bains en appartement ou à l'hôtel. Chaque chantier suit un diagnostic, un devis détaillé et une réception documentée.",
        paras: [
          "Les restaurations de couverture visent l'étanchéité, le remplacement des éléments dégradés et une finition à la hauteur du patrimoine parisien. Les salles de bains associent plomberie, finitions et cohérence d'ensemble, souvent sous la maîtrise d'œuvre d'un cabinet d'architecture.",
        ],
      },
      {
        h2: "Pour qui ces chantiers ont-ils été menés ?",
        answer:
          "Pour des syndicats de copropriétaires représentés par des cabinets de syndic, pour des particuliers et pour un hôtel. La plupart des fiches précisent le cabinet de maîtrise d'œuvre, signe d'un travail en équipe avec les architectes et les économistes de la construction.",
        paras: [
          "Cette diversité reflète les trois publics de la maison : les particuliers, les syndics et gestionnaires, les établissements hôteliers. Les noms des clients particuliers ne sont pas cités, par discrétion.",
        ],
      },
    ],
    faq: [
      {
        q: "Puis-je voir un chantier proche de chez moi ?",
        a: "La galerie couvre le 16e, le 7e, le 8e, le 6e, le 5e, le 1er et Levallois-Perret. Pour un projet similaire, demandez un devis : l'équipe détaille ce qui a été fait sur ces adresses.",
      },
      {
        q: "Les photos montrent-elles de vrais chantiers de l'entreprise ?",
        a: "Oui, ce sont les photos publiées par l'entreprise sur son site actuel. À défaut, la maquette affiche un aplat neutre plutôt qu'une image sans rapport.",
      },
      {
        q: "Les fiches détaillent-elles le prix des travaux ?",
        a: "Non, le site actuel n'affiche aucun prix. Chaque projet donne lieu à un devis détaillé gratuit après visite et relevés.",
      },
    ],
    ctaTitle: "Vous avez un projet similaire ?",
    ctaText: "Particulier ou professionnel, parlez-nous de votre besoin : nous revenons vers vous avec un devis.",
    related: [PATHS.roofing, PATHS.bathroom, PATHS.pros],
  },

  /* ————————————————————— Partenaires ————————————————————— */
  {
    path: PATHS.partners,
    title: "Nos partenaires du bâtiment à Paris : Verzotti, Bath Shop",
    description:
      "Verzotti pour le ravalement et la maçonnerie, Virtuose pour l'artisanat d'excellence, Bath Shop pour la salle de bains : les partenaires de B&T à Paris.",
    h1: "Nos partenaires pour tous vos projets à Paris",
    kicker: "Partenaires · pour tous vos projets",
    lead: "Trois maisons complètent l'offre de Bastien & Trebulle : ravalement et maçonnerie, artisanat d'excellence, salle de bains sur mesure.",
    brief:
      "Pour accompagner un chantier au-delà de la plomberie, de la couverture et du chauffage, Bastien & Trebulle s'appuie à Paris sur trois partenaires : Verzotti, créée en 1921, pour le ravalement, la peinture et la maçonnerie, le groupement Virtuose pour l'artisanat d'excellence, et Bath Shop pour concevoir une salle de bains sur mesure.",
    contactType: "autre",
    service: "Partenaires du bâtiment",
    crumb: "Partenaires",
    photo: { theme: "immeubles" },
    caption: "Un chantier parisien se mène à plusieurs métiers",
    approach: "Les partenaires travaillent avec l'équipe de la rue Gros, qui reste votre interlocuteur pour la plomberie, la couverture et le chauffage.",
    facts: [{ label: "Partenaires", value: "3" }, { label: "Verzotti", value: "1921" }, { label: "Bath Shop", value: "40 ans" }],
    extra: "partenaires",
    sections: [
      {
        h2: "Pourquoi l'entreprise travaille-t-elle avec des partenaires ?",
        answer:
          "Un chantier parisien dépasse rarement un seul métier : une toiture suppose un ravalement, une salle de bains un carrelage et un mobilier. S'appuyer sur des maisons reconnues permet de proposer un projet complet, sans que Bastien & Trebulle sorte de ses trois métiers.",
        paras: [
          "Chaque partenaire garde ses compétences et son équipe : Verzotti compte une vingtaine de salariés spécialisés, Bath Shop dispose d'un bureau d'étude, et Virtuose réunit des entreprises indépendantes. L'entreprise vous indique, pour chaque projet, ce qui relève d'elle ou d'un partenaire.",
        ],
      },
      {
        h2: "Qui contacter pour un projet qui mêle plusieurs métiers ?",
        answer:
          "Le plus simple est de commencer par Bastien & Trebulle, au 01 45 24 66 66 ou par le formulaire de contact. L'entreprise évalue le besoin, chiffre ses propres travaux et vous oriente vers le partenaire adapté si le projet touche au ravalement, à la maçonnerie ou à la décoration.",
        paras: [
          "Cette organisation évite de multiplier les interlocuteurs au moment du devis. Elle est particulièrement utile aux syndics et aux gestionnaires, qui préparent des travaux de façade et de toiture en même temps.",
        ],
      },
    ],
    faq: [
      {
        q: "Les partenaires sont-ils des filiales de Bastien & Trebulle ?",
        a: "Le site actuel les présente comme des partenaires. Le statut exact de chaque relation reste à confirmer avec l'entreprise.",
      },
      {
        q: "Puis-je contacter directement un partenaire ?",
        a: "Oui, chacun a son site : verzotti.fr, virtuose-groupe.com et bathshop.fr. Pour un projet coordonné avec la plomberie ou la couverture, passez plutôt par Bastien & Trebulle.",
      },
      {
        q: "Bath Shop intervient-il sur la salle de bains complète ?",
        a: "Bath Shop décline la salle de bains de A à Z depuis 40 ans, avec un bureau d'étude. La plomberie du projet peut être assurée par Bastien & Trebulle.",
      },
    ],
    ctaTitle: "Un projet à plusieurs métiers ?",
    ctaText: "Décrivez-le en quelques lignes : nous vous orientons vers le bon interlocuteur.",
    related: [PATHS.bathroom, PATHS.roofing, PATHS.history],
  },

  /* ————————————————————— Plombier Paris 16e ————————————————————— */
  {
    path: PATHS.plumbing,
    zone: "Paris 16e",
    title: "Plombier Paris 16e : dépannage et rénovation | B&T",
    description:
      "Plombier à Paris 16e depuis 1880 : robinetterie, tuyauterie, chauffe-eau, mise aux normes et dépannage 24h/24, par une maison de la rue Gros. Devis gratuit.",
    h1: "Plombier à Paris 16e, depuis la rue Gros",
    kicker: "Plomberie · Paris 16e",
    lead: "Robinetterie, tuyauterie, chauffe-eau, rénovation de salle de bains et mise aux normes, par une maison installée dans le 16e depuis cinq générations.",
    brief:
      "Plombier à Paris 16e, Bastien & Trebulle installe et répare robinetterie, tuyauterie en cuivre, fonte, acier ou PVC, sanitaires, baignoires, douches, lavabos, WC et chauffe-eau. La maison, établie au 3, rue Gros depuis cinq générations, assure aussi les mises aux normes et un dépannage d'urgence 24h/24, à tarif forfaitaire.",
    contactType: "plomberie",
    service: "Plomberie",
    crumb: "Plombier Paris 16e",
    photo: { theme: "plomberie", n: 1 },
    caption: "Plomberie d'un appartement du 16e arrondissement",
    approach: "L'atelier est dans le 16e : de la rue Gros, Auteuil, Passy et l'Étoile se rejoignent sans traverser la ville.",
    facts: [{ label: "Quartier", value: "Paris 16e" }, { label: "Matériaux", value: "4" }, { label: "Depuis", value: "1880" }],
    sections: [
      {
        h2: "Que fait un plombier dans un immeuble du 16e arrondissement ?",
        answer:
          "Il installe et raccorde les sanitaires, la robinetterie, les baignoires, les douches, les lavabos, les WC et les chauffe-eau, et il intervient sur les tuyauteries en cuivre, fonte, acier et PVC. Dans le 16e, il travaille souvent dans des immeubles de pierre aux colonnes anciennes.",
        paras: [
          "Les grands appartements d'Auteuil, de Passy et de l'Étoile ont des réseaux qui ont vieilli par étapes : une salle de bains refaite ici, une colonne conservée là. Le plombier repère ce qui peut être gardé et ce qu'il vaut mieux reprendre, pour éviter qu'une fuite ne revienne un étage plus bas.",
          "L'entreprise a mené dans le quartier la plomberie d'un appartement de l'Étoile, rénové sous la maîtrise d'œuvre d'un cabinet d'intérieur : diagnostic, prise de cotes, puis suivi du chantier jusqu'à la réception.",
        ],
        list: ["Installation et raccordement de sanitaires et de robinetterie", "Remplacement de chauffe-eau et de ballons", "Reprise de tuyauteries en cuivre, fonte, acier ou PVC", "Mise aux normes d'installations anciennes"],
      },
      {
        h2: "Pourquoi une mise aux normes de la plomberie est-elle utile ?",
        answer:
          "Parce qu'une installation ancienne cumule souvent des matériaux différents, des raccords improvisés et des organes de sécurité absents. La mise aux normes remet l'ensemble en cohérence : réseaux lisibles, robinets d'arrêt accessibles, appareils conformes, et moins de risques de fuite ou de dégât des eaux.",
        paras: [
          "Avant de proposer quoi que ce soit, l'équipe relève l'existant, photographie les passages de canalisations et vous remet un devis détaillé gratuit. Vous décidez ensuite de la part de travaux à engager, en priorité ou par étapes.",
        ],
      },
      {
        h2: "Comment joindre un plombier du 16e en urgence ?",
        answer:
          "En appelant le 01 45 24 77 89, numéro d'urgence de l'entreprise, joignable 24h/24 et 7j/7, dimanches et jours fériés compris. L'intervention se fait sous 2 heures en région parisienne, à un tarif forfaitaire annoncé à l'avance, par des artisans de la maison.",
        paras: ["Pour une demande qui peut attendre, le formulaire de contact permet d'ajouter des photos et l'adresse du lieu : vous gagnez du temps à la première visite."],
      },
    ],
    faq: [
      {
        q: "Où est installé votre atelier dans le 16e ?",
        a: "L'entreprise est au 3, rue Gros, 75016 Paris. Le bureau répond au 01 45 24 66 66 ; le numéro d'urgence est le 01 45 24 77 89.",
      },
      {
        q: "Travaillez-vous en copropriété dans le 16e ?",
        a: "Oui. L'entreprise accompagne syndics et gestionnaires, pour l'entretien des colonnes, les réseaux collectifs et les interventions planifiées.",
      },
      {
        q: "Faut-il un devis avant les travaux ?",
        a: "Oui : le devis est gratuit et détaillé, établi après visite ou sur photos. En urgence, le tarif forfaitaire est annoncé avant le déplacement.",
      },
    ],
    ctaTitle: "Un plombier de votre quartier.",
    ctaText: "Décrivez votre besoin, joignez des photos : nous revenons vers vous avec un devis gratuit.",
    related: [PATHS.emergency, PATHS.bathroom, PATHS.heating, "/plombier-paris-8", "/plombier-paris-17"],
  },

  /* ————————————————————— Couvreur zingueur ————————————————————— */
  {
    path: PATHS.roofing,
    zone: "Paris 16e",
    title: "Couvreur zingueur Paris 16e : toiture et zinguerie",
    description:
      "Couvreur zingueur à Paris 16e depuis 1880 : charpente, patrimoine, zinguerie, toiture, entretien et isolation d'immeubles parisiens. Devis gratuit et suivi.",
    h1: "Couvreur zingueur à Paris 16e, en toiture depuis 1880",
    kicker: "Couverture · Paris 16e",
    lead: "Charpente, patrimoine, zinguerie, toiture, entretien, isolation : la couverture est le plus ancien métier de la maison.",
    brief:
      "Couvreur zingueur à Paris 16e, Bastien & Trebulle restaure les toitures d'immeubles depuis 1880 : charpente, couverture en zinc ou en ardoise, zinguerie, entretien et isolation. L'entreprise intervient pour des copropriétés du 16e, du 7e et de Levallois-Perret, avec un diagnostic photo, des croquis cotés et une qualification Patrimoine Ancien.",
    contactType: "couverture",
    service: "Couverture et zinguerie",
    crumb: "Couvreur Paris 16e",
    photo: { theme: "couverture", n: 0 },
    caption: "Couverture et zinguerie d'un immeuble parisien",
    approach: "Les toits du 16e se voient depuis la rue Gros : c'est là que les couvreurs de la maison partent et reviennent.",
    facts: [{ label: "Métier d'origine", value: "1880" }, { label: "Chantiers", value: "14" }, { label: "Matériaux", value: "Zinc, ardoise" }],
    sections: [
      {
        h2: "Quels travaux de couverture sont réalisés sur un immeuble parisien ?",
        answer:
          "La restauration des parties courantes en zinc ou en ardoise, les ouvrages de zinguerie (gouttières, chéneaux, noues, solins), la charpente, l'entretien régulier et l'isolation. L'objectif est constant : garantir l'étanchéité tout en préservant l'harmonie de l'ensemble et le patrimoine du quartier.",
        paras: [
          "La couverture est le métier d'origine de la maison, bien avant la plomberie moderne. Les chantiers de la galerie, du Quai Voltaire à l'Étoile, en passant par la rue de l'Université et la rue Danton à Levallois-Perret, suivent la même méthode : un diagnostic photo, des croquis côtés, puis une restauration documentée.",
          "Le chantier de l'Étoile, dans le 16e, a consisté à remplacer les éléments dégradés de la couverture et de la zinguerie, et à restituer une finition à la hauteur du lieu, dans le respect des occupants.",
        ],
        list: ["Restauration de couverture en zinc et en ardoise", "Zinguerie : chéneaux, gouttières, ouvrages de raccord", "Charpente, entretien, isolation", "Suivi documenté jusqu'à la réception"],
      },
      {
        h2: "Qu'est-ce que la qualification Patrimoine Ancien ?",
        answer:
          "Le site de l'entreprise la cite à propos du chantier de la rue Danton : une qualification attestant un savoir-faire sur le bâti ancien. Elle intéresse les syndics d'immeubles anciens, où la couverture doit être restaurée dans les règles de l'art plutôt que simplement remplacée.",
        paras: ["Les détails de cette qualification et des autres labels de l'entreprise, dont les logos figurent sur son site, sont à confirmer avec elle avant publication."],
      },
      {
        h2: "Comment prévenir les infiltrations avant l'hiver ?",
        answer:
          "Par un entretien régulier : nettoyage des chéneaux et des descentes, contrôle des joints de zinguerie, repérage des éléments dégradés avant qu'ils ne laissent passer l'eau. Un contrat d'entretien prévoit des visites programmées et un suivi régulier de la couverture.",
        paras: ["Une petite reprise faite à temps coûte presque toujours moins qu'un plafond à refaire. Si une tache apparaît chez un voisin du dernier étage, signalez-la sans attendre à votre syndic."],
      },
    ],
    faq: [
      {
        q: "Intervenez-vous pour les syndics du 16e ?",
        a: "Oui. Plusieurs chantiers de couverture ont été menés pour le compte de syndicats de copropriétaires, représentés par leur cabinet de syndic.",
      },
      {
        q: "Faites-vous aussi la plomberie et le chauffage ?",
        a: "Oui, l'entreprise couvre les trois corps d'état : couverture, plomberie et chauffage, avec un seul interlocuteur.",
      },
      {
        q: "Comment obtenir un devis pour une toiture ?",
        a: "Par le formulaire de contact ou par téléphone. Un diagnostic avec photos et croquis côtés précède le devis détaillé gratuit.",
      },
    ],
    ctaTitle: "Un toit à restaurer ?",
    ctaText: "Joignez quelques photos de la toiture : nous vous répondons avec un devis détaillé.",
    related: [PATHS.pros, PATHS.works, PATHS.plumbing, "/plombier-paris-7", "/plombier-levallois-perret"],
  },

  /* ————————————————————— Chauffagiste ————————————————————— */
  {
    path: PATHS.heating,
    zone: "Paris 16e",
    title: "Chauffagiste Paris 16e : chaudières, pompes à chaleur",
    description:
      "Chauffagiste à Paris 16e : chaudières, pompes à chaleur, chauffe-eau, installation, entretien et dépannage de systèmes individuels et collectifs d'immeubles.",
    h1: "Chauffagiste à Paris 16e : chaudières et pompes à chaleur",
    kicker: "Chauffage et énergie · Paris 16e",
    lead: "Chaudières, pompes à chaleur, chauffe-eau : le confort thermique de votre logement ou de votre immeuble, installé et entretenu.",
    brief:
      "Chauffagiste à Paris 16e, Bastien & Trebulle installe, entretient et dépanne chaudières, pompes à chaleur et chauffe-eau, pour des logements individuels comme pour des immeubles collectifs. L'entreprise propose des contrats d'entretien à visites programmées et un dépannage 24h/24 en cas de panne de chaudière ou de ballon.",
    contactType: "chauffage",
    service: "Chauffage et énergie",
    crumb: "Chauffagiste Paris 16e",
    photo: { theme: "toits" },
    caption: "Le chauffage d'un immeuble parisien, du toit à la cave",
    approach: "Les chaufferies du 16e sont souvent en sous-sol d'immeubles anciens : l'équipe de la rue Gros les connaît.",
    facts: [{ label: "Systèmes", value: "Indiv. et coll." }, { label: "Entretien", value: "Contrats" }, { label: "Urgence", value: "24h/24" }],
    sections: [
      {
        h2: "Quels équipements de chauffage installe un chauffagiste ?",
        answer:
          "Des chaudières, des pompes à chaleur et des chauffe-eau, pour des systèmes individuels comme collectifs. L'entreprise annonce une expertise QUALIBAT en chauffage. Le bon équipement dépend du logement, de la production d'eau chaude existante et des contraintes de l'immeuble. Le choix se fait après visite.",
        paras: [
          "Dans un immeuble parisien, la décision se prend rarement seul : la chaudière collective, les colonnes et les radiateurs forment un ensemble. Avant d'installer, l'équipe relève l'existant et explique ce qui se remplace, ce qui se conserve et ce qui demande l'accord de la copropriété.",
        ],
        list: ["Chaudières individuelles et collectives", "Pompes à chaleur", "Chauffe-eau et ballons", "Installations et maintenance"],
      },
      {
        h2: "Pourquoi souscrire un contrat d'entretien de chaudière ?",
        answer:
          "Parce qu'une chaudière suivie régulièrement tombe moins souvent en panne et consomme mieux. Le contrat d'entretien prévoit des visites programmées et un suivi régulier, pour les chaudières comme pour les couvertures. Il évite de découvrir un problème au premier jour de froid.",
        paras: ["Pour les syndics, l'entretien des chaudières collectives s'intègre à un contrat plus large, avec audit préalable des réseaux et rapport clair, exploitable en assemblée générale."],
      },
      {
        h2: "Que faire en cas de panne de chaudière ?",
        answer:
          "Vérifier l'alimentation et la pression si vous savez le faire, ne pas forcer l'appareil, puis appeler le 01 45 24 77 89. En panne de chaudière ou de ballon, les spécialistes de l'entreprise rétablissent le confort thermique au plus vite, 24h/24 et 7j/7, à tarif forfaitaire.",
        paras: ["Précisez la marque, l'âge approximatif et l'éventuel message d'erreur : ces détails permettent au technicien de préparer sa venue."],
      },
    ],
    faq: [
      {
        q: "Installez-vous des pompes à chaleur ?",
        a: "Oui, le site de l'entreprise cite les pompes à chaleur parmi ses prestations de chauffage et d'énergie. Le dimensionnement se décide après visite.",
      },
      {
        q: "Intervenez-vous sur les chaudières collectives ?",
        a: "Oui, pour les syndics et gestionnaires : installations, maintenance et contrats d'entretien avec visites programmées.",
      },
      {
        q: "Que couvre l'expertise QUALIBAT citée sur le site ?",
        a: "Le site mentionne une expertise QUALIBAT en chauffage. Les qualifications exactes et leurs dates sont à confirmer avec l'entreprise.",
      },
    ],
    ctaTitle: "Un chauffage à installer ou à entretenir ?",
    ctaText: "Indiquez le type de logement et l'équipement actuel : nous vous proposons un devis gratuit.",
    related: [PATHS.emergency, PATHS.plumbing, PATHS.pros, "/plombier-paris-15"],
  },

  /* ————————————————————— Salle de bains clé en main ————————————————————— */
  {
    path: PATHS.bathroom,
    zone: "Paris 16e",
    title: "Salle de bains clé en main Paris 16e : B&T plombier",
    description:
      "Rénovation de salle de bains clé en main à Paris 16e depuis les années 70 : conception, études techniques, corps d'état et finitions, par un seul interlocuteur.",
    h1: "Salle de bains clé en main à Paris 16e",
    kicker: "Salle de bain · Paris 16e",
    lead: "Rénovation de votre salle de bain en un espace de bien-être et d'élégance, de la conception à la réception.",
    brief:
      "À Paris 16e, Bastien & Trebulle réalise des salles de bains clé en main depuis les années 70 : conception, études techniques, coordination des corps d'état et réalisation finale. Appartements, hôtels : la plomberie est menée avec précision, sous la maîtrise d'œuvre d'un cabinet quand le projet l'exige, avec des partenaires comme Bath Shop.",
    contactType: "salle-de-bains",
    service: "Rénovation de salle de bains clé en main",
    crumb: "Salle de bains Paris 16e",
    photo: { theme: "plomberie", n: 3 },
    caption: "Une salle de bains rénovée dans un appartement parisien",
    approach: "Pour une salle de bains, la visite rue Gros ou à domicile permet de relever les cotes et de vérifier les évacuations.",
    facts: [{ label: "Clé en main", value: "Années 70" }, { label: "Corps d'état", value: "3" }, { label: "Réalisations", value: "6+" }],
    sections: [
      {
        h2: "Que comprend une salle de bains clé en main ?",
        answer:
          "La conception, les études techniques, les différents corps d'état et la réalisation finale du projet, sous la conduite d'un seul interlocuteur. Vous ne coordonnez pas plombier, carreleur et électricien : l'entreprise s'en charge et vous remet une pièce terminée, réceptionnée.",
        paras: [
          "L'entreprise est spécialisée dans ce type de projet depuis les années 70 et couvre les trois corps d'état. Sur les chantiers de la galerie, de l'Étoile à la rue Garancière, la même méthode revient : diagnostic, prise de cotes, rénovation menée avec exigence, suivi à chaque étape.",
        ],
        original: true,
      },
      {
        h2: "Comment concilier élégance et plomberie fiable ?",
        answer:
          "En pensant les réseaux avant le décor : positions des évacuations, arrivées d'eau, ventilation, accès aux vannes. Une belle salle de bains cache une plomberie accessible et durable. C'est ce que l'entreprise veille à garantir, à côté du choix des matériaux et des finitions.",
        paras: [
          "Pour le choix des produits et la conception sur mesure, la maison s'appuie sur son partenaire Bath Shop, qui décline la salle de bains de A à Z depuis 40 ans et dispose d'un bureau d'étude.",
        ],
        list: ["Relevés et prise de cotes", "Réseaux d'eau et évacuations", "Sanitaires, robinetterie, baignoire, douche", "Finitions et réception"],
      },
      {
        h2: "Quel est le déroulé d'une rénovation de salle de bains ?",
        answer:
          "Il suit les quatre temps des projets de particuliers : l'écoute à domicile ou au téléphone, l'étude avec relevés, photos et devis gratuit, les travaux par des compagnons qualifiés, puis le suivi avec conseils d'entretien et garanties. Chaque étape est documentée.",
        paras: ["Dans un hôtel, comme à l'Opéra Richepanse, le chantier tient compte de la continuité d'exploitation et d'une discrétion absolue : la méthode reste la même."],
      },
    ],
    faq: [
      {
        q: "Combien coûte une salle de bains clé en main ?",
        a: "Le site actuel n'affiche aucun prix. Le coût dépend de la surface, des équipements et de l'état des réseaux : un devis gratuit est établi après visite.",
      },
      {
        q: "Travaillez-vous avec des architectes d'intérieur ?",
        a: "Oui. Plusieurs chantiers ont été menés sous la maîtrise d'œuvre d'un cabinet d'architecture ou d'intérieur, et l'entreprise s'appuie aussi sur Bath Shop pour la conception.",
      },
      {
        q: "Peut-on rénover une salle de bains dans un hôtel ?",
        a: "Oui : le chantier de l'Hôtel Opéra Richepanse, à Paris 1er, a été mené dans le respect des contraintes d'exploitation de l'hôtel.",
      },
    ],
    ctaTitle: "Un projet de salle de bains ?",
    ctaText: "Joignez des photos de la pièce actuelle et vos envies : nous préparons une première proposition.",
    related: [PATHS.individuals, PATHS.plumbing, PATHS.partners, "/plombier-paris-8", "/plombier-paris-7"],
  },
];

export { ALL };
