import { PATHS } from "./site";
import type { Page } from "./types";

/**
 * Pages reprises du site actuel (mêmes adresses). Les textes marqués `original` sont ceux de seragaz.fr, relevés le
 * 25 octobre 2026, avec seulement les fautes de frappe évidentes corrigées. Les titres en question, les réponses
 * directes, les blocs « En bref » et les FAQ sont nouveaux (structure demandée par la Bible SEO).
 */

export const home = {
  path: PATHS.home,
  title: "Chauffagiste Paris 9 : chaudière gaz, entretien | SERAGAZ",
  description:
    "SERAGAZ, chauffagiste à Paris 9 depuis 1985 : installation, remplacement, entretien et dépannage de chaudières gaz, ramonage, désembouage, compteur gaz.",
  h1: "Chauffagiste à Paris 9 : installation et entretien de chaudières gaz",
  brief:
    "SERAGAZ est une entreprise familiale installée au 69 rue de Dunkerque, à Paris 9e, depuis 1985. Ses techniciens installent, remplacent, entretiennent et dépannent les chaudières et chauffe-eau gaz, ramonent les conduits, désembouent les circuits de chauffage et déplacent les compteurs gaz à Paris et en petite couronne.",
};

export const presentation: Page = {
  path: PATHS.presentation,
  title: "Chauffagiste Paris 9 depuis 1985 : qui sommes-nous | SERAGAZ",
  description:
    "SERAGAZ, chauffagiste à Paris 9 : une histoire familiale commencée en 1903, des techniciens formés chez les fabricants, Partenaire GRDF, RGE Qualibat et PG PMG.",
  h1: "Chauffagiste à Paris 9 depuis 1985 : l'histoire de SERAGAZ",
  kicker: "Qui sommes-nous ?",
  lead: "SERAGAZ est votre partenaire de confiance pour l'installation de gaz, la réparation, la maintenance et le remplacement de votre appareil à gaz.",
  brief:
    "Chauffagiste à Paris 9 depuis 1985, SERAGAZ a été fondée par Jean-Marie Franche, petit-fils d'Henri Franche, créateur de Franche Industries en 1903. Jérémy Franche dirige aujourd'hui l'entreprise, toujours à la même adresse, rue de Dunkerque, avec des techniciens formés chaque année chez les fabricants de chaudières.",
  contactType: "autre",
  crumb: "Qui sommes-nous ?",
  photo: "atelier",
  sections: [
    {
      h2: "Qui est SERAGAZ, chauffagiste à Paris 9 ?",
      answer:
        "Une entreprise familiale spécialisée dans les appareils à gaz : chaudières, chauffe-eau et canalisations. Fondée en 1985 par Jean-Marie Franche, elle est dirigée par son fils Jérémy Franche et travaille pour des particuliers, des syndics, des agences immobilières et des professionnels du bâtiment à Paris et en petite couronne.",
      paras: [
        "SERAGAZ est votre partenaire de confiance pour l'installation de gaz, la réparation, la maintenance et le remplacement de votre appareil à gaz. Fondée en 1985 par mon père Jean-Marie FRANCHE, notre société a su évoluer et s'adapter aux besoins de ses clients en étant référencée auprès des plus grandes marques tout en conservant les valeurs familiales qui nous sont chères.",
      ],
      original: true,
      aside: { title: "Jérémy Franche", text: "Dirigeant de SERAGAZ, arrière-petit-fils d'Henri Franche." },
    },
    {
      h2: "D'où vient l'entreprise ? Une histoire commencée en 1903",
      answer:
        "De Franche Industries, créée en 1903 par Henri Franche pour l'installation de réseaux de gaz, la plomberie, la couverture et le chauffage. Son petit-fils Jean-Marie Franche fonde SERAGAZ en 1985 pour répondre à la demande de spécialistes de l'entretien et de la réparation des appareils à gaz.",
      paras: [
        "L'histoire de SERAGAZ commence en 1903 avec la création de FRANCHE INDUSTRIES par Henri FRANCHE, spécialisée dans l'installation de réseaux de gaz, plomberie, couverture et chauffage. En 1985, face à la demande croissante de spécialistes en entretien et réparation d'appareils à gaz type chauffe-eau, chaudière, Jean-Marie FRANCHE, petit-fils d'Henri FRANCHE, fonde SERAGAZ.",
        "Jérémy FRANCHE, arrière-petit-fils d'Henri FRANCHE, fait perdurer cette aventure familiale débutée il y a 122 ans à la même adresse.",
        "Depuis, nous avons su nous imposer comme une référence dans notre domaine grâce à notre expertise et notre engagement envers la qualité.",
      ],
      original: true,
    },
    {
      h2: "Comment les techniciens sont-ils formés ?",
      answer:
        "Directement chez les fabricants, chaque année, et aux dernières réglementations et normes de sécurité. Ils interviennent sur l'installation, la réparation et la maintenance des canalisations et des appareils gaz, avec du matériel conforme aux normes actuelles, dans les meilleurs délais et en toute transparence.",
      paras: [
        "Chez SERAGAZ, nous mettons un point d'honneur à former nos équipes aux dernières réglementations et normes de sécurité en vigueur. Tous nos techniciens sont qualifiés et formés directement chez les fabricants, ce qui nous permet de garantir des prestations de qualité et l'utilisation de matériel respectant les normes actuelles. Que ce soit pour l'installation, la réparation ou la maintenance de canalisation ou appareil gaz, nous intervenons dans les meilleurs délais et en toute transparence.",
        "Nous sommes station technique et référencés chez : Elm Leblanc, Frisquet, Saunier Duval, Chappée, De Dietrich.",
        "Nous sommes qualifiés : Partenaire GRDF, Qualibat RGE, PG PMG (Professionnel Gaz, installation et maintenance).",
      ],
      original: true,
    },
    {
      h2: "Nos valeurs : comment joindre l'équipe et suivre vos interventions ?",
      answer:
        "Par téléphone au 01 42 80 03 01, de 8 h à 12 h et de 14 h à 17 h, par e-mail ou directement dans les locaux de la rue de Dunkerque. Chaque client bénéficie d'un suivi personnalisé et d'un historique précis des interventions grâce aux outils informatiques de l'entreprise.",
      paras: [
        "La satisfaction de nos clients est au cœur de nos préoccupations. Nous sommes joignables facilement par téléphone de 8h à 12h et de 14h à 17h, par mail ou bien en nos locaux pour répondre à toutes vos questions et prendre rendez-vous. Grâce à nos outils informatiques, nous vous offrons un suivi personnalisé et un historique précis de nos interventions. Nous nous engageons à vous fournir un service de qualité, en toute sécurité et dans le respect des normes.",
      ],
      original: true,
    },
    {
      h2: "Pour qui SERAGAZ travaille-t-elle ?",
      answer:
        "Pour des syndics de gestion locative, des agences immobilières, des plombiers, des chauffagistes, des architectes, des commerçants et des particuliers. L'expérience accumulée depuis 1985 permet de répondre aux besoins propres à chacun, du simple entretien annuel au remplacement d'une chaudière dans un immeuble parisien.",
      paras: [
        "Nous travaillons avec une grande variété de clients, allant des syndics de gestion locative, aux agences immobilières, en passant par les plombiers, chauffagistes, architectes, commerçants et particuliers.",
        "Notre expérience et notre savoir-faire nous permettent de répondre aux besoins spécifiques de chacun de nos clients.",
      ],
      original: true,
    },
    {
      h2: "Pourquoi choisir SERAGAZ ?",
      answer:
        "Pour la constance et la qualité : des techniciens formés chaque année chez Elm Leblanc, Saunier Duval, De Dietrich, Chappée et Frisquet, une appellation Professionnel Gaz installation et maintenance auditée régulièrement par Qualigaz, et un partenariat avec GRDF, le gestionnaire du réseau de distribution de gaz.",
      paras: [
        "En choisissant SERAGAZ, vous optez pour la constance et la qualité. Nos techniciens suivent des formations annuelles directement chez les fabricants et sont reconnus par des marques de renom telles que ELM LEBLANC, SAUNIER DUVAL, DE DIETRICH, CHAPPÉE et FRISQUET. Dans le cadre de notre appellation Professionnel Gaz installation et maintenance, nous sommes également régulièrement audités par Qualigaz, leader dans le domaine de la sécurité gaz. Nous sommes aussi Partenaire GRDF.",
      ],
      original: true,
    },
  ],
  facts: [
    { label: "Famille", value: "Depuis 1903" },
    { label: "SERAGAZ", value: "Fondée en 1985" },
    { label: "Adresse", value: "69 rue de Dunkerque, Paris 9e" },
  ],
  faq: [
    {
      q: "Où se trouvent les locaux de SERAGAZ ?",
      a: "Au 69 rue de Dunkerque, 75009 Paris, à l'adresse où la famille Franche exerce depuis le début de son histoire. Vous pouvez y passer pour poser une question ou prendre rendez-vous, aux heures d'ouverture, ou appeler le 01 42 80 03 01.",
    },
    {
      q: "SERAGAZ travaille-t-elle pour les syndics et les agences ?",
      a: "Oui. Les syndics de gestion locative et les agences immobilières font partie des clients cités par l'entreprise, aux côtés des architectes, des commerçants, des plombiers, des chauffagistes et des particuliers. Précisez dans votre demande l'adresse de l'immeuble et le lot concerné.",
    },
    {
      q: "Sur quelles marques de chaudières SERAGAZ intervient-elle ?",
      a: "L'entreprise est station technique et référencée chez Elm Leblanc, Frisquet, Saunier Duval, Chappée et De Dietrich. Indiquez la marque et le modèle de votre appareil, visibles sur sa plaque signalétique, lors de votre demande.",
    },
  ],
  ctaTitle: "Une question sur votre installation gaz ?",
  ctaText: "Décrivez votre appareil et votre adresse : l'équipe de la rue de Dunkerque vous rappelle.",
  related: [PATHS.maintenance, PATHS.repair, PATHS.replacement],
};

