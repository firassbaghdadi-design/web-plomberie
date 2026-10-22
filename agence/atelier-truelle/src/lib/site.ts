import { legal } from "./legal";

export const INDEXABLE = process.env.NEXT_PUBLIC_INDEXABLE === "true";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ateliertruelle.fr").replace(/\/$/, "");
export const LAST_UPDATED = "2026-10-23";

export const agency = {
  name: "Atelier Truelle",
  tagline: "Agence web et marketing digital pour le bâtiment",
  email: (process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "").trim() || "contact@ateliertruelle.fr",
  phoneDisplay: (process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "").trim(),
  phoneTel: (process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "").replace(/[^\d+]/g, ""),
  area: "Île-de-France",
  legalName: legal.name || "Atelier Truelle",
} as const;

export const PATHS = {
  home: "/",
  services: "/services",
  trades: "/metiers",
  method: "/methode",
  contact: "/contact",
  legal: "/mentions-legales",
  privacy: "/confidentialite",
} as const;

export const nav = [
  { href: PATHS.home, label: "Accueil" },
  { href: PATHS.services, label: "Services" },
  { href: PATHS.trades, label: "Métiers" },
  { href: PATHS.method, label: "Méthode" },
  { href: PATHS.contact, label: "Contact" },
] as const;

export const shortAnswer =
  "Atelier Truelle est une agence de marketing digital spécialisée dans les entreprises du bâtiment : plombiers, chauffagistes, électriciens, couvreurs, maçons. Nous prenons en charge votre site web, votre référencement local, votre fiche Google et vos avis, votre publicité en ligne et le suivi de vos demandes, avec un seul interlocuteur.";

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  icon: "site" | "pin" | "star" | "mega" | "camera" | "chart";
  name: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  brief: string;
  does: string[];
  gets: string[];
  faq: Faq[];
};

