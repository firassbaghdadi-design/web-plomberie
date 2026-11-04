import { PATHS, type Faq } from "./site";
import type { Page } from "./types";

export const home = {
  title: "Couvreur à La Garenne-Colombes : M. Fabulet Couverture",
  description:
    "M. Fabulet, artisan couvreur-charpentier à La Garenne-Colombes : couverture, charpente, zinguerie, Velux, isolation, ravalement. Devis et déplacement gratuits.",
  brief:
    "M. Fabulet Couverture est un artisan couvreur-charpentier installé au 13, boulevard de la République à La Garenne-Colombes. L'entreprise familiale refait toitures en tuiles, ardoises et zinc, traite les charpentes, pose gouttières et fenêtres Velux, isole les greniers et ravale les façades. Devis et déplacements gratuits, garantie décennale.",
};

/** Les six métiers, dans l'ordre du chantier : du bois de la ferme jusqu'à la façade. */
export const trades = [
  { path: PATHS.framing, mark: "I", title: "Charpente", text: "Réparation, renforcement et traitement préventif ou curatif des bois de la ferme.", photo: "charpente" },
  { path: PATHS.roofing, mark: "II", title: "Couverture", text: "Tuiles, ardoises et zinc : réparation, réfection complète, nettoyage et démoussage.", photo: "couverture" },
  { path: PATHS.zinc, mark: "III", title: "Zinguerie et gouttières", text: "Gouttières zinc ou PVC, descentes, noues et habillages pour bien évacuer la pluie.", photo: "gouttieres" },
  { path: PATHS.velux, mark: "IV", title: "Fenêtres de toit Velux", text: "Pose et remplacement par un installateur conseil expert Velux.", photo: "toit-velux" },
  { path: PATHS.insulation, mark: "V", title: "Isolation de grenier", text: "Isolant posé sous la toiture ou au sol des combles, pour l'hiver comme pour l'été.", photo: "isolation" },
  { path: PATHS.facade, mark: "VI", title: "Ravalement et façade", text: "Nettoyage, traitement, réparation des fissures et peinture extérieure.", photo: "ravalement" },
];

export const homeFaq: Faq[] = [
  {
    q: "Le devis et le déplacement sont-ils gratuits ?",
    a: "Oui. M. Fabulet se déplace gratuitement pour voir la toiture, la charpente ou la façade, puis remet un devis écrit sans frais. Vous pouvez joindre des photos à votre demande pour préparer la visite.",
  },
  {
    q: "Dans quelles communes intervenez-vous autour de La Garenne-Colombes ?",
    a: "L'entreprise dessert La Garenne-Colombes et les communes proches : Colombes, Bois-Colombes, Courbevoie, Nanterre, Asnières-sur-Seine et Puteaux. Pour une adresse plus éloignée en Île-de-France, appelez pour vérifier.",
  },
  {
    q: "Les travaux sont-ils couverts par une garantie décennale ?",
    a: "Oui. M. Fabulet Couverture est assuré en garantie décennale auprès de Generali. L'attestation peut être fournie avec le devis, notamment pour un syndic ou une demande d'aide à la rénovation.",
  },
  {
    q: "Où rencontrer M. Fabulet à La Garenne-Colombes ?",
    a: "À l'atelier, 13, boulevard de la République, ou au stand que l'entreprise tient sur le marché de La Garenne-Colombes. Le plus simple reste d'appeler le 01 47 82 82 18 ou le 06 70 74 73 64.",
  },
];