export const repair: Page = {
  path: PATHS.repair,
  title: "Dépannage et entretien chaudière gaz Paris 9 | SERAGAZ",
  description:
    "Entretien annuel et dépannage de chaudière à gaz à Paris 9 par les chauffagistes SERAGAZ : nettoyage complet, attestation, diagnostic, réparation des pannes.",
  h1: "Dépannage de chaudière gaz à Paris 9 : entretien et réparation",
  kicker: "Dépannage de chaudière à gaz",
  lead: "Pour garantir votre sécurité et le bon fonctionnement de votre chaudière à gaz, nous proposons des services complets de dépannage et d'entretien à Paris 9.",
  brief:
    "Pour un dépannage de chaudière gaz à Paris 9, les chauffagistes de SERAGAZ établissent un diagnostic, réparent ou remplacent les pièces défectueuses, puis testent la sécurité de l'appareil. Ils assurent aussi l'entretien annuel obligatoire, avec nettoyage complet et attestation, sur les chaudières gaz récentes comme anciennes.",
  contactType: "depannage",
  service: "Dépannage et entretien de chaudière gaz",
  crumb: "Dépannage de chaudière gaz",
  sections: [
    {
      h2: "Comment prolonger la durée de vie de votre chaudière à gaz à Paris ?",
      answer:
        "En la faisant entretenir chaque année par un professionnel et en faisant intervenir un chauffagiste dès qu'un dysfonctionnement apparaît. Un appareil propre et bien réglé consomme moins, tombe moins souvent en panne et dure plus longtemps. SERAGAZ intervient sur tous les types de chaudières gaz à Paris 9.",
      paras: [
        "Pour garantir votre sécurité et le bon fonctionnement de votre chaudière à gaz, nous proposons des services complets de dépannage et d'entretien à Paris 9.",
        "Il est très important de prendre soin de votre chaudière à gaz afin de prolonger sa durée de vie et d'assurer son efficacité énergétique.",
      ],
      listTitle: "Nos prestations incluent :",
      list: [
        "L'entretien annuel complet, avec nettoyage approfondi et vérification de chaque composant de votre équipement.",
        "Le dépannage rapide, assuré par nos chauffagistes parisiens pour vous garantir un retour à la normale en un temps record.",
        "Des conseils personnalisés pour vous aider à optimiser les performances de votre chaudière et réaliser des économies d'énergie significatives.",
      ],
      after: [
        "Nous intervenons sur tous types de chaudières à gaz, qu'il s'agisse de modèles modernes ou de modèles plus anciens.",
        "Contactez nos chauffagistes pour planifier l'entretien annuel de votre chaudière à gaz ou pour tout dépannage urgent à Paris 9.",
      ],
      original: true,
    },
    {
      h2: "En quoi consiste l'entretien annuel d'une chaudière à gaz ?",
      answer:
        "En un nettoyage complet des composants, une vérification des sécurités, un contrôle des émissions et des réglages. C'est une obligation légale, comme le ramonage des conduits. Elle doit être réalisée par un professionnel pour prévenir les risques d'intoxication au monoxyde de carbone. Une attestation vous est remise ensuite.",
      paras: [
        "Un entretien régulier de votre chaudière à gaz est indispensable pour garantir votre sécurité, améliorer ses performances et réduire vos factures d'énergie.",
        "Comme pour le ramonage de vos conduits, l'entretien annuel de votre chaudière à gaz est une obligation légale inscrite dans la réglementation. Cet entretien doit être réalisé par un professionnel afin de garantir votre sécurité et de prévenir les risques d'intoxication au monoxyde de carbone.",
        "Nos chauffagistes à Paris 9 se tiennent à votre disposition pour réaliser l'entretien annuel de votre chaudière à gaz en toute sécurité. Nous pouvons également nous charger du désembouage de vos radiateurs pour optimiser l'efficacité de votre système de chauffage.",
      ],
      listTitle: "Avantages d'un entretien régulier :",
      list: [
        "Optimisation des performances de votre chaudière pour garantir une chaleur homogène dans tout votre logement.",
        "Réduction de votre consommation énergétique, vous permettant de réaliser des économies sur vos factures.",
        "Prolongation de la durée de vie de votre équipement, vous évitant des dépenses prématurées.",
        "Prévention des pannes et des dysfonctionnements pour une tranquillité d'esprit totale.",
      ],
      original: true,
    },
    {
      h2: "Étapes détaillées de l'intervention d'entretien",
      paras: ["Nos chauffagistes suivent une procédure précise pour garantir un entretien optimal :"],
      steps: [
        { t: "Nettoyage approfondi", d: "Des composants clés : corps de chauffe, brûleur, veilleuse et conduit d'évacuation des fumées." },
        { t: "Vérification des sécurités", d: "Des éléments de sécurité, incluant les détecteurs de monoxyde de carbone et les systèmes de coupure d'urgence." },
        { t: "Contrôle des émissions", d: "Des émissions de gaz afin de s'assurer que votre équipement respecte les normes environnementales." },
        { t: "Réglages personnalisés", d: "Pour optimiser la performance de votre chaudière et limiter sa consommation d'énergie." },
      ],
      after: ["Après chaque intervention, nous vous remettons une attestation d'entretien certifiant que votre équipement est conforme aux normes en vigueur."],
      original: true,
    },
    {
      h2: "Quelles pannes de chaudière gaz SERAGAZ peut-elle résoudre ?",
      answer:
        "Toutes les pannes courantes : absence de chauffage, baisse de pression, problème de veilleuse, disjonctions fréquentes, fuite de gaz ou d'eau. Les chauffagistes diagnostiquent la source du problème, réparent ou remplacent les pièces en cause et vérifient la sécurité de l'appareil avant de repartir de votre logement.",
      paras: [
        "En cas de panne ou de dysfonctionnement de votre chaudière à gaz, nos chauffagistes interviennent rapidement pour résoudre le problème et vous garantir un retour à la normale.",
        "Notre équipe de chauffagistes à Paris 9 est qualifiée pour résoudre toutes les pannes courantes telles que :",
      ],
      list: [
        "Absence de chauffage : souvent due à un problème de brûleur ou d'alimentation en gaz.",
        "Baisse de pression : pouvant causer une baisse de performance et des dysfonctionnements, généralement causée par une fuite d'eau.",
        "Problème de veilleuse : pouvant être réparé par un simple nettoyage ou un remplacement du thermocouple.",
        "Disjonction fréquente : souvent causée par une surchauffe due à un problème de circulation d'eau ou de pression.",
        "Fuite de gaz ou d'eau : nécessitant une intervention immédiate pour garantir votre sécurité.",
      ],
      after: ["Quel que soit le type de panne, nos chauffagistes sont équipés pour diagnostiquer et résoudre rapidement votre problème."],
      original: true,
    },
    {
      h2: "Notre processus de dépannage sur votre chaudière",
      steps: [
        { t: "Diagnostic complet", d: "Nos chauffagistes examinent votre chaudière et identifient la source du problème." },
        { t: "Réparation ou remplacement des pièces défectueuses", d: "Selon le cas, nous remplaçons les pièces endommagées pour rétablir le bon fonctionnement de votre équipement." },
        { t: "Tests de sécurité", d: "Pour s'assurer que votre chaudière est en bon état de marche et ne présente aucun risque pour vous et votre logement." },
        { t: "Conseils personnalisés", d: "Nos chauffagistes peuvent vous donner des conseils pour optimiser l'utilisation de votre chaudière et éviter les pannes à l'avenir." },
      ],
      after: ["En cas d'urgence, n'hésitez pas à nous contacter pour un dépannage rapide et efficace sur votre chaudière à gaz à Paris 9."],
      original: true,
    },
  ],
  faq: [
    {
      q: "Que faire si je sens une odeur de gaz chez moi ?",
      a: "N'actionnez aucun interrupteur, ne faites pas de flamme, ouvrez les fenêtres, fermez le robinet de gaz si vous le pouvez et sortez du logement. Appelez ensuite le numéro Urgence Sécurité Gaz de GRDF, le 0 800 47 33 33, gratuit et disponible jour et nuit.",
    },
    {
      q: "Ma chaudière affiche un code d'erreur : que dois-je noter avant d'appeler ?",
      a: "Notez le code affiché, la marque et le modèle de la chaudière, la pression indiquée sur le manomètre et ce qui s'est passé juste avant la panne. Ces informations, transmises par téléphone ou avec une photo dans le formulaire, aident le technicien à préparer son intervention.",
    },
    {
      q: "Le contrat d'entretien rend-il prioritaire en cas de panne ?",
      a: "Oui, selon le site de SERAGAZ : en souscrivant un contrat d'entretien, vous êtes prioritaire en cas de panne. La main-d'œuvre et le déplacement sont alors inclus, seules les pièces détachées restant éventuellement à votre charge.",
    },
  ],
  ctaTitle: "Besoin d'un dépannage ?",
  ctaText: "Appelez l'équipe ou décrivez la panne, photos à l'appui : un chauffagiste vous rappelle.",
  related: [PATHS.maintenance, PATHS.replacement, PATHS.descaling],
};

