import { PATHS } from "./site";
import type { Page } from "./types";

/**
 * Textes de la maquette SMAP. Le site actuel (smap-renovation.fr, Wix) n'a pas pu être lu depuis l'environnement de travail :
 * les textes ci-dessous sont écrits à partir des seuls faits connus (nom « Maintenance, Aménagement, Plomberie », Paris 12e,
 * création en 2007) ; les textes réels du site sont relevés au build (journal de build, original.generated.json) et
 * repris sur l'accueil s'ils existent. Aucun prix, délai, chiffre ou label n'est ajouté.
 */

export const about = {
  paras: [
    "SMAP, pour Maintenance, Aménagement, Plomberie, est une entreprise du bâtiment installée à Paris 12e et créée en 2007.",
    "Son nom dit ses trois activités : la plomberie, l'aménagement et la rénovation des logements et des locaux, et la maintenance des installations.",
    "Elle travaille pour des particuliers, des professionnels et des copropriétés, dans le 12e arrondissement et dans les quartiers et communes voisins.",
  ],
  description:
    "SMAP réunit trois activités sous un même nom : la plomberie, l'aménagement et la rénovation, et la maintenance. Une seule équipe suit votre projet, du relevé au dernier raccord.",
};

export const home = {
  title: "Plombier Paris 12e : plomberie et rénovation | SMAP",
  description:
    "SMAP, plomberie, aménagement et maintenance à Paris 12e depuis 2007 : une entreprise du bâtiment pour particuliers, professionnels et copropriétés du quartier.",
  brief:
    "SMAP est une entreprise de plomberie, d'aménagement et de maintenance installée à Paris 12e, créée en 2007. Son équipe intervient chez les particuliers, dans les locaux professionnels et dans les copropriétés du quartier : réparation, installation, rénovation de salle de bains ou d'appartement, entretien. Prenez rendez-vous par téléphone ou par le formulaire.",
};