/** Pages métier : La Garenne-Colombes, commune de l'entreprise. */
export const servicePages: Page[] = [
  {
    path: PATHS.roofing,
    kind: "metier",
    zone: "La Garenne-Colombes",
    service: "Couverture de toiture : tuiles, ardoises, zinc",
    title: "Couverture à La Garenne-Colombes : tuiles, ardoises, zinc",
    description:
      "Couvreur à La Garenne-Colombes : réparation de fuite, réfection de toiture en tuiles, ardoises ou zinc, nettoyage et démoussage. Devis et déplacement gratuits.",
    h1: "Couverture et toiture à La Garenne-Colombes",
    kicker: "Métier II · Couverture",
    lead: "Tuiles, ardoises ou zinc : M. Fabulet répare, entretient et refait les toits de La Garenne-Colombes, de la tuile déplacée à la réfection complète.",
    brief:
      "À La Garenne-Colombes, M. Fabulet Couverture intervient sur toutes les couvertures : tuiles mécaniques ou plates, ardoises naturelles et zinc. L'artisan recherche les fuites, remplace les éléments abîmés, nettoie et démousse, ou refait entièrement la toiture avec une isolation neuve. Le déplacement et le devis sont gratuits, les travaux couverts par la garantie décennale.",
    contactType: "couverture",
    crumb: "Couverture",
    photo: "couverture",
    sections: [
      {
        h2: "Que faire quand le toit fuit à La Garenne-Colombes ?",
        answer:
          "Repérez la tache au plafond ou la goutte dans les combles, protégez ce qui se trouve dessous, puis appelez le couvreur. M. Fabulet vient chercher l'origine exacte de l'infiltration : tuile cassée ou glissée, faîtage descellé, solin fendu ou zinc percé. Il met la toiture hors d'eau, puis chiffre la réparation durable.",
        paras: [
          "Une fuite vient rarement de l'endroit où elle apparaît. L'eau suit les liteaux et la charpente avant de tomber, si bien que la recherche commence toujours par le dessus : rangées de tuiles, rives, abords de la cheminée et des fenêtres de toit.",
          "Ce premier passage sert aussi à faire le point sur l'état général du toit. Vous savez alors s'il suffit de remplacer quelques éléments ou si une réfection est à prévoir dans les prochaines années.",
        ],
        photo: "tuiles",
      },
      {
        h2: "Faut-il réparer ou refaire entièrement la toiture ?",
        answer:
          "Tout dépend de l'âge des matériaux et de l'état des supports. Quand les tuiles sont saines et les liteaux solides, une réparation localisée suffit. Quand les tuiles se délitent, que les fuites se multiplient ou que la charpente dessous a souffert, la réfection complète devient plus économique sur la durée.",
        paras: [
          "Le site de l'entreprise décrit ces deux façons de travailler : la résolution des fuites d'eau et la rénovation complète de toiture, avec l'ajout d'une isolation pour une meilleure efficacité énergétique. Les toitures neuves pour une construction ou une extension font aussi partie du métier.",
          "Le devis détaille les deux options quand elles se valent, pour que vous puissiez choisir en connaissant le coût de chacune.",
        ],
        original: true,
      },
      {
        h2: "Pourquoi nettoyer et démousser un toit de tuiles ?",
        answer:
          "La mousse garde l'humidité contre la tuile. En hiver, l'eau gèle, fait éclater la terre cuite et soulève les rangs. Un nettoyage suivi d'un traitement antimousse et hydrofuge redonne de l'aspect au toit et ralentit son vieillissement, surtout sur les versants exposés au nord ou ombragés par les arbres.",
        paras: [
          "Le nettoyage se fait avec un matériel adapté au matériau, pour ne pas abîmer la surface des tuiles. Le traitement est appliqué ensuite par temps sec. C'est aussi l'occasion de vider les gouttières et de contrôler les éléments de zinguerie.",
        ],
        list: ["Tuiles mécaniques et tuiles plates", "Ardoises naturelles", "Couvertures et ouvrages en zinc", "Faîtages, rives, solins et abergements"],
        listTitle: "Matériaux et ouvrages",
      },
    ],
    faq: [
      {
        q: "Intervenez-vous sur les toits en zinc des immeubles ?",
        a: "Oui. L'entreprise travaille le zinc en couverture comme en zinguerie. Pour un immeuble en copropriété, indiquez l'adresse et le contact du syndic : la visite se prépare avec l'accès aux combles ou à la terrasse.",
      },
      {
        q: "Combien coûte une réparation de toiture ?",
        a: "Le prix dépend de la surface, du matériau, de l'accès et de l'échafaudage nécessaire. M. Fabulet ne donne pas de prix sans avoir vu le toit : le déplacement et le devis sont gratuits.",
      },
      {
        q: "Pouvez-vous refaire une toiture avec une isolation ?",
        a: "Oui. Une réfection complète est le bon moment pour isoler sous la couverture : l'isolant se pose une fois les anciennes tuiles retirées, avant le nouvel écran et les nouvelles tuiles.",
      },
    ],
    ctaTitle: "Une tuile qui bouge, une tache au plafond ?",
    related: [PATHS.framing, PATHS.zinc, PATHS.velux],
  },
  {
    path: PATHS.framing,
    kind: "metier",
    zone: "La Garenne-Colombes",
    service: "Charpente bois : réparation et traitement",
    title: "Charpente à La Garenne-Colombes : réparation, traitement",
    description:
      "Charpentier à La Garenne-Colombes : réparation de charpente bois, remplacement de pièces, traitement préventif et curatif contre insectes et humidité.",
    h1: "Charpente et traitement à La Garenne-Colombes",
    kicker: "Métier I · Charpente",
    lead: "Sous chaque toit, une ferme de bois porte tout le reste. M. Fabulet la contrôle, la répare et la traite avant de refaire la couverture.",
    brief:
      "M. Fabulet Couverture est couvreur et charpentier à La Garenne-Colombes. L'entreprise fabrique et pose des charpentes, remplace les pièces de bois abîmées, renforce les structures anciennes et traite les bois contre les insectes, les champignons et l'humidité. Le diagnostic se fait sur place, gratuitement, avec un devis écrit à la clé.",
    contactType: "charpente",
    crumb: "Charpente",
    photo: "charpente",
    sections: [
      {
        h2: "Comment savoir si une charpente doit être traitée ?",
        answer:
          "Les signes d'alerte se voient dans les combles : petits trous ronds dans le bois, sciure au sol, bois qui s'effrite sous la pointe d'un tournevis, traces d'humidité ou filaments blancs. Au moindre doute, M. Fabulet sonde les pièces maîtresses et indique s'il faut un traitement préventif, curatif ou un remplacement.",
        paras: [
          "Le traitement préventif protège un bois sain. Le traitement curatif s'attaque aux insectes déjà installés, par pulvérisation et parfois par injection dans les pièces les plus grosses. Quand une pièce a perdu sa solidité, on la remplace ou on la double avant de traiter l'ensemble.",
        ],
        photo: "ferme-ciel",
      },
      {
        h2: "Quelles pièces de charpente peut-on remplacer sans tout refaire ?",
        answer:
          "Chevrons, pannes, liteaux, arbalétriers ou entrait : une pièce abîmée se remplace souvent seule, en étayant le toit le temps de l'opération. On garde ainsi la charpente d'origine et sa couverture, ce qui limite le chantier. La réfection complète ne s'impose que si la structure entière a perdu sa résistance.",
        paras: [
          "Le site de l'entreprise résume le métier ainsi : fabrication et installation de charpentes en bois ou en métal, rénovation et réparation de charpentes existantes, isolation et finitions intérieures en bois, restauration d'éléments en bois de bâtiments anciens.",
          "Dans les maisons de La Garenne-Colombes, beaucoup de charpentes sont anciennes. Elles méritent d'être conservées quand le bois est sain : c'est souvent le cas, une fois les zones touchées traitées.",
        ],
        original: true,
      },
      {
        h2: "Pourquoi associer charpente et couverture sur un même chantier ?",
        answer:
          "Parce que la couverture repose sur la charpente. Quand les tuiles sont déposées, les bois sont visibles et accessibles : c'est le meilleur moment pour les contrôler, les traiter et les renforcer. Un seul artisan pour les deux évite les allers-retours entre corps de métier et garde une seule garantie décennale.",
        paras: [
          "La ferme de charpente dessinée sur le logo de l'entreprise le rappelle : le couvreur et le charpentier travaillent sur le même ouvrage, du bois jusqu'à la dernière tuile.",
        ],
      },
    ],
    faq: [
      {
        q: "Le traitement de charpente oblige-t-il à quitter la maison ?",
        a: "Cela dépend du produit et de l'accès aux combles. L'artisan vous indique avant le chantier s'il faut libérer les combles et pendant combien de temps les pièces doivent rester aérées.",
      },
      {
        q: "Travaillez-vous aussi les charpentes métalliques ?",
        a: "Le site de l'entreprise mentionne la fabrication et l'installation de charpentes en bois ou en métal. Précisez la nature de votre structure dans la demande pour que la visite soit bien préparée.",
      },
      {
        q: "Peut-on aménager des combles avec la charpente existante ?",
        a: "Parfois. Une charpente traditionnelle laisse souvent de la place ; une charpente industrielle en fermettes demande une modification étudiée. Le diagnostic sur place permet de répondre.",
      },
    ],
    ctaTitle: "Des trous dans les poutres, un bois qui s'effrite ?",
    related: [PATHS.roofing, PATHS.insulation, PATHS.company],
  },
  {
    path: PATHS.zinc,
    kind: "metier",
    zone: "La Garenne-Colombes",
    service: "Zinguerie et gouttières zinc ou PVC",
    title: "Gouttières et zinguerie à La Garenne-Colombes : zinc, PVC",
    description:
      "Gouttières zinc ou PVC à La Garenne-Colombes : pose, réparation, remplacement, descentes pluviales et zinguerie de toiture par M. Fabulet. Déplacement gratuit.",
    h1: "Zinguerie et gouttières à La Garenne-Colombes",
    kicker: "Métier III · Zinguerie",
    lead: "La pluie doit quitter le toit sans toucher les murs. Gouttières, descentes, noues et solins : M. Fabulet pose et répare tout ce qui la conduit.",
    brief:
      "À La Garenne-Colombes, M. Fabulet Couverture installe et remplace les gouttières en zinc ou en PVC, les descentes pluviales et les éléments de zinguerie du toit. L'artisan répare aussi les gouttières percées, décrochées ou bouchées et propose leur nettoyage régulier, pour que l'eau de pluie ne s'infiltre ni dans les murs ni dans les fondations.",
    contactType: "zinguerie",
    crumb: "Zinguerie et gouttières",
    photo: "gouttieres",
    sections: [
      {
        h2: "Gouttière en zinc ou en PVC : laquelle choisir ?",
        answer:
          "Le zinc est le matériau traditionnel des toits de la région : durable, réparable, il se patine avec le temps et convient aux maisons anciennes comme aux immeubles. Le PVC coûte moins cher et demande peu d'entretien, mais il supporte moins bien les chocs et le soleil. L'artisan vous conseille selon la façade.",
        paras: [
          "Dans un secteur où l'aspect des façades compte, le zinc reste souvent le choix le plus cohérent. Le PVC peut convenir à une extension, un garage ou un abri, là où l'esthétique pèse moins.",
        ],
        photo: "gouttieres",
      },
      {
        h2: "Pourquoi une gouttière qui déborde abîme-t-elle la maison ?",
        answer:
          "L'eau qui déborde coule le long du mur, détrempe l'enduit, verdit la façade et finit par remonter dans les maçonneries. Au pied du mur, elle ravine le sol et humidifie les fondations. Une gouttière bouchée, mal pentée ou percée provoque ainsi des dégâts bien plus chers que sa réparation.",
        paras: [
          "Le site de l'entreprise le dit simplement : il s'agit de canaliser correctement l'écoulement des eaux de pluie, pour éviter les infiltrations, la détérioration des fondations et les dommages structurels.",
          "Un nettoyage régulier, surtout après la chute des feuilles, suffit souvent à éviter le problème. M. Fabulet le propose en entretien, avec un contrôle des fixations et des joints.",
        ],
        original: true,
      },
      {
        h2: "Quels éléments de zinguerie protègent un toit ?",
        answer:
          "Au-delà des gouttières, la zinguerie comprend les noues entre deux pans, les solins et abergements autour des cheminées et des fenêtres de toit, les habillages de rive et les chéneaux. Ce sont les points les plus sensibles d'une toiture : la plupart des fuites partent d'une pièce de zinc fatiguée ou mal raccordée.",
        list: ["Gouttières pendantes et descentes pluviales", "Chéneaux et noues", "Solins et abergements de cheminée", "Habillages de rive et bandeaux"],
        listTitle: "Ouvrages réalisés",
      },
    ],
    faq: [
      {
        q: "Peut-on réparer une gouttière en zinc au lieu de la remplacer ?",
        a: "Souvent, oui. Une soudure, un joint ou un crochet refait suffit quand le zinc est encore sain. Si la gouttière est percée en plusieurs endroits, le remplacement devient plus raisonnable.",
      },
      {
        q: "À quelle fréquence nettoyer les gouttières ?",
        a: "Au moins une fois par an, idéalement après la chute des feuilles. Une maison entourée d'arbres demande parfois un passage de plus au printemps.",
      },
      {
        q: "Intervenez-vous sur les gouttières d'un immeuble ?",
        a: "Oui. Pour une copropriété, précisez l'adresse, la hauteur approximative et le contact du syndic : l'accès et le matériel nécessaires sont prévus avant le chantier.",
      },
    ],
    ctaTitle: "Une gouttière qui déborde ou se décroche ?",
    related: [PATHS.roofing, PATHS.facade, PATHS.works],
  },
  {
    path: PATHS.velux,
    kind: "metier",
    zone: "La Garenne-Colombes",
    service: "Pose et remplacement de fenêtres de toit Velux",
    title: "Velux à La Garenne-Colombes : pose et remplacement expert",
    description:
      "Pose et remplacement de fenêtres de toit Velux à La Garenne-Colombes par M. Fabulet, installateur conseil expert Velux. Devis et déplacement gratuits.",
    h1: "Fenêtres de toit Velux à La Garenne-Colombes",
    kicker: "Métier IV · Velux",
    lead: "Une fenêtre de toit touche à la fois la charpente, la couverture et l'étanchéité. Mieux vaut la confier à un couvreur reconnu par la marque.",
    brief:
      "M. Fabulet Couverture est installateur conseil expert Velux à La Garenne-Colombes. L'artisan pose de nouvelles fenêtres de toit pour éclairer des combles, remplace les anciennes fenêtres qui fuient ou isolent mal, et reprend la couverture et la zinguerie autour. Il conseille aussi sur la taille, l'emplacement et les accessoires adaptés à la pièce.",
    contactType: "velux",
    crumb: "Fenêtres Velux",
    photo: "toit-velux",
    sections: [
      {
        h2: "Que veut dire « installateur conseil expert Velux » ?",
        answer:
          "C'est une mention que la marque attribue aux poseurs qui installent régulièrement ses fenêtres de toit et connaissent ses gammes. Pour vous, c'est l'assurance d'un artisan qui maîtrise le raccordement à la couverture, l'isolation autour du cadre et les accessoires, et qui peut vous orienter vers le bon modèle.",
        paras: [
          "La mention figure sur les supports de l'entreprise. Une fenêtre de toit mal posée fuit presque toujours au même endroit : le raccord entre le cadre et les tuiles. C'est précisément là que le métier de couvreur fait la différence.",
        ],
      },
      {
        h2: "Peut-on remplacer un ancien Velux sans toucher au toit ?",
        answer:
          "Le plus souvent, oui, quand la nouvelle fenêtre reprend les dimensions de l'ancienne. Le cadre est changé par l'intérieur et par le toit, avec un raccord d'étanchéité neuf et un isolant autour. Si vous voulez une fenêtre plus grande, la charpente et la couverture sont reprises sur la largeur nécessaire.",
        paras: [
          "Les fenêtres de toit anciennes laissent souvent passer l'air et l'eau au niveau des joints. Leur remplacement améliore le confort de la pièce, en hiver comme en été, surtout avec des stores ou des volets adaptés.",
          "M. Fabulet vient mesurer la fenêtre existante, vérifie l'état du chevêtre et propose le modèle qui convient.",
        ],
        photo: "toit-velux",
      },
      {
        h2: "Où placer une fenêtre de toit pour bien éclairer des combles ?",
        answer:
          "La hauteur compte autant que la taille : une fenêtre placée trop haut éclaire le plafond, trop bas elle oblige à se pencher. L'artisan cherche l'équilibre entre la vue, la lumière et la position des chevrons, et peut proposer deux fenêtres côte à côte plutôt qu'une seule très grande.",
        paras: [
          "L'orientation du pan de toit joue aussi : au sud, des protections solaires deviennent vite indispensables ; au nord, la lumière est plus douce et plus constante.",
        ],
      },
    ],
    faq: [
      {
        q: "Faut-il une autorisation pour poser une fenêtre de toit ?",
        a: "Une fenêtre de toit modifie l'aspect extérieur : une déclaration préalable en mairie est généralement demandée. Renseignez-vous auprès du service urbanisme de votre commune avant le chantier.",
      },
      {
        q: "Posez-vous les stores et volets roulants Velux ?",
        a: "Les accessoires font partie du conseil de l'installateur. Précisez votre besoin dans la demande : occultation d'une chambre, protection contre la chaleur ou simple store.",
      },
      {
        q: "Ma fenêtre de toit fuit : que faire ?",
        a: "Protégez l'intérieur et appelez. La fuite vient souvent du raccord d'étanchéité ou d'un joint usé. M. Fabulet vérifie s'il faut réparer ou remplacer.",
      },
    ],
    ctaTitle: "Plus de lumière sous le toit ?",
    related: [PATHS.insulation, PATHS.roofing, PATHS.framing],
  },
  {
    path: PATHS.insulation,
    kind: "metier",
    zone: "La Garenne-Colombes",
    service: "Isolation de grenier et de combles",
    title: "Isolation de grenier à La Garenne-Colombes : combles, toit",
    description:
      "Isolation de grenier et de combles à La Garenne-Colombes par M. Fabulet, couvreur : isolant sous toiture ou au sol, moins de pertes de chaleur. Devis gratuit.",
    h1: "Isolation de grenier à La Garenne-Colombes",
    kicker: "Métier V · Isolation",
    lead: "Une grande part de la chaleur d'une maison s'échappe par le haut. Isoler le grenier est souvent le premier chantier à faire.",
    brief:
      "À La Garenne-Colombes, M. Fabulet Couverture isole les greniers et les combles des maisons. L'isolant se pose au sol des combles perdus, ou sous la toiture quand les combles sont habitables ou à aménager. Le but : moins de pertes de chaleur en hiver, plus de fraîcheur en été et davantage de confort, avec une pose soignée.",
    contactType: "isolation",
    crumb: "Isolation de grenier",
    photo: "isolation",
    sections: [
      {
        h2: "Combles perdus ou combles aménagés : quelle isolation ?",
        answer:
          "Dans des combles perdus, où l'on ne monte que pour l'entretien, l'isolant se pose au sol, en rouleaux ou en vrac : c'est simple et efficace. Dans des combles habités ou à aménager, on isole sous les rampants, entre et sous les chevrons, avec un pare-vapeur. Le choix dépend de l'usage prévu.",
        paras: [
          "Le site de l'entreprise décrit ce travail : installer des isolants thermiques dans les greniers pour réduire les pertes de chaleur en hiver et les gains de chaleur en été, en veillant à une pose correcte qui empêche les déperditions d'énergie.",
        ],
        original: true,
        photo: "isolation",
      },
      {
        h2: "Pourquoi confier l'isolation du grenier à un couvreur ?",
        answer:
          "Parce que l'isolation et la toiture fonctionnent ensemble. Un couvreur vérifie d'abord qu'aucune fuite ne mouillera l'isolant, que la ventilation sous les tuiles reste assurée et que la charpente est saine. Un isolant posé sous un toit qui fuit perd ses qualités et peut faire pourrir les bois.",
        paras: [
          "M. Fabulet commence donc par un contrôle de la couverture depuis les combles. S'il repère une tuile cassée, un écran de sous-toiture déchiré ou un bois attaqué, il le signale avant de poser l'isolant.",
          "Quand la toiture doit de toute façon être refaite, l'isolation se pose par l'extérieur au moment de la réfection, sans toucher aux pièces habitées.",
        ],
      },
      {
        h2: "Que gagne-t-on à isoler son grenier ?",
        answer:
          "Du confort d'abord : des pièces plus tièdes en hiver, moins étouffantes en été, une température plus régulière. Des économies ensuite, sur le chauffage comme sur la climatisation. L'isolation réduit aussi l'empreinte carbone du logement, ce que rappelle le site de l'entreprise.",
        paras: [
          "Des aides publiques à la rénovation énergétique existent parfois pour ce type de travaux. Le service public France Rénov' renseigne gratuitement sur les conditions en vigueur.",
        ],
      },
    ],
    faq: [
      {
        q: "Faut-il vider le grenier avant l'isolation ?",
        a: "Oui, pour des combles perdus isolés au sol, la surface doit être dégagée. L'artisan vous indique l'espace à libérer lors de la visite.",
      },
      {
        q: "Peut-on isoler un grenier qui sert de rangement ?",
        a: "Oui. On peut isoler sous les rampants pour garder le plancher libre, ou poser un plancher surélevé au-dessus de l'isolant. La visite permet de choisir.",
      },
      {
        q: "Combien de temps dure le chantier ?",
        a: "Il dépend de la surface et de la technique. M. Fabulet donne une durée précise dans le devis, après avoir vu les combles.",
      },
    ],
    ctaTitle: "Un grenier froid l'hiver, brûlant l'été ?",
    related: [PATHS.velux, PATHS.framing, PATHS.roofing],
  },
  {
    path: PATHS.facade,
    kind: "metier",
    zone: "La Garenne-Colombes",
    service: "Ravalement, peinture et traitement de façade",
    title: "Ravalement de façade à La Garenne-Colombes : M. Fabulet",
    description:
      "Ravalement à La Garenne-Colombes : nettoyage et traitement de façade, réparation des fissures et peinture extérieure par M. Fabulet. Devis et visite gratuits.",
    h1: "Ravalement de façade à La Garenne-Colombes",
    kicker: "Métier VI · Façade",
    lead: "Après le toit, la façade : nettoyée, traitée, réparée et repeinte, elle protège la maison et lui rend son allure.",
    brief:
      "M. Fabulet Couverture réalise le ravalement et la peinture extérieure des maisons et petits immeubles de La Garenne-Colombes. Nettoyage en profondeur contre la saleté, les mousses et les algues, réparation des fissures, traitement protecteur et peinture de finition : l'artisan rénove la façade et la protège des intempéries pour des années.",
    contactType: "ravalement",
    crumb: "Ravalement et façade",
    photo: "ravalement",
    sections: [
      {
        h2: "Quand faut-il ravaler une façade ?",
        answer:
          "Quand l'enduit se fissure, s'écaille ou se tache, quand des traînées vertes apparaissent sous les appuis de fenêtre, ou quand la peinture farine sous la main. Certaines communes imposent aussi un ravalement périodique. Attendre laisse l'eau pénétrer dans le mur, et la réparation devient plus lourde.",
        paras: [
          "Le site de l'entreprise décrit l'ensemble du métier : rénovation des façades, réparation des fissures, élimination des graffitis, nettoyage en profondeur, puis préparation et peinture des surfaces extérieures pour une finition soignée.",
        ],
        original: true,
        photo: "ravalement",
      },
      {
        h2: "Nettoyer, traiter ou repeindre : quelle différence ?",
        answer:
          "Le nettoyage enlève la saleté, les mousses et les algues. Le traitement protège ensuite le support : antimousse, hydrofuge qui laisse respirer le mur tout en repoussant la pluie. La peinture vient en dernier, quand l'aspect doit changer ou que l'ancien revêtement est usé. Une façade saine n'a parfois besoin que des deux premiers.",
        paras: [
          "Nettoyage et traitement de façade forment un métier à part sur le site de l'entreprise : revitaliser et protéger les extérieurs, éliminer saleté, moisissures et algues, et appliquer des traitements de protection contre les dommages futurs.",
          "Le bon choix dépend du support : meulière, brique, enduit ou pierre ne se traitent pas de la même manière.",
        ],
        photo: "facade",
      },
      {
        h2: "Pourquoi confier toit et façade à la même entreprise ?",
        answer:
          "Parce que les deux chantiers partagent souvent l'échafaudage, et que l'un protège l'autre. Une gouttière refaite avant le ravalement évite de salir la façade neuve ; une façade traitée après la toiture profite des mêmes accès. Un seul interlocuteur coordonne le tout et limite la durée du chantier.",
        paras: [
          "M. Fabulet est à la fois couvreur, zingueur et peintre : il peut enchaîner la toiture, la zinguerie et la façade dans un même calendrier.",
        ],
      },
    ],
    faq: [
      {
        q: "Faut-il une autorisation pour un ravalement ?",
        a: "Un changement de couleur ou d'aspect demande en général une déclaration préalable en mairie. Le service urbanisme de la commune précise les règles locales.",
      },
      {
        q: "Traitez-vous les façades en meulière ?",
        a: "Oui, en adaptant le nettoyage et les produits au support. Précisez le type de façade dans votre demande et joignez une photo si possible.",
      },
      {
        q: "Peut-on ravaler une seule façade ?",
        a: "Oui. Le devis peut porter sur une façade, un pignon ou l'ensemble de la maison, selon ce qui est nécessaire.",
      },
    ],
    ctaTitle: "Une façade fissurée ou noircie ?",
    related: [PATHS.zinc, PATHS.roofing, PATHS.works],
  },
];