export const replacement: Page = {
  path: PATHS.replacement,
  title: "Installation et remplacement chaudière gaz Paris 9 | SERAGAZ",
  description:
    "Installation et remplacement de chaudières gaz à Paris 9 : étude du logement, choix du modèle (condensation, basse température), pose, mise en service.",
  h1: "Remplacement de chaudière gaz à Paris 9 : installation sur mesure",
  kicker: "Installation et remplacement de chaudières",
  lead: "Vous souhaitez installer une nouvelle chaudière à gaz ou remplacer votre ancien équipement ? Notre équipe de chauffagistes à Paris 9 est là pour vous !",
  brief:
    "Pour remplacer une chaudière gaz à Paris 9, SERAGAZ étudie votre logement, vos besoins en chauffage et en eau chaude et votre budget, puis conseille le type de chaudière adapté : condensation, basse température ou électrique. L'équipe pose l'appareil selon les normes, le met en service et recycle l'ancien.",
  contactType: "remplacement",
  service: "Installation et remplacement de chaudière gaz",
  crumb: "Remplacement de chaudière",
  photo: "accueil",
  sections: [
    {
      h2: "Pourquoi faire installer votre chaudière par SERAGAZ à Paris ?",
      answer:
        "Parce que l'équipe est référencée chez les grandes marques de chaudières à gaz, formée pour garantir une installation conforme aux normes en vigueur et habituée aux logements parisiens. Elle conseille le modèle selon vos besoins en eau chaude et en chauffage, puis assure la pose et la mise en service.",
      paras: ["Chauffez votre logement en toute sérénité avec notre installation de chaudière à Paris."],
      listTitle: "Nos interventions comprennent :",
      list: [
        "L'installation de chaudière performante et économique,",
        "Le remplacement de votre ancienne chaudière par un modèle plus récent,",
        "Des conseils personnalisés pour choisir le meilleur équipement en fonction de vos besoins en eau chaude et chauffage.",
      ],
      after: [
        "Nous collaborons et sommes référencés chez les plus grandes marques de chaudières à gaz et nous vous assurons un service de qualité.",
        "Notre équipe est formée pour répondre à toutes vos demandes et garantir une installation conforme aux normes en vigueur.",
        "Faites-nous confiance pour l'installation ou le remplacement de votre chaudière à Paris 9.",
      ],
      original: true,
    },
    {
      h2: "Installation sur mesure de chaudière à gaz à Paris 9",
      paras: [
        "Installer une nouvelle chaudière est une étape essentielle pour garantir votre confort thermique et maîtriser vos dépenses énergétiques, diminuer votre empreinte carbone et assurer votre sécurité.",
        "Une installation mal adaptée engendre des pertes d'efficacité, des surconsommations et un plus grand risque de panne. Pour éviter ces désagréments, notre équipe réalise une étude approfondie de votre logement afin de vous proposer une installation sur mesure pour répondre à vos besoins en chauffage et eau chaude sanitaire.",
      ],
      original: true,
    },
    {
      h2: "Quels types de chaudières proposons-nous ?",
      answer:
        "Trois familles, selon la configuration de votre logement : la chaudière à condensation, qui récupère la chaleur des fumées ; la chaudière basse température Bas NOx, lorsque la condensation n'est pas possible ; la chaudière électrique, lorsque les normes ne permettent pas de poser une chaudière à gaz.",
      list: [
        "Chaudières basse température : lorsque la configuration des lieux ne permet pas d'installer une chaudière à condensation. Les chaudières Bas NOx sont autorisées dans certaines conditions. En comparaison avec les anciennes chaudières atmosphériques, elles sont plus écologiques et économiques, tout en garantissant un excellent confort thermique.",
        "Chaudières à condensation : ces modèles innovants récupèrent la chaleur contenue dans les fumées. Elles proposent ainsi un rendement élevé et une réduction significative de votre consommation. Elles allient performance et sécurité.",
        "Chaudières électriques : lorsque la configuration des lieux ne permet pas le respect des normes pour la pose d'une chaudière à gaz, nous pouvons proposer l'installation d'une chaudière électrique.",
      ],
      after: ["Nos chauffagistes parisiens vous conseillent sur le choix de la chaudière à gaz adaptée en fonction de votre budget et des caractéristiques de votre logement."],
      original: true,
    },
    {
      h2: "Les étapes de l'installation de votre chaudière",
      steps: [
        { t: "Analyse de vos besoins", d: "Nous évaluons la superficie de votre logement, son isolation, vos besoins en eau chaude sanitaire ainsi que votre budget pour bien vous conseiller." },
        { t: "Conseil et choix du modèle", d: "En fonction de vos besoins, nous vous orientons vers le type et le modèle de chaudière le plus adapté." },
        { t: "Installation professionnelle", d: "Nos chauffagistes procèdent à la pose de votre équipement en respectant les normes en vigueur pour assurer votre sécurité et une performance optimale." },
        { t: "Mise en service et réglages", d: "Nous vérifions que votre chaudière fonctionne correctement et nous vous expliquons son fonctionnement pour une bonne utilisation." },
      ],
      after: [
        "Faites-nous confiance pour installer votre nouvelle chaudière dans votre logement.",
        "Sachez aussi qu'il est très important d'assurer l'entretien de votre chaudière à gaz tous les ans pour garantir son bon fonctionnement. Notre équipe vous propose également des contrats d'entretien adaptés à vos besoins.",
      ],
      original: true,
    },
    {
      h2: "Quand faut-il remplacer votre chaudière à gaz ?",
      answer:
        "Lorsque l'appareil a plus de quinze ans et que son rendement baisse, que la consommation augmente malgré l'entretien, que les pannes se répètent ou qu'il ne chauffe plus correctement le logement ou l'eau sanitaire. Remplacer au bon moment évite des dépannages répétés et optimise la consommation d'énergie.",
      paras: [
        "Votre ancienne chaudière montre des signes de faiblesse ou consomme trop d'énergie ? Remplacer votre équipement est une décision judicieuse pour améliorer votre confort tout en réduisant vos dépenses énergétiques.",
        "Il est préférable d'envisager le remplacement de votre chaudière lorsque :",
      ],
      list: [
        "Votre appareil a plus de 15 ans et son rendement diminue,",
        "Votre consommation d'énergie augmente malgré vos efforts d'entretien,",
        "Vous rencontrez des pannes régulières ou des dysfonctionnements,",
        "Votre chaudière ne chauffe plus correctement votre logement ou l'eau sanitaire.",
      ],
      after: ["Un remplacement au bon moment permet d'éviter les dépenses liées à des dépannages répétés et d'optimiser votre consommation énergétique."],
      original: true,
    },
    {
      h2: "Quelles économies réaliser avec une nouvelle chaudière ?",
      answer:
        "Selon SERAGAZ, une chaudière à gaz plus performante permet d'économiser jusqu'à 30 % sur la consommation énergétique. Un système de régulation et la programmation de l'appareil réduisent encore les dépenses. Le remplacement est donc, pour l'entreprise, un investissement rentable à long terme, à étudier logement par logement.",
      paras: [
        "En choisissant une chaudière à gaz plus performante, vous pouvez économiser jusqu'à 30 % sur votre consommation énergétique. De plus, en installant un système de régulation et en programmant votre équipement, vous pouvez réduire davantage vos dépenses d'énergie.",
        "Le remplacement de votre chaudière à gaz est donc un investissement rentable à long terme.",
      ],
      original: true,
    },
    {
      h2: "Nos services de remplacement de chaudière à Paris 9",
      paras: ["Notre équipe vous accompagne pour remplacer votre chaudière à gaz avec :"],
      list: [
        "Le diagnostic de votre ancienne chaudière : nos chauffagistes évaluent l'état de votre installation actuelle pour vous proposer la solution la plus appropriée.",
        "Des conseils personnalisés : nous vous guidons dans le choix du modèle le plus performant et le plus économique.",
        "Un remplacement rapide et efficace : nos techniciens assurent une intervention propre, rapide et conforme aux normes en vigueur.",
        "Le recyclage de votre ancienne chaudière : nous prenons en charge l'évacuation et le recyclage de votre ancien appareil pour une gestion écoresponsable.",
      ],
      after: [
        "Notre entreprise est certifiée RGE (Reconnu Garant de l'Environnement) et nos chauffagistes sont qualifiés pour vous proposer un service de qualité et respectueux de l'environnement.",
        "N'hésitez pas à nous contacter pour le remplacement de votre chaudière à gaz à Paris 9.",
      ],
      original: true,
    },
  ],
  faq: [
    {
      q: "Peut-on toujours installer une chaudière à condensation dans un immeuble parisien ?",
      a: "Pas toujours : tout dépend du conduit d'évacuation des fumées et de la configuration du logement. Lorsque la condensation n'est pas possible, SERAGAZ propose une chaudière basse température Bas NOx, autorisée dans certaines conditions, ou une chaudière électrique.",
    },
    {
      q: "Que devient mon ancienne chaudière après le remplacement ?",
      a: "L'équipe prend en charge son évacuation et son recyclage, comme l'indique la page remplacement du site de SERAGAZ. Vous n'avez pas à organiser vous-même l'enlèvement de l'appareil déposé.",
    },
    {
      q: "Combien coûte le remplacement d'une chaudière gaz à Paris 9 ?",
      a: "Le prix dépend du modèle retenu, du conduit, des travaux d'adaptation et des aides éventuelles. SERAGAZ établit un devis gratuit après étude du logement : décrivez votre appareil actuel et joignez une photo de sa plaque signalétique à votre demande.",
    },
  ],
  ctaTitle: "Votre chaudière a fait son temps ?",
  ctaText: "Demandez une étude de votre logement et un devis gratuit pour son remplacement.",
  related: [PATHS.maintenance, PATHS.repair, PATHS.descaling],
};

