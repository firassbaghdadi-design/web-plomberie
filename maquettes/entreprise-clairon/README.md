# Maquette — Entreprise Clairon (Paris 15e)

Refonte multi-pages d'entreprise-clairon.fr, en Next.js 14 (App Router, TypeScript, Tailwind). Maquette privée : `noindex` et `Disallow: /` tant que `NEXT_PUBLIC_INDEXABLE` n'est pas à `true`. Badge « Maquette Atelier Truelle » en bas de page.

## Concept : le fil à plomb (« d'aplomb depuis 1943 »)

« Plombier » vient du plomb (*plumbum*), le métal du fil à plomb qui dit si un mur est droit. `Plumb.tsx` : un fil fin accroché en haut de page descend dans la marge droite au rythme de la lecture ; le plomb oscille légèrement quand on fait défiler (pendule amorti), puis se stabilise. Chaque section numérotée allume un repère sur le fil ; en bas de page, le plomb se pose dans sa cible (« d'aplomb »). Sur l'accueil, `Skyline.tsx` dessine le quartier au trait (immeubles à toit brisé, tour Eiffel, tours du Front de Seine) et un fil tombe du sommet de la tour. Fonctionne sur mobile ; `prefers-reduced-motion` respecté (pas d'oscillation).

## Charte

- Typographie : Hanken Grotesk (variable), titres en 250-300 ; aucune autre maquette du dépôt ne l'utilise.
- Fond blanc, encre presque noire, gris « plomb » pour le fil, une seule couleur d'accent.
- Couleur d'accent : le site actuel n'était pas lisible depuis l'environnement de travail. `scripts/fetch-site-photos.mjs` la calcule au build (couleur saturée la plus présente dans les styles du site, assombrie pour rester lisible) et écrit `src/app/brand.generated.css` ; à défaut, bleu `rgb(30 76 140)`.
- Logo : téléchargé au build s'il existe sur le site actuel ; sinon le nom « CLAIRON » composé en capitales espacées (le site actuel affiche le nom en texte).

## Pages

| URL | Contenu |
|---|---|
| `/` | Accueil : textes « Qui sommes nous ? » et description du site actuel, métiers, quartier, clientèles |
| `/plomberie`, `/couverture`, `/chauffage` | Pages du site actuel (`/plomberie/` etc., redirigées sans barre finale) : titre « Un service adapté à vos besoins », liste des prestations, « Organisez votre rendez-vous » ; textes complétés |
| `/contact` | Seul formulaire du site (photos jointes, envoi Resend) |
| `/mentions-legales`, `/plan-du-site` | |
| `/plombier-paris-15`, `/couvreur-paris-15`, `/chauffagiste-paris-15`, `/renovation-salle-de-bains-paris-15`, `/plombier-syndic-copropriete-paris-15` | Métier × 15e |
| `/plombier-paris-7`, `/plombier-paris-14`, `/plombier-paris-16`, `/plombier-issy-les-moulineaux`, `/plombier-vanves` | Arrondissements et communes voisins |

## Repris du site actuel (relevé du 27 octobre 2026)

Accueil : « Qui sommes nous ? » (entreprise familiale créée en 1943, 23 rue d'Ouessant, plomberie, couverture, chauffage et petite maçonnerie, compagnons qualifiés, particuliers, professionnels et syndics), balise description, coordonnées (01 47 83 88 40, info@clairon.org), « © Société Clairon ». Plomberie : Sanitaire, Robinetterie, Tuyauterie, Rénovation de salle de bains. Les listes des pages Couverture et Chauffage n'ont pas pu être lues : le build les reprend du site actuel (`src/lib/original.generated.json`) et les affiche s'il les trouve.

## À faire confirmer par l'entreprise

- Date de création : « 1943 » sur le site (entreprise familiale), 1957 au registre. La maquette affiche 1943.
- Horaires : non publiés ; la maquette dit « sur rendez-vous ».
- Zone : 7e, 14e, 16e, Issy-les-Moulineaux et Vanves ne sont pas cités par l'entreprise ; les pages renvoient vers une confirmation.
- Devis gratuit (bouton « Devis gratuit » du gabarit), listes Couverture et Chauffage, couleur et logo réels, repères de quartier (à faire relire).
- Note Google (3,3/5 sur 36 avis) volontairement non affichée.

## Photos

1. Photos de l'entreprise : récupérées au build sur le site actuel (plus de 700 × 450 px) ; la première remplace la photo du héros, toutes s'affichent dans « En images ».
2. Pexels (`src/lib/pexels.json`, inscrites dans `prospection/photos-utilisees.md`) : 16209099, 5691640, 32990521, 14953886.

## Lancer et contrôler

```bash
npm install
npm run build          # prebuild : relevé du site actuel, photos, couleur
npm start -- -p 3311
node scripts/audit-seo.mjs http://localhost:3311   # 17 pages, 0 problème
```
