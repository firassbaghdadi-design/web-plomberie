import { PATHS, type Faq } from "./site";
import type { Page } from "./types";

/**
 * Textes de la maquette. Tout ce qui vient du site actuel (monteil-info.fr) est repris : métiers, techniques de recherche
 * de fuite, chantiers, qualifications, engagements, forfait de déplacement, FAQ. Le reste est rédigé sans fait nouveau :
 * aucun délai, prix ou chiffre qui ne figure pas sur le site actuel. À faire relire et confirmer par l'entreprise.
 */

export const home = {
  title: "Plombier chauffagiste Paris 11e depuis 1964 | Monteil",
  description:
    "Plombier, chauffagiste et couvreur à Paris 11e depuis 1964, rue Saint-Ambroise : fuite, chaudière, salle de bains, copropriétés. Appelez le 01 47 00 58 33.",
  brief:
    "Monteil & Cie est une maison de plomberie du 11e arrondissement, installée rue Saint-Ambroise. Depuis 1964, une quarantaine de compagnons interviennent à Paris et en Île-de-France : recherche de fuite, chauffage, rénovation de salle de bains, couverture, travaux sur corde, pour les particuliers comme pour les syndics.",
  faq: [
    {
      q: "Où se trouve Monteil & Cie ?",
      a: "Au 35, rue Saint-Ambroise, dans le 11e arrondissement de Paris, près de l'église Saint-Ambroise. La maison intervient dans tous les arrondissements et en proche Île-de-France, avec un ancrage historique dans le quartier de l'Oberkampf.",
    },
    {
      q: "Quels sont les métiers de la maison ?",
      a: "La plomberie et la recherche de fuite, le chauffage et l'entretien des chaudières gaz, la rénovation de salle de bains, la couverture et la zinguerie, les travaux sur corde et en présence d'amiante, l'audit et le repérage des réseaux.",
    },
    {
      q: "Combien coûte un déplacement ?",
      a: "Pour un particulier, le site actuel indique un forfait de déplacement de 70 € TTC, déduit du devis en cas d'acceptation. Pour les copropriétés et gestionnaires, le déplacement est inclus dans le contrat de partenariat.",
    },
    {
      q: "Intervenez-vous la nuit et le week-end ?",
      a: "L'astreinte de nuit et de week-end, 24 h sur 24 et 7 jours sur 7, est réservée aux syndics et copropriétés sous contrat. Le service client répond de 8 h à 19 h aux autres demandes.",
    },
    {
      q: "Comment demander un devis ?",
      a: "Par le formulaire de la page contact, avec l'adresse du lieu et quelques photos, ou par téléphone au 01 47 00 58 33. Pour les travaux de rénovation et les projets planifiés, le devis est établi après une visite.",
    },
  ] as Faq[],
};

/** Les métiers présentés sur l'accueil, repris des six situations du site actuel. */
export const trades = [
  { n: "01", title: "Fuite et plomberie", href: PATHS.leak, text: "Recherche et traitement de fuite sans destruction inutile : thermographie, écoute électro-acoustique, gaz traceur, inspection télévisuelle." },
  { n: "02", title: "Chauffage", href: PATHS.heating, text: "Dépannage de chaudière gaz, entretien annuel réglementaire, installation de chaudière neuve, réseaux de chauffage central." },
  { n: "03", title: "Salle de bains", href: PATHS.bathroom, text: "Conception, carrelage, robinetterie, douche à l'italienne : le projet de A à Z, avec un interlocuteur unique du devis à la réception." },
  { n: "04", title: "Couverture", href: PATHS.roofing, text: "Zinc et ardoise, noues, chatières, abergements, étanchéité de terrasse, dépannage en cas d'infiltration." },
  { n: "05", title: "Syndics et copropriétés", href: PATHS.syndic, text: "Contrats de maintenance, astreinte 24 h sur 24, colonnes humides, repérage et étiquetage des réseaux." },
  { n: "06", title: "Accès difficile", href: PATHS.rope, text: "Travaux sur corde lisse, en présence d'amiante (sous-section 4), protection incendie, colonnes humides." },
] as const;

