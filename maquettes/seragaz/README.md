# Maquette — SERAGAZ (Paris 9e)

Refonte multi-pages de seragaz.fr (site Simplébo actuel), en Next.js 14 (App Router, TypeScript, Tailwind). Maquette privée : `noindex` et `Disallow: /` tant que `NEXT_PUBLIC_INDEXABLE` n'est pas à `true`.

L'offre à présenter à SERAGAZ reste surtout le référencement local, la visibilité dans les assistants IA (GEO/AEO) et la mesure des demandes (formulaire unique, suivi des clics « appel » et « devis » via `data-track`, UTM conservés) ; la refonte sert à montrer le travail.

## Charte

- Couleurs relevées au pixel sur le logo (`image001.png` du site actuel) : bleu `#00519E`, vert `#88BB3D`. Marine `#022C68` repris de la feuille de style du site actuel ; fond nuit `#061A33` pour les sections sombres.
- Logo : le fichier d'origine est téléchargé au build (fond blanc, posé sur une pastille blanche dans le pied de page). S'il manque, un sigle dessiné (goutte bleue et virgule verte, comme le logo) et le nom SERAGAZ le remplacent.
- Typographies : Bricolage Grotesque (titres) et Figtree (texte). Le site actuel utilise DIN et Lato ; aucune autre maquette n'utilise ces deux polices.
- Signature : fond « plan technique » (quadrillage fin), manomètre dessiné dont l'aiguille se lève au chargement, plaque d'informations, liste de prestations en lignes numérotées, sommaire collant sur les pages longues. Animations : lignes du titre qui montent, photos dévoilées par un masque, apparitions au défilement (relancées à chaque page, filet de sécurité CSS à 3 s), `prefers-reduced-motion` respecté.

## Pages