export const descaling: Page = {
  path: PATHS.descaling,
  title: "Détartrage et désembouage chauffage Paris 9 | SERAGAZ",
  description:
    "Détartrage de chaudière et désembouage du circuit de chauffage à Paris 9 : radiateurs froids en bas, bruits, surconsommation. Diagnostic signé SERAGAZ.",
  h1: "Désembouage à Paris 9 : détartrage de chaudière et circuit de chauffage",
  kicker: "Détartrage et désembouage",
  lead: "Vous êtes à Paris et souhaitez améliorer le confort thermique de votre logement tout en réduisant vos factures énergétiques ? Nos prestations de désembouage de système de chauffage sont la solution idéale.",
  brief:
    "Le désembouage à Paris 9 élimine les boues accumulées dans le circuit de chauffage ; le détartrage retire le calcaire de la chaudière. SERAGAZ injecte un produit désembouant professionnel, rince le circuit et purge les radiateurs. Résultat recherché : une chaleur mieux répartie, moins de pannes et une consommation maîtrisée.",
  contactType: "desembouage",
  service: "Détartrage de chaudière et désembouage de circuit de chauffage",
  crumb: "Détartrage et désembouage",
  sections: [
    {
      h2: "Pourquoi faire désembouer votre système de chauffage à Paris ?",
      answer:
        "Parce que le calcaire et les boues s'accumulent avec le temps dans la chaudière et les radiateurs. Ils freinent la circulation de l'eau chaude, provoquent une surconsommation de gaz et des pannes. Un détartrage et un désembouage rétablissent la performance et l'homogénéité de la chaleur dans le logement.",
      paras: ["Nous vous proposons des prestations complètes pour assurer le bon fonctionnement de votre système de chauffage :"],
      list: [
        "Détartrage de chaudière, afin d'éliminer les dépôts de calcaire et de restaurer les performances de votre équipement.",
        "Désembouage du circuit de chauffage, pour établir une circulation optimale de l'eau chaude et assurer une chaleur homogène.",
      ],
      after: [
        "Grâce à nos interventions de désembouage, vous bénéficiez d'un chauffage performant tout au long de l'année.",
        "Contactez nos chauffagistes pour un diagnostic personnalisé et une intervention sur votre système de chauffage à Paris 9.",
      ],
      original: true,
    },
    {
      h2: "Détartrage de chaudière à Paris 9 : offrez à votre équipement une seconde jeunesse !",
      paras: [
        "Le détartrage est indispensable pour éliminer les dépôts de calcaire et rétablir le bon fonctionnement de votre installation.",
        "Nos chauffagistes utilisent des méthodes professionnelles pour éliminer efficacement le calcaire sans endommager votre équipement.",
        "Le détartrage permet également de prolonger la durée de vie de votre chaudière et de réduire les risques de pannes. Notre intervention commence par un diagnostic précis pour évaluer l'état de votre installation.",
        "Un détartrage améliore les performances de votre appareil et prévient les pannes coûteuses. N'hésitez pas à nous contacter pour programmer une intervention à Paris 9 dans les meilleurs délais.",
      ],
      original: true,
    },
    {
      h2: "Comment se déroule le désembouage du circuit de chauffage ?",
      answer:
        "Le chauffagiste injecte un produit désembouant professionnel dans le circuit, procède à un rinçage minutieux pour éliminer les boues, puis purge les radiateurs pour évacuer les derniers résidus. Le désembouage est recommandé en cas de baisse de performance du chauffage ou après une installation récente.",
      paras: [
        "Les boues et les impuretés qui s'accumulent dans le circuit de chauffage peuvent entraver la circulation de l'eau chaude, entraînant une baisse de performance de votre système.",
        "Pour y remédier, notre équipe réalise un désembouage en profondeur pour éliminer les boues et assurer une circulation fluide de l'eau.",
      ],
      listTitle: "Le désembouage de votre circuit de chauffage présente plusieurs avantages :",
      list: [
        "Amélioration du rendement énergétique",
        "Réduction des coûts de chauffage",
        "Prévention des pannes et des dysfonctionnements",
        "Meilleure répartition de la chaleur dans toutes les pièces",
      ],
      after: [
        "Nos chauffagistes injectent un produit désembouant professionnel dans le circuit et procèdent à un rinçage minutieux pour éliminer les boues. Ensuite, nous réalisons la purge des radiateurs pour évacuer les derniers résidus.",
        "En plus de l'entretien régulier, un désembouage est recommandé en cas de baisse de performance de votre chauffage ou d'une installation récente.",
        "Contactez-nous pour un désembouage efficace à Paris 9 et profitez d'un confort thermique dans toutes vos pièces.",
      ],
      original: true,
    },
    {
      h2: "Quelles sont les conséquences d'un manque d'entretien ?",
      answer:
        "Des radiateurs qui chauffent moins bien, une consommation d'énergie en hausse, une usure prématurée des pompes, vannes et échangeurs, et des pannes plus fréquentes. Les dépôts de boues et de tartre finissent par obstruer les conduits et bloquer le bon fonctionnement de toute l'installation de chauffage.",
      paras: ["Un circuit de chauffage encombré peut provoquer plusieurs dysfonctionnements :"],
      list: [
        "Diminution de la performance thermique : les radiateurs chauffent moins bien et restent froids en partie basse, même lorsque la chaudière fonctionne normalement. Cela conduit à une sensation d'inconfort dans votre logement.",
        "Augmentation de votre consommation énergétique : votre système doit fonctionner plus longtemps et plus intensément pour maintenir la température souhaitée, ce qui impacte directement vos factures.",
        "Usure prématurée de vos équipements : les composants de votre système de chauffage (pompes, vannes, échangeurs thermiques) subissent davantage de contraintes et risquent de tomber en panne plus rapidement.",
        "Risque de pannes fréquentes : les dépôts de boues et de tartre peuvent obstruer les conduits et bloquer le bon fonctionnement de votre installation.",
      ],
      original: true,
    },
    {
      h2: "Quels signes indiquent qu'un désembouage est nécessaire ?",
      answer:
        "Des radiateurs tièdes ou froids alors que la chaudière tourne, un chauffage lent à monter en température, des bruits dans les canalisations ou la chaudière, une baisse de pression ou de petites fuites, une consommation qui augmente sans raison apparente. Chacun de ces signes justifie un diagnostic.",
      paras: ["Pour identifier rapidement si votre installation nécessite un détartrage ou un désembouage, soyez attentif à ces signes :"],
      list: [
        "Vos radiateurs restent tièdes ou froids malgré une chaudière en marche.",
        "Votre système de chauffage met plus de temps que d'habitude à atteindre la température souhaitée.",
        "Vous entendez des bruits inhabituels dans vos canalisations ou au niveau de votre chaudière (sifflements, gargouillements).",
        "Vous constatez une baisse de pression dans votre circuit ou des fuites d'eau à certains endroits de votre installation.",
        "Votre consommation énergétique augmente sans raison apparente, traduisant une perte d'efficacité du système.",
      ],
      after: ["Un désembouage régulier est la meilleure solution pour préserver la performance de votre installation et garantir votre confort tout au long de l'année."],
      original: true,
    },
  ],
  faq: [
    {
      q: "Le désembouage concerne-t-il aussi le chauffage collectif d'un immeuble ?",
      a: "Le site de SERAGAZ décrit le désembouage d'un réseau de radiateurs alimenté par une chaudière. Pour une chaufferie collective, précisez-le dans votre demande avec les coordonnées du syndic : l'équipe vous dira si l'intervention entre dans son périmètre.",
    },
    {
      q: "Faut-il être présent pendant le désembouage ?",
      a: "Oui, il faut donner accès à la chaudière et à chacun des radiateurs, puisque le technicien les purge un par un à la fin de l'intervention. Prévoyez de dégager l'accès aux radiateurs et aux robinets avant son arrivée.",
    },
    {
      q: "Un radiateur froid en bas et chaud en haut, est-ce de la boue ?",
      a: "C'est l'un des signes les plus fréquents d'un circuit embourbé, cité par SERAGAZ. À l'inverse, un radiateur froid en haut et chaud en bas manque plutôt de purge. Dans le doute, un diagnostic évite d'engager un désembouage inutile.",
    },
  ],
  ctaTitle: "Des radiateurs qui chauffent mal ?",
  ctaText: "Décrivez les symptômes et le nombre de radiateurs : SERAGAZ vous propose un diagnostic.",
  related: [PATHS.repair, PATHS.maintenance, PATHS.replacement],
};

