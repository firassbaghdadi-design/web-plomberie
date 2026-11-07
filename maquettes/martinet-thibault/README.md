# Maquette : Martinet Thibault Entreprise (Paris 10e)

Refonte de martinet-thibault.com en Next.js 14 (App Router, TypeScript, Tailwind). Maquette privée : `noindex`, en-tête `X-Robots-Tag` et `Disallow: /` tant que `NEXT_PUBLIC_INDEXABLE` n'est pas à `true`. Badge discret « Maquette Atelier Truelle ».

## Concept : le canal et ses écluses

Le passage du Désir est à quelques rues du canal Saint-Martin. L'eau y passe d'écluse en écluse, comme le métier est passé de main en main depuis 1880.

1. **Les cinq générations** (héros de l'accueil, `Generations.tsx`) : cinq sas en escalier, de 1880 à 2010 (Tournaire, H. Martinet, M. Martinet, P. Thibault, M. Thibault). Au chargement, les portes s'ouvrent et l'eau remplit chaque sas l'un après l'autre.
2. **Le canal** (filet bas de l'en-tête, `Canal.tsx`) : une porte d'écluse par section. L'eau avance avec la lecture et ouvre chaque porte au passage. Au survol, la porte affiche le nom de sa section ; un clic y mène. Le canal fonctionne aussi sur mobile.
3. **Le bief** (`Bief.tsx`) : chaque séparation de section est une marche d'écluse. Le niveau descend d'un cran au droit de la porte, puis un filet d'eau bleu file vers la droite quand la section arrive.
4. **Le sas** (`Lock.tsx`) : devant chaque libellé de section, un petit sas vu en coupe se remplit, puis sa porte aval s'ouvre.

Animations sobres, `prefers-reduced-motion` respecté, filet de sécurité CSS à 3 s (rien ne reste invisible).

## Charte

- Bleu du logo `#0071E5` (relevé au pixel sur `logo.gif`), unique accent ; `#0057B8` pour le texte bleu et les survols ; encre `#0D1B2E` ; fond blanc.
- Logo : monogramme redessiné en vectoriel d'après `logo.gif` (anneau traversé de deux traits) et nom en minuscules, comme l'original. **À valider avec l'entreprise.**
- Typographie : Albert Sans (variable, titres en 300, texte en 400). Aucune autre maquette du dépôt ne l'utilise.

## Pages

| URL | Contenu |
|---|---|
| `/` | Accueil (l'ancienne `/accueil-MTE.html` redirige ici) : textes d'origine, services, garanties, réalisations, quartiers, contacts |
| `/historique.html`, `/services.html`, `/realisations.html`, `/partenaires.html` | Mêmes adresses, textes d'origine repris mot pour mot, complétés pour le référencement. `/realisations02.html` à `09` redirigent vers `/realisations.html` |
| `/contact.html` | Même adresse : **seul formulaire du site** (photos jointes, envoi Resend : `RESEND_API_KEY`, `CONTACT_TO_EMAIL`) |
| `/plombier-paris-10`, `/couvreur-paris-10`, `/chauffagiste-paris-10`, `/depannage-plomberie-paris-10`, `/renovation-salle-de-bains-paris-10` | Pages métier du 10e |
| `/plombier-paris-9`, `/plombier-paris-11`, `/couvreur-paris-18`, `/chauffagiste-paris-19`, `/plombier-paris-3` | Arrondissements voisins, chacune avec son propre texte |
| `/mentions-legales` | Éditeur et crédits photo |

## Photos

1. **Photos de l'entreprise** (site actuel, téléchargées au build par `scripts/fetch-photos.mjs`) : 9 réalisations, photos des pages Historique, Services et Contact, logos (Qualibat RGE, Qualigaz, FFB, Velux, Qualibat, PGN, Villeroy & Boch). Elles ne font que 300 × 300 px : elles sont montrées petites et jamais agrandies (pas de photo floue).
2. **Pexels** (choisies par leur titre exact, inscrites dans `prospection/photos-utilisees.md`) : 16509869, 7859953, 34792149, 32497162, 34019842.
3. Si une image ne se télécharge pas, un aplat clair légendé la remplace.

Il n'y a pas de paire avant/après sur le site actuel : pas de slider.

## À faire confirmer par l'entreprise

- Date : la maison date de 1880 (page Historique) et la société actuelle de 1996 (reprise par Patrick Thibault). Le site met en avant 1880.
- Qualibat RGE et Qualigaz : seuls les logos sont affichés sur le site actuel. Il faut les numéros de certificat et leur validité.
- Astreinte CP24 (« groupement de 14 entreprises ») : texte repris tel quel ; la marche à suivre la nuit est à préciser.
- Noms et lignes directes des services (M. Badjic, M. Moulin, Mme Estebe) : repris de la page Contact, à vérifier qu'ils sont à jour.
- Légendes des 9 photos de réalisations (lieu, type de travaux) : inconnues.
- Repères de quartier des pages locales (gares, canal, Montmartre, Marais…) : institutionnels, à faire relire par un habitant. Aucun prix ni délai n'est promis.
- Note Google (3,0/5 sur 12 avis) : volontairement non affichée.

## Lancer et contrôler

```bash
npm install
npm run build          # le prebuild télécharge les images
npx next start -p 3355
npm run audit:seo      # 0 problème attendu
```