export const servicePages: Page[] = [
  {
    path: PATHS.plumbing,
    zone: "Paris 11e",
    title: "Plombier Paris 11e : dépannage et rénovation | Monteil",
    description:
      "Plombier à Paris 11e depuis 1964, rue Saint-Ambroise : fuite, dépannage, colonnes, sanitaires et rénovation pour particuliers et copropriétés du quartier.",
    h1: "Plombier à Paris 11e, rue Saint-Ambroise",
    kicker: "Plomberie · Paris 11e",
    lead: "Le plombier du quartier de l'Oberkampf depuis 1964 : dépannage, colonnes, sanitaires et rénovation, pour les appartements, les boutiques et les parties communes.",
    brief:
      "Pour un plombier à Paris 11e, Monteil & Cie travaille depuis le 35, rue Saint-Ambroise : recherche et réparation de fuite, remplacement de canalisations et de colonnes, pose de sanitaires et de robinetterie, rénovation de salle de bains. La maison suit les particuliers, les commerçants et de nombreuses copropriétés du quartier.",
    contactType: "plomberie",
    service: "Plomberie",
    crumb: "Plombier Paris 11e",
    photo: "equipe-1",
    caption: "Un compagnon de la maison en intervention",
    facts: [
      { label: "Quartier", value: "Oberkampf" },
      { label: "Depuis", value: "1964" },
      { label: "Service client", value: "8 h – 19 h" },
    ],
    sections: [
      {
        h2: "Que fait un plombier dans un immeuble parisien du 11e ?",
        answer:
          "Il répare, remplace et prévient. Une fuite sous un évier, une colonne d'eaux usées fatiguée, un robinet d'arrêt qui ne ferme plus, une salle de bains à refaire : chaque cas se règle avec le bon matériau et la bonne méthode, sans solution générique.",
        paras: [
          "Le 11e est un arrondissement d'ateliers devenus logements, de cours intérieures et d'immeubles de rapport. Les réseaux y ont souvent été prolongés plusieurs fois, avec des matériaux différents. Avant de proposer un devis, le compagnon étudie les plans et l'état réel des canalisations, puis explique ce qui est urgent et ce qui peut attendre.",
        ],
        list: [
          "Recherche et réparation de fuite",
          "Remplacement de canalisations, y compris les tuyauteries en plomb",
          "Pose de sanitaires, de robinetterie et de carrelage",
          "Colonnes d'eaux usées et colonnes humides en copropriété",
        ],
      },
      {
        h2: "Pourquoi choisir une maison installée dans le quartier ?",
        answer:
          "Parce que la proximité raccourcit tout : le trajet, le temps de réponse, la connaissance des immeubles. Monteil & Cie est née dans le 11e, au cœur du quartier historique des artisans du métal, et y est restée indépendante depuis plus de soixante ans.",
        paras: [
          "Cette ancienneté se voit dans l'équipe : certains compagnons travaillent ensemble depuis plus de vingt ans. Un savoir-faire se transmet ainsi d'un chantier à l'autre, et les syndics du quartier retrouvent les mêmes interlocuteurs d'une intervention à la suivante.",
        ],
      },
      {
        h2: "Le déroulement d'une intervention",
        steps: [
          { t: "Votre appel ou votre demande", d: "Le service client note l'adresse, la nature du problème et, si vous le pouvez, des photos envoyées par le formulaire." },
          { t: "Le diagnostic sur place", d: "Un compagnon se déplace, repère l'origine du désordre et vous explique les options avant tout travail." },
          { t: "Le devis détaillé", d: "Pour un projet planifié, le devis est établi après visite, sans frais cachés." },
          { t: "Les travaux et la remise en état", d: "Les finitions sont reprises, les réseaux réparés ou renouvelés sont, au besoin, étiquetés." },
        ],
      },
    ],
    faq: [
      {
        q: "Intervenez-vous dans tout le 11e arrondissement ?",
        a: "Oui, de la Bastille à la Nation et de la République à Charonne. La maison est installée rue Saint-Ambroise et intervient aussi dans tous les autres arrondissements de Paris et en proche Île-de-France.",
      },
      {
        q: "Le déplacement est-il facturé ?",
        a: "Pour les particuliers, le site actuel de la maison indique un forfait de 70 € TTC, déduit du devis en cas d'acceptation. Pour les copropriétés, le déplacement est inclus dans le contrat de partenariat.",
      },
      {
        q: "Remplacez-vous les tuyauteries en plomb ?",
        a: "Oui. Le remplacement des tuyauteries en plomb fait partie des prestations de la maison, dans les logements comme dans les parties communes. Le devis précise les tronçons concernés et la remise en état des finitions.",
      },
      {
        q: "Puis-je joindre quelqu'un en dehors des heures de bureau ?",
        a: "Le service client répond de 8 h à 19 h. L'astreinte de nuit et de week-end, 24 h sur 24, est réservée aux syndics et copropriétés sous contrat, que vous pouvez mettre en place en écrivant à la maison.",
      },
    ],
    ctaTitle: "Une fuite, une panne, un projet dans le 11e ?",
    ctaText: "Décrivez votre situation : un compagnon de la maison vous rappelle.",
    related: [PATHS.leak, PATHS.bathroom, PATHS.syndic, "/plombier-paris-10", "/plombier-paris-12"],
  },
  {
    path: PATHS.leak,
    zone: "Paris",
    title: "Recherche de fuite Paris : sans casse inutile | Monteil",
    description:
      "Recherche de fuite à Paris par thermographie, écoute électro-acoustique, gaz traceur et inspection télévisuelle. Rapport détaillé. Monteil & Cie, depuis 1964.",
    h1: "Recherche de fuite à Paris, sans destruction inutile",
    kicker: "Fuite · Paris",
    lead: "Quatre techniques non invasives pour localiser une fuite à quelques centimètres près, et un rapport d'intervention détaillé.",
    brief:
      "Monteil & Cie recherche et traite les fuites à Paris sans casser plus que nécessaire : caméra thermique, écoute électro-acoustique, gaz traceur et inspection télévisuelle des canalisations. La fuite est localisée avec précision, réparée par le même interlocuteur, et un rapport d'intervention détaillé est remis.",
    contactType: "plomberie",
    service: "Recherche de fuite",
    crumb: "Recherche de fuite Paris",
    photo: "equipe-fuite",
    caption: "Un technicien en recherche de fuite",
    facts: [
      { label: "Techniques", value: "4" },
      { label: "Rapport", value: "Fourni" },
      { label: "Depuis", value: "1964" },
    ],
    sections: [
      {
        h2: "Comment trouver une fuite sans casser les murs ?",
        answer:
          "En combinant des mesures qui n'abîment rien : une caméra infrarouge repère l'humidité derrière une cloison, des capteurs écoutent le bruit de l'eau dans la canalisation, un gaz inoffensif traverse le béton. On ne perce qu'une fois la fuite localisée.",
        paras: [
          "Une fuite visible au plafond n'est presque jamais là où elle naît : l'eau suit une poutre, une gaine, un joint de dalle. Chercher au hasard conduit à ouvrir des cloisons pour rien. La méthode de la maison consiste à croiser plusieurs techniques avant de toucher à quoi que ce soit.",
        ],
      },
      {
        h2: "Quelles techniques emploie-t-on selon le cas ?",
        answer:
          "Le choix dépend du matériau et de l'accès. La thermographie convient aux cloisons et aux dalles, l'écoute aux canalisations encastrées, le gaz traceur aux réseaux sous béton ou sous bitume, la caméra aux conduits d'évacuation que l'on peut parcourir, du moins invasif au plus précis.",
        steps: [
          { t: "Inspection thermographique", d: "Une caméra infrarouge détecte l'humidité derrière les cloisons, les dalles et les plafonds, sans destruction." },
          { t: "Écoute électro-acoustique", d: "Des capteurs très sensibles localisent la fuite dans une canalisation encastrée, à quelques centimètres près." },
          { t: "Injection de gaz traceur", d: "Un mélange d'hélium et d'azote est injecté dans le réseau ; sa détection en surface désigne l'endroit, même sous béton ou bitume." },
          { t: "Inspection télévisuelle", d: "Une caméra parcourt les évacuations pour voir l'état du conduit et repérer une rupture ou une racine." },
        ],
      },
      {
        h2: "Que se passe-t-il une fois la fuite trouvée ?",
        answer:
          "La maison répare ou réhabilite le réseau : remplacement du tronçon, reprise de l'étanchéité, remise en état des finitions. Vous recevez un rapport d'intervention qui décrit la méthode, l'emplacement de la fuite et les travaux réalisés, utile pour votre assurance ou votre syndic.",
        paras: [
          "Pour une copropriété, le rapport peut accompagner un dossier de sinistre ou une demande de travaux en assemblée générale. Le même interlocuteur suit la recherche, la réparation et la remise en état, ce qui évite de renvoyer la responsabilité d'un corps de métier à l'autre.",
        ],
      },
    ],
    faq: [
      {
        q: "Faut-il couper l'eau avant de vous appeler ?",
        a: "Si la fuite est importante, fermez le robinet d'arrêt général de votre logement, puis téléphonez. Une fuite lente, repérée par une tache ou une facture anormale, peut attendre un rendez-vous de recherche.",
      },
      {
        q: "Un rapport est-il remis après la recherche ?",
        a: "Oui. Un rapport d'intervention détaillé est fourni : technique employée, localisation de la fuite, travaux réalisés. Il peut être transmis à votre assurance ou à votre syndic.",
      },
      {
        q: "Intervenez-vous aussi dans les parties communes ?",
        a: "Oui, notamment sur les colonnes et les réseaux d'immeubles. Les syndics qui ont un contrat avec la maison bénéficient en plus d'une astreinte 24 h sur 24 pour les urgences.",
      },
      {
        q: "Combien coûte une recherche de fuite ?",
        a: "Le prix dépend de la technique et de l'accès, il est donc donné sur devis. Pour un particulier, le forfait de déplacement de 70 € TTC indiqué par la maison est déduit du devis accepté.",
      },
    ],
    ctaTitle: "Une tache au plafond, une facture d'eau qui grimpe ?",
    ctaText: "Envoyez deux photos : la maison vous dit quelle technique convient.",
    related: [PATHS.plumbing, PATHS.syndic, PATHS.audit, "/plombier-paris-3"],
  },
  {
    path: PATHS.heating,
    zone: "Paris",
    title: "Chauffagiste Paris : dépannage chaudière gaz | Monteil",
    description:
      "Chauffagiste à Paris : dépannage de chaudière gaz, entretien annuel réglementaire, installation de chaudière neuve et réseaux de chauffage. Monteil & Cie.",
    h1: "Chauffagiste à Paris, chaudière gaz et chauffage central",
    kicker: "Chauffage · Paris",
    lead: "Chaudière en panne, radiateurs froids, pression instable : des techniciens gaz certifiés, dans les appartements comme dans les chaufferies d'immeuble.",
    brief:
      "Chauffagiste à Paris, Monteil & Cie dépanne les chaudières gaz, assure l'entretien annuel réglementaire, installe des chaudières neuves et entretient les réseaux de chauffage central. Les techniciens gaz sont certifiés, avec une habilitation gaz naturel et propane, et la prévention de la légionellose fait partie des prestations.",
    contactType: "chauffage",
    service: "Chauffage",
    crumb: "Chauffagiste Paris",
    photo: "equipe-3",
    caption: "Un compagnon de la maison à l'atelier",
    facts: [
      { label: "Gaz", value: "Habilités" },
      { label: "Entretien", value: "Annuel" },
      { label: "Depuis", value: "1964" },
    ],
    sections: [
      {
        h2: "Que faire quand la chaudière tombe en panne ?",
        answer:
          "Vérifiez la pression et l'alimentation, puis appelez un technicien gaz plutôt que de démonter quoi que ce soit. Il diagnostique la panne, la répare ou remet l'installation en service. Selon les disponibilités, la maison annonce une intervention le jour même, sans garantie de délai.",
        paras: [
          "Une chaudière qui s'arrête, c'est souvent une pression qui chute, un circulateur fatigué ou un brûleur encrassé. Le technicien commence par contrôler en sécurité l'installation, explique l'origine de la panne et chiffre la réparation avant de la lancer.",
        ],
        list: [
          "Dépannage de chaudière gaz",
          "Entretien annuel réglementaire",
          "Installation de chaudière neuve",
          "Réseaux de chauffage central, radiateurs et pression",
          "Prévention de la légionellose",
        ],
      },
      {
        h2: "Pourquoi l'entretien annuel d'une chaudière est-il obligatoire ?",
        answer:
          "Parce qu'une chaudière mal réglée consomme davantage et peut devenir dangereuse. Le contrôle annuel vérifie la combustion, l'évacuation des fumées et la sécurité de l'appareil, et vous remet une attestation, utile pour votre assurance habitation et pour votre bailleur éventuel.",
        paras: [
          "Pour une copropriété, le contrat d'entretien de la chaufferie collective se discute avec le syndic. Les contrats de maintenance préventive de la maison couvrent justement les installations d'immeuble, avec des interlocuteurs dédiés.",
        ],
      },
      {
        h2: "Quand faut-il remplacer plutôt que réparer ?",
        answer:
          "Quand les pannes se répètent, que les pièces ne se trouvent plus ou que la consommation grimpe sans raison. Le technicien compare le coût des réparations à celui d'une chaudière neuve et vous laisse décider, avec un devis pour chaque option.",
        paras: [
          "Le remplacement est aussi l'occasion de revoir l'ensemble : évacuation des fumées, vase d'expansion, circulateur, isolation thermique des réseaux. Les compagnons de la maison réalisent ces reprises avec les mêmes équipes que pour la plomberie.",
        ],
      },
    ],
    faq: [
      {
        q: "Vos techniciens sont-ils habilités pour le gaz ?",
        a: "Oui. La maison indique des techniciens gaz certifiés et une habilitation gaz naturel et propane, pour l'installation comme pour la maintenance des appareils.",
      },
      {
        q: "Intervenez-vous le jour même ?",
        a: "Le site de la maison annonce une intervention le jour même selon disponibilité. Aucun délai n'est garanti : appelez le service client, qui vous donne le créneau réel.",
      },
      {
        q: "Entretenez-vous les chaufferies d'immeuble ?",
        a: "Oui. Les contrats de maintenance préventive de la maison s'adressent aux syndics et gestionnaires, avec des interlocuteurs dédiés et une astreinte 24 h sur 24 pour les urgences.",
      },
      {
        q: "Installez-vous des chaudières neuves ?",
        a: "Oui. L'installation d'une chaudière neuve figure parmi les prestations chauffage de la maison. Le devis détaille l'appareil, la pose, le raccordement et la remise en service.",
      },
    ],
    ctaTitle: "Un radiateur froid, une chaudière à l'arrêt ?",
    ctaText: "Appelez le service client ou envoyez votre demande : un technicien gaz vous répond.",
    related: [PATHS.plumbing, PATHS.syndic, PATHS.bathroom, "/plombier-paris-20"],
  },
  {
    path: PATHS.bathroom,
    zone: "Paris",
    title: "Rénovation de salle de bains Paris : clé en main | Monteil",
    description:
      "Rénovation de salle de bains à Paris : conception, carrelage, robinetterie, douche à l'italienne, un seul interlocuteur du devis à la réception. Monteil & Cie.",
    h1: "Rénovation de salle de bains à Paris, de A à Z",
    kicker: "Salle de bains · Paris",
    lead: "Conception, démolition, réseaux, carrelage, sanitaires : un seul interlocuteur du devis à la réception, dans les appartements parisiens.",
    brief:
      "Monteil & Cie rénove les salles de bains à Paris de A à Z : conception, pose de sanitaires et de carrelage, robinetterie, douche à l'italienne, remplacement des tuyauteries en plomb et isolation thermique des réseaux. Un seul interlocuteur suit le projet du devis à la réception, pour les particuliers comme pour les résidences.",
    contactType: "renovation",
    service: "Rénovation de salle de bains",
    crumb: "Salle de bains Paris",
    photo: "equipe-5",
    caption: "Un compagnon en intervention sous un évier",
    facts: [
      { label: "Interlocuteur", value: "Unique" },
      { label: "Devis", value: "Sur visite" },
      { label: "Depuis", value: "1964" },
    ],
    sections: [
      {
        h2: "Comment se déroule la rénovation d'une salle de bains ?",
        answer:
          "Elle commence par une visite et un devis sur mesure, puis la démolition, la reprise des réseaux d'eau et d'évacuation, le carrelage, la pose des sanitaires et de la robinetterie. Un interlocuteur unique coordonne l'ensemble des étapes, du devis jusqu'à la réception.",
        steps: [
          { t: "La visite et le devis", d: "Le compagnon relève les contraintes de l'appartement et chiffre le projet sur mesure." },
          { t: "La démolition et les réseaux", d: "Reprise des arrivées d'eau froide et chaude et des évacuations, avec remplacement des tuyauteries en plomb si besoin." },
          { t: "Le carrelage et l'étanchéité", d: "Pose du carrelage, douche à l'italienne, grand format ou pierre naturelle selon le projet." },
          { t: "Les sanitaires et la réception", d: "Robinetterie, vasque, WC, accessoires ; vérification complète avec vous." },
        ],
      },
      {
        h2: "Peut-on créer une douche à l'italienne dans un appartement ancien ?",
        answer:
          "Souvent, à condition de dégager la pente d'évacuation nécessaire sous le receveur. Dans un immeuble ancien, tout dépend de l'épaisseur du plancher et de la distance à la chute d'eaux usées, que le compagnon vérifie à la visite avant de dessiner.",
        paras: [
          "Les chantiers de la maison vont de la salle de bains d'un particulier, livrée en huit jours dans l'exemple présenté sur le site, à la réfection de neuf mètres carrés avec balnéo, travertin et robinetterie haut de gamme dans une résidence parisienne.",
          "Les images avant et après de ces chantiers sont à retrouver sur la page des réalisations de la maison.",
        ],
      },
      {
        h2: "Qui s'occupe des autorisations en copropriété ?",
        answer:
          "Le propriétaire reste responsable de sa demande auprès du syndic dès que les travaux touchent aux colonnes, aux parties communes ou à l'étanchéité. La maison, qui travaille chaque jour avec des syndics parisiens, vous indique ce qu'il faut leur présenter.",
        paras: [
          "Cette connaissance des deux côtés, particuliers et gestionnaires, évite les allers-retours : un règlement de copropriété, un horaire de chantier, une coupure d'eau annoncée aux voisins se préparent avant le premier jour.",
        ],
      },
    ],
    faq: [
      {
        q: "Combien de temps dure une rénovation de salle de bains ?",
        a: "Le chantier présenté sur le site de la maison a été livré en huit jours, mais la durée dépend du projet. Elle est précisée dans le devis établi après la visite, sans promesse avant d'avoir vu les lieux.",
      },
      {
        q: "Le devis est-il gratuit ?",
        a: "Le devis est établi sur visite. Pour un particulier, un forfait de déplacement de 70 € TTC est facturé selon le site de la maison, puis déduit du devis en cas d'acceptation.",
      },
      {
        q: "Fournissez-vous les sanitaires et le carrelage ?",
        a: "La maison réalise la conception et la pose complètes : sanitaires, carrelage, robinetterie et accessoires. Les choix de matériaux se discutent avec vous au moment du devis.",
      },
      {
        q: "Travaillez-vous aussi pour les résidences de standing ?",
        a: "Oui, la maison cite une réfection de prestige dans une résidence parisienne, avec baignoire balnéo, carrelage en travertin et robinetterie haut de gamme.",
      },
    ],
    ctaTitle: "Une salle de bains à repenser ?",
    ctaText: "Décrivez votre projet et joignez quelques photos : la maison fixe une visite.",
    related: [PATHS.plumbing, PATHS.works, PATHS.leak, "/plombier-paris-12"],
  },
  {
    path: PATHS.syndic,
    zone: "Paris",
    title: "Plombier syndic copropriété Paris : astreinte 24h | Monteil",
    description:
      "Plombier pour syndics et copropriétés à Paris : contrats de maintenance, astreinte 24 h sur 24, colonnes humides, repérage des réseaux. Monteil & Cie.",
    h1: "Plombier pour syndics et copropriétés à Paris",
    kicker: "Syndics · Paris",
    lead: "Contrats de maintenance, urgences à toute heure et interlocuteurs dédiés : le partenaire technique de syndics parisiens depuis des décennies.",
    brief:
      "Monteil & Cie est le partenaire technique de nombreux syndics, hôtels et gestionnaires immobiliers parisiens. La maison propose des contrats de maintenance préventive, une astreinte d'urgence 24 h sur 24 et 7 jours sur 7 réservée aux copropriétés sous contrat, le repérage des réseaux et les bons de commande acceptés.",
    contactType: "copropriete",
    service: "Plomberie pour syndics et copropriétés",
    crumb: "Syndics Paris",
    photo: "equipe-2",
    caption: "Un compagnon en intervention sur un réseau",
    facts: [
      { label: "Astreinte", value: "24 h / 24" },
      { label: "Contrats", value: "Préventifs" },
      { label: "Depuis", value: "1964" },
    ],
    sections: [
      {
        h2: "Que couvre un contrat d'astreinte pour une copropriété ?",
        answer:
          "Il garantit qu'un interlocuteur de la maison peut être joint à toute heure, la nuit et le week-end compris, pour les urgences de l'immeuble : fuite sur une colonne, panne de chaufferie, infiltration en toiture. Cette astreinte est exclusive aux copropriétés sous contrat.",
        paras: [
          "Le contrat se met en place par un simple échange avec le service client. Les conditions précises, les périmètres couverts et les modalités de facturation se discutent avec le syndic ou le gestionnaire, immeuble par immeuble.",
        ],
        list: [
          "Contrats de maintenance préventive",
          "Astreinte d'urgence 7 jours sur 7 et 24 h sur 24",
          "Repérage et étiquetage des réseaux",
          "Colonnes humides",
          "Bons de commande acceptés",
        ],
      },
      {
        h2: "Comment travaille-t-on dans un immeuble occupé ?",
        answer:
          "En limitant la gêne : coupures d'eau annoncées, travaux par tronçons, parfois de nuit, et remise en état des finitions. Sur une colonne de sept étages remplacée en site occupé, la maison a procédé par tronçons nocturnes pour épargner les résidents.",
        paras: [
          "Dans un parking souterrain, d'autres chantiers ont été menés sans fermer le parking. Cette organisation, préparée avec le syndic, est ce qui distingue une intervention en parties communes d'un simple dépannage.",
        ],
      },
      {
        h2: "À qui s'adresser chez Monteil & Cie ?",
        answer:
          "Au service client, qui traite les dépannages comme les travaux. Il centralise les demandes des syndics, planifie les compagnons et assure le suivi. Des interlocuteurs dédiés sont désignés pour chaque gestionnaire et répondent pendant les heures du service client, de 8 h à 19 h.",
        paras: [
          "Les références de la maison comptent des syndics, des hôtels, des gestionnaires immobiliers et des associations. Le site actuel cite aussi plusieurs adresses de chantiers parisiens, que la maison peut commenter à la demande.",
        ],
      },
    ],
    faq: [
      {
        q: "Comment mettre en place un contrat d'astreinte ?",
        a: "Écrivez au service client de la maison par la page contact, en choisissant « Copropriété », avec l'adresse de l'immeuble et vos coordonnées de gestionnaire. La maison vous répond avec une proposition adaptée.",
      },
      {
        q: "Le déplacement est-il facturé aux copropriétés ?",
        a: "Non, selon le site de la maison : pour les copropriétés et gestionnaires, le déplacement est inclus dans le contrat de partenariat.",
      },
      {
        q: "Acceptez-vous les bons de commande ?",
        a: "Oui, les bons de commande des syndics et gestionnaires sont acceptés, ce qui simplifie le circuit de validation des interventions.",
      },
      {
        q: "Traitez-vous l'amiante dans les parties communes ?",
        a: "La maison intervient en présence d'amiante grâce à l'habilitation sous-section 4 de ses compagnons, sans effectuer de désamiantage. Un diagnostic préalable doit être fourni avant l'intervention.",
      },
    ],
    ctaTitle: "Un immeuble à confier à une maison de confiance ?",
    ctaText: "Présentez votre immeuble : la maison propose un contrat adapté.",
    related: [PATHS.audit, PATHS.rope, PATHS.leak, "/plombier-paris-3"],
  },
  {
    path: PATHS.rope,
    zone: "Paris",
    title: "Cordiste Paris : travaux sur corde et amiante | Monteil",
    description:
      "Cordiste à Paris pour façades, corniches et toitures en accès difficile, sans échafaudage, et travaux en présence d'amiante (sous-section 4). Monteil & Cie.",
    h1: "Cordiste à Paris, travaux en accès difficile",
    kicker: "Accès difficile · Paris",
    lead: "Façades, corniches, toitures, colonnes humides : des compétences rares, exercées par des compagnons habilités et certifiés.",
    brief:
      "Monteil & Cie réalise à Paris des travaux sur corde lisse en façade et en toiture, sans échafaudage ni autorisation de voirie, ainsi que des interventions en présence de matériaux amiantés, avec des compagnons habilités sous-section 4. La maison traite aussi les colonnes humides et le dépannage de ventilation en couverture.",
    contactType: "specialise",
    service: "Travaux sur corde",
    crumb: "Cordiste Paris",
    photo: "cordiste",
    caption: "Un cordiste de la maison en intervention",
    facts: [
      { label: "Habilitation", value: "Amiante SS4" },
      { label: "Accès", value: "Sur corde" },
      { label: "Depuis", value: "1964" },
    ],
    sections: [
      {
        h2: "Quand faut-il faire appel à un cordiste ?",
        answer:
          "Quand l'endroit à traiter est inaccessible à un échafaudage ou que celui-ci coûterait plus que les travaux : façade haute, corniche, cour étroite, toiture à pente. Le cordiste y accède par corde lisse, sans autorisation de voirie ni installation lourde.",
        paras: [
          "Sur un immeuble haussmannien, une réfection de couverture en zinc a ainsi nécessité une intervention sur corde pour atteindre les zones hors de portée. La maison combine ce savoir-faire avec ses métiers de couvreur et de plombier, ce qui évite de multiplier les intervenants.",
        ],
      },
      {
        h2: "Peut-on travailler en présence d'amiante sans désamianter ?",
        answer:
          "Oui, avec des compagnons habilités et un diagnostic préalable obligatoire, fourni avant toute intervention. Ces interventions, de sous-section 4, permettent de remplacer un réseau sans retirer l'amiante du bâtiment ; elles ne relèvent pas du désamiantage proprement dit, qui est un autre métier.",
        paras: [
          "La maison a ainsi déposé et remplacé un réseau de canalisations en plafond d'un parking souterrain, avec un réseau neuf en PVC et une isolation thermique. Le chantier est présenté avec ses images avant et après sur la page des réalisations.",
        ],
      },
      {
        h2: "Quelles autres interventions spécialisées propose la maison ?",
        answer:
          "Les colonnes humides, la protection incendie et le dépannage de couverture et de ventilation. Ces travaux réglementés demandent des équipes formées, et la maison revendique des qualifications reconnues, dont Qualibat, une affiliation à la FFB et à la SMA BTP.",
        list: [
          "Travaux sur corde lisse (façades, toits)",
          "Travaux en présence de matériaux amiantés, sous-section 4",
          "Colonnes humides et protection incendie",
          "Dépannage couverture et ventilation",
        ],
      },
    ],
    faq: [
      {
        q: "Faut-il un échafaudage pour une intervention sur corde ?",
        a: "Non. Le travail sur corde lisse se fait sans échafaudage et sans autorisation de voirie, ce qui réduit les délais et le coût des accès difficiles.",
      },
      {
        q: "Faites-vous du désamiantage ?",
        a: "Non. La maison intervient en présence d'amiante pour remplacer des réseaux, avec des compagnons habilités sous-section 4, mais n'effectue pas de désamiantage. Un repérage amiante avant travaux est obligatoire.",
      },
      {
        q: "Qui peut demander ces travaux ?",
        a: "Les copropriétés, syndics, gestionnaires et propriétaires. Chaque intervention est chiffrée sur devis après étude du site et des contraintes de sécurité.",
      },
      {
        q: "Sur quels secteurs intervenez-vous ?",
        a: "Sur tous les secteurs de Paris et d'Île-de-France, selon l'indication de la maison. L'ancrage historique reste le 11e arrondissement.",
      },
    ],
    ctaTitle: "Un accès que personne n'atteint ?",
    ctaText: "Décrivez le site et joignez des photos : la maison étudie la méthode.",
    related: [PATHS.roofing, PATHS.syndic, PATHS.audit, "/plombier-paris-4"],
  },
  {
    path: PATHS.audit,
    zone: "Paris",
    title: "Audit et repérage de réseaux Paris : bilan | Monteil",
    description:
      "Audit et repérage des réseaux d'eau à Paris : cartographie des vannes, étiquetage réglementaire, bilan détaillé et rapport complet. Monteil & Cie, depuis 1964.",
    h1: "Audit et repérage des réseaux à Paris",
    kicker: "Audit · Paris",
    lead: "Avant des travaux ou pour une mise en conformité : un état des lieux complet des réseaux de l'immeuble, vannes et colonnes comprises.",
    brief:
      "Avant des travaux ou dans le cadre d'une mise en conformité, Monteil & Cie cartographie les réseaux d'eau d'un immeuble parisien : repérage des canalisations et des vannes, étiquetage réglementaire, bilan et état des lieux détaillé, métrologie et maîtrise de la consommation. Un rapport complet est remis au syndic ou au gestionnaire.",
    contactType: "specialise",
    service: "Audit et repérage des réseaux",
    crumb: "Audit réseaux Paris",
    photo: "equipe-3",
    caption: "Un compagnon à l'atelier",
    facts: [
      { label: "Rapport", value: "Complet" },
      { label: "Pour", value: "Syndics, bailleurs" },
      { label: "Depuis", value: "1964" },
    ],
    sections: [
      {
        h2: "À quoi sert un audit des réseaux d'un immeuble ?",
        answer:
          "À savoir précisément ce qui existe : où passent les colonnes, où sont les vannes, quels matériaux sont en place et dans quel état. Cette cartographie permet de décider des travaux, de couper l'eau sans tâtonner et de répondre aux obligations de repérage.",
        paras: [
          "Dans un immeuble ancien, les réseaux ont été modifiés au fil des décennies et les plans manquent souvent. Un repérage complet, avec étiquetage, fait gagner du temps à chaque intervention ultérieure, en urgence notamment.",
        ],
      },
      {
        h2: "Que contient le rapport remis après l'audit ?",
        answer:
          "Un bilan détaillé de l'état des lieux : repérage des réseaux et des vannes, étiquetage réglementaire, constat sur chaque tronçon et pistes de travaux. Le rapport est complet et destiné à être présenté en assemblée générale ou archivé dans le carnet de l'immeuble.",
        list: [
          "Repérage des réseaux et des vannes",
          "Bilan et état des lieux détaillé",
          "Étiquetage réglementaire",
          "Métrologie et maîtrise de la consommation",
        ],
      },
      {
        h2: "Quel lien avec les travaux de remplacement ?",
        answer:
          "L'audit prépare les chantiers. Les compagnons de la maison remplacent ensuite ce qui doit l'être : vannes d'arrêt et disconnecteurs, colonnes en fonte, réseaux de parking. Sur un immeuble parisien, douze vannes d'arrêt ont ainsi été changées avec un étiquetage complet des réseaux.",
        paras: [
          "Cet enchaînement, du constat au remplacement, par la même équipe, est un avantage pour le syndic : un seul interlocuteur et un suivi cohérent d'une année sur l'autre.",
        ],
      },
    ],
    faq: [
      {
        q: "À qui s'adresse l'audit de réseaux ?",
        a: "Aux syndics, bailleurs, gestionnaires et exploitants de bâtiments tertiaires, selon la maison, à Paris et en Île-de-France.",
      },
      {
        q: "Comment l'audit est-il facturé ?",
        a: "Sur devis. Le prix dépend de la taille de l'immeuble, du nombre de colonnes et de l'accessibilité. Demandez un devis par la page contact en indiquant l'adresse.",
      },
      {
        q: "L'audit débouche-t-il obligatoirement sur des travaux ?",
        a: "Non. Il établit un état des lieux. Les travaux éventuels font l'objet de devis distincts, que le syndic soumet ensuite à ses copropriétaires.",
      },
      {
        q: "Peut-on coupler l'audit avec un contrat de maintenance ?",
        a: "Oui, c'est même fréquent : le repérage facilite la maintenance préventive et l'intervention d'urgence, que la maison assure par contrat avec astreinte pour les syndics.",
      },
    ],
    ctaTitle: "Un immeuble dont personne ne connaît les vannes ?",
    ctaText: "Indiquez l'adresse : la maison prépare une proposition d'audit.",
    related: [PATHS.syndic, PATHS.leak, PATHS.rope, "/plombier-paris-10"],
  },
  {
    path: PATHS.roofing,
    zone: "Paris",
    title: "Couvreur zingueur Paris : zinc, ardoise, toit | Monteil",
    description:
      "Couvreur zingueur à Paris : réfection de toitures en zinc et ardoise, noues, chatières, étanchéité de terrasse et dépannage d'infiltration. Monteil & Cie.",
    h1: "Couvreur zingueur à Paris, zinc et ardoise",
    kicker: "Couverture · Paris",
    lead: "Noues, chatières, abergements, couvertines : l'entretien des toitures parisiennes, avec intervention sur corde quand l'accès l'exige.",
    brief:
      "Monteil & Cie assure à Paris la couverture et la zinguerie : réfection de noues, de chatières, d'abergements et de couvertines, remplacement d'ardoises, reprise d'étanchéité bicouche sur terrasses et toits-terrasses, dépannage en cas d'infiltration. Les zones inaccessibles se traitent sur corde, sans échafaudage.",
    contactType: "couverture",
    service: "Couverture et zinguerie",
    crumb: "Couvreur Paris",
    photo: "cordiste",
    caption: "Un compagnon en hauteur",
    facts: [
      { label: "Matériaux", value: "Zinc, ardoise" },
      { label: "Accès", value: "Sur corde" },
      { label: "Depuis", value: "1964" },
    ],
    sections: [
      {
        h2: "Que comprend l'entretien d'une toiture en zinc à Paris ?",
        answer:
          "La surveillance des points sensibles : noues, chatières, abergements et couvertines. Ce sont eux qui laissent passer l'eau les premiers. La maison les refait ou les reprend, remplace les ardoises dégradées et rétablit l'étanchéité avant que les infiltrations n'atteignent les étages.",
        paras: [
          "Sur un immeuble haussmannien, la maison a refait la couverture en zinc sur cent quatre-vingts mètres carrés : noues, chatières et couvertines, avec une intervention sur corde pour les zones inaccessibles. Les images avant et après sont à voir dans les réalisations.",
        ],
      },
      {
        h2: "Que faire en cas d'infiltration ou de tuile déplacée ?",
        answer:
          "Protéger l'intérieur, photographier les dégâts et appeler. La maison propose un dépannage rapide en cas d'infiltration ou d'élément déplacé, avec une astreinte pour les syndics sous contrat. Une mise en sécurité précède la réparation définitive, que le couvreur chiffre après avoir vu la toiture.",
        paras: [
          "Une infiltration se révèle souvent par une tache au dernier étage. La recherche de fuite par thermographie peut alors confirmer que l'eau vient bien de la couverture et non d'une canalisation, avant d'engager les travaux.",
        ],
      },
      {
        h2: "L'étanchéité d'une terrasse relève-t-elle aussi de la couverture ?",
        answer:
          "Oui. La reprise d'étanchéité bicouche sur terrasses et toits-terrasses fait partie des prestations de la maison, précédée d'un diagnostic. Elle protège la structure et les logements situés dessous, notamment dans les immeubles dont la terrasse sert de toiture, où chaque défaut se paie à l'étage.",
        list: [
          "Zinc et ardoise : noues, chatières, abergements, couvertines",
          "Étanchéité bicouche des terrasses et toits-terrasses",
          "Dépannage d'infiltration",
          "Lucarnes en ardoise et abergements en zinc",
        ],
      },
    ],
    faq: [
      {
        q: "Intervenez-vous sur les toits haussmanniens ?",
        a: "Oui, la maison cite la réfection d'une couverture en zinc d'un immeuble haussmannien et la reprise d'une lucarne en ardoise sur une toiture parisienne.",
      },
      {
        q: "Faut-il installer un échafaudage ?",
        a: "Pas toujours. Les zones inaccessibles se traitent sur corde lisse, ce qui évite l'échafaudage et l'autorisation de voirie qui l'accompagne.",
      },
      {
        q: "Établissez-vous un diagnostic avant l'étanchéité ?",
        a: "Oui, un diagnostic précède la reprise d'étanchéité d'une terrasse, et il est inclus dans la prestation selon le site de la maison.",
      },
      {
        q: "Une copropriété peut-elle bénéficier d'une astreinte toiture ?",
        a: "Oui. Les syndics sous contrat disposent d'une astreinte pour les infiltrations urgentes, comme pour les autres urgences de l'immeuble.",
      },
    ],
    ctaTitle: "Une tache au dernier étage ?",
    ctaText: "Envoyez une photo de la tache et du toit : la maison vous oriente.",
    related: [PATHS.rope, PATHS.syndic, PATHS.works, "/plombier-paris-4"],
  },
  {
    path: PATHS.works,
    zone: "Paris",
    title: "Réalisations de plomberie à Paris : avant et après | Monteil",
    description:
      "Dix chantiers de Monteil & Cie à Paris, comparés avant et après : colonnes, salles de bains, parkings, vannes et toitures en zinc. Glissez pour comparer.",
    h1: "Réalisations de plomberie et couverture à Paris",
    kicker: "Réalisations · Paris",
    lead: "Dix chantiers parisiens, de la colonne en fonte à la toiture en zinc, à comparer avant et après.",
    brief:
      "Cette page présente dix chantiers de Monteil & Cie à Paris, repris du site de la maison : colonnes d'eaux usées, salles de bains, vannes générales, réseaux de parkings souterrains, toiture en zinc et lucarne en ardoise. Glissez le curseur de chaque image pour comparer l'état avant les travaux et le résultat.",
    contactType: "plomberie",
    service: "Plomberie et couverture",
    crumb: "Réalisations",
    photo: "equipe-paris",
    caption: "Un compagnon de la maison dans Paris sous la neige",
    showcase: true,
    facts: [
      { label: "Chantiers", value: "10" },
      { label: "Types", value: "Réseaux, SDB, toit" },
      { label: "Depuis", value: "1964" },
    ],
    sections: [
      {
        h2: "Quels chantiers la maison réalise-t-elle à Paris ?",
        answer:
          "Des chantiers très différents par leur taille : une salle de bains de particulier livrée en huit jours, une colonne en fonte remplacée dans un immeuble de sept étages, des réseaux de parkings souterrains, une couverture en zinc de cent quatre-vingts mètres carrés.",
        paras: [
          "Le point commun est la méthode : étudier l'existant, choisir le bon matériau, limiter la gêne pour les occupants et remettre en état les finitions. Plusieurs de ces chantiers se sont déroulés en site occupé, ce qui demande une préparation soignée avec le syndic.",
        ],
      },
      {
        h2: "Comment lire ces comparaisons avant et après ?",
        answer:
          "Chaque image se règle avec le curseur : à gauche, l'état avant les travaux, à droite le résultat. Au clavier, les flèches déplacent le curseur. Sous chaque comparaison, une courte légende décrit le chantier tel que la maison le présente sur son site.",
        paras: [
          "Ces photos sont celles de la maison. Les adresses précises des chantiers ne sont pas publiées ici ; les références citées par la maison à Paris, du 1er au 16e arrondissement, sont disponibles auprès du service client.",
        ],
      },
    ],
    faq: [
      {
        q: "Ces chantiers sont-ils récents ?",
        a: "La maison ne donne pas de date de réalisation sur son site. Les photos sont présentées telles qu'elles figurent sur le site actuel, et les dates sont à demander au service client.",
      },
      {
        q: "Puis-je visiter un chantier en cours ?",
        a: "Le plus simple est d'en parler au service client, qui peut présenter des références adaptées à votre projet. Aucune visite n'est promise sans l'accord du syndic ou du propriétaire concerné.",
      },
      {
        q: "Comment obtenir le même type de travaux ?",
        a: "Par la page contact, en décrivant le lieu, la nature du problème et en joignant des photos. Un compagnon se déplace ensuite pour établir un devis.",
      },
      {
        q: "Les travaux en parking ont-ils interrompu le stationnement ?",
        a: "Pour l'un des chantiers présentés, la maison indique que le parking souterrain est resté ouvert pendant la dépose et la pose du réseau en PVC.",
      },
    ],
    ctaTitle: "Un chantier comme celui-ci chez vous ?",
    ctaText: "Racontez votre situation : un compagnon vous rappelle.",
    related: [PATHS.bathroom, PATHS.syndic, PATHS.roofing, PATHS.leak],
  },
];

