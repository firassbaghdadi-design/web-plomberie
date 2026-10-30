import { PATHS, type Faq } from "./site";
import type { Page } from "./types";

/**
 * Textes de la maquette. DBP n'a pas de site : tout est rédigé à partir des faits publics (annuaires, registre :
 * SARL, 1 villa Gagliardini, Paris 20e, plomberie et chauffage, code NAF 43.22A, 10 à 19 salariés) et de conseils
 * généraux de métier. Aucun prix, délai, chiffre d'entreprise ni certification inventés. Les prestations citées
 * sont celles du nom de l'entreprise (plomberie, chauffage) et de sa fiche PagesJaunes (débouchages).
 * À faire relire et confirmer par l'entreprise.
 */

export const home = {
  title: "Plombier chauffagiste Paris 20e depuis 2007 | DBP Plomberie",
  description:
    "DBP Plomberie-Chauffage, plombier chauffagiste à Paris 20e depuis 2007, villa Gagliardini : fuites, débouchage, sanitaires, radiateurs, chaudière. Devis gratuit",
  brief:
    "DBP Plomberie-Chauffage est un plombier chauffagiste de Paris 20e, installé au 1, villa Gagliardini, près de la porte des Lilas, depuis 2007. L'entreprise intervient en plomberie, de la fuite au débouchage, puis en chauffage, des radiateurs à la chaudière, chez les particuliers comme dans les copropriétés du quartier.",
  faq: [
    {
      q: "Où se trouve DBP Plomberie-Chauffage ?",
      a: "Au 1, villa Gagliardini, dans le 20e arrondissement, à environ 300 mètres de la porte des Lilas. Le métro (lignes 11 et 3bis) et le tramway T3b s'arrêtent à proximité, ce qui facilite le passage à l'atelier.",
    },
    {
      q: "Quels travaux DBP réalise-t-elle ?",
      a: "Deux familles de travaux : la plomberie, avec la recherche de fuites, le débouchage des éviers, lavabos, WC, baignoires et siphons, les sanitaires et la robinetterie, puis le chauffage, avec les radiateurs, la chaudière et son entretien.",
    },
    {
      q: "Intervenez-vous pour les copropriétés ?",
      a: "Oui, les parties communes d'un immeuble réunissent plomberie et chauffage. Indiquez l'adresse, la partie concernée et la personne qui donne l'accès, par le formulaire de la page contact ou par téléphone au 01 42 45 91 35.",
    },
    {
      q: "Comment obtenir un devis ?",
      a: "Par le formulaire de la page contact, avec l'adresse du lieu et quelques photos du problème, ou par téléphone. La demande de devis est gratuite et vous n'avez pas besoin de connaître le nom des pièces à remplacer.",
    },
  ] as Faq[],
};

/** Du dépannage au confort : chaque ligne porte un degré, de 16° à 21°, comme un thermostat qui monte. */
export const trades = [
  { n: "16°", title: "Fuites et dépannage", href: PATHS.plumbing, text: "Recherche et réparation de fuites, robinets d'arrêt, tuyaux, dégâts des eaux.", who: "Particuliers, copropriétés" },
  { n: "17°", title: "Débouchage", href: PATHS.plumbing, text: "Éviers, lavabos, baignoires, WC, siphons et canalisations.", who: "Particuliers, commerces" },
  { n: "18°", title: "Sanitaires et robinetterie", href: PATHS.plumbing, text: "Pose et remplacement de lavabos, vasques, robinets, meubles de salle de bains.", who: "Particuliers" },
  { n: "20°", title: "Radiateurs", href: PATHS.heating, text: "Purge, robinets thermostatiques, remplacement, radiateur froid d'un côté.", who: "Particuliers, copropriétés" },
  { n: "21°", title: "Chaudière et confort", href: PATHS.heating, text: "Entretien annuel, réglage, dépannage et remplacement de chaudière.", who: "Particuliers, copropriétés" },
] as const;

