import type { PhotoId } from "./photos";
import pages from "./pages.json";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://gazflash.fr").replace(/\/$/, "");
export const INDEXABLE = process.env.NEXT_PUBLIC_INDEXABLE === "true";
export const LAST_UPDATED = "2026-10-24";
export const FOUNDED = 1965;

export const business = {
  name: "Gaz Flash",
  legalName: "GAZFLASH SAS",
  phoneDisplay: "01 42 64 80 51",
  phoneTel: "+33142648051",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact.gazflash75@gmail.com",
  address: { street: "7 rue Sainte-Isaure", postalCode: "75018", city: "Paris" },
  geo: { lat: 48.8933121, lng: 2.3438404 },
  mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJ65407l5u5kcRjDpk3z9doMM",
  logoUrl: "https://gazflash.fr/wp-content/uploads/2016/04/logo-gazflash-web1-300x95.png",
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
    siren: "652 035 247",
    naf: "4322A",
    vat: "FR 67 652 035 247",
    opqcb: "OPQCB n° 5511***",
    director: "Franck Robillard",
    dpo: "M. Didier Tieufri",
  },
};

/** Fiche Google Maps de Gaz Flash, relevée le 22 octobre 2026 (feature_id 0x47e66e5eee349eeb:0xc3a05d3fdf643a8c). */
export const google = {
  rating: 3.7,
  count: 63,
  ratingLabel: "3,7",
  category: "Chauffagiste",
  placeId: "ChIJ65407l5u5kcRjDpk3z9doMM",
  observed: "22 octobre 2026",
  url: business.mapsUrl,
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
  paris18: "/chauffagiste-paris-18/",
  repairGuide: "/depannage-chaudiere-paris/",
  maintenanceGuide: "/entretien-chaudiere-paris/",
  zones: "/zones-intervention/",
  brands: "/marques/",
  faq: "/questions-frequentes/",
} as const;

export type PagePath = (typeof PATHS)[keyof typeof PATHS];

type PageMeta = { name: string; title: string; description: string; h1: string; brief: string };
const registry = pages as Record<string, PageMeta>;
export const pageInfo = (path: PagePath): PageMeta => {
  const info = registry[path];
  if (!info) throw new Error(`Page inconnue : ${path}`);
  return info;
};

export const crumbsFor = (...trail: PagePath[]) => [{ name: "Accueil", path: PATHS.home as string }, ...trail.map((p) => ({ name: pageInfo(p).name, path: p as string }))];

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
  { label: "Paris 18e", href: PATHS.paris18 },
  { label: "L'entreprise", href: PATHS.company },
  { label: "Contact", href: PATHS.contact },
];

export type Service = {
  key: "maintenance" | "repair" | "install" | "sweep";
  path: PagePath;
  title: string;
  short: string;
  image: PhotoId;
  line: string;
};

export const services: Record<Service["key"], Service> = {
  maintenance: {
    key: "maintenance",
    path: PATHS.maintenance,
    title: "Entretien",
    line: "La visite annuelle de votre chaudière",
    short: "Gaz Flash intervient pour l'entretien de votre chaudière sur Paris, mais aussi en Seine-Saint-Denis, dans les Hauts-de-Seine et le Val-de-Marne. Contrat annuel ou forfait révision sans engagement.",
    image: "entretien",
  },
  repair: {
    key: "repair",
    path: PATHS.repair,
    title: "Dépannage",
    line: "Quand le chauffage ou l'eau chaude lâche",
    short: "Une intervention rapide, effectuée par des techniciens spécialisés et formés par les constructeurs, avec un devis détaillé et des explications claires.",
    image: "depannage",
  },
  install: {
    key: "install",
    path: PATHS.install,
    title: "Installation",
    line: "Chaudière, chauffe-eau, régulation, radiateurs",
    short: "Un diagnostic, des conseils, puis la pose : la solution la plus adaptée à votre logement et à votre budget, économe en énergie.",
    image: "installation",
  },
  sweep: {
    key: "sweep",
    path: PATHS.sweep,
    title: "Ramonage",
    line: "Le conduit de fumée, une fois par an au moins",
    short: "Une obligation légale et avant tout une question de sécurité : le ramonage protège votre famille, vos biens et améliore le fonctionnement de vos équipements.",
    image: "ramonage",
  },
};

/** Tarifs repris tels que publiés sur gazflash.fr (TTC), page « Nos tarifs ». */
export const priceGroups = [
  { title: "Chaudières", contract: { paris18: "150 €", other: "170 €" }, review: { paris18: "130 €", other: "150 €" } },
  { title: "Chaudières à condensation", contract: { paris18: "170 €", other: "180 €" }, review: { paris18: "150 €", other: "160 €" } },
  { title: "Radiateur, chauffe-bain, Styx…", contract: { paris18: "130 €", other: "140 €" }, review: { paris18: "120 €", other: "130 €" } },
];

export const sweepPrice = "50 €";

/** Les six engagements publiés sur l'ancien site (texte d'origine). */
export const reasons = [
  { title: "Une prestation de qualité", text: "Dans le cadre de nos contrats de maintenance, nous nous engageons à offrir une prestation de qualité." },
  { title: "Professionnel du Gaz et RGE", text: "Nous sommes certifiés Professionnel du Gaz et Qualibat RGE." },
  { title: "Des conseils adaptés", text: "Notre équipe de professionnels vous conseille et vous propose une solution adaptée à votre besoin." },
  { title: "Des installations garanties", text: "Nos installations sont garanties 2 ans pour les pièces." },
  { title: "Plus de 50 ans dans le chauffage", text: "Spécialisée dans le chauffage depuis plus de 50 ans, notre entreprise est reconnue par les plus grandes marques." },
  { title: "Une intervention rapide", text: "Nous nous engageons à une intervention rapide et efficace, selon votre contrat." },
];

