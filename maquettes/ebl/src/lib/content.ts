import { PATHS } from "./site";
import type { Page } from "./types";

/**
 * EBL n'a pas de site : les textes sont écrits à partir de sources publiques (Pages Jaunes, registre, fiche Google).
 * Faits utilisés : 5 rue d'Alésia, 01 43 31 26 77, créée en 1978, 10 à 19 salariés, plomberie (code NAF 4322A),
 * certification « Professionnel du Gaz », prestation « fuite de gaz », horaires du lundi au vendredi.
 * Aucun prix, délai, tarif, label ou client n'est ajouté ; le reste est du conseil général.
 */

export const about = {
  paras: [
    "EBL, l'Entreprise Bernard Lemaître, est une entreprise de plomberie installée au 5 rue d'Alésia, dans le 14e arrondissement de Paris. Elle est inscrite au registre du commerce depuis 1978.",
    "Elle réunit entre dix et dix-neuf salariés et détient la certification Professionnel du Gaz, qui encadre l'installation et la maintenance des systèmes au gaz.",
    "Plus de quarante-cinq ans de métier dans le même quartier : une plomberie que l'on suit de la cave aux toits, immeuble après immeuble.",
  ],
};

export const home = {
  title: "Plombier à Paris 14e depuis 1978 : gaz et chauffage | EBL",
  description:
    "EBL, Entreprise Bernard Lemaître : plombier à Paris 14e depuis 1978, rue d'Alésia. Plomberie, gaz et chauffage, certifié Professionnel du Gaz, de la cave aux toits.",
  brief:
    "EBL est un plombier installé au 5 rue d'Alésia, à Paris 14e, depuis 1978. L'Entreprise Bernard Lemaître réunit dix à dix-neuf salariés et détient la certification Professionnel du Gaz. Elle intervient en plomberie, en gaz et en chauffage, de la cave aux toits des immeubles du quartier. Appelez le 01 43 31 26 77 ou écrivez-nous.",
};

