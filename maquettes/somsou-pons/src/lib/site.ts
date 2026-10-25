import type { PhotoId } from "./photos";

export const INDEXABLE = process.env.NEXT_PUBLIC_INDEXABLE === "true";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.somsoupons.fr").replace(/\/$/, "");
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const LAST_UPDATED = "2026-10-25";

export type Agency = {
  key: "seize" | "dixsept" | "transvaal";
  name: string;
  short: string;
  role: string;
  street: string;
  postalCode: string;
  city: string;
  phoneDisplay: string;
  phoneTel: string;
  email: string;
  trades: string;
  text: string;
  photo: PhotoId;
};

/** Trois adresses relevées sur la page « Nos agences » du site actuel. Aucun horaire n'y figure : ils ne sont pas affichés. */
export const agencies: Agency[] = [
  {
    key: "seize",
    name: "Agence du 16e, siège social",
    short: "Paris 16e",
    role: "Siège social",
    street: "9 rue Gavarni",
    postalCode: "75116",
    city: "Paris",
    phoneDisplay: "01 42 15 25 15",
    phoneTel: "+33142152515",
    email: "agence16@somsoupons.fr",
    trades: "Plomberie, chauffage, rénovation",
    text: "Le siège social, rue Gavarni, dans le quartier de Passy, issu du rachat de l'entreprise Théuloup en 1999. L'adresse à retenir pour un devis, une rénovation ou un dépannage dans l'ouest de Paris.",
    photo: "facade",
  },
  {
    key: "dixsept",
    name: "Agence du 17e",
    short: "Paris 17e",
    role: "Agence",
    street: "26 rue Ampère",
    postalCode: "75017",
    city: "Paris",
    phoneDisplay: "01 46 27 14 86",
    phoneTel: "+33146271486",
    email: "agence17@somsoupons.fr",
    trades: "Plomberie, chauffage, rénovation",
    text: "Les bureaux de la rue Ampère, installés dans le 17e arrondissement en 2006 selon l'entreprise. Ils reçoivent les demandes du nord-ouest de la capitale.",
    photo: "rue",
  },
  {
    key: "transvaal",
    name: "Transvaal, menuiserie",
    short: "La Garenne-Colombes",
    role: "Atelier de menuiserie",
    street: "5 rue du Transvaal",
    postalCode: "92250",
    city: "La Garenne-Colombes",
    phoneDisplay: "01 42 42 23 72",
    phoneTel: "+33142422372",
    email: "transvaal@somsoupons.fr",
    trades: "Menuiserie",
    text: "La SARL Transvaal a repris l'activité de menuiserie créée en 1992 : portes, placards, cuisines, fenêtres, baies coulissantes, portes d'entrée. Elle travaille depuis La Garenne-Colombes.",
    photo: "atelier-bois",
  },
];

export const business = {
  name: "Somsou-Pons",
  legalName: "SOMSOU-PONS",
  siren: "582 097 457",
  tagline: "Entreprise du bâtiment à Paris : plomberie, chauffage et rénovation",
  phoneDisplay: agencies[0].phoneDisplay,
  phoneTel: agencies[0].phoneTel,
  email: agencies[0].email,
  address: { street: agencies[0].street, postalCode: agencies[0].postalCode, city: agencies[0].city },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Somsou-Pons+9+rue+Gavarni+75116+Paris",
  area: "Paris et petite couronne",
  areaServed: [
    { type: "City" as const, name: "Paris 16e arrondissement" },
    { type: "City" as const, name: "Paris 17e arrondissement" },
    { type: "City" as const, name: "La Garenne-Colombes" },
  ],
};

export const reviews = { rating: 4.0, ratingText: "4,0", count: 13, observed: "20 octobre 2026" };

export const PATHS = {
  home: "/",
  presentation: "/presentation.html",
  trades: "/metier.html",
  qualifications: "/qualification.html",
  agencies: "/agences.html",
  plumbing: "/plombier-paris",
  heating: "/chauffagiste-paris",
  emergency: "/depannage-plomberie-paris",
  renovation: "/renovation-appartement-paris",
  joinery: "/menuiserie-la-garenne-colombes",
  contact: "/nous-contacter",
} as const;

export const nav = [
  { href: PATHS.presentation, label: "Présentation" },
  { href: PATHS.trades, label: "Nos métiers" },
  { href: PATHS.qualifications, label: "Nos qualifications" },
  { href: PATHS.agencies, label: "Nos agences" },
  { href: PATHS.contact, label: "Contact" },
] as const;

export const requestTypes = [
  { value: "urgence", label: "Dépannage urgent (fuite, engorgement…)" },
  { value: "plomberie", label: "Plomberie (sanitaires, robinetterie, chauffe-eau)" },
  { value: "chauffage", label: "Chauffage (chaudière, radiateurs, plancher chauffant)" },
  { value: "renovation", label: "Rénovation (appartement, salle de bains, plusieurs corps de métier)" },
  { value: "menuiserie", label: "Menuiserie (atelier de La Garenne-Colombes)" },
  { value: "autre", label: "Autre demande" },
] as const;

