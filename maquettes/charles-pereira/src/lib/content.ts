import { PATHS, type Faq } from "./site";
import type { Page } from "./types";

/**
 * Textes de la maquette. L'entreprise n'a pas de site : tout est rédigé à partir des faits publics (registre : SARL fondée
 * en 2008, siège 26 boulevard Garibaldi, activité 43.22A ; annuaires : plomberie, chauffage, débouchage, recherche de fuite).
 * Aucun prix, délai, chiffre ni certification inventés. À faire relire et confirmer par l'entreprise.
 */

export const home = {
  title: "Plombier Paris 15e depuis 2008 | Charles Pereira",
  description:
    "Plombier à Paris 15e depuis 2008, boulevard Garibaldi : plomberie, recherche de fuite, débouchage et chauffe-eau. Entreprise Charles Pereira, devis gratuit.",
  brief:
    "L'Entreprise Charles Pereira est un plombier installé à Paris 15e depuis 2008, au 26, boulevard Garibaldi, près de Cambronne. Elle intervient pour la plomberie, la recherche de fuite, le débouchage des canalisations, les chauffe-eau et le chauffage, chez les particuliers, les commerces et les copropriétés du quartier.",
  faq: [
    {
      q: "Où se trouve l'Entreprise Charles Pereira ?",
      a: "Au 26, boulevard Garibaldi, dans le 15e arrondissement, à quelques pas des stations Cambronne et Sèvres-Lecourbe de la ligne 6. Une agence existe aussi à Sartrouville, dans les Yvelines, au 35, rue Franklin.",
    },
    {
      q: "Quels travaux l'entreprise réalise-t-elle ?",
      a: "De la plomberie générale, la recherche et la réparation de fuites, le débouchage de canalisations, la pose de chauffe-eau et d'équipements de chauffage. Pour une demande plus particulière, décrivez-la dans le formulaire : elle sera orientée vers la bonne personne.",
    },
    {
      q: "Travaillez-vous pour les copropriétés ?",
      a: "Les immeubles collectifs font partie du quotidien d'un plombier parisien : colonnes d'eau, parties communes, locaux techniques. Indiquez l'adresse de l'immeuble et la personne à contacter pour l'accès dans votre demande.",
    },
    {
      q: "Comment obtenir un devis ?",
      a: "Par le formulaire de la page contact, avec l'adresse du lieu et quelques photos, ou par téléphone au 01 42 51 42 42. La demande de devis est gratuite et n'engage à rien.",
    },
  ] as Faq[],
};

/** Les quatre métiers, présentés comme les départs d'un même réseau. */
export const trades = [
  { n: "01", title: "Plomberie", href: PATHS.plumbing, text: "Installation, remplacement de canalisations, sanitaires, robinetterie, évacuations.", who: "Particuliers, commerces, copropriétés" },
  { n: "02", title: "Recherche de fuite", href: PATHS.leak, text: "Repérer l'origine d'une fuite avant d'ouvrir, puis la réparer.", who: "Particuliers, copropriétés" },
  { n: "03", title: "Débouchage", href: PATHS.drain, text: "Éviers, douches, WC et colonnes d'évacuation qui s'engorgent.", who: "Particuliers, commerces" },
  { n: "04", title: "Chauffe-eau et chauffage", href: PATHS.heating, text: "Ballons d'eau chaude, radiateurs, circuits de chauffage.", who: "Particuliers, copropriétés" },
] as const;