export type Range = {
  path: PagePath;
  letter: string;
  title: string;
  image: PhotoId;
  intro: string;
  products: { brand: string; model: string; text: string }[];
  chooseTitle: string;
  choose: { q: string; a: string }[];
  faq: FaqKey;
  priceNote?: string;
};

export const ranges: Range[] = [
  {
    path: PATHS.regulation,
    letter: "A",
    title: "Régulation et thermostat d'ambiance",
    image: "gammeRegulation",
    intro: "Optimiser le confort et bien gérer l'énergie : une régulation adaptée module la puissance de la chaudière selon la température réellement mesurée chez vous.",
    products: [
      { brand: "Chaffoteaux", model: "Expert Control", text: "La sonde d'ambiance module la puissance de la chaudière en fonction de la température ambiante mesurée, indépendamment de la température extérieure. En modulant la puissance, les variations de température sont minimisées, le niveau de confort augmente et la longévité de la chaudière est prolongée." },
      { brand: "Saunier Duval", model: "ExaControl", text: "Saunier Duval propose une gamme large de solutions de régulation et un ensemble complet d'accessoires de gestion du système de chauffage." },
      { brand: "ELM Leblanc", model: "ELM Touch", text: "Nouvelle régulation connectée : le confort se pilote désormais à distance. Régulation d'ambiance tactile et intuitive, raccordable à Internet, elm Touch permet de contrôler et de piloter à distance, depuis un smartphone ou une tablette, la température de son habitation, en temps réel. Compatible avec les chaudières e.l.m. leblanc équipées de l'Heatronic 3 ou 4, en neuf comme en rénovation." },
      { brand: "Frisquet", model: "Visio", text: "Un dispositif de régulation automatique de très haut niveau, fourni de série avec la chaudière, pour la gestion intégrale du confort, tant chauffage qu'eau chaude, qui permet des économies d'énergie." },
    ],
    chooseTitle: "Comment choisir sa régulation",
    choose: [
      { q: "Commencez par la chaudière", a: "Chaque constructeur propose ses propres thermostats, conçus pour dialoguer avec ses chaudières. Marque, modèle et année de la chaudière décident donc de ce qui est compatible : l'elm Touch, par exemple, s'adresse aux chaudières e.l.m. leblanc équipées de l'Heatronic 3 ou 4." },
      { q: "Sonde d'ambiance ou sonde extérieure", a: "La sonde d'ambiance mesure la température de la pièce où elle est posée ; la sonde extérieure anticipe selon le temps dehors. Une régulation qui s'appuie sur la température ambiante, comme l'Expert Control, ajuste la puissance à ce que vous ressentez réellement." },
      { q: "Programmation et pilotage à distance", a: "Un thermostat programmable adapte la température à vos horaires. Une régulation connectée, comme l'elm Touch, se pilote depuis un smartphone ou une tablette. Choisissez ce que vous utiliserez vraiment au quotidien." },
      { q: "Neuf ou rénovation", a: "Une régulation se pose en neuf comme en rénovation, sur une chaudière récente ou lors d'un remplacement. Le plus simple est d'en parler lors du diagnostic, avant de choisir la chaudière." },
    ],
    faq: "regulation",
  },
  {
    path: PATHS.waterHeater,
    letter: "B",
    title: "Chauffe-eau gaz",
    image: "gammeChauffeEau",
    intro: "Chauffe-eau, chauffe-bains à gaz et accumulateurs d'eau chaude à gaz : de l'eau chaude à volonté, en sécurité.",
    products: [
      { brand: "ELM Leblanc", model: "Ondéa", text: "Chauffe-eau et chauffe-bains à tirage naturel. Avec un choix de solutions sans équivalent sur le marché, la gamme Ondéa répond à tous les degrés d'exigence : eau chaude à gaz instantanée à volonté, niveau de sécurité optimal, utilisation simple et design élégant. Technologie Hydropower : avec la force de l'eau, la mini-turbine intégrée produit instantanément l'électricité nécessaire à l'allumage du brûleur." },
      { brand: "Styx", model: "TES, chauffe-eau gaz à accumulation", text: "TES s'installe en parallèle à un autre appareil de production d'eau chaude et/ou de chauffage pour satisfaire une plus grande demande d'eau chaude sanitaire. Simple et rationnel, l'accumulateur est facile à installer, simple d'utilisation, robuste et fiable. Doté d'un allumage électronique, le TES-E garantit une sécurité optimale ; l'absence de veilleuse réduit la consommation de gaz de 15 %." },
    ],
    chooseTitle: "Comment choisir son chauffe-eau gaz",
    choose: [
      { q: "Instantané ou à accumulation", a: "Un chauffe-bain chauffe l'eau au moment où vous ouvrez le robinet : pas de réserve, de l'eau chaude tant que vous tirez. Un accumulateur garde une réserve chaude, utile quand plusieurs points d'eau servent en même temps. Les deux existent chez Gaz Flash." },
      { q: "Vos usages en pratique", a: "Comptez les robinets, la douche, la baignoire et les moments où ils servent ensemble. Un accumulateur Styx TES peut se poser en parallèle d'un autre appareil pour répondre à une plus grande demande d'eau chaude sanitaire." },
      { q: "L'évacuation des fumées", a: "Un appareil à tirage naturel, comme les Ondéa cités ici, évacue ses fumées par un conduit. L'état du conduit et la ventilation du local comptent autant que l'appareil : ils se vérifient sur place, pas depuis un catalogue." },
      { q: "La sécurité avant tout", a: "Un chauffe-eau gaz demande une arrivée d'air suffisante, un conduit sain et un entretien régulier pour limiter les risques liés au monoxyde de carbone. Un détecteur de monoxyde de carbone est un complément utile." },
    ],
    faq: "waterHeater",
  },
  {
    path: PATHS.condensing,
    letter: "C",
    title: "Chaudière à condensation",
    image: "gammeCondensation",
    intro: "Parfaitement maîtrisée par Gaz Flash, la technologie de la condensation atteint des rendements énergétiques exceptionnels, quel que soit le type d'installation (cheminée ou ventouse).",
    products: [
      { brand: "Frisquet", model: "Hydroconfort Condensation Visio", text: "Cette chaudière bénéficie des équipements exclusifs Frisquet : corps de chauffe Optimal®, brûleur FlatFire® et régulation Éco Radio System Visio. La marche combinée de ces trois technologies lui garantit un rendement élevé et durable. La qualité de combustion du brûleur modulant FlatFire® permet d'atteindre le plus bas taux d'émissions de polluants (NOx)." },
      { brand: "Chaffoteaux", model: "Mira C Green", text: "En neuf ou en rénovation, la gamme de chaudières à condensation Mira C Green offre le meilleur de la technologie dans un encombrement minimal, grâce à sa largeur de 40 cm. Avec sa certification 3*** CE selon la norme EN 13203 pour le sanitaire et un rendement global jusqu'à 109 % en chauffage, elle fait rimer confort sanitaire et économies." },
      { brand: "Saunier Duval", model: "ThemaFast Condens 25 – 30 – 35 kW", text: "La référence du confort immédiat : une solution haute performance, de l'eau chaude disponible immédiatement et à volonté, fiabilité, facilité de pose et d'entretien." },
      { brand: "ELM Leblanc", model: "Mégalis Condensation", text: "Chaudières murales mixtes à micro-accumulation. Elles garantissent un grand confort avec des économies d'énergie à la clé. Leur corps de chauffe ultra performant récupère un maximum d'énergie pour atteindre un rendement exceptionnel et répond aux réglementations thermiques en vigueur." },
    ],
    chooseTitle: "Comment choisir une chaudière à condensation",
    choose: [
      { q: "Comprendre le principe", a: "Les fumées d'une chaudière contiennent de la vapeur d'eau, donc de la chaleur. Une chaudière à condensation la récupère au lieu de l'envoyer dans le conduit, d'où un rendement plus élevé. Elle ne condense bien que si l'eau qui revient des radiateurs est assez froide, de l'ordre de 55 °C ou moins." },
      { q: "Vérifier l'évacuation", a: "La condensation produit de l'eau acide, les condensats, qui doivent être évacués vers les eaux usées. Les fumées sortent à basse température : le conduit doit y être adapté. Cheminée ou ventouse, les deux se pratiquent, mais l'existant se contrôle sur place." },
      { q: "Mixte ou chauffage seul", a: "Une chaudière mixte produit aussi l'eau chaude sanitaire, ce qui évite un second appareil. Dans un petit logement parisien, la largeur compte : la Mira C Green ne mesure que 40 cm. Le diagnostic dit ce qui rentre dans votre espace." },
      { q: "Regarder la régulation", a: "Une bonne régulation fait la différence : elle maintient l'eau de retour assez basse pour condenser. Frisquet fournit la sienne avec la chaudière ; chez les autres marques, la régulation se choisit avec l'appareil." },
    ],
    faq: "condensing",
  },
  {
    path: PATHS.lowTemp,
    letter: "D",
    title: "Chaudière à basse température",
    image: "gammeBasse",
    intro: "Avec une chaudière gaz conventionnelle, la sensation de confort est optimale et les rendements élevés. Par rapport à une chaudière d'ancienne génération, la consommation est réduite.",
    products: [
      { brand: "ELM Leblanc", model: "Acléis", text: "Idéale pour obtenir instantanément une eau à la température choisie et la maintenir stable au demi-degré près, Acléis s'appuie sur l'efficacité combinée d'un échangeur à plaques en inox et d'un système de régulation convivial. Conçue pour aller à l'essentiel, cette chaudière au design épuré offre une souplesse d'installation très avantageuse en rénovation." },
      { brand: "Frisquet", model: "Hydromotrix Évolution", text: "L'Hydromotrix Évolution bénéficie du dernier dispositif de régulation numérique, qui permet de réaliser ou de faire évoluer librement une installation de 1 à 3 circuits de chauffage. Une solution radio complète, une gestion simple du chauffage, qu'il s'agisse de radiateurs et/ou de plancher chauffant." },
      { brand: "Chaffoteaux", model: "Mira C", text: "En neuf ou en rénovation, la gamme de chaudières basse température Mira C allie performances et compacité. Avec une large gamme d'accessoires de régulation, vous pouvez personnaliser votre installation, pour un confort optimal et sur mesure." },
      { brand: "Saunier Duval", model: "ThemaClassic 25 kW", text: "Nouveau design Saunier Duval : la chaudière taille mannequin revisitée, avec un maximum de fonctionnalités et de confort. Ultra-compacte et légère, elle est idéale pour une installation dans des endroits exigus, même avec un cadre écarteur sur colonne montante." },
    ],
    chooseTitle: "Comment choisir une chaudière basse température",
    choose: [
      { q: "Ce que « basse température » veut dire", a: "La chaudière adapte la température de l'eau de chauffage à la demande, sans chercher à récupérer la chaleur des fumées comme le fait la condensation. Face à un appareil d'ancienne génération, la consommation baisse." },
      { q: "Quand elle a du sens", a: "Quand le logement ou le conduit existant se prêtent mal à la condensation, ou en rénovation d'un appareil de même type. Des modèles compacts, comme le ThemaClassic, se glissent dans des endroits exigus, y compris avec un cadre écarteur sur colonne montante." },
      { q: "Comparer avec la condensation", a: "La condensation vise un rendement plus élevé mais demande une évacuation des condensats et un conduit adapté. La basse température est plus simple à poser dans l'ancien. Le diagnostic permet de comparer les deux pour votre logement, chiffres à l'appui." },
      { q: "Penser aux circuits de chauffage", a: "Radiateurs, plancher chauffant, un ou plusieurs circuits : l'Hydromotrix Évolution gère de 1 à 3 circuits. Précisez votre installation dès le premier appel pour orienter le conseil." },
    ],
    faq: "lowTemp",
  },
];

