import { PATHS } from "./site";
import type { Page } from "./types";

/**
 * Textes de la maquette Houdry-Grenot. Le site actuel (houdry-grenot.com) n'était pas lisible depuis l'environnement de
 * travail : le prébuild en relève le texte dans le journal de build, à comparer avec ce qui suit. Rien ici n'avance de prix,
 * de délai, de label ou de chiffre autre que ceux communiqués (Paris 17e, fondée en 1996, 20 à 49 salariés, fiche Google).
 */

export const about = {
  paras: [
    "Houdry-Grenot est une entreprise de plomberie installée à Paris, dans le 17e arrondissement, et fondée en 1996.",
    "Son équipe intervient en dépannage comme en travaux : sanitaire, robinetterie, tuyauterie et salles de bains, dans les appartements, les commerces et les immeubles du quartier.",
    "Plus de vingt-cinq ans après sa création, l'entreprise reste attachée à ce qui fait un bon plombier : un diagnostic clair, un travail propre et une installation qui tient dans le temps.",
  ],
  description:
    "Houdry-Grenot, plomberie à Paris 17e depuis 1996 : dépannage, sanitaire, tuyauterie et rénovation de salle de bains, pour les particuliers et les copropriétés.",
};

export const home = {
  title: "Plombier Paris 17e depuis 1996 : dépannage | Houdry-Grenot",
  description:
    "Houdry-Grenot, plombier à Paris 17e depuis 1996 : dépannage, sanitaire, tuyauterie et salle de bains par une équipe étoffée, pour particuliers et copropriétés.",
  brief:
    "Houdry-Grenot est un plombier installé à Paris 17e et fondé en 1996. L'entreprise dépanne les fuites et les pannes d'eau, installe le sanitaire et la robinetterie, reprend la tuyauterie et rénove les salles de bains, chez les particuliers, dans les commerces et pour les copropriétés du quartier.",
};