export const sweeping: Page = {
  path: PATHS.sweeping,
  title: "Ramonage cheminée et chaudière à gaz Paris 9 | SERAGAZ",
  description:
    "Ramonage du conduit de chaudière gaz à tirage naturel à Paris 9 : protection des abords, nettoyage, contrôle du tirage et attestation pour votre assurance.",
  h1: "Ramonage à Paris 9 : conduit de cheminée et chaudière à gaz",
  kicker: "Ramoneur professionnel à Paris 9",
  lead: "Vous êtes propriétaire d'une chaudière à tirage naturel dans votre logement à Paris 9 ? Alors, vous savez sûrement qu'il est obligatoire de réaliser le ramonage une fois par an pour garantir la sécurité et le bon fonctionnement de l'installation.",
  brief:
    "Le ramonage à Paris 9 concerne les chaudières gaz à tirage naturel, raccordées à un conduit de cheminée. SERAGAZ protège les abords, nettoie le conduit, contrôle son état et le tirage, puis remet une attestation exigée par les assurances. Réalisé avec l'entretien de la chaudière, il bénéficie d'une remise commerciale.",
  contactType: "ramonage",
  service: "Ramonage de conduit de chaudière gaz",
  crumb: "Ramonage",
  sections: [
    {
      h2: "Pourquoi ramoner le conduit de votre chaudière à gaz à Paris ?",
      answer:
        "Parce que c'est une obligation et une sécurité : le ramonage prévient les risques d'incendie et d'intoxication au monoxyde de carbone en assurant une évacuation correcte des fumées. Il améliore aussi le rendement de la chaudière. L'attestation remise ensuite peut être exigée par votre assurance en cas de sinistre.",
      paras: ["Nous vous proposons des prestations pour être en conformité avec la loi et pour garantir le bon fonctionnement de vos installations :"],
      list: [
        "Ramonage de cheminée de la chaudière pour prévenir les risques d'incendie, assurer une évacuation optimale des fumées et éviter une intoxication au monoxyde de carbone.",
      ],
      after: [
        "Grâce à notre expertise et à notre savoir-faire, nous assurons des interventions rapides et efficaces pour votre sécurité et votre confort.",
        "Contactez-nous pour planifier le ramonage de votre conduit de chaudière à gaz. Réalisez le ramonage en même temps que l'entretien de votre chaudière et bénéficiez d'une remise commerciale.",
      ],
      original: true,
    },
    {
      h2: "Service de ramonage professionnel à Paris 9 : notre intervention rigoureuse",
      paras: [
        "Notre équipe de ramoneurs se déplace chez vous à Paris 9 pour des prestations de ramonage minutieuses et rigoureuses. Nous vous garantissons des services de fumisterie complets et conformes aux normes en vigueur.",
        "Nos ramoneurs procèdent à une intervention soignée et efficace :",
      ],
      steps: [
        { t: "Protection des abords", d: "Pour éviter toute salissure dans votre intérieur." },
        { t: "Nettoyage complet du conduit", d: "Pour éliminer les dépôts de suie et autres résidus." },
        { t: "Contrôle visuel", d: "Pour détecter d'éventuelles fissures ou obstructions." },
        { t: "Vérification du tirage", d: "Pour s'assurer du bon écoulement des fumées." },
      ],
      original: true,
    },
    {
      h2: "À quoi sert l'attestation de ramonage ?",
      answer:
        "Elle prouve que le conduit a été ramoné conformément aux normes en vigueur. Ce document est indispensable pour votre assurance habitation : en cas de sinistre, l'assureur peut exiger cette preuve d'entretien pour vous indemniser. SERAGAZ la remet à l'issue de chaque intervention de ramonage.",
      paras: [
        "À l'issue de notre intervention, nous vous remettons une attestation de ramonage conforme aux normes en vigueur. Ce document est indispensable pour votre assurance habitation.",
        "Le ramonage est bien plus qu'une simple obligation : il garantit votre sécurité et optimise les performances de vos installations.",
        "Le ramonage est une obligation imposée par la loi. En cas de sinistre, votre assurance peut exiger la preuve de cet entretien pour vous indemniser. Un ramonage régulier permet d'éviter les risques d'intoxication au monoxyde de carbone et les incendies de conduit.",
      ],
      listTitle: "Le ramonage de votre chaudière à gaz permet de :",
      list: [
        "Réduire les émissions polluantes en assurant une combustion propre.",
        "Améliorer l'efficacité énergétique en optimisant le rendement.",
        "Prévenir les pannes et prolonger la durée de vie de votre équipement.",
      ],
      original: true,
    },
    {
      h2: "Ramonage de chaudière à gaz : améliorez vos performances énergétiques",
      paras: [
        "Une chaudière mal entretenue peut perdre du rendement et consommer davantage d'énergie. En réalisant un ramonage régulier des conduits, vous pouvez réaliser des économies sur votre facture de chauffage.",
      ],
      listTitle: "Lors de notre intervention, nous réalisons :",
      list: [
        "Un nettoyage minutieux du conduit d'évacuation.",
        "Un contrôle des pièces clés pour vérifier leur état et prévenir les défaillances.",
        "Une vérification des émissions de gaz pour assurer votre sécurité.",
      ],
      after: ["Contactez-nous pour le ramonage de votre chaudière à Paris 9 et bénéficiez d'un équipement performant et sécurisé."],
      original: true,
    },
    {
      h2: "Quand effectuer votre ramonage ?",
      answer:
        "Au moins une fois par an pour les chaudières à gaz et deux fois par an pour les cheminées en fonctionnement régulier, selon SERAGAZ. L'entreprise recommande d'anticiper l'intervention avant l'hiver, pour que les installations soient prêtes et performantes avant l'arrivée des jours les plus froids.",
      paras: [
        "Faire ramoner votre cheminée et votre chaudière vous permet de réduire les risques d'incendie et d'intoxication, d'améliorer le rendement énergétique de vos installations et de préserver vos équipements en limitant l'accumulation de suie et de dépôts.",
        "Le ramonage doit être réalisé au moins une fois par an pour les chaudières à gaz et deux fois par an pour les cheminées en fonctionnement régulier. Nous vous recommandons d'anticiper cette intervention avant l'hiver pour assurer la performance de vos installations avant les jours les plus froids.",
      ],
      original: true,
    },
  ],
  faq: [
    {
      q: "Ma chaudière à ventouse doit-elle être ramonée ?",
      a: "Le ramonage décrit par SERAGAZ concerne les chaudières à tirage naturel, raccordées à un conduit de cheminée. Une chaudière à ventouse est contrôlée lors de son entretien annuel. Indiquez le type de votre appareil dans votre demande : l'équipe vous dira ce qui s'applique.",
    },
    {
      q: "Peut-on grouper le ramonage et l'entretien de la chaudière ?",
      a: "Oui, et c'est conseillé par l'entreprise : en réalisant le ramonage en même temps que l'entretien de votre chaudière, vous bénéficiez d'une remise commerciale. Les titulaires d'un contrat d'entretien profitent d'un tarif préférentiel sur le ramonage.",
    },
    {
      q: "Faut-il préparer quelque chose avant le passage du ramoneur ?",
      a: "Dégagez l'accès à la chaudière et au départ du conduit, et prévenez si l'accès au conduit passe par des parties communes. Les abords sont protégés par l'équipe pendant l'intervention pour éviter toute salissure.",
    },
  ],
  ctaTitle: "Le ramonage annuel approche ?",
  ctaText: "Planifiez-le avant l'hiver, en même temps que l'entretien de votre chaudière.",
  related: [PATHS.maintenance, PATHS.repair, PATHS.meter],
};

