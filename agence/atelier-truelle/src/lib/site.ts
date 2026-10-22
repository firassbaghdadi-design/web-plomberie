import { legal } from "./legal";

export const INDEXABLE = process.env.NEXT_PUBLIC_INDEXABLE === "true";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ateliertruelle.fr").replace(/\/$/, "");
export const LAST_UPDATED = "2026-10-22";

export const agency = {
  name: "Atelier Truelle",
  tagline: "Sites web pour plombiers et artisans du bâtiment",
  email: (process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "").trim() || "contact@ateliertruelle.fr",
  phoneDisplay: (process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "").trim(),
  phoneTel: (process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "").replace(/[^\d+]/g, ""),
  area: "Île-de-France",
  legalName: legal.name || "Atelier Truelle",
} as const;

export const PATHS = {
  home: "/",
  method: "/methode",
  offers: "/offres",
  contact: "/contact",
  legal: "/mentions-legales",
  privacy: "/confidentialite",
} as const;

export const nav = [
  { href: PATHS.home, label: "Accueil" },
  { href: PATHS.method, label: "Méthode" },
  { href: PATHS.offers, label: "Offres" },
  { href: PATHS.contact, label: "Contact" },
] as const;

export const shortAnswer =
  "Atelier Truelle est une agence web qui refait les sites des plombiers, chauffagistes et autres artisans du bâtiment. Nous reprenons votre logo, vos couleurs et vos adresses de pages, nous modernisons le reste (mobile, vitesse, référencement local) et nous vous montrons une maquette privée, gratuite et sans engagement avant tout devis.";

export const problems = [
  { title: "Illisible sur téléphone", text: "Vos clients cherchent un plombier depuis leur mobile. Un site qu'il faut agrandir avec les doigts les fait repartir chez un concurrent." },
  { title: "Invisible dans Google", text: "Titre de page réduit au nom de l'entreprise, pas de description, aucune page par métier ou par ville : Google n'a rien à montrer." },
  { title: "Sans bouton d'appel ni avis", text: "Le numéro est noyé dans un bas de page et vos avis clients, souvent excellents, restent cachés sur Google au lieu de rassurer sur votre site." },
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
  { title: "Maquette gratuite et privée", text: "Nous préparons votre page d'accueil avec votre logo et vos couleurs. Vous la découvrez par un lien privé, jamais publié ni référencé." },
  { title: "Vous décidez", text: "Elle vous plaît : nous vous remettons un devis clair. Elle ne vous plaît pas : elle est supprimée et nous en restons là." },
  { title: "Mise en ligne sans perte", text: "Nous reprenons vos contenus et gardons vos adresses de pages, avec les redirections nécessaires pour ne pas perdre votre référencement." },
  { title: "Suivi", text: "Fiche Google, demandes d'avis auprès de vos clients satisfaits, petites modifications et maintenance, si vous le souhaitez." },
] as const;

export const offers = [
  {
    key: "refonte",
    name: "Refonte du site",
    price: "À partir de 1 200 €",
    note: "Prix de départ selon le nombre de pages",
    lead: "Un site neuf, à votre image, qui garde vos adresses de pages.",
    items: ["Design unique basé sur votre charte actuelle", "Reprise de vos contenus et photos", "Conservation des adresses de pages (301 si besoin)", "Performance, mobile, accessibilité, référencement technique", "Hébergement et mise en ligne inclus"],
  },
  {
    key: "google",
    name: "Refonte + fiche Google",
    price: "À partir de 1 600 €",
    note: "La refonte, plus 400 à 800 € de travail sur Google",
    lead: "Le site, et la présentation de votre entreprise là où vos clients vous cherchent.",
    featured: true,
    items: ["Tout ce que contient la refonte", "Audit et optimisation de votre fiche Google (catégories, horaires, photos, zone)", "Demande d'avis après intervention, par SMS ou QR code", "Aucun avis acheté ni récompensé : c'est interdit et nous ne le faisons pas"],
  },
  {
    key: "suivi",
    name: "Abonnement de suivi",
    price: "79 à 149 € par mois",
    note: "Selon le niveau de service",
    lead: "Un site qui reste à jour et un référencement qui progresse.",
    items: ["Maintenance, sauvegardes et sécurité", "Référencement local suivi dans le temps", "Relance de la collecte d'avis", "Petites modifications de contenu (horaires, prestations)"],
  },
] as const;

