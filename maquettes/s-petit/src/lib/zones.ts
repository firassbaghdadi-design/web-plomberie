import { PATHS } from "./site";
import type { Page } from "./types";

/**
 * Pages métier × zone : le 14e est traité par les pages de service ; ici les arrondissements et communes voisins.
 * Chaque texte est propre à son secteur. Seuls des repères institutionnels sont cités (à faire relire par un habitant).
 */
export const zonePages: Page[] = [
  {
    path: "/plombier-paris-13",
    zone: "Paris 13e",
    title: "Plombier Paris 13e : fuite et dépannage | S. Petit",
    description:
      "Plombier pour le 13e arrondissement de Paris, voisin du 14e : fuites, sanitaires, chauffe-eau et salles de bains par S. Petit. Appelez le 01 45 42 42 84.",
    h1: "Plombier à Paris 13e, à côté du 14e",
    kicker: "Plomberie · Paris 13e",
    lead: "De la place d'Italie à la Butte-aux-Cailles, une équipe voisine qui connaît les grands ensembles comme les immeubles de pierre.",
    brief:
      "Le 13e arrondissement touche le 14e : S. Petit, installé avenue Jean Moulin depuis 2007, y intervient pour les fuites, les sanitaires, les chauffe-eau et les salles de bains. Du quartier de la Gare aux Gobelins, immeubles de pierre, ensembles des années 1930 et tours se côtoient. Appelez le 01 45 42 42 84.",
    contactType: "plomberie",
    service: "Plomberie et dépannage à Paris 13e",
    crumb: "Plombier Paris 13e",
    approach: "Du 14e, le 13e se rejoint en traversant le quartier de la Cité universitaire ou par le boulevard Auguste-Blanqui.",
    photo: "facade",
    photoPos: "50% 30%",
    caption: "Un immeuble parisien de pierre",
    sections: [
      {
        h2: "Quels immeubles trouve-t-on dans le 13e arrondissement ?",
        answer:
          "Le 13e juxtapose des immeubles de pierre autour de la place d'Italie et des Gobelins, des ensembles de brique des années 1930, la Butte-aux-Cailles et ses petites maisons, ainsi que les tours construites à partir des années 1970. Chaque type a sa propre plomberie, sa propre colonne et son propre chauffage.",
        paras: [
          "Dans un grand ensemble, la colonne d'eau dessert des dizaines de logements : une réparation mal planifiée se répercute sur tout l'escalier. Dans les petites maisons de la Butte-aux-Cailles, l'accès à l'arrivée d'eau passe parfois par une cour ou une cave étroite. Savoir cela avant d'arriver permet de venir avec les bons outils.",
        ],
      },
      {
        h2: "Pourquoi choisir un plombier voisin plutôt qu'un service anonyme ?",
        answer:
          "Parce que la proximité raccourcit le déplacement, simplifie le suivi et rend le même interlocuteur joignable après le chantier. S. Petit a un local fixe, avenue Jean Moulin, et un standard : vous savez où se trouve l'entreprise, qui répond et comment revenir en cas de reprise nécessaire.",
        paras: [
          "Les plateformes de mise en relation envoient un artisan différent à chaque fois. Un plombier de quartier, au contraire, finit par connaître vos immeubles, vos syndics, vos gardiens. Cette mémoire des lieux est une vraie économie de temps.",
        ],
      },
      {
        h2: "Comment organiser une intervention dans un grand ensemble ?",
        answer:
          "Prévenez le gardien ou le syndic, indiquez l'étage, le numéro de colonne si vous le connaissez et la nature du problème. Précisez l'accès au local technique et les horaires de l'ascenseur. Plus la demande est précise, plus l'intervention est rapide et le moins de passages sont nécessaires.",
        list: [
          "Adresse, bâtiment, escalier et étage",
          "Nom du syndic ou du gardien, et un numéro joignable",
          "Photos du problème, du compteur ou de l'appareil",
          "Horaires d'accès possibles pour la personne présente",
        ],
      },
      {
        h2: "Quelles demandes arrivent le plus souvent du 13e ?",
        answer:
          "Les fuites sur alimentation ou évacuation, le remplacement de robinetterie et de sanitaires, les chauffe-eau et les salles de bains vieillissantes. S. Petit y ajoute le gaz, avec la qualification Professionnel du Gaz. Chaque demande est décrite par téléphone ou par le formulaire de la page contact.",
        paras: [
          "Si votre logement est en copropriété avec chauffage collectif, rappelez que la chaufferie relève du syndic. Le plombier intervient alors sur la partie privative : radiateurs, robinets, branchements. Ce partage des responsabilités mérite d'être clair avant toute commande.",
        ],
      },
    ],
    faq: [
      { q: "Vous déplacez-vous dans tout le 13e ?", a: "Le 13e est l'un des arrondissements voisins couverts par cette page. Pour une adresse précise, par exemple près du boulevard périphérique, appelez le 01 45 42 42 84 : on confirme ensemble la possibilité et le délai de passage." },
      { q: "Les tours du 13e demandent-elles un savoir-faire particulier ?", a: "Les colonnes y desservent beaucoup de logements et l'accès aux gaines est encadré par le syndic. Une coordination préalable avec le gardien est utile. Le matériel et la méthode restent ceux de la plomberie ordinaire, avec davantage de précautions." },
      { q: "Peut-on obtenir un devis sans visite ?", a: "Pour un remplacement simple, des photos et une description suffisent parfois à établir un devis. Pour une salle de bains complète ou un travail sur colonne, une visite est préférable. La page contact permet d'envoyer jusqu'à quatre photos." },
    ],
    ctaTitle: "Un problème de plomberie dans le 13e ?",
    ctaText: "Envoyez l'adresse et une photo : le plombier du 14e vous répond, sans intermédiaire.",
    related: [PATHS.plumbing, PATHS.bathroom, "/plombier-paris-15", "/plombier-gentilly"],
  },
  {
    path: "/plombier-paris-15",
    zone: "Paris 15e",
    title: "Plombier Paris 15e : dépannage et salle de bains | S. Petit",
    description:
      "Plombier pour Paris 15e, voisin du 14e : dépannage, sanitaires, chauffage et salle de bains avec S. Petit, avenue Jean Moulin. Appelez le 01 45 42 42 84.",
    h1: "Plombier à Paris 15e, au plus près du 14e",
    kicker: "Plomberie · Paris 15e",
    lead: "Vaugirard, Convention, Beaugrenelle : le plus peuplé des arrondissements parisiens a besoin d'un plombier de proximité.",
    brief:
      "Le 15e arrondissement borde le 14e à l'ouest. S. Petit, plombier installé avenue Jean Moulin depuis 2007, y réalise dépannages, remplacement de sanitaires, travaux de salle de bains, chauffage et gaz. Appelez le 01 45 42 42 84 en début de journée ou envoyez le formulaire avec des photos.",
    contactType: "plomberie",
    service: "Plomberie et dépannage à Paris 15e",
    crumb: "Plombier Paris 15e",
    approach: "Depuis le 14e, on rejoint le 15e par la rue de Vaugirard ou par la rue de la Convention, sans traverser le fleuve.",
    photo: "mains",
    photoPos: "50% 55%",
    caption: "Un évier, un raccord, un travail soigné",
    sections: [
      {
        h2: "Pourquoi le 15e a-t-il autant de demandes de plomberie ?",
        answer:
          "Le 15e est le plus peuplé des arrondissements de Paris, avec des immeubles de toutes les époques : pierre de taille, briques des années 1930, tours de Beaugrenelle. Plus il y a de logements, plus il y a de colonnes, de robinets et de chauffe-eau à entretenir ou à remplacer.",
        paras: [
          "La rue de Vaugirard, la plus longue de Paris, traverse tout l'arrondissement et donne une idée de son étendue. Un plombier qui y intervient doit s'attendre à des accès très divers : cours intérieures, escaliers de service, parkings souterrains.",
        ],
      },
      {
        h2: "Que peut-on réparer sans démolir dans un immeuble des années 1930 ?",
        answer:
          "Beaucoup de choses : robinetterie, siphons, flexibles, groupes de sécurité, joints de WC ou de lavabo, voire certains tronçons apparents. Les gaines techniques de l'époque sont souvent accessibles par des trappes, ce qui limite la casse. Le plombier propose d'abord la solution la moins destructrice.",
        paras: [
          "Les immeubles de brique du 15e ont souvent des gaines accessibles depuis le palier ou la salle de bains. Un plombier qui connaît cette organisation peut éviter d'ouvrir un mur : un bon diagnostic vaut mieux qu'un coup de burin.",
        ],
      },
      {
        h2: "Faut-il changer toute la plomberie lors d'une rénovation de salle de bains ?",
        answer:
          "Pas nécessairement. On remplace les alimentations et évacuations qui sont en mauvais état ou mal placées, on garde celles qui sont saines. Un contrôle de l'ensemble avant la dépose évite les mauvaises surprises et permet d'ajuster le devis avant que la démolition ne commence.",
        list: [
          "Contrôle de l'état des canalisations visibles et accessibles",
          "Décision sur ce qui est conservé et ce qui est repris",
          "Devis écrit avec la hauteur finie du receveur et le type de paroi",
          "Coordination des artisans partenaires pour l'électricité et la peinture",
        ],
      },
      {
        h2: "Peut-on programmer une intervention en dehors des heures de bureau ?",
        answer:
          "L'accueil de S. Petit est ouvert du lundi au jeudi de 7 h 30 à 17 h 20 et le vendredi jusqu'à 16 h 20. Les créneaux d'intervention se fixent au téléphone selon la charge de l'équipe. Aucun service de nuit ou de week-end n'est annoncé ici.",
        paras: [
          "Si vous êtes absent en journée, désignez un voisin ou le gardien pour ouvrir la porte, et laissez le numéro de téléphone d'une personne joignable. Dans les grands immeubles du 15e, le gardien connaît souvent la colonne et peut guider l'intervenant.",
        ],
      },
    ],
    faq: [
      { q: "Quels quartiers du 15e sont couverts ?", a: "Cette page vise l'ensemble du 15e, de Montparnasse à Beaugrenelle. Pour les adresses les plus éloignées du 14e, appelez avant d'écrire : la disponibilité du jour dépend du planning de l'équipe." },
      { q: "Pouvez-vous remplacer un chauffe-eau dans un studio ?", a: "Oui, si l'emplacement le permet. Il faut une arrivée d'eau, une évacuation de la soupape et soit une prise soit un raccordement au gaz. Envoyez une photo de l'ancien appareil et de son étiquette pour préparer la bonne référence." },
      { q: "Les copropriétés peuvent-elles demander plusieurs devis ?", a: "Oui, c'est même la règle pour les travaux votés en assemblée. Indiquez la nature du chantier, les parties concernées et la date de l'assemblée : le devis sera rédigé dans une forme utilisable par le syndic." },
    ],
    ctaTitle: "Un dépannage ou un projet dans le 15e ?",
    ctaText: "Appelez l'avenue Jean Moulin ou envoyez une demande avec photos : la réponse vient du voisin d'à côté.",
    related: [PATHS.plumbing, PATHS.heating, "/plombier-paris-13", "/plombier-paris-6"],
  },
  {
    path: "/plombier-paris-6",
    zone: "Paris 6e",
    title: "Plombier Paris 6e : immeubles anciens, dépannage | S. Petit",
    description:
      "Plombier pour le 6e arrondissement de Paris, au nord du 14e : immeubles anciens, escaliers étroits, fuites et sanitaires. S. Petit, appelez le 01 45 42 42 84.",
    h1: "Plombier à Paris 6e, du Luxembourg à Montparnasse",
    kicker: "Plomberie · Paris 6e",
    lead: "Pierre de taille, escaliers étroits, chambres de service : le 6e demande de la méthode et de la discrétion.",
    brief:
      "Le 6e arrondissement jouxte le 14e par le quartier de Montparnasse. S. Petit, plombier avenue Jean Moulin depuis 2007, y intervient pour les fuites, les sanitaires, les chauffe-eau et les salles de bains. Dans ces immeubles anciens, l'accès et le soin comptent autant que la technique. Appelez le 01 45 42 42 84.",
    contactType: "plomberie",
    service: "Plomberie et dépannage à Paris 6e",
    crumb: "Plombier Paris 6e",
    approach: "Du 14e, le boulevard du Montparnasse mène directement au 6e : on y passe sans quitter le quartier.",
    photo: "cuivre",
    photoPos: "50% 35%",
    caption: "Un raccord, au millimètre",
    sections: [
      {
        h2: "Quelles particularités pour un plombier dans le 6e arrondissement ?",
        answer:
          "Le 6e réunit le Luxembourg, Saint-Germain-des-Prés et l'Odéon, avec des immeubles de pierre parfois classés, des escaliers étroits et des étages sans ascenseur. Le matériel se monte à la main, l'accès aux colonnes est restreint et les copropriétés sont attentives au bruit comme à la propreté.",
        paras: [
          "Dans ces immeubles, un chantier de plomberie ressemble à un travail d'horloger : il faut protéger les parties communes, prévenir les voisins, porter le matériel par l'escalier. C'est une affaire de méthode autant que de technique, et l'on gagne à confier le sujet à une équipe habituée aux contraintes parisiennes.",
        ],
      },
      {
        h2: "Peut-on rénover une salle de bains dans un appartement ancien ?",
        answer:
          "Oui, avec des précautions : vérifier l'état du plancher, la pente de l'évacuation, la hauteur disponible sous plafond et le règlement de copropriété. Les anciens appartements ont souvent des pièces d'eau exiguës où chaque centimètre compte. Un projet réaliste commence par des mesures précises.",
        paras: [
          "Les solutions compactes existent : douche à l'italienne sur un receveur extra-plat, lavabo suspendu, WC suspendu avec bâti-support. Elles demandent de bonnes évacuations et un travail soigné sur l'étanchéité. Le devis doit préciser ces points.",
        ],
      },
      {
        h2: "Comment limiter les nuisances d'un chantier en copropriété ?",
        answer:
          "En prévenant le syndic et les voisins, en protégeant l'escalier et l'ascenseur, en respectant les horaires imposés par le règlement de copropriété, et en évacuant les gravats chaque jour. Une communication claire évite la plupart des conflits dans un immeuble très occupé.",
        list: [
          "Affichette dans le hall avec les dates du chantier",
          "Protection des sols et des parois communes",
          "Horaires de travail respectant le règlement",
          "Évacuation quotidienne des déchets",
        ],
      },
      {
        h2: "Un plombier peut-il aussi coordonner les autres métiers ?",
        answer:
          "S. Petit coordonne, d'après un client, les artisans partenaires chargés de l'électricité et de la peinture lorsqu'une salle d'eau est refaite. Un seul interlocuteur suit alors le planning et la réception. Demandez au devis qui fait quoi et qui est assuré pour quoi.",
        paras: [
          "Dans un appartement du 6e, où les voisins sont proches et les contraintes nombreuses, cette coordination limite les allers-retours et les semaines d'attente entre deux corps de métier. Un calendrier partagé aide chacun.",
        ],
      },
    ],
    faq: [
      { q: "Intervenez-vous dans les petits appartements sans ascenseur ?", a: "Oui, le matériel se monte à la main. Indiquez l'étage dans votre demande : cela permet de prévoir l'équipement et le temps de manutention. Pour les gros appareils, un ballon ou un receveur, l'accès fait partie du devis." },
      { q: "Faut-il une autorisation pour changer des sanitaires ?", a: "Pas pour un remplacement à l'identique. Si les travaux touchent aux parties communes, à une colonne ou à l'aspect extérieur, il faut l'accord du syndic. Le règlement de copropriété précise ce qui est possible : consultez-le avant le devis." },
      { q: "Peut-on obtenir un rendez-vous rapidement ?", a: "Cela dépend du planning. Appelez au 01 45 42 42 84 en début de journée, ou envoyez le formulaire avec photos : la réponse précise le créneau possible. Aucun délai n'est promis sur ce site." },
    ],
    ctaTitle: "Un projet dans un immeuble ancien du 6e ?",
    ctaText: "Décrivez l'immeuble, l'étage et le problème : on vous répond avec un créneau de visite.",
    related: [PATHS.plumbing, PATHS.bathroom, "/plombier-paris-15", "/plombier-paris-13"],
  },
  {
    path: "/plombier-montrouge",
    zone: "Montrouge",
    title: "Plombier Montrouge : proche du 14e, dépannage | S. Petit",
    description:
      "Plombier pour Montrouge, commune des Hauts-de-Seine voisine de Paris 14e : fuites, sanitaires, chauffage et gaz avec S. Petit. Appelez le 01 45 42 42 84.",
    h1: "Plombier à Montrouge, à côté de Paris 14e",
    kicker: "Plomberie · Montrouge",
    lead: "Une commune collée au 14e, des immeubles récents et des maisons de ville, un plombier à quelques minutes.",
    brief:
      "Montrouge, dans les Hauts-de-Seine, touche le 14e arrondissement au sud. S. Petit, installé avenue Jean Moulin à Paris 14e, peut y intervenir pour les fuites, les sanitaires, les chauffe-eau, les salles de bains et le gaz. Vérifiez la disponibilité de l'équipe en appelant le 01 45 42 42 84.",
    contactType: "plomberie",
    service: "Plomberie et dépannage à Montrouge",
    crumb: "Plombier Montrouge",
    approach: "De l'avenue Jean Moulin, Montrouge se rejoint en quelques minutes en franchissant le boulevard périphérique.",
    photo: "bain",
    photoPos: "50% 50%",
    caption: "Dans une salle de bains, la goutte guette",
    sections: [
      {
        h2: "S. Petit intervient-il hors de Paris, à Montrouge ?",
        answer:
          "Montrouge est voisine immédiate du 14e et fait partie des communes couvertes par cette page. L'entreprise est parisienne, installée avenue Jean Moulin : confirmez la possibilité d'une intervention en appelant, en précisant l'adresse. Un délai de déplacement plus court qu'à l'autre bout de Paris est un avantage pour tout le monde.",
        paras: [
          "Les départements changent, pas la plomberie : une fuite à Montrouge se traite comme une fuite rue d'Alésia. En revanche, le syndic, le gestionnaire de l'immeuble et le distributeur d'eau peuvent être différents. Mentionnez-les dans la demande pour gagner du temps.",
        ],
      },
      {
        h2: "Quels logements trouve-t-on à Montrouge ?",
        answer:
          "Montrouge mêle des immeubles récents le long des grands axes, des résidences des années 1960 à 1980, et de petites maisons de ville dans les rues calmes. La plomberie varie du cuivre au multicouche : les raccords, les accès et les contraintes de copropriété ne sont jamais les mêmes d'un immeuble à l'autre.",
        paras: [
          "Les immeubles récents ont souvent des gaines techniques accessibles, mais des appareils plus difficiles à trouver en pièces détachées. Les petites maisons, elles, ont parfois eu plusieurs générations de travaux et des tuyaux de natures différentes qui se côtoient.",
        ],
      },
      {
        h2: "Peut-on remplacer un chauffe-eau dans une maison de ville ?",
        answer:
          "Oui : on dépose l'ancien appareil, on installe le nouveau, on refait les raccordements et on contrôle la sécurité. Si l'appareil fonctionne au gaz, l'opération relève d'un professionnel du gaz. Envoyez une photo de l'étiquette et de l'emplacement pour préparer un devis fiable.",
        list: [
          "Photo de l'appareil actuel et de son étiquette",
          "Type d'énergie : électricité ou gaz",
          "Accès au local, hauteur sous plafond",
          "Évacuation de la soupape de sécurité",
        ],
      },
      {
        h2: "Comment contacter l'entreprise depuis Montrouge ?",
        answer:
          "Par téléphone au 01 45 42 42 84 du lundi au jeudi de 7 h 30 à 17 h 20 et le vendredi jusqu'à 16 h 20, ou par la page contact avec photos. Indiquez la commune, l'adresse exacte et le problème. L'équipe confirme si l'intervention est possible et à quel moment.",
        paras: [
          "Pour une visite, prévoyez un créneau où une personne peut ouvrir le logement et la cave. Si vous êtes propriétaire bailleur, précisez qui sera présent pour l'accès, locataire ou gardien.",
        ],
      },
    ],
    faq: [
      { q: "Les frais de déplacement sont-ils différents hors de Paris ?", a: "Le devis précise tout déplacement. La proximité de Montrouge avec le 14e en limite le poids, mais aucun tarif n'est publié ici : demandez le détail avant de valider, et comparez ce que chaque devis comprend." },
      { q: "Intervenez-vous pour les syndics de Montrouge ?", a: "Oui, la demande se fait par la page contact en précisant la copropriété, la partie commune concernée et la personne qui ouvre l'accès. Un devis adapté peut être adressé au syndic pour validation en assemblée." },
      { q: "Faut-il appeler ou écrire ?", a: "Pour une urgence, appelez : c'est le moyen le plus direct. Pour un projet, écrivez avec photos : cela permet de préparer un devis précis. Dans les deux cas, indiquez l'adresse et l'étage." },
    ],
    ctaTitle: "Un dépannage ou un projet à Montrouge ?",
    ctaText: "Indiquez l'adresse et joignez une photo : la réponse arrive du 14e voisin.",
    related: [PATHS.plumbing, PATHS.heating, "/plombier-gentilly", "/plombier-paris-15"],
  },
  {
    path: "/plombier-gentilly",
    zone: "Gentilly",
    title: "Plombier Gentilly : voisin du 14e et du 13e | S. Petit",
    description:
      "Plombier pour Gentilly (Val-de-Marne), à la limite des 13e et 14e arrondissements de Paris : fuites, sanitaires, chauffage. S. Petit, appelez le 01 45 42 42 84.",
    h1: "Plombier à Gentilly, aux portes de Paris 14e",
    kicker: "Plomberie · Gentilly",
    lead: "Gentilly touche Paris par les 13e et 14e arrondissements : une adresse voisine pour un plombier de proximité.",
    brief:
      "Gentilly, dans le Val-de-Marne, borde Paris au niveau des 13e et 14e arrondissements. S. Petit, installé avenue Jean Moulin, peut y intervenir pour les fuites, les sanitaires, les chauffe-eau, les salles de bains et le gaz. Appelez le 01 45 42 42 84 pour vérifier la disponibilité de l'équipe.",
    contactType: "plomberie",
    service: "Plomberie et dépannage à Gentilly",
    crumb: "Plombier Gentilly",
    approach: "Gentilly se rejoint depuis le 14e par la porte de Gentilly ou l'avenue de la Porte-d'Italie, après le boulevard périphérique.",
    photo: "facade",
    photoPos: "50% 60%",
    caption: "Un immeuble de pierre, vu d'en bas",
    sections: [
      {
        h2: "Pourquoi appeler un plombier du 14e pour Gentilly ?",
        answer:
          "Parce que Gentilly est limitrophe du 14e : le trajet est court, et vous bénéficiez d'une entreprise installée, fondée en 2007, avec un standard et une adresse fixes. Ce n'est pas un service lointain qui envoie un inconnu : c'est une équipe de quartier qui élargit son secteur d'un pas.",
        paras: [
          "Un chantier de plomberie, ce sont des allers-retours : relevé, devis, passage, reprise éventuelle. Moins le trajet est long, plus ces allers-retours sont faciles à organiser, et plus un éventuel complément est vite réglé.",
        ],
      },
      {
        h2: "Quels habitats trouve-t-on à Gentilly ?",
        answer:
          "Gentilly associe des immeubles collectifs de l'après-guerre, des résidences récentes, des petits immeubles de rapport et des maisons de ville. Les rivières anciennes, comme la Bièvre aujourd'hui enterrée, ont marqué le sous-sol : l'humidité des caves et le niveau des évacuations y méritent un œil attentif.",
        paras: [
          "Dans les caves et sous-sols, les évacuations basses sont plus sensibles aux remontées. Un clapet anti-retour bien posé, un siphon propre et une pente respectée évitent bien des désagréments. Le plombier vérifie ces points quand l'on évoque des odeurs ou des écoulements lents.",
        ],
      },
      {
        h2: "Que contrôler quand une évacuation s'écoule lentement ?",
        answer:
          "Regardez d'abord le siphon et la bonde, qui s'encrassent souvent de cheveux et de savon. Si le problème persiste sur plusieurs appareils, il vient de la colonne ou de l'évacuation commune. N'utilisez pas de produit corrosif dans les vieilles canalisations : ils attaquent les raccords.",
        list: [
          "Siphon et bonde propres",
          "Ventilation de la colonne d'évacuation",
          "Pente des tuyaux visibles",
          "Autres appareils touchés dans l'immeuble",
        ],
      },
      {
        h2: "Peut-on demander un devis pour un projet à Gentilly ?",
        answer:
          "Oui : décrivez le projet dans le formulaire de la page contact, avec l'adresse, des photos et vos disponibilités. L'équipe vous répond pour confirmer la faisabilité, fixer une visite si nécessaire et établir un devis écrit. Aucun prix n'est publié sur ce site.",
        paras: [
          "Pour une salle de bains, apportez des mesures de la pièce et une idée du budget : cela permet d'orienter le projet vers les solutions réalistes. Pour un remplacement simple, une photo et la référence de l'appareil suffisent.",
        ],
      },
    ],
    faq: [
      { q: "Gentilly est-elle dans le périmètre habituel ?", a: "C'est une commune voisine du 14e, présentée ici parmi les secteurs proches. La possibilité d'intervenir dépend du planning du moment : appelez le 01 45 42 42 84 avec l'adresse pour obtenir une réponse précise." },
      { q: "Intervenez-vous en soirée ou le week-end ?", a: "L'accueil est ouvert en semaine, de 7 h 30 à 17 h 20 du lundi au jeudi et jusqu'à 16 h 20 le vendredi. Aucun service de soirée ou de week-end n'est annoncé : pour une fuite, coupez l'arrivée d'eau et appelez à l'ouverture." },
      { q: "Quels documents préparer pour un devis ?", a: "L'adresse, le nom du syndic ou du propriétaire le cas échéant, des photos de la zone concernée et, pour un appareil, la référence inscrite sur l'étiquette. Plus la demande est complète, plus le devis est exact." },
    ],
    ctaTitle: "Un dépannage ou un projet à Gentilly ?",
    ctaText: "Envoyez l'adresse et une photo : on vous dit rapidement si l'équipe peut passer.",
    related: [PATHS.plumbing, PATHS.bathroom, "/plombier-montrouge", "/plombier-paris-13"],
  },
];
