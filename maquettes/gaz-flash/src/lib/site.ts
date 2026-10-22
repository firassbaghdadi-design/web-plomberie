import type { PhotoId } from "./photos";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://gazflash.fr").replace(/\/$/, "");
export const INDEXABLE = process.env.NEXT_PUBLIC_INDEXABLE === "true";
export const LAST_UPDATED = "2026-10-22";
export const FOUNDED = 1965;
export const YEARS = new Date().getFullYear() - FOUNDED;

export const business = {
  name: "Gaz Flash",
  legalName: "GAZFLASH SAS",
  phoneDisplay: "01 42 64 80 51",
  phoneTel: "+33142648051",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact.gazflash75@gmail.com",
  address: { street: "7 rue Sainte-Isaure", postalCode: "75018", city: "Paris" },
  geo: { lat: 48.8933121, lng: 2.3438404 },
  mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJ65407l5u5kcRjDpk3z9doMM",
  googleRating: { value: 3.7, count: 63 },
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "12:30" },
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "13:30", closes: "17:00" },
  ],
  hoursLabel: "Du lundi au vendredi, de 8 h à 12 h 30 et de 13 h 30 à 17 h. Fermé le samedi et le dimanche.",
  areaServed: [
    { type: "City", name: "Paris" },
    { type: "AdministrativeArea", name: "Seine-Saint-Denis" },
    { type: "AdministrativeArea", name: "Hauts-de-Seine" },
    { type: "AdministrativeArea", name: "Val-de-Marne" },
  ],
  legal: {
    form: "Société par actions simplifiée",
    capital: "30 600 €",
    rcs: "R.C.S. Paris 65 B 3524",
    siret: "652 035 247 00012",
    naf: "4322A",
    opqcb: "OPQCB n° 5511***",
    director: "Franck Robillard",
    dpo: "M. Didier Tieufri",
  },
};

export const PATHS = {
  home: "/",
  company: "/index.php/entreprise/",
  services: "/index.php/service/",
  maintenance: "/index.php/service/entretien/",
  repair: "/index.php/service/depannage/",
  install: "/index.php/service/installation/",
  sweep: "/index.php/service/ramonage/",
  prices: "/index.php/service/nostarifs/",
  installs: "/index.php/installations/",
  regulation: "/index.php/portfolio-item/regulation/",
  waterHeater: "/index.php/portfolio-item/project-2-modern-house/",
  condensing: "/index.php/portfolio-item/project-6-living-room-design/",
  lowTemp: "/index.php/portfolio-item/project-1-interior-design/",
  contact: "/index.php/contact/",
  legal: "/index.php/mentions-legales/",
  privacy: "/index.php/donnees-personnelles/",
} as const;

export const nav = [
  { label: "Accueil", href: PATHS.home },
  {
    label: "Services",
    href: PATHS.services,
    children: [
      { label: "Entretien", href: PATHS.maintenance },
      { label: "Dépannage", href: PATHS.repair },
      { label: "Installation", href: PATHS.install },
      { label: "Ramonage", href: PATHS.sweep },
      { label: "Nos tarifs", href: PATHS.prices },
    ],
  },
  { label: "Installations", href: PATHS.installs },
  { label: "L'entreprise", href: PATHS.company },
  { label: "Contact", href: PATHS.contact },
];

export const shortAnswer =
  "Gaz Flash est un chauffagiste installé rue Sainte-Isaure, à Paris 18e, qui entretient, dépanne et installe chaudières, chauffe-eau et régulations au gaz à Paris, en Seine-Saint-Denis, dans les Hauts-de-Seine et le Val-de-Marne. L'entreprise est Professionnel du Gaz et Qualibat RGE, et publie ses tarifs d'entretien.";

export type Service = {
  key: "maintenance" | "repair" | "install" | "sweep";
  path: string;
  title: string;
  short: string;
  image: PhotoId;
  metaTitle: string;
  metaDescription: string;
  h1: string;
};