const plumbing: Page = {
  path: PATHS.plumbing,
  title: "Plombier à Paris 12e : fuite, sanitaire, tuyauterie | SMAP",
  description:
    "Plombier à Paris 12e : SMAP intervient pour les fuites, le sanitaire, la robinetterie et les canalisations, chez les particuliers et dans les copropriétés.",
  h1: "Plombier à Paris 12e : fuite, sanitaire et canalisations",
  kicker: "Plomberie",
  lead: "De la fuite sous l'évier à l'installation complète d'une salle d'eau, par l'équipe de SMAP, installée dans le 12e arrondissement.",
  brief:
    "Plombier à Paris 12e, SMAP intervient sur les fuites, le sanitaire, la robinetterie et les canalisations des appartements, des commerces et des immeubles. L'équipe répare ce qui fuit, remplace ce qui est usé et installe les appareils neufs. Décrivez votre demande par téléphone ou par le formulaire, photos à l'appui.",
  contactType: "plomberie",
  service: "Plomberie : fuites, sanitaire, robinetterie, canalisations",
  crumb: "Plomberie",
  photo: "cuivre",
  photo2: "bains2",
  facts: [
    { label: "Depuis", value: "2007" },
    { label: "Atelier", value: "Paris 12e" },
    { label: "Pour", value: "Particuliers, copropriétés" },
  ],
  sections: [
    {
      h2: "Que comprend le service de plomberie de SMAP ?",
      answer:
        "Tout ce qui amène l'eau dans un logement, la distribue aux appareils et l'évacue : recherche et réparation de fuites, remplacement de robinetterie, de lavabos, d'éviers et de WC, reprise de canalisations, installation d'appareils sanitaires neufs, dans les logements comme dans les locaux professionnels.",
      listTitle: "Les interventions courantes",
      list: ["Recherche et réparation de fuites", "Sanitaire : lavabo, évier, WC, baignoire, douche", "Robinetterie et mitigeurs", "Canalisations d'alimentation et d'évacuation", "Raccordement des appareils ménagers"],
      paras: [
        "La liste exacte des prestations proposées est celle du site actuel de l'entreprise ; elle est à faire confirmer avant la mise en ligne.",
      ],
    },
    {
      h2: "Que faire en cas de fuite d'eau dans un appartement ?",
      answer:
        "Fermez le robinet d'arrêt de l'appartement, ou celui de l'appareil concerné. Coupez l'électricité si l'eau approche d'une prise. Épongez, protégez le sol, prévenez le voisin du dessous et le syndic, puis photographiez les dégâts : ces images serviront pour l'assurance. Appelez ensuite le plombier.",
      paras: [
        "Dans un immeuble parisien, une fuite traverse vite les planchers. Plus l'eau est coupée tôt, moins il y a de dégâts chez le voisin, et plus l'échange avec l'assurance est simple. Repérez dès aujourd'hui où se trouve votre robinet d'arrêt : on le cherche mal dans l'urgence.",
        "Le plombier localise l'origine : joint, flexible, raccord, canalisation encastrée. Quand la fuite vient d'une partie commune, il le signale et vous évite de payer une réparation qui revient à la copropriété.",
      ],
    },
    {
      h2: "Peut-on moderniser la plomberie d'un appartement ancien ?",
      answer:
        "Oui, par étapes ou en une fois. On remplace les canalisations vieillissantes, on remet aux normes les évacuations, on change les appareils usés. Le plan se prépare avec une visite : matériaux en place, accès aux colonnes, contraintes de l'immeuble. Le devis découle de ce relevé.",
      paras: [
        "Les immeubles du 12e mêlent plusieurs époques : immeubles de rapport du XIXe siècle autour de l'avenue Daumesnil, ensembles de brique de l'entre-deux-guerres, constructions plus récentes vers Bercy. Chacune a ses matériaux et ses passages de colonnes.",
        "Avant de choisir de nouveaux appareils, mesurez l'espace disponible et notez l'emplacement des arrivées d'eau. Quelques photos de l'existant, jointes à votre demande, aident à préparer la visite.",
      ],
    },
    {
      h2: "Comment préparer la visite du plombier ?",
      answer:
        "Indiquez l'adresse exacte, l'étage et le code d'accès, décrivez le problème en une phrase et joignez deux ou trois photos : l'appareil, la fuite, la pièce à équiper. Repérez le robinet d'arrêt et prévenez le gardien ou le syndic si l'intervention touche une partie commune.",
      paras: [
        "Pour un local professionnel, précisez vos horaires d'ouverture : l'intervention peut être organisée pour gêner le moins possible votre activité.",
      ],
    },
  ],
  faq: [
    { q: "SMAP intervient-elle chez les particuliers comme chez les professionnels ?", a: "Oui. L'entreprise travaille pour des particuliers, pour des professionnels et pour des copropriétés. Précisez dans votre demande s'il s'agit d'un logement, d'un local d'activité ou des parties communes d'un immeuble." },
    { q: "Comment obtenir un devis de plomberie ?", a: "Par le formulaire de contact ou par téléphone au 01 42 49 20 14. Décrivez le besoin, indiquez l'adresse et joignez des photos : l'équipe vous recontacte pour une visite si elle est nécessaire au chiffrage." },
    { q: "Où se trouve l'entreprise ?", a: "SMAP est installée à Paris 12e (75012). L'adresse exacte est communiquée sur demande ; pour toute question, appelez le 01 42 49 20 14 ou écrivez à smap.gros@orange.fr." },
  ],
  ctaTitle: "Une fuite, un robinet, une salle d'eau ?",
  ctaText: "Organisez votre rendez-vous avec l'équipe de SMAP.",
  related: [PATHS.renovation, "/plombier-paris-12", "/plombier-paris-11"],
};