export const services: Service[] = [
  {
    slug: "creation-de-site-web",
    icon: "site",
    name: "Création et refonte de site web",
    short: "Un site à votre image, lisible sur téléphone, rapide, qui met l'appel sous les yeux de vos clients.",
    metaTitle: "Création de site web pour le bâtiment | Atelier Truelle",
    metaDescription: "Atelier Truelle crée ou refait le site des entreprises du bâtiment : votre charte, vos pages conservées, affichage mobile, rapidité et maquette gratuite.",
    h1: "Création et refonte de site web pour les entreprises du bâtiment",
    brief: "Nous créons ou refaisons le site de votre entreprise du bâtiment à partir de votre logo, de vos couleurs et de vos contenus. Le site s'affiche parfaitement sur téléphone, charge vite et place le bouton d'appel sous les yeux de vos clients. Nous conservons vos adresses de pages pour ne pas perdre votre référencement.",
    does: [
      "Maquette privée de votre page d'accueil avant tout engagement",
      "Reprise de votre charte (logo, couleurs, polices), de vos textes et de vos photos",
      "Conservation de vos adresses de pages, avec redirections permanentes si elles changent",
      "Pages par métier et par zone d'intervention",
      "Formulaire de demande dont les messages arrivent dans votre boîte e-mail",
      "Bouton d'appel visible en permanence sur téléphone",
      "Hébergement, sécurité et mentions légales",
    ],
    gets: ["Un site que vos clients lisent sans zoomer", "Des pages rapides et accessibles", "Une base saine pour le référencement", "Un site qui peut évoluer avec votre activité"],
    faq: [
      { q: "Vais-je perdre mon référencement en changeant de site ?", a: "Non, c'est ce que nous évitons. Nous conservons vos adresses de pages et, quand une adresse doit changer, nous mettons en place une redirection permanente vers la nouvelle page." },
      { q: "Puis-je voir le site avant de m'engager ?", a: "Oui. Nous préparons une maquette privée de votre page d'accueil avec votre logo et vos couleurs. Elle est gratuite, sans engagement, et supprimée si elle ne vous convient pas." },
      { q: "Reprenez-vous mes textes et mes photos ?", a: "Oui. Nous reprenons vos contenus et vos photos de chantier. Nous n'ajoutons ni prix, ni certification, ni chiffre que vous ne nous avez pas confirmés." },
    ],
  },
  {
    slug: "referencement-local",
    icon: "pin",
    name: "Référencement local et visibilité dans les IA",
    short: "Apparaître quand un client cherche « plombier » ou « électricien » près de chez lui, sur Google comme dans les assistants d'IA.",
    metaTitle: "Référencement local pour artisans du bâtiment | Truelle",
    metaDescription: "Référencement local pour les entreprises du bâtiment : pages par métier et par zone, données structurées, visibilité dans Google et les assistants d'IA.",
    h1: "Référencement local et visibilité dans les assistants d'IA",
    brief: "Le référencement local fait apparaître votre entreprise quand un client cherche un artisan près de chez lui. Nous soignons les titres et descriptions de vos pages, créons des pages par métier et par zone, structurons vos données pour Google et les assistants d'IA, et vérifions que vos informations sont cohérentes partout.",
    does: [
      "Audit de l'existant et des recherches de vos clients",
      "Titres, descriptions et contenus par métier et par zone d'intervention",
      "Questions fréquentes avec des réponses courtes et claires",
      "Données structurées (entreprise, services, questions) pour Google et les assistants d'IA",
      "Cohérence du nom, de l'adresse et du téléphone sur les annuaires",
      "Fichiers techniques : plan du site, consignes aux robots, redirections",
      "Suivi de vos positions sur les recherches principales",
    ],
    gets: ["Des pages qui répondent aux questions de vos clients", "Une présentation claire de votre entreprise pour les moteurs et les IA", "Un suivi régulier de vos positions"],
    faq: [
      { q: "Pouvez-vous me garantir la première place sur Google ?", a: "Non, et méfiez-vous de ceux qui le font : personne ne contrôle le classement de Google. Nous travaillons ce qui dépend de vous et de votre site, et nous mesurons les progrès." },
      { q: "En combien de temps voit-on des résultats ?", a: "Cela dépend de la concurrence dans votre zone et de l'état de départ de votre site. Nous fixons des étapes de suivi plutôt qu'une promesse de délai." },
      { q: "Qu'est-ce que la visibilité dans les assistants d'IA ?", a: "Les assistants d'IA répondent à des questions comme « quel plombier appeler à Paris 14e ? ». Un site clair, des réponses courtes, des données structurées et des informations cohérentes facilitent la reprise de votre entreprise dans ces réponses, sans aucune garantie." },
    ],
  },
  {
    slug: "fiche-google-et-avis",
    icon: "star",
    name: "Fiche Google et avis clients",
    short: "Une fiche complète, à jour, et des avis qui rassurent, demandés auprès de vos clients satisfaits.",
    metaTitle: "Fiche Google et avis clients pour artisans | Atelier Truelle",
    metaDescription: "Optimisation de votre fiche Google et collecte légitime d'avis après intervention pour les entreprises du bâtiment. Aucun avis acheté ni récompensé.",
    h1: "Fiche Google et avis clients pour les entreprises du bâtiment",
    brief: "Votre fiche Google est souvent la première chose que voit un client. Nous la complétons et la maintenons à jour : catégories, horaires, zone d'intervention, photos, description. Nous mettons aussi en place une demande d'avis après intervention, par SMS ou QR code, auprès de vos clients satisfaits. Aucun avis n'est acheté ni récompensé.",
    does: [
      "Audit de votre fiche : catégories, horaires, zone d'intervention, description, photos",
      "Mise à jour régulière et ajout de photos de chantier, avec l'accord des clients",
      "Demande d'avis après intervention par SMS ou QR code",
      "Modèles de réponses aux avis, positifs comme négatifs",
      "Affichage de vos avis sur votre site, avec leur source",
    ],
    gets: ["Une fiche complète et cohérente avec votre site", "Un flux régulier d'avis authentiques", "Des réponses professionnelles aux avis difficiles"],
    faq: [
      { q: "Pouvez-vous me faire obtenir des avis 5 étoiles ?", a: "Non. Les avis ne s'achètent pas et ne se filtrent pas : c'est interdit par Google et sanctionné par la loi. Nous facilitons la demande d'avis auprès de vos clients réellement satisfaits." },
      { q: "Et si j'ai un avis négatif ?", a: "Nous vous aidons à répondre calmement et factuellement. Une réponse professionnelle rassure autant les futurs clients que la note elle-même." },
      { q: "Puis-je afficher mes avis Google sur mon site ?", a: "Oui, en citant leur source. Nous ne reprenons un extrait qu'avec une présentation exacte, sans modification du sens." },
    ],
  },
  {
    slug: "publicite-en-ligne",
    icon: "mega",
    name: "Publicité en ligne",
    short: "Des campagnes Google et réseaux sociaux pour recevoir plus de demandes quand vous en avez besoin.",
    metaTitle: "Publicité en ligne pour artisans du bâtiment | Truelle",
    metaDescription: "Campagnes Google Ads et réseaux sociaux pour les entreprises du bâtiment : recherches ciblées, annonces, pages d'atterrissage et suivi des appels.",
    h1: "Publicité en ligne pour les entreprises du bâtiment",
    brief: "Quand vous voulez plus de demandes sur une période ou un métier précis, nous mettons en place et pilotons vos campagnes sur Google et les réseaux sociaux : choix des recherches, annonces, page d'atterrissage, suivi des appels. Le budget publicitaire est défini avec vous avant le lancement et vous gardez la maîtrise de vos comptes.",
    does: [
      "Définition des recherches à cibler (métier, zone, type de demande)",
      "Création et suivi des annonces Google et des publicités sur les réseaux sociaux",
      "Pages d'atterrissage dédiées, avec appel et formulaire",
      "Suivi des appels et des demandes provenant de chaque campagne",
      "Bilan régulier : ce qui rapporte des demandes, ce qui est arrêté",
    ],
    gets: ["Des campagnes ciblées sur vos métiers et votre zone", "Un budget défini à l'avance", "Un bilan clair, sans jargon"],
    faq: [
      { q: "Combien dois-je investir en publicité ?", a: "Cela dépend de votre zone, de votre métier et de vos objectifs. Nous définissons avec vous un budget avant de lancer quoi que ce soit, et nous l'ajustons selon les résultats." },
      { q: "Les comptes publicitaires sont-ils à mon nom ?", a: "Nous recommandons que les comptes publicitaires soient ouverts à votre nom, pour que vous en gardiez toujours la maîtrise." },
      { q: "Faut-il de la publicité si mon site est bien référencé ?", a: "Pas toujours. La publicité sert surtout à accélérer sur un métier, une période ou une zone précise. Nous commençons par regarder si le référencement suffit." },
    ],
  },
  {
    slug: "reseaux-sociaux-et-contenu",
    icon: "camera",
    name: "Réseaux sociaux, photos et vidéos de chantier",
    short: "Montrer votre savoir-faire en images : avant/après, chantiers, équipe, avec l'accord de vos clients.",
    metaTitle: "Contenu et réseaux sociaux pour le bâtiment | Truelle",
    metaDescription: "Photos, vidéos et publications de chantier pour les entreprises du bâtiment : avant/après, savoir-faire, équipe, réalisés avec l'accord de vos clients.",
    h1: "Réseaux sociaux, photos et vidéos de chantier",
    brief: "Un chantier réussi est votre meilleure publicité. Nous vous aidons à le montrer : photos et vidéos avant/après, présentation de l'équipe et du savoir-faire, publications régulières sur vos réseaux et sur votre fiche Google. Les images de chantier ne sont publiées qu'avec l'accord de vos clients.",
    does: [
      "Plan de contenus simple, adapté à votre rythme de travail",
      "Conseils pour photographier vos chantiers (avant, pendant, après)",
      "Montage de photos et de courtes vidéos",
      "Publications sur vos réseaux et sur votre fiche Google",
      "Présentation de l'équipe et du savoir-faire",
    ],
    gets: ["Des réalisations visibles et datées", "Des images utilisables sur votre site, vos réseaux et votre fiche Google", "Un rythme de publication tenable"],
    faq: [
      { q: "Dois-je demander l'accord de mes clients pour publier un chantier ?", a: "Oui. Nous ne publions des images de chantier qu'avec l'accord du client, et sans élément permettant de l'identifier s'il le souhaite." },
      { q: "Je n'ai pas le temps de publier. Que faire ?", a: "Nous mettons en place une méthode légère : vous prenez quelques photos sur le chantier, nous nous chargeons du reste." },
      { q: "Faut-il être sur tous les réseaux sociaux ?", a: "Non. Nous choisissons avec vous un ou deux réseaux où se trouvent réellement vos clients, plutôt que de disperser votre temps." },
    ],
  },
  {
    slug: "suivi-des-demandes",
    icon: "chart",
    name: "Suivi des appels et des demandes",
    short: "Savoir d'où viennent vos clients et ce qui fonctionne, avec un bilan mensuel clair.",
    metaTitle: "Suivi des appels et demandes pour artisans | Truelle",
    metaDescription: "Suivi des appels, formulaires et demandes de devis pour les entreprises du bâtiment : savoir d'où viennent vos clients et quoi améliorer chaque mois.",
    h1: "Suivi des appels et des demandes de devis",
    brief: "Pour un artisan, ce qui compte, ce sont les appels et les demandes de devis. Nous mettons en place un suivi simple : combien d'appels et de demandes arrivent, par quelle page ou campagne, à quel moment. Chaque mois, vous recevez un bilan clair et des recommandations concrètes.",
    does: [
      "Mise en place du suivi des appels, des formulaires et des demandes de devis",
      "Rattachement de chaque demande à son origine (recherche, fiche Google, publicité)",
      "Tableau de bord simple, sans jargon",
      "Bilan mensuel et recommandations concrètes",
      "Respect de la vie privée : pas de cookie publicitaire inutile",
    ],
    gets: ["Une vision claire de ce qui vous rapporte des clients", "Des décisions fondées sur des chiffres", "Un bilan mensuel lisible"],
    faq: [
      { q: "Ai-je besoin d'un outil compliqué ?", a: "Non. Nous choisissons des outils simples et vous présentons uniquement ce qui sert à décider : appels, demandes de devis, origine." },
      { q: "Le suivi respecte-t-il la vie privée de mes visiteurs ?", a: "Nous privilégions une mesure respectueuse de la vie privée et nous n'installons pas de cookie publicitaire sans nécessité. Le cas échéant, un bandeau de consentement est mis en place." },
      { q: "Suivez-vous aussi les appels téléphoniques ?", a: "Oui, par un numéro de suivi ou par un bouton d'appel mesuré sur le site, selon votre besoin." },
    ],
  },
];

