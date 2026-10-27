import { PATHS, type Faq } from "./site";
import type { Page } from "./types";

/**
 * Pages du site actuel (martinet-thibault.com, relevé du 27 octobre 2026), mêmes adresses.
 * Les sections marquées `original` reprennent mot pour mot le texte de l'entreprise (fautes de frappe corrigées) ;
 * le reste est ajouté pour le référencement, sans chiffre, prix, délai ni certification inventés.
 */

export const home = {
  title: "Plombier couvreur Paris 10e depuis 1880 | Martinet Thibault",
  description:
    "Martinet Thibault Entreprise, plombier, chauffagiste et couvreur à Paris 10e depuis 1880 : canalisations, robinetterie, sanitaires, chauffage et toiture.",
  brief:
    "Martinet Thibault Entreprise est un plombier, chauffagiste et couvreur installé au 34, passage du Désir, à Paris 10e. Fondée en 1880 et transmise sur cinq générations, la maison intervient pour les particuliers, les professionnels et les immeubles : canalisations, robinetterie, sanitaires, chauffage, climatisation, couverture et dépannage.",
  faq: [
    {
      q: "Où se trouve Martinet Thibault Entreprise ?",
      a: "Au 34, passage du Désir, dans le 10e arrondissement de Paris, entre la gare de l'Est et le boulevard de Strasbourg. Le standard répond au 01 48 24 80 57 du lundi au vendredi, de 8 h à 12 h et de 13 h 30 à 17 h.",
    },
    {
      q: "Depuis quand l'entreprise existe-t-elle ?",
      a: "Depuis 1880 : Lucien Tournaire l'a créée dans le 10e arrondissement. Elle est passée ensuite à Henri Martinet en 1928, à Michel Martinet en 1967, à Patrick Thibault en 1996, puis à Mathieu Thibault en 2010, qui la dirige aujourd'hui.",
    },
    {
      q: "Que faire en cas d'urgence la nuit ou le week-end ?",
      a: "L'entreprise est membre du groupement CP24, qui réunit des entreprises parisiennes pour assurer une astreinte la nuit, le week-end et les jours fériés. Appelez d'abord le standard au 01 48 24 80 57 : il vous indiquera comment joindre l'astreinte.",
    },
    {
      q: "Intervenez-vous pour les syndics et les professionnels ?",
      a: "Oui. Le site de l'entreprise présente ses réalisations « pour particuliers et professionnels » : travaux neufs et d'entretien, dégorgements et dépannages. Pour un immeuble, précisez l'adresse, le lot concerné et la personne à contacter pour l'accès.",
    },
  ] as Faq[],
};

/** Les métiers tels que les présente la page « Services » du site actuel (texte d'origine). */
export const servicesOriginal = [
  { title: "Canalisations", text: "Des installations vous assurant qualité et longévité.", href: PATHS.plumbing },
  { title: "Robinetterie", text: "Une gamme mêlant design et performance.", href: PATHS.plumbing },
  {
    title: "Sanitaires",
    text: "Tous types pour salle de bains : lavabo, baignoire, douche, lave-mains, bidet. Tous types pour cuisine et annexe : évier, paillasse, bac, lave-vaisselle et lave-linge, etc.",
    href: PATHS.bathroom,
  },
  {
    title: "Installations complètes",
    text: "Service spécialisé pour la réfection complète de cuisine et salle de bains, tout corps d'état inclus (plomberie, électricité, maçonnerie, carrelage et peinture).",
    href: PATHS.bathroom,
  },
  {
    title: "Chauffage et climatisation",
    text: "Toute l'innovation disponible : chauffage domestique, industriel, tous locaux et salle de bains. Chauffage réversible en climatisation.",
    href: PATHS.heating,
  },
  { title: "Toiture", text: "Tous travaux de couverture, chéneaux, descentes d'eau pluviale et usée. Toitures et bardages.", href: PATHS.roofing },
] as const;

/** Partenaires tels que les présente la page « Partenaires » du site actuel (texte d'origine). */
export const partners = [
  { key: "logo-velux", name: "Velux", text: "Le leader mondial de la fenêtre de toit.", url: "https://www.velux.fr" },
  { key: "logo-qualibat", name: "Qualibat", text: "L'organisme de qualification et de certification des entreprises du bâtiment.", url: "https://www.qualibat.com" },
  { key: "logo-pgn", name: "PGN-PGP", text: "Les professionnels du gaz.", url: "https://www.lesprofessionnelsdugaz.com" },
  { key: "logo-villeroy", name: "Villeroy & Boch", text: "Arts de la table, salle de bains et wellness, carreaux.", url: "https://www.villeroy-boch.com" },
] as const;