/** Pages reprises du site actuel : l'entreprise et ses réalisations. */
export const housePages: Page[] = [
  {
    path: PATHS.company,
    kind: "maison",
    zone: "La Garenne-Colombes",
    title: "L'entreprise M. Fabulet, artisan à La Garenne-Colombes",
    description:
      "M. Fabulet Couverture, entreprise artisanale et familiale de La Garenne-Colombes : couvreur, charpentier, zingueur et peintre, garantie décennale Generali.",
    h1: "M. Fabulet, artisan couvreur à La Garenne-Colombes",
    kicker: "L'entreprise",
    lead: "Une entreprise artisanale et familiale, un savoir-faire transmis de génération en génération, et un atelier boulevard de la République.",
    brief:
      "M. Fabulet Couverture est une entreprise artisanale et familiale de La Garenne-Colombes, inscrite au répertoire des métiers. Couverture, charpente, zinguerie et peinture : son savoir-faire se transmet de génération en génération. L'artisan est installateur conseil expert Velux, assuré en garantie décennale chez Generali, et tient un stand au marché de la ville.",
    contactType: "autre",
    crumb: "L'entreprise",
    photo: "tuiles",
    sections: [
      {
        h2: "Qui est M. Fabulet Couverture ?",
        answer:
          "Une entreprise artisanale et familiale, avec une expertise transmise de génération en génération dans la couverture, la zinguerie et la peinture. Elle est installée au 13, boulevard de la République à La Garenne-Colombes et dirigée par Emile Eric Fabulet. Elle traite chaque chantier avec soin, de la simple réparation à la toiture complète.",
        paras: [
          "Notre polyvalence nous permet d'offrir un service entièrement personnalisé pour répondre à vos besoins spécifiques, que vous ayez un projet de construction d'envergure ou une simple réparation de toiture.",
          "Chaque projet que nous entreprenons est traité avec le plus grand soin, en utilisant des matériaux de qualité et en respectant les normes de construction, pour garantir des résultats durables.",
          "Chez M. Fabulet, vous trouverez bien plus qu'un simple artisan : une équipe déterminée à vous accompagner à chaque étape de votre projet de construction ou de toiture, avec l'expérience d'une tradition familiale.",
        ],
        original: true,
      },
      {
        h2: "Quels sont les engagements de l'entreprise ?",
        answer:
          "Le déplacement et le devis sont gratuits. Les travaux sont couverts par une garantie décennale souscrite auprès de Generali. L'artisan est reconnu installateur conseil expert Velux. Et chaque devis est écrit et détaillé, pour que vous sachiez exactement ce qui sera fait sur votre toit ou votre façade.",
        list: ["Artisan inscrit au répertoire des métiers (RM 444 070 197)", "Garantie décennale, assurance Generali", "Installateur conseil expert Velux", "Devis et déplacements gratuits"],
        listTitle: "En pratique",
      },
      {
        h2: "Où rencontrer l'artisan à La Garenne-Colombes ?",
        answer:
          "À l'adresse de l'entreprise, 13, boulevard de la République, et sur le marché de La Garenne-Colombes, où M. Fabulet tient un stand avec ses affiches de chantier. C'est l'occasion de poser une question, de montrer une photo de son toit et de prendre rendez-vous pour une visite gratuite.",
        paras: [
          "Les jours de présence au marché vous sont confirmés par téléphone. En dehors du marché, le plus simple est d'appeler le 01 47 82 82 18 ou le mobile, ou d'envoyer une demande écrite avec photos depuis la page contact.",
        ],
      },
      {
        h2: "L'entreprise fait-elle aussi des travaux d'intérieur ?",
        answer:
          "Oui. Le site de l'entreprise présente aussi des travaux d'intérieur : rénovation de pièces, revêtements de sol, peinture et décoration murale, cloisons, portes et fenêtres, placards sur mesure, isolation thermique et acoustique. La toiture reste le cœur du métier, mais un même artisan peut suivre la suite du chantier.",
        original: true,
      },
    ],
    faq: [
      {
        q: "L'entreprise travaille-t-elle pour les professionnels ?",
        a: "Le site de l'entreprise évoque des projets résidentiels, commerciaux et industriels. Pour un local ou un immeuble, précisez-le dans votre demande.",
      },
      {
        q: "Peut-on obtenir l'attestation de garantie décennale ?",
        a: "Oui, elle peut être jointe au devis sur simple demande. Elle est souvent utile pour un syndic ou pour un dossier d'aide à la rénovation.",
      },
      {
        q: "Comment se passe la première visite ?",
        a: "L'artisan vient voir la toiture ou la façade, écoute votre besoin et vous explique ce qu'il constate. Le devis écrit suit, sans engagement.",
      },
    ],
    ctaTitle: "Parlons de votre toit.",
    related: [PATHS.works, PATHS.roofing, PATHS.framing],
  },
  {
    path: PATHS.works,
    kind: "maison",
    zone: "La Garenne-Colombes",
    title: "Réalisations du couvreur M. Fabulet, La Garenne-Colombes",
    description:
      "Réalisations de M. Fabulet Couverture près de La Garenne-Colombes : toitures rénovées, zinc refait, toit traité, avant et après travaux sur toit et cheminée.",
    h1: "Réalisations du couvreur, La Garenne-Colombes",
    kicker: "Réalisations",
    lead: "Toitures rénovées, zinc refait, étanchéité traitée : quelques chantiers de l'entreprise, avant et après.",
    brief:
      "Voici quelques réalisations de M. Fabulet Couverture, artisan couvreur de La Garenne-Colombes : une peinture de toit avec traitement d'étanchéité, une rénovation complète de toiture, la réfection des parties en zinc d'un toit, et des travaux sur toiture et cheminée montrés avant et après. Chaque chantier commence par une visite et un devis gratuits.",
    contactType: "couverture",
    crumb: "Réalisations",
    photo: "real-2",
    sections: [
      {
        h2: "Que montrent ces photos de chantier ?",
        answer:
          "Des travaux réels de l'entreprise, repris de son site : un toit peint avec un traitement d'étanchéité, une toiture entièrement rénovée et des parties en zinc refaites. Le curseur avant et après montre un chantier sur toiture et cheminée. Ce sont des exemples ; chaque toit appelle sa propre solution, définie lors de la visite.",
        paras: [
          "Le site de l'entreprise résume les résultats de ses travaux sur toiture et cheminée en trois points : une valeur ajoutée à la propriété, une meilleure isolation et un aspect esthétique amélioré.",
        ],
        original: true,
      },
      {
        h2: "Pourquoi traiter l'étanchéité d'un toit en plus de le peindre ?",
        answer:
          "La peinture redonne une couleur uniforme, mais c'est le traitement d'étanchéité qui protège. Appliqué sur un support propre et sec, il bouche les microfissures et repousse l'eau. L'association des deux prolonge la vie d'une couverture encore saine, sans engager le coût d'une réfection complète.",
        paras: [
          "Cette solution ne convient pas à toutes les toitures : une couverture trop abîmée doit être réparée ou refaite avant tout traitement. L'artisan le vérifie sur place, et le devis précise ce qui est possible.",
          "Sur un toit plat, le traitement d'étanchéité forme une membrane continue ; sur des tuiles, il imprègne la terre cuite sans fermer les recouvrements.",
        ],
      },
      {
        h2: "Pourquoi refaire les parties en zinc d'une toiture ?",
        answer:
          "Le zinc vieillit plus vite que les tuiles aux endroits où l'eau se concentre : noues, solins, chéneaux. Quand il se perce ou se décolle, l'eau s'infiltre alors que le reste du toit est sain. Remplacer ces seules pièces règle la fuite et évite de refaire toute la couverture.",
        paras: [
          "C'est un chantier fréquent sur les maisons de la boucle de la Seine, où les noues et les abords de cheminée sont nombreux.",
        ],
      },
    ],
    faq: [
      {
        q: "Peut-on voir d'autres réalisations ?",
        a: "Le site actuel de l'entreprise présente d'autres photos avant et après. L'artisan peut aussi vous montrer des chantiers comparables au vôtre lors de la visite.",
      },
      {
        q: "Les photos sont-elles prises dans les Hauts-de-Seine ?",
        a: "Elles viennent des chantiers de l'entreprise en Île-de-France. Le lieu exact de chaque chantier n'est pas précisé, par discrétion pour les clients.",
      },
      {
        q: "Puis-je envoyer une photo de mon toit avant la visite ?",
        a: "Oui. Le formulaire de contact accepte jusqu'à quatre photos : elles aident à préparer la visite et le matériel.",
      },
    ],
    ctaTitle: "Le prochain avant-après, c'est votre toit ?",
    related: [PATHS.company, PATHS.roofing, PATHS.zinc],
  },
];