export const housePage: Page = {
  path: PATHS.house,
  zone: "Paris 11e",
  title: "Plombier à Paris depuis 1964 : la maison Monteil & Cie",
  description:
    "Monteil & Cie, maison familiale de plomberie du 11e depuis 1964 : une quarantaine de compagnons, qualifications Qualibat et FFB, engagements, références.",
  h1: "Plombier à Paris depuis 1964, la maison Monteil",
  kicker: "La maison · depuis 1964",
  lead: "Fondée par René Monteil dans le 11e arrondissement, la maison est restée indépendante et parisienne depuis plus de soixante ans.",
  brief:
    "Monteil & Cie est une maison familiale de plomberie, chauffage et couverture fondée par René Monteil en 1964 dans le 11e arrondissement de Paris. Une quarantaine de collaborateurs, dont certains travaillent ensemble depuis plus de vingt ans, interviennent chez les particuliers, les syndics, les hôtels et les gestionnaires.",
  contactType: "plomberie",
  service: "Plomberie, chauffage et couverture",
  crumb: "La maison",
  photo: "equipe-paris",
  caption: "Un compagnon de la maison dans Paris sous la neige",
  facts: [
    { label: "Fondée en", value: "1964" },
    { label: "Équipe", value: "~40" },
    { label: "Quartier", value: "Paris 11e" },
  ],
  sections: [
    {
      h2: "Qui est Monteil & Cie ?",
      answer:
        "Une maison indépendante, fondée par René Monteil dans le quartier historique des artisans du métal, restée parisienne depuis soixante ans. Elle réunit plomberie, chauffage, couverture, travaux sur corde et dégorgement, avec une équipe stable de compagnons et une équipe administrative au bureau.",
      paras: [
        "L'ancienneté de certains compagnons, plus de vingt ans pour quelques-uns, n'est pas un chiffre anodin : elle prouve un savoir-faire transmis, une équipe stable et une confiance mutuelle qui se ressent sur chaque chantier.",
      ],
    },
    {
      h2: "Quelles sont les valeurs de la maison ?",
      answer:
        "Technicité, réactivité, proximité. Chaque intervention commence par l'étude des plans ; les urgences sont gérées par des équipes opérationnelles ; choisir Monteil, c'est aussi soutenir une économie locale parisienne, sans intermédiaire superflu, avec des véhicules de service de marque française.",
      steps: [
        { t: "Technicité", d: "Le bon matériau, la bonne procédure : pas de solution générique." },
        { t: "Réactivité", d: "Service client de 8 h à 19 h, astreinte 24 h sur 24 pour les syndics sous contrat." },
        { t: "Proximité", d: "Ancrée à Paris depuis plus de soixante ans, au service de ses habitants." },
        { t: "Transparence", d: "Devis détaillés et aucun frais caché ; tarifs annoncés inchangés depuis 2018." },
      ],
    },
    {
      h2: "Quelles qualifications et quelles références ?",
      answer:
        "La maison affiche les qualifications Qualibat, l'appartenance à la FFB et à la SMA BTP, GCCP et la reconnaissance Grenelle Environnement, ainsi qu'une habilitation gaz naturel et propane et l'habilitation amiante sous-section 4. Ses références comptent syndics, hôtels et associations.",
      paras: [
        "Parmi les chantiers cités par la maison figurent des immeubles des 1er, 5e, 7e, 14e, 15e et 16e arrondissements, ainsi que la paroisse Saint-Ambroise, dans le 11e. Les logos de clients et les labels exacts sont à faire confirmer avant toute publication.",
      ],
    },
  ],
  faq: [
    {
      q: "Depuis quand la maison existe-t-elle ?",
      a: "Le site actuel indique 1964, avec René Monteil pour fondateur. Cette date est celle que la maison revendique ; elle sera confirmée avec l'entreprise avant la mise en ligne.",
    },
    {
      q: "Combien de personnes travaillent chez Monteil & Cie ?",
      a: "Une quarantaine de collaborateurs qualifiés, répartis entre les compagnons sur le terrain et l'équipe administrative au bureau.",
    },
    {
      q: "Quelle est la note de la maison sur Google ?",
      a: "3,7 sur 5 pour 46 avis, relevé du 20 octobre 2026 sur la fiche Google de l'entreprise, que vous pouvez consulter directement.",
    },
    {
      q: "Les véhicules de la maison sont-ils français ?",
      a: "Oui : la maison indique que l'ensemble de ses véhicules de service sont de marque française, par attachement à son ancrage parisien et à l'économie locale.",
    },
  ],
  ctaTitle: "Rencontrer la maison Monteil",
  ctaText: "Passez au 35, rue Saint-Ambroise ou envoyez votre demande.",
  related: [PATHS.plumbing, PATHS.syndic, PATHS.works, PATHS.roofing],
};
