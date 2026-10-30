import { PATHS } from "./site";
import type { Page } from "./types";

/**
 * Pages métier × zone : le 17e (siège de l'entreprise) et cinq zones voisines. Repères de quartier institutionnels,
 * à faire relire par un habitant. Aucune distance, aucun délai, aucun prix promis. La zone exacte d'intervention
 * est à faire confirmer par l'entreprise.
 */
type Local = Page & { slug: string; zone: string };

const local = (p: Omit<Local, "path">): Local => ({ ...p, path: `/${p.slug}` });

export const localPages: Local[] = [
  local({
    slug: "plombier-paris-17",
    zone: "Paris 17e",
    title: "Plombier Paris 17e : Batignolles, Ternes, Épinettes",
    description:
      "Plombier dans le 17e arrondissement : Houdry-Grenot, installée à Paris depuis 1996, pour fuites, sanitaires, tuyauterie et salles de bains des particuliers.",
    h1: "Plombier Paris 17e : Batignolles, Ternes, Épinettes et Monceau",
    kicker: "Plombier · Paris 17e",
    lead: "Le 17e est l'arrondissement de l'entreprise : celui qu'elle connaît rue par rue depuis 1996.",
    brief:
      "Pour un plombier à Paris 17e, Houdry-Grenot est installée dans l'arrondissement depuis 1996. L'entreprise intervient aux Batignolles, aux Ternes, aux Épinettes et à la Plaine Monceau pour les fuites, le sanitaire, la tuyauterie et la rénovation de salle de bains, chez les particuliers comme pour les copropriétés.",
    contactType: "plomberie",
    service: "Plombier à Paris 17e",
    crumb: "Plombier Paris 17e",
    photo: "facade",
    sections: [
      {
        h2: "Pourquoi choisir un plombier installé dans le 17e ?",
        answer:
          "Parce qu'il connaît les immeubles de l'arrondissement et n'a pas Paris à traverser pour venir. Houdry-Grenot est dans le 17e depuis 1996 : les colonnes, les caves et les cours des immeubles du quartier, ses plombiers les ont souvent déjà vues de l'intérieur, ce qui accélère le diagnostic.",
        paras: [
          "Le 17e rassemble des univers bien différents : les immeubles de pierre de la Plaine Monceau, l'ambiance villageoise des Batignolles autour de son square et de son marché, le quartier des Ternes et de l'avenue de Wagram, les Épinettes plus populaires, et les immeubles récents du nouveau quartier Clichy-Batignolles, autour du parc Martin Luther King.",
          "Chaque époque a ses matériaux et ses façons de faire passer l'eau. Une entreprise du quartier, c'est aussi un interlocuteur que l'on retrouve : celui qui a posé votre chauffe-eau peut revenir le voir, et le syndic de l'immeuble d'à côté le connaît déjà.",
        ],
      },
      {
        h2: "Quelles interventions de plomberie dans le 17e arrondissement ?",
        answer:
          "Le dépannage d'une fuite sous un évier, d'un WC qui coule ou d'une canalisation bouchée ; la pose d'un mitigeur, d'un lavabo ou d'un chauffe-eau ; la reprise d'une tuyauterie ancienne ; et la rénovation complète d'une salle de bains. Des interventions courtes comme des chantiers, selon votre besoin.",
        paras: [
          "Dans les immeubles anciens des Batignolles et des Ternes, une partie du réseau appartient à la copropriété. L'entreprise travaille pour des particuliers et pour des syndics : elle sait distinguer ce qui relève de votre appartement et ce qui doit être signalé au gestionnaire de l'immeuble.",
        ],
      },
      {
        h2: "Comment préparer la visite du plombier dans le 17e ?",
        answer:
          "Indiquez l'adresse exacte, l'étage, le code d'accès ou le nom à l'interphone, et la personne présente. Décrivez le problème en une phrase, ajoutez deux ou trois photos et repérez le robinet d'arrêt de l'appartement, souvent près du compteur d'eau dans la cuisine ou la salle de bains.",
        paras: [
          "Pour un local sur une rue commerçante du quartier, comme la rue de Lévis, la rue des Dames ou l'avenue de Wagram, précisez les horaires de votre activité : l'intervention peut alors s'organiser pour gêner le moins possible vos clients.",
        ],
      },
    ],
    faq: [
      {
        q: "Où est installé le plombier Houdry-Grenot dans le 17e ?",
        a: "L'entreprise est installée dans le 17e arrondissement de Paris, code postal 75017. Son téléphone est le 01 53 06 97 97. L'adresse de rue précise est communiquée lors de la prise de rendez-vous.",
      },
      {
        q: "L'entreprise intervient-elle dans tout le 17e ?",
        a: "Le 17e est son arrondissement : des Ternes aux Épinettes et de la Plaine Monceau aux Batignolles. Indiquez votre adresse dans la demande pour organiser le rendez-vous avec l'équipe.",
      },
      {
        q: "Peut-on demander une intervention pour un commerce du quartier ?",
        a: "Oui, l'entreprise travaille aussi pour les professionnels et les copropriétés. Précisez l'activité, les horaires d'ouverture et les contraintes d'accès dans votre demande.",
      },
    ],
    ctaTitle: "Un plombier dans votre arrondissement.",
    ctaText: "L'équipe de Houdry-Grenot organise le rendez-vous avec vous.",
    related: [PATHS.plumbing, PATHS.repair, "/plombier-paris-8"],
  }),
  local({
    slug: "plombier-paris-8",
    zone: "Paris 8e",
    title: "Plombier Paris 8e : immeubles haussmanniens | Houdry-Grenot",
    description:
      "Plombier à Paris 8e, voisin du 17e : Houdry-Grenot dépanne et installe dans les immeubles haussmanniens, hôtels particuliers, bureaux et commerces du quartier.",
    h1: "Plombier Paris 8e : immeubles haussmanniens, bureaux et commerces",
    kicker: "Plombier · Paris 8e",
    lead: "À quelques rues du parc Monceau, le 8e demande une plomberie discrète et soignée.",
    brief:
      "Pour un plombier à Paris 8e, Houdry-Grenot intervient depuis le 17e voisin, au-delà du parc Monceau. L'entreprise, fondée en 1996, dépanne et installe dans les immeubles haussmanniens, les appartements, les bureaux et les commerces du quartier, avec le souci de laisser les parties communes impeccables.",
    contactType: "plomberie",
    service: "Plombier à Paris 8e",
    crumb: "Plombier Paris 8e",
    photo: "cle",
    sections: [
      {
        h2: "Quelles particularités pour la plomberie des immeubles du 8e ?",
        answer:
          "Des immeubles de pierre haussmanniens aux colonnes anciennes, de grands appartements aux salles d'eau multiples et des étages élevés où la pression varie. Le plombier compose avec ces réseaux étendus, souvent modifiés au fil des décennies, en cherchant la solution qui préserve les décors et les parties communes.",
        paras: [
          "Entre la gare Saint-Lazare, la Madeleine et le parc Monceau, le 8e mêle logements, cabinets, bureaux et commerces. Les besoins diffèrent : dans un appartement, la discrétion et la propreté d'un chantier comptent ; dans un local d'activité, c'est la durée de l'intervention et la continuité du service.",
        ],
      },
      {
        h2: "Comment organiser une intervention dans un immeuble avec gardien ou digicode ?",
        answer:
          "En prévenant à l'avance le gardien ou le syndic, en indiquant les codes d'accès et en précisant l'étage et l'ascenseur disponible. Pour une coupure d'eau qui touche plusieurs logements, un affichage dans l'immeuble prévient les voisins. Ces détails évitent les attentes et les malentendus.",
        paras: [
          "Beaucoup d'immeubles du quartier imposent des horaires pour les travaux bruyants et la protection des parties communes : tapis dans l'escalier, ascenseur à ménager. Mentionnez-les dans votre demande pour que l'équipe arrive avec le bon matériel de protection.",
          "Houdry-Grenot travaille aussi pour des copropriétés : elle connaît le dialogue avec les syndics et les conseils syndicaux.",
        ],
      },
      {
        h2: "Un plombier peut-il intervenir dans un bureau ou une boutique du 8e ?",
        answer:
          "Oui, l'entreprise travaille aussi pour les professionnels. Pour un cabinet, un commerce ou un bureau, l'intervention s'organise selon vos horaires d'ouverture : fuite, sanitaire à remplacer, point d'eau à créer ou mise en conformité d'une arrivée. Précisez l'activité et les contraintes dans votre demande.",
        paras: [
          "Dans un local d'activité, signalez aussi si l'eau alimente une machine, un évier professionnel ou un point d'eau destiné au public : le plombier choisit alors le matériel en conséquence et prévoit si besoin un robinet d'arrêt dédié.",
        ],
      },
    ],
    faq: [
      {
        q: "Houdry-Grenot se déplace-t-elle dans le 8e arrondissement ?",
        a: "Le 8e est voisin du 17e où l'entreprise est installée. Indiquez votre adresse dans la demande : l'équipe confirme la possibilité d'intervenir et organise le rendez-vous avec vous.",
      },
      {
        q: "Faut-il prévenir le gardien avant l'intervention ?",
        a: "C'est recommandé : prévenez le gardien ou le syndic de la date, du créneau et de la nature des travaux, et transmettez les codes d'accès. Cela facilite l'accès à l'immeuble et à l'ascenseur.",
      },
      {
        q: "Peut-on faire une demande pour un local professionnel ?",
        a: "Oui, pour un commerce, un cabinet ou un bureau, décrivez l'activité et les horaires dans le formulaire de contact. L'entreprise tient compte de vos contraintes pour fixer le rendez-vous.",
      },
    ],
    ctaTitle: "Un plombier près du parc Monceau.",
    ctaText: "Décrivez votre besoin à l'équipe de Houdry-Grenot.",
    related: [PATHS.plumbing, "/plombier-paris-17", "/plombier-paris-16"],
  }),
  local({
    slug: "plombier-paris-16",
    zone: "Paris 16e",
    title: "Plombier Paris 16e : Passy, Auteuil | Houdry-Grenot",
    description:
      "Plombier à Paris 16e, voisin du 17e : Houdry-Grenot dépanne et installe pour grands appartements, immeubles des années 1930 et maisons de ville depuis 1996.",
    h1: "Plombier Paris 16e : grands appartements, Passy et Auteuil",
    kicker: "Plombier · Paris 16e",
    lead: "De la Porte Maillot à Passy, des immeubles aux grandes surfaces et aux réseaux étendus.",
    brief:
      "Pour un plombier à Paris 16e, Houdry-Grenot intervient depuis le 17e voisin, à partir de la Porte Maillot. L'entreprise, fondée en 1996, installe et dépanne dans les grands appartements, les immeubles des années 1930 et les maisons de ville de Passy et d'Auteuil, particuliers comme copropriétés.",
    contactType: "plomberie",
    service: "Plombier à Paris 16e",
    crumb: "Plombier Paris 16e",
    photo: "robinet",
    sections: [
      {
        h2: "Pourquoi la plomberie d'un grand appartement du 16e demande-t-elle du soin ?",
        answer:
          "Parce que les réseaux sont étendus : plusieurs salles d'eau, des cuisines éloignées, des alimentations longues et des colonnes qui desservent de nombreux étages. Une fuite se cache plus loin, une pression se perd sur de longues distances. Le diagnostic doit donc remonter le réseau avant de proposer une réparation.",
        paras: [
          "Le 16e s'étend de la Porte Maillot aux abords du Trocadéro, de Passy à Auteuil et aux lisières du bois de Boulogne. On y trouve des immeubles de pierre, des immeubles des années 1930 à la brique et au béton soignés, des hôtels particuliers et des maisons de ville avec jardin.",
        ],
      },
      {
        h2: "Quelles installations d'eau chaude et de sanitaire sont fréquentes dans le 16e ?",
        answer:
          "Le remplacement d'un chauffe-eau ou d'un ballon, la pose de robinetterie haut de gamme, la création d'une salle d'eau supplémentaire ou la remise à neuf d'une salle de bains. Chaque projet commence par un relevé des arrivées d'eau et des évacuations existantes pour savoir ce qui est possible.",
        paras: [
          "Pour un appareil de marque ou de designer, vérifiez avant l'achat les raccordements exigés : diamètre d'alimentation, hauteur d'évacuation, besoin d'une pression minimale. Le plombier peut contrôler ces points sur plan ou photo, ce qui évite d'immobiliser un chantier faute d'une pièce.",
          "Dans une maison de ville ou un hôtel particulier, pensez aussi aux robinets extérieurs et aux arrivées de jardin, à protéger du gel en hiver.",
        ],
      },
      {
        h2: "Comment demander un devis pour un chantier de plomberie dans le 16e ?",
        answer:
          "Par le formulaire de contact : décrivez le projet, l'adresse du lieu, ajoutez des photos et précisez si l'immeuble est en copropriété. L'entreprise reprend contact avec vous pour un rendez-vous, constate sur place puis remet un devis avant de commencer les travaux.",
        paras: [
          "Plus la demande est précise, plus le premier rendez-vous est utile : nombre de pièces d'eau concernées, appareils à conserver, souhaits de déplacement. Joindre un plan ou quelques photos d'ensemble suffit souvent à préparer l'échange.",
        ],
      },
    ],
    faq: [
      {
        q: "L'entreprise intervient-elle à Passy et à Auteuil ?",
        a: "Houdry-Grenot est installée dans le 17e et se déplace dans les arrondissements voisins. Indiquez votre adresse dans le formulaire : l'équipe confirme la possibilité d'intervenir et fixe un rendez-vous avec vous.",
      },
      {
        q: "Peut-on installer un appareil que l'on a acheté soi-même ?",
        a: "Oui, en général. Communiquez la référence de l'appareil dans votre demande pour que le plombier vérifie le raccordement. Il pourra ainsi dire si l'installation existante convient ou doit être adaptée.",
      },
      {
        q: "Que faire d'un robinet extérieur avant l'hiver ?",
        a: "Fermez son alimentation à l'intérieur, ouvrez le robinet extérieur pour le purger, puis laissez-le ouvert. Cela évite que l'eau gelée ne fasse éclater le raccord. En cas de doute, demandez conseil à un plombier.",
      },
    ],
    ctaTitle: "Un projet dans le 16e ?",
    ctaText: "Parlez-en à l'équipe de Houdry-Grenot, photos à l'appui.",
    related: [PATHS.bathroom, "/plombier-paris-17", "/plombier-paris-8"],
  }),
  local({
    slug: "plombier-paris-18",
    zone: "Paris 18e",
    title: "Plombier Paris 18e : Montmartre | Houdry-Grenot",
    description:
      "Plombier à Paris 18e, voisin du 17e : Houdry-Grenot dépanne et installe dans les immeubles de faubourg, ateliers et logements de Montmartre, depuis 1996.",
    h1: "Plombier Paris 18e : Montmartre, Clignancourt et la Butte",
    kicker: "Plombier · Paris 18e",
    lead: "Escaliers étroits, cours intérieures, immeubles de faubourg : une plomberie qui demande de l'attention.",
    brief:
      "Pour un plombier à Paris 18e, Houdry-Grenot intervient depuis le 17e voisin, de l'autre côté du boulevard des Batignolles. L'entreprise, fondée en 1996, dépanne et installe dans les immeubles de faubourg, les ateliers et les logements de Montmartre et de Clignancourt, chez les particuliers et pour les copropriétés.",
    contactType: "depannage",
    service: "Plombier à Paris 18e",
    crumb: "Plombier Paris 18e",
    photo: "lavabo",
    sections: [
      {
        h2: "Quelle plomberie dans les immeubles de faubourg du 18e ?",
        answer:
          "Des immeubles anciens aux canalisations souvent remaniées au fil des décennies : fonte pour les descentes, cuivre ou acier pour l'alimentation, évacuations qui descendent dans des cours étroites. Le plombier commence par identifier ces matériaux avant de raccorder ou de remplacer, afin de ne pas fragiliser ce qui dépend de l'immeuble.",
        paras: [
          "Le 18e va de Montmartre à Clignancourt, de la Goutte d'Or à La Chapelle. Sur la Butte, la pente du terrain se retrouve jusque dans les caves : certaines sont humides, et l'eau qui s'infiltre peut être confondue avec une fuite de canalisation. Un constat sur place aide à faire la différence.",
        ],
      },
      {
        h2: "Comment intervenir quand l'immeuble n'a pas d'ascenseur ?",
        answer:
          "En le signalant dès l'appel : étage, largeur d'escalier, stationnement possible. Le plombier prépare alors l'outillage à monter à pied et organise sa journée en conséquence. Pour un appareil volumineux comme une baignoire ou un ballon d'eau chaude, la livraison par l'escalier se prévoit à l'avance.",
        paras: [
          "Les étages élevés ont aussi leurs particularités : une pression d'eau plus faible, une colonne éloignée de la cave, des évacuations qui parcourent de longues distances. Ces éléments font partie du diagnostic et orientent les solutions proposées.",
          "Dans les petits logements et studios, la salle d'eau est souvent compacte : chaque centimètre compte, et le choix des appareils se fait avec le plombier, sur mesures.",
        ],
      },
      {
        h2: "Que faire en cas de fuite dans un appartement du 18e ?",
        answer:
          "Fermez le robinet d'arrêt, coupez l'électricité près de l'eau, épongez et prévenez voisins et syndic. Appelez ensuite Houdry-Grenot au 01 53 06 97 97 en décrivant l'étage et l'ampleur du dégât. Joindre des photos à la demande aide à préparer l'intervention.",
        paras: [
          "Si l'eau coule chez le voisin du dessous, notez l'heure et l'origine probable, et remplissez ensemble un constat amiable. Le plombier pourra ensuite décrire par écrit la cause et la réparation, utile pour l'assurance.",
        ],
      },
    ],
    faq: [
      {
        q: "Houdry-Grenot intervient-elle sur la Butte Montmartre ?",
        a: "L'entreprise est installée dans le 17e, voisin du 18e. Indiquez votre adresse et l'étage dans la demande : l'équipe confirme la possibilité d'intervenir et organise le rendez-vous.",
      },
      {
        q: "Une cave humide est-elle forcément une fuite de canalisation ?",
        a: "Non. L'humidité peut venir d'une infiltration du terrain, d'une condensation ou d'une canalisation. Un plombier constate sur place, relève le compteur et inspecte les réseaux pour distinguer ces causes avant tout travaux.",
      },
      {
        q: "Peut-on demander un dépannage pour un studio ?",
        a: "Oui. Décrivez le problème, l'adresse, l'étage et envoyez une photo. Pour un petit logement, le plombier vérifie aussi l'encombrement de la salle d'eau afin de proposer un appareil adapté.",
      },
    ],
    ctaTitle: "Une fuite à Montmartre ?",
    ctaText: "Appelez l'équipe de Houdry-Grenot ou décrivez le problème en ligne.",
    related: [PATHS.repair, "/plombier-paris-17", "/plombier-levallois-perret"],
  }),
  local({
    slug: "plombier-levallois-perret",
    zone: "Levallois-Perret",
    title: "Plombier Levallois-Perret : sanitaire, fuite | Houdry-Grenot",
    description:
      "Plombier à Levallois-Perret, commune voisine du 17e : Houdry-Grenot dépanne et installe sanitaires et tuyauteries pour copropriétés, commerces et particuliers.",
    h1: "Plombier à Levallois-Perret : copropriétés, commerces et logements",
    kicker: "Plombier · Levallois-Perret",
    lead: "À deux pas de la Porte de Champerret, une commune dense où la plomberie se travaille en copropriété.",
    brief:
      "Pour un plombier à Levallois-Perret, Houdry-Grenot intervient depuis le 17e arrondissement voisin. L'entreprise, fondée en 1996, dépanne, installe le sanitaire et reprend la tuyauterie des immeubles, des commerces et des logements de la commune, avec une attention particulière aux copropriétés.",
    contactType: "copropriete",
    service: "Plombier à Levallois-Perret",
    crumb: "Plombier Levallois-Perret",
    photo: "cle",
    sections: [
      {
        h2: "Pourquoi un plombier du 17e pour Levallois-Perret ?",
        answer:
          "Parce que Levallois est contiguë au 17e arrondissement : de la Porte de Champerret à Pereire, la limite se traverse à pied. Une équipe installée dans le 17e connaît déjà les rues, les accès et les immeubles de cette zone et organise ses déplacements sans longue traversée de Paris.",
        paras: [
          "Commune des Hauts-de-Seine très dense, Levallois mêle immeubles de rapport, résidences de logements récents et rez-de-chaussée commerçants. L'éventail des demandes est large : un particulier qui a une fuite, un commerçant qui change son point d'eau, un syndic qui veut une visite des parties communes.",
        ],
      },
      {
        h2: "Comment la plomberie d'une copropriété à Levallois se gère-t-elle ?",
        answer:
          "Par la distinction entre parties privatives et parties communes. Votre logement, du compteur divisionnaire ou du robinet d'arrêt aux appareils, relève de vous ; les colonnes, descentes et réseaux collectifs relèvent de la copropriété. Un plombier peut constater et rédiger ce qui aide le syndic à décider.",
        paras: [
          "Pour un syndic ou un conseil syndical, une demande utile précise l'adresse de l'immeuble, la nature du désordre, les logements touchés et la personne qui donne l'accès. Le formulaire de contact propose une entrée dédiée aux copropriétés.",
          "Dans un immeuble récent, la plomberie est plus accessible mais très cloisonnée : gaines techniques fermées, regards à repérer. Prévenir à l'avance permet d'obtenir l'accès nécessaire.",
        ],
      },
      {
        h2: "Un commerce de Levallois peut-il demander un dépannage ?",
        answer:
          "Oui. Houdry-Grenot travaille aussi pour les professionnels. Pour un commerce, un restaurant ou un bureau, indiquez l'activité, les horaires d'ouverture et le type de point d'eau concerné. L'intervention est organisée pour limiter la gêne et remettre l'installation en service au plus vite.",
        paras: [
          "Dans un local commercial, une fuite peut interrompre l'activité : relevez l'heure d'apparition, fermez l'arrêt de l'appareil et envoyez une photo avec la demande. Cela aide le plombier à venir avec le bon matériel dès le premier passage.",
        ],
      },
    ],
    faq: [
      {
        q: "L'entreprise se déplace-t-elle à Levallois-Perret ?",
        a: "Levallois est voisine du 17e arrondissement où Houdry-Grenot est installée. Indiquez l'adresse dans votre demande : l'équipe confirme la possibilité d'intervenir et fixe un rendez-vous.",
      },
      {
        q: "Un syndic peut-il demander une visite des parties communes ?",
        a: "Oui. Précisez l'adresse de l'immeuble, le désordre observé et la personne qui donne l'accès. Le plombier constate sur place et peut décrire ce qui relève des parties communes.",
      },
      {
        q: "Comment joindre l'entreprise depuis Levallois ?",
        a: "Par téléphone au 01 53 06 97 97 ou par e-mail à plomberie@houdry-grenot.com. Le formulaire de contact permet aussi d'envoyer des photos et l'adresse du lieu concerné.",
      },
    ],
    ctaTitle: "Un plombier à Levallois-Perret.",
    ctaText: "Décrivez votre demande à l'équipe de Houdry-Grenot.",
    related: [PATHS.plumbing, "/plombier-paris-17", "/plombier-neuilly-sur-seine"],
  }),
  local({
    slug: "plombier-neuilly-sur-seine",
    zone: "Neuilly-sur-Seine",
    title: "Plombier Neuilly-sur-Seine : villas et appartements",
    description:
      "Plombier à Neuilly-sur-Seine, de l'autre côté de la Porte Maillot : Houdry-Grenot installe et dépanne villas, hôtels particuliers et appartements, depuis 1996.",
    h1: "Plombier à Neuilly-sur-Seine : villas, hôtels particuliers et appartements",
    kicker: "Plombier · Neuilly-sur-Seine",
    lead: "De la Porte Maillot à l'avenue Charles-de-Gaulle, une plomberie soignée pour des maisons et des appartements.",
    brief:
      "Pour un plombier à Neuilly-sur-Seine, Houdry-Grenot intervient depuis le 17e arrondissement voisin, de l'autre côté de la Porte Maillot. L'entreprise, fondée en 1996, installe et dépanne dans les villas, les hôtels particuliers et les appartements de la commune, avec un travail propre et discret.",
    contactType: "plomberie",
    service: "Plombier à Neuilly-sur-Seine",
    crumb: "Plombier Neuilly-sur-Seine",
    photo: "robinet",
    sections: [
      {
        h2: "Quelles spécificités pour la plomberie des maisons de Neuilly ?",
        answer:
          "Les maisons et hôtels particuliers ont des réseaux plus longs, des étages à desservir, des salles de bains multiples et des extérieurs : jardin, robinets de puisage, parfois bassin. Le plombier vérifie l'ensemble du circuit, de l'arrivée d'eau à la dernière évacuation, avant de proposer un chantier cohérent.",
        paras: [
          "Neuilly s'étire du pont de Neuilly à la Porte Maillot, le long de l'avenue Charles-de-Gaulle, avec ses rues résidentielles proches du bois de Boulogne et l'île de la Jatte. On y rencontre des immeubles de pierre, des immeubles récents et des maisons de ville avec cour.",
        ],
      },
      {
        h2: "Comment protéger la plomberie d'une maison contre le gel ?",
        answer:
          "En fermant et purgeant les arrivées extérieures avant l'hiver, en calorifugeant les canalisations qui traversent des pièces non chauffées et en laissant un chauffage minimal dans une maison inoccupée. Un tuyau gelé peut éclater : au premier signe de gel, coupez l'eau et appelez un plombier.",
        paras: [
          "Dans une résidence secondaire ou une maison laissée vide, couper l'arrivée d'eau générale et vidanger les installations réduit les risques de dégât des eaux. Le plombier peut vous montrer où se trouvent les robinets à manœuvrer et dans quel ordre.",
          "Au printemps, un contrôle visuel des raccords et des robinets d'arrêt permet de repérer un suintement avant qu'il ne devienne une fuite.",
        ],
      },
      {
        h2: "Peut-on confier à Houdry-Grenot la plomberie d'une salle de bains à Neuilly ?",
        answer:
          "Oui, la rénovation de salle de bains fait partie des travaux de l'entreprise. Décrivez votre projet dans le formulaire, avec photos et plan si vous en avez, puis un plombier vient constater sur place et vous explique ce qui est possible avant de remettre un devis.",
        paras: [
          "Pour un projet soigné, préciser dès le départ les appareils souhaités, les emplacements possibles et le niveau de finition aide à construire un devis juste. La plomberie se décide avant le carrelage, pour ne pas casser un revêtement neuf.",
        ],
      },
    ],
    faq: [
      {
        q: "Houdry-Grenot intervient-elle à Neuilly-sur-Seine ?",
        a: "Neuilly est voisine du 17e arrondissement où l'entreprise est installée. Indiquez votre adresse dans la demande : l'équipe confirme la possibilité d'intervenir et organise le rendez-vous.",
      },
      {
        q: "Que faire si un tuyau a gelé ?",
        a: "Coupez l'eau à l'arrivée générale, ouvrez les robinets pour limiter la pression et n'utilisez pas de flamme pour dégeler. Prévenez ensuite un plombier : il vérifie si la canalisation est fissurée avant de rétablir l'eau.",
      },
      {
        q: "Peut-on envoyer des photos de la maison avec la demande ?",
        a: "Oui, le formulaire accepte jusqu'à quatre photos. Montrez les arrivées d'eau, le compteur, les appareils concernés et la pièce dans son ensemble pour préparer le constat.",
      },
    ],
    ctaTitle: "Un plombier de l'autre côté de la Porte Maillot.",
    ctaText: "Décrivez votre projet à l'équipe de Houdry-Grenot.",
    related: [PATHS.bathroom, "/plombier-paris-17", "/plombier-levallois-perret"],
  }),
];
