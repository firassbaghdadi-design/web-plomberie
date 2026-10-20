export const INDEXABLE = process.env.NEXT_PUBLIC_INDEXABLE === "true";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.entreprise-rousseau.fr"
).replace(/\/$/, "");

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export const LAST_UPDATED = "2026-10-20";

const CDN = "https://primary.jwwb.nl/public/r/g/g/temp-evvbcsehnfqopbccznvb/";

export const images = {
  logo: `${CDN}logo-rousseau-high-tj2kby.png?enable-io=true&enable=upscale&height=120`,
  storefront: `${CDN}devanture-rousseau-standard-9sy9z4.jpg?enable-io=true&enable=upscale&width=900`,
  bathrooms: [
    { src: `${CDN}salle-de-douche-high.jpg?enable-io=true&enable=upscale&crop=1.3333%3A1&width=800`, alt: "Salle de douche" },
    { src: `${CDN}salle-de-bains-high-r14owh.jpg?enable-io=true&enable=upscale&crop=1.3333%3A1&width=800`, alt: "Salle de bains" },
    { src: `${CDN}sb-high.jpg?enable-io=true&enable=upscale&crop=1.3333%3A1&width=800`, alt: "Salle de bains rénovée" },
  ],
} as const;

export const business = {
  name: "Entreprise Rousseau",
  legalName: "ENTREPRISE ROUSSEAU",
  tagline: "Plomberie, chauffage et salles de bains à Paris 14e",
  siren: "552 034 704",
  phoneDisplay: "01 45 38 91 91",
  phoneTel: "+33145389191",
  email: "contact@entreprise-rousseau.fr",
  address: {
    street: "100 rue de la Tombe-Issoire",
    postalCode: "75014",
    city: "Paris",
  },
  geo: { lat: 48.826489, lng: 2.331753 },
  hours: [
    { opens: "08:00", closes: "12:00" },
    { opens: "13:30", closes: "16:30" },
  ],
  hoursText: "Du lundi au vendredi, de 8h00 à 12h00 et de 13h30 à 16h30",
  mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJ-2PQeU1x5kcRkkh5OSrcqlI",
  reviewUrl: "https://search.google.com/local/writereview?placeid=ChIJ-2PQeU1x5kcRkkh5OSrcqlI",
} as const;

export const sister = {
  name: "Sandrin-Rousseau",
  street: "116 avenue du Général Leclerc",
  postalCode: "92340",
  city: "Bourg-la-Reine",
  phoneDisplay: "01 46 61 88 55",
  phoneTel: "+33146618855",
  email: "contact@sandrin.fr",
  hoursText: "Mercredi de 8h00 à 12h00, du mardi au vendredi de 15h00 à 17h00",
} as const;

export const googleReviews = {
  rating: 4.4,
  count: 29,
  observed: "20 octobre 2026",
  quotes: [
    {
      author: "Aude D.",
      date: "septembre 2026",
      text: "Remplacement ancienne chaudière à gaz par une chaudière à condensation. Travail très professionnel avec les conseils qui conviennent.",
    },
    {
      author: "Agnès T.",
      date: "juin 2026",
      text: "L’intervention a été réalisée en peu de temps, rapide et efficace, cela fonctionne très bien. Travail soigné à recommander.",
    },
    {
      author: "Camille D.",
      date: "janvier 2024",
      text: "Excellent contact téléphonique, technicien très gentil et pédagogue, et aucune tentative de gonfler les prix",
    },
  ],
} as const;

