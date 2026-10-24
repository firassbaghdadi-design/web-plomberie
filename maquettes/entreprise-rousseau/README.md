# Maquettes — Entreprise Rousseau (Paris 14e) et Sandrin-Rousseau (Bourg-la-Reine)

Refonte multi-pages (Next.js 14, App Router, TypeScript, Tailwind). Maquettes privées : `noindex` et `Disallow: /` par défaut.

## Deux sites, une seule base de code

Entreprise Rousseau (siège, Paris 14e) et Sandrin-Rousseau (établissement secondaire, 116 avenue du Général Leclerc, Bourg-la-Reine) sont une seule société (SIREN 552 034 704, SAS) avec deux adresses. Aujourd'hui, `sandrin.fr` renvoie vers `entreprise-rousseau.fr` : Bourg-la-Reine n'a aucun site propre, donc aucune visibilité locale. La refonte donne à chaque établissement son site, son domaine, son téléphone, son e-mail, sa fiche Google et ses textes (aucun contenu dupliqué).

| Variable de build | Site | Domaine canonique |
|---|---|---|
| `NEXT_PUBLIC_BRAND` absente (ou `rousseau`) | Entreprise Rousseau | `www.entreprise-rousseau.fr` |
| `NEXT_PUBLIC_BRAND=sandrin` | Sandrin-Rousseau | `www.sandrin.fr` |

Les textes de chaque marque sont dans `src/lib/brands/` (`rousseau.ts`, `sandrin.ts`), la palette dans `src/app/globals.css` (`html[data-brand="sandrin"]`). Les deux sites gardent les mêmes URL que l'ancien site. Deux projets Vercel, un par marque, déployés depuis le même dépôt (répertoire racine `maquettes/entreprise-rousseau`). La palette Sandrin est une proposition : à ajuster sur le logo une fois celui-ci consultable.

## Pages et URL (identiques au site actuel)

| URL | Contenu |
|---|---|
| `/` | Accueil |
| `/salles-de-bains-douches` | Salles de bains / douches |
| `/nos-services-plomberie` | Plomberie |
| `/nos-services-chauffage` | Chauffage |
| `/nous-contacter-ou-envoyer-un-message-sur-formulaire` | Contact + formulaire |

Les anciennes URL qui renvoient aujourd'hui une 404 (`/salle-de-bains`, `/page-bains-et-douches`) sont redirigées en 301 vers `/salles-de-bains-douches` (`redirects.json`). Les URL d'origine étant conservées, aucune redirection n'est nécessaire pour elles.

## Lancer

```bash
npm install
npm run dev
npm run build && npm start
NEXT_PUBLIC_INDEXABLE=true npm run build   # version indexable (mise en ligne réelle)
```

## Photos du site actuel

Au build (`prebuild`), `scripts/fetch-photos.mjs` télécharge les photos et logos du site actuel (liste dans `src/lib/photo-files.json`) vers `public/photos/` : elles sont ensuite servies et optimisées (WebP/AVIF) depuis le site lui-même. Si le téléchargement échoue (réseau bloqué), le site retombe sur les URL d'origine. Dossier `public/photos/` ignoré par Git.

## Formulaire de demande par e-mail

`POST /api/contact` valide la demande (champs, anti-spam par champ piège, délai minimal et limite de débit) puis envoie l'e-mail via Resend. Variables d'environnement à définir dans Vercel :

| Variable | Rôle |
|---|---|
| `RESEND_API_KEY` | clé API Resend (resend.com, gratuit) |
| `CONTACT_TO_EMAIL` | destinataire (séparer plusieurs adresses par des virgules). Pendant la démonstration : l'adresse de Firas ; après signature : `contact@entreprise-rousseau.fr` |
| `CONTACT_FROM` | expéditeur (facultatif). Par défaut `onboarding@resend.dev`, qui n'envoie qu'au titulaire du compte Resend ; pour écrire à n'importe quelle boîte, vérifier le domaine de l'entreprise dans Resend |

Sans ces variables, le formulaire affiche un message d'erreur avec le téléphone et l'e-mail de l'entreprise.

Autres variables : `NEXT_PUBLIC_INDEXABLE` (true en production), `NEXT_PUBLIC_SITE_URL` (domaine canonique, défaut `https://www.entreprise-rousseau.fr`), `NEXT_PUBLIC_GA_ID` (GA4).