const history: Page = {
  path: PATHS.history,
  title: "Historique : plombier à Paris 10e depuis 1880 | M.T.E.",
  description:
    "L'histoire de Martinet Thibault Entreprise, plombier et couvreur du 10e : fondée en 1880 par Lucien Tournaire, transmise sur cinq générations jusqu'à 2010.",
  h1: "Historique : une maison du 10e à Paris depuis 1880",
  kicker: "Historique · une entreprise séculaire",
  lead: "Cinq dirigeants en près d'un siècle et demi, une seule adresse de quartier : l'histoire d'une entreprise de plomberie et de couverture transmise de main en main.",
  brief:
    "Martinet Thibault Entreprise est née en 1880, quand Lucien Tournaire a créé son entreprise dans le 10e arrondissement de Paris. Elle a été transmise à Henri Martinet en 1928, à Michel Martinet en 1967, à Patrick Thibault en 1996, puis à Mathieu Thibault en 2010, qui la dirige aujourd'hui.",
  contactType: "plomberie",
  crumb: "Historique",
  photo: "couvreur",
  caption: "Sur les toits de Paris, le métier se transmet",
  gallery: ["historique", "realisation-01", "realisation-05"],
  facts: [
    { label: "Fondée en", value: "1880" },
    { label: "Générations", value: "Cinq" },
    { label: "Dirigeant", value: "M. Thibault" },
  ],
  sections: [
    {
      h2: "Historique : une entreprise séculaire",
      original: true,
      paras: [
        "En 1880, Lucien Tournaire créa l'entreprise à Paris dans le 10e arrondissement. Il exerça son activité jusqu'en 1928 puis céda son entreprise à son gendre, M. Henri Martinet.",
        "En 1967, Michel Martinet (fils d'Henri Martinet) reprit le flambeau pour le céder en 1996 à M. Patrick Thibault, alors chargé d'affaires dans l'entreprise.",
        "En 2010, Mathieu Thibault (fils de Patrick Thibault) reprend à son tour des mains de son père l'entreprise déjà séculaire depuis 1980.",
        "L'entreprise M.T.E. (Martinet-Thibault Entreprise) est très expérimentée. Elle est membre de la chambre syndicale de la couverture, plomberie et du génie climatique.",
        "La société M.T.E. est aussi membre d'un groupement de 14 entreprises sur Paris dénommé CP24, qui assure ainsi une astreinte de service d'urgence la nuit, les week-ends et les jours fériés. Cette continuité de services, réservée à l'ensemble de nos clients, est un gage supplémentaire de la qualité que nous souhaitons leur apporter, à leur plus grande satisfaction.",
      ],
    },
    {
      h2: "Qui dirige Martinet Thibault Entreprise aujourd'hui ?",
      answer:
        "Mathieu Thibault dirige l'entreprise depuis 2010 et reste personnellement chargé d'affaires pour la plomberie, au plus près des chantiers. Il a repris la maison des mains de son père, Patrick Thibault, lui-même entré comme chargé d'affaires avant de succéder à Michel Martinet en 1996.",
      paras: [
        "Ce mode de transmission explique une particularité de la maison : chaque dirigeant a d'abord connu l'entreprise de l'intérieur, comme gendre, comme fils ou comme collaborateur. Les clients d'un immeuble, d'une boutique ou d'un appartement du quartier retrouvent ainsi une continuité de méthode, de carnet d'adresses et de connaissance des bâtiments.",
        "Autour du dirigeant, l'organisation est celle que présente la page Contact : un standard, un service plomberie, un service couverture et un service comptabilité, chacun avec sa ligne directe.",
      ],
    },
    {
      h2: "Pourquoi le nom Martinet Thibault ?",
      answer:
        "Le nom réunit les deux familles qui ont tenu la maison au XXe siècle : les Martinet, de 1928 à 1996, puis les Thibault, depuis 1996. Le fondateur, Lucien Tournaire, avait cédé son entreprise à son gendre Henri Martinet, qui l'a ensuite transmise à son fils Michel.",
      paras: [
        "L'abréviation M.T.E., pour Martinet-Thibault Entreprise, figure dans les textes de la société. La structure actuelle, inscrite sous le SIRET 408 403 632 0006, correspond à la reprise de 1996 ; la maison, elle, remonte à 1880.",
      ],
    },
    {
      h2: "Que garantit l'astreinte du groupement CP24 ?",
      answer:
        "Le groupement CP24 réunit, selon l'entreprise, quatorze entreprises parisiennes qui assurent ensemble une astreinte d'urgence la nuit, le week-end et les jours fériés. Les clients de Martinet Thibault Entreprise bénéficient ainsi d'une continuité de service en dehors des heures d'ouverture du passage du Désir.",
      paras: [
        "En journée, du lundi au vendredi, le standard oriente chaque demande vers le service concerné. En dehors de ces horaires, la marche à suivre pour joindre l'astreinte est donnée par l'entreprise : le plus simple reste d'appeler le 01 48 24 80 57.",
      ],
    },
  ],
  faq: [
    {
      q: "En quelle année l'entreprise a-t-elle été fondée ?",
      a: "En 1880, par Lucien Tournaire, dans le 10e arrondissement de Paris. La société actuelle, Martinet-Thibault Entreprise, date de la reprise par Patrick Thibault en 1996.",
    },
    {
      q: "L'entreprise est-elle membre d'une organisation professionnelle ?",
      a: "Oui. Elle est membre de la chambre syndicale de la couverture, de la plomberie et du génie climatique, et du groupement parisien CP24 pour l'astreinte d'urgence.",
    },
    {
      q: "Qui contacter pour un chantier de plomberie ?",
      a: "Le service plomberie, M. Yvan Badjic, au 01 48 24 80 59, ou le standard au 01 48 24 80 57. Mathieu Thibault, dirigeant, est chargé d'affaires plomberie.",
    },
  ],
  ctaTitle: "Cinq générations au service du quartier.",
  ctaText: "Parlez de votre projet à la maison qui connaît les immeubles du 10e depuis 1880.",
  related: [PATHS.services, PATHS.works, PATHS.plumbing, PATHS.roofing],
};