export type Trade = { id: string; name: string; text: string; searches: string[] };

export const trades: Trade[] = [
  {
    id: "plombiers-chauffagistes",
    name: "Plombiers et chauffagistes",
    text: "C'est notre premier terrain. Le client qui a une fuite ou une panne de chaudière cherche un numéro et appelle : le bouton d'appel, la fiche Google et les avis comptent autant que le site. Les travaux de salle de bains, de remplacement de chaudière ou d'entretien annuel demandent des pages claires et rassurantes.",
    searches: ["plombier urgence", "dépannage chaudière", "rénovation salle de bains", "entretien chaudière"],
  },
  {
    id: "electriciens",
    name: "Électriciens",
    text: "Dépannage, mise aux normes d'un tableau, installation de prises ou de bornes de recharge : chaque prestation a sa page et ses questions fréquentes. Les clients cherchent un électricien près de chez eux et veulent savoir s'il intervient rapidement et s'il établit un devis.",
    searches: ["électricien dépannage", "mise aux normes électriques", "installation borne de recharge"],
  },
  {
    id: "couvreurs",
    name: "Couvreurs et zingueurs",
    text: "Fuite en toiture, réfection, entretien : le client veut voir des chantiers réels. Les photos avant/après, datées et situées, sont votre meilleure preuve, sur le site comme sur la fiche Google.",
    searches: ["couvreur fuite toiture", "réfection de toiture", "zingueur"],
  },
  {
    id: "macons-renovation",
    name: "Maçons et entreprises de rénovation",
    text: "Un projet long, un budget important : le client compare avant de décider. Un site qui présente vos réalisations, votre façon de travailler et vos avis réduit l'hésitation et facilite la demande de devis.",
    searches: ["maçon rénovation", "extension maison", "rénovation appartement"],
  },
  {
    id: "autres-corps-de-metier",
    name: "Peintres, menuisiers, plaquistes et autres corps de métier",
    text: "Les mêmes principes s'appliquent : un site clair, une fiche Google soignée, des réalisations visibles et un suivi des demandes. Parlez-nous de votre activité, nous adaptons la méthode.",
    searches: ["peintre en bâtiment", "menuisier", "plaquiste"],
  },
];