const plumbing: Page = {
  path: PATHS.plumbing,
  title: "Plombier Paris 17e : sanitaire et tuyauterie | Houdry-Grenot",
  description:
    "Plombier à Paris 17e depuis 1996 : sanitaire, robinetterie, tuyauterie et installation d'appareils par Houdry-Grenot, pour particuliers et copropriétés.",
  h1: "Plombier à Paris 17e : sanitaire, robinetterie et tuyauterie",
  kicker: "Plomberie",
  lead: "De l'arrivée d'eau à l'évacuation, une équipe de plombiers du 17e qui installe, répare et remet aux normes, sans rien laisser au hasard.",
  brief:
    "Plombier à Paris 17e depuis 1996, Houdry-Grenot installe et répare le sanitaire, la robinetterie et la tuyauterie des appartements, des commerces et des immeubles du quartier. L'entreprise intervient chez les particuliers comme pour les copropriétés. Pour un projet, décrivez votre besoin et envoyez quelques photos par le formulaire.",
  contactType: "plomberie",
  service: "Plomberie : sanitaire, robinetterie, tuyauterie",
  crumb: "Plomberie",
  photo: "cle",
  facts: [
    { label: "Depuis", value: "1996" },
    { label: "Siège", value: "Paris 17e" },
    { label: "Pour", value: "Particuliers, copropriétés" },
  ],
  sections: [
    {
      h2: "Que fait un plombier à Paris 17e au quotidien ?",
      answer:
        "Il amène l'eau là où on en a besoin, la distribue aux appareils et l'évacue proprement. Concrètement : poser ou remplacer un lavabo, un WC, un évier, un mitigeur, reprendre une canalisation, régler une pression irrégulière ou installer un chauffe-eau, dans le respect de l'immeuble.",
      paras: [
        "Dans le 17e, la moitié du travail consiste à composer avec l'existant : des immeubles de pierre du quartier des Batignolles, des étages élevés où la pression d'eau n'est pas la même qu'en rez-de-chaussée, des cuisines et des salles d'eau installées dans d'anciennes chambres de service.",
        "Un plombier qui connaît ces configurations propose la solution la plus simple, celle qui ne demande pas d'ouvrir plus de murs que nécessaire. C'est ce regard d'entreprise de quartier que Houdry-Grenot met au service de chaque installation.",
      ],
    },
    {
      h2: "Comment se passe le remplacement d'un appareil sanitaire ?",
      answer:
        "Le plombier relève les cotes et les raccordements existants, coupe l'eau, dépose l'ancien appareil, adapte l'alimentation et l'évacuation, puis installe le nouveau et le teste sous pression. Une photo de l'existant, envoyée avec votre demande, permet de préparer la visite et le matériel.",
      paras: [
        "Avant de choisir un WC, une vasque ou une baignoire, mesurez la place disponible et repérez où arrivent l'eau et l'évacuation. Dans un appartement ancien, un décalage de quelques centimètres sur une évacuation peut décider du modèle possible, ou de la nécessité d'un petit travail de reprise.",
        "Le robinet d'arrêt de l'appareil, quand il existe, est le premier réflexe : il évite de couper l'eau de tout le logement pendant l'intervention. S'il ne ferme plus, son remplacement fait partie des travaux utiles à prévoir.",
      ],
    },
    {
      h2: "Que faire face à des canalisations anciennes ou à une mauvaise pression ?",
      answer:
        "Faire identifier les matériaux en place, cuivre, acier galvanisé, fonte ou parfois plomb, puis choisir ce qui se remplace et ce qui se conserve. Une pression faible vient souvent d'un tartre accumulé, d'un robinet d'arrêt partiellement fermé ou d'un tronçon corrodé, qu'un diagnostic sur place permet de situer.",
      paras: [
        "Dans une copropriété, la frontière entre parties privatives et parties communes compte : une colonne montante ou une descente d'eaux usées relève en général du syndic, le branchement de votre logement relève de vous. Houdry-Grenot travaille avec les deux interlocuteurs et peut expliquer ce qui revient à chacun.",
        "Le mot « plombier » rappelle que les premières conduites étaient en plomb. Lorsqu'il en reste dans un logement ancien, leur remplacement par une canalisation actuelle est un chantier à envisager avec le plombier, partie privative par partie privative.",
      ],
    },
    {
      h2: "Comment préparer la venue du plombier ?",
      answer:
        "Indiquez l'adresse exacte, l'étage, le code d'accès et la personne présente. Décrivez le besoin en une phrase, joignez deux ou trois photos, et repérez le robinet d'arrêt général, souvent près du compteur. Ces quelques éléments évitent un second déplacement et accélèrent le diagnostic.",
      steps: [
        { t: "Votre demande", d: "Par téléphone au 01 53 06 97 97, ou par le formulaire avec l'adresse et quelques photos." },
        { t: "Le rendez-vous", d: "Organisez votre rendez-vous en nous contactant : le créneau est fixé avec vous." },
        { t: "Le constat", d: "Un plombier regarde l'installation et vous explique simplement ce qu'il propose." },
        { t: "Les travaux", d: "Réalisés, contrôlés sous pression, puis le chantier est laissé propre." },
      ],
    },
  ],
  faq: [
    {
      q: "Houdry-Grenot intervient-elle chez les particuliers ?",
      a: "Oui. L'entreprise travaille pour les particuliers, les commerces et les copropriétés. Un appartement, un local professionnel ou les parties communes d'un immeuble du 17e arrondissement entrent dans son quotidien.",
    },
    {
      q: "Où se trouve Houdry-Grenot ?",
      a: "Dans le 17e arrondissement de Paris, 75017. Le téléphone est le 01 53 06 97 97 et l'adresse e-mail plomberie@houdry-grenot.com. L'adresse de rue exacte est indiquée par l'entreprise lors de la prise de rendez-vous.",
    },
    {
      q: "Faut-il un devis pour remplacer un robinet ou un WC ?",
      a: "Pour un petit remplacement, le plombier vous explique sur place ce qu'il prévoit. Pour des travaux plus étendus, demandez un devis : décrivez votre projet dans le formulaire, photos à l'appui, et l'entreprise revient vers vous.",
    },
    {
      q: "Mon immeuble a encore des canalisations en plomb : que faire ?",
      a: "Signalez-le dans votre demande. Pour la partie privative, le remplacement par une canalisation actuelle se prévoit avec le plombier. Pour les colonnes communes, la décision revient à la copropriété, que l'entreprise peut renseigner si le syndic la sollicite.",
    },
  ],
  ctaTitle: "Un appareil à poser, une canalisation à reprendre ?",
  ctaText: "Organisez votre rendez-vous avec l'équipe de Houdry-Grenot.",
  related: [PATHS.repair, PATHS.bathroom, "/plombier-paris-17"],
};

