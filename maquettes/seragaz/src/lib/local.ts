import { PATHS } from "./site";
import type { Page } from "./types";

/**
 * Pages nouvelles. Le contrat d'entretien reprend les engagements listés sur la page d'accueil de seragaz.fr.
 * Les pages par arrondissement et par commune s'appuient sur la zone publiée par l'entreprise (Paris, rayon de 15 km
 * autour du 9e, communes citées en pied de page). Repères de quartier : institutionnels, à faire relire par un habitant.
 */

export const maintenance: Page = {
  path: PATHS.maintenance,
  title: "Contrat d'entretien chaudière gaz à Paris 9 | SERAGAZ",
  description:
    "Contrat d'entretien de chaudière gaz à Paris : visite annuelle, nettoyage selon la norme NF X50-010, priorité en cas de panne, main-d'œuvre et trajet inclus.",
  h1: "Contrat d'entretien chaudière gaz à Paris : visite annuelle et priorité",
  kicker: "Contrat d'entretien",
  lead: "Pour garantir le bon fonctionnement de votre chaudière toute l'année, nous vous proposons des contrats d'entretien adaptés à vos besoins.",
  brief:
    "Le contrat d'entretien de chaudière gaz SERAGAZ, à Paris, comprend la visite annuelle obligatoire, un nettoyage conforme à la norme NF X50-010 et des interventions prioritaires en cas de panne. Main-d'œuvre et déplacements y sont inclus sans limite ; seules les pièces détachées éventuelles restent facturées en supplément.",
  contactType: "entretien",
  service: "Contrat d'entretien de chaudière gaz",
  crumb: "Contrat d'entretien",
  sections: [
    {
      h2: "Que comprend le contrat d'entretien de chaudière gaz à Paris ?",
      answer:
        "Une visite de contrôle annuelle, un nettoyage approfondi des éléments clés selon la norme NF X50-010, des interventions prioritaires en cas de panne, la main-d'œuvre et le déplacement illimités, un tarif préférentiel sur le ramonage des chaudières à tirage naturel et des conseils pour réduire votre consommation.",
      paras: ["Pour garantir le bon fonctionnement de votre chaudière toute l'année, nous vous proposons des contrats d'entretien adaptés à vos besoins."],
      listTitle: "Nos contrats d'entretien incluent :",
      list: [
        "Interventions prioritaires en cas de panne pour limiter l'attente.",
        "Main-d'œuvre et déplacement illimités inclus. Seules les pièces détachées seraient en supplément en cas de besoin de remplacement.",
        "Visites de contrôle annuel pour anticiper les pannes, être conforme à la demande de votre assurance et répondre à votre obligation légale.",
        "Nettoyage approfondi des éléments clés de votre chaudière conformément à la norme NF X50-010.",
        "Tarif préférentiel sur le ramonage pour les chaudières à tirage naturel.",
        "Conseils personnalisés pour optimiser votre consommation énergétique.",
      ],
      after: ["Avec nos contrats d'entretien, vous bénéficiez d'une installation performante et d'une tranquillité d'esprit totale."],
      original: true,
    },
    {
      h2: "Pourquoi l'entretien annuel est-il si important ?",
      answer:
        "Parce qu'il est obligatoire et qu'il change la vie de l'appareil. D'après les chiffres de l'ADEME cités par SERAGAZ, une chaudière bien entretenue consomme jusqu'à 15 % de moins, voit sa durée de vie multipliée par trois et tombe en panne cinq fois moins souvent qu'une chaudière négligée.",
      paras: [
        "Un appareil bien entretenu consomme jusqu'à 15 % de moins, la durée de vie de votre chaudière est multipliée par 3 et les pannes sont 5 fois moins fréquentes (source ADEME). En cas de dysfonctionnement, notre service de dépannage intervient rapidement.",
        "Faites des économies, prolongez la durée de vie et sécurisez votre installation gaz avec notre service d'entretien et de dépannage.",
      ],
      original: true,
    },
    {
      h2: "Qui doit faire entretenir la chaudière dans un logement loué ?",
      answer:
        "En règle générale, l'entretien courant d'une chaudière individuelle incombe à l'occupant, donc au locataire, sauf clause contraire du bail. Le propriétaire reste responsable du remplacement de l'appareil usé. Le contrat peut être souscrit par l'un ou l'autre : l'attestation annuelle sert aux deux et à l'assureur.",
      paras: [
        "Les agences immobilières et les syndics de gestion locative font partie des clients historiques de SERAGAZ. Pour un appartement loué, précisez dans votre demande qui souscrit le contrat et qui doit recevoir l'attestation d'entretien : le planning des visites s'organise ensuite avec l'occupant.",
        "Pour un propriétaire qui gère plusieurs lots, regrouper les chaudières sous contrat simplifie le suivi : l'historique des interventions est conservé par l'entreprise grâce à ses outils informatiques.",
      ],
    },
    {
      h2: "Comment se passe la visite d'entretien ?",
      answer:
        "Le technicien nettoie le corps de chauffe, le brûleur et le conduit d'évacuation, vérifie les dispositifs de sécurité, mesure les émissions et règle la combustion. Il vous explique ce qu'il a constaté, conseille sur l'utilisation de l'appareil et vous remet l'attestation d'entretien prévue par la réglementation.",
      paras: [
        "Prévoyez un accès dégagé à la chaudière et, si possible, le carnet ou la dernière attestation : ils renseignent le technicien sur l'âge et l'historique de l'appareil. Les observations faites pendant la visite permettent d'anticiper une pièce fatiguée avant qu'elle ne provoque une panne en plein hiver.",
      ],
    },
  ],
  faq: [
    {
      q: "Le contrat d'entretien couvre-t-il les pièces détachées ?",
      a: "Non : d'après SERAGAZ, la main-d'œuvre et le déplacement sont inclus de façon illimitée, mais les pièces détachées restent en supplément lorsqu'un remplacement est nécessaire. Le technicien vous en informe avant de les poser.",
    },
    {
      q: "Quelle est la norme NF X50-010 citée dans le contrat ?",
      a: "C'est la norme française qui décrit les prestations d'entretien des chaudières : elle fixe ce que doit contenir une visite de nettoyage et de vérification. SERAGAZ l'indique comme référence pour le nettoyage des éléments clés de votre chaudière.",
    },
    {
      q: "Peut-on souscrire un contrat pour une chaudière déjà en panne ?",
      a: "Commencez par décrire la panne : un dépannage remet l'appareil en état, puis le contrat prend le relais pour les années suivantes. Le tarif du contrat vous est communiqué sur devis, selon le type de chaudière.",
    },
  ],
  ctaTitle: "Mettre votre chaudière sous contrat ?",
  ctaText: "Indiquez la marque, le modèle et l'adresse : SERAGAZ vous envoie sa proposition.",
  related: [PATHS.repair, PATHS.sweeping, PATHS.replacement],
};

export type LocalPage = Page & { slug: string; zone: string; trade: "depannage" | "entretien" | "remplacement" | "chauffagiste" };

