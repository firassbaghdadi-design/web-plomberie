import { PATHS } from "./site";
import type { Page } from "./types";

/**
 * Pages plombier × zone voisine du 16e : 8e, 17e, 7e, 15e et Levallois-Perret.
 * Chaque page part d'un angle propre (type d'immeuble, chantier réel de la galerie, question locale).
 * Repères de quartier institutionnels et géographiques, à faire relire par un habitant. Aucun prix, délai garanti
 * ni chiffre inventé : seuls les faits du site actuel de l'entreprise sont repris.
 */
export const localPages: Page[] = [
  {
    path: "/plombier-paris-8",
    zone: "Paris 8e",
    title: "Plombier Paris 8e : immeubles et hôtels particuliers",
    description:
      "Plombier à Paris 8e pour les immeubles haussmanniens et les hôtels particuliers : salles de bains, colonnes, chauffe-eau et dépannage 24h/24 depuis le 16e.",
    h1: "Plombier à Paris 8e, entre Étoile et Madeleine",
    kicker: "Plomberie · Paris 8e",
    lead: "Des appartements d'avenue Foch aux immeubles de la plaine Monceau : une maison voisine, du 16e, pour la plomberie des beaux immeubles.",
    brief:
      "Plombier à Paris 8e, Bastien & Trebulle intervient depuis le 16e, de l'autre côté de l'Étoile, dans les immeubles haussmanniens et les hôtels particuliers : salles de bains, colonnes, chauffe-eau, robinetterie. L'entreprise a réalisé un chantier avenue de Messine et assure un dépannage d'urgence 24h/24 en région parisienne.",
    contactType: "plomberie",
    service: "Plomberie",
    crumb: "Plombier Paris 8e",
    photo: { theme: "plomberie", n: 4 },
    caption: "Plomberie d'un appartement des beaux quartiers",
    approach: "Le 8e commence de l'autre côté de la place de l'Étoile : depuis la rue Gros, l'équipe y est en quelques stations ou quelques minutes de route.",
    facts: [{ label: "Voisin du", value: "16e" }, { label: "Chantier", value: "Av. de Messine" }, { label: "Urgence", value: "24h/24" }],
    sections: [
      {
        h2: "Comment rénover la plomberie d'un appartement haussmannien du 8e ?",
        answer:
          "En commençant par relever les colonnes, les évacuations et les passages sous plancher, qui n'ont souvent pas été touchés depuis longtemps. Puis en programmant les reprises par pièce : salle de bains, cuisine, WC. Un diagnostic préalable évite les mauvaises surprises une fois les cloisons ouvertes.",
        paras: [
          "Les immeubles du 8e ont des hauteurs sous plafond généreuses et des réseaux vieillis par couches successives. Remplacer une baignoire par une douche, déplacer un lavabo, installer un second point d'eau : chaque projet dépend de la position des chutes, que le plombier repère avant de dessiner la pièce.",
          "L'entreprise a mené un chantier de plomberie et de salle de bains avenue de Messine, dans le quartier, et connaît la logique de ces immeubles de pierre.",
        ],
        list: ["Salles de bains et salles d'eau", "Colonnes et évacuations", "Chauffe-eau et ballons", "Robinetterie et sanitaires"],
      },
      {
        h2: "Intervenez-vous dans les hôtels et les cabinets du 8e ?",
        answer:
          "Oui. Le 8e compte beaucoup d'hôtels, de bureaux et de cabinets installés dans d'anciens appartements. L'entreprise a l'habitude des chantiers discrets, menés dans le respect de l'exploitation, comme à l'Hôtel Opéra Richepanse, et propose une astreinte 24h/24 pour les établissements.",
        paras: ["Pour un local professionnel, précisez dans votre demande les horaires d'accès, le gardiennage éventuel et le contact du syndic."],
      },
      {
        h2: "Comment choisir un plombier pour un immeuble de prestige ?",
        answer:
          "Sur trois critères : l'ancienneté de la maison, la qualité de ses finitions et sa capacité à travailler avec les architectes et les syndics. Bastien & Trebulle existe depuis 1880, compte plus de 40 salariés et remet des devis documentés par des photos et des croquis cotés.",
        paras: ["Demandez toujours un devis détaillé, des références de chantiers comparables et le nom de l'interlocuteur qui suivra les travaux."],
      },
    ],
    faq: [
      {
        q: "Êtes-vous installé dans le 8e arrondissement ?",
        a: "Non : l'entreprise est au 3, rue Gros, dans le 16e, un arrondissement voisin. Elle intervient dans le 8e comme dans les autres arrondissements proches.",
      },
      {
        q: "Peut-on vous joindre en urgence le week-end ?",
        a: "Oui, l'astreinte est ouverte 24h/24 et 7j/7 au 01 45 24 77 89, dimanches et jours fériés compris, avec un tarif forfaitaire annoncé à l'avance.",
      },
      {
        q: "Travaillez-vous avec des architectes d'intérieur ?",
        a: "Oui. Plusieurs chantiers de plomberie et de salle de bains ont été menés sous la maîtrise d'œuvre d'un cabinet d'intérieur ou d'architecture.",
      },
    ],
    ctaTitle: "Un projet dans le 8e ?",
    ctaText: "Joignez des photos et l'adresse de l'immeuble : nous revenons vers vous avec un devis détaillé.",
    related: [PATHS.plumbing, PATHS.bathroom, "/plombier-paris-17", PATHS.emergency],
  },
  {
    path: "/plombier-paris-17",
    zone: "Paris 17e",
    title: "Plombier Paris 17e : copropriétés, Ternes, Batignolles",
    description:
      "Plombier à Paris 17e pour les copropriétés des Ternes, de Monceau et des Batignolles : colonnes, chauffage collectif, couverture et dépannage 24h/24, sur devis.",
    h1: "Plombier à Paris 17e, des Ternes aux Batignolles",
    kicker: "Plomberie · Paris 17e",
    lead: "Pour les copropriétés du 17e, une maison de plomberie, de couverture et de chauffage qui connaît les immeubles du nord de l'Étoile.",
    brief:
      "Plombier à Paris 17e, Bastien & Trebulle accompagne les copropriétés et les particuliers des Ternes, de Monceau et des Batignolles : entretien de colonnes, chauffage collectif, couverture d'immeuble, salles de bains. Basée dans le 16e, l'entreprise rejoint le 17e par l'Étoile et assure une astreinte 24h/24.",
    contactType: "copropriete",
    service: "Plomberie",
    crumb: "Plombier Paris 17e",
    photo: { theme: "couverture", n: 2 },
    caption: "Couverture et zinguerie d'un immeuble de rapport",
    approach: "Les Ternes touchent l'Étoile : depuis le 16e, le 17e est l'arrondissement voisin le plus naturel pour les équipes de la rue Gros.",
    facts: [{ label: "Quartiers", value: "Ternes · Monceau" }, { label: "Public", value: "Copropriétés" }, { label: "Urgence", value: "24h/24" }],
    sections: [
      {
        h2: "Comment un syndic du 17e organise-t-il l'entretien d'un immeuble ?",
        answer:
          "Par un audit des réseaux communs et privatifs, puis par un contrat d'entretien aux visites programmées pour les chaudières, les colonnes et la couverture. Les rapports, avec plans et photos, servent ensuite de base aux votes en assemblée générale et au planning des travaux.",
        paras: [
          "Dans le 17e, beaucoup d'immeubles de rapport ont été construits à la même époque et vieillissent ensemble : colonnes, toitures et chaudières arrivent en fin de vie dans la même décennie. Les anticiper évite les urgences coûteuses.",
        ],
        list: ["Audit des réseaux : plans, photos, rapports exploitables", "Contrats d'entretien : visites programmées", "Interventions planifiées sur colonnes et toiture", "Astreinte 24h/24 pour les résidents"],
      },
      {
        h2: "Un particulier du 17e peut-il faire appel à vous ?",
        answer:
          "Oui, naturellement. La maison intervient chez les particuliers pour la plomberie, le chauffage, la couverture et les salles de bains, avec un devis gratuit et des compagnons qualifiés internes. Elle conseille aussi sur ce qui relève de la copropriété plutôt que de votre lot.",
        paras: ["Une fuite dans une colonne, par exemple, peut concerner les parties communes : l'artisan la constate, vous l'indiquez à votre syndic, et le chantier s'organise avec lui."],
      },
      {
        h2: "Que contrôler sur la toiture d'un immeuble du 17e ?",
        answer:
          "L'état du zinc, des chéneaux et des descentes d'eau pluviale, ainsi que les solins autour des cheminées et des fenêtres de toit. Un contrôle annuel, avant l'automne, repère les éléments dégradés avant qu'ils ne laissent passer l'eau vers les étages supérieurs.",
        paras: ["La maison a restauré des couvertures d'immeubles à Paris et à Levallois-Perret, voisine du 17e, avec un diagnostic photo puis un suivi documenté jusqu'à la réception."],
      },
    ],
    faq: [
      {
        q: "Êtes-vous basé dans le 17e ?",
        a: "Non, au 3, rue Gros dans le 16e. Les deux arrondissements sont voisins de part et d'autre de l'Étoile.",
      },
      {
        q: "Combien de salariés intervient sur un chantier d'immeuble ?",
        a: "L'équipe est adaptée à chaque chantier. L'entreprise compte plus de 40 salariés, ce qui lui permet de mobiliser plomberie, couverture et chauffage selon les besoins.",
      },
      {
        q: "Puis-je demander un devis pour mon syndic ?",
        a: "Oui, via le formulaire de contact en choisissant « Syndic, copropriété, hôtel », avec l'adresse de l'immeuble et le nom du syndic.",
      },
    ],
    ctaTitle: "Un immeuble à entretenir dans le 17e ?",
    ctaText: "Indiquez l'adresse et la nature du besoin : nous proposons un échange puis un devis.",
    related: [PATHS.pros, PATHS.plumbing, "/plombier-levallois-perret", PATHS.roofing],
  },
  {
    path: "/plombier-paris-7",
    zone: "Paris 7e",
    title: "Plombier couvreur Paris 7e : quais et rive gauche | B&T",
    description:
      "Plombier couvreur à Paris 7e : restauration de couverture et de zinguerie, quai Voltaire, rue de l'Université, rue de Grenelle, plomberie d'appartements.",
    h1: "Plombier couvreur à Paris 7e, sur la rive gauche",
    kicker: "Plomberie et couverture · Paris 7e",
    lead: "Du quai Voltaire à la rue de Grenelle : des chantiers de couverture et de plomberie menés au cœur du 7e arrondissement.",
    brief:
      "Plombier couvreur à Paris 7e, Bastien & Trebulle a restauré les couvertures et la zinguerie d'immeubles du quai Voltaire et de la rue de l'Université, et réalisé un chantier de plomberie rue de Grenelle. L'entreprise, installée dans le 16e, rejoint la rive gauche pour les particuliers comme pour les syndics.",
    contactType: "couverture",
    service: "Couverture et plomberie",
    crumb: "Plombier couvreur Paris 7e",
    photo: { theme: "couverture", n: 3 },
    caption: "Zinguerie d'un immeuble de la rive gauche",
    approach: "La Seine sépare le 16e du 7e : les équipes de la rue Gros rejoignent la rive gauche par les ponts de l'Alma ou d'Iéna.",
    facts: [{ label: "Chantiers", value: "3+" }, { label: "Quai", value: "Voltaire" }, { label: "Métier", value: "Zinc" }],
    sections: [
      {
        h2: "Quels chantiers l'entreprise a-t-elle menés dans le 7e ?",
        answer:
          "Deux restaurations de couverture et de zinguerie, quai Voltaire et rue de l'Université, pour des syndicats de copropriétaires, et un chantier de plomberie rue de Grenelle. Dans chaque cas : diagnostic photo, croquis côtés, travaux selon les règles de l'art et réception documentée.",
        paras: [
          "Au quai Voltaire, l'immeuble présentait des désordres de couverture et de zinguerie qui demandaient une reprise soignée, compatible avec le tissu urbain dense du quartier. Rue de l'Université, il s'agissait de préserver l'étanchéité et l'harmonie de l'ensemble en remplaçant les éléments dégradés.",
        ],
      },
      {
        h2: "Pourquoi le zinc domine-t-il les toits du 7e ?",
        answer:
          "Parce qu'il accompagne depuis longtemps les immeubles parisiens : léger, malléable, durable, il épouse les mansardes et les ouvrages de zinguerie. Sa restauration demande un savoir-faire de couvreur-zingueur, que la maison pratique depuis 1880 et qu'elle applique aux immeubles anciens.",
        paras: ["Un zinc bien entretenu protège la charpente et les plafonds des derniers étages. Un joint ouvert ou une gouttière bouchée suffisent à créer une infiltration qui ne se voit qu'en hiver."],
        list: ["Restauration des parties courantes", "Ouvrages de zinguerie", "Remplacement des éléments dégradés", "Suivi documenté jusqu'à la réception"],
      },
      {
        h2: "Faites-vous aussi la plomberie des appartements du 7e ?",
        answer:
          "Oui. Les appartements anciens du 7e ont des réseaux, des colonnes et des salles de bains à rénover avec soin. La maison mène la plomberie jusqu'aux finitions, avec un devis gratuit et la possibilité de coordonner les corps d'état d'un projet de salle de bains clé en main.",
        paras: ["Elle a conduit un chantier de plomberie rue de Grenelle, et une rénovation d'appartement rue Garancière, dans le 6e."],
      },
    ],
    faq: [
      {
        q: "Intervenez-vous pour les syndics de la rive gauche ?",
        a: "Oui. Les chantiers du quai Voltaire et de la rue de l'Université ont été menés pour des syndicats de copropriétaires représentés par leur cabinet de syndic.",
      },
      {
        q: "Peut-on visiter un chantier terminé ?",
        a: "La galerie de réalisations présente les chantiers du 7e en photos. Pour une visite, demandez-la à l'équipe, qui vous répond avec les accords nécessaires.",
      },
      {
        q: "Faut-il une autorisation pour refaire une toiture à Paris ?",
        a: "Cela dépend du bâtiment et de son secteur. L'équipe vous indique, dès le diagnostic, les démarches à voir avec votre syndic ou la mairie.",
      },
    ],
    ctaTitle: "Un toit ou une salle de bains dans le 7e ?",
    ctaText: "Joignez des photos et l'adresse : nous revenons vers vous avec un devis détaillé.",
    related: [PATHS.roofing, PATHS.works, PATHS.bathroom, "/plombier-paris-15"],
  },
  {
    path: "/plombier-paris-15",
    zone: "Paris 15e",
    title: "Plombier Paris 15e : chauffage collectif et colonnes",
    description:
      "Plombier à Paris 15e de l'autre côté de la Seine : colonnes, chauffage collectif, salles de bains et dépannage d'urgence 24h/24 par une maison fondée en 1880.",
    h1: "Plombier à Paris 15e, face au 16e sur la Seine",
    kicker: "Plomberie · Paris 15e",
    lead: "Le 15e est le voisin du 16e sur l'autre rive : colonnes, chauffage collectif et salles de bains, par une maison de 1880.",
    brief:
      "Plombier à Paris 15e, Bastien & Trebulle traverse la Seine depuis le 16e pour intervenir dans les immeubles de Grenelle, de Javel et de Vaugirard : colonnes, chauffage collectif, chauffe-eau, salles de bains. L'entreprise, fondée en 1880, propose un devis gratuit et un dépannage d'urgence 24h/24 à tarif forfaitaire.",
    contactType: "chauffage",
    service: "Plomberie et chauffage",
    crumb: "Plombier Paris 15e",
    photo: { theme: "immeubles" },
    caption: "Les immeubles de Grenelle et de Javel",
    approach: "Le 15e est de l'autre côté de la Seine : les équipes de la rue Gros y arrivent en traversant le fleuve.",
    facts: [{ label: "Rive", value: "Gauche" }, { label: "Chauffage", value: "Coll." }, { label: "Urgence", value: "24h/24" }],
    sections: [
      {
        h2: "Quels travaux de chauffage collectif sont fréquents dans le 15e ?",
        answer:
          "Le remplacement ou l'entretien des chaudières collectives, la reprise des colonnes de distribution et le suivi des équipements par contrat. Le 15e compte de nombreuses copropriétés de taille importante, où le chauffage et l'eau chaude collectifs concentrent l'essentiel des interventions techniques.",
        paras: [
          "Pour un syndic, la bonne méthode consiste à auditer l'installation, à documenter l'état des équipements et à planifier les travaux sur plusieurs exercices. L'entreprise propose des audits de réseaux avec plans, photos et rapports exploitables, ainsi que des contrats d'entretien aux visites programmées.",
        ],
        list: ["Audit des réseaux et rapports", "Chaudières collectives", "Colonnes de chauffage et d'eau", "Contrat d'entretien"],
      },
      {
        h2: "Mon logement du 15e est-il concerné par la mise aux normes ?",
        answer:
          "Possiblement, si l'installation est ancienne ou modifiée au fil des ans. Les matériaux mêlés, les robinets d'arrêt inaccessibles ou les appareils vétustes se repèrent à la visite. Un devis gratuit chiffre ensuite les reprises utiles, par priorité, sans vous imposer un chantier complet.",
        paras: ["Vous pouvez joindre au formulaire des photos de la chaudière, du chauffe-eau et des arrivées d'eau : l'équipe prépare ainsi sa visite."],
      },
      {
        h2: "Que faire d'un dégât des eaux entre deux appartements ?",
        answer:
          "Couper l'eau si possible, prévenir le voisin et le syndic, photographier les dégâts, puis appeler le 01 45 24 77 89 pour que l'artisan stoppe la fuite et sécurise les lieux. La déclaration à l'assurance se fait ensuite, avec les photos et le constat de l'intervention.",
        paras: ["Les dégâts des eaux figurent parmi les cas d'intervention d'urgence de la maison, avec la recherche de fuite, la rupture de canalisation et le débouchage."],
      },
    ],
    faq: [
      {
        q: "Combien de temps pour venir dans le 15e ?",
        a: "L'entreprise annonce intervenir sous 2 heures dans toute la région parisienne pour les urgences plomberie.",
      },
      {
        q: "Vendez-vous aussi des contrats d'entretien aux particuliers ?",
        a: "Le contrat d'entretien figure parmi les types de demande du formulaire. Les conditions se précisent au téléphone ou après visite.",
      },
      {
        q: "Où se trouve l'entreprise par rapport au 15e ?",
        a: "Au 3, rue Gros, dans le 16e, sur l'autre rive de la Seine. Le bureau répond au 01 45 24 66 66.",
      },
    ],
    ctaTitle: "Une chaudière ou une colonne à revoir ?",
    ctaText: "Décrivez l'immeuble et l'équipement : nous proposons un échange puis un devis gratuit.",
    related: [PATHS.heating, PATHS.emergency, PATHS.plumbing, "/plombier-paris-7"],
  },
  {
    path: "/plombier-levallois-perret",
    zone: "Levallois-Perret",
    title: "Plombier couvreur Levallois-Perret, aux portes de Paris",
    description:
      "Plombier couvreur à Levallois-Perret (92300), aux portes de Paris : couverture et zinguerie rue Danton, plomberie, chauffage et dépannage 24h/24. Devis gratuit.",
    h1: "Plombier couvreur à Levallois-Perret, aux portes de Paris",
    kicker: "Plomberie et couverture · Levallois-Perret",
    lead: "Un chantier de couverture rue Danton, des équipes qui franchissent le périphérique : Levallois-Perret fait partie du secteur de la maison.",
    brief:
      "Plombier couvreur à Levallois-Perret, dans les Hauts-de-Seine, Bastien & Trebulle a restauré la couverture et la zinguerie d'un immeuble de la rue Danton, avec sa qualification Patrimoine Ancien. L'entreprise du 16e parisien intervient aussi en plomberie et en chauffage dans la proche couronne, avec une astreinte 24h/24.",
    contactType: "couverture",
    service: "Couverture et plomberie",
    crumb: "Plombier Levallois-Perret",
    photo: { theme: "couverture", n: 4 },
    caption: "Couverture et zinguerie à Levallois-Perret",
    approach: "Levallois-Perret est à la porte de Paris, au nord-ouest du 17e : de la rue Gros, les équipes y accèdent par l'Étoile et le boulevard périphérique.",
    facts: [{ label: "Département", value: "92" }, { label: "Chantier", value: "Rue Danton" }, { label: "Labels", value: "Patrimoine Ancien" }],
    sections: [
      {
        h2: "Quel chantier l'entreprise a-t-elle mené à Levallois-Perret ?",
        answer:
          "La restauration de la couverture et de la zinguerie d'un immeuble de la rue Danton, pour le compte d'un syndicat de copropriétaires, sous la maîtrise d'œuvre d'un cabinet. Après un diagnostic photo et des croquis cotés, les couvreurs ont remplacé les éléments dégradés et restitué une finition fidèle au cadre de la ville.",
        paras: ["Le chantier a suivi la méthode habituelle : une étape après l'autre, chacune documentée, jusqu'à la réception des travaux, dans le respect de la qualification Patrimoine Ancien citée par l'entreprise."],
      },
      {
        h2: "L'entreprise intervient-elle en banlieue comme à Paris ?",
        answer:
          "Oui : le site annonce une intervention à Paris et en proche couronne, et un dépannage sous 2 heures dans toute la région parisienne. Levallois-Perret, voisine du 17e arrondissement, fait partie de ce secteur, pour les copropriétés comme pour les particuliers.",
        paras: ["Pour une intervention programmée, la distance joue peu. Ce qui compte, c'est la qualité du diagnostic, la clarté du devis et le suivi du chantier."],
        list: ["Couverture et zinguerie d'immeuble", "Plomberie collective et individuelle", "Chauffage et chauffe-eau", "Dépannage 24h/24"],
      },
      {
        h2: "Qui contacter pour un syndic de Levallois-Perret ?",
        answer:
          "Le formulaire de contact, en choisissant « Syndic, copropriété, hôtel », ou le bureau au 01 45 24 66 66. Indiquez l'adresse de l'immeuble, la nature du besoin et vos contraintes d'accès : l'entreprise propose ensuite un diagnostic sur site, puis un devis documenté pour l'assemblée générale.",
        paras: ["En cas de fuite urgente, appelez directement le numéro d'astreinte, 01 45 24 77 89, disponible jour et nuit."],
      },
    ],
    faq: [
      {
        q: "Levallois-Perret est-elle dans votre zone ?",
        a: "Oui : l'entreprise y a réalisé le chantier de la rue Danton et annonce intervenir à Paris et en proche couronne.",
      },
      {
        q: "Dois-je passer par mon syndic pour une toiture ?",
        a: "Pour une toiture d'immeuble, oui : la copropriété décide et finance. L'entreprise fournit les rapports et devis utiles à l'assemblée générale.",
      },
      {
        q: "Intervenez-vous aussi à Neuilly-sur-Seine ou à Boulogne ?",
        a: "Le site actuel annonce l'Île-de-France de façon générale. Les communes précises desservies sont à confirmer avec l'entreprise.",
      },
    ],
    ctaTitle: "Une toiture à restaurer à Levallois-Perret ?",
    ctaText: "Donnez-nous l'adresse et quelques photos : nous proposons un diagnostic puis un devis.",
    related: [PATHS.roofing, PATHS.works, "/plombier-paris-17", PATHS.pros],
  },
];