export const servicePages: Page[] = [
  {
    path: PATHS.plumbing,
    slug: "plombier-paris-15",
    zone: "Paris 15e",
    title: "Plombier Paris 15e : installation et dépannage | Pereira",
    description:
      "Plombier à Paris 15e depuis 2008, boulevard Garibaldi : installation, remplacement de canalisations, sanitaires et robinetterie pour particuliers et copropriétés.",
    h1: "Plombier à Paris 15e, boulevard Garibaldi",
    kicker: "Plomberie · Paris 15e",
    lead: "Installation, remplacement, réparation : le plombier du boulevard Garibaldi, pour les appartements, les commerces et les parties communes.",
    brief:
      "Pour un plombier à Paris 15e, l'Entreprise Charles Pereira travaille depuis le 26, boulevard Garibaldi : installation et remplacement de canalisations, pose de sanitaires et de robinetterie, reprise d'évacuations. Elle se déplace chez les particuliers, dans les commerces et les copropriétés du quartier, de Cambronne à Convention.",
    contactType: "plomberie",
    service: "Plomberie",
    crumb: "Plombier Paris 15e",
    photo: "immeuble",
    caption: "Un immeuble du 15e : derrière chaque façade, un réseau à entretenir",
    facts: [
      { label: "Depuis", value: "2008" },
      { label: "Siège", value: "Bd Garibaldi" },
      { label: "Métro", value: "Ligne 6" },
    ],
    approach: "Le siège est sur le boulevard Garibaldi, près des stations Cambronne et Sèvres-Lecourbe : un plombier du quartier, pas un standard lointain.",
    sections: [
      {
        h2: "Quels travaux de plomberie dans le 15e arrondissement ?",
        answer:
          "Le 15e est le plus peuplé de Paris, avec des immeubles de toutes les époques. Les demandes vont du remplacement d'un mitigeur à la reprise d'une salle de bains, en passant par des canalisations anciennes à renouveler. L'entreprise intervient en appartement, en boutique et dans les parties communes.",
        paras: [
          "Entre les immeubles de pierre du début du XXe siècle, les ensembles des années 1960 et 1970 et les programmes récents du front de Seine, les réseaux d'eau n'ont ni le même âge ni les mêmes matériaux. Un bon plombier commence par regarder ce qui existe avant de proposer ce qui convient.",
          "Cette lecture du réseau, tuyau après tuyau, est le fondement du métier : savoir où passent les arrivées, où se trouvent les vannes d'arrêt, ce qui peut être conservé et ce qui mérite d'être remplacé.",
        ],
        list: [
          "Remplacement de canalisations d'alimentation et de raccords",
          "Pose et dépose de sanitaires : lavabo, évier, WC, douche, baignoire",
          "Robinetterie, mitigeurs, flexibles et groupes de sécurité",
          "Reprise d'évacuations, de siphons et de chutes",
        ],
        listTitle: "Les travaux les plus fréquents",
      },
      {
        h2: "Pourquoi faire appel à un plombier installé dans le quartier ?",
        answer:
          "Parce qu'un artisan du quartier connaît les immeubles, les copropriétés et les contraintes d'accès : cours étroites, ascenseurs réservés, horaires de gardien. Il se déplace plus vite, revient facilement, et son adresse est connue : le 26, boulevard Garibaldi.",
        paras: [
          "Une entreprise inscrite au registre depuis 2008 laisse des traces vérifiables : une adresse, un numéro d'immatriculation, des clients voisins. C'est une garantie simple, que ne donne pas un numéro anonyme trouvé au hasard d'une recherche en ligne.",
          "Pour les travaux qui demandent plusieurs visites, la proximité compte aussi : repasser prendre une mesure, rapporter une pièce, vérifier un joint le lendemain ne coûte pas une demi-journée de trajet.",
        ],
      },
      {
        h2: "Comment se déroule une intervention de plomberie ?",
        answer:
          "On commence par comprendre la demande, par téléphone ou avec vos photos. Puis un devis est établi, les travaux sont réalisés et le réseau est contrôlé avant le départ. Pour une copropriété, l'accès aux parties communes et la coupure d'eau sont préparés avec le syndic.",
        steps: [
          { t: "Votre demande", d: "Décrivez la situation et joignez des photos : elles évitent souvent un déplacement inutile." },
          { t: "Le devis", d: "Les travaux sont décrits avant de commencer. Le devis est gratuit." },
          { t: "L'intervention", d: "Coupure d'eau annoncée, protection des sols, pose soignée des conduites et des raccords." },
          { t: "Le contrôle", d: "Mise en eau, vérification des raccords et explication de ce qui a été fait." },
        ],
      },
    ],
    faq: [
      { q: "Intervenez-vous le week-end ?", a: "Les horaires et les possibilités d'intervention en urgence sont à confirmer par téléphone au 01 42 51 42 42. Pour une fuite active, appelez plutôt que d'écrire." },
      { q: "Faut-il être propriétaire pour demander un devis ?", a: "Non. Un locataire peut demander un devis, mais certains travaux relèvent du propriétaire ou du syndic. Indiquez votre situation dans le formulaire pour obtenir la bonne réponse." },
      { q: "Quels quartiers du 15e desservez-vous ?", a: "Tout l'arrondissement, de Beaugrenelle à Vaugirard, de Convention à Montparnasse. La zone exacte d'intervention est précisée avec l'entreprise lors du premier échange." },
    ],
    ctaTitle: "Un devis de plomberie dans le 15e, sans engagement.",
    ctaText: "Décrivez votre projet, joignez des photos : l'Entreprise Charles Pereira vous répond.",
    related: [PATHS.leak, PATHS.drain, PATHS.heating, "/plombier-paris-14"],
  },
  {
    path: PATHS.leak,
    slug: "depannage-fuite-paris-15",
    zone: "Paris 15e",
    title: "Fuite d'eau Paris 15e : recherche et réparation | Pereira",
    description:
      "Fuite d'eau à Paris 15e : recherche de fuite, dégât des eaux et réparation par l'Entreprise Charles Pereira, plombier du boulevard Garibaldi. Appelez-nous.",
    h1: "Recherche de fuite d'eau à Paris 15e",
    kicker: "Fuites · Paris 15e",
    lead: "Une tache au plafond, un compteur qui tourne : on repère l'origine de la fuite avant d'ouvrir, puis on la répare.",
    brief:
      "Face à une fuite d'eau à Paris 15e, l'Entreprise Charles Pereira recherche d'abord l'origine du problème, sans casser plus que nécessaire, puis répare la canalisation, le raccord ou l'appareil en cause. Coupez l'arrivée d'eau si vous le pouvez, puis appelez le 01 42 51 42 42 depuis le boulevard Garibaldi.",
    contactType: "fuite",
    service: "Recherche et réparation de fuite",
    crumb: "Fuite d'eau Paris 15e",
    facts: [
      { label: "Premier geste", value: "Couper l'eau" },
      { label: "Ensuite", value: "Nous appeler" },
      { label: "Secteur", value: "Paris 15e" },
    ],
    approach: "Pour une fuite, le téléphone reste le moyen le plus direct : le standard est celui du boulevard Garibaldi, à Paris 15e.",
    sections: [
      {
        h2: "Que faire en cas de fuite d'eau dans un appartement ?",
        answer:
          "Fermez le robinet d'arrêt de l'appartement, ou celui du compteur, éloignez les appareils électriques de l'eau et protégez vos meubles. Prenez des photos pour votre assurance, puis appelez un plombier. Si l'eau atteint l'électricité, coupez le disjoncteur sans toucher à l'eau.",
        paras: [
          "Dans un immeuble, une fuite concerne souvent plusieurs logements. Prévenez vos voisins du dessous et le gardien ou le syndic : l'origine peut se trouver chez vous, chez eux ou dans une colonne commune.",
          "Photographiez les traces d'humidité avant de les essuyer, et notez l'heure à laquelle vous avez remarqué le problème. Ces éléments serviront à la déclaration de dégât des eaux et aideront le plombier à comprendre d'où vient l'eau.",
        ],
      },
      {
        h2: "Comment un plombier trouve-t-il l'origine d'une fuite ?",
        answer:
          "Il observe d'abord les traces, vérifie les appareils et les raccords visibles, puis isole les circuits en fermant les vannes les unes après les autres, en surveillant le compteur. Quand la fuite est encastrée, des méthodes de détection permettent de la localiser avant d'ouvrir.",
        paras: [
          "Casser un mur à l'aveugle coûte cher et dégrade les finitions. La logique d'un bon diagnostic est inverse : réduire d'abord la zone, puis n'ouvrir que l'endroit nécessaire, en pensant à la remise en état.",
          "Les causes sont variées : un joint fatigué sous un évier, un flexible qui suinte, un raccord qui se desserre, une canalisation percée par la corrosion. Chaque cause appelle une réparation différente, de la simple pièce à remplacer au tronçon à refaire.",
        ],
        list: [
          "Flexible, joint ou siphon sous un évier ou un lavabo",
          "Robinetterie, chasse d'eau, groupe de sécurité de chauffe-eau",
          "Raccord ou canalisation apparente, en cave ou en gaine technique",
          "Canalisation encastrée, à localiser avant toute ouverture",
        ],
        listTitle: "Les origines les plus courantes",
      },
      {
        h2: "Qui paie une fuite dans une copropriété du 15e ?",
        answer:
          "Cela dépend de l'endroit où se trouve la fuite : une canalisation commune relève de la copropriété, une installation privative du propriétaire du logement. Les assurances et le syndic tranchent selon le contrat. Le plombier décrit par écrit l'origine constatée, ce qui facilite les démarches.",
        paras: [
          "Pour un dégât des eaux entre voisins, un constat amiable est généralement établi entre les occupants. L'entreprise ne se substitue ni à l'assureur ni au syndic, mais elle peut décrire précisément ce qu'elle a trouvé, avec des photos.",
          "Si vous êtes syndic ou gestionnaire, précisez dans votre demande l'adresse de l'immeuble, la partie commune concernée, le nom du gardien ou d'un référent pour l'accès et, si vous l'avez, le numéro du contrat d'entretien.",
        ],
      },
    ],
    faq: [
      { q: "Faut-il toujours casser pour réparer une fuite ?", a: "Non. Beaucoup de fuites se trouvent sur des éléments accessibles : flexible, joint, robinet, siphon. Quand elle est encastrée, on localise d'abord, puis on n'ouvre que l'endroit nécessaire." },
      { q: "Peut-on envoyer des photos avant l'intervention ?", a: "Oui, le formulaire de contact accepte jusqu'à quatre photos. Elles aident à préparer les pièces et l'outillage avant de venir." },
      { q: "Que faire si je ne trouve pas le robinet d'arrêt ?", a: "Cherchez-le près du compteur, sous l'évier ou dans la gaine technique. À défaut, appelez le gardien ou le syndic, qui peut fermer la colonne, puis téléphonez-nous." },
    ],
    ctaTitle: "Une fuite à Paris 15e ? Appelez d'abord.",
    ctaText: "Coupez l'arrivée d'eau, prenez des photos, puis joignez l'Entreprise Charles Pereira.",
    related: [PATHS.plumbing, PATHS.drain, "/plombier-paris-7", "/plombier-paris-16"],
  },
  {
    path: PATHS.drain,
    slug: "debouchage-canalisation-paris-15",
    zone: "Paris 15e",
    title: "Débouchage canalisation Paris 15e : évier, WC, douche | Pereira",
    description:
      "Évier, douche ou WC bouché à Paris 15e ? L'Entreprise Charles Pereira débouche les canalisations et recherche la cause de l'engorgement. Devis gratuit en ligne.",
    h1: "Débouchage de canalisation à Paris 15e",
    kicker: "Débouchage · Paris 15e",
    lead: "Un évier qui se vide mal, un WC qui remonte : on débouche, mais on cherche surtout pourquoi cela s'est bouché.",
    brief:
      "Pour un débouchage à Paris 15e, l'Entreprise Charles Pereira traite les éviers, lavabos, douches, WC et évacuations qui s'engorgent. Elle débouche, puis cherche la cause : mauvaise pente, siphon encrassé, canalisation abîmée. Le devis est gratuit, par téléphone au 01 42 51 42 42 ou par formulaire.",
    contactType: "debouchage",
    service: "Débouchage de canalisation",
    crumb: "Débouchage Paris 15e",
    facts: [
      { label: "Appareils", value: "Évier, WC, douche" },
      { label: "Méthode", value: "Cause d'abord" },
      { label: "Secteur", value: "Paris 15e" },
    ],
    approach: "Un débouchage se règle souvent par téléphone, une fois la situation décrite : le numéro est celui du boulevard Garibaldi, à Paris 15e.",
    sections: [
      {
        h2: "Pourquoi une canalisation se bouche-t-elle ?",
        answer:
          "Graisses figées, cheveux, calcaire, lingettes jetées dans les WC, objets tombés dans un siphon : les causes sont courantes. Plus rarement, la canalisation elle-même est en cause : pente insuffisante, tuyau écrasé ou racines dans un réseau enterré. Le diagnostic précède toujours le choix de la méthode.",
        paras: [
          "Un évier de cuisine se bouche surtout par accumulation de graisses qui refroidissent dans les tuyaux. Une douche s'engorge par les cheveux et les savons. Dans les WC, ce sont presque toujours des lingettes dites jetables qui forment un bouchon.",
          "Quand le même appareil se rebouche à intervalles réguliers, ce n'est plus un bouchon : c'est un défaut du réseau, qu'un simple déblocage ne résoudra pas. C'est le moment de faire contrôler la canalisation.",
        ],
      },
      {
        h2: "Comment débouche-t-on sans abîmer les canalisations ?",
        answer:
          "On commence par la solution la moins agressive : démontage et nettoyage du siphon, puis ventouse ou pompe, puis furet manuel ou mécanique si le bouchon est plus loin. Les produits corrosifs sont déconseillés : ils attaquent les joints et certains matériaux, surtout dans les immeubles anciens.",
        paras: [
          "Le choix de l'outil dépend de l'endroit du bouchon et du diamètre de la canalisation. Un furet adapté passe les coudes sans forcer et ne raye pas l'intérieur des tuyaux, ce qui évite de créer de nouvelles accroches pour les dépôts.",
          "Une fois l'écoulement rétabli, on le vérifie en faisant couler l'eau quelques minutes et en observant les appareils voisins : un bouchon dans une colonne commune se signale souvent par des remontées chez un autre occupant.",
        ],
        list: [
          "Démontage et nettoyage du siphon",
          "Ventouse, pompe de débouchage",
          "Furet manuel ou mécanique pour les bouchons plus profonds",
          "Contrôle de l'écoulement après intervention",
        ],
        listTitle: "Du plus simple au plus technique",
      },
      {
        h2: "Que faire en attendant un plombier pour un évier bouché ?",
        answer:
          "Cessez d'utiliser l'appareil, videz l'eau stagnante avec un récipient et vérifiez le siphon, qui se dévisse souvent à la main sous une bassine. Évitez les produits chimiques puissants : leurs vapeurs et leurs éclaboussures sont dangereuses et ils compliquent le travail du plombier.",
        paras: [
          "Si plusieurs appareils sont bouchés en même temps, ou si l'eau remonte dans la douche quand vous tirez la chasse, le bouchon se trouve plus loin que le siphon, probablement dans la colonne d'évacuation. Dans un immeuble, prévenez le syndic ou le gardien.",
          "Notez depuis quand le problème existe et s'il a déjà eu lieu : ces détails orientent le diagnostic. Les photos sous l'évier ou du regard de visite aident aussi à préparer l'intervention.",
        ],
      },
    ],
    faq: [
      { q: "Les produits déboucheurs du commerce sont-ils efficaces ?", a: "Ils peuvent dissoudre un petit dépôt, mais ils abîment certains joints et tuyaux, et ils rendent l'intervention suivante plus délicate. Sur une canalisation ancienne, mieux vaut s'en passer." },
      { q: "Débouchez-vous aussi les WC ?", a: "Oui, les WC font partie des demandes fréquentes. Indiquez dans le formulaire si l'eau monte, si la chasse fonctionne et si l'incident se répète." },
      { q: "Un débouchage est-il toujours urgent ?", a: "Pas toujours, mais une évacuation bouchée qui déborde, ou une remontée dans une douche, mérite un appel rapide. Les possibilités d'intervention en urgence sont à confirmer par téléphone." },
    ],
    ctaTitle: "Une canalisation bouchée à Paris 15e ?",
    ctaText: "Décrivez l'appareil concerné, joignez une photo : l'Entreprise Charles Pereira vous répond.",
    related: [PATHS.plumbing, PATHS.leak, "/plombier-paris-14", "/plombier-issy-les-moulineaux"],
  },
  {
    path: PATHS.heating,
    slug: "chauffe-eau-chauffage-paris-15",
    zone: "Paris 15e",
    title: "Chauffe-eau et chauffage Paris 15e | Entreprise Pereira",
    description:
      "Chauffe-eau en panne ou radiateurs à reprendre à Paris 15e ? L'Entreprise Charles Pereira, plombier chauffagiste du boulevard Garibaldi, intervient. Devis gratuit.",
    h1: "Chauffe-eau et chauffage à Paris 15e",
    kicker: "Chauffage · Paris 15e",
    lead: "Un ballon d'eau chaude qui lâche, un radiateur qui reste froid : le plombier du boulevard Garibaldi remet l'eau chaude et la chaleur en route.",
    brief:
      "À Paris 15e, l'Entreprise Charles Pereira s'occupe aussi de l'eau chaude et du chauffage : remplacement de chauffe-eau, groupe de sécurité, radiateurs et circuits de chauffage. Le registre indique la plomberie et le chauffage parmi ses métiers. Décrivez votre installation et joignez des photos pour obtenir un devis gratuit.",
    contactType: "chauffage",
    service: "Chauffe-eau et chauffage",
    crumb: "Chauffe-eau Paris 15e",
    facts: [
      { label: "Eau chaude", value: "Chauffe-eau" },
      { label: "Chauffage", value: "Radiateurs" },
      { label: "Secteur", value: "Paris 15e" },
    ],
    approach: "Pour une installation d'eau chaude ou de chauffage, une photo de la plaque de l'appareil aide beaucoup : le formulaire est à une page d'ici.",
    sections: [
      {
        h2: "Que faire quand le chauffe-eau ne chauffe plus ?",
        answer:
          "Vérifiez d'abord l'alimentation électrique, le disjoncteur et le réglage du thermostat. Si l'appareil est ancien, qu'il fuit ou que l'eau reste tiède, il faut le faire examiner. Un plombier détermine s'il suffit de changer une pièce, comme la résistance ou le groupe de sécurité, ou s'il faut remplacer le ballon.",
        paras: [
          "Un chauffe-eau électrique à accumulation s'entartre avec le temps, surtout en eau calcaire. Le tartre isole la résistance, ralentit la chauffe et accélère l'usure. C'est une cause fréquente de panne, et la raison pour laquelle le groupe de sécurité doit être manœuvré régulièrement.",
          "Une fuite à la base du ballon est, elle, un signal d'alerte : la cuve est généralement percée et le remplacement s'impose. Coupez l'alimentation électrique et l'arrivée d'eau du chauffe-eau, puis appelez-nous avec une photo de l'appareil.",
        ],
      },
      {
        h2: "Quel chauffe-eau choisir pour un appartement parisien ?",
        answer:
          "Le choix dépend de l'espace disponible, du nombre d'occupants et de la hauteur sous plafond. Dans un petit appartement, un modèle compact sous évier ou vertical mural suffit souvent. Pour une famille, un ballon de plus grande capacité est préférable. Le plombier propose après avoir vu les lieux.",
        paras: [
          "En ville, la contrainte est rarement le budget seul : c'est le passage. Il faut pouvoir monter l'appareil par l'escalier, le fixer sur un mur porteur, raccorder l'évacuation du groupe de sécurité et prévoir une alimentation électrique conforme.",
          "Les immeubles anciens ont aussi leurs particularités : placards techniques exigus, cloisons fines, colonnes d'évacuation déjà chargées. Une visite ou des photos du lieu permettent de choisir un modèle qui se pose vraiment, plutôt qu'un modèle qui ne rentre pas.",
        ],
        list: [
          "Remplacement d'un chauffe-eau électrique",
          "Changement de groupe de sécurité ou de résistance",
          "Pose ou dépose de radiateurs",
          "Reprise d'un circuit de chauffage qui chauffe mal",
        ],
        listTitle: "Ce que l'on peut vous proposer",
      },
      {
        h2: "Pourquoi un radiateur reste-t-il froid en haut ou en bas ?",
        answer:
          "Un radiateur froid en haut contient souvent de l'air : une purge suffit parfois. Froid en bas, il est plus probablement encrassé par des boues, ce qui demande un nettoyage du circuit. Un radiateur entièrement froid peut venir d'un robinet bloqué, d'un circulateur en panne ou d'un problème de chaufferie.",
        paras: [
          "En immeuble collectif, le chauffage est souvent collectif aussi : un radiateur qui ne chauffe plus dépend alors de la chaufferie et du syndic, et seule la partie privative peut être traitée dans le logement. Un plombier peut dire de quel côté se situe la panne.",
          "Pour les logements à chauffage individuel, la demande est plus directe : décrivez l'installation, la marque de la chaudière ou de l'appareil si vous la connaissez, et ce que vous observez. Une photo de la plaque signalétique accélère le premier échange.",
        ],
      },
    ],
    faq: [
      { q: "Intervenez-vous sur les chaudières ?", a: "Le registre indique la plomberie et le chauffage parmi les activités de l'entreprise. Les marques et les types d'appareils pris en charge sont à confirmer par téléphone avant de vous déplacer." },
      { q: "Comment purger un radiateur ?", a: "Avec une clé de purge, ouvrez doucement la petite vis en haut du radiateur jusqu'à ce que l'eau coule, puis refermez. Placez un chiffon dessous. Si le problème persiste, le circuit est peut-être encrassé." },
      { q: "Faut-il être présent pour un remplacement de chauffe-eau ?", a: "Oui, ou quelqu'un de confiance, car il faut couper l'eau et l'électricité et accéder au local. Convenez de l'accès à l'avance, surtout en copropriété." },
    ],
    ctaTitle: "De l'eau chaude et de la chaleur à Paris 15e.",
    ctaText: "Décrivez votre installation, joignez la plaque de l'appareil en photo : devis gratuit.",
    related: [PATHS.plumbing, PATHS.leak, "/plombier-paris-16", "/plombier-boulogne-billancourt"],
  },
];
