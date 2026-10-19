export const INDEXABLE = process.env.NEXT_PUBLIC_INDEXABLE === "true";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.entreprise-rousseau.fr"
).replace(/\/$/, "");

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export const LAST_UPDATED = "2026-10-19";

export const business = {
  name: "Entreprise Rousseau",
  legalName: "ENTREPRISE ROUSSEAU",
  tagline: "Plomberie, chauffage et salles de bains à Paris 14e",
  foundingYear: "1948",
  siren: "552 034 704",
  phoneDisplay: "01 46 61 88 55",
  phoneTel: "+33146618855",
  email: null as string | null,
  address: {
    street: "100 rue de la Tombe Issoire",
    postalCode: "75014",
    city: "Paris",
  },
  establishments: ["Bourg-la-Reine", "Châtillon"],
  googleReviewUrl: null as string | null,
  reviews: null as { rating: number; count: number } | null,
} as const;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${business.name} ${business.address.street} ${business.address.postalCode} ${business.address.city}`,
)}`;

export const services = [
  {
    id: "plomberie",
    title: "Plomberie et dépannage",
    text: "Fuites, canalisations, robinetterie, chauffe-eau, sanitaires : réparation et remplacement, en appartement comme en copropriété.",
    schemaName: "Plomberie et dépannage",
  },
  {
    id: "chauffage",
    title: "Chauffage et chaudières gaz",
    text: "Installation, dépannage et contrats d'entretien de chaudières gaz, pour garder une installation sûre et un hiver sans panne.",
    schemaName: "Chauffage et entretien de chaudières gaz",
  },
  {
    id: "salles-de-bains",
    title: "Salles de bains",
    text: "Aménagement complet : plomberie, sanitaires et finitions, du plan à la dernière vasque posée.",
    schemaName: "Aménagement de salles de bains",
  },
] as const;

export const steps = [
  {
    title: "Vous appelez",
    text: "Vous décrivez la situation, un interlocuteur vous répond directement.",
  },
  {
    title: "Nous évaluons",
    text: "Un technicien examine l'installation et vous explique les options possibles.",
  },
  {
    title: "Vous validez le devis",
    text: "Le prix est présenté et accepté avant le démarrage des travaux.",
  },
  {
    title: "Nous intervenons",
    text: "Les travaux sont réalisés, puis une facture détaillée vous est remise.",
  },
] as const;

export const reflexes = [
  "Fermez le robinet d'arrêt général de l'arrivée d'eau, généralement près du compteur.",
  "Coupez l'électricité si l'eau s'écoule près d'une prise, d'un tableau ou d'un appareil.",
  "Limitez les dégâts : épongez, protégez les meubles, placez un récipient sous la fuite.",
  "Photographiez les dégâts pour votre déclaration d'assurance.",
  "Appelez le plombier et décrivez l'emplacement de la fuite.",
] as const;

export const faq = [
  {
    q: "Quel plombier appeler en urgence à Paris 14e ?",
    a: `Pour une fuite d'eau ou une panne de chauffage à Paris 14e, appelez directement Entreprise Rousseau au ${business.phoneDisplay}. Une astreinte plomberie est assurée 7 jours sur 7. En attendant l'intervention, fermez l'arrivée d'eau au compteur et coupez l'électricité si l'eau approche d'un appareil.`,
  },
  {
    q: "Comment reconnaître une entreprise de plomberie fiable à Paris ?",
    a: `Vérifiez qu'elle affiche une adresse physique réelle, un numéro SIREN et qu'elle remet un devis avant les travaux. Entreprise Rousseau est installée au ${business.address.street}, ${business.address.postalCode} ${business.address.city}, et son numéro SIREN est le ${business.siren}.`,
  },
  {
    q: "Proposez-vous l'entretien de chaudière gaz ?",
    a: "Oui, des contrats d'entretien de chaudières gaz sont proposés. L'entretien annuel d'une chaudière gaz est obligatoire en France : il garantit la sécurité de l'installation et limite le risque de panne en plein hiver.",
  },
  {
    q: "Réalisez-vous la rénovation de salles de bains ?",
    a: "Oui. Entreprise Rousseau réalise l'aménagement de salles de bains, de la plomberie aux sanitaires, pour un appartement ou une maison.",
  },
  {
    q: "Dans quels secteurs intervenez-vous ?",
    a: `Entreprise Rousseau intervient à Paris, avec le 14e arrondissement comme point d'attache, et en proche banlieue sud : l'entreprise compte des établissements à ${business.establishments.join(" et ")}.`,
  },
] as const;

export const shortAnswer = `Entreprise Rousseau est une entreprise familiale de plomberie, chauffage et salles de bains installée rue de la Tombe Issoire, à Paris 14e, depuis ${business.foundingYear}. Elle intervient pour les dépannages, l'entretien de chaudières gaz et l'aménagement de salles de bains. Pour une urgence, appelez le ${business.phoneDisplay}.`;