export const servicePages: Page[] = [
  {
    path: PATHS.plumbing,
    slug: "plombier-paris-20",
    zone: "Paris 20e",
    title: "Plombier Paris 20e : fuite, débouchage, sanitaires | DBP",
    description:
      "Plombier à Paris 20e, villa Gagliardini : recherche de fuite, débouchage d'évier, de lavabo et de WC, sanitaires, robinetterie. DBP Plomberie-Chauffage, devis.",
    h1: "Plombier à Paris 20e, près de la porte des Lilas",
    kicker: "16° · Plomberie",
    lead: "Une fuite, un évier bouché, un robinet qui goutte : le plombier du 20e qui commence par le dépannage, depuis 2007.",
    brief:
      "Pour un plombier à Paris 20e, DBP Plomberie-Chauffage intervient depuis le 1, villa Gagliardini, près de la porte des Lilas : recherche et réparation de fuites, débouchage d'éviers, de lavabos, de WC, de baignoires et de siphons, pose et remplacement de sanitaires et de robinetterie, pour les particuliers et les copropriétés.",
    contactType: "plomberie",
    localIntro: "Pour un plombier du 20e, l'atelier est à deux pas : environ 300 mètres de la porte des Lilas, côté rue Haxo.",
    service: "Plomberie",
    crumb: "Plombier Paris 20e",
    photo: "plombier",
    photoPos: "50% 40%",
    caption: "Les mains avant les tuyaux",
    facts: [
      { label: "Quartier", value: "Paris 20e" },
      { label: "Métiers", value: "Plomberie, chauffage" },
      { label: "Depuis", value: "2007" },
    ],
    sections: [
      {
        h2: "Que faire en cas de fuite d'eau dans un appartement du 20e ?",
        answer:
          "Coupez d'abord l'arrivée d'eau au robinet d'arrêt de l'appartement, puis le courant si l'eau approche des prises. Épongez, photographiez les dégâts pour l'assurance et appelez un plombier. Ne percez rien : mieux vaut faire localiser la fuite avant de décider de la réparation.",
        paras: [
          "Dans un immeuble ancien, une fuite se voit rarement là où elle naît. L'eau suit un tuyau, une dalle ou une gaine avant de tacher un plafond chez le voisin du dessous. Le plombier remonte donc le chemin de l'eau : compteur, robinets d'arrêt, raccords, évacuations, joints autour de la baignoire.",
          "Après un dégât des eaux, pensez à prévenir le syndic si une partie commune est concernée, et à déclarer le sinistre à votre assureur dans le délai prévu par votre contrat, souvent de cinq jours ouvrés. Une facture de réparation et quelques photos facilitent le dossier.",
        ],
        list: [
          "Recherche et réparation de fuites sur alimentation et évacuation",
          "Remplacement de tuyaux, de raccords et de robinets d'arrêt",
          "Réparation de chasse d'eau et de robinetterie qui goutte",
          "Intervention après un dégât des eaux, avec photos pour l'assurance",
        ],
      },
      {
        h2: "Comment faire déboucher un évier, un lavabo ou des toilettes ?",
        answer:
          "Commencez par une ventouse, puis démontez et nettoyez le siphon, souvent responsable. Évitez de mélanger des produits chimiques, qui dégagent des vapeurs dangereuses et abîment les joints. Si l'eau stagne encore, l'obstruction est plus loin dans la canalisation : un plombier équipé la dégage sans abîmer les tuyaux.",
        paras: [
          "Le débouchage concerne les éviers de cuisine, chargés de graisses et de résidus, les lavabos et baignoires, où s'accumulent cheveux et savon, et les WC. La fiche de l'entreprise sur PagesJaunes le cite parmi ses prestations : évier, lavabo, baignoire, siphon, WC et canalisation.",
          "Quand plusieurs appareils d'un même logement s'écoulent mal en même temps, ou quand l'eau remonte chez le voisin, le problème vient souvent de la colonne d'évacuation commune. Prévenez alors le syndic : le débouchage de la partie commune ne se règle pas appartement par appartement.",
        ],
      },
      {
        h2: "Quels sanitaires et quelle robinetterie peut-on faire poser ?",
        answer:
          "Un plombier remplace un robinet, un mitigeur, un lavabo, une vasque ou un meuble de salle de bains, et raccorde l'alimentation et l'évacuation. Apportez la référence de l'appareil acheté, ou une photo de l'existant : cela évite une visite pour seulement prendre les mesures.",
        paras: [
          "Poser un meuble acheté en magasin demande plus qu'un tournevis : il faut déconnecter l'ancien, vérifier l'état des arrivées, parfois changer les flexibles et les robinets d'arrêt devenus durs, puis tester l'étanchéité avant de refermer. Le temps passé dépend de l'état de l'installation, pas seulement de l'appareil.",
        ],
        after: [
          "Dans les logements anciens du 20e, il arrive qu'un remplacement simple révèle un tuyau fatigué ou un raccord corrodé. Mieux vaut le savoir avant de reposer le meuble : le devis peut alors prévoir la reprise de ce point, plutôt que de rouvrir le mur plus tard.",
        ],
      },
      {
        h2: "Comment préparer votre demande d'intervention",
        steps: [
          { t: "Repérez", d: "Notez où l'eau coule, depuis quand, et si le robinet d'arrêt de l'appartement est accessible." },
          { t: "Photographiez", d: "Une photo d'ensemble et une photo de près suffisent souvent à orienter la réponse." },
          { t: "Décrivez", d: "Adresse, étage, présence d'un ascenseur, code d'accès et personne à appeler sur place." },
          { t: "Contactez", d: "Par le formulaire de la page contact, avec les photos, ou par téléphone au 01 42 45 91 35." },
        ],
      },
      {
        h2: "Combien coûte un plombier à Paris 20e ?",
        answer:
          "Le prix dépend de la nature du problème, de l'accès, des pièces à remplacer et du temps passé : il ne peut pas être annoncé sérieusement sans description ni photos. Une demande de devis est gratuite chez DBP ; le montant est établi avant les travaux, une fois le problème compris.",
        paras: [
          "Méfiez-vous des prix fixes annoncés par téléphone pour un problème que personne n'a vu. Un bon devis nomme les opérations, les fournitures et le temps estimé, et distingue ce qui est indispensable de ce qui peut attendre.",
        ],
      },
    ],
    faq: [
      {
        q: "Où se trouve le plombier DBP à Paris 20e ?",
        a: "Au 1, villa Gagliardini, près de la porte des Lilas, à la limite du 19e et du 20e. L'entreprise est installée dans le quartier depuis 2007 et se déplace dans les arrondissements et communes voisins.",
      },
      {
        q: "Peut-on appeler en dehors des heures de bureau ?",
        a: "Les annuaires indiquent une ouverture du lundi au vendredi. Pour une urgence en dehors de ces jours, téléphonez au 01 42 45 91 35 : l'entreprise vous dira ce qui est possible, sans promesse faite à l'avance.",
      },
      {
        q: "Faut-il être propriétaire pour demander une intervention ?",
        a: "Non, un locataire peut appeler pour une fuite ou un évier bouché. Pour une réparation qui relève du propriétaire ou du syndic, prévenez-les et gardez le devis et la facture pour la répartition des frais.",
      },
      {
        q: "Intervenez-vous dans les copropriétés du 20e ?",
        a: "Oui. Pour une colonne d'eau, une évacuation commune ou un local technique, donnez l'adresse de l'immeuble, la partie concernée et le nom du syndic ou du gardien qui assure l'accès.",
      },
    ],
    ctaTitle: "Une fuite ? Un évier bouché ? Décrivez-le nous.",
    ctaText: "Par téléphone ou avec quelques photos : le plombier du 20e vous répond.",
    related: [PATHS.heating, "/plombier-chauffagiste-paris-19", "/plombier-chauffagiste-paris-11", "/plombier-chauffagiste-les-lilas"],
  },
  {
    path: PATHS.heating,
    slug: "chauffagiste-paris-20",
    zone: "Paris 20e",
    title: "Chauffagiste Paris 20e : radiateurs et chaudière | DBP",
    description:
      "Chauffagiste à Paris 20e, villa Gagliardini : radiateurs froids, purge, robinets thermostatiques, entretien et dépannage de chaudière. DBP Plomberie-Chauffage.",
    h1: "Chauffagiste à Paris 20e, de la chaudière aux radiateurs",
    kicker: "21° · Chauffage",
    lead: "Des radiateurs qui chauffent partout et une chaudière suivie : le confort d'un logement du 20e, après le dépannage.",
    brief:
      "Pour un chauffagiste à Paris 20e, DBP Plomberie-Chauffage s'occupe depuis le 1, villa Gagliardini des radiateurs et de la chaudière : purge et remplacement de radiateurs, robinets thermostatiques, entretien annuel, réglage et dépannage de chaudière, pour les appartements, les maisons et les copropriétés du quartier.",
    contactType: "chauffage",
    localIntro: "Un chauffagiste du quartier : l'atelier se trouve près de la porte des Lilas, accessible en métro, en tramway ou à vélo.",
    service: "Chauffage",
    crumb: "Chauffagiste Paris 20e",
    photo: "thermostat",
    photoPos: "50% 50%",
    caption: "Un degré de plus, et le confort change",
    facts: [
      { label: "Quartier", value: "Paris 20e" },
      { label: "Matériel", value: "Radiateurs, chaudière" },
      { label: "Depuis", value: "2007" },
    ],
    sections: [
      {
        h2: "Pourquoi un radiateur reste-t-il froid en haut ou en bas ?",
        answer:
          "Un radiateur froid en haut contient de l'air : une purge suffit souvent. Un radiateur froid en bas, ou tiède par endroits, est encrassé par des boues : il faut alors un désembouage, parfois un remplacement. Un radiateur entièrement froid peut aussi venir d'un robinet ou d'un circulateur.",
        paras: [
          "La purge se fait radiateur ouvert, chauffage allumé, avec la clé adaptée, jusqu'à ce que l'eau sorte sans bulles. Pensez ensuite à vérifier la pression de la chaudière, qui baisse après une purge et se remet à niveau.",
          "Quand plusieurs radiateurs chauffent mal ou que l'eau sort noire à la purge, le circuit est encrassé. Un chauffagiste peut alors rincer l'installation, contrôler les robinets et conseiller de remplacer les appareils trop anciens.",
        ],
        list: [
          "Purge et remise en pression d'un circuit de chauffage",
          "Pose de robinets thermostatiques sur les radiateurs",
          "Remplacement d'un radiateur ou d'un robinet défectueux",
          "Recherche de la cause d'un radiateur froid d'un côté",
        ],
      },
      {
        h2: "À combien de degrés faut-il régler son chauffage ?",
        answer:
          "On recommande généralement 19 °C dans les pièces de vie et 16 à 17 °C dans les chambres. Chaque degré de moins réduit la consommation d'énergie d'environ 7 %, selon l'ADEME. Un robinet thermostatique permet de régler pièce par pièce sans toucher à la chaudière.",
        paras: [
          "Le confort ne dépend pas que de la consigne : un radiateur propre, bien purgé et bien réglé chauffe plus vite et plus régulièrement qu'un radiateur encrassé poussé au maximum. C'est tout l'intérêt d'un réglage fait par un chauffagiste plutôt qu'un thermostat tourné au hasard.",
        ],
      },
      {
        h2: "Quand faut-il faire entretenir sa chaudière ?",
        answer:
          "Une fois par an. L'entretien annuel est obligatoire pour les chaudières de 4 à 400 kilowatts, au gaz comme au fioul. Il se fait de préférence avant l'automne, par un professionnel qui remet une attestation, utile pour l'assurance et en cas de vente ou de location.",
        paras: [
          "L'entretien comprend le nettoyage du corps de chauffe, le contrôle de la combustion et de l'évacuation des fumées, la vérification des organes de sécurité et de la pression. Il prévient les pannes de plein hiver et limite les risques liés au monoxyde de carbone.",
        ],
        after: [
          "En cas de panne, relevez le code affiché par la chaudière, vérifiez la pression et l'arrivée de gaz, puis appelez le chauffagiste en lui donnant la marque et l'âge de l'appareil : cela l'aide à venir avec les bonnes pièces.",
        ],
      },
      {
        h2: "Chauffage individuel ou collectif : qui s'en occupe ?",
        answer:
          "Dans un logement à chaudière individuelle, c'est l'occupant qui fait entretenir l'appareil et les radiateurs. Dans un immeuble à chauffage collectif, la chaudière et les colonnes relèvent de la copropriété, et c'est le syndic qui commande les travaux ; seuls les radiateurs d'un logement dépendent de son occupant.",
        paras: [
          "Beaucoup d'immeubles du 20e ont un chauffage individuel au gaz ou à l'électricité, d'autres un chauffage collectif. Si vous ne savez pas lequel vous concerne, regardez si vous avez une chaudière ou un compteur de chauffage dans votre logement, ou demandez au syndic.",
        ],
      },
    ],
    faq: [
      {
        q: "Un chauffagiste peut-il aussi réparer une fuite ?",
        a: "Oui. DBP est à la fois plombier et chauffagiste : une fuite sur un radiateur, un robinet ou le circuit de chauffage se traite dans la même intervention, sans changer d'interlocuteur.",
      },
      {
        q: "Mon chauffage est en panne en plein hiver : que faire ?",
        a: "Vérifiez la pression, l'arrivée de gaz ou d'électricité et le thermostat, notez le code d'erreur de la chaudière, puis appelez le 01 42 45 91 35 en décrivant la panne. Aucun délai n'est promis avant d'avoir compris la cause.",
      },
      {
        q: "Peut-on remplacer un radiateur sans vider tout le circuit ?",
        a: "Souvent oui, si les radiateurs ont des robinets d'arrêt en bon état. Sinon le circuit est partiellement vidangé, puis rempli et purgé. Le chauffagiste le vérifie sur place avant de chiffrer.",
      },
      {
        q: "Travaillez-vous pour les syndics du 20e ?",
        a: "Oui. Indiquez l'adresse de l'immeuble, la nature du chauffage, collectif ou individuel, et le contact pour l'accès aux locaux techniques. Un devis est établi avant toute intervention sur les parties communes.",
      },
    ],
    ctaTitle: "Pour un logement chauffé, du premier radiateur à la chaudière.",
    ctaText: "Décrivez-nous l'installation, avec la marque de la chaudière si vous la connaissez.",
    related: [PATHS.plumbing, "/plombier-chauffagiste-paris-19", "/plombier-chauffagiste-bagnolet", "/plombier-chauffagiste-le-pre-saint-gervais"],
  },
];