export const meter: Page = {
  path: PATHS.meter,
  title: "Déplacement compteur gaz Paris 9 : partenaire GRDF | SERAGAZ",
  description:
    "Déplacement de compteur gaz à Paris 9 par SERAGAZ, Partenaire GRDF : rénovation, sécurité, commodité. Techniciens formés et audités par Qualigaz. Devis gratuit.",
  h1: "Déplacement de compteur gaz à Paris 9 avec un partenaire GRDF",
  kicker: "Partenaire GRDF · Déplacement de compteur",
  lead: "Chez SERAGAZ, nous sommes spécialisés dans le déplacement de compteur gaz, garantissant des prestations de qualité et respectant les normes de sécurité en vigueur.",
  brief:
    "Pour un déplacement de compteur gaz à Paris 9, SERAGAZ, Partenaire GRDF, intervient lors d'une rénovation, pour une raison de sécurité ou de commodité. Ses techniciens, formés chaque année chez les fabricants et audités par Qualigaz au titre de l'appellation Professionnel Gaz, réalisent une installation conforme et sécurisée.",
  contactType: "compteur",
  service: "Déplacement de compteur gaz",
  crumb: "Déplacement de compteur",
  sections: [
    {
      h2: "Pourquoi déplacer un compteur gaz à Paris ?",
      answer:
        "Pour une rénovation, une question de sécurité ou simplement de commodité, par exemple lors du réaménagement d'une cuisine ou d'une entrée. SERAGAZ adapte le déplacement à vos exigences, dans le respect des normes de sécurité en vigueur, avec des techniciens qualifiés qui interviennent rapidement et efficacement.",
      paras: [
        "Chez SERAGAZ, nous sommes spécialisés dans le déplacement de compteur gaz, garantissant des prestations de qualité et respectant les normes de sécurité en vigueur. Nos techniciens qualifiés interviennent rapidement et efficacement pour répondre à vos besoins spécifiques.",
        "Que ce soit pour des raisons de rénovation, de sécurité ou de commodité, nous assurons un service de déplacement de compteur gaz adapté à vos exigences.",
      ],
      original: true,
    },
    {
      h2: "Que change le statut de Partenaire GRDF ?",
      answer:
        "Il apporte à SERAGAZ une expertise reconnue et un soutien technique de GRDF, le gestionnaire du réseau de distribution de gaz. Cette collaboration permet de proposer des solutions conformes aux standards les plus élevés. Les techniciens suivent des formations régulières et sont certifiés pour intervenir sur les installations gaz.",
      paras: [
        "En tant que partenaire de GRDF, nous bénéficions d'une expertise reconnue et d'un soutien technique de premier ordre. Cette collaboration nous permet de vous offrir des solutions optimisées et conformes aux standards les plus élevés de l'industrie. Nos techniciens suivent des formations régulières et sont certifiés pour intervenir sur les installations de gaz, garantissant ainsi la sécurité et la fiabilité de nos services.",
      ],
      original: true,
    },
    {
      h2: "Pourquoi nous choisir pour votre compteur gaz ?",
      answer:
        "Pour la constance et la qualité : formations annuelles chez les fabricants, appellation Professionnel Gaz installation et maintenance avec audits réguliers de Qualigaz, et partenariat GRDF. Le devis est gratuit : appelez le 01 42 80 03 01 de 8 h à 12 h et de 14 h à 17 h, ou écrivez.",
      paras: [
        "En choisissant SERAGAZ, vous optez pour la constance et la qualité. Nos techniciens suivent des formations annuelles directement chez les fabricants. Dans le cadre de notre appellation Professionnel Gaz installation et maintenance, nous sommes également régulièrement audités par Qualigaz, leader dans le domaine de la sécurité gaz.",
        "Pour plus d'informations ou pour demander un devis gratuit, n'hésitez pas à nous contacter. Nous sommes joignables facilement par téléphone au 01 42 80 03 01 de 8h à 12h et de 14h à 17h ou bien par mail.",
      ],
      original: true,
    },
    {
      h2: "Comment préparer votre demande de déplacement de compteur ?",
      answer:
        "Indiquez l'adresse exacte, l'étage, l'emplacement actuel du compteur et celui que vous envisagez, la raison du déplacement et, en copropriété, les coordonnées du syndic. Une ou deux photos du compteur et de son environnement, jointes au formulaire, permettent à l'équipe de préparer un devis précis.",
      paras: [
        "Un compteur gaz se trouve souvent dans une gaine palière, un placard de cuisine ou une entrée, selon l'âge et la disposition de l'immeuble. Le déplacer touche à la conduite qui l'alimente et à la distribution intérieure jusqu'aux appareils : c'est pourquoi l'étude des lieux passe avant toute proposition.",
        "Dans un immeuble en copropriété, les parties communes et les colonnes montantes relèvent d'autorisations particulières : signalez-le dès votre premier message pour que les bons interlocuteurs soient associés au projet.",
      ],
    },
  ],
  faq: [
    {
      q: "Le déplacement du compteur gaz nécessite-t-il l'intervention de GRDF ?",
      a: "Le compteur et le branchement appartiennent au réseau de distribution géré par GRDF. En tant que Partenaire GRDF, SERAGAZ vous explique, lors de l'étude, la répartition des travaux entre le distributeur et l'installateur pour votre situation précise.",
    },
    {
      q: "Peut-on déplacer un compteur gaz dans le cadre d'une rénovation de cuisine ?",
      a: "C'est l'une des raisons citées par SERAGAZ : la rénovation, aux côtés de la sécurité et de la commodité. Prévenez l'équipe tôt dans votre projet, avant que les meubles et les finitions ne soient arrêtés.",
    },
    {
      q: "Le devis pour un déplacement de compteur est-il gratuit ?",
      a: "Oui, le devis est gratuit selon le site de SERAGAZ. Il est établi après étude de votre installation : joignez des photos à votre demande pour gagner du temps.",
    },
  ],
  ctaTitle: "Un compteur gaz à déplacer ?",
  ctaText: "Décrivez votre projet et joignez quelques photos : devis gratuit.",
  related: [PATHS.replacement, PATHS.repair, PATHS.presentation],
};