export const pillars = [
  { title: "Nous parlons votre métier", text: "Urgence, devis, chantier, zone d'intervention : nous comprenons comment un client choisit un artisan, et nous construisons votre présence en ligne autour de cette réalité." },
  { title: "Un seul interlocuteur", text: "Site, référencement, fiche Google, publicité, contenus et suivi : tout passe par la même personne, avec la même vision. Vous n'avez pas à coordonner plusieurs prestataires." },
  { title: "Des preuves, pas des promesses", text: "Nous ne vendons ni « première place sur Google » ni avis achetés. Nous travaillons ce qui est réel, nous le mesurons, et nous vous montrons le résultat avant de vous demander quoi que ce soit." },
] as const;

export const keep = ["Votre logo, vos couleurs et vos polices", "Vos textes et vos photos de chantier", "Vos adresses de pages (redirections 301 si elles changent)", "Votre ton et votre façon de parler à vos clients"] as const;

export const change = [
  "Un affichage fait pour le téléphone, avec le bouton d'appel toujours visible",
  "Des pages rapides à charger, accessibles et propres pour Google",
  "Vos avis clients mis en avant, avec leur source",
  "Un formulaire de demande dont les messages arrivent dans votre boîte e-mail",
  "Un référencement local : pages par métier, questions fréquentes, données structurées",
] as const;