const renovation: Page = {
  path: PATHS.renovation,
  title: "Rénovation d'appartement à Paris 12e : salle de bains | SMAP",
  description:
    "Rénovation et aménagement à Paris 12e : SMAP conduit la plomberie, la salle de bains et l'aménagement de votre appartement, du relevé jusqu'à la livraison.",
  h1: "Rénovation et aménagement à Paris 12e : du plan au chantier",
  kicker: "Aménagement · Rénovation",
  lead: "Une salle de bains, une cuisine, un appartement entier : un seul interlocuteur suit le projet, du relevé des cotes jusqu'aux finitions.",
  brief:
    "SMAP réalise l'aménagement et la rénovation de logements et de locaux à Paris 12e. Le projet commence par un relevé sur place, se précise dans un plan et un devis, puis s'exécute avec la plomberie au cœur du chantier. Particuliers et copropriétés peuvent demander un rendez-vous par téléphone ou par le formulaire.",
  contactType: "renovation",
  service: "Aménagement et rénovation de logements et de locaux",
  crumb: "Rénovation",
  photo: "bains",
  photo2: "chantier",
  facts: [
    { label: "Depuis", value: "2007" },
    { label: "Atelier", value: "Paris 12e" },
    { label: "Projets", value: "Logements, locaux" },
  ],
  sections: [
    {
      h2: "Comment se déroule une rénovation avec SMAP ?",
      answer:
        "En trois temps : un relevé sur place pour mesurer et comprendre l'existant, un plan accompagné d'un devis pour décider, puis le chantier suivi par la même équipe. Cette continuité évite les pertes d'information entre celui qui mesure, celui qui chiffre et celui qui pose.",
      steps: [
        { t: "Le relevé", d: "Une visite pour mesurer les pièces, repérer les arrivées d'eau, les évacuations et les contraintes de l'immeuble." },
        { t: "Le plan et le devis", d: "Le projet est dessiné, les matériaux et les appareils choisis, puis chiffrés dans un devis détaillé." },
        { t: "Le chantier", d: "Les travaux sont exécutés pièce par pièce, la plomberie d'abord, les finitions ensuite." },
        { t: "La livraison", d: "Une dernière vérification de l'installation avant de vous remettre la pièce terminée." },
      ],
      paras: ["Cette organisation en étapes est décrite à titre général ; les modalités exactes de l'entreprise sont à faire confirmer."],
    },
    {
      h2: "Pourquoi la plomberie est-elle au cœur d'une rénovation ?",
      answer:
        "Parce qu'elle décide de l'agencement : l'emplacement des arrivées et des évacuations limite ce qui est possible, et une erreur se corrige difficilement une fois les murs refermés. Une entreprise qui maîtrise la plomberie conçoit l'aménagement en connaissant ces contraintes dès le départ.",
      paras: [
        "Déplacer une douche, remplacer une baignoire par un receveur extra-plat ou installer un meuble vasque suspendu suppose de reprendre les réseaux d'eau. La pente d'une évacuation, le diamètre d'un tuyau, l'accès à une vanne se décident avant la pose du carrelage.",
        "C'est l'intérêt d'avoir la plomberie dans le même nom que l'aménagement : le plombier est présent dès le plan, pas appelé en fin de chantier pour raccorder ce qui a été décidé sans lui.",
      ],
    },
    {
      h2: "Que prévoir pour une rénovation en copropriété à Paris ?",
      answer:
        "Vérifiez le règlement de copropriété, prévenez le syndic et les voisins, et renseignez-vous sur les horaires de travaux et l'accès des matériaux. Si le chantier touche une colonne, un mur porteur ou la façade, une autorisation de l'assemblée générale peut être nécessaire.",
      paras: [
        "Un appartement parisien impose des contraintes pratiques : escalier étroit, absence d'ascenseur parfois, stockage des gravats, protection des parties communes. Elles se règlent en amont, lors de la visite, plutôt qu'en plein chantier.",
        "L'entreprise travaille aussi avec des copropriétés : elle connaît le dialogue avec un syndic et la différence entre travaux privatifs et travaux sur les parties communes.",
      ],
    },
    {
      h2: "Que peut-on aménager en plus de la salle de bains ?",
      answer:
        "L'aménagement couvre les pièces d'eau et au-delà : cuisine, buanderie, cloisonnement, agencement d'un local professionnel. La liste précise des travaux proposés est celle de l'entreprise ; décrivez votre projet et l'équipe vous dit ce qu'elle réalise elle-même et ce qu'elle coordonne.",
      paras: [
        "Plus le projet est précis, plus le devis l'est aussi. Un croquis à main levée, des photos de l'existant et une liste d'envies dans l'ordre de priorité suffisent pour une première conversation.",
      ],
    },
  ],
  faq: [
    { q: "Peut-on faire rénover une seule pièce ?", a: "Oui. Une salle de bains, une cuisine ou un WC peuvent être rénovés seuls. Décrivez la pièce, joignez des photos et indiquez ce que vous souhaitez changer : l'équipe propose une visite pour établir le devis." },
    { q: "SMAP s'occupe-t-elle de rénover les locaux professionnels ?", a: "L'entreprise travaille pour des particuliers, des professionnels et des copropriétés. Pour un local d'activité, précisez l'usage des lieux et vos horaires pour organiser l'intervention." },
    { q: "Comment demander un rendez-vous pour un projet ?", a: "Par le formulaire de contact en choisissant « Aménagement et rénovation », ou par téléphone au 01 42 49 20 14. Indiquez l'adresse du bien et joignez quelques photos." },
  ],
  ctaTitle: "Un projet à dessiner puis à construire ?",
  ctaText: "Parlez-en à l'équipe de SMAP, plan en main.",
  related: [PATHS.plumbing, "/renovation-appartement-paris-12", PATHS.maintenance],
};