const services: Page = {
  path: PATHS.services,
  title: "Services : plomberie, chauffage, toiture à Paris 10e | MTE",
  description:
    "Canalisations, robinetterie, sanitaires, cuisine et salle de bains, chauffage, climatisation et toiture : les services de Martinet Thibault à Paris 10e.",
  h1: "Services de plomberie, chauffage et toiture à Paris 10e",
  kicker: "Services · nos compétences",
  lead: "Du réseau d'eau caché dans les murs jusqu'au zinc du toit, une seule maison pour tout ce qui transporte, chauffe ou évacue l'eau dans un immeuble parisien.",
  brief:
    "Martinet Thibault Entreprise propose six familles de services à Paris 10e et alentour : canalisations, robinetterie, sanitaires de salle de bains et de cuisine, réfection complète tout corps d'état, chauffage et climatisation, et toiture avec chéneaux et descentes d'eau. Un service plomberie et un service couverture ont chacun leur ligne directe.",
  contactType: "plomberie",
  crumb: "Services",
  photo: "chaudiere",
  caption: "Chauffage : réglage d'une chaudière",
  gallery: ["services", "realisation-03", "realisation-08"],
  facts: [
    { label: "Métiers", value: "Six" },
    { label: "Services", value: "Eau et toit" },
    { label: "Certification", value: "Qualibat RGE" },
  ],
  sections: [
    {
      h2: "Quels travaux confier à Martinet Thibault Entreprise ?",
      answer:
        "Tout ce qui concerne l'eau et le toit d'un logement ou d'un immeuble : création et remplacement de canalisations, robinetterie, sanitaires, réfection complète de cuisine ou de salle de bains, chauffage et climatisation, couverture, chéneaux et descentes d'eau pluviale et usée.",
      paras: [
        "Le texte d'origine de l'entreprise, repris ci-dessous métier par métier, présente ces compétences « pour particuliers et professionnels ». Les travaux neufs comme l'entretien sont concernés, tout comme les dégorgements et les dépannages.",
      ],
    },
    {
      h2: "Une réfection complète inclut-elle les autres corps d'état ?",
      answer:
        "Oui. Pour la cuisine et la salle de bains, l'entreprise présente un service spécialisé de réfection complète, tout corps d'état inclus : plomberie, électricité, maçonnerie, carrelage et peinture. Vous n'avez qu'un interlocuteur pour coordonner l'ensemble du chantier, de la dépose à la finition.",
      paras: [
        "Ce point compte dans un appartement ancien, où l'ouverture d'une cloison ou d'un plancher révèle souvent des réseaux à reprendre. Un seul chargé d'affaires suit alors l'ensemble, plutôt que plusieurs artisans qui se succèdent sans se parler.",
      ],
    },
    {
      h2: "Quelles qualifications l'entreprise affiche-t-elle ?",
      answer:
        "Sous le titre « Qualité et certification », la page Services du site actuel présente deux logos : Qualibat RGE et Qualigaz. L'entreprise est aussi membre de la chambre syndicale de la couverture, de la plomberie et du génie climatique. Les numéros de certificat sont à demander à l'entreprise.",
    },
  ],
  faq: [
    {
      q: "L'entreprise s'occupe-t-elle aussi de la climatisation ?",
      a: "Oui. La page Services mentionne le chauffage réversible en climatisation, ainsi que le chauffage domestique, industriel, de tous locaux et de salle de bains.",
    },
    {
      q: "Peut-on confier un dégorgement à Martinet Thibault ?",
      a: "Oui. Les dégorgements et les dépannages font partie des travaux présentés par l'entreprise, aux côtés des travaux neufs et d'entretien.",
    },
    {
      q: "La couverture est-elle traitée par une équipe dédiée ?",
      a: "Oui. Le service couverture a sa propre ligne : M. Olivier Moulin, au 01 48 24 80 60. Il traite la toiture, les chéneaux, les descentes d'eau et les bardages.",
    },
  ],
  ctaTitle: "Pour profiter de notre savoir-faire et de nos conseils, contactez-nous.",
  ctaText: "Décrivez votre besoin : le bon service vous rappelle aux heures d'ouverture.",
  related: [PATHS.plumbing, PATHS.heating, PATHS.roofing, PATHS.bathroom, PATHS.emergency],
};