export const steps = [
  { title: "Écoute et diagnostic", text: "Nous regardons votre site, votre fiche Google, vos avis et vos concurrents locaux. Vous nous dites ce que vous voulez : plus d'appels, plus de chantiers, un métier en particulier." },
  { title: "Maquette gratuite et privée", text: "Nous préparons votre page d'accueil avec votre logo et vos couleurs. Vous la découvrez par un lien privé, jamais publié ni référencé." },
  { title: "Mise en place", text: "Site, référencement, fiche Google, avis, publicité, contenus : nous construisons ce dont vous avez besoin, étape par étape, sans perdre vos adresses de pages." },
  { title: "Suivi et amélioration", text: "Bilan régulier des appels et des demandes, ajustements, petites modifications. Vous savez toujours ce qui fonctionne." },
] as const;

export const method = [
  { title: "Regarder ce qui existe", text: "Votre fiche Google, votre site actuel, vos adresses de pages, vos avis et vos concurrents locaux. Nous notons trois choses concrètes à améliorer et ce qui fonctionne déjà." },
  { title: "Préparer une maquette privée", text: "Nous reprenons votre logo, vos couleurs, vos polices et votre ton. La maquette est accessible par un lien non référencé, qui reste privé." },
  { title: "Récupérer vos contenus", text: "Vos textes, vos services, vos horaires, vos photos de chantier. Nous n'inventons ni prix, ni certification, ni chiffre : tout ce qui est affiché vient de vous ou d'une source vérifiable." },
  { title: "Construire pour le téléphone d'abord", text: "Bouton d'appel visible en permanence, pages légères, texte lisible, navigation au pouce. Nous mesurons la vitesse et l'accessibilité avant la livraison et visons au moins 90 sur 100 aux tests Lighthouse sur mobile." },
  { title: "Se faire trouver", text: "Titre et description soignés pour chaque page, questions fréquentes, données structurées pour Google et pour les assistants d'IA, plan du site, fiche Google cohérente avec le site." },
  { title: "Mettre en ligne sans rien perdre", text: "Vos adresses de pages sont conservées. Quand une adresse change, une redirection permanente renvoie vos visiteurs et Google vers la bonne page." },
  { title: "Mesurer et améliorer", text: "Suivi des appels et des demandes, demandes d'avis auprès des clients satisfaits, campagnes si elles sont utiles, mises à jour. Vous gardez la décision à chaque étape." },
] as const;