export const services: Record<Service["key"], Service> = {
  maintenance: {
    key: "maintenance",
    path: PATHS.maintenance,
    title: "Entretien",
    short: "Entretien de votre chaudière à Paris, en Seine-Saint-Denis, dans les Hauts-de-Seine et le Val-de-Marne. Contrat annuel ou forfait révision sans engagement.",
    image: "entretien",
    metaTitle: "Entretien de chaudière gaz à Paris : contrat | Gaz Flash",
    metaDescription:
      "Contrat d'entretien ou forfait révision de chaudière gaz à Paris et petite couronne : visite annuelle, attestation, ramonage en option. Tarifs TTC affichés.",
    h1: "Entretien de chaudière gaz : contrat annuel ou forfait révision",
  },
  repair: {
    key: "repair",
    path: PATHS.repair,
    title: "Dépannage",
    short: "Une intervention rapide, effectuée par des techniciens spécialisés et formés par les constructeurs, avec un devis détaillé et des explications claires.",
    image: "depannage",
    metaTitle: "Dépannage chaudière et chauffe-eau gaz à Paris | Gaz Flash",
    metaDescription:
      "Dépannage de chauffage, chauffe-eau, radiateur à gaz et ballon électrique à Paris et petite couronne : techniciens formés par les constructeurs, devis détaillé.",
    h1: "Dépannage de chauffage et chauffe-eau à gaz à Paris",
  },
  install: {
    key: "install",
    path: PATHS.install,
    title: "Installation",
    short: "Diagnostic, conseil, puis pose de votre chaudière, chauffe-eau, régulation ou radiateurs : la solution la plus adaptée à votre logement et à votre budget.",
    image: "installation",
    metaTitle: "Installation de chaudière gaz à Paris et en petite couronne",
    metaDescription:
      "Installation de chaudière, chauffe-eau, régulation et radiateurs à Paris : diagnostic, conseil et pose clé en main par un chauffagiste certifié Gaz et RGE.",
    h1: "Installation de chaudière, chauffe-eau et régulation, clé en main",
  },
  sweep: {
    key: "sweep",
    path: PATHS.sweep,
    title: "Ramonage",
    short: "Une obligation légale et avant tout une question de sécurité : le ramonage protège votre famille, vos biens et améliore le fonctionnement de vos équipements.",
    image: "ramonage",
    metaTitle: "Ramonage de conduit de fumée gaz à Paris | Gaz Flash",
    metaDescription:
      "Ramonage de conduit de fumée gaz à Paris et petite couronne : obligation annuelle, certificat remis, réalisé par un professionnel qualifié. Tarif affiché.",
    h1: "Ramonage de conduit de fumée gaz : obligations et sécurité",
  },
};

/** Tarifs repris tels que publiés sur gazflash.fr (TTC). */
export const priceGroups = [
  {
    title: "Chaudières",
    contract: { paris18: "150 €", other: "170 €" },
    review: { paris18: "130 €", other: "150 €" },
  },
  {
    title: "Chaudières à condensation",
    contract: { paris18: "170 €", other: "180 €" },
    review: { paris18: "150 €", other: "160 €" },
  },
  {
    title: "Radiateur, chauffe-bain, Styx…",
    contract: { paris18: "130 €", other: "140 €" },
    review: { paris18: "120 €", other: "130 €" },
  },
];

export const sweepPrice = "50 €";

export const reasons = [
  { title: "Une prestation de qualité", text: "Dans le cadre de nos contrats de maintenance, nous nous engageons à offrir une prestation de qualité." },
  { title: "Professionnel du Gaz et RGE", text: "Nous sommes certifiés Professionnel du Gaz et Qualibat RGE." },
  { title: "Des conseils adaptés", text: "Notre équipe de professionnels vous conseille et vous propose une solution adaptée à votre besoin." },
  { title: "Installations garanties", text: "Nos installations sont garanties 2 ans pour les pièces." },
  { title: "Plus de 50 ans dans le chauffage", text: "Spécialisée dans le chauffage depuis plus de 50 ans, notre entreprise est reconnue par les plus grandes marques." },
  { title: "Une intervention rapide", text: "Nous nous engageons à une intervention rapide et efficace, selon votre contrat." },
];

export type Range = {
  path: string;
  letter: string;
  title: string;
  image: PhotoId;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  products: { brand: string; model: string; text: string }[];
};