export const services = [
  {
    id: "plomberie",
    title: "Plomberie",
    intro: "Pour les particuliers, les professionnels et les syndics de copropriété.",
    items: [
      { name: "Urgences", text: "Fuite d'eau, engorgement ou tout problème d'eau : intervention rapide sur Paris et la région parisienne." },
      { name: "Remplacement de sanitaires", text: "Évier, lavabo, WC, chauffe-eau gaz ou électrique : installation ou remplacement, sur devis." },
      { name: "Dépannages", text: "Réparation de robinetterie ou d'appareil sanitaire, remplacement de robinets d'arrêt, dépannage gaz." },
    ],
    schemaName: "Plomberie et dépannage",
  },
  {
    id: "chauffage",
    title: "Chauffage",
    intro: "Des chaudières plus performantes et plus sobres : remplacer une chaudière ancienne est un bon investissement.",
    items: [
      { name: "Remplacement de chaudières", text: "Une chaudière à condensation permet de réaliser des économies d'énergie." },
      { name: "Entretien de chaudières", text: "L'entretien annuel d'une chaudière gaz est obligatoire, pour les propriétaires comme pour les locataires." },
      { name: "Travaux divers", text: "Remplacement de radiateurs de chauffage central et de robinets de radiateurs, pose de robinets thermostatiques." },
    ],
    schemaName: "Chauffage et chaudières",
  },
  {
    id: "salles-de-bains",
    title: "Salles de bains et douches",
    intro: "Installation et rénovation de salles de bains et de douches à Paris et en région parisienne.",
    items: [
      { name: "Installation sur mesure", text: "Du choix des matériaux à la mise en œuvre, une salle de bains ou une salle d'eau qui vous ressemble." },
      { name: "Rénovation complète", text: "Une nouvelle vie pour votre salle de bains, en optimisant l'espace et le style selon vos envies." },
      { name: "Conseils d'experts", text: "Des solutions esthétiques et durables, adaptées à votre budget et à vos besoins." },
    ],
    schemaName: "Aménagement de salles de bains",
  },
] as const;

export const steps = [
  { title: "Vous appelez", text: "Vous décrivez la situation, un interlocuteur vous répond directement." },
  { title: "Nous évaluons", text: "Un technicien examine l'installation et vous explique les options possibles." },
  { title: "Vous validez le devis", text: "Le prix est présenté et accepté avant le démarrage des travaux." },
  { title: "Nous intervenons", text: "Les travaux sont réalisés, puis une facture détaillée vous est remise." },
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
    a: `Pour une fuite d'eau, un engorgement ou une panne de chauffage à Paris 14e, appelez Entreprise Rousseau au ${business.phoneDisplay}. Le bureau répond ${business.hoursText.toLowerCase()} ; en dehors, une permanence téléphonique prend votre message. En attendant, fermez l'arrivée d'eau au compteur.`,
  },
  {
    q: "Comment reconnaître une entreprise de plomberie fiable à Paris ?",
    a: `Vérifiez qu'elle affiche une adresse réelle, un numéro SIREN et qu'elle présente un devis avant les travaux. Entreprise Rousseau est installée au ${business.address.street}, ${business.address.postalCode} ${business.address.city}, son numéro SIREN est le ${business.siren} et ses clients la notent ${googleReviews.rating.toString().replace(".", ",")}/5 sur Google (${googleReviews.count} avis).`,
  },
  {
    q: "L'entretien d'une chaudière gaz est-il obligatoire ?",
    a: "Oui. L'entretien annuel de toute chaudière d'une puissance comprise entre 4 et 400 kilowatts est obligatoire, pour les propriétaires comme pour les locataires. Souscrire un contrat d'entretien, en revanche, n'est pas obligatoire.",
  },
  {
    q: "Réalisez-vous des salles de bains complètes ?",
    a: "Oui. Entreprise Rousseau installe et rénove des salles de bains et des douches : installation sur mesure, rénovation complète et conseils pour des solutions durables adaptées à votre budget.",
  },
  {
    q: "Travaillez-vous pour les copropriétés et les professionnels ?",
    a: "Oui. Entreprise Rousseau assure des services de plomberie pour les particuliers, les professionnels et les syndics de copropriété.",
  },
  {
    q: "Dans quels secteurs intervenez-vous ?",
    a: `Entreprise Rousseau intervient à Paris et en région parisienne. Son entreprise sœur, ${sister.name}, est installée à ${sister.city} (${sister.postalCode}).`,
  },
] as const;

export const shortAnswer = `Entreprise Rousseau est une entreprise de plomberie, chauffage et salles de bains installée rue de la Tombe-Issoire, à Paris 14e. Depuis plus de 80 ans, elle intervient à Paris et en région parisienne pour les dépannages, les chaudières et les rénovations de salles de bains. Pour une urgence, appelez le ${business.phoneDisplay}.`;
