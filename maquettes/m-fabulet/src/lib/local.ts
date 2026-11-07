import { PATHS } from "./site";
import type { Page } from "./types";

/**
 * Pages zone : les communes voisines de La Garenne-Colombes. Chaque texte est propre à la commune (type de bâti,
 * repères institutionnels). Aucun délai, prix ou chantier inventé : les repères sont à faire relire par l'entreprise.
 */
export const localPages: Page[] = [
  {
    path: "/couvreur-colombes",
    kind: "zone",
    zone: "Colombes",
    service: "Couverture et charpente à Colombes",
    title: "Couvreur à Colombes (92700) : toiture, charpente, zinc",
    description:
      "Couvreur à Colombes, près de La Garenne-Colombes : pavillons en tuiles, charpentes anciennes, gouttières zinc, Velux. M. Fabulet, devis et visite gratuits.",
    h1: "Couvreur à Colombes, toitures et charpentes",
    kicker: "Zone · Colombes",
    lead: "Colombes touche La Garenne-Colombes : l'atelier du boulevard de la République est à quelques minutes des pavillons et des petits immeubles de la ville.",
    brief:
      "M. Fabulet Couverture intervient à Colombes depuis son atelier de La Garenne-Colombes, la commune voisine. Pavillons en meulière couverts de tuiles, maisons de ville, petits immeubles : l'artisan répare les fuites, refait les toitures, traite les charpentes, pose gouttières et Velux. Le déplacement et le devis sont gratuits à Colombes comme ailleurs.",
    contactType: "couverture",
    crumb: "Couvreur à Colombes",
    photo: "tuiles-chantier",
    landmark: "de la mairie de Colombes au stade Yves-du-Manoir",
    sections: [
      {
        h2: "Quels toits rencontre-t-on le plus souvent à Colombes ?",
        answer:
          "Beaucoup de pavillons du début du vingtième siècle, en meulière ou en brique, couverts de tuiles mécaniques en terre cuite, avec des lucarnes et des souches de cheminée. On trouve aussi des maisons de ville mitoyennes et des petits immeubles à toiture zinc. Chaque type demande des gestes et des matériaux différents.",
        paras: [
          "Sur ces pavillons, les points faibles sont connus : tuiles de rive qui se déplacent, faîtages dont le mortier s'effrite, solins de cheminée fissurés, gouttières anciennes qui se décrochent. Une visite annuelle permet de les reprendre avant qu'une fuite n'apparaisse.",
        ],
      },
      {
        h2: "Peut-on rénover une toiture de pavillon sans changer son allure ?",
        answer:
          "Oui. Les tuiles d'origine peuvent souvent être déposées, triées et reposées en complétant avec des modèles proches. Quand elles sont trop usées, on choisit une tuile neuve de même forme et de même teinte. Les épis, rives et faîtages sont refaits à l'identique pour garder le caractère de la maison.",
        paras: [
          "Une réfection est aussi le bon moment pour isoler sous la couverture et pour traiter la charpente, visible une fois les tuiles retirées.",
          "À Colombes comme dans les communes voisines, une modification visible de la toiture peut demander une déclaration en mairie : renseignez-vous auprès du service urbanisme.",
        ],
        photo: "tuiles-pose",
      },
    ],
    faq: [
      {
        q: "Intervenez-vous dans tous les quartiers de Colombes ?",
        a: "Oui, l'atelier de La Garenne-Colombes est tout proche : de la mairie au stade Yves-du-Manoir, tous les quartiers sont desservis. Indiquez l'adresse exacte dans votre demande.",
      },
      {
        q: "Faites-vous les gouttières des pavillons à Colombes ?",
        a: "Oui, en zinc ou en PVC, avec les descentes pluviales. Le zinc s'accorde bien aux façades en meulière et en brique de la ville.",
      },
      {
        q: "Peut-on vous montrer le toit en photo avant la visite ?",
        a: "Oui, joignez jusqu'à quatre photos au formulaire de contact. Une vue depuis la rue et une vue des combles aident beaucoup.",
      },
    ],
    ctaTitle: "Un toit à Colombes ?",
    related: ["/couvreur-bois-colombes", PATHS.roofing, PATHS.zinc],
  },
  {
    path: "/couvreur-bois-colombes",
    kind: "zone",
    zone: "Bois-Colombes",
    service: "Couverture et charpente à Bois-Colombes",
    title: "Couvreur à Bois-Colombes (92270) : tuiles, zinc, Velux",
    description:
      "Couvreur à Bois-Colombes : maisons en meulière, toits de tuiles, lucarnes, zinc et Velux. M. Fabulet, artisan de la ville voisine, devis et visite gratuits.",
    h1: "Couvreur à Bois-Colombes, maisons et lucarnes",
    kicker: "Zone · Bois-Colombes",
    lead: "Bois-Colombes et La Garenne-Colombes partagent les mêmes rues pavillonnaires : les mêmes toits, les mêmes savoir-faire.",
    brief:
      "À Bois-Colombes, M. Fabulet Couverture entretient et rénove les toitures des maisons et des petits immeubles. L'artisan, installé dans la commune voisine de La Garenne-Colombes, travaille la tuile, l'ardoise et le zinc, reprend les lucarnes et pose les fenêtres de toit Velux. Il traite aussi les charpentes et isole les greniers, avec devis gratuit.",
    contactType: "couverture",
    crumb: "Couvreur à Bois-Colombes",
    photo: "toit-velux",
    landmark: "de la gare de Bois-Colombes à l'hôtel de ville",
    sections: [
      {
        h2: "Comment entretenir une lucarne ancienne à Bois-Colombes ?",
        answer:
          "Une lucarne réunit tout ce qui fuit facilement : un petit toit, des jouées, des noquets en zinc et une menuiserie. Il faut surveiller les raccords entre la lucarne et la couverture, refaire les joints et remplacer le zinc fatigué. Bien entretenue, elle garde son charme sans laisser entrer l'eau.",
        paras: [
          "Les maisons de Bois-Colombes comptent beaucoup de lucarnes et de toits à plusieurs pans. Chaque changement de pente crée une noue ou un raccord : ce sont les premiers endroits que l'artisan contrôle lors d'une visite.",
        ],
        photo: "tuiles-gros-plan",
      },
      {
        h2: "Faut-il préférer une lucarne ou une fenêtre de toit Velux ?",
        answer:
          "La lucarne donne de la hauteur et une vraie fenêtre verticale, mais elle demande un chantier de charpente et souvent une autorisation. La fenêtre de toit Velux se pose dans le plan du toit, plus simplement, et fait entrer davantage de lumière. M. Fabulet, installateur conseil expert Velux, vous aide à choisir.",
        paras: [
          "Le choix dépend aussi de l'aspect de la rue : sur certaines façades, une fenêtre de toit discrète côté jardin s'intègre mieux qu'une nouvelle lucarne côté rue.",
          "Dans les deux cas, l'étanchéité autour de l'ouvrage reste le point décisif, et c'est un travail de couvreur.",
        ],
      },
    ],
    faq: [
      {
        q: "Êtes-vous loin de Bois-Colombes ?",
        a: "Non, l'atelier se trouve à La Garenne-Colombes, commune limitrophe. De la gare de Bois-Colombes à l'hôtel de ville, toute la commune est desservie.",
      },
      {
        q: "Refaites-vous le zinc des lucarnes ?",
        a: "Oui : noquets, solins, habillages et petits toits en zinc. Le devis précise les pièces à remplacer après la visite.",
      },
      {
        q: "Isolez-vous les combles des maisons de Bois-Colombes ?",
        a: "Oui, au sol des combles perdus ou sous les rampants des combles habités, après avoir vérifié que la couverture est saine.",
      },
    ],
    ctaTitle: "Une maison à Bois-Colombes ?",
    related: ["/couvreur-colombes", PATHS.velux, PATHS.insulation],
  },
  {
    path: "/couvreur-courbevoie",
    kind: "zone",
    zone: "Courbevoie",
    service: "Couverture et zinguerie à Courbevoie",
    title: "Couvreur à Courbevoie (92400) : zinc, toitures, gouttières",
    description:
      "Couvreur à Courbevoie : toits en zinc des immeubles, pavillons en tuiles, gouttières, ravalement. M. Fabulet, de La Garenne-Colombes, devis et visite gratuits.",
    h1: "Couvreur à Courbevoie, zinc et immeubles",
    kicker: "Zone · Courbevoie",
    lead: "Entre les immeubles de Bécon et les maisons des rues plus calmes, Courbevoie mêle toits en zinc et couvertures en tuiles.",
    brief:
      "À Courbevoie, M. Fabulet Couverture intervient sur les toitures en zinc des immeubles comme sur les couvertures en tuiles des maisons. L'artisan, installé à La Garenne-Colombes juste à côté, répare les fuites, refait chéneaux et gouttières, reprend les souches de cheminée et assure le ravalement des façades. Devis et déplacement sont gratuits.",
    contactType: "zinguerie",
    crumb: "Couvreur à Courbevoie",
    photo: "toit-briques",
    landmark: "du quartier de Bécon aux abords de La Défense",
    sections: [
      {
        h2: "Comment se passe une intervention sur un toit d'immeuble à Courbevoie ?",
        answer:
          "Le syndic ou le gestionnaire signale le désordre, l'artisan organise l'accès aux combles ou à la terrasse, puis inspecte la couverture et la zinguerie. Il met hors d'eau si besoin, rédige un devis détaillé pour la copropriété et planifie les travaux avec le conseil syndical. Les parties privatives touchées sont signalées.",
        paras: [
          "Sur les immeubles, les fuites viennent souvent des chéneaux, des descentes encastrées et des raccords autour des souches de cheminée. Ces ouvrages en zinc demandent un savoir-faire de zingueur, que l'entreprise exerce au quotidien.",
        ],
      },
      {
        h2: "Pourquoi le zinc des toitures de Courbevoie vieillit-il ?",
        answer:
          "Le zinc se patine et dure longtemps, mais il souffre aux endroits où l'eau stagne, où les dilatations ne sont pas libres, et au contact de certains bois ou mortiers. Avec les années, les soudures cèdent et des trous apparaissent. Une reprise localisée suffit souvent, avant qu'il faille remplacer tout un versant.",
        paras: [
          "L'entreprise remplace les pièces fatiguées, refait les soudures et les relevés, et vérifie que la ventilation sous le zinc est assurée.",
          "Quand le zinc est trop usé, la réfection se fait par bandes, en gardant le même aspect que le reste de la toiture.",
        ],
        photo: "real-3",
      },
    ],
    faq: [
      {
        q: "Travaillez-vous avec les syndics de Courbevoie ?",
        a: "Oui. Indiquez l'adresse de l'immeuble, la partie commune concernée et le contact du gestionnaire. L'attestation de garantie décennale peut être jointe au devis.",
      },
      {
        q: "Intervenez-vous aussi sur les maisons de Courbevoie ?",
        a: "Oui, sur les pavillons en tuiles comme sur les immeubles en zinc, pour la couverture, la charpente, les gouttières et la façade.",
      },
      {
        q: "Faites-vous le ravalement des immeubles ?",
        a: "Pour un petit immeuble ou une maison, oui. Pour une grande copropriété, la visite permet de vérifier que le chantier correspond aux moyens de l'entreprise.",
      },
    ],
    ctaTitle: "Un immeuble ou une maison à Courbevoie ?",
    related: ["/couvreur-puteaux", PATHS.zinc, PATHS.facade],
  },
  {
    path: "/couvreur-nanterre",
    kind: "zone",
    zone: "Nanterre",
    service: "Couverture et charpente à Nanterre",
    title: "Couvreur à Nanterre (92000) : toiture, charpente, isolation",
    description:
      "Couvreur charpentier à Nanterre : maisons du Vieux-Nanterre, toits en tuiles, charpentes à traiter, combles à isoler. M. Fabulet, devis et visite gratuits.",
    h1: "Couvreur à Nanterre, charpente et toiture",
    kicker: "Zone · Nanterre",
    lead: "Nanterre borde La Garenne-Colombes à l'ouest : des maisons anciennes du centre aux pavillons plus récents, beaucoup de charpentes à surveiller.",
    brief:
      "M. Fabulet Couverture se déplace à Nanterre depuis La Garenne-Colombes pour les travaux de couverture et de charpente. Maisons anciennes du centre, pavillons, petits collectifs : l'artisan contrôle et traite les charpentes, répare ou refait les toitures en tuiles et en ardoises, isole les greniers et pose des fenêtres de toit. Le devis est gratuit.",
    contactType: "charpente",
    crumb: "Couvreur à Nanterre",
    photo: "charpentier",
    landmark: "du Vieux-Nanterre à la préfecture des Hauts-de-Seine",
    sections: [
      {
        h2: "Pourquoi faire contrôler une vieille charpente à Nanterre ?",
        answer:
          "Les maisons anciennes de Nanterre ont souvent des charpentes traditionnelles en bois massif. Avec le temps, l'humidité d'une fuite ou les insectes peuvent fragiliser une panne ou un chevron sans que rien ne se voie de l'extérieur. Un contrôle permet de traiter tôt, avant qu'une pièce ne doive être remplacée.",
        paras: [
          "M. Fabulet sonde les bois, repère les traces d'insectes ou de champignons et vérifie les assemblages. Selon le cas, il propose un traitement préventif, un traitement curatif ou le remplacement des pièces abîmées.",
        ],
        photo: "ferme-bois",
      },
      {
        h2: "Isoler les combles d'une maison à Nanterre : par où commencer ?",
        answer:
          "Par la toiture. Avant d'isoler, il faut s'assurer que la couverture ne fuit pas, que la charpente est saine et que l'air circule sous les tuiles. Ensuite seulement, on choisit entre une isolation au sol des combles perdus et une isolation sous les rampants pour des combles aménagés.",
        paras: [
          "Ce contrôle préalable évite le scénario le plus coûteux : un isolant neuf mouillé par une fuite ancienne, qui perd son efficacité et fait pourrir le bois.",
          "Le service public France Rénov' renseigne gratuitement sur les aides à la rénovation énergétique, avant de signer un devis.",
        ],
      },
    ],
    faq: [
      {
        q: "Couvrez-vous tout Nanterre ?",
        a: "Oui, du Vieux-Nanterre à la préfecture des Hauts-de-Seine et au-delà. Indiquez l'adresse exacte et les conditions d'accès dans votre demande.",
      },
      {
        q: "Remplacez-vous une seule poutre abîmée ?",
        a: "Oui, une pièce de charpente peut souvent être remplacée ou doublée seule, en étayant le temps des travaux.",
      },
      {
        q: "Posez-vous des fenêtres de toit à Nanterre ?",
        a: "Oui, M. Fabulet est installateur conseil expert Velux, pour une pose neuve comme pour un remplacement.",
      },
    ],
    ctaTitle: "Une charpente à vérifier à Nanterre ?",
    related: ["/couvreur-colombes", PATHS.framing, PATHS.insulation],
  },
  {
    path: "/couvreur-asnieres-sur-seine",
    kind: "zone",
    zone: "Asnières-sur-Seine",
    service: "Couverture et ravalement à Asnières-sur-Seine",
    title: "Couvreur à Asnières-sur-Seine (92600) : toit, zinc, façade",
    description:
      "Couvreur à Asnières-sur-Seine : toits en ardoise et en zinc, gouttières, souches de cheminée, ravalement. M. Fabulet, artisan voisin, devis et visite gratuits.",
    h1: "Couvreur à Asnières-sur-Seine, toit et façade",
    kicker: "Zone · Asnières-sur-Seine",
    lead: "Au bord de la Seine, les belles maisons et les immeubles d'Asnières ont des toits variés : ardoise, zinc, tuile, et beaucoup de cheminées.",
    brief:
      "M. Fabulet Couverture intervient à Asnières-sur-Seine pour la couverture, la zinguerie et le ravalement. Depuis La Garenne-Colombes, l'artisan rejoint les maisons bourgeoises et les immeubles de la ville pour réparer ardoises, tuiles et zinc, refaire les gouttières, reprendre les souches de cheminée et rénover les façades. Le déplacement et le devis sont gratuits.",
    contactType: "couverture",
    crumb: "Couvreur à Asnières-sur-Seine",
    photo: "real-1",
    landmark: "de l'hôtel de ville aux bords de Seine",
    sections: [
      {
        h2: "Que faire d'une souche de cheminée abîmée à Asnières ?",
        answer:
          "Une souche fissurée laisse entrer l'eau dans le conduit et autour, puis dans les combles. On reprend les joints ou l'enduit, on refait le solin en zinc qui l'entoure, et on pose un chapeau si le conduit n'est plus utilisé. Une souche trop dégradée peut être démontée et remontée à l'identique.",
        paras: [
          "Les maisons et immeubles anciens d'Asnières ont souvent plusieurs souches par toit. Elles sont exposées au vent et à la pluie plus que tout le reste : c'est là que commence l'inspection.",
        ],
        photo: "avant",
      },
      {
        h2: "Ardoise ou zinc : comment réparer ces toitures d'Asnières ?",
        answer:
          "Une ardoise cassée se remplace une à une, avec un crochet, sans démonter le reste du pan. Le zinc se reprend par soudure ou par remplacement d'une bande. Dans les deux cas, l'artisan garde l'aspect d'origine du toit, ce qui compte sur les maisons de caractère et les immeubles alignés sur rue.",
        paras: [
          "Les toits en ardoise demandent des gestes précis : glisser la nouvelle ardoise sous les autres sans les briser, la fixer au bon pureau. Le zinc, lui, impose de laisser libre sa dilatation.",
          "Quand une couverture est arrivée en fin de vie, sa réfection complète se fait avec les mêmes matériaux, et peut s'accompagner d'une isolation.",
        ],
      },
    ],
    faq: [
      {
        q: "Intervenez-vous près des bords de Seine ?",
        a: "Oui, dans toute la commune, de l'hôtel de ville aux bords de Seine. L'accès et le stationnement sont prévus lors de la prise de rendez-vous.",
      },
      {
        q: "Faites-vous le ravalement des maisons d'Asnières ?",
        a: "Oui : nettoyage, traitement, réparation des fissures et peinture extérieure, en adaptant les produits au support.",
      },
      {
        q: "Réparez-vous une seule ardoise ?",
        a: "Oui, une ardoise cassée ou glissée se remplace seule. Une visite permet de vérifier qu'il n'y en a pas d'autres à reprendre.",
      },
    ],
    ctaTitle: "Un toit ou une façade à Asnières ?",
    related: ["/couvreur-courbevoie", PATHS.facade, PATHS.roofing],
  },
  {
    path: "/couvreur-puteaux",
    kind: "zone",
    zone: "Puteaux",
    service: "Couverture et zinguerie à Puteaux",
    title: "Couvreur à Puteaux (92800) : couverture, zinc, gouttières",
    description:
      "Couvreur à Puteaux : toits de maisons et d'immeubles, zinc, gouttières, fenêtres de toit, isolation. M. Fabulet, de La Garenne-Colombes, devis gratuit.",
    h1: "Couvreur à Puteaux, couverture et zinguerie",
    kicker: "Zone · Puteaux",
    lead: "Puteaux, ce sont aussi des rues anciennes, des maisons et des petits immeubles dont les toits demandent un vrai couvreur.",
    brief:
      "À Puteaux, M. Fabulet Couverture répare et rénove les toitures des maisons et des petits immeubles, loin des tours du quartier d'affaires. L'artisan de La Garenne-Colombes travaille la tuile et le zinc, refait les gouttières et les descentes, pose les fenêtres de toit Velux et isole les combles. Il se déplace gratuitement pour établir le devis.",
    contactType: "couverture",
    crumb: "Couvreur à Puteaux",
    photo: "real-2",
    landmark: "du centre ancien à l'île de Puteaux",
    sections: [
      {
        h2: "Comment éviter les infiltrations par les gouttières à Puteaux ?",
        answer:
          "En les gardant propres, bien pentées et bien fixées. Une gouttière qui déborde mouille la façade et finit par s'infiltrer dans le mur. Dans les rues étroites de Puteaux, où les façades sèchent mal, ce contrôle annuel compte encore plus. M. Fabulet nettoie, répare ou remplace selon l'état.",
        paras: [
          "Les descentes encastrées des immeubles anciens sont un autre point sensible : un raccord qui fuit à l'intérieur du mur peut rester invisible longtemps. L'artisan les vérifie lors de l'inspection de la toiture.",
        ],
      },
      {
        h2: "Peut-on gagner de la lumière dans les combles d'une maison à Puteaux ?",
        answer:
          "Oui, avec une ou deux fenêtres de toit posées dans le plan du toit. M. Fabulet, installateur conseil expert Velux, choisit l'emplacement entre les chevrons, raccorde la fenêtre à la couverture et l'isole. Les combles deviennent une pièce lumineuse, sans modifier la silhouette de la maison depuis la rue.",
        paras: [
          "Une déclaration préalable en mairie est en général nécessaire pour une nouvelle fenêtre de toit : le service urbanisme de Puteaux renseigne sur les règles du secteur.",
          "La pose est l'occasion d'isoler les rampants si ce n'est pas déjà fait, pour que la nouvelle pièce reste agréable en été.",
        ],
        photo: "toit-velux",
      },
    ],
    faq: [
      {
        q: "Intervenez-vous sur l'île de Puteaux ?",
        a: "Oui, dans toute la commune, du centre ancien à l'île de Puteaux. Précisez l'accès et le stationnement possibles dans votre demande.",
      },
      {
        q: "Travaillez-vous sur les tours de La Défense ?",
        a: "Non, ces bâtiments relèvent d'entreprises spécialisées. M. Fabulet intervient sur les maisons et les petits immeubles.",
      },
      {
        q: "Combien coûte un remplacement de gouttière ?",
        a: "Cela dépend de la longueur, du matériau et de l'accès. Le devis est établi gratuitement après la visite.",
      },
    ],
    ctaTitle: "Un toit à Puteaux ?",
    related: ["/couvreur-courbevoie", PATHS.zinc, PATHS.velux],
  },
];