export const originalPages = [presentation, repair, replacement, descaling, sweeping, meter];

export const reviewsPage: Page = {
  path: PATHS.reviews,
  title: "Avis clients SERAGAZ, chauffagiste à Paris 9 : note Google",
  description:
    "Avis clients de SERAGAZ, chauffagiste à Paris 9 : note Google de 4,7/5 sur 310 avis relevée le 20 octobre 2026, comment laisser un avis et joindre l'entreprise.",
  h1: "Avis clients SERAGAZ, chauffagiste à Paris 9 : la note Google",
  kicker: "Avis clients",
  lead: "La satisfaction de nos clients est au cœur de nos préoccupations. Les avis laissés sur la fiche Google de SERAGAZ en témoignent : vous pouvez les lire, et laisser le vôtre, directement sur Google.",
  brief:
    "Les avis clients de SERAGAZ, chauffagiste à Paris 9, sont publiés sur sa fiche Google : la note relevée le 20 octobre 2026 est de 4,7 sur 5, pour 310 avis. Cette page explique comment lire cette note, comment laisser votre propre avis et comment joindre l'entreprise après une intervention.",
  contactType: "autre",
  crumb: "Avis clients",
  photo: "dunkerque",
  facts: [
    { label: "Note Google", value: "4,7 / 5" },
    { label: "Avis", value: "310" },
    { label: "Relevé", value: "20/10/2026" },
  ],
  sections: [
    {
      h2: "Quelle est la note de SERAGAZ sur Google ?",
      answer:
        "4,7 sur 5, pour 310 avis, d'après la fiche Google de l'entreprise consultée le 20 octobre 2026. La note évolue à chaque nouvel avis : la fiche Google reste la source à jour. Les avis eux-mêmes ne sont pas reproduits ici, pour respecter leurs auteurs.",
      paras: [
        "Une fiche Google réunit les avis de clients qui ont fait appel à l'entreprise : entretiens annuels, dépannages, remplacements de chaudière. Chaque avis porte une note de une à cinq étoiles et, souvent, un commentaire qui décrit l'intervention et le technicien venu sur place.",
        "Pour consulter les avis complets, ouvrez la fiche Google de SERAGAZ depuis le lien de cette page ou en cherchant « SERAGAZ Paris » dans Google Maps.",
      ],
    },
    {
      h2: "Comment laisser un avis après une intervention ?",
      answer:
        "Ouvrez la fiche Google de SERAGAZ, choisissez « Donner un avis », attribuez une note puis décrivez l'intervention en quelques phrases : le type de travaux, l'arrondissement, ce qui vous a semblé utile. Un compte Google est nécessaire. L'avis devient visible après la vérification automatique de Google.",
      paras: [
        "Un avis précis aide les prochains clients : il vaut mieux écrire « entretien annuel d'une chaudière Saunier Duval dans le 9e, explications claires » que « très bien ». Évitez d'y mettre votre adresse ou votre numéro de téléphone.",
      ],
    },
    {
      h2: "Que faire si une intervention ne vous a pas satisfait ?",
      answer:
        "Contactez directement l'entreprise, par téléphone au 01 42 80 03 01 ou par le formulaire, en précisant la date et l'adresse de l'intervention. Grâce à ses outils informatiques, SERAGAZ conserve l'historique précis de ses interventions, ce qui permet de retrouver rapidement le dossier et d'apporter une réponse.",
      paras: [
        "La satisfaction de nos clients est au cœur de nos préoccupations. Nous nous engageons à vous fournir un service de qualité, en toute sécurité et dans le respect des normes.",
      ],
      original: true,
    },
    {
      h2: "Qui sont les clients de SERAGAZ ?",
      answer:
        "Des particuliers, mais aussi des syndics de gestion locative, des agences immobilières, des plombiers, des chauffagistes, des architectes et des commerçants. Beaucoup confient à l'entreprise l'entretien annuel de leurs chaudières depuis de nombreuses années, à Paris et dans les communes voisines de la petite couronne.",
      paras: [
        "Cette diversité explique la variété des avis : un entretien de routine dans un deux-pièces du 9e, un dépannage un soir d'hiver dans le 18e ou le remplacement d'une chaudière ancienne dans un grand appartement du 17e ne racontent pas la même histoire.",
      ],
    },
  ],
  faq: [
    {
      q: "Les avis Google sont-ils vérifiés ?",
      a: "Google applique ses propres règles de modération et retire les avis qui ne les respectent pas. SERAGAZ ne peut ni modifier ni supprimer un avis, mais elle peut y répondre publiquement depuis sa fiche.",
    },
    {
      q: "Puis-je laisser un avis sans compte Google ?",
      a: "Non, Google demande d'être connecté à un compte pour publier un avis. Vous pouvez aussi transmettre votre retour directement à l'entreprise par téléphone ou par le formulaire de contact.",
    },
    {
      q: "Pourquoi la note affichée ici peut-elle différer de celle de Google ?",
      a: "Parce qu'elle a été relevée à une date donnée, le 20 octobre 2026. Chaque nouvel avis peut faire varier la note et le nombre d'avis : la fiche Google fait foi.",
    },
  ],
  ctaTitle: "Vous aussi, confiez-nous votre chaudière",
  ctaText: "Entretien, panne ou remplacement : demandez votre devis gratuit.",
  related: [PATHS.presentation, PATHS.maintenance, PATHS.repair],
};