const repair: Page = {
  path: PATHS.repair,
  title: "Dépannage plomberie Paris 17e : fuite et canalisation",
  description:
    "Dépannage plomberie à Paris 17e : fuite d'eau, canalisation bouchée, WC qui coule ou panne d'eau, avec les bons réflexes et Houdry-Grenot au 01 53 06 97 97.",
  h1: "Dépannage plomberie à Paris 17e : fuite, canalisation, panne d'eau",
  kicker: "Dépannage",
  lead: "Une fuite ne se règle pas dans trois jours : les bons réflexes, puis un plombier du quartier qui vient constater et réparer.",
  brief:
    "En cas de fuite, de canalisation bouchée ou de panne d'eau à Paris 17e, fermez d'abord le robinet d'arrêt, puis appelez Houdry-Grenot au 01 53 06 97 97. L'entreprise, fondée en 1996, constate sur place, répare ce qui peut l'être et vous explique l'origine du problème pour qu'il ne revienne pas.",
  contactType: "depannage",
  service: "Dépannage de plomberie : fuite, canalisation, panne d'eau",
  crumb: "Dépannage",
  photo: "robinet",
  facts: [
    { label: "Téléphone", value: "01 53 06 97 97" },
    { label: "Siège", value: "Paris 17e" },
    { label: "Depuis", value: "1996" },
  ],
  sections: [
    {
      h2: "Fuite d'eau : que faire avant l'arrivée du plombier ?",
      answer:
        "Fermez le robinet d'arrêt de l'appartement ou celui de l'appareil concerné. Coupez l'électricité si l'eau approche d'une prise ou du tableau. Épongez, protégez le sol, puis prévenez le voisin du dessous et le syndic. Photographiez les dégâts : ces images serviront au constat et à l'assurance.",
      paras: [
        "Le robinet d'arrêt général d'un appartement se trouve le plus souvent près du compteur d'eau, dans la cuisine, la salle de bains ou un placard technique du palier. Le repérer avant d'en avoir besoin est un bon réflexe, surtout dans un immeuble de plusieurs étages.",
        "En cas de dégât des eaux entre deux logements, un constat amiable se remplit avec le voisin concerné. Notez la date, l'origine supposée de la fuite et les pièces touchées : le plombier pourra ensuite décrire précisément la cause et la réparation.",
      ],
    },
    {
      h2: "Comment reconnaître une fuite cachée ?",
      answer:
        "Un compteur qui tourne alors que tous les robinets sont fermés, une tache qui s'étend au plafond, une peinture qui cloque, une odeur d'humidité ou une facture d'eau en hausse sans raison : ces signes révèlent souvent une fuite sur une canalisation encastrée, qu'il faut faire localiser avant de rouvrir les murs.",
      paras: [
        "Pour vérifier, fermez tous les robinets, relevez l'index du compteur, attendez une heure sans consommer d'eau, puis relevez-le à nouveau. Si le chiffre a bougé, l'eau s'échappe quelque part. Communiquez ce relevé au plombier : il gagne du temps pour chercher au bon endroit.",
      ],
    },
    {
      h2: "Que faire d'une canalisation bouchée ou d'un WC qui coule ?",
      answer:
        "Évitez les produits chimiques agressifs, qui abîment les joints et certaines canalisations anciennes. Une ventouse suffit parfois pour un bouchon local. Si l'eau stagne encore, ou si plusieurs appareils s'évacuent mal, la cause est plus loin et un plombier doit intervenir avec le matériel adapté.",
      paras: [
        "Un WC qui coule en continu vient presque toujours du mécanisme de chasse : joint usé, flotteur déréglé ou robinet flotteur à remplacer. C'est une réparation courte, mais elle mérite d'être faite vite, car un filet d'eau permanent représente un volume important sur un mois.",
        "Pour les bouchons à répétition dans une colonne d'immeuble, le dossier se traite avec le syndic : l'évacuation commune ne relève pas d'un seul logement.",
      ],
    },
    {
      h2: "Comment demander un dépannage à Houdry-Grenot ?",
      answer:
        "Par téléphone au 01 53 06 97 97 pour une urgence, ou par le formulaire de contact pour une demande moins pressante. Indiquez l'adresse, l'étage, la nature du problème et, si possible, envoyez une photo. L'entreprise vous rappelle pour organiser le rendez-vous.",
      steps: [
        { t: "Appelez", d: "Pour une fuite active, le téléphone reste le moyen le plus direct." },
        { t: "Décrivez", d: "Où, depuis quand, quelle quantité d'eau, quels appareils touchés." },
        { t: "Le plombier constate", d: "Sur place, il localise l'origine et vous explique ce qu'il fait." },
        { t: "La réparation", d: "Faite proprement, puis vérifiée avant son départ." },
      ],
    },
  ],
  faq: [
    {
      q: "Quel numéro appeler pour un dépannage de plomberie ?",
      a: "Le 01 53 06 97 97, numéro de Houdry-Grenot. Pour une demande qui n'est pas urgente, le formulaire de contact permet de décrire le problème, l'adresse et d'ajouter des photos. Les horaires d'ouverture sont à demander lors de l'appel.",
    },
    {
      q: "Qui prévenir en cas de dégât des eaux dans un appartement ?",
      a: "Le voisin concerné pour remplir un constat amiable, le syndic si l'origine est dans les parties communes, et votre assureur dans les délais indiqués par votre contrat. Le plombier peut décrire par écrit la cause et la réparation effectuée.",
    },
    {
      q: "Peut-on réparer soi-même une petite fuite ?",
      a: "Certaines réparations simples, comme remplacer un joint de robinet, sont à la portée de beaucoup. Pour une canalisation encastrée, un raccord qui suinte ou une fuite sur le gaz ou le chauffage, mieux vaut faire appel à un professionnel.",
    },
  ],
  ctaTitle: "Une fuite, une panne d'eau ?",
  ctaText: "Appelez l'équipe de Houdry-Grenot ou décrivez le problème en ligne.",
  related: [PATHS.plumbing, PATHS.bathroom, "/plombier-paris-17"],
};