const works: Page = {
  path: PATHS.works,
  title: "Réalisations de plomberie et couverture à Paris 10e | MTE",
  description:
    "Cuisines, douches, salles de bains, plomberie générale, chauffage, climatisation, couverture et chéneaux : les réalisations de Martinet Thibault à Paris 10e.",
  h1: "Réalisations de plomberie et de couverture à Paris 10e",
  kicker: "Réalisations · en images",
  lead: "Les photos publiées par l'entreprise elle-même, sans retouche ni mise en scène : des chantiers réels, menés pour des particuliers et des professionnels.",
  brief:
    "Cette page réunit les neuf photos de chantiers publiées par Martinet Thibault Entreprise sur son site. Elles illustrent ses réalisations pour particuliers et professionnels à Paris : cuisines, douches, salles de bains, plomberie générale, chauffage et climatisation, couverture et chéneaux, travaux neufs et d'entretien, dégorgements et dépannages.",
  contactType: "plomberie",
  crumb: "Réalisations",
  photo: "toiture",
  facts: [
    { label: "Photos", value: "Neuf" },
    { label: "Clients", value: "Particuliers, pros" },
    { label: "Travaux", value: "Neuf et entretien" },
  ],
  sections: [
    {
      h2: "Exemples de réalisations",
      original: true,
      paras: [
        "Découvrez nos réalisations en images pour particuliers & professionnels : cuisine, douche, salle de bains, plomberie générale, chauffage et climatisation, couverture et chéneaux. Travaux neufs et d'entretien ; dégorgements et dépannages.",
      ],
    },
    {
      h2: "Que montrent les photos de réalisations ?",
      answer:
        "Ce sont les photos publiées par l'entreprise sur son propre site, présentées ici sans recadrage trompeur ni agrandissement. Elles témoignent de chantiers réels menés par les équipes de plomberie et de couverture ; leur légende détaillée, lieu et type de travaux, reste à compléter avec l'entreprise.",
      paras: [
        "Nous avons volontairement gardé leur petit format d'origine : une photo de chantier honnête vaut mieux qu'une image de banque d'images. Pour un projet comparable au vôtre, le plus simple est de demander à l'entreprise des références dans un immeuble du même type.",
      ],
    },
    {
      h2: "Comment préparer un projet semblable ?",
      answer:
        "Réunissez quelques photos de l'existant, les dimensions de la pièce, l'étage et les contraintes d'accès de l'immeuble, puis envoyez-les par le formulaire de contact. Le service concerné, plomberie ou couverture, pourra préparer une visite et un devis à partir d'éléments concrets.",
      steps: [
        { t: "Photographier l'existant", d: "La pièce entière, les arrivées et évacuations visibles, la chaudière ou le toit concerné." },
        { t: "Noter les contraintes", d: "Étage, ascenseur, accès au toit, horaires imposés par la copropriété ou le syndic." },
        { t: "Envoyer la demande", d: "Par le formulaire, avec quatre photos au plus, ou en appelant le standard." },
        { t: "Préparer la visite", d: "Le chargé d'affaires vient voir sur place avant d'établir le devis." },
      ],
    },
  ],
  faq: [
    {
      q: "Les photos de réalisations sont-elles celles de l'entreprise ?",
      a: "Oui. Les neuf photos de la galerie sont celles que Martinet Thibault Entreprise publie sur son propre site ; elles sont téléchargées depuis ce site.",
    },
    {
      q: "Peut-on visiter un chantier de référence ?",
      a: "C'est à voir directement avec l'entreprise, selon l'accord des clients concernés. Demandez des références lors de votre premier échange.",
    },
    {
      q: "L'entreprise travaille-t-elle pour les commerces ?",
      a: "Oui : ses réalisations sont présentées pour particuliers et professionnels, en travaux neufs comme en entretien.",
    },
  ],
  ctaTitle: "Votre chantier pourrait être le prochain.",
  ctaText: "Envoyez quelques photos de l'existant : c'est le meilleur point de départ.",
  related: [PATHS.bathroom, PATHS.plumbing, PATHS.roofing],
};