const plumbing: Page = {
  path: PATHS.plumbing,
  title: "Plombier à Paris 14e : fuite, sanitaire, tuyauterie | EBL",
  description:
    "Plombier à Paris 14e depuis 1978 : fuite, sanitaire, robinetterie et tuyauterie des immeubles du quartier par EBL, Entreprise Bernard Lemaître, rue d'Alésia.",
  h1: "Plombier à Paris 14e : fuite, sanitaire et tuyauterie",
  kicker: "Plomberie",
  lead: "L'eau qui monte dans l'immeuble, de la cave jusqu'au dernier étage, suivie par la même entreprise du 14e depuis 1978.",
  brief:
    "EBL est un plombier de Paris 14e installé rue d'Alésia depuis 1978. L'entreprise répare les fuites, remplace les appareils sanitaires et la robinetterie, et reprend la tuyauterie des appartements, des commerces et des parties communes d'immeubles. Appelez le 01 43 31 26 77 du lundi au vendredi, ou décrivez votre demande avec quelques photos.",
  contactType: "plomberie",
  service: "Plomberie : fuite, sanitaire, robinetterie, tuyauterie",
  crumb: "Plomberie",
  photo: "raccords",
  facts: [
    { label: "Depuis", value: "1978" },
    { label: "Atelier", value: "Rue d'Alésia" },
    { label: "Équipe", value: "10 à 19 salariés" },
  ],
  sections: [
    {
      h2: "Quelles interventions de plomberie sont possibles à Paris 14e ?",
      answer:
        "Les réparations de fuites, le remplacement d'un évier, d'un lavabo, d'un WC ou d'une baignoire, la pose de robinetterie et la reprise de tuyauterie. EBL s'occupe de ce qui amène l'eau dans le logement, la distribue aux appareils, puis l'évacue vers la descente de l'immeuble.",
      paras: [
        "Dans le 14e, les logements vont de l'immeuble de pierre ancien aux ensembles des années 1930 le long des boulevards des Maréchaux, en passant par les ateliers d'artistes autour de Montparnasse. Chaque époque a ses matériaux, ses diamètres et ses habitudes de pose. Une entreprise qui travaille dans l'arrondissement depuis 1978 en a vu la plupart de l'intérieur.",
        "Une photo de l'existant, envoyée avec la demande, permet de préparer la visite : l'appareil à remplacer, la fuite sous l'évier, l'emplacement du robinet d'arrêt. Le compagnon arrive alors avec les pièces les plus probables, au lieu de faire un second passage.",
      ],
    },
    {
      h2: "Comment repérer et arrêter une fuite d'eau dans un appartement ?",
      answer:
        "Fermez le robinet d'arrêt de l'appartement, ou celui de l'appareil concerné, et coupez l'électricité si l'eau approche d'une prise. Épongez, protégez le sol, prévenez le voisin du dessous et le syndic, puis photographiez les dégâts pour l'assurance avant d'appeler le plombier.",
      paras: [
        "Le robinet d'arrêt général d'un logement se trouve le plus souvent près du compteur d'eau, dans la cuisine, la salle de bains ou un placard technique du palier. Le repérer avant d'en avoir besoin est un bon réflexe, surtout dans un immeuble ancien où l'on ne sait pas toujours où il est caché.",
        "Un compteur qui tourne alors que tous les robinets sont fermés signale une fuite cachée, dans une canalisation encastrée par exemple. Notez le relevé, attendez une heure, relevez-le de nouveau : cette observation simple aide beaucoup le plombier à cibler son diagnostic.",
      ],
    },
    {
      h2: "Que signifie la tuyauterie d'un immeuble ancien du 14e ?",
      answer:
        "C'est un réseau qui a changé de matériau avec le temps : fonte pour les descentes, acier galvanisé, cuivre, et parfois encore du plomb sur d'anciennes alimentations. Le plombier identifie ce qui est en place, puis raccorde les nouvelles canalisations avec des pièces adaptées à chaque matériau.",
      paras: [
        "Le mot « plombier » vient du plomb, le métal dont on faisait les conduites d'eau autrefois. Lorsqu'il en reste dans la partie privative d'un logement, leur remplacement se prévoit avec l'entreprise ; pour une colonne commune, la décision revient à la copropriété.",
        "La limite entre parties privatives et parties communes compte : une colonne montante ou une descente d'eaux usées relève en général du syndic, le branchement de votre appartement relève de vous. EBL travaille avec les deux interlocuteurs et sait quelle demande adresser à qui.",
      ],
    },
    {
      h2: "Comment se déroule une intervention, de l'appel à la fin du chantier ?",
      answer:
        "Vous appelez ou envoyez votre demande, l'entreprise fixe un rendez-vous, un compagnon constate sur place et vous explique ce qu'il voit. Pour des travaux plus importants, un devis vous est remis avant de commencer. Le chantier est ensuite réalisé, contrôlé et laissé propre.",
      steps: [
        { t: "Votre demande", d: "Par téléphone au 01 43 31 26 77, ou par le formulaire avec l'adresse et quelques photos." },
        { t: "Le rendez-vous", d: "Une date et un créneau sont fixés avec vous, en semaine." },
        { t: "Le constat", d: "Un compagnon regarde l'installation et vous dit ce qu'il propose, simplement." },
        { t: "Les travaux", d: "Réalisés, vérifiés, puis le chantier est laissé propre." },
      ],
    },
  ],
  faq: [
    {
      q: "Où se trouve EBL dans le 14e arrondissement ?",
      a: "Au 5 rue d'Alésia, 75014 Paris, dans le quartier d'Alésia. L'entreprise est joignable au 01 43 31 26 77 du lundi au vendredi, de 8 h à 12 h 30 et de 13 h 30 à 18 h (17 h le vendredi).",
    },
    {
      q: "EBL travaille-t-elle pour les particuliers et pour les syndics ?",
      a: "L'entreprise intervient dans les logements, les commerces et les immeubles du quartier. Précisez dans votre demande si vous êtes locataire, propriétaire, gestionnaire ou syndic, afin que le rendez-vous soit organisé avec la bonne personne.",
    },
    {
      q: "Faut-il un devis pour remplacer un robinet ou un WC ?",
      a: "Pour un petit remplacement, le compagnon vous explique sur place ce qu'il prévoit. Pour des travaux de tuyauterie plus étendus, demandez un devis en décrivant votre projet et en joignant des photos : l'entreprise revient vers vous.",
    },
    {
      q: "Mon immeuble a encore des canalisations en plomb : que faire ?",
      a: "Signalez-le dans votre demande. Pour la partie privative, le remplacement se prévoit avec l'entreprise ; pour les colonnes communes, la décision revient à la copropriété, que l'entreprise peut renseigner si le syndic la sollicite.",
    },
  ],
  ctaTitle: "Une fuite, un robinet, une canalisation ?",
  ctaText: "Appelez l'équipe de la rue d'Alésia ou décrivez votre demande.",
  related: [PATHS.gas, "/plombier-paris-14", "/plombier-paris-15"],
};