/** Repères historiques, tels que les présente la page « Présentation » du site actuel (à faire confirmer par l'entreprise). */
export const timeline = [
  { year: "1876", title: "Les Établissements Piquot", text: "Fabricants et poseurs de mosaïques et de carrelages, fondés par les ancêtres de Franck Lebailly, dirigeant actuel. Leurs carrelages sont présentés à l'Exposition universelle de 1880." },
  { year: "1924", title: "La Maison Pons", text: "Création de la Maison Pons, spécialisée en plomberie et en couverture. Elle deviendra la seconde moitié du nom." },
  { year: "1958", title: "Le nom SOMSOU", text: "Les Établissements Piquot prennent le nom de SOMSOU." },
  { year: "1975", title: "La maçonnerie", text: "Rachat de l'entreprise de maçonnerie L'Héritier : la maçonnerie rejoint le carrelage." },
  { year: "1992", title: "SOMSOU-PONS", text: "Rachat de la Maison Pons : plomberie et couverture rejoignent la maison, et SOMSOU-PONS est née. Une activité de menuiserie est créée la même année." },
  { year: "1997", title: "COLBAL et DUROUCHOUX", text: "Deux nouvelles reprises viennent renforcer les équipes." },
  { year: "1999", title: "Théuloup, rue Gavarni", text: "Rachat de l'entreprise Théuloup, dont l'adresse de la rue Gavarni devient le siège social." },
  { year: "2006", title: "La rue Ampère", text: "Des bureaux s'installent au 26 rue Ampère, dans le 17e arrondissement." },
  { year: "2013", title: "Rachat de CPR", text: "Reprise de CPR, entreprise de plomberie et de couverture." },
] as const;

export const qualifications = [
  { code: "5111", label: "Plomberie et sanitaire", level: "Technicité courante", gas: false },
  { code: "5112", label: "Plomberie et sanitaire", level: "Technicité confirmée", gas: true },
  { code: "5311", label: "Installations thermiques", level: "Technicité courante", gas: true },
  { code: "6311", label: "Carrelage et revêtements", level: "Technicité courante", gas: false },
  { code: "2141", label: "Transformation en maçonnerie", level: "Technicité courante", gas: false },
] as const;

export const marquee = ["Plomberie", "Chauffage", "Rénovation", "Carrelage", "Maçonnerie", "Menuiserie", "Peinture", "Électricité"] as const;

export type Faq = { q: string; a: string };

