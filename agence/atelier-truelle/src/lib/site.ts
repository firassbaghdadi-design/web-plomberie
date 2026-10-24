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
  story: "/notre-histoire",
  services: "/services",
  trades: "/metiers",
  method: "/methode",
  contact: "/contact",
  legal: "/mentions-legales",
  privacy: "/confidentialite",
} as const;

export const nav = [
  { href: PATHS.story, label: "Notre histoire" },
  { href: PATHS.services, label: "Ce que nous faisons" },
  { href: PATHS.trades, label: "Métiers" },
  { href: PATHS.method, label: "Méthode" },
  { href: PATHS.contact, label: "Contact" },
] as const;

export const shortAnswer =
  "Atelier Truelle aide les artisans du bâtiment (plombiers, chauffagistes, électriciens, couvreurs, maçons) à être trouvés et appelés sur Internet : site web, référencement local, fiche Google et avis, publicité en ligne, suivi des demandes. Nous refaisons d'abord votre site en maquette privée gratuite. Vous regardez, puis vous décidez.";

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
    metaDescription: "Optimisation de votre fiche Google et collecte légitime d'avis après intervention pour les entreprises du bâtiment. Aucun avis n'est acheté, trié ni récompensé.",
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
    metaDescription: "Campagnes Google Ads et réseaux sociaux pour les entreprises du bâtiment : recherches ciblées, annonces, pages d'atterrissage et suivi des appels reçus.",
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
    metaDescription: "Suivi des appels, formulaires et demandes de devis pour les entreprises du bâtiment : savoir d'où viennent vos clients et ce qu'il faut améliorer chaque mois.",
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

export const steps = [
  { title: "On écoute, on regarde", text: "Avant de proposer quoi que ce soit, nous regardons votre site, votre fiche Google, vos avis, ce que font les autres artisans de votre secteur. Puis nous vous écoutons : ce que vous aimez dans votre métier, les chantiers que vous voudriez faire plus souvent.", photo: "telephone", note: "d'abord, on vous écoute" },
  { title: "On construit, sans rien vous demander", text: "Nous refaisons votre page d'accueil avec votre logo, vos couleurs, vos textes et vos photos. Vos adresses de pages restent les mêmes pour ne rien perdre sur Google. Vous recevez un lien privé que personne d'autre ne voit.", photo: "tablette", note: "puis on se met au travail" },
  { title: "Vous regardez, puis vous décidez", text: "Si ça vous plaît, nous en parlons et vous recevez un devis écrit avant que le moindre travail commence. Si ça ne vous plaît pas, nous supprimons la maquette et nous ne vous relançons pas.", photo: "mains", note: "et c'est vous qui choisissez" },
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
  "Nous ne promettons pas la première place sur Google. Personne ne peut la garantir.",
  "Nous n'achetons pas d'avis et nous ne les trions pas. Un avis se demande à un client satisfait, c'est tout.",
  "Nous ne publions rien (photo, avis, logo) sans votre accord.",
  "Vous recevez un devis écrit avant le début de tout travail. Ce qui est dans le devis est ce que vous payez.",
  "Votre site, votre nom de domaine, vos comptes et vos contenus restent à vous.",
  "La maquette est gratuite. Si elle ne vous plaît pas, nous la supprimons et nous ne vous relançons pas.",
] as const;

export const owned = ["Votre nom de domaine", "Votre fiche Google", "Vos comptes publicitaires", "Vos textes, vos photos et votre logo"] as const;

export const homeFaqs: Faq[] = [
  { q: "Comment savoir que vous n'êtes pas des arnaqueurs ?", a: "Vous avez raison de poser la question, beaucoup d'artisans ont déjà été démarchés par des vendeurs de « première place sur Google ». Voici ce qui vous protège : la maquette est gratuite et vous la voyez avant de payer quoi que ce soit, vous recevez un devis écrit avant le début de tout travail, et notre identité légale (nom, SIREN, adresse) figure dans les mentions légales : vous pouvez la vérifier sur l'annuaire officiel des entreprises." },
  { q: "Combien ça coûte ?", a: "Nous ne publions pas de tarif, parce qu'un site, une fiche Google, une campagne ou l'ensemble ne représentent pas le même travail. Après un premier échange et la maquette, vous recevez un devis écrit et clair. Vous n'avez rien à payer avant." },
  { q: "Que se passe-t-il si la maquette ne me plaît pas ?", a: "Rien. Elle est gratuite et sans engagement. Si elle ne vous convient pas, nous la supprimons et nous ne vous recontactons pas à ce sujet." },
  { q: "Vais-je perdre mon référencement actuel en changeant de site ?", a: "Non, c'est ce que nous évitons en priorité. Nous gardons vos adresses de pages et, quand une adresse doit changer, une redirection permanente envoie vos visiteurs et Google vers la bonne page." },
  { q: "Pouvez-vous me garantir la première place sur Google ?", a: "Non, et méfiez-vous de ceux qui le font. Nous travaillons ce qui dépend de votre site et de votre fiche Google : rapidité, affichage sur téléphone, pages par métier, questions fréquentes, avis de vos vrais clients." },
  { q: "Êtes-vous une grosse agence ?", a: "Non, nous sommes un atelier. Vous parlez à la même personne du début à la fin, qui connaît votre dossier et qui vous répond." },
];

export const requestTypes = [
  { value: "maquette", label: "Je souhaite recevoir une maquette gratuite" },
  { value: "audit", label: "Je souhaite un point sur ma visibilité en ligne" },
  { value: "question", label: "J'ai une question sur vos services" },
  { value: "autre", label: "Autre demande" },
] as const;