const crumbOf = (z: string, t: string) => `${t} ${z}`;

export const localPages: LocalPage[] = [
  {
    slug: "depannage-chaudiere-gaz-paris-10",
    path: "/depannage-chaudiere-gaz-paris-10",
    zone: "Paris 10e",
    trade: "depannage",
    title: "Dépannage chaudière gaz Paris 10 : gares, canal | SERAGAZ",
    description:
      "Dépannage de chaudière gaz à Paris 10, de la gare du Nord au canal Saint-Martin : diagnostic, réparation et tests de sécurité par SERAGAZ, votre voisin.",
    h1: "Dépannage chaudière gaz Paris 10 : diagnostic et réparation",
    kicker: "Dépannage · Paris 10e",
    lead: "Le 10e commence presque devant la porte de SERAGAZ : la rue de Dunkerque longe la gare du Nord. Une chaudière qui s'arrête dans le quartier est donc l'une des pannes les plus proches de l'atelier.",
    brief:
      "Pour un dépannage de chaudière gaz à Paris 10, SERAGAZ part de ses locaux du 69 rue de Dunkerque, à la limite du 9e et du 10e. Le technicien recherche la cause de la panne, remplace la pièce défectueuse si besoin et contrôle la sécurité de l'appareil avant de rendre le chauffage.",
    contactType: "depannage",
    service: "Dépannage de chaudière gaz à Paris 10e",
    crumb: crumbOf("Paris 10e", "Dépannage"),
    sections: [
      {
        h2: "Pourquoi appeler un chauffagiste voisin pour une panne à Paris 10 ?",
        answer:
          "Parce que la distance compte quand le chauffage ou l'eau chaude manquent. SERAGAZ est installée rue de Dunkerque, à deux pas de la gare du Nord : le 10e, des abords des gares jusqu'au canal Saint-Martin, fait partie de son voisinage immédiat, au cœur de la zone qu'elle dessert depuis 1985.",
        paras: [
          "Le 10e arrondissement mêle immeubles haussmanniens autour des boulevards de Magenta et de Strasbourg, bâtiments de faubourg plus anciens et petites cours. On y trouve beaucoup de chaudières individuelles murales, parfois installées dans une cuisine étroite ou un placard : le diagnostic commence souvent par l'accès à l'appareil.",
          "Pour gagner du temps, notez avant d'appeler la marque de la chaudière, le code d'erreur éventuel et la pression du manomètre. Ces trois informations orientent le technicien vers les pièces à prévoir.",
        ],
      },
      {
        h2: "Quelles pannes rencontre-t-on le plus souvent dans le 10e ?",
        answer:
          "Les mêmes que partout à Paris, avec une fréquence marquée pour la baisse de pression liée à une petite fuite d'eau, la veilleuse qui ne tient pas sur les appareils anciens et l'absence de chauffage due au brûleur. Un circuit embourbé peut aussi provoquer des mises en sécurité répétées.",
        paras: [
          "Sur une chaudière qui se met en sécurité plusieurs fois par semaine, le technicien vérifie la circulation d'eau et la pression avant de remplacer une pièce : une surchauffe peut venir d'un radiateur fermé, d'un circulateur fatigué ou de boues accumulées. Le désembouage est alors parfois la vraie réponse.",
        ],
      },
      {
        h2: "Comment se passe le dépannage une fois le technicien sur place ?",
        answer:
          "Il écoute votre description, examine la chaudière et identifie la source du problème. Il répare ou remplace la pièce défectueuse, réalise des tests de sécurité pour s'assurer que l'appareil ne présente aucun risque, puis vous donne des conseils pour éviter que la panne ne se reproduise.",
        paras: [
          "Si la pièce nécessaire n'est pas dans le véhicule, le technicien vous explique la suite et laisse l'installation en sécurité. Pour une chaudière très âgée qui multiplie les pannes, il peut vous parler d'un remplacement : la décision vous appartient, sur la base d'un devis écrit.",
        ],
      },
    ],
    faq: [
      {
        q: "SERAGAZ intervient-elle près de la gare de l'Est et du canal Saint-Martin ?",
        a: "Oui, tout le 10e arrondissement est dans la zone de SERAGAZ, qui intervient dans Paris et dans un rayon de 15 km autour de ses locaux du 9e. Indiquez l'adresse exacte, l'étage et le code d'accès dans votre demande.",
      },
      {
        q: "Ma chaudière perd de la pression chaque semaine dans mon appartement du 10e : est-ce grave ?",
        a: "Une perte de pression régulière signale le plus souvent une fuite d'eau, sur la chaudière ou le circuit. Remettre de l'eau soulage temporairement mais ne règle rien : faites diagnostiquer l'installation pour trouver l'origine de la fuite.",
      },
      {
        q: "Puis-je envoyer une photo de l'écran de ma chaudière avant le passage ?",
        a: "Oui, le formulaire de contact accepte jusqu'à quatre photos. Celle de l'afficheur et celle de la plaque signalétique sont les plus utiles pour préparer le dépannage.",
      },
    ],
    ctaTitle: "Chaudière en panne dans le 10e ?",
    ctaText: "L'équipe de la rue de Dunkerque est votre voisine : appelez-la ou décrivez la panne.",
    related: [PATHS.repair, PATHS.descaling, "/entretien-chaudiere-gaz-paris-9"],
  },
  {
    slug: "depannage-chaudiere-gaz-paris-18",
    path: "/depannage-chaudiere-gaz-paris-18",
    zone: "Paris 18e",
    trade: "depannage",
    title: "Dépannage chaudière gaz Paris 18 : Montmartre | SERAGAZ",
    description:
      "Dépannage de chaudière gaz à Paris 18, de Montmartre à La Chapelle : diagnostic, pièces, contrôle de sécurité. SERAGAZ, chauffagiste du 9e, monte au 18e.",
    h1: "Dépannage chaudière gaz Paris 18 : Montmartre, Barbès, La Chapelle",
    kicker: "Dépannage · Paris 18e",
    lead: "Escaliers étroits, derniers étages sans ascenseur, cuisines sous les toits : dépanner une chaudière sur la butte Montmartre demande de l'organisation autant que du métier.",
    brief:
      "Pour un dépannage de chaudière gaz à Paris 18, SERAGAZ monte depuis le 9e voisin, par le boulevard de Rochechouart. Ses chauffagistes diagnostiquent la panne, interviennent sur les chaudières récentes comme anciennes, remplacent les pièces défectueuses et testent la sécurité avant de partir, de Montmartre à La Chapelle.",
    contactType: "depannage",
    service: "Dépannage de chaudière gaz à Paris 18e",
    crumb: crumbOf("Paris 18e", "Dépannage"),
    sections: [
      {
        h2: "SERAGAZ dépanne-t-elle les chaudières gaz dans tout le 18e ?",
        answer:
          "Oui. Le 18e touche le 9e par le boulevard de Rochechouart et se trouve entièrement dans la zone de SERAGAZ, qui couvre Paris et un rayon de 15 km autour de la rue de Dunkerque. Montmartre, les Abbesses, Barbès, la Goutte-d'Or, La Chapelle et les Grandes-Carrières sont concernés.",
        paras: [
          "Le bâti du 18e est très varié : immeubles de rapport du XIXe siècle sur les pentes, ateliers d'artistes, immeubles en brique des années 1930 vers les boulevards des Maréchaux. Les chaudières y sont souvent anciennes, raccordées à un conduit de cheminée, et parfois installées dans des espaces réduits.",
        ],
      },
      {
        h2: "Ma chaudière ancienne à veilleuse ne s'allume plus : que faire ?",
        answer:
          "Ne forcez pas le rallumage à répétition. Une veilleuse qui s'éteint vient souvent d'un encrassement ou d'un thermocouple usé, réparable par un nettoyage ou un remplacement de pièce. Si vous sentez une odeur de gaz, fermez le robinet, aérez et appelez Urgence Sécurité Gaz au 0 800 47 33 33.",
        paras: [
          "Sur ces appareils à tirage naturel, le technicien vérifie aussi le conduit : un tirage insuffisant peut faire s'éteindre la flamme et présente un risque de refoulement de monoxyde de carbone. C'est l'une des raisons pour lesquelles le ramonage annuel reste obligatoire pour ce type de chaudière.",
          "Quand l'appareil cumule les années et les réparations, le technicien vous dira honnêtement si le remplacement mérite d'être étudié, avec les solutions possibles selon le conduit existant.",
        ],
      },
      {
        h2: "Comment faciliter l'intervention dans un immeuble de Montmartre ?",
        answer:
          "Donnez le code de la porte, l'étage, la présence ou non d'un ascenseur et l'emplacement de la chaudière. Prévenez si l'accès passe par une cour ou un escalier de service. Ces détails, notés dans le formulaire, évitent un aller-retour et permettent de prévoir le matériel à monter.",
        paras: [
          "Le stationnement sur la butte est difficile : un créneau convenu à l'avance et un interphone qui répond font gagner un temps précieux au technicien, donc à vous.",
        ],
      },
    ],
    faq: [
      {
        q: "Intervenez-vous sur des chaudières de plus de vingt ans ?",
        a: "Oui. SERAGAZ indique intervenir sur tous types de chaudières à gaz, modèles modernes ou plus anciens. Pour un appareil très âgé, la disponibilité des pièces détachées peut toutefois limiter la réparation.",
      },
      {
        q: "Le ramonage est-il obligatoire pour ma chaudière à tirage naturel dans le 18e ?",
        a: "Oui, d'après SERAGAZ, le ramonage du conduit d'une chaudière à tirage naturel doit être réalisé une fois par an. Il peut être fait le même jour que l'entretien, avec une remise commerciale.",
      },
      {
        q: "Comment savoir si ma chaudière est à tirage naturel ou à ventouse ?",
        a: "Une chaudière à tirage naturel est reliée à un conduit vertical qui monte vers la cheminée ; une chaudière à ventouse évacue ses fumées par un conduit double qui traverse le mur ou le toit. Une photo de l'appareil et de son conduit suffit pour lever le doute.",
      },
    ],
    ctaTitle: "Plus de chauffage sur la butte ?",
    ctaText: "Décrivez la panne et l'accès à l'immeuble : un chauffagiste vous rappelle.",
    related: [PATHS.repair, PATHS.sweeping, "/depannage-chaudiere-gaz-paris-17"],
  },
  {
    slug: "depannage-chaudiere-gaz-paris-17",
    path: "/depannage-chaudiere-gaz-paris-17",
    zone: "Paris 17e",
    trade: "depannage",
    title: "Dépannage chaudière gaz Paris 17 : Batignolles | SERAGAZ",
    description:
      "Dépannage de chaudière gaz à Paris 17 : Batignolles, Épinettes, Ternes, plaine Monceau. Diagnostic, réparation et contrôle de sécurité, par SERAGAZ (9e).",
    h1: "Dépannage chaudière gaz Paris 17 : Batignolles, Ternes, Épinettes",
    kicker: "Dépannage · Paris 17e",
    lead: "Du square des Batignolles aux avenues des Ternes, le 17e réunit des chaudières de toutes générations, des appareils muraux récents aux anciennes chaudières de grands appartements.",
    brief:
      "Pour un dépannage de chaudière gaz à Paris 17, SERAGAZ rejoint les Batignolles, les Épinettes, les Ternes ou la plaine Monceau depuis la place de Clichy. Ses chauffagistes formés chez les fabricants identifient la panne, remplacent les pièces en cause et vérifient la sécurité de l'appareil avant de remettre le chauffage en route.",
    contactType: "depannage",
    service: "Dépannage de chaudière gaz à Paris 17e",
    crumb: crumbOf("Paris 17e", "Dépannage"),
    sections: [
      {
        h2: "Quels quartiers du 17e SERAGAZ dessert-elle pour un dépannage ?",
        answer:
          "Tout l'arrondissement : les Batignolles et les Épinettes à l'est, les Ternes et la plaine Monceau à l'ouest, ainsi que le nouveau quartier Clichy-Batignolles. Le 17e se trouve dans le rayon de 15 km que SERAGAZ couvre autour de ses locaux du 9e, à quelques minutes par la place de Clichy.",
        paras: [
          "Dans les grands appartements de la plaine Monceau, une seule chaudière alimente parfois de nombreux radiateurs répartis sur de longues distances : un défaut de circulation se manifeste alors d'abord dans les pièces les plus éloignées. Aux Épinettes, les logements plus petits ont souvent une chaudière mixte qui produit aussi l'eau chaude.",
        ],
      },
      {
        h2: "Plus d'eau chaude mais le chauffage fonctionne : d'où vient la panne ?",
        answer:
          "Sur une chaudière mixte, cette panne vise souvent la partie sanitaire : vanne d'inversion, échangeur entartré ou détecteur de débit. Le chauffage peut continuer à fonctionner normalement. Le diagnostic permet de cibler la pièce, et un détartrage peut suffire lorsque le calcaire est en cause.",
        paras: [
          "L'eau de Paris est calcaire : avec les années, le tartre se dépose dans l'échangeur sanitaire et réduit le débit ou la température de l'eau chaude. SERAGAZ réalise le détartrage des chaudières pour rendre à l'appareil ses performances et éviter des pannes plus coûteuses.",
        ],
      },
      {
        h2: "Que faire en attendant l'arrivée du chauffagiste ?",
        answer:
          "Notez le code d'erreur, la pression affichée et le moment où la panne est apparue. Ne démontez pas le capot de la chaudière. En cas d'odeur de gaz, quittez le logement après avoir aéré et appelez le 0 800 47 33 33. Pour une fuite d'eau, fermez l'arrivée d'eau de la chaudière.",
        paras: [
          "Une chaudière qui redémarre après un simple réarmement mérite tout de même un contrôle si la mise en sécurité revient : c'est un signal que le technicien saura interpréter, surtout si l'appareil n'a pas été entretenu depuis plus d'un an.",
        ],
      },
    ],
    faq: [
      {
        q: "Intervenez-vous dans le quartier Clichy-Batignolles récent ?",
        a: "Oui, comme dans le reste du 17e. Dans les immeubles neufs, le chauffage est souvent collectif ou raccordé à un réseau : précisez le type d'installation dans votre demande pour savoir si l'intervention relève de SERAGAZ.",
      },
      {
        q: "Une chaudière qui fait du bruit est-elle forcément en panne ?",
        a: "Pas forcément, mais des sifflements ou gargouillements signalent souvent de l'air ou des boues dans le circuit, ou du tartre dans la chaudière. Un diagnostic dira s'il faut purger, détartrer ou désembouer.",
      },
      {
        q: "Le diagnostic de panne est-il facturé ?",
        a: "Les conditions du déplacement et du diagnostic vous sont indiquées au moment de la prise de rendez-vous. Avec un contrat d'entretien SERAGAZ, la main-d'œuvre et le déplacement sont inclus et vous êtes prioritaire.",
      },
    ],
    ctaTitle: "Une chaudière muette dans le 17e ?",
    ctaText: "Appelez l'équipe ou envoyez votre demande avec une photo de l'afficheur.",
    related: [PATHS.repair, PATHS.maintenance, "/remplacement-chaudiere-gaz-paris-17"],
  },
  {
    slug: "entretien-chaudiere-gaz-paris-9",
    path: "/entretien-chaudiere-gaz-paris-9",
    zone: "Paris 9e",
    trade: "entretien",
    title: "Entretien chaudière gaz Paris 9 : visite annuelle | SERAGAZ",
    description:
      "Entretien annuel de chaudière gaz à Paris 9, de Notre-Dame-de-Lorette à l'Opéra : nettoyage, contrôle, attestation. SERAGAZ, rue de Dunkerque depuis 1985.",
    h1: "Entretien chaudière gaz Paris 9 : la visite annuelle par vos voisins",
    kicker: "Entretien · Paris 9e",
    lead: "Le 9e est le quartier de SERAGAZ depuis 1985. De la rue des Martyrs à la Chaussée-d'Antin, l'entreprise y entretient les chaudières des particuliers, des agences et des syndics.",
    brief:
      "Pour l'entretien d'une chaudière gaz à Paris 9, SERAGAZ intervient depuis ses locaux du 69 rue de Dunkerque. La visite annuelle obligatoire comprend le nettoyage des composants, la vérification des sécurités, le contrôle des émissions et les réglages, puis la remise d'une attestation utile à votre assureur.",
    contactType: "entretien",
    service: "Entretien de chaudière gaz à Paris 9e",
    crumb: crumbOf("Paris 9e", "Entretien"),
    photo: "atelier",
    sections: [
      {
        h2: "Pourquoi confier l'entretien de votre chaudière à une entreprise du 9e ?",
        answer:
          "Parce qu'elle connaît les immeubles du quartier et qu'elle est à côté. SERAGAZ est installée rue de Dunkerque depuis sa création en 1985, à l'adresse où la famille Franche exerce depuis le début du siècle dernier. Ses techniciens connaissent les chaudières des immeubles haussmanniens et des cours du 9e.",
        paras: [
          "Le 9e, de Pigalle aux grands boulevards, compte une forte proportion d'immeubles du XIXe siècle. Beaucoup d'appartements y sont chauffés par une chaudière gaz individuelle, souvent raccordée à un conduit dans la cheminée : l'entretien et, selon l'appareil, le ramonage reviennent chaque année.",
          "Les copropriétés et les bureaux du quartier de l'Opéra et de Saint-Georges confient aussi à SERAGAZ l'entretien de leurs appareils gaz, par l'intermédiaire de leur syndic ou de leur gestionnaire.",
        ],
      },
      {
        h2: "Quand programmer la visite d'entretien dans l'année ?",
        answer:
          "Idéalement à la fin de l'été ou au début de l'automne, avant la remise en route du chauffage. Les plannings se chargent dès les premiers froids. Une visite anticipée permet aussi de repérer une pièce fatiguée et de la remplacer sans urgence, avant qu'elle ne provoque une panne en hiver.",
        paras: [
          "L'entretien est annuel : gardez la date de votre dernière attestation et prenez rendez-vous à la même période l'année suivante. Avec un contrat SERAGAZ, la visite est planifiée et vous êtes prioritaire si la chaudière s'arrête entre deux passages.",
        ],
      },
      {
        h2: "Que contrôle le technicien pendant l'entretien ?",
        answer:
          "Le corps de chauffe, le brûleur, la veilleuse le cas échéant et le conduit d'évacuation des fumées sont nettoyés. Les dispositifs de sécurité sont vérifiés, les émissions mesurées et la combustion réglée. Vous recevez ensuite une attestation certifiant que l'appareil est conforme aux normes en vigueur.",
        paras: [
          "C'est aussi le bon moment pour poser vos questions : réglage du thermostat, programmation, pression normale du circuit, radiateurs qui chauffent mal. Les conseils du technicien aident à consommer moins sans perdre en confort.",
        ],
      },
    ],
    faq: [
      {
        q: "Peut-on passer aux locaux de la rue de Dunkerque pour prendre rendez-vous ?",
        a: "Oui, SERAGAZ indique pouvoir vous recevoir dans ses locaux du 69 rue de Dunkerque pour répondre à vos questions et prendre rendez-vous, en plus du téléphone et de l'e-mail.",
      },
      {
        q: "Mon immeuble du 9e a une chaudière collective : SERAGAZ l'entretient-elle ?",
        a: "Le site de SERAGAZ décrit surtout l'entretien des chaudières et chauffe-eau gaz des logements. Pour une installation collective, contactez l'équipe avec les coordonnées du syndic afin de vérifier ce qui peut être pris en charge.",
      },
      {
        q: "Que faire de l'attestation d'entretien ?",
        a: "Conservez-la au moins deux ans et transmettez-en une copie à votre propriétaire si vous êtes locataire. L'assureur peut la demander après un sinistre lié à la chaudière.",
      },
    ],
    ctaTitle: "La visite annuelle de votre chaudière ?",
    ctaText: "Choisissez votre créneau avec l'équipe de la rue de Dunkerque.",
    related: [PATHS.maintenance, PATHS.sweeping, "/entretien-chaudiere-gaz-paris-8"],
  },
  {
    slug: "entretien-chaudiere-gaz-paris-8",
    path: "/entretien-chaudiere-gaz-paris-8",
    zone: "Paris 8e",
    trade: "entretien",
    title: "Entretien chaudière gaz Paris 8 : Europe, Monceau | SERAGAZ",
    description:
      "Entretien annuel de chaudière gaz à Paris 8 : quartier de l'Europe, Saint-Lazare, parc Monceau, Madeleine. Nettoyage, contrôle et attestation par SERAGAZ.",
    h1: "Entretien chaudière gaz Paris 8 : quartier de l'Europe et Monceau",
    kicker: "Entretien · Paris 8e",
    lead: "Appartements familiaux autour du parc Monceau, bureaux près de Saint-Lazare, pieds-à-terre du quartier de l'Europe : dans le 8e, chaque chaudière a son propriétaire, son gestionnaire et son calendrier.",
    brief:
      "L'entretien de chaudière gaz à Paris 8 est assuré par SERAGAZ depuis le 9e voisin. La visite annuelle comprend le nettoyage des composants, le contrôle des sécurités et des émissions, les réglages et l'attestation. L'équipe s'organise avec les occupants, les gestionnaires et les agences pour les logements loués ou peu occupés.",
    contactType: "entretien",
    service: "Entretien de chaudière gaz à Paris 8e",
    crumb: crumbOf("Paris 8e", "Entretien"),
    sections: [
      {
        h2: "Comment organiser l'entretien d'une chaudière dans un logement peu occupé du 8e ?",
        answer:
          "En fixant un créneau avec la personne qui donnera accès au logement : gardien, gestionnaire, agence ou voisin. SERAGAZ travaille de longue date avec les agences immobilières et les syndics : précisez simplement dans votre demande qui ouvre la porte et à qui adresser l'attestation d'entretien.",
        paras: [
          "Une chaudière qui fonctionne peu n'échappe pas à l'obligation d'entretien annuel. Un appareil resté longtemps à l'arrêt peut même redémarrer difficilement : le passage du technicien avant la saison de chauffe évite les mauvaises surprises au retour des occupants.",
        ],
      },
      {
        h2: "L'entretien suffit-il pour une chaudière ancienne du quartier de l'Europe ?",
        answer:
          "Il est indispensable mais ne rajeunit pas l'appareil. Si la chaudière a plus de quinze ans, que son rendement baisse et que les pannes se multiplient, le technicien peut vous conseiller d'étudier son remplacement. Un modèle récent, adapté au conduit existant, consomme moins et se dépanne plus facilement.",
        paras: [
          "Les immeubles du quartier de l'Europe et des abords de la gare Saint-Lazare datent pour beaucoup du Second Empire : les chaudières y sont souvent raccordées à un conduit de cheminée ancien, ce qui conditionne le choix d'un futur appareil. Le technicien note ces éléments lors de la visite.",
        ],
      },
      {
        h2: "Qu'apporte un contrat d'entretien pour un bureau ou un cabinet ?",
        answer:
          "La tranquillité : la visite annuelle est planifiée, l'historique des interventions est suivi par l'entreprise, et une panne est traitée en priorité, avec main-d'œuvre et déplacement inclus. Pour un cabinet ou une boutique qui reçoit du public, éviter une journée sans chauffage ni eau chaude compte beaucoup.",
        paras: [
          "Les commerçants font partie des clients cités par SERAGAZ. Pour un local professionnel, indiquez les horaires d'ouverture et les contraintes d'accès : la visite peut être calée à un moment calme de la journée.",
        ],
      },
    ],
    faq: [
      {
        q: "SERAGAZ intervient-elle autour de la Madeleine et des Champs-Élysées ?",
        a: "Oui, tout le 8e arrondissement fait partie de la zone d'intervention de SERAGAZ, qui couvre Paris et un rayon de 15 km autour de ses locaux de la rue de Dunkerque.",
      },
      {
        q: "Une agence peut-elle commander l'entretien pour le compte d'un propriétaire ?",
        a: "Oui. Les agences immobilières et les syndics de gestion locative font partie des clients habituels de SERAGAZ. Indiquez les coordonnées de l'occupant et l'adresse du lot dans la demande.",
      },
      {
        q: "L'entretien annuel est-il le même pour un chauffe-eau gaz ?",
        a: "SERAGAZ entretient aussi les chauffe-eau gaz, qui doivent être contrôlés régulièrement pour la même raison de sécurité. Précisez le type d'appareil, sa marque et son modèle dans votre demande.",
      },
    ],
    ctaTitle: "Une chaudière à faire contrôler dans le 8e ?",
    ctaText: "Dites-nous qui ouvre la porte : l'équipe s'occupe du reste.",
    related: [PATHS.maintenance, PATHS.replacement, "/entretien-chaudiere-gaz-paris-9"],
  },
  {
    slug: "remplacement-chaudiere-gaz-paris-17",
    path: "/remplacement-chaudiere-gaz-paris-17",
    zone: "Paris 17e",
    trade: "remplacement",
    title: "Remplacement chaudière gaz Paris 17 : étude, pose | SERAGAZ",
    description:
      "Remplacement de chaudière gaz à Paris 17 : étude du logement et du conduit, chaudière à condensation ou basse température, pose et mise en service par SERAGAZ.",
    h1: "Remplacement chaudière gaz Paris 17 : choisir le bon appareil",
    kicker: "Remplacement · Paris 17e",
    lead: "Changer de chaudière dans un appartement du 17e, c'est d'abord une question de conduit, de place et de besoins en eau chaude. Le modèle vient ensuite.",
    brief:
      "Pour un remplacement de chaudière gaz à Paris 17, SERAGAZ commence par étudier le logement : surface, isolation, besoins en eau chaude et conduit d'évacuation. L'équipe, RGE et référencée chez plusieurs fabricants, conseille une chaudière à condensation ou basse température, la pose selon les normes, la met en service et recycle l'ancienne.",
    contactType: "remplacement",
    service: "Remplacement de chaudière gaz à Paris 17e",
    crumb: crumbOf("Paris 17e", "Remplacement"),
    photo: "accueil",
    sections: [
      {
        h2: "Par quoi commence un remplacement de chaudière dans le 17e ?",
        answer:
          "Par une visite du logement. Le technicien relève la surface chauffée, le nombre de radiateurs, l'isolation, le nombre de salles d'eau et surtout le type de conduit d'évacuation. Ces éléments déterminent les chaudières possibles et la puissance utile, avant tout choix de marque ou de modèle.",
        paras: [
          "Aux Ternes et dans la plaine Monceau, de nombreux appartements familiaux ont deux salles de bains : le besoin d'eau chaude simultanée pèse alors dans le choix entre une chaudière mixte instantanée et une chaudière associée à un ballon. Aux Batignolles, les surfaces plus petites appellent souvent un appareil plus compact.",
        ],
      },
      {
        h2: "Condensation ou basse température : comment trancher ?",
        answer:
          "La chaudière à condensation, au meilleur rendement, est la solution à privilégier quand l'évacuation des fumées et des condensats le permet. Lorsque la configuration de l'immeuble l'interdit, une chaudière basse température Bas NOx reste autorisée dans certaines conditions. SERAGAZ vous explique ce que votre conduit autorise.",
        paras: [
          "Dans certains immeubles anciens, le conduit de cheminée doit être tubé ou adapté pour recevoir une chaudière à condensation ; dans d'autres, une sortie en façade n'est pas envisageable. L'étude du technicien porte sur ces contraintes concrètes, qui pèsent autant que le prix de l'appareil.",
          "Si aucune chaudière gaz ne peut être posée dans le respect des normes, SERAGAZ peut proposer une chaudière électrique.",
        ],
      },
      {
        h2: "Comment se déroule la journée de remplacement ?",
        answer:
          "L'équipe protège les abords, vidange l'installation, dépose l'ancienne chaudière, pose et raccorde la nouvelle, puis réalise la mise en service et les réglages. Elle vous explique le fonctionnement de l'appareil et emporte l'ancien pour son recyclage. Le premier entretien annuel peut ensuite être programmé.",
        paras: [
          "En copropriété, prévenez le syndic ou le gardien de la date des travaux, surtout si du matériel doit transiter par les parties communes. Les interventions sur le conduit collectif, s'il y en a, demandent parfois un accord préalable.",
        ],
      },
    ],
    faq: [
      {
        q: "SERAGAZ est-elle qualifiée RGE pour un remplacement de chaudière ?",
        a: "Oui, l'entreprise indique être certifiée RGE (Reconnu Garant de l'Environnement) par Qualibat. Cette qualification conditionne l'accès à certaines aides publiques à la rénovation énergétique : renseignez-vous sur votre éligibilité avant de signer le devis.",
      },
      {
        q: "Quelles marques de chaudières SERAGAZ pose-t-elle ?",
        a: "L'entreprise est référencée chez Elm Leblanc, Frisquet, Saunier Duval, Chappée et De Dietrich, et présente aussi les logos d'autres fabricants sur son site. Le choix se fait selon votre logement et votre budget.",
      },
      {
        q: "Faut-il prévoir des travaux sur les radiateurs ?",
        a: "Pas systématiquement. Un désembouage du circuit est souvent conseillé avant de raccorder une chaudière neuve, pour éviter que les boues de l'ancienne installation n'encrassent le nouvel appareil.",
      },
    ],
    ctaTitle: "Un projet de chaudière neuve dans le 17e ?",
    ctaText: "Demandez la visite de votre logement et un devis gratuit.",
    related: [PATHS.replacement, PATHS.descaling, "/depannage-chaudiere-gaz-paris-17"],
  },
  {
    slug: "remplacement-chaudiere-gaz-paris-11",
    path: "/remplacement-chaudiere-gaz-paris-11",
    zone: "Paris 11e",
    trade: "remplacement",
    title: "Remplacement chaudière gaz Paris 11 : devis offert | SERAGAZ",
    description:
      "Remplacement de chaudière gaz à Paris 11, d'Oberkampf à la Roquette : étude du conduit, modèle à condensation, pose, mise en service, recyclage. Devis SERAGAZ.",
    h1: "Remplacement chaudière gaz Paris 11 : de l'étude à la mise en service",
    kicker: "Remplacement · Paris 11e",
    lead: "Cours d'artisans, immeubles de faubourg, appartements refaits dans d'anciens ateliers : le 11e réserve souvent des surprises au moment de changer une chaudière.",
    brief:
      "Le remplacement de chaudière gaz à Paris 11 passe chez SERAGAZ par une étude sur place : place disponible, conduit, besoins de chauffage et d'eau chaude. L'équipe propose le type de chaudière adapté, en assure la pose conforme aux normes, la mise en service et les réglages, puis prend en charge le recyclage de l'ancien appareil.",
    contactType: "remplacement",
    service: "Remplacement de chaudière gaz à Paris 11e",
    crumb: crumbOf("Paris 11e", "Remplacement"),
    sections: [
      {
        h2: "Quelles contraintes particulières dans les logements du 11e ?",
        answer:
          "Le manque de place, les conduits anciens et les logements transformés. Dans un ancien atelier ou une cour du faubourg Saint-Antoine, la chaudière est parfois loin de toute cheminée. L'étude vérifie où l'appareil peut être posé et comment évacuer les fumées dans le respect des normes avant tout devis.",
        paras: [
          "Entre la place de la République, Oberkampf, la Roquette et la Nation, l'arrondissement mêle immeubles haussmanniens, maisons de faubourg et bâtiments industriels convertis. Une chaudière murale compacte se loge souvent dans une cuisine ouverte : son niveau sonore et son aspect comptent alors autant que son rendement.",
        ],
      },
      {
        h2: "Quels signes montrent qu'il est temps de remplacer la chaudière ?",
        answer:
          "Un appareil de plus de quinze ans dont le rendement baisse, une consommation qui monte malgré l'entretien, des pannes à répétition ou un chauffage et une eau chaude qui ne suffisent plus. Quand plusieurs de ces signes se cumulent, un remplacement planifié coûte souvent moins cher qu'une succession de dépannages.",
        paras: [
          "Anticiper permet aussi de choisir sa date : remplacer une chaudière au printemps, hors saison de chauffe, laisse le temps de comparer les solutions et d'éviter un remplacement contraint en plein hiver.",
        ],
      },
      {
        h2: "Que comprend le devis de remplacement ?",
        answer:
          "Le diagnostic de l'installation existante, le modèle conseillé, la dépose de l'ancienne chaudière, la pose et les raccordements, la mise en service et les réglages, ainsi que l'évacuation et le recyclage de l'ancien appareil. Les éventuelles adaptations du conduit ou du circuit y sont détaillées séparément.",
        paras: [
          "Le devis est gratuit. Pour l'établir rapidement, joignez à votre demande une photo de la chaudière actuelle, de sa plaque signalétique et du départ de son conduit. Indiquez aussi l'étage et la présence d'un ascenseur.",
        ],
      },
    ],
    faq: [
      {
        q: "SERAGAZ intervient-elle dans le 11e, assez loin de la rue de Dunkerque ?",
        a: "Oui. Le 11e est à quelques kilomètres du 9e et se situe largement dans le rayon de 15 km couvert par SERAGAZ, qui intervient dans tout Paris.",
      },
      {
        q: "Une chaudière neuve est-elle plus silencieuse ?",
        a: "Les modèles récents sont généralement plus discrets que les chaudières d'il y a vingt ans, mais le niveau sonore varie selon les appareils. Signalez si la chaudière est installée dans une pièce de vie : le technicien en tiendra compte dans son conseil.",
      },
      {
        q: "Que se passe-t-il pour l'entretien après la pose ?",
        a: "Une chaudière neuve doit être entretenue chaque année comme l'ancienne. SERAGAZ propose des contrats d'entretien avec visite annuelle et priorité en cas de panne.",
      },
    ],
    ctaTitle: "Changer de chaudière dans le 11e ?",
    ctaText: "Envoyez quelques photos de l'installation actuelle pour un devis gratuit.",
    related: [PATHS.replacement, PATHS.maintenance, "/remplacement-chaudiere-gaz-paris-17"],
  },
  {
    slug: "chauffagiste-clichy",
    path: "/chauffagiste-clichy",
    zone: "Clichy",
    trade: "chauffagiste",
    title: "Chauffagiste à Clichy : chaudière gaz, entretien | SERAGAZ",
    description:
      "Chauffagiste à Clichy (92) : entretien, dépannage et remplacement de chaudière gaz, ramonage, désembouage. SERAGAZ intervient depuis Paris 9e, tout proche.",
    h1: "Chauffagiste à Clichy : chaudières gaz, entretien et dépannage",
    kicker: "Chauffagiste · Clichy",
    lead: "Juste après la porte de Clichy, la commune fait partie des villes des Hauts-de-Seine que SERAGAZ cite dans sa zone d'intervention, avec Levallois-Perret et Boulogne-Billancourt.",
    brief:
      "Chauffagiste à Clichy, SERAGAZ entretient, dépanne et remplace les chaudières et chauffe-eau gaz, ramone les conduits des chaudières à tirage naturel et désemboue les circuits de chauffage. L'entreprise vient de ses locaux du 9e arrondissement de Paris, par la place de Clichy et l'avenue de Clichy.",
    contactType: "entretien",
    service: "Chauffagiste à Clichy",
    crumb: "Chauffagiste à Clichy",
    sections: [
      {
        h2: "SERAGAZ intervient-elle vraiment à Clichy ?",
        answer:
          "Oui. Clichy figure dans la liste des communes de petite couronne que SERAGAZ dessert, et la ville se trouve bien dans le rayon de 15 km autour de ses locaux du 9e. L'avenue de Clichy relie presque directement la rue de Dunkerque à la commune, de l'autre côté du boulevard périphérique.",
        paras: [
          "Le parc de logements clichois mêle immeubles anciens en brique, résidences des années 1960 et 1970 et programmes récents. Les chaudières individuelles gaz y sont nombreuses dans les immeubles anciens, tandis que les résidences plus récentes ont souvent un chauffage collectif.",
        ],
      },
      {
        h2: "Quelles prestations un chauffagiste peut-il assurer à Clichy ?",
        answer:
          "Les mêmes qu'à Paris : entretien annuel avec attestation, contrat d'entretien avec priorité en cas de panne, dépannage, installation et remplacement de chaudière ou de chauffe-eau gaz, ramonage du conduit, détartrage et désembouage, ainsi que le déplacement de compteur gaz en tant que Partenaire GRDF.",
        paras: [
          "Pour une première demande, précisez l'adresse, le type d'immeuble et l'appareil concerné. Si vous êtes en copropriété avec un chauffage collectif, indiquez-le : l'équipe vous dira si l'intervention relève d'elle ou du prestataire de l'immeuble.",
        ],
      },
      {
        h2: "Comment préparer la venue du technicien à Clichy ?",
        answer:
          "Indiquez le code d'accès, l'étage, l'emplacement de la chaudière et, si possible, sa marque et son modèle. Une photo de l'appareil et de sa plaque signalétique, jointe au formulaire, permet de prévoir le bon matériel. Pour un dépannage, ajoutez le code d'erreur affiché et la pression du circuit.",
        paras: [
          "Un rendez-vous convenu à l'avance facilite le stationnement et l'accès, notamment dans les rues commerçantes du centre-ville. Le technicien vous prévient s'il est retenu sur une intervention précédente.",
        ],
      },
    ],
    faq: [
      {
        q: "Le déplacement à Clichy coûte-t-il plus cher qu'à Paris ?",
        a: "Les conditions de déplacement vous sont indiquées lors de la prise de rendez-vous. Avec un contrat d'entretien SERAGAZ, le déplacement est inclus de façon illimitée, à Clichy comme à Paris.",
      },
      {
        q: "Intervenez-vous aussi à Levallois-Perret et à Saint-Ouen ?",
        a: "Levallois-Perret figure dans la liste des communes citées par SERAGAZ. Pour Saint-Ouen ou une autre commune proche, demandez à l'équipe : la zone d'intervention couvre un rayon d'environ 15 km autour du 9e.",
      },
      {
        q: "Puis-je souscrire un contrat d'entretien pour ma chaudière à Clichy ?",
        a: "Oui, le contrat d'entretien s'applique aux chaudières gaz situées dans la zone de SERAGAZ, Clichy comprise : visite annuelle, nettoyage selon la norme NF X50-010 et priorité en cas de panne.",
      },
    ],
    ctaTitle: "Une chaudière à Clichy ?",
    ctaText: "Entretien, panne ou remplacement : décrivez votre demande, l'équipe vous rappelle.",
    related: [PATHS.maintenance, PATHS.repair, "/chauffagiste-levallois-perret"],
  },
  {
    slug: "chauffagiste-levallois-perret",
    path: "/chauffagiste-levallois-perret",
    zone: "Levallois-Perret",
    trade: "chauffagiste",
    title: "Chauffagiste à Levallois-Perret : chaudière gaz | SERAGAZ",
    description:
      "Chauffagiste à Levallois-Perret : entretien annuel, dépannage et remplacement de chaudière gaz, chauffe-eau, désembouage. SERAGAZ, de Paris 9e vers le 92.",
    h1: "Chauffagiste à Levallois-Perret : entretien et remplacement de chaudière",
    kicker: "Chauffagiste · Levallois-Perret",
    lead: "Entre le 17e arrondissement et la Seine, Levallois-Perret est l'une des communes de petite couronne que SERAGAZ cite dans sa zone, à quelques kilomètres de la rue de Dunkerque.",
    brief:
      "Chauffagiste à Levallois-Perret, SERAGAZ assure l'entretien annuel et le dépannage des chaudières et chauffe-eau gaz, leur installation et leur remplacement, le désembouage des circuits et le ramonage des conduits. L'entreprise familiale, fondée en 1985 à Paris 9e, travaille pour les particuliers, les syndics, les agences et les commerçants.",
    contactType: "remplacement",
    service: "Chauffagiste à Levallois-Perret",
    crumb: "Chauffagiste à Levallois-Perret",
    sections: [
      {
        h2: "Pourquoi faire appel à SERAGAZ à Levallois-Perret ?",
        answer:
          "Pour l'expérience d'une entreprise spécialisée dans les appareils à gaz depuis 1985, avec des techniciens formés chaque année chez les fabricants, qualifiée RGE, Professionnel Gaz et Partenaire GRDF. Levallois-Perret fait partie des communes que SERAGAZ dessert explicitement, en plus de l'ensemble des arrondissements parisiens.",
        paras: [
          "La ville a été largement reconstruite depuis les années 1970 : beaucoup de résidences y disposent d'un chauffage collectif, mais de nombreux appartements, dans les immeubles anciens comme dans certains programmes récents, ont une chaudière gaz individuelle à entretenir chaque année.",
        ],
      },
      {
        h2: "Quand remplacer une chaudière dans un appartement récent ?",
        answer:
          "Même dans un immeuble des années 1990 ou 2000, la chaudière d'origine approche souvent de ses limites après quinze à vingt ans. Si les pannes se répètent ou si la consommation augmente malgré l'entretien, le technicien étudie le remplacement par un appareil adapté au conduit et aux besoins du logement.",
        paras: [
          "Dans ces immeubles, les chaudières à ventouse sont fréquentes : leur remplacement par une chaudière à condensation est souvent plus simple que dans un immeuble ancien raccordé à une cheminée, mais il doit respecter les règles de sortie des fumées en façade ou en toiture.",
        ],
      },
      {
        h2: "Le désembouage a-t-il un intérêt avant de changer de chaudière ?",
        answer:
          "Oui, souvent. Les boues accumulées dans les radiateurs et les tuyaux d'une installation ancienne peuvent encrasser rapidement l'échangeur d'une chaudière neuve. Un désembouage, réalisé avant ou au moment du remplacement, protège le nouvel appareil et améliore la répartition de la chaleur dans toutes les pièces.",
        paras: [
          "Le technicien injecte un produit désembouant, rince le circuit et purge les radiateurs. Il juge sur place si l'opération est utile, en fonction de l'âge de l'installation et des symptômes observés.",
        ],
      },
    ],
    faq: [
      {
        q: "SERAGAZ intervient-elle aussi à Neuilly-sur-Seine ?",
        a: "Neuilly-sur-Seine ne figure pas dans la liste des communes citées par SERAGAZ, mais elle se trouve dans le rayon d'environ 15 km autour du 9e. Posez la question à l'équipe en indiquant votre adresse.",
      },
      {
        q: "Mon immeuble à Levallois a un chauffage collectif : qui contacter ?",
        a: "Pour une chaufferie collective, c'est le syndic de copropriété qui choisit le prestataire. SERAGAZ peut intervenir sur votre chauffe-eau gaz individuel ou votre compteur gaz si vous en avez un.",
      },
      {
        q: "Combien de temps dure le remplacement d'une chaudière ?",
        a: "La durée dépend de la configuration du logement et des adaptations nécessaires. Le technicien vous l'indique après l'étude des lieux, au moment du devis, pour que vous puissiez vous organiser.",
      },
    ],
    ctaTitle: "Votre chaudière à Levallois-Perret ?",
    ctaText: "Décrivez votre installation et votre projet : devis gratuit.",
    related: [PATHS.replacement, PATHS.descaling, "/chauffagiste-clichy"],
  },
  {
    slug: "chauffagiste-vincennes",
    path: "/chauffagiste-vincennes",
    zone: "Vincennes",
    trade: "chauffagiste",
    title: "Chauffagiste à Vincennes : chaudière gaz, ramonage | SERAGAZ",
    description:
      "Chauffagiste à Vincennes et Saint-Mandé : entretien, dépannage, remplacement de chaudière gaz, ramonage des conduits, désembouage. SERAGAZ, Paris 9e, 1985.",
    h1: "Chauffagiste à Vincennes : chaudières gaz, ramonage et entretien",
    kicker: "Chauffagiste · Vincennes et Saint-Mandé",
    lead: "Au bout de la ligne 1, Vincennes et sa voisine Saint-Mandé comptent beaucoup d'immeubles anciens et de maisons équipés de chaudières gaz individuelles.",
    brief:
      "Chauffagiste à Vincennes et à Saint-Mandé, deux communes citées par SERAGAZ dans sa zone, l'entreprise du 9e arrondissement entretient, dépanne et remplace les chaudières gaz, ramone les conduits des chaudières à tirage naturel et désemboue les circuits de chauffage des appartements comme des maisons du Val-de-Marne voisin de Paris.",
    contactType: "ramonage",
    service: "Chauffagiste à Vincennes",
    crumb: "Chauffagiste à Vincennes",
    sections: [
      {
        h2: "SERAGAZ se déplace-t-elle jusqu'à Vincennes ?",
        answer:
          "Oui. Vincennes et Saint-Mandé figurent toutes deux dans la liste des communes de petite couronne citées par SERAGAZ. Elles se trouvent à l'est de Paris, en bordure du bois de Vincennes, dans le rayon de 15 km que l'entreprise couvre autour de ses locaux de la rue de Dunkerque.",
        paras: [
          "Le centre de Vincennes, autour du château et de l'hôtel de ville, réunit des immeubles de la fin du XIXe et du début du XXe siècle. Les chaudières y sont souvent raccordées à des conduits de cheminée, ce qui implique un ramonage annuel en plus de l'entretien de l'appareil.",
        ],
      },
      {
        h2: "Faut-il ramoner le conduit d'une chaudière gaz dans une maison de Vincennes ?",
        answer:
          "Oui, si la chaudière est à tirage naturel, raccordée à un conduit de cheminée : le ramonage annuel est obligatoire et l'attestation est demandée par les assureurs. SERAGAZ protège les abords, nettoie le conduit, vérifie son état et le tirage, puis remet l'attestation à l'issue de l'intervention.",
        paras: [
          "Dans une maison, le conduit est souvent plus long et plus accessible depuis la toiture que dans un appartement. Le technicien vérifie aussi qu'aucun nid ou débris n'obstrue la sortie, un risque réel pour un conduit resté inutilisé quelque temps.",
          "Le ramonage peut être réalisé le même jour que l'entretien de la chaudière, avec une remise commerciale.",
        ],
      },
      {
        h2: "Quelles autres interventions SERAGAZ réalise-t-elle à l'est de Paris ?",
        answer:
          "Le dépannage des chaudières gaz, leur installation et leur remplacement, le détartrage et le désembouage des circuits, l'entretien des chauffe-eau gaz et le déplacement de compteur en tant que Partenaire GRDF. Les copropriétés passent par leur syndic, les particuliers directement par téléphone ou par le formulaire.",
        paras: [
          "Pour une maison chauffée par une chaudière ancienne au sol, le remplacement mérite une étude attentive : surface, isolation, nombre de radiateurs et besoins en eau chaude conditionnent la puissance et le type d'appareil à installer.",
        ],
      },
    ],
    faq: [
      {
        q: "Intervenez-vous à Montreuil ou à Fontenay-sous-Bois ?",
        a: "Ces communes ne figurent pas dans la liste publiée par SERAGAZ, mais elles se trouvent dans un rayon d'environ 15 km autour du 9e. Indiquez votre adresse dans votre demande : l'équipe vous répondra.",
      },
      {
        q: "Le ramonage est-il nécessaire chaque année même si je chauffe peu ?",
        a: "Oui, l'obligation est annuelle, quelle que soit l'utilisation. Pour les cheminées utilisées régulièrement, SERAGAZ recommande même deux ramonages par an.",
      },
      {
        q: "Peut-on prendre rendez-vous pour l'entretien et le ramonage ensemble ?",
        a: "Oui, c'est même conseillé : le technicien réalise les deux le même jour et vous bénéficiez d'une remise commerciale sur le ramonage.",
      },
    ],
    ctaTitle: "Une chaudière à Vincennes ou Saint-Mandé ?",
    ctaText: "Entretien, ramonage ou panne : l'équipe vous propose un rendez-vous.",
    related: [PATHS.sweeping, PATHS.maintenance, "/chauffagiste-clichy"],
  },
];