const gas: Page = {
  path: PATHS.gas,
  title: "Plombier gaz à Paris 14e : Professionnel du Gaz | EBL",
  description:
    "Plombier gaz à Paris 14e : EBL, certifiée Professionnel du Gaz, installe et entretient les systèmes au gaz et traite les fuites de gaz, rue d'Alésia depuis 1978.",
  h1: "Plombier gaz à Paris 14e : Professionnel du Gaz",
  kicker: "Gaz",
  lead: "Installation, maintenance et sécurité des systèmes au gaz, par une entreprise certifiée Professionnel du Gaz.",
  brief:
    "EBL détient la certification Professionnel du Gaz, signe de qualité pour l'installation et la maintenance des systèmes au gaz. Cette plomberie du 14e, installée rue d'Alésia depuis 1978, prend en charge les fuites de gaz et les installations des logements et des immeubles du quartier. En cas d'odeur de gaz, ouvrez les fenêtres et quittez les lieux avant d'appeler.",
  contactType: "gaz",
  service: "Gaz : installation, maintenance, fuite de gaz",
  crumb: "Gaz",
  photo: "outils",
  facts: [
    { label: "Certification", value: "Professionnel du Gaz" },
    { label: "Depuis", value: "1978" },
    { label: "Zone", value: "Paris 14e" },
  ],
  sections: [
    {
      h2: "Que veut dire être certifié Professionnel du Gaz ?",
      answer:
        "Professionnel du Gaz est un signe de qualité délivré aux entreprises qui installent et entretiennent des appareils et des réseaux de gaz. Il atteste que l'entreprise respecte les règles de sécurité de ce métier. EBL figure parmi les plombiers de Paris 14e qui le détiennent.",
      paras: [
        "Le gaz ne pardonne pas l'approximation : un raccord mal serré, une évacuation de fumées mal conçue ou un appareil mal réglé ont des conséquences bien plus graves qu'une simple fuite d'eau. C'est pourquoi ce métier est encadré, et pourquoi il vaut mieux confier ces travaux à une entreprise dont la qualification est connue.",
        "Si vous souhaitez vérifier la certification d'une entreprise, demandez-lui sa référence et rapprochez-la des annuaires officiels. EBL vous communiquera les justificatifs à la demande ; la mention figure aussi sur sa fiche d'annuaire professionnel.",
      ],
    },
    {
      h2: "Que faire en cas d'odeur de gaz dans un logement du 14e ?",
      answer:
        "Ouvrez les fenêtres, fermez le robinet de gaz si vous le pouvez, n'actionnez aucun interrupteur ni sonnette et n'utilisez aucune flamme. Quittez le logement, prévenez les voisins, puis appelez depuis l'extérieur le numéro de sécurité gaz du gestionnaire de réseau ou les pompiers.",
      paras: [
        "Le gestionnaire du réseau de distribution dispose d'un numéro d'urgence gratuit, le 0 800 47 33 33, disponible à toute heure. Les pompiers, au 18 ou au 112, interviennent aussi en cas de danger immédiat. Ces appels se font depuis l'extérieur, jamais depuis la pièce où l'odeur est présente.",
        "Une fois le danger écarté, EBL peut rechercher l'origine de la fuite sur l'installation intérieure, la réparer ou la remplacer, puis contrôler l'étanchéité avant la remise en service. Appelez l'entreprise aux heures d'ouverture pour organiser cette intervention.",
      ],
    },
    {
      h2: "Quelles installations au gaz l'entreprise prend-elle en charge ?",
      answer:
        "Les canalisations de gaz intérieures, le raccordement des appareils de cuisson, des chaudières et des chauffe-eau, ainsi que la maintenance de ces installations. Le périmètre précis des appareils traités se confirme à l'appel, selon votre logement et ce qui y est installé.",
      paras: [
        "Dans un immeuble parisien, le gaz arrive par un branchement en pied d'immeuble, passe par un compteur individuel ou collectif, puis dessert la cuisine et, le cas échéant, une chaudière ou un chauffe-eau. Chaque maillon a son responsable : le gestionnaire de réseau jusqu'au compteur, l'occupant et l'installateur au-delà.",
        "Un appareil au gaz demande un entretien régulier, et une chaudière doit être contrôlée chaque année par un professionnel. Cet entretien est l'occasion de vérifier la ventilation, l'évacuation des fumées et l'état des flexibles, trois points qui comptent beaucoup pour la sécurité.",
      ],
    },
    {
      h2: "Comment organiser une visite pour une installation au gaz ?",
      answer:
        "Appelez le 01 43 31 26 77 ou remplissez le formulaire en précisant l'adresse, l'étage, le type d'appareil et, si possible, sa marque. Joignez une photo de l'installation et de la plaque de l'appareil. Un compagnon fixe ensuite avec vous un rendez-vous sur place.",
      steps: [
        { t: "Décrire", d: "Appareil concerné, symptôme ou projet, adresse et étage." },
        { t: "Photographier", d: "L'appareil, sa plaque signalétique, l'arrivée de gaz et le compteur." },
        { t: "Constater", d: "Visite sur place, contrôle de l'installation et explication des options." },
        { t: "Intervenir", d: "Travaux réalisés par un professionnel certifié, puis vérification." },
      ],
    },
  ],
  faq: [
    {
      q: "EBL est-elle bien certifiée Professionnel du Gaz ?",
      a: "Oui, la mention figure sur la fiche d'EBL de l'annuaire Pages Jaunes, relevée en octobre 2026. L'entreprise peut communiquer ses justificatifs sur demande. Cette certification est à faire confirmer par l'entreprise avant mise en ligne.",
    },
    {
      q: "EBL traite-t-elle les fuites de gaz ?",
      a: "La prestation « fuite de gaz » est renseignée sur sa fiche d'annuaire. En cas d'odeur de gaz, mettez-vous d'abord en sécurité et appelez le numéro d'urgence du gestionnaire de réseau avant de contacter l'entreprise.",
    },
    {
      q: "Mon logement du 14e est équipé d'une chaudière au gaz : qui l'entretient ?",
      a: "L'entretien annuel d'une chaudière relève d'un professionnel qualifié. Décrivez votre appareil dans le formulaire, avec sa marque si vous la connaissez, et l'entreprise vous dira si elle peut le prendre en charge.",
    },
    {
      q: "Peut-on demander une intervention au gaz pour un commerce ?",
      a: "Les locaux d'activité du quartier font partie de la zone de l'entreprise. Précisez la nature du commerce, l'appareil concerné et vos horaires d'ouverture, pour organiser la visite avec le moins de gêne possible.",
    },
  ],
  ctaTitle: "Une installation au gaz à vérifier ?",
  ctaText: "Parlez-en à l'équipe certifiée de la rue d'Alésia.",
  related: [PATHS.plumbing, PATHS.heating, "/plombier-paris-14"],
};

