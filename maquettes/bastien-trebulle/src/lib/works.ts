/**
 * Les 20 réalisations du site actuel (page « Nos réalisations »). Le métier est celui des filtres du site (plomberie et
 * salle de bains, ou couverture). Les huit premières ont été relues page par page (contexte, intervention, maîtrise
 * d'œuvre) ; pour les douze autres, seuls le nom et le métier sont repris : le détail reste à récupérer auprès de l'entreprise.
 */
export type Work = {
  slug: string; // identifiant de la page sur le site actuel (sert aux photos)
  title: string;
  place: string;
  trade: "Plomberie et salle de bains" | "Couverture et zinguerie";
  type?: string;
  client?: string;
  context?: string;
  work?: string;
};

export const works: Work[] = [
  {
    slug: "quai-voltaire-notre-realisation",
    title: "Quai Voltaire",
    place: "Paris 7e",
    trade: "Couverture et zinguerie",
    type: "Restauration patrimoniale",
    client: "Chantier réalisé pour le compte du SDC, représenté par le Cabinet Immobilière Europe Sèvres, sous la maîtrise d'œuvre du Cabinet FERRE.",
    context: "Situé au cœur du 7e arrondissement, cet immeuble présentait des désordres de couverture et de zinguerie nécessitant une reprise soignée, compatible avec le tissu urbain dense du quartier. L'enjeu : sécuriser l'étanchéité, remplacer les éléments dégradés et restituer une finition digne du patrimoine parisien, sans perturber durablement la vie de l'immeuble.",
    work: "Après diagnostic photo et croquis côtés, nos couvreurs ont réalisé la restauration des parties courantes et des ouvrages de zinguerie dans le respect des règles de l'art. Chaque étape a fait l'objet d'un suivi documenté jusqu'à la réception des travaux.",
  },
  {
    slug: "hotel-opera-richepanse",
    title: "Hôtel Opéra Richepanse",
    place: "Paris 1er",
    trade: "Plomberie et salle de bains",
    type: "Rénovation salle de bain",
    client: "Chantier réalisé pour le compte de l'hôtel, sous la maîtrise d'œuvre du Cabinet VIDALENC.",
    context: "À l'Hôtel Opéra Richepanse, cette rénovation de plomberie a mobilisé tout le savoir-faire de nos équipes pour concilier exigence technique, finitions soignées et continuité d'exploitation. L'objectif : moderniser les installations, optimiser les réseaux et restituer un ensemble discret, fiable et raffiné, en parfaite harmonie avec l'esprit de l'établissement.",
    work: "Après diagnostic et relevés techniques, nos équipes ont mené la rénovation de cette salle de bain avec exigence, en accordant une attention particulière à la qualité des réseaux, aux finitions et à l'intégration dans l'environnement hôtelier. Le chantier a été suivi avec rigueur jusqu'à sa réception, dans le respect des contraintes d'exploitation et avec une discrétion absolue.",
  },
  {
    slug: "etoile-couverture",
    title: "Chantier Étoile, couverture",
    place: "Paris 16e",
    trade: "Couverture et zinguerie",
    type: "Restauration patrimoniale",
    client: "Chantier réalisé pour le compte du SDC, représenté par le Cabinet Saint Germain, sous la maîtrise d'œuvre du Cabinet CIMADEVILLA.",
    context: "Cet immeuble de l'Étoile nécessitait une reprise soignée de sa couverture et de sa zinguerie, afin de garantir l'étanchéité et de préserver l'harmonie de l'ensemble. L'intervention a permis de remplacer les éléments dégradés et de restituer une finition à la hauteur du lieu, dans le respect des occupants.",
    work: "Après diagnostic photo et relevés côtés, nos couvreurs ont assuré la restauration des parties courantes et des ouvrages de zinguerie avec rigueur, dans le respect des règles de l'art. Chaque étape a fait l'objet d'un suivi documenté jusqu'à la réception des travaux.",
  },
  {
    slug: "rue-de-luniversite",
    title: "Rue de l'Université",
    place: "Paris 7e",
    trade: "Couverture et zinguerie",
    type: "Restauration patrimoniale",
    client: "Chantier réalisé pour le compte du SDC, représenté par le Cabinet Fessart, sous la maîtrise d'œuvre d'Opera Diag.",
    context: "Rue de l'Université, dans le 7e arrondissement, cet immeuble nécessitait une reprise soignée de sa couverture et de sa zinguerie afin de préserver l'étanchéité et l'harmonie de l'ensemble. L'intervention a permis de remplacer les éléments dégradés et de restituer une finition fidèle au cadre parisien.",
    work: "Après diagnostic photo et croquis côtés, nos couvreurs ont réalisé la restauration des parties courantes et des ouvrages de zinguerie avec exigence, dans le respect des règles de l'art. Chaque étape a fait l'objet d'un suivi documenté jusqu'à la réception des travaux.",
  },
  {
    slug: "plomberie-etoile",
    title: "Chantier Étoile, plomberie",
    place: "Paris 16e",
    trade: "Plomberie et salle de bains",
    type: "Rénovation salle de bain",
    client: "Projet mené pour le compte d'un particulier : maîtrise d'œuvre assurée par AUREA Interiors.",
    context: "Dans un immeuble du 16e arrondissement de Paris, cette rénovation d'appartement a mobilisé tout le savoir-faire de nos équipes pour concilier exigence technique, finitions soignées et confort d'usage. L'objectif : moderniser les installations, optimiser les réseaux et restituer un ensemble cohérent, discret et raffiné, en parfaite harmonie avec l'esprit du lieu.",
    work: "Après diagnostic et prise de cotes, nos compagnons ont conduit la rénovation de cette salle de bain avec exigence, en veillant à la qualité des réseaux, aux finitions et à l'harmonie d'ensemble. Le chantier a été suivi à chaque étape jusqu'à sa réception, avec une attention particulière portée à la précision d'exécution.",
  },
  {
    slug: "rue-danton",
    title: "Rue Danton",
    place: "Levallois-Perret (92300)",
    trade: "Couverture et zinguerie",
    type: "Restauration patrimoniale",
    client: "Chantier réalisé pour le compte du SDC, représenté par le Cabinet Cazalière, sous la maîtrise d'œuvre du Cabinet CIMADEVILLA.",
    context: "Rue Danton, à Levallois-Perret, cet immeuble nécessitait une reprise soignée de sa couverture et de sa zinguerie, afin de préserver l'étanchéité et l'harmonie de l'ensemble. L'intervention a permis de remplacer les éléments dégradés et de restituer une finition fidèle au cadre de Levallois-Perret.",
    work: "Après diagnostic photo et croquis cotés, nos couvreurs ont réalisé la restauration des parties courantes et des ouvrages de zinguerie avec exigence, dans le respect des règles de l'art et de notre qualification Patrimoine Ancien. Chaque étape a fait l'objet d'un suivi documenté jusqu'à la réception des travaux.",
  },
  {
    slug: "quai-de-seine",
    title: "Quai de Seine",
    place: "Paris",
    trade: "Plomberie et salles de bains",
    type: "Rénovation salle de bain",
    client: "Chantier réalisé pour le compte d'un particulier, sous la maîtrise d'œuvre du Cabinet VIDALENC.",
    context: "Dans un appartement quai de Seine, cette rénovation a mobilisé tout le savoir-faire de nos équipes pour concilier exigence technique, finitions soignées et confort d'usage. L'objectif : moderniser les installations, optimiser les réseaux et restituer un ensemble fonctionnel, propre et durable, en harmonie avec le lieu.",
    work: "Après diagnostic et prise de cotes, nos compagnons ont conduit la rénovation de cette salle de bain avec exigence, en veillant à la qualité des réseaux, aux finitions et à l'harmonie d'ensemble. Le chantier a été suivi à chaque étape jusqu'à sa réception, avec une attention particulière portée à la précision d'exécution et au bon déroulé de l'intervention.",
  },
  {
    slug: "garancieres-notre-realisation",
    title: "Rue Garancière",
    place: "Paris 6e",
    trade: "Plomberie et salle de bains",
    type: "Rénovation salle de bain",
    client: "Chantier réalisé pour le compte d'un particulier, sous la maîtrise d'œuvre du Cabinet VIDALENC.",
    context: "Rue Garancière, cette rénovation d'appartement a mobilisé tout le savoir-faire de nos équipes pour concilier exigence technique, finitions soignées et confort d'usage. L'objectif : moderniser les installations, optimiser les réseaux et restituer un ensemble fonctionnel, propre et durable, en parfaite harmonie avec le lieu.",
    work: "Après diagnostic et prise de côtes, nos compagnons ont conduit la rénovation de cette salle de bain avec exigence, en veillant à la qualité des réseaux, aux finitions et à l'harmonie d'ensemble. Le chantier a été suivi à chaque étape jusqu'à sa réception, avec une attention particulière portée à la précision d'exécution.",
  },
  { slug: "rue-de-grenelle", title: "Rue de Grenelle", place: "Paris 7e", trade: "Plomberie et salle de bains" },
  { slug: "avenue-de-messine-notre-realisation", title: "Avenue de Messine", place: "Paris 8e", trade: "Plomberie et salle de bains" },
  { slug: "rue-conti", title: "Quai de Conti", place: "Paris 6e", trade: "Couverture et zinguerie" },
  { slug: "rue-saint-severin-notre-realisation", title: "Rue Saint-Séverin", place: "Paris 5e", trade: "Couverture et zinguerie" },
  { slug: "place-victor-hugo-notre-realisation", title: "Place Victor Hugo", place: "Paris 16e", trade: "Couverture et zinguerie" },
  { slug: "rue-des-saints-peres-notre-realisation", title: "Rue des Saints-Pères", place: "Paris", trade: "Couverture et zinguerie" },
  { slug: "rue-de-tournon-notre-realisation", title: "Rue de Tournon", place: "Paris", trade: "Couverture et zinguerie" },
  { slug: "rue-de-la-tour-notre-realisation", title: "Rue de la Tour", place: "Paris", trade: "Couverture et zinguerie" },
  { slug: "cathedrale-sainte-croix-de-paris-des-armeniens-notre-realisation", title: "Cathédrale Sainte-Croix de Paris des Arméniens", place: "Paris 3e", trade: "Couverture et zinguerie" },
  { slug: "avenue-pierre-1er-de-serbie", title: "Avenue Pierre 1er de Serbie", place: "Paris 16e", trade: "Couverture et zinguerie" },
  { slug: "rue-des-jeuneurs-notre-realisation", title: "Rue des Jeûneurs", place: "Paris 2e", trade: "Couverture et zinguerie" },
  { slug: "rue-des-halles-notre-realisation", title: "Rue des Halles", place: "Paris 1er", trade: "Couverture et zinguerie" },
];