export const brands: { id: PhotoId | null; name: string; href: string | null; items: { label: string; path: PagePath }[]; note?: string }[] = [
  {
    id: "brandFrisquet",
    name: "Frisquet",
    href: "http://www.frisquet.fr/",
    items: [
      { label: "Hydroconfort Condensation Visio", path: PATHS.condensing },
      { label: "Hydromotrix Évolution", path: PATHS.lowTemp },
      { label: "Régulation Visio", path: PATHS.regulation },
    ],
  },
  {
    id: "brandChaffoteaux",
    name: "Chaffoteaux",
    href: "http://www.chaffoteaux.fr/",
    items: [
      { label: "Mira C Green", path: PATHS.condensing },
      { label: "Mira C", path: PATHS.lowTemp },
      { label: "Régulation Expert Control", path: PATHS.regulation },
    ],
  },
  {
    id: "brandSaunier",
    name: "Saunier Duval",
    href: "http://www.saunierduval.fr/particulier/",
    items: [
      { label: "ThemaFast Condens 25 – 30 – 35 kW", path: PATHS.condensing },
      { label: "ThemaClassic 25 kW", path: PATHS.lowTemp },
      { label: "Régulation ExaControl", path: PATHS.regulation },
    ],
  },
  {
    id: "brandElm",
    name: "ELM Leblanc",
    href: "http://www.elmleblanc.fr/",
    items: [
      { label: "Mégalis Condensation", path: PATHS.condensing },
      { label: "Acléis", path: PATHS.lowTemp },
      { label: "Chauffe-eau et chauffe-bains Ondéa", path: PATHS.waterHeater },
      { label: "Régulation elm Touch", path: PATHS.regulation },
    ],
  },
  {
    id: "brandDeDietrich",
    name: "De Dietrich",
    href: "http://www.dedietrich-thermique.fr/",
    items: [],
    note: "Le logo De Dietrich figure parmi les marques reconnues citées par Gaz Flash. Aucun modèle précis n'est cité sur le site : demandez au standard ce que l'entreprise pose et entretient dans cette marque.",
  },
  {
    id: null,
    name: "Styx",
    href: null,
    items: [
      { label: "Accumulateur gaz TES", path: PATHS.waterHeater },
      { label: "Tarif d'entretien « Radiateur, chauffe-bain, Styx… »", path: PATHS.prices },
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

/** Extraits d'avis Google (5 étoiles), copiés de la fiche : accord des clients à obtenir avant mise en ligne. */
export const reviews = [
  { author: "Déborah Z.", when: "il y a 8 mois", text: "Je suis très satisfaite de Gazflash qui entretient ma chaudière depuis 23 ans : travail très bien réalisé et grande gentillesse des techniciens." },
  { author: "Sandra M.", when: "il y a 9 mois", text: "Ils prennent grand soin de notre chaudière vieillissante, avec une réactivité et un sens du service que nous ne rencontrons malheureusement plus souvent." },
  { author: "Emilie D.", when: "il y a 8 mois", text: "Depuis des années, cette entreprise entretient ma chaudière. Travail parfait et gentillesse du technicien." },
];

type Qa = { q: string; a: string };

export const faqs = {
  home: [
    {
      q: "Quelles zones Gaz Flash couvre-t-elle ?",
      a: "Gaz Flash intervient à Paris, ainsi qu'en Seine-Saint-Denis, dans les Hauts-de-Seine et dans le Val-de-Marne. Les tarifs d'entretien distinguent Paris 18e, où se trouve l'entreprise, et les autres arrondissements ou communes de la petite couronne.",
    },
    {
      q: "Quel est le prix d'un entretien de chaudière à Paris ?",
      a: "Pour une chaudière, le forfait révision sans engagement est affiché à 130 € TTC à Paris 18e et 150 € TTC ailleurs à Paris et en petite couronne. Le contrat d'entretien annuel est à 150 € TTC (Paris 18e) ou 170 € TTC. Tous les tarifs sont publiés en ligne.",
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
  company: [
    {
      q: "Depuis quand Gaz Flash existe-t-elle ?",
      a: "Gaz Flash indique assurer la maintenance d'appareils de chauffage depuis 1965. La société, GAZFLASH SAS, est immatriculée au RCS de Paris sous le numéro 65 B 3524 et son siège est au 7 rue Sainte-Isaure, 75018 Paris.",
    },
    {
      q: "Quelles certifications Gaz Flash annonce-t-elle ?",
      a: "Gaz Flash se déclare certifiée Professionnel du Gaz et Qualibat RGE, et affiche les logos correspondants. Elle précise aussi être reconnue par les plus grandes marques de chauffage. Les mentions légales rappellent un numéro OPQCB.",
    },
    {
      q: "Avec quelles marques Gaz Flash travaille-t-elle ?",
      a: "Les logos de Frisquet, Chaffoteaux, Saunier Duval, ELM Leblanc et De Dietrich figurent sur le site de l'entreprise, qui pose aussi des accumulateurs Styx. La page Marques détaille les modèles cités pour chacune.",
    },
    {
      q: "Quelle est la forme juridique de Gaz Flash ?",
      a: "Gaz Flash est exploitée par GAZFLASH SAS, société par actions simplifiée au capital de 30 600 €, SIRET 652 035 247 00012, code NAF 4322A. Toutes les informations d'immatriculation figurent dans les mentions légales.",
    },
  ],
  services: [
    {
      q: "Quel service choisir en premier ?",
      a: "Si l'appareil est en panne, le dépannage. Si tout fonctionne, l'entretien annuel, qui évite la plupart des pannes. Pour remplacer une vieille chaudière, un diagnostic puis l'installation. Le ramonage se fait en même temps que l'entretien.",
    },
    {
      q: "Les services sont-ils proposés partout en petite couronne ?",
      a: "Oui, Gaz Flash annonce intervenir à Paris, en Seine-Saint-Denis, dans les Hauts-de-Seine et le Val-de-Marne. Pour vérifier une adresse précise, appelez le standard au 01 42 64 80 51 du lundi au vendredi.",
    },
    {
      q: "Les tarifs sont-ils publiés ?",
      a: "Les tarifs d'entretien et de ramonage sont publiés en TTC sur la page Nos tarifs. Pour un dépannage ou une installation, le prix dépend de l'appareil : Gaz Flash remet un devis détaillé.",
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
    {
      q: "Que contient la visite d'entretien ?",
      a: "Le contrat prévoit l'entretien de l'appareil à gaz et un nettoyage pour prévenir les risques liés au monoxyde de carbone. Le détail des contrôles dépend de la marque et du modèle. Une attestation d'entretien est remise à l'issue de la visite.",
    },
    {
      q: "Une chaudière à condensation coûte-t-elle plus cher à entretenir ?",
      a: "Les tarifs publiés sont un peu plus élevés : 170 € TTC en contrat annuel et 150 € TTC en forfait révision à Paris 18e, contre 180 € et 160 € TTC ailleurs à Paris et en petite couronne.",
    },
  ],
  repair: [
    {
      q: "Quels appareils dépannez-vous ?",
      a: "Gaz Flash dépanne et remet en route le chauffage à gaz, le chauffe-eau à gaz, le radiateur à gaz et le ballon électrique, avec du personnel qualifié et formé par les constructeurs.",
    },
    {
      q: "Recevrai-je un devis avant l'intervention ?",
      a: "Oui. Gaz Flash s'engage à fournir un devis détaillé, des tarifs prédéfinis et des explications claires sur l'origine de la panne, ainsi qu'à respecter les délais d'intervention convenus avec vous au téléphone.",
    },
    {
      q: "Le dépannage est-il compris dans le contrat d'entretien ?",
      a: "Oui. Le contrat annuel inclut tous les dépannages en main-d'œuvre et déplacement, hors pièces, avec une intervention prioritaire en cas de panne. Sans contrat, l'intervention fait l'objet d'un devis détaillé.",
    },
    {
      q: "Y a-t-il une permanence le week-end ?",
      a: "Le standard est fermé le samedi et le dimanche. Gaz Flash annonce une permanence téléphonique parmi ses engagements de dépannage ; ses modalités se précisent auprès du standard ou de votre contrat.",
    },
  ],
  install: [
    {
      q: "Comment choisir ma chaudière ?",
      a: "Gaz Flash réalise d'abord un diagnostic, puis vous conseille la solution la plus adaptée dans l'ensemble de sa gamme, économe en énergie et compatible avec votre budget : condensation, basse température, chauffe-eau ou régulation.",
    },
    {
      q: "Que couvre la garantie des installations ?",
      a: "Les installations de Gaz Flash sont garanties 2 ans pour les pièces, d'après les engagements publiés par l'entreprise. Les conditions précises (ce qui est couvert, point de départ de la garantie) figurent dans votre devis, que vous avez intérêt à conserver avec la facture.",
    },
    {
      q: "Que veut dire « clé en main » ?",
      a: "Gaz Flash réalise le diagnostic, le conseil et l'installation de chaudières, chauffe-eau, régulations et radiateurs : vous n'avez plus qu'à en profiter. Ce que le devis inclut exactement (dépose de l'ancien appareil, mise en service) y est précisé.",
    },
    {
      q: "Quelles marques Gaz Flash installe-t-elle ?",
      a: "Les modèles cités sur le site sont de marques Frisquet, Chaffoteaux, Saunier Duval et ELM Leblanc, plus l'accumulateur Styx TES. Les pages de gamme détaillent les modèles, et la page Marques les rassemble.",
    },
  ],
  sweep: [
    {
      q: "À quelle fréquence faut-il ramoner ?",
      a: "Au moins une fois par an. Votre commune ou votre assureur peuvent exiger un second ramonage annuel. Seul un ramonage effectué par un professionnel qualifié est considéré comme valable, avec remise d'un certificat.",
    },
    {
      q: "Que se passe-t-il en cas de sinistre sans ramonage valable ?",
      a: "Votre compagnie d'assurance est en droit de refuser toute indemnisation, et votre responsabilité peut être engagée en cas de dommages causés à un tiers. La remise d'un certificat de ramonage est obligatoire.",
    },
    {
      q: "Combien coûte le ramonage chez Gaz Flash ?",
      a: "50 € TTC pour le ramonage du conduit de fumée gaz. Il est réalisé uniquement en même temps que l'entretien de la chaudière, et obligatoire chaque année pour les chaudières à tirage naturel.",
    },
  ],
  prices: [
    {
      q: "Les tarifs sont-ils toutes taxes comprises ?",
      a: "Oui, tous les tarifs de cette page sont indiqués toutes taxes comprises (TTC). Ils distinguent Paris 18e, où se trouve l'entreprise, des autres arrondissements de Paris et des communes de la petite couronne.",
    },
    {
      q: "Les pièces sont-elles incluses dans le contrat ?",
      a: "Non. Le contrat d'entretien annuel inclut tous les dépannages en main-d'œuvre et en déplacement, mais pas les pièces. Les pièces nécessaires à une réparation sont donc chiffrées à part, dans le devis détaillé remis avant l'intervention.",
    },
    {
      q: "Quel tarif pour un chauffe-bain ou un accumulateur Styx ?",
      a: "Dans la catégorie « Radiateur, chauffe-bain, Styx… » : contrat annuel à 130 € TTC à Paris 18e et 140 € TTC ailleurs, forfait révision à 120 € TTC et 130 € TTC.",
    },
    {
      q: "Les prix d'un dépannage ou d'une installation sont-ils affichés ?",
      a: "Non, ils dépendent de l'appareil, de la panne et des pièces à remplacer. Gaz Flash remet un devis détaillé, avec des tarifs prédéfinis et des explications claires, avant d'intervenir. Pour un chiffrage, appelez le standard au 01 42 64 80 51.",
    },
  ],
  installs: [
    {
      q: "Quelle gamme pour remplacer une vieille chaudière ?",
      a: "Selon le logement, une chaudière à condensation (rendement élevé) ou une chaudière basse température (pose simple en rénovation). Gaz Flash réalise d'abord un diagnostic, puis vous conseille dans sa gamme, avant de chiffrer.",
    },
    {
      q: "Peut-on ajouter une régulation à une chaudière existante ?",
      a: "Souvent, si le thermostat est compatible avec la chaudière : chaque constructeur propose ses régulations. Donnez la marque et le modèle de l'appareil au standard pour savoir ce qui est possible.",
    },
    {
      q: "Les descriptifs des modèles viennent d'où ?",
      a: "Ils reprennent la documentation des constructeurs, telle que citée par Gaz Flash sur son site. Ce ne sont pas des promesses de résultat : l'entreprise vous conseille le modèle adapté après un diagnostic de votre logement.",
    },
  ],
  regulation: [
    {
      q: "Quelle régulation est compatible avec ma chaudière ?",
      a: "Celle du constructeur de votre chaudière, en général. L'elm Touch, par exemple, est compatible avec les chaudières e.l.m. leblanc équipées de l'Heatronic 3 ou 4. Donnez marque et modèle au standard pour une réponse précise.",
    },
    {
      q: "Peut-on piloter son chauffage à distance ?",
      a: "Oui, avec une régulation connectée comme l'elm Touch : raccordée à Internet, elle permet de contrôler et de piloter la température du logement en temps réel, depuis un smartphone ou une tablette, même quand vous n'êtes pas chez vous.",
    },
    {
      q: "Faut-il changer de chaudière pour poser une régulation ?",
      a: "Pas forcément : cela dépend de l'âge et du modèle de la chaudière, car chaque constructeur propose ses propres régulations. Gaz Flash vérifie la compatibilité pendant le diagnostic avant de vous conseiller et de chiffrer.",
    },
  ],
  waterHeater: [
    {
      q: "Chauffe-bain ou accumulateur : lequel choisir ?",
      a: "Le chauffe-bain chauffe l'eau au fil de l'eau, sans réserve. L'accumulateur, comme le Styx TES, garde de l'eau chaude en réserve et s'installe en parallèle d'un autre appareil pour une plus grande demande. Le choix dépend de vos usages.",
    },
    {
      q: "Que signifie la technologie Hydropower ?",
      a: "Sur les chauffe-eau et chauffe-bains ELM Leblanc Ondéa, une mini-turbine intégrée produit, avec la force de l'eau, l'électricité nécessaire à l'allumage du brûleur dès que l'eau circule dans l'appareil, selon la documentation du constructeur.",
    },
    {
      q: "Un chauffe-eau gaz est-il sûr ?",
      a: "Posé et entretenu dans les règles, oui. Il faut un air suffisant dans la pièce, un conduit en bon état et une vérification régulière, car la combustion peut produire du monoxyde de carbone. Un détecteur est un complément utile.",
    },
    {
      q: "Combien coûte l'entretien d'un chauffe-bain ?",
      a: "Dans la catégorie « Radiateur, chauffe-bain, Styx… » : forfait révision à 120 € TTC à Paris 18e et 130 € TTC ailleurs, contrat annuel à 130 € TTC et 140 € TTC.",
    },
  ],
  condensing: [
    {
      q: "Qu'est-ce qu'une chaudière à condensation ?",
      a: "Une chaudière qui récupère la chaleur de la vapeur d'eau contenue dans ses fumées, au lieu de la rejeter. Elle atteint ainsi un rendement plus élevé qu'une chaudière classique, avec moins de gaz brûlé pour une même chaleur.",
    },
    {
      q: "Faut-il un conduit spécial pour une condensation ?",
      a: "Les fumées sortent plus froides et produisent des condensats : le conduit doit y être adapté et un raccord d'évacuation doit exister. Gaz Flash pose des chaudières à condensation avec cheminée ou ventouse, après vérification sur place.",
    },
    {
      q: "Fonctionne-t-elle avec mes radiateurs actuels ?",
      a: "Oui, une chaudière à condensation se raccorde à des radiateurs. Son rendement est meilleur quand l'eau qui revient est basse, vers 55 °C ou moins. Le diagnostic examine l'installation avant de promettre un résultat.",
    },
    {
      q: "Combien coûte son entretien ?",
      a: "Tarifs publiés pour une chaudière à condensation : contrat annuel à 170 € TTC à Paris 18e et 180 € TTC ailleurs, forfait révision à 150 € TTC et 160 € TTC.",
    },
  ],
  lowTemp: [
    {
      q: "Basse température ou condensation : quelle différence ?",
      a: "La basse température adapte la température de l'eau à la demande mais ne récupère pas la chaleur des fumées. La condensation le fait et vise un meilleur rendement, avec un conduit et une évacuation des condensats adaptés.",
    },
    {
      q: "Une chaudière basse température consomme-t-elle moins qu'une ancienne ?",
      a: "Oui. Par rapport à une chaudière d'ancienne génération, la consommation est réduite, tout en gardant une sensation de confort optimale et des rendements élevés, d'après la présentation de Gaz Flash.",
    },
    {
      q: "Peut-on la poser dans un endroit exigu ?",
      a: "Certains modèles sont pensés pour cela : la Saunier Duval ThemaClassic 25 kW est ultra-compacte et légère, même avec un cadre écarteur sur colonne montante. Mesures et conduit se vérifient pendant le diagnostic.",
    },
  ],
  contact: [
    {
      q: "Quels sont les horaires du standard ?",
      a: "Du lundi au vendredi, de 8 h à 12 h 30 et de 13 h 30 à 17 h. Le standard est fermé le samedi et le dimanche. Le numéro est le 01 42 64 80 51.",
    },
    {
      q: "Que dois-je préciser pour une demande de dépannage ?",
      a: "Le type d'appareil, la marque, le modèle si vous le connaissez, ce que vous constatez (message affiché, bruit, absence d'eau chaude) et votre adresse. Plus la description est précise, plus la réponse sera utile.",
    },
    {
      q: "Comment demander un devis d'installation ?",
      a: "Par téléphone ou avec le formulaire de cette page, en précisant votre logement et l'équipement envisagé. Gaz Flash réalise un diagnostic puis vous conseille la solution adaptée avant de chiffrer.",
    },
    {
      q: "Peut-on se présenter à l'adresse sans rendez-vous ?",
      a: "Le plus simple est d'appeler le standard avant de vous déplacer : l'équipe intervient souvent chez les clients, et le standard vous dira si quelqu'un peut vous recevoir au 7 rue Sainte-Isaure.",
    },
  ],
  paris18: [
    {
      q: "Quel est le prix d'un entretien de chaudière à Paris 18e ?",
      a: "Pour une chaudière : 130 € TTC en forfait révision et 150 € TTC en contrat annuel. Pour une chaudière à condensation : 150 € et 170 € TTC. Pour un chauffe-bain ou un radiateur à gaz : 120 € et 130 € TTC.",
    },
    {
      q: "Où se trouve Gaz Flash dans le 18e ?",
      a: "Au 7 rue Sainte-Isaure, 75018 Paris. Le standard est joignable au 01 42 64 80 51 du lundi au vendredi, de 8 h à 12 h 30 et de 13 h 30 à 17 h.",
    },
    {
      q: "Gaz Flash intervient-elle dans les arrondissements voisins ?",
      a: "Oui. Elle intervient dans tout Paris et dans la petite couronne. Les arrondissements autres que le 18e sont facturés au tarif « Paris (autres arrondissements) et petite couronne » de la page Nos tarifs.",
    },
    {
      q: "Comment prendre rendez-vous pour un entretien dans le 18e ?",
      a: "Appelez le standard ou remplissez le formulaire de contact en indiquant votre adresse et votre appareil. Pour un contrat annuel, le service commercial vous propose les conditions adaptées à vos besoins.",
    },
  ],
  panne: [
    {
      q: "Que faire si je sens une odeur de gaz ?",
      a: "Fermez le robinet de gaz si vous pouvez l'atteindre, ouvrez les fenêtres, n'actionnez ni interrupteur ni flamme, quittez le logement puis appelez les secours (18 ou 112) depuis l'extérieur. Ne rappelez un dépanneur qu'ensuite.",
    },
    {
      q: "Pourquoi la pression de ma chaudière est-elle basse ?",
      a: "Un manomètre qui descend peut signaler une petite fuite sur le circuit de chauffage ou une purge récente de radiateurs. Remonter la pression est possible sur beaucoup de modèles, mais si elle rechute, il faut faire chercher la cause.",
    },
    {
      q: "Ma chaudière s'éteint toute seule : est-ce grave ?",
      a: "Ce peut être une pression trop basse, un défaut d'évacuation ou un composant fatigué. Évitez de relancer l'appareil en boucle : notez le message ou le code affiché et appelez le standard.",
    },
    {
      q: "Plus d'eau chaude mais le chauffage marche : que vérifier ?",
      a: "Regardez la température demandée pour l'eau chaude et l'absence d'un message d'erreur. Si l'appareil chauffe les radiateurs mais pas l'eau sanitaire, la cause se trouve souvent dans la production d'eau chaude, à faire diagnostiquer.",
    },
    {
      q: "Quelles informations donner au téléphone ?",
      a: "Votre adresse, la marque et le modèle de la chaudière (sur la plaque ou l'étiquette), le message ou code affiché, ce qui a changé avant la panne, et si vous avez un contrat d'entretien avec Gaz Flash.",
    },
  ],
  maintenanceGuide: [
    {
      q: "Qui paie l'entretien de la chaudière : le locataire ou le propriétaire ?",
      a: "En location, l'entretien annuel d'une chaudière individuelle est en principe à la charge du locataire, sauf clause contraire du bail. Le remplacement d'une pièce défectueuse relève plutôt du propriétaire. Vérifiez votre bail.",
    },
    {
      q: "Que risque-t-on sans entretien annuel ?",
      a: "Une chaudière non entretenue s'encrasse et peut mal brûler, avec un risque lié au monoxyde de carbone. En cas de sinistre, l'assureur peut demander l'attestation d'entretien : vérifiez les clauses de votre contrat.",
    },
    {
      q: "À quel moment de l'année faire l'entretien ?",
      a: "L'obligation est annuelle, sans mois imposé. Beaucoup de personnes planifient la visite avant la saison de chauffe pour ne pas découvrir une panne en plein hiver. Les contrats Gaz Flash fixent une visite annuelle.",
    },
    {
      q: "L'entretien est-il le même pour une chaudière à condensation ?",
      a: "Le principe est le même, avec des points propres à la condensation, comme l'évacuation des condensats. Le tarif publié est un peu plus élevé : 150 € ou 170 € TTC à Paris 18e, selon forfait ou contrat.",
    },
    {
      q: "Que faire de l'attestation d'entretien ?",
      a: "Conservez-la précieusement : votre propriétaire, votre syndic ou votre assureur peuvent vous la demander, parfois des années plus tard. Gaz Flash la remet dans les deux formules, le forfait révision comme le contrat annuel.",
    },
  ],
  zones: [
    {
      q: "Mon adresse est-elle dans la zone d'intervention ?",
      a: "Si elle est à Paris ou dans l'un des trois départements de la petite couronne (92, 93, 94), oui en principe. La liste des communes n'est pas publiée : appelez le 01 42 64 80 51 avec votre adresse pour confirmation.",
    },
    {
      q: "Les tarifs changent-ils hors de Paris ?",
      a: "Les tarifs publiés distinguent deux zones : Paris 18e, et « Paris (autres arrondissements) et petite couronne » regroupés au même prix. Il n'y a donc pas de tarif séparé pour chaque département.",
    },
    {
      q: "Intervenez-vous en grande couronne ?",
      a: "Le site cite Paris, la Seine-Saint-Denis, les Hauts-de-Seine et le Val-de-Marne, et rien au-delà. Pour une adresse en Seine-et-Marne, dans les Yvelines, l'Essonne ou le Val-d'Oise, demandez directement au standard avant toute chose.",
    },
    {
      q: "Quel arrondissement est le plus proche de l'entreprise ?",
      a: "Le 18e, où se trouve Gaz Flash. Les arrondissements limitrophes sont les 9e, 10e, 17e et 19e, et le 18e touche Saint-Ouen-sur-Seine, Saint-Denis et Aubervilliers, trois communes de Seine-Saint-Denis desservies par l'entreprise.",
    },
  ],
  brands: [
    {
      q: "Gaz Flash entretient-elle toutes les marques de chaudières ?",
      a: "Le site cite Frisquet, Chaffoteaux, Saunier Duval, ELM Leblanc, De Dietrich et Styx. Pour toute autre marque ou un modèle ancien, donnez la référence de votre appareil au standard : on vous dira si c'est possible.",
    },
    {
      q: "Gaz Flash est-elle agréée par les constructeurs ?",
      a: "Gaz Flash indique être reconnue par les plus grandes marques et mentionne le titre de station technique agréée, avec les logos de cinq constructeurs. Pour connaître l'agrément d'une marque précise, posez la question au standard.",
    },
    {
      q: "Où voir les modèles posés par Gaz Flash ?",
      a: "Sur les quatre pages de gamme : régulation, chauffe-eau gaz, chaudière à condensation et chaudière basse température. Les descriptifs reprennent la documentation des constructeurs, et la page Installations rassemble les quatre gammes avec des repères pour choisir.",
    },
  ],
  hub: [
    {
      q: "Que faire si je sens du gaz chez moi ?",
      a: "Ne touchez à aucun interrupteur ni flamme, fermez le robinet de gaz si vous le pouvez, ouvrez les fenêtres, sortez, puis appelez depuis l'extérieur les pompiers (18 ou 112) ou le numéro d'urgence gaz de GRDF, le 0 800 47 33 33.",
    },
    {
      q: "Comment reconnaître un risque de monoxyde de carbone ?",
      a: "Le monoxyde de carbone n'a ni odeur ni couleur. Maux de tête, nausées, vertiges, surtout si plusieurs personnes les ressentent en même temps, doivent alerter. Aérez, arrêtez les appareils, sortez et appelez le 18 ou le 112.",
    },
    {
      q: "Quelle est la durée de vie d'une chaudière gaz ?",
      a: "Elle dépend de l'appareil, de l'eau et de l'entretien : on parle souvent de quinze à vingt ans. Une chaudière suivie chaque année tient en général plus longtemps qu'une chaudière jamais visitée.",
    },
    {
      q: "Le locataire doit-il faire entretenir la chaudière ?",
      a: "En principe oui, pour une chaudière individuelle, l'entretien annuel est à la charge du locataire, sauf clause contraire du bail. La page Entretien de chaudière à Paris détaille ce point et la remise de l'attestation.",
    },
    {
      q: "Qui peut ramoner mon conduit ?",
      a: "Seul un ramonage effectué par un professionnel qualifié est considéré comme valable, avec remise d'un certificat de ramonage. Le faire soi-même ne vous permettrait pas de faire valoir votre assurance en cas de sinistre.",
    },
    {
      q: "Pourquoi ma chaudière perd-elle de la pression ?",
      a: "La pression baisse après une purge de radiateurs ou à cause d'une petite fuite sur le circuit. Si elle rechute après remise à niveau, il faut chercher la fuite plutôt que de remplir à répétition.",
    },
    {
      q: "Qu'est-ce que le désembouage ?",
      a: "Le désembouage consiste à nettoyer le circuit de chauffage de ses boues et de ses dépôts, qui peuvent gêner la circulation de l'eau. Gaz Flash le propose en option, sur demande, avec son contrat d'entretien.",
    },
    {
      q: "Une chaudière à condensation convient-elle à un appartement parisien ?",
      a: "Souvent oui, mais l'évacuation des fumées et des condensats se vérifie sur place, surtout dans un immeuble ancien aux conduits partagés. Voir la page Chaudière à condensation pour les points à contrôler.",
    },
    {
      q: "Comment obtenir une attestation d'entretien ?",
      a: "Elle est remise par le professionnel à l'issue de la visite annuelle d'entretien. Chez Gaz Flash, le forfait révision comme le contrat annuel incluent cette attestation. Conservez-la : votre propriétaire, votre syndic ou votre assureur peuvent vous la demander.",
    },
    {
      q: "Les tarifs de Gaz Flash sont-ils affichés ?",
      a: "Ceux de l'entretien et du ramonage, oui, en TTC, avec un prix pour Paris 18e et un prix pour le reste de Paris et la petite couronne. Dépannage et installation sont chiffrés sur devis détaillé.",
    },
    {
      q: "Comment joindre Gaz Flash ?",
      a: "Par téléphone au 01 42 64 80 51 du lundi au vendredi, de 8 h à 12 h 30 et de 13 h 30 à 17 h, par e-mail ou avec le formulaire de la page Contact. L'adresse est le 7 rue Sainte-Isaure, 75018 Paris.",
    },
    {
      q: "Que signifie « Professionnel du Gaz » ?",
      a: "C'est une qualification que Gaz Flash affiche sur son site, avec Qualibat RGE, et dont elle reprend le logo. Pour en connaître le détail et la période de validité, demandez directement les attestations à l'entreprise.",
    },
  ],
} satisfies Record<string, readonly Qa[]>;

export type FaqKey = keyof typeof faqs;

export const requestTypes = [
  { value: "depannage", label: "Un dépannage" },
  { value: "entretien", label: "Entretien ou contrat d'entretien" },
  { value: "installation", label: "Une installation (devis)" },
  { value: "ramonage", label: "Un ramonage" },
  { value: "autre", label: "Autre demande" },
];