| URL | Contenu |
|---|---|
| `/` | Accueil (même adresse) : textes de l'accueil actuel |
| `/presentation-seragaz-specialiste-chaudiere-gaz-a-paris-9-75009` | Qui sommes-nous ? (même adresse, mêmes textes) |
| `/remplacement-chaudiere-gaz-a-paris-9-75009` | Installation et remplacement (même adresse, mêmes textes) |
| `/desembouage-a-paris-9-75009` | Détartrage et désembouage (même adresse, mêmes textes) |
| `/ramonage-a-paris-9-75009` | Ramonage (même adresse, mêmes textes) |
| `/depannage-de-chaudiere-gaz-a-paris-9-75009` | Entretien et dépannage (même adresse, mêmes textes) |
| `/deplacement-de-compteur` | Déplacement de compteur, Partenaire GRDF (même adresse, mêmes textes) |
| `/avis-clients-seragaz-chauffagiste-a-paris-9-75009` | Avis clients (même adresse) : note Google en une ligne, aucun avis cité |
| `/contact-devis-gratuit-chauffagiste-a-paris-9-75009` | Contact (même adresse) : **seul formulaire du site** (photos jointes, envoi Resend) |
| `/mentions-legales`, `/plan-du-site` | Mêmes adresses ; crédits photos ajoutés aux mentions |
| `/contrat-entretien-chaudiere-gaz-paris` | Nouvelle page métier (engagements du contrat repris de l'accueil actuel) |
| `/depannage-chaudiere-gaz-paris-10`, `-17`, `-18` | Nouvelles pages métier × arrondissement |
| `/entretien-chaudiere-gaz-paris-9`, `-8` | Nouvelles pages métier × arrondissement |
| `/remplacement-chaudiere-gaz-paris-17`, `-11` | Nouvelles pages métier × arrondissement |
| `/chauffagiste-clichy`, `/chauffagiste-levallois-perret`, `/chauffagiste-vincennes` | Communes citées dans le pied de page du site actuel |

Le site actuel liste aussi deux articles de blog dans son plan du site (« Le gaz, un choix d'avenir… », « Ne débranchez pas le gaz… ») : leur contenu n'a pas été repris (non lu), à ajouter si l'entreprise le souhaite.

## Repris du site actuel (relevé le 25 octobre 2026)

Textes de toutes les pages ci-dessus, mot pour mot (fautes de frappe évidentes corrigées : « mon père » conservé, « remise commercial » → « commerciale », etc.) ; adresse 69 rue de Dunkerque 75009 Paris ; téléphone 01 42 80 03 01 ; e-mail jf@seragaz.fr (vérifié par Firas ; le site affiche aussi contact@seragaz.fr) ; SAS au capital de 13 500 €, n° 33203912200012 ; historique (Franche Industries 1903, SERAGAZ 1985, Jean-Marie puis Jérémy Franche) ; qualifications (Partenaire GRDF, RGE Qualibat, PG PMG, audits Qualigaz, station technique) ; marques ; zone (rayon de 15 km, communes du pied de page) ; engagements du contrat d'entretien ; chiffres ADEME cités par l'entreprise. Images téléchargées au build depuis `files.sbcdnsb.com` : logo, sigle, deux photos de l'accueil, logo RGE Qualibat, logos des marques.

## À faire confirmer par l'entreprise

- **Horaires** : le bandeau du site dit « du lundi au vendredi de 7 h 30 à 17 h 30 », la page « Qui sommes-nous ? » dit « par téléphone de 8 h à 12 h et de 14 h à 17 h ». Les deux sont affichés ; à trancher.
- Chiffres : « jusqu'à 15 % de consommation en moins, durée de vie × 3, 5 fois moins de pannes (ADEME) » et « jusqu'à 30 % d'économies » avec une chaudière neuve : repris du site, source à confirmer.
- « Main-d'œuvre et déplacement illimités inclus » dans le contrat d'entretien, « remise commerciale » ramonage + entretien, « tarif préférentiel » ramonage : repris tels quels.
- Qualifications : aucun numéro de certificat RGE/Qualibat n'est affiché ; à fournir pour les mentionner précisément.
- Contenu des deux photos de l'accueil (non vues depuis l'environnement de travail) et logos des marques Viessmann, Ferroli, Chaffoteaux, Auer, Atlantic (affichés sur l'accueil actuel mais absents du texte « référencés chez »).
- Note Google : 4,7/5 sur 310 avis, relevée le 20 octobre 2026 (le widget du site affichait 313 avis le 25 octobre). Une ligne, sans extrait d'avis ni `aggregateRating`.
- Repères de quartier des pages locales (gare du Nord, canal Saint-Martin, Batignolles, Montmartre…) : institutionnels, à faire relire par un habitant. Aucune distance ni délai promis.
- Communes hors liste (Neuilly, Saint-Ouen, Montreuil…) : la FAQ renvoie vers l'entreprise sans affirmer qu'elle y intervient.

## Photos

1. Photos de l'entreprise (site actuel), téléchargées au build par `scripts/fetch-site-photos.mjs`.
2. Photos de lieux réels de Paris et des communes desservies, sous licence libre (Wikimedia Commons : CC0, CC BY, CC BY-SA, domaine public), listées avec auteur et licence dans `src/lib/commons.json` et créditées sur la page Mentions légales. **Aucune photo Pexels** : impossible de vérifier visuellement des photos Pexels depuis l'environnement de travail ; les photos de lieux nommés (gare du Nord, canal Saint-Martin, toits et cheminées de Paris, hôtels de ville de Clichy et Levallois, château de Vincennes…) collent au contexte sans risque de chantier étranger.
3. Si une image ne se télécharge pas, un aplat quadrillé la remplace (jamais de zone vide).

## Lancer et contrôler

```bash
npm install
npm run build && npm start              # le prebuild télécharge les images
npm run audit:seo -- http://localhost:3000 https://seragaz.fr
```

Contrôles passés avant livraison : `npm run typecheck`, `npm run build`, audit SEO à zéro problème (22 pages), test de navigation (chaque lien du menu et du pied de page, défilement complet, aucun élément `[data-reveal]` invisible, aucun défilement horizontal) à 1440 et 390 px, captures de chaque type de page.

## Variables d'environnement

- `RESEND_API_KEY`, `CONTACT_TO_EMAIL` (destinataire, ex. jf@seragaz.fr), `CONTACT_FROM` (expéditeur vérifié dans Resend) : formulaire de contact.
- `NEXT_PUBLIC_SITE_URL` (par défaut `https://seragaz.fr`), `NEXT_PUBLIC_INDEXABLE=true` à la mise en ligne, `NEXT_PUBLIC_GA_ID` pour la mesure (GA4 ; événements `cta_devis` et `cta_tel`).
