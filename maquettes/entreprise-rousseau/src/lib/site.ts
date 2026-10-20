export const INDEXABLE = process.env.NEXT_PUBLIC_INDEXABLE === "true";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.entreprise-rousseau.fr").replace(/\/$/, "");

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export const LAST_UPDATED = "2026-10-20";

export const business = {
  name: "Entreprise Rousseau",
  legalName: "ENTREPRISE ROUSSEAU",
  tagline: "Plomberie, chauffage et salles de bains à Paris 14e",
  siren: "552 034 704",
  phoneDisplay: "01 45 38 91 91",
  phoneTel: "+33145389191",
  email: "contact@entreprise-rousseau.fr",
  address: { street: "100 rue de la Tombe-Issoire", postalCode: "75014", city: "Paris" },
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

export const PATHS = {
  home: "/",
  bathrooms: "/salles-de-bains-douches",
  plumbing: "/nos-services-plomberie",
  heating: "/nos-services-chauffage",
  contact: "/nous-contacter-ou-envoyer-un-message-sur-formulaire",
} as const;

export const nav = [
  { href: PATHS.home, label: "Accueil" },
  { href: PATHS.bathrooms, label: "Salles de bains / douches" },
  { href: PATHS.plumbing, label: "Plomberie" },
  { href: PATHS.heating, label: "Chauffage" },
  { href: PATHS.contact, label: "Contact" },
] as const;

export const reviews = {
  rating: 4.4,
  ratingText: "4,4",
  count: 29,
  observed: "20 octobre 2026",
  quotes: [
    { author: "Aude D.", date: "septembre 2026", text: "Remplacement ancienne chaudière à gaz par une chaudière à condensation. Travail très professionnel avec les conseils qui conviennent." },
    { author: "Agnès T.", date: "juin 2026", text: "L’intervention a été réalisée en peu de temps, rapide et efficace, cela fonctionne très bien. Travail soigné à recommander." },
    { author: "Yves S.", date: "juin 2026", text: "Super travail. Prix très raisonnable. satisfaction +++" },
    { author: "Gilbert R.", date: "juin 2026", text: "Intervention de qualité professionnels sérieux et compétents de bons conseils chantier très bien conduit" },
    { author: "Béatrice B.", date: "avril 2025", text: "Extrêmement contente du travail et du suivi proposés par l'Entreprise Rousseau et ses collaborateurs. Une mention spéciale pour la discrétion et la gentillesse des professionnels qui sont intervenus sur place. Qualité de l'intervention au top." },
    { author: "Didier L.", date: "octobre 2024", text: "Toujours très satisfait des interventions de l'entreprise Rousseau. Accueil téléphonique très aimable, réactifs et équipe de plombiers très sympathiques" },
    { author: "Camille D.", date: "janvier 2024", text: "Excellent contact téléphonique, technicien très gentil et pédagogue, et aucune tentative de gonfler les prix" },
    { author: "Madeleine G.", date: "septembre 2023", text: "J'ai fait appel à l'entreprise Rousseau pour un changement de chauffe eau. Très bon accueil téléphonique, réactivité et professionnalisme sont au rendez-vous. Travail soigné et sérieux." },
  ],
} as const;

export const services = {
  plumbing: {
    path: PATHS.plumbing,
    title: "Plomberie",
    short: "Fuites, sanitaires, dépannages : pour les particuliers, les professionnels et les syndics.",
    photo: "plumbUrgence",
    items: [
      { name: "Urgences", photo: "plumbUrgence", text: "Une fuite d'eau, un engorgement ou tout problème d'eau : nous intervenons rapidement sur Paris ou la région parisienne pour vous faire bénéficier d'un dépannage urgent." },
      { name: "Remplacement de sanitaires", photo: "plumbSanitaires", text: "Installation ou remplacement d'appareils sanitaires (évier, lavabo, WC, chauffe-eau gaz ou électrique…) : vous pouvez compter sur notre expertise pour vous proposer un devis." },
      { name: "Dépannages", photo: "plumbDepannage", text: "Une gamme de services adaptés à vos besoins : réparation de robinetterie ou d'appareil sanitaire, remplacement de robinets d'arrêt, dépannage gaz…" },
    ],
  },
  heating: {
    path: PATHS.heating,
    title: "Chauffage",
    short: "Chaudières à condensation, entretien annuel, radiateurs et robinets thermostatiques.",
    photo: "heatReplace",
    items: [
      { name: "Remplacement de chaudières", photo: "heatReplace", text: "En remplaçant votre vieille chaudière par une chaudière à condensation, vous pouvez réaliser des économies d'énergie." },
      { name: "Entretien de chaudières", photo: "heatMaintain", text: "L'entretien de la chaudière gaz dans un logement doit être fait tous les ans : c'est obligatoire, que l'on soit propriétaire ou locataire." },
      { name: "Chauffage : travaux divers", photo: "heatWorks", text: "Remplacement de radiateurs de chauffage central, remplacement des robinets de radiateurs, mise en place de robinets thermostatiques…" },
    ],
  },
  bathrooms: {
    path: PATHS.bathrooms,
    title: "Salles de bains et douches",
    short: "Installation sur mesure, rénovation complète et conseils d'experts.",
    photo: "bathInstall",
    items: [
      { name: "Installation sur mesure", photo: "bathInstall", text: "Nous réalisons des installations personnalisées, du choix des matériaux à la mise en œuvre, pour une salle de bains ou une salle d'eau qui vous ressemble." },
      { name: "Rénovation complète", photo: "bathRenov", text: "Donnez une nouvelle vie à votre salle de bains avec nos services de rénovation, optimisant l'espace et le style selon vos désirs." },
      { name: "Conseils d'experts", photo: "bathAdvice", text: "Bénéficiez de nos conseils d'experts pour des solutions esthétiques et durables, adaptées à votre budget et à vos besoins." },
    ],
  },
} as const;

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

const rating = `${reviews.ratingText}/5`;

export const faqs = {
  home: [
    { q: "Quel plombier appeler en urgence à Paris 14e ?", a: `Pour une fuite d'eau, un engorgement ou une panne de chauffage à Paris 14e, appelez Entreprise Rousseau au ${business.phoneDisplay}. Le bureau répond ${business.hoursText.toLowerCase()} ; en dehors, une permanence téléphonique prend votre message. En attendant, fermez l'arrivée d'eau au compteur.` },
    { q: "Comment reconnaître une entreprise de plomberie fiable à Paris ?", a: `Vérifiez qu'elle affiche une adresse réelle, un numéro SIREN et qu'elle présente un devis avant les travaux. Entreprise Rousseau est installée au ${business.address.street}, ${business.address.postalCode} ${business.address.city}, son numéro SIREN est le ${business.siren} et ses clients la notent ${rating} sur Google (${reviews.count} avis).` },
    { q: "Travaillez-vous pour les copropriétés et les professionnels ?", a: "Oui. Entreprise Rousseau assure des services de plomberie pour les particuliers, les professionnels et les syndics de copropriété." },
    { q: "Dans quels secteurs intervenez-vous ?", a: `Entreprise Rousseau intervient à Paris et en région parisienne. Son entreprise sœur, ${sister.name}, est installée à ${sister.city} (${sister.postalCode}).` },
  ],
  plumbing: [
    { q: "Que faire en cas de fuite d'eau avant l'arrivée du plombier ?", a: "Fermez le robinet d'arrêt général, coupez l'électricité si l'eau approche d'une prise ou d'un appareil, épongez et protégez les meubles, photographiez les dégâts pour votre assurance, puis appelez un plombier en décrivant l'emplacement de la fuite." },
    { q: "Remplacez-vous les chauffe-eau gaz et électriques ?", a: "Oui. Entreprise Rousseau installe ou remplace les appareils sanitaires, dont les chauffe-eau gaz ou électriques, et propose un devis avant les travaux." },
    { q: "Intervenez-vous pour les syndics de copropriété ?", a: "Oui. Les services de plomberie s'adressent aux particuliers, aux professionnels et aux syndics de copropriété, sur Paris et en région parisienne." },
    { q: "Réparez-vous une robinetterie qui fuit ?", a: "Oui. Le dépannage comprend la réparation de robinetterie ou d'appareil sanitaire, le remplacement de robinets d'arrêt et le dépannage gaz." },
  ],
  heating: [
    { q: "L'entretien d'une chaudière gaz est-il obligatoire ?", a: "Oui. L'entretien annuel de toute chaudière d'une puissance comprise entre 4 et 400 kilowatts est obligatoire, pour les propriétaires comme pour les locataires. Souscrire un contrat d'entretien, en revanche, n'est pas obligatoire." },
    { q: "Pourquoi remplacer une vieille chaudière par une chaudière à condensation ?", a: "Les chaudières ont énormément évolué : plus performantes, moins gourmandes, plus fiables. Remplacer une chaudière vieillissante par une chaudière à condensation permet de réduire les consommations, d'alléger les factures et de limiter les émissions de CO₂." },
    { q: "Remplacez-vous les radiateurs et les robinets thermostatiques ?", a: "Oui. Les travaux de chauffage comprennent le remplacement de radiateurs de chauffage central, des robinets de radiateurs et la mise en place de robinets thermostatiques." },
  ],
  bathrooms: [
    { q: "Réalisez-vous des salles de bains complètes ?", a: "Oui. Entreprise Rousseau installe et rénove des salles de bains et des douches, de la conception à la réalisation, à Paris et en région parisienne." },
    { q: "Peut-on personnaliser sa salle de bains ?", a: "Oui. Les installations sont personnalisées, du choix des matériaux à la mise en œuvre, pour une salle de bains ou une salle d'eau qui vous ressemble." },
    { q: "Pouvez-vous conseiller selon mon budget ?", a: "Oui. Les conseils d'experts portent sur des solutions esthétiques et durables, adaptées à votre budget et à vos besoins, et un devis vous est proposé avant les travaux." },
  ],
} as const;

export const shortAnswer = `Entreprise Rousseau est une entreprise de plomberie, chauffage et salles de bains installée rue de la Tombe-Issoire, à Paris 14e. Depuis plus de 80 ans, elle intervient à Paris et en région parisienne pour les dépannages, les chaudières et les rénovations de salles de bains. Pour une urgence, appelez le ${business.phoneDisplay}.`;

export const requestTypes = [
  { value: "urgence", label: "Dépannage urgent (fuite, engorgement…)" },
  { value: "plomberie", label: "Plomberie (sanitaires, robinetterie, chauffe-eau)" },
  { value: "chauffage", label: "Chauffage (chaudière, radiateurs, entretien)" },
  { value: "salle-de-bains", label: "Salle de bains / douche (installation, rénovation)" },
  { value: "autre", label: "Autre demande" },
] as const;