export const method = [
  { title: "1. Regarder ce qui existe", text: "Votre fiche Google, votre site actuel, vos adresses de pages et vos avis. Nous notons trois choses concrètes à améliorer et ce qui fonctionne déjà." },
  { title: "2. Préparer une maquette privée", text: "Nous reprenons votre logo, vos couleurs, vos polices et votre ton. La maquette est accessible par un lien non référencé, qui reste privé." },
  { title: "3. Récupérer vos contenus", text: "Vos textes, vos services, vos horaires, vos photos de chantier. Nous n'inventons ni prix, ni certification, ni chiffre : tout ce qui est affiché vient de vous ou d'une source vérifiable." },
  { title: "4. Construire pour le téléphone d'abord", text: "Bouton d'appel visible en permanence, pages légères, texte lisible, navigation au pouce. Nous mesurons la vitesse et l'accessibilité avant la livraison et visons au moins 90 sur 100 aux tests Lighthouse sur mobile." },
  { title: "5. Se faire trouver", text: "Titre et description soignés pour chaque page, questions fréquentes, données structurées pour Google et pour les assistants d'IA, fichier sitemap, fiche Google cohérente avec le site." },
  { title: "6. Mettre en ligne sans rien perdre", text: "Vos adresses de pages sont conservées. Quand une adresse change, une redirection permanente (301) renvoie vos visiteurs et Google vers la bonne page." },
  { title: "7. Suivre dans le temps", text: "Demande d'avis auprès des clients satisfaits, mises à jour, sauvegardes, petites évolutions. Vous choisissez le niveau de suivi." },
] as const;

export const commitments = [
  "La maquette est gratuite, privée et sans engagement.",
  "Nous ne promettons pas la « première place sur Google » : personne ne peut la garantir.",
  "Les avis ne sont jamais achetés, filtrés ni récompensés.",
  "Vos photos, vos avis et votre logo ne sont mis en ligne qu'avec votre accord.",
  "Le devis annonce le prix avant le début du travail.",
] as const;

export const faqs = [
  { q: "Combien coûte la refonte du site d'une entreprise de plomberie ?", a: "La refonte commence à 1 200 €, selon le nombre de pages et la complexité de votre charte. Avec le travail sur votre fiche Google, comptez à partir de 1 600 €. Le suivi mensuel va de 79 à 149 € par mois. Ces prix sont des points de départ : le devis, gratuit, précise le montant exact et la TVA applicable." },
  { q: "Que se passe-t-il si la maquette ne me plaît pas ?", a: "Rien. La maquette est offerte et sans engagement. Si elle ne vous convient pas, elle est supprimée et nous ne vous recontactons pas à ce sujet." },
  { q: "Vais-je perdre mon référencement actuel en changeant de site ?", a: "Non, c'est justement ce que nous évitons. Nous conservons vos adresses de pages et, quand une adresse doit changer, nous mettons en place une redirection permanente (301) vers la nouvelle page." },
  { q: "Utilisez-vous mes textes et mes photos ?", a: "Oui. Nous reprenons vos contenus et vos photos de chantier, avec votre logo et vos couleurs. Nous n'ajoutons ni prix, ni certification, ni chiffre que vous ne nous avez pas confirmés." },
  { q: "Pouvez-vous me garantir la première place sur Google ?", a: "Non, et méfiez-vous de ceux qui le font. Nous travaillons ce qui dépend du site et de la fiche Google : vitesse, mobile, pages par métier, questions fréquentes et avis légitimes de vos clients." },
  { q: "Travaillez-vous pour d'autres métiers que la plomberie ?", a: "Nous commençons par les plombiers et les chauffagistes, que nous connaissons le mieux. Nous étudions aussi les demandes des autres artisans du bâtiment : électriciens, couvreurs, serruriers." },
] as const;

export const requestTypes = [
  { value: "maquette", label: "Je souhaite recevoir une maquette gratuite" },
  { value: "question", label: "J'ai une question sur vos offres" },
  { value: "autre", label: "Autre demande" },
] as const;