export const ranges: Range[] = [
  {
    path: PATHS.regulation,
    letter: "A",
    title: "Régulation et thermostat d'ambiance",
    image: "gammeRegulation",
    intro: "Optimiser le confort et bien gérer l'énergie : une régulation adaptée module la puissance de la chaudière selon la température réellement mesurée chez vous.",
    metaTitle: "Régulation et thermostat d'ambiance chaudière | Gaz Flash",
    metaDescription:
      "Régulation et thermostat d'ambiance pour chaudière gaz : Chaffoteaux Expert Control, Saunier Duval ExaControl, ELM Touch, Frisquet Visio, posés par Gaz Flash.",
    products: [
      { brand: "Chaffoteaux", model: "Expert Control", text: "La sonde d'ambiance module la puissance de la chaudière en fonction de la température ambiante mesurée, indépendamment de la température extérieure. En modulant la puissance, les variations de température sont minimisées, le niveau de confort augmente et la longévité de la chaudière est prolongée." },
      { brand: "Saunier Duval", model: "ExaControl", text: "Saunier Duval propose une gamme large de solutions de régulation et un ensemble complet d'accessoires de gestion du système de chauffage." },
      { brand: "ELM Leblanc", model: "ELM Touch", text: "Nouvelle régulation connectée : le confort se pilote désormais à distance. Régulation d'ambiance tactile et intuitive, raccordable à Internet, elm Touch permet de contrôler et de piloter à distance, depuis un smartphone ou une tablette, la température de son habitation, en temps réel. Compatible avec les chaudières e.l.m. leblanc équipées de l'Heatronic 3 ou 4, en neuf comme en rénovation." },
      { brand: "Frisquet", model: "Visio", text: "Un dispositif de régulation automatique de très haut niveau, fourni de série avec la chaudière, pour la gestion intégrale du confort, tant chauffage qu'eau chaude, qui permet des économies d'énergie." },
    ],
  },
  {
    path: PATHS.waterHeater,
    letter: "B",
    title: "Chauffe-eau gaz",
    image: "gammeChauffeEau",
    intro: "Chauffe-eau, chauffe-bains à gaz et accumulateurs d'eau chaude à gaz : de l'eau chaude à volonté, en sécurité.",
    metaTitle: "Chauffe-eau gaz : Ondéa et accumulateur Styx | Gaz Flash",
    metaDescription:
      "Chauffe-eau et chauffe-bains à gaz, accumulateurs d'eau chaude : ELM Leblanc Ondéa et accumulateur Styx TES, installés par Gaz Flash à Paris et petite couronne.",
    products: [
      { brand: "ELM Leblanc", model: "Ondéa", text: "Chauffe-eau et chauffe-bains à tirage naturel. Avec un choix de solutions sans équivalent sur le marché, la gamme Ondéa répond à tous les degrés d'exigence : eau chaude à gaz instantanée à volonté, niveau de sécurité optimal, utilisation simple et design élégant. Technologie Hydropower : avec la force de l'eau, la mini-turbine intégrée produit instantanément l'électricité nécessaire à l'allumage du brûleur." },
      { brand: "Styx", model: "TES, chauffe-eau gaz à accumulation", text: "TES s'installe en parallèle à un autre appareil de production d'eau chaude et/ou de chauffage pour satisfaire une plus grande demande d'eau chaude sanitaire. Simple et rationnel, l'accumulateur est facile à installer, simple d'utilisation, robuste et fiable. Doté d'un allumage électronique, le TES-E garantit une sécurité optimale ; l'absence de veilleuse réduit la consommation de gaz de 15 %." },
    ],
  },
  {
    path: PATHS.condensing,
    letter: "C",
    title: "Chaudière à condensation",
    image: "gammeCondensation",
    intro: "Parfaitement maîtrisée par Gaz Flash, la technologie de la condensation atteint des rendements énergétiques exceptionnels, quel que soit le type d'installation (cheminée ou ventouse).",
    metaTitle: "Chaudière à condensation gaz : modèles posés | Gaz Flash",
    metaDescription:
      "Chaudières gaz à condensation Frisquet, Chaffoteaux, Saunier Duval et ELM Leblanc : rendement élevé, pose et entretien par Gaz Flash à Paris et petite couronne.",
    products: [
      { brand: "Frisquet", model: "Hydroconfort Condensation Visio", text: "Cette chaudière bénéficie des équipements exclusifs Frisquet : corps de chauffe Optimal®, brûleur FlatFire® et régulation Éco Radio System Visio. La marche combinée de ces trois technologies lui garantit un rendement élevé et durable. La qualité de combustion du brûleur modulant FlatFire® permet d'atteindre le plus bas taux d'émissions de polluants (NOx)." },
      { brand: "Chaffoteaux", model: "Mira C Green", text: "En neuf ou en rénovation, la gamme de chaudières à condensation Mira C Green offre le meilleur de la technologie dans un encombrement minimal, grâce à sa largeur de 40 cm. Avec sa certification 3*** CE selon la norme EN 13203 pour le sanitaire et un rendement global jusqu'à 109 % en chauffage, elle fait rimer confort sanitaire et économies." },
      { brand: "Saunier Duval", model: "ThemaFast Condens 25 – 30 – 35 kW", text: "La référence du confort immédiat : une solution haute performance, de l'eau chaude disponible immédiatement et à volonté, fiabilité, facilité de pose et d'entretien." },
      { brand: "ELM Leblanc", model: "Mégalis Condensation", text: "Chaudières murales mixtes à micro-accumulation. Elles garantissent un grand confort avec des économies d'énergie à la clé. Leur corps de chauffe ultra performant récupère un maximum d'énergie pour atteindre un rendement exceptionnel et répond aux réglementations thermiques en vigueur." },
    ],
  },
  {
    path: PATHS.lowTemp,
    letter: "D",
    title: "Chaudière à basse température",
    image: "gammeBasse",
    intro: "Avec une chaudière gaz conventionnelle, la sensation de confort est optimale et les rendements élevés. Par rapport à une chaudière d'ancienne génération, la consommation est réduite.",
    metaTitle: "Chaudière gaz basse température : modèles posés | Gaz Flash",
    metaDescription:
      "Chaudières gaz basse température ELM Leblanc Acléis, Frisquet Hydromotrix, Chaffoteaux Mira C et Saunier Duval ThemaClassic, posées par Gaz Flash à Paris.",
    products: [
      { brand: "ELM Leblanc", model: "Acléis", text: "Idéale pour obtenir instantanément une eau à la température choisie et la maintenir stable au demi-degré près, Acléis s'appuie sur l'efficacité combinée d'un échangeur à plaques en inox et d'un système de régulation convivial. Conçue pour aller à l'essentiel, cette chaudière au design épuré offre une souplesse d'installation très avantageuse en rénovation." },
      { brand: "Frisquet", model: "Hydromotrix Évolution", text: "L'Hydromotrix Évolution bénéficie du dernier dispositif de régulation numérique, qui permet de réaliser ou de faire évoluer librement une installation de 1 à 3 circuits de chauffage. Une solution radio complète, une gestion simple du chauffage, qu'il s'agisse de radiateurs et/ou de plancher chauffant." },
      { brand: "Chaffoteaux", model: "Mira C", text: "En neuf ou en rénovation, la gamme de chaudières basse température Mira C allie performances et compacité. Avec une large gamme d'accessoires de régulation, vous pouvez personnaliser votre installation, pour un confort optimal et sur mesure." },
      { brand: "Saunier Duval", model: "ThemaClassic 25 kW", text: "Nouveau design Saunier Duval : la chaudière taille mannequin revisitée, avec un maximum de fonctionnalités et de confort. Ultra-compacte et légère, elle est idéale pour une installation dans des endroits exigus, même avec un cadre écarteur sur colonne montante." },
    ],
  },
];