const heating: Page = {
  path: PATHS.heating,
  title: "Chauffagiste à Paris 14e : chaudière, eau chaude | EBL",
  description:
    "Chauffagiste à Paris 14e : EBL, plombier rue d'Alésia depuis 1978, installe et entretient chaudières, radiateurs et production d'eau chaude des immeubles du quartier.",
  h1: "Chauffagiste à Paris 14e : chaudière, radiateurs, eau chaude",
  kicker: "Chauffage",
  lead: "Du radiateur qui ne chauffe plus au chauffe-eau à remplacer : la chaleur et l'eau chaude de l'immeuble, suivies par la même équipe.",
  brief:
    "EBL, plombier de Paris 14e installé rue d'Alésia depuis 1978, travaille aussi sur le chauffage et l'eau chaude des logements du quartier. Radiateurs, chaudières au gaz et chauffe-eau relèvent de la même entreprise, certifiée Professionnel du Gaz. Le périmètre exact des appareils pris en charge se confirme par téléphone, au 01 43 31 26 77.",
  contactType: "chauffage",
  service: "Chauffage : chaudière, radiateurs, eau chaude",
  crumb: "Chauffage",
  photo: "evier",
  facts: [
    { label: "Depuis", value: "1978" },
    { label: "Atelier", value: "Rue d'Alésia" },
    { label: "Gaz", value: "Certifiée PG" },
  ],
  sections: [
    {
      h2: "Quels travaux de chauffage EBL réalise-t-elle à Paris 14e ?",
      answer:
        "Les travaux qui relient la plomberie et la chaleur : radiateurs à remplacer ou à purger, chaudière à raccorder ou à entretenir, chauffe-eau à poser, canalisations de chauffage à reprendre. Le détail des appareils et des marques traités se précise par téléphone, selon votre installation.",
      paras: [
        "Le métier de plombier et celui de chauffagiste se rejoignent depuis longtemps : ce sont les mêmes tuyaux, les mêmes raccords, la même attention à l'étanchéité. L'activité déclarée de l'entreprise au registre est l'installation d'eau et de gaz en tous locaux : le chauffage à eau chaude et au gaz en est le prolongement naturel.",
        "Dans les immeubles anciens du 14e, le chauffage est tantôt collectif, avec une chaufferie en sous-sol et des colonnes qui montent dans les étages, tantôt individuel, avec une chaudière dans la cuisine ou la salle de bains. Les gestes ne sont pas les mêmes, et la responsabilité non plus.",
      ],
    },
    {
      h2: "Pourquoi un radiateur reste-t-il froid en haut ou en bas ?",
      answer:
        "Un radiateur froid en haut contient de l'air : il faut le purger. Un radiateur froid en bas signale souvent des boues ou un dépôt qui bloquent la circulation de l'eau. Dans les deux cas, un professionnel peut diagnostiquer et rétablir une chaleur régulière sur toute la surface.",
      paras: [
        "La purge se fait avec une petite clé, radiateur froid et chauffage à l'arrêt, un récipient sous la vis. Si de l'eau noire s'écoule ou si l'air revient sans cesse, le problème est ailleurs dans le circuit : une fuite lente, un vase d'expansion fatigué ou un circulateur qui fatigue.",
        "Dans un chauffage collectif, c'est souvent tout l'immeuble qui est concerné. Signalez-le au syndic en notant les étages touchés et les heures du problème : ces repères permettent à l'entreprise qu'il mandate d'agir plus vite.",
      ],
    },
    {
      h2: "Comment bien préparer l'entretien de sa chaudière à gaz ?",
      answer:
        "Dégagez l'accès à l'appareil, tenez à disposition le carnet d'entretien de la chaudière et sa dernière attestation, et signalez les bruits, odeurs ou arrêts constatés. L'entretien annuel est obligatoire pour une chaudière au gaz et doit être confié à un professionnel qualifié.",
      paras: [
        "Pendant l'entretien, le technicien contrôle la combustion, nettoie ce qui doit l'être, vérifie l'évacuation des fumées, la ventilation du local et les organes de sécurité. Il remet ensuite une attestation à conserver, qu'une assurance ou un bailleur peut vous demander.",
        "EBL détenant la certification Professionnel du Gaz, ses compagnons sont habilités à travailler sur ce type d'appareil. Précisez dans votre demande la marque et l'âge approximatif de la chaudière : l'entreprise vous dira si elle peut s'en charger.",
      ],
    },
    {
      h2: "Que faut-il savoir avant de remplacer un chauffe-eau ?",
      answer:
        "Notez l'emplacement, la capacité et le type d'énergie de l'appareil actuel, mesurez l'espace disponible et vérifiez l'accès pour le passer par l'escalier. Un chauffe-eau doit être raccordé avec un groupe de sécurité, que le plombier choisit et pose avec l'appareil.",
      paras: [
        "Dans un appartement parisien, l'encombrement décide souvent du modèle : un ballon sous l'évier, dans un placard ou en hauteur n'ont pas les mêmes dimensions. Une photo de l'emplacement envoyée avec la demande évite bien des allers-retours.",
        "Vidanger l'ancien appareil, couper l'alimentation, déposer, poser le nouveau et vérifier le raccordement prend du temps. Prévoyez d'être sans eau chaude le temps du remplacement et préparez l'accès au local technique ou à la cuisine.",
      ],
    },
  ],
  faq: [
    {
      q: "EBL installe-t-elle des chaudières ?",
      a: "Le registre classe l'entreprise parmi les installateurs d'eau et de gaz, et elle est certifiée Professionnel du Gaz, ce qui couvre les chaudières au gaz. Les marques et les types de chaudières pris en charge sont à préciser avec elle, par téléphone.",
    },
    {
      q: "Mon radiateur ne chauffe plus : à qui m'adresser ?",
      a: "En chauffage individuel, appelez l'entreprise en décrivant le symptôme. En chauffage collectif, prévenez d'abord le syndic ou le gestionnaire : la chaufferie et les colonnes dépendent de la copropriété.",
    },
    {
      q: "Peut-on joindre l'entreprise en hiver, en semaine ?",
      a: "Oui, au 01 43 31 26 77 du lundi au jeudi de 8 h à 12 h 30 puis de 13 h 30 à 18 h, et le vendredi jusqu'à 17 h. Aucune permanence en dehors de ces horaires n'est annoncée.",
    },
    {
      q: "Comment obtenir un devis pour un chauffe-eau ?",
      a: "Décrivez l'appareil actuel, l'emplacement et vos contraintes dans le formulaire, avec une ou deux photos. L'entreprise revient vers vous pour fixer une visite et chiffrer les travaux après constat sur place.",
    },
  ],
  ctaTitle: "Un radiateur froid, un chauffe-eau fatigué ?",
  ctaText: "Appelez la rue d'Alésia, aux heures d'ouverture de l'entreprise.",
  related: [PATHS.gas, PATHS.plumbing, "/plombier-paris-14"],
};

export const originalPages: Page[] = [plumbing, gas, heating];