export const commitments = [
  "La maquette est gratuite, privée et sans engagement.",
  "Nous ne promettons pas la « première place sur Google » : personne ne peut la garantir.",
  "Les avis ne sont jamais achetés, filtrés ni récompensés.",
  "Vos photos, vos avis et votre logo ne sont mis en ligne qu'avec votre accord.",
  "Vous recevez un devis personnalisé avant le début de tout travail.",
] as const;

export const homeFaqs: Faq[] = [
  { q: "Que fait une agence de marketing digital pour une entreprise du bâtiment ?", a: "Elle s'occupe de tout ce qui permet à vos clients de vous trouver et de vous contacter en ligne : site web, référencement local, fiche Google et avis, publicité, contenus et suivi des demandes. Atelier Truelle regroupe ces missions avec un seul interlocuteur, pour les plombiers, chauffagistes, électriciens, couvreurs et maçons." },
  { q: "Combien coûtent vos services ?", a: "Nous ne publions pas de tarif, parce que chaque entreprise a des besoins différents : un site, une fiche Google, une campagne, un suivi, ou l'ensemble. Après un premier échange et la maquette gratuite, vous recevez un devis personnalisé et clair avant le début de tout travail." },
  { q: "Que se passe-t-il si la maquette ne me plaît pas ?", a: "Rien. La maquette est offerte et sans engagement. Si elle ne vous convient pas, elle est supprimée et nous ne vous recontactons pas à ce sujet." },
  { q: "Vais-je perdre mon référencement actuel en changeant de site ?", a: "Non, c'est justement ce que nous évitons. Nous conservons vos adresses de pages et, quand une adresse doit changer, nous mettons en place une redirection permanente vers la nouvelle page." },
  { q: "Pouvez-vous me garantir la première place sur Google ?", a: "Non, et méfiez-vous de ceux qui le font. Nous travaillons ce qui dépend du site et de la fiche Google : vitesse, mobile, pages par métier, questions fréquentes et avis légitimes de vos clients." },
  { q: "Travaillez-vous uniquement avec des plombiers ?", a: "Nous commençons par les plombiers et les chauffagistes, que nous connaissons le mieux, et nous accompagnons aussi les électriciens, couvreurs, maçons et autres corps de métier du bâtiment." },
];

export const requestTypes = [
  { value: "maquette", label: "Je souhaite recevoir une maquette gratuite" },
  { value: "audit", label: "Je souhaite un point sur ma visibilité en ligne" },
  { value: "question", label: "J'ai une question sur vos services" },
  { value: "autre", label: "Autre demande" },
] as const;