const bathroom: Page = {
  path: PATHS.bathroom,
  title: "Rénovation de salle de bains à Paris 17e | Houdry-Grenot",
  description:
    "Rénovation de salle de bains à Paris 17e : plomberie, douche, baignoire, vasque et évacuations repensées par Houdry-Grenot, plombier du quartier depuis 1996.",
  h1: "Rénovation de salle de bains à Paris 17e",
  kicker: "Salle de bains",
  lead: "Douche, baignoire, vasque, WC : la plomberie d'une salle de bains se décide avant le carrelage, et c'est elle qui fait durer la pièce.",
  brief:
    "Pour rénover une salle de bains à Paris 17e, Houdry-Grenot s'occupe de la plomberie : arrivées d'eau, évacuations, douche, baignoire, vasque et WC. Fondée en 1996, l'entreprise intervient dans les appartements du quartier et vous explique les choix techniques avant de commencer le chantier.",
  contactType: "salle-de-bains",
  service: "Rénovation de salle de bains : plomberie et sanitaire",
  crumb: "Salle de bains",
  photo: "lavabo",
  facts: [
    { label: "Depuis", value: "1996" },
    { label: "Siège", value: "Paris 17e" },
    { label: "Pour", value: "Appartements" },
  ],
  sections: [
    {
      h2: "Par quoi commence la rénovation d'une salle de bains ?",
      answer:
        "Par le plan de la plomberie : où arrivent l'eau chaude et froide, où part l'évacuation, quelle pente elle exige et où placer chaque appareil. Ces contraintes fixent ce qui est possible, bien avant le choix du carrelage ou de la robinetterie. Un relevé sur place évite les mauvaises surprises.",
      paras: [
        "Dans un appartement parisien, la salle de bains occupe souvent une ancienne chambre de service, un couloir ou un recoin de cuisine, avec une évacuation placée là où elle était commode il y a des décennies. Déplacer une douche de deux mètres peut demander de repenser tout le réseau.",
        "L'équipe de Houdry-Grenot peut venir constater les lieux, mesurer, et vous dire ce qui est simple, ce qui demande des travaux plus lourds et ce qui dépend de la copropriété.",
      ],
    },
    {
      h2: "Douche ou baignoire : que change le choix pour la plomberie ?",
      answer:
        "Une douche à l'italienne exige une évacuation avec une pente suffisante et une étanchéité soignée sous le receveur. Une baignoire demande un débit d'évacuation plus important et un support adapté à son poids une fois remplie. Dans les deux cas, le plombier valide la faisabilité avant l'achat.",
      paras: [
        "Dans un immeuble ancien, la hauteur disponible sous le sol limite parfois les receveurs extra-plats ; un caniveau peut alors être une solution. Le poids d'une baignoire en fonte ou en pierre se vérifie aussi, car un plancher ancien n'accepte pas n'importe quelle charge.",
      ],
    },
    {
      h2: "Quels travaux de plomberie prévoir dans une salle de bains rénovée ?",
      answer:
        "Le remplacement des arrivées d'eau anciennes, des évacuations vieillissantes et des robinets d'arrêt, la création ou le déplacement des points d'eau, la pose des appareils, puis les essais sous pression. Faire ces travaux avant les finitions évite de casser un carrelage neuf pour une fuite.",
      list: ["Arrivées d'eau chaude et froide", "Évacuations et pentes", "Douche ou baignoire", "Vasque, meuble et robinetterie", "WC et chasse d'eau", "Essais sous pression avant fermeture des murs"],
      listTitle: "Les postes de plomberie d'une salle de bains",
      paras: [
        "Les essais sous pression avant de refermer les cloisons sont une étape clé : ils révèlent un raccord mal serré quand il est encore accessible, et non après la pose du carrelage.",
      ],
    },
    {
      h2: "Comment organiser un chantier de salle de bains en copropriété ?",
      answer:
        "Prévenez le syndic avant les travaux, vérifiez le règlement de copropriété pour les horaires de bruit et l'usage de l'ascenseur, et informez vos voisins. Si une colonne commune est concernée, l'accord du syndic est nécessaire. Le plombier vous indique ce qui relève de votre logement.",
      paras: [
        "Houdry-Grenot travaillant aussi pour des copropriétés, l'équipe connaît ces échanges avec les syndics et les gardiens : accès à l'immeuble, protection des parties communes, coupure d'eau annoncée à l'avance.",
      ],
    },
  ],
  faq: [
    {
      q: "Peut-on déplacer la douche ou le WC dans l'appartement ?",
      a: "Souvent oui, mais cela dépend de l'évacuation : un WC exige une pente régulière vers la colonne. Un plombier doit constater sur place, car la hauteur sous plancher et la position de la colonne commune fixent ce qui est faisable.",
    },
    {
      q: "Faut-il prévenir le syndic pour une rénovation de salle de bains ?",
      a: "Oui, par prudence et souvent par obligation du règlement de copropriété, notamment pour les horaires de travaux, l'accès et toute intervention touchant une colonne commune. Le plombier vous indique ce qui doit être signalé.",
    },
    {
      q: "Peut-on envoyer des photos de la salle de bains avec la demande ?",
      a: "Oui, le formulaire de contact accepte jusqu'à quatre photos. Montrez la pièce entière, les arrivées d'eau, l'évacuation et l'emplacement des appareils actuels : l'équipe prépare ainsi le constat et les questions à vous poser.",
    },
  ],
  ctaTitle: "Un projet de salle de bains ?",
  ctaText: "Décrivez-le à l'équipe de Houdry-Grenot, photos à l'appui.",
  related: [PATHS.plumbing, PATHS.repair, "/plombier-paris-17"],
};

export const originalPages: Page[] = [plumbing, repair, bathroom];