## Design et animations

Charte reprise du site actuel (bleu `#4CAAC9`, polices Questrial et Roboto) et modernisée : héros océan avec vagues et bulles animées, titres cinétiques, parallaxe et inclinaison 3D au pointeur, apparitions au scroll, compteurs animés, avis en défilement continu, barre de progression de lecture, transitions fluides entre pages (View Transitions), boutons d'appel pulsés. Tout respecte `prefers-reduced-motion` et reste lisible sans JavaScript. Le bleu des boutons de l'ancien site (blanc sur `#4CAAC9`, contraste 2,7:1) est remplacé par un orange d'action lisible.

## SEO / GEO / AEO (guide « Bible »)

- Un seul H1 par page, titres 50-60 car., descriptions 150-160 car., canonical auto-référent absolu.
- Blocs « En bref » de 40-60 mots, H2 formulés en questions, FAQ par page alignée sur le JSON-LD `FAQPage`.
- JSON-LD : une seule entité `LocalBusiness`/`Plumber`/`HVACBusiness` (`@id` stable), `WebSite`, et par page `WebPage`, `BreadcrumbList`, `Service` ou `ContactPage`. Pas de `aggregateRating` (note Google tierce, contraire aux règles de Google).
- `robots.txt` (crawlers IA autorisés, scrapers bloqués), `sitemap.xml` (5 pages), `llms.txt`, 404 réelle, headers de sécurité.
- Mesures locales (Lighthouse mobile) : performance 95 à 99, accessibilité 100, SEO 100, aucun débordement horizontal.

## Intégrité du contenu

Contenus, services, horaires et coordonnées repris du site officiel ; note et avis Google relevés le 20/10/2026 (4,4/5, 29 avis ; 8 extraits affichés avec prénom et initiale, à faire valider). Aucun prix, délai ni certification inventé. À confirmer avant mise en ligne : « plus de 80 ans » (site officiel) contre 1948 (registre), SIREN 552 034 704, numéro 01 45 38 91 91 (un avis Trustpilot le dit injoignable).

## Déploiement

Projet Vercel `entreprise-rousseau-maquette` (compte `firass.baghdadi@gmail.com`), protection « Vercel Authentication » sur tous les déploiements. Pour partager le lien avec le prospect : Settings, Deployment Protection, ajouter un mot de passe ou un lien de partage.

## Refonte des pages de service (24 octobre 2026)

- **H1 métier + ville** : « Plombier Paris 14e : urgence, fuite et dépannage », « Chauffagiste Paris 14e : chaudière, entretien et remplacement », « Rénovation de salle de bains à Paris 14e : douche et salle d'eau » (idem pour Bourg-la-Reine côté Sandrin-Rousseau).
- **Contenu approfondi** (1 100 à 1 600 mots par page, texte propre à chaque site) : cinq sections « question + réponse directe de 40 à 60 mots », avis Google réels choisis, bloc local, FAQ étendue (5 à 6 questions), maillage « Voir aussi ». Les textes sont dans `src/lib/brands/deep-rousseau.ts` et `deep-sandrin.ts`.
- **Formulaire sur chaque page** (accueil et trois pages de service) : prénom, nom, téléphone, e-mail, adresse, code postal et ville, photos (4 maximum), message, consentement, bouton Envoyer.
- **Plus de zone vide** : filet de sécurité CSS qui affiche tout le contenu après 3 secondes si les animations ne démarrent pas, et suppression de l'animation d'apparition sur les textes.
- **Audit** : `node scripts/audit-seo.mjs http://localhost:3000 https://www.entreprise-rousseau.fr "Paris 14e"` (voir `prospection/standards-maquettes.md`).
- **À faire relire** : les repères du quartier (Montsouris, Alésia, Plaisance, Pernety, Montparnasse, Denfert-Rochereau pour le 14e ; Sceaux et L'Haÿ-les-Roses pour Bourg-la-Reine), la mention « pavillons et immeubles collectifs » à Bourg-la-Reine, la permanence téléphonique, les règles générales citées (entretien annuel 4 à 400 kW, déclaration d'un dégât des eaux sous cinq jours ouvrés, répartition locataire/propriétaire).