const maintenance: Page = {
  path: PATHS.maintenance,
  title: "Maintenance d'immeuble et de local à Paris 12e | SMAP",
  description:
    "Maintenance à Paris 12e : SMAP entretient les installations de plomberie des immeubles, des commerces et des logements pour éviter pannes et fuites.",
  h1: "Maintenance de plomberie à Paris 12e : immeubles et locaux",
  kicker: "Maintenance",
  lead: "Entretenir, vérifier, réparer avant la panne : la maintenance garde les installations d'eau en bon état, sans mauvaise surprise.",
  brief:
    "SMAP assure la maintenance des installations de plomberie à Paris 12e : logements, commerces, bureaux et parties communes de copropriétés. L'entretien régulier, la vérification des organes de coupure et la réparation rapide des petits défauts évitent les fuites et les arrêts d'activité. Parlez-en à l'équipe pour définir ce qu'il faut surveiller.",
  contactType: "maintenance",
  service: "Maintenance des installations de plomberie",
  crumb: "Maintenance",
  photo: "renovation",
  photo2: "facade",
  facts: [
    { label: "Depuis", value: "2007" },
    { label: "Atelier", value: "Paris 12e" },
    { label: "Pour", value: "Immeubles, locaux" },
  ],
  sections: [
    {
      h2: "À quoi sert la maintenance de plomberie ?",
      answer:
        "À repérer les défauts avant qu'ils ne coûtent cher : un joint qui suinte, un robinet d'arrêt grippé, une évacuation qui ralentit. Un contrôle régulier réduit les fuites, les dégâts des eaux chez les voisins et les interruptions d'activité dans un commerce ou un bureau.",
      paras: [
        "Une installation d'eau vieillit en silence. Les pièces d'usure sont connues : joints, flexibles, mécanismes de chasse, vannes. Les remplacer quand ils faiblissent est bien moins pénible que de réparer un plafond mouillé.",
      ],
    },
    {
      h2: "Que surveille-t-on dans un immeuble ou un local ?",
      answer:
        "Les organes de coupure, les flexibles et raccords visibles, les évacuations, les appareils sanitaires et la pression du réseau. Dans une copropriété, on regarde aussi les parties communes : locaux techniques, caves, pieds de colonnes. Les points de contrôle sont définis avec vous selon le lieu.",
      list: ["Robinets d'arrêt et vannes", "Flexibles, joints et raccords", "Évacuations et siphons", "Appareils sanitaires", "Parties communes : caves, locaux techniques"],
      paras: ["Le contenu exact d'un contrat ou d'une visite de maintenance se définit avec l'entreprise, selon le bâtiment et ses usages."],
    },
    {
      h2: "Qui peut demander une maintenance à SMAP ?",
      answer:
        "Les particuliers pour leur logement, les professionnels pour leurs locaux et les copropriétés, par l'intermédiaire du syndic ou du conseil syndical, pour les parties communes. Dans chaque cas, une visite précise ce qui est à surveiller, à réparer ou à remplacer.",
      paras: [
        "Pour un commerce ou un restaurant du quartier, la continuité d'activité compte : l'intervention se planifie aux heures creuses. Pour un immeuble, l'accès aux caves et aux locaux techniques se coordonne avec le gardien ou le syndic.",
      ],
    },
    {
      h2: "Comment gérer l'entretien d'une installation vieillissante ?",
      answer:
        "En dressant l'état des lieux, en classant les points à traiter par urgence et en planifiant les remplacements sur plusieurs mois. Cette approche étale la dépense et évite d'attendre la panne. Elle se prépare lors d'une première visite, photos et historique des incidents à l'appui.",
      paras: [
        "Notez les incidents passés : date, lieu, cause supposée. Ce petit carnet aide l'équipe à repérer les points faibles récurrents et à proposer des remplacements ciblés plutôt que des réparations répétées.",
      ],
    },
  ],
  faq: [
    { q: "La maintenance se fait-elle sur contrat ?", a: "Les modalités (visite ponctuelle ou suivi régulier) sont à définir avec l'entreprise. Appelez le 01 42 49 20 14 en décrivant votre bâtiment, ou utilisez le formulaire en choisissant « Maintenance »." },
    { q: "SMAP peut-elle intervenir dans les parties communes d'un immeuble ?", a: "Oui, à la demande du syndic ou du gestionnaire. Indiquez l'adresse de l'immeuble, la partie concernée et la personne à contacter sur place pour l'accès." },
    { q: "Peut-on demander une maintenance pour un commerce ?", a: "Oui. Précisez vos horaires d'ouverture et l'usage des lieux : l'équipe organise l'intervention au moment qui perturbe le moins votre activité." },
  ],
  ctaTitle: "Prévenir plutôt que réparer ?",
  ctaText: "Organisez une visite d'entretien avec SMAP.",
  related: [PATHS.plumbing, "/plombier-paris-12", PATHS.renovation],
};

export const originalPages: Page[] = [plumbing, renovation, maintenance];