const partnersPage: Page = {
  path: PATHS.partners,
  title: "Partenaires : Velux, Qualibat, PGN, Villeroy & Boch | Paris",
  description:
    "Les partenaires de Martinet Thibault Entreprise, plombier couvreur à Paris 10e : Velux, Qualibat, les professionnels du gaz PGN-PGP et Villeroy & Boch.",
  h1: "Nos partenaires, plombier et couvreur à Paris 10e",
  kicker: "Partenaires · marques et organismes",
  lead: "Des fenêtres de toit aux sanitaires, en passant par la qualification et le gaz : les marques et les organismes avec lesquels la maison travaille.",
  brief:
    "Martinet Thibault Entreprise présente quatre partenaires sur son site : Velux pour les fenêtres de toit, Qualibat pour la qualification des entreprises du bâtiment, PGN-PGP pour les professionnels du gaz, et Villeroy & Boch pour la salle de bains et les carreaux. Ils couvrent la toiture, le gaz et les sanitaires.",
  contactType: "renovation",
  crumb: "Partenaires",
  photo: "salle-de-bains",
  facts: [
    { label: "Partenaires", value: "Quatre" },
    { label: "Toiture", value: "Velux" },
    { label: "Sanitaires", value: "Villeroy & Boch" },
  ],
  sections: [
    {
      h2: "À quoi servent ces partenariats ?",
      answer:
        "Ils correspondent aux trois grands domaines de la maison : la toiture, avec les fenêtres de toit Velux ; le gaz, avec le réseau des professionnels du gaz ; la salle de bains, avec les sanitaires et carreaux Villeroy & Boch. Qualibat, enfin, qualifie et certifie les entreprises du bâtiment.",
      paras: [
        "Pour un client, l'intérêt est simple : l'entreprise connaît les gammes et les règles de pose des produits qu'elle installe. Le choix final des équipements se fait toujours avec vous, sur devis.",
      ],
    },
    {
      h2: "Qu'est-ce que Qualibat et Qualigaz ?",
      answer:
        "Qualibat est l'organisme de qualification et de certification des entreprises du bâtiment ; la mention RGE signale une qualification pour les travaux de rénovation énergétique. Qualigaz est un organisme de contrôle des installations de gaz. L'entreprise affiche leurs logos ; les certificats précis sont à lui demander.",
    },
  ],
  faq: [
    {
      q: "L'entreprise pose-t-elle des fenêtres de toit ?",
      a: "Velux figure parmi ses partenaires et la couverture fait partie de ses métiers. Pour une fenêtre de toit, contactez le service couverture au 01 48 24 80 60.",
    },
    {
      q: "Puis-je choisir une autre marque de sanitaires ?",
      a: "Oui, le choix des équipements se fait avec vous au moment du devis. Les partenaires présentés sont les marques avec lesquelles la maison a l'habitude de travailler.",
    },
    {
      q: "Que signifie PGN-PGP ?",
      a: "Ce sont les appellations des professionnels du gaz, présentés par l'entreprise comme « les professionnels du gaz » sur sa page Partenaires.",
    },
  ],
  ctaTitle: "Les bons produits, posés dans les règles.",
  ctaText: "Parlez-nous de votre projet de salle de bains, de toiture ou de chauffage.",
  related: [PATHS.services, PATHS.roofing, PATHS.bathroom],
};

export const originalPages: Page[] = [history, services, works, partnersPage];