export const faqs: Record<"home" | "plumbing" | "heating" | "emergency" | "renovation", Faq[]> = {
  home: [
    { q: "Où se trouvent les agences Somsou-Pons ?", a: "Le siège social est au 9 rue Gavarni, dans le 16e arrondissement de Paris. Une agence se trouve au 26 rue Ampère, dans le 17e, et l'atelier de menuiserie Transvaal au 5 rue du Transvaal, à La Garenne-Colombes. Chaque adresse a son propre téléphone." },
    { q: "Quels métiers pratique l'entreprise ?", a: "La rénovation partielle ou totale avec un seul interlocuteur : démolition, maçonnerie, plâtrerie, carrelage, plomberie, chauffage, menuiserie, parquet, petite couverture, peinture et électricité. Et un service de dépannage rapide en plomberie, menuiserie et petite couverture." },
    { q: "Peut-on demander un devis gratuit ?", a: "Oui, la demande de devis passe par la page contact : décrivez le besoin, ajoutez quelques photos si vous le pouvez et indiquez l'adresse du lieu concerné. Le devis détaille ce qui sera fait avant le début de tout travail." },
    { q: "L'entreprise a-t-elle des qualifications ?", a: "Selon son site, elle détient cinq qualifications Qualibat, en plomberie et sanitaire, installations thermiques, carrelage et maçonnerie, dont deux avec la mention gaz domestique. Elle présente aussi Professionnel du Gaz et la mention RGE. La page dédiée les détaille." },
    { q: "Comment joindre l'entreprise en urgence ?", a: "Appelez directement l'agence la plus proche : 01 42 15 25 15 pour le siège du 16e, 01 46 27 14 86 pour l'agence du 17e. Pour une odeur de gaz, quittez d'abord les lieux et appelez le numéro d'urgence gaz, avant toute autre démarche." },
  ],
  plumbing: [
    { q: "Quels travaux de plomberie sont réalisés ?", a: "L'entreprise cite l'alimentation et l'évacuation d'eau, les sanitaires et la robinetterie, ainsi que le dépannage rapide. Pour un autre besoin, décrivez-le sur la page contact : l'agence vous dira si elle peut s'en charger." },
    { q: "Faut-il être propriétaire pour demander un devis de plomberie ?", a: "Non. Un locataire peut demander un devis, mais certains travaux touchent aux parties communes ou à l'équipement du logement : l'accord du propriétaire, du bailleur ou du syndic est alors nécessaire avant de commencer." },
    { q: "Peut-on envoyer des photos pour estimer le travail ?", a: "Oui, le formulaire accepte jusqu'à quatre photos. Elles aident l'agence à comprendre la situation : l'état d'un siphon, un robinet d'arrêt, un chauffe-eau, ou l'emplacement d'une future douche." },
    { q: "Dans quels arrondissements intervient l'entreprise ?", a: "Ses deux agences parisiennes sont dans le 16e et le 17e arrondissement. Pour un chantier ailleurs à Paris ou en petite couronne, appelez l'agence : elle indiquera si le déplacement est possible." },
    { q: "Le devis est-il gratuit ?", a: "La demande de devis ne vous engage pas, mais nous n'affichons aucun tarif : le prix dépend du chantier et figure sur le devis remis par l'entreprise avant le début des travaux." },
  ],
  heating: [
    { q: "Quel équipement de chauffage l'entreprise installe-t-elle ?", a: "Son site cite les chaudières, les planchers chauffants, les radiateurs et les ballons d'eau chaude. Le choix dépend de l'immeuble, du mode de chauffage existant et de l'accord de la copropriété le cas échéant." },
    { q: "L'entretien d'une chaudière est-il obligatoire ?", a: "Oui. En France, les chaudières à combustible d'une puissance de 4 à 400 kW doivent être entretenues chaque année par un professionnel, qui remet une attestation d'entretien. Elle sera demandée par un assureur ou un futur acquéreur." },
    { q: "Que faire en cas d'odeur de gaz ?", a: "Ouvrez les fenêtres, n'actionnez aucun interrupteur ni flamme, fermez le robinet de gaz si vous pouvez l'atteindre, quittez les lieux et appelez le numéro d'urgence gaz de GRDF, le 0 800 47 33 33, depuis l'extérieur." },
    { q: "Peut-on installer un plancher chauffant dans un appartement ?", a: "C'est possible dans certains cas, surtout en rénovation lourde, car il faut de la hauteur sous plafond et un sol adapté. Une visite sur place est nécessaire pour savoir si le projet est réalisable dans votre logement." },
    { q: "L'entreprise est-elle qualifiée pour intervenir sur le gaz ?", a: "Son site mentionne des qualifications Qualibat en installations thermiques avec une mention gaz domestique, ainsi que la mention Professionnel du Gaz. Vous pouvez demander les justificatifs à jour à l'agence avant de signer." },
  ],
  emergency: [
    { q: "Que faire en premier en cas de fuite d'eau ?", a: "Fermez le robinet d'arrêt général de l'eau, coupez l'électricité si l'eau approche d'un tableau ou de prises, épongez ce que vous pouvez, prenez des photos pour l'assurance, puis appelez l'agence pour décrire la situation." },
    { q: "Qui appeler quand la fuite vient du voisin du dessus ?", a: "Prévenez le voisin et le syndic ou le gardien, puis déclarez le sinistre à votre assureur avec un constat amiable dégât des eaux. Le plombier de la copropriété ou de l'assureur intervient ensuite sur la canalisation concernée." },
    { q: "Peut-on promettre un délai d'intervention ?", a: "Non, et nous n'en affichons pas : il dépend de la charge de l'agence et de l'adresse. Appelez le 01 42 15 25 15 ou le 01 46 27 14 86 : l'agence vous dira ce qu'elle peut faire, et quand." },
    { q: "Comment décrire un engorgement ou une panne ?", a: "Dites où se trouve le problème (cuisine, salle de bains, colonne d'immeuble), depuis quand il dure, et si l'eau remonte. Une photo de l'installation, envoyée avec le formulaire, évite souvent un échange de plus." },
    { q: "Le dépannage est-il facturé avant l'intervention ?", a: "Le prix dépend de la nature de l'intervention. Demandez-le au téléphone et exigez un devis ou une estimation écrite avant tout travail : c'est la règle pour un dépannage à domicile." },
  ],
  renovation: [
    { q: "Pourquoi confier une rénovation à une seule entreprise ?", a: "Un seul interlocuteur coordonne les corps de métier : plomberie, électricité, carrelage, peinture, menuiserie. Vous évitez les trous dans le planning, les responsabilités floues entre artisans et les reprises d'un métier sur l'autre." },
    { q: "Peut-on rénover une salle de bains sans tout casser ?", a: "Parfois. Le remplacement d'une baignoire par une douche, ou la reprise du carrelage et de la robinetterie, peut se faire sans toucher aux cloisons. Seule une visite permet de dire ce qui est faisable dans votre appartement." },
    { q: "Faut-il prévenir la copropriété avant des travaux ?", a: "Oui, dès que les travaux touchent aux parties communes ou à l'aspect de l'immeuble : colonnes d'eau, façade, fenêtres, structure. Votre règlement de copropriété précise les cas, et le syndic vous orientera." },
    { q: "Comment préparer un devis de rénovation ?", a: "Rassemblez le plan de l'appartement, des photos de chaque pièce, la liste de ce que vous voulez changer et celle de ce que vous voulez garder. Plus la demande est claire, plus le devis est précis." },
    { q: "Y a-t-il un devis pour les modifications en cours de chantier ?", a: "Toute modification de ce qui a été convenu doit faire l'objet d'un avenant au devis, accepté par écrit avant de continuer. Cela protège le client comme l'entreprise et évite les mauvaises surprises." },
  ],
};