export const brandLogos: { id: PhotoId; name: string }[] = [
  { id: "brandFrisquet", name: "Frisquet" },
  { id: "brandChaffoteaux", name: "Chaffoteaux" },
  { id: "brandSaunier", name: "Saunier Duval" },
  { id: "brandElm", name: "ELM Leblanc" },
  { id: "brandDeDietrich", name: "De Dietrich" },
];

/** Extraits d'avis Google (5 étoiles) : à valider avec le dirigeant avant mise en ligne. */
export const reviews = [
  { author: "Déborah Z.", when: "Il y a 8 mois", text: "Je suis très satisfaite de Gazflash qui entretient ma chaudière depuis 23 ans : travail très bien réalisé et grande gentillesse des techniciens." },
  { author: "Sandra M.", when: "Il y a 9 mois", text: "Ils prennent grand soin de notre chaudière vieillissante, avec une réactivité et un sens du service que nous ne rencontrons malheureusement plus souvent." },
  { author: "Emilie D.", when: "Il y a 8 mois", text: "Depuis des années, cette entreprise entretient ma chaudière. Travail parfait et gentillesse du technicien." },
];

export const faqs = {
  home: [
    {
      q: "Quelles zones Gaz Flash couvre-t-elle ?",
      a: "Gaz Flash intervient à Paris, ainsi qu'en Seine-Saint-Denis, dans les Hauts-de-Seine et dans le Val-de-Marne. Les tarifs d'entretien distinguent Paris 18e et les autres arrondissements ou communes de la petite couronne.",
    },
    {
      q: "Quel est le prix d'un entretien de chaudière à Paris ?",
      a: "Pour une chaudière, le forfait révision sans engagement est affiché à 130 € TTC à Paris 18e et 150 € TTC ailleurs à Paris et en petite couronne. Le contrat d'entretien annuel est à 150 € TTC (Paris 18e) ou 170 € TTC. Les tarifs complets sont publiés en ligne.",
    },
    {
      q: "Que comprend le contrat d'entretien annuel ?",
      a: "Le contrat comprend l'entretien annuel avec attestation, tous les dépannages (main-d'œuvre et déplacement, hors pièces) et une intervention prioritaire en cas de panne. Le ramonage du conduit gaz et le désembouage du réseau sont proposés en option.",
    },
    {
      q: "Le ramonage est-il obligatoire ?",
      a: "Oui. Le ramonage doit être réalisé au moins une fois par an, par un professionnel qualifié, qui remet un certificat de ramonage. Votre commune ou votre assureur peuvent exiger un second ramonage annuel.",
    },
    {
      q: "Les installations sont-elles garanties ?",
      a: "Les installations réalisées par Gaz Flash sont garanties 2 ans pour les pièces. L'entreprise installe notamment des chaudières à condensation et basse température, des chauffe-eau gaz et des régulations de plusieurs grandes marques.",
    },
    {
      q: "Quels sont les horaires d'ouverture ?",
      a: "Gaz Flash est joignable du lundi au vendredi, de 8 h à 12 h 30 et de 13 h 30 à 17 h. L'entreprise est fermée le samedi et le dimanche. Le standard est au 01 42 64 80 51.",
    },
  ],
  maintenance: [
    {
      q: "Quelle différence entre contrat d'entretien et forfait révision ?",
      a: "Le forfait révision est une visite annuelle sans engagement, avec attestation. Le contrat d'entretien annuel ajoute tous les dépannages (main-d'œuvre et déplacement, hors pièces) et une intervention prioritaire en cas de panne.",
    },
    {
      q: "Je n'ai pas de contrat : comment en souscrire un ?",
      a: "Contactez le service commercial au 01 42 64 80 51. Il vous proposera les meilleures conditions dans le cadre d'un contrat adapté à vos besoins. Les conditions générales d'abonnement sont consultables en ligne.",
    },
    {
      q: "Le ramonage est-il compris dans l'entretien ?",
      a: "Le ramonage du conduit gaz est une option possible au contrat. Il est réalisé uniquement en même temps que l'entretien de la chaudière, pour 50 € TTC, et il est obligatoire une fois par an pour les chaudières à tirage naturel.",
    },
  ],
  repair: [
    {
      q: "Quels appareils dépannez-vous ?",
      a: "Gaz Flash dépanne et remet en route le chauffage à gaz, le chauffe-eau à gaz, le radiateur à gaz et le ballon électrique, avec du personnel qualifié et formé par les constructeurs.",
    },
    {
      q: "Recevrai-je un devis avant l'intervention ?",
      a: "Gaz Flash s'engage à fournir un devis détaillé, des tarifs prédéfinis et des explications claires sur l'origine de la panne, ainsi qu'à respecter les délais d'intervention convenus.",
    },
  ],
  install: [
    {
      q: "Comment choisir ma chaudière ?",
      a: "Gaz Flash réalise d'abord un diagnostic, puis vous conseille la solution la plus adaptée dans l'ensemble de sa gamme, économe en énergie et compatible avec votre budget : condensation, basse température, chauffe-eau ou régulation.",
    },
    {
      q: "Que couvre la garantie des installations ?",
      a: "Les installations de Gaz Flash sont garanties 2 ans pour les pièces. Les conditions précises figurent dans votre devis.",
    },
  ],
  sweep: [
    {
      q: "À quelle fréquence faut-il ramoner ?",
      a: "Au moins une fois par an. Votre commune ou votre assureur peuvent exiger un second ramonage annuel. Seul un ramonage effectué par un professionnel qualifié est considéré comme valable.",
    },
    {
      q: "Que se passe-t-il en cas de sinistre sans ramonage valable ?",
      a: "Votre compagnie d'assurance est en droit de refuser toute indemnisation, et votre responsabilité peut être engagée en cas de dommages causés à un tiers. La remise d'un certificat de ramonage est obligatoire.",
    },
  ],
  prices: [
    {
      q: "Les tarifs sont-ils toutes taxes comprises ?",
      a: "Oui, tous les tarifs de cette page sont indiqués TTC. Ils distinguent Paris 18e des autres arrondissements et de la banlieue de la petite couronne.",
    },
    {
      q: "Les pièces sont-elles incluses dans le contrat ?",
      a: "Non. Le contrat d'entretien annuel inclut tous les dépannages en main-d'œuvre et déplacement, hors pièces.",
    },
  ],
} as const;

export type FaqKey = keyof typeof faqs;

export const requestTypes = [
  { value: "depannage", label: "Un dépannage" },
  { value: "entretien", label: "Entretien ou contrat d'entretien" },
  { value: "installation", label: "Une installation (devis)" },
  { value: "ramonage", label: "Un ramonage" },
  { value: "autre", label: "Autre demande" },
];
