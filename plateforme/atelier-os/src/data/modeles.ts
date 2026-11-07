import type { Modele } from "@/lib/types";

const SIGNATURE = "Firas\n\nAtelier Truelle · [téléphone]";

/**
 * Les 7 e-mails du parcours (prospection/parcours-commercial-atelier-truelle.docx)
 * plus l'e-mail de confirmation envoyé après l'appel. Les textes entre crochets
 * sont remplis pour chaque prospect.
 */
export const MODELES: Modele[] = [
  {
    id: "m1",
    numero: 1,
    nom: "La maquette",
    quand: "J0 · premier envoi",
    objet: "Votre site",
    corps: `Bonjour Monsieur [Nom],

Je regardais les sites des entreprises de [plomberie] du [16e] et je suis passé sur le vôtre. [Constat simple, en une phrase : il commence à dater, et sur téléphone il est difficile à lire.] C'est dommage pour une maison comme la vôtre.

Je fais des sites pour les artisans, alors je me suis permis de refaire le vôtre, avec vos textes et vos photos. Vous pouvez le voir ici : [lien]

Ça ne vous engage à rien. Si ça vous plaît, on en parle, et on peut le modifier comme vous voulez. Sinon, pas de souci, je le supprime.

Je me permettrai de vous appeler la semaine prochaine pour avoir votre avis.

${SIGNATURE}

PS : si vous préférez que je ne vous écrive plus, dites-le moi simplement.`,
  },
  {
    id: "m2",
    numero: 2,
    nom: "La relance",
    quand: "J+4 · seulement sans réponse",
    objet: "Re : Votre site",
    corps: `Bonjour Monsieur [Nom],

Je reviens vers vous pour la maquette de votre site : [lien]

Vous avez pu y jeter un œil ?

${SIGNATURE}`,
  },
  {
    id: "m3",
    numero: 3,
    nom: "Le dernier message",
    quand: "J+10 · seulement sans réponse",
    objet: "Re : Votre site",
    corps: `Bonjour Monsieur [Nom],

Je ne vais pas vous embêter plus longtemps, vous avez sûrement d'autres priorités.

Je laisse la maquette en ligne encore quinze jours si vous voulez la regarder à tête reposée : [lien]

Bonne continuation,

${SIGNATURE}`,
  },
  {
    id: "m-confirmation",
    numero: 0,
    nom: "Confirmation après l'appel",
    quand: "Dans l'heure qui suit l'appel",
    objet: "Notre rendez-vous de [jour]",
    corps: `Bonjour Monsieur [Nom],

Merci pour tout à l'heure. Je passe donc [jour] à [heure] [à l'agence, rue …].

Si vous avez des photos de chantiers récents, mettez-les de côté, on pourra les ajouter.

À [jour],

${SIGNATURE}`,
  },
  {
    id: "m4",
    numero: 4,
    nom: "Le devis",
    quand: "Le lendemain du rendez-vous",
    objet: "Le devis pour votre site",
    corps: `Bonjour Monsieur [Nom],

Merci pour votre accueil hier. Comme promis, voici le devis (en pièce jointe).

J'ai déjà fait les changements dont on a parlé, [la photo de l'agence, les horaires, …] : [lien]

Si quelque chose ne va pas dans le devis, dites-le moi, on regarde ensemble.

${SIGNATURE}`,
  },
  {
    id: "m5",
    numero: 5,
    nom: "La relance du devis",
    quand: "5 jours après le devis, sans réponse",
    objet: "Re : Le devis pour votre site",
    corps: `Bonjour Monsieur [Nom],

Vous avez eu le temps de regarder le devis ? S'il y a un point qui vous fait hésiter, on peut en parler, ou commencer plus simplement.

${SIGNATURE}`,
  },
  {
    id: "m6",
    numero: 6,
    nom: "Bienvenue",
    quand: "Le jour de la signature",
    objet: "C'est parti pour votre site",
    corps: `Bonjour Monsieur [Nom],

Merci pour votre confiance. Pour la suite, j'aurai besoin [de l'accès à votre nom de domaine et de quelques photos récentes]. Je compte mettre le site en ligne [vers le …].

Le site, le nom de domaine et les contenus restent à vous, quoi qu'il arrive.

${SIGNATURE}`,
  },
  {
    id: "m7",
    numero: 7,
    nom: "Un mois après",
    quand: "Un mois après la mise en ligne",
    objet: "Votre site, un mois après",
    corps: `Bonjour Monsieur [Nom],

Votre site tourne depuis un mois. [Chiffres réels : X visites, X appels depuis le site, X demandes de devis.]

Si vous en êtes content, un petit avis sur Google m'aiderait beaucoup : [lien]. Et si vous connaissez un artisan dans le même cas que vous, je lui ferai sa maquette avec plaisir.

${SIGNATURE}`,
  },
];

/** Étapes de relance automatiques : modèle et délai en jours après l'envoi du premier e-mail. */
export const RELANCES_PAR_DEFAUT = [
  { modeleId: "m2", jours: 4 },
  { modeleId: "m3", jours: 10 },
];
