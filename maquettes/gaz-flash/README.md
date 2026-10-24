# Maquette privée — Gaz Flash (Paris 18e)

Refonte multi-pages de gazflash.fr (Next.js 14, App Router, TypeScript, Tailwind 3). Maquette privée : `noindex` et `Disallow: /` par défaut (`NEXT_PUBLIC_INDEXABLE` non défini).

Déployée en privé sur Vercel (projet `gaz-flash-maquette`, protégée par connexion Vercel).

## Parti pris

Gaz Flash est une boîte de quartier du 18e, ouverte depuis 1965. Le site est écrit et dessiné comme tel : ton de voisin professionnel, photos réelles de l'ancien site, détails « papier » (mot épinglé « En bref », photos collées, affichette, ardoise des horaires, étiquette de tarif, tampon, croquis dessinés). Aucune animation décorative, aucun chiffre qui défile, aucune grille de cartes à icônes. Charte conservée : rouge `#E4342B`, anthracite `#2C353D`, Open Sans pour le texte, logo d'origine. Polices d'affichage : Fraunces (titres), Caveat (annotations manuscrites), Barlow Condensed (étiquettes).

## Pages (22)

`trailingSlash: true` : toutes les URL gardent leur « / » final.

| URL | Contenu |
|---|---|
| `/` | Accueil : standard et horaires en vue, carte des services, tarif en étiquette, maison depuis 1965, avis Google, gammes, marques, croquis de la zone, FAQ |
| `/index.php/entreprise/` | La maison (faits uniquement), six engagements, déroulé d'un appel, certifications annoncées, marques, informations légales |
| `/index.php/service/` | Aiguillage « dans quel cas êtes-vous ? » et les quatre services |
| `/index.php/service/entretien/` · `depannage/` · `installation/` · `ramonage/` · `nostarifs/` | Pages de service et tarifs (tableaux, étiquettes, déroulés, FAQ) |
| `/index.php/installations/` | Les quatre gammes A à D et « par où commencer » |
| `/index.php/portfolio-item/regulation/` · `project-2-modern-house/` · `project-6-living-room-design/` · `project-1-interior-design/` | Régulation, chauffe-eau gaz, condensation, basse température : modèles cités, section « comment choisir », prix d'entretien associé, FAQ |
| `/index.php/contact/` | Téléphone, e-mail, adresse, horaires, formulaire, croquis d'accès, FAQ |
| `/index.php/mentions-legales/` · `/index.php/donnees-personnelles/` | Pages légales |
| **Nouvelles** `/chauffagiste-paris-18/` | Page de proximité : quartiers du 18e, tarifs du 18e, immeubles anciens |
| `/depannage-chaudiere-paris/` | Guide de panne : odeur de gaz, vérifications, ce qu'il ne faut pas faire (angle différent de la page Dépannage) |
| `/entretien-chaudiere-paris/` | Guide de l'obligation annuelle : 4 à 400 kW, attestation, locataire ou propriétaire (angle différent de la page Entretien) |
| `/zones-intervention/` | Paris + 92, 93, 94, tarifs par zone, voisins du 18e, croquis |
| `/marques/` | Frisquet, Chaffoteaux, Saunier Duval, ELM Leblanc, De Dietrich, Styx : uniquement les modèles cités sur l'ancien site |
| `/questions-frequentes/` | 12 questions de fond (gaz, CO, locataire, pression, durée de vie…) |

Les 16 URL d'origine sont intactes ; 6 pages ajoutées, aucune supprimée.

## SEO appliqué (« Bible »)

Pour chaque page : un seul H1 ; title de 50 à 60 caractères ; meta description de 150 à 160 ; canonical auto-référent absolu ; Open Graph et Twitter avec image 1200×630 (`/opengraph-image`) ; bloc « En bref » de 40 à 60 mots sous le H1 (`.reponse-bref`, repris par `speakable` page par page) ; fil d'Ariane visible et `BreadcrumbList` ; FAQ visible avec `FAQPage` généré **à partir des mêmes données** (réponses de 30 à 80 mots) ; maillage interne (« Pour aller plus loin », liens contextuels, pied de page) ; alt descriptif sur chaque image.

Données structurées : une seule entité `LocalBusiness`/`HVACBusiness` avec `@id` (`/#business`), référencée par les `Service` et `WebPage` ; téléphone `+33142648051`, adresse, coordonnées, horaires, `areaServed` (Paris, 93, 92, 94), SIRET/TVA. `Offer` avec les prix sur la page tarifs (montants identiques au tableau). **Aucun `aggregateRating`** ni `priceRange`, aucun `sameAs` inventé.

Fichiers : `sitemap.xml` (22 URL), `robots.txt` (maquette : tout bloqué ; version indexable : crawlers IA autorisés, scrapers SEO bloqués, `/api/` exclu), `llms.txt`, page 404 réelle (code 404).

Contrôle automatique : `npm run build && npm start`, puis `node scripts/audit-seo.mjs http://localhost:3000` (statut, title, description, H1 unique, canonical, `og:image`, JSON-LD valide, un seul LocalBusiness, aucun `aggregateRating`, FAQ visible identique au JSON-LD, longueur des réponses, « En bref », liens internes, paragraphes dupliqués, doublons de title/H1/description). Dernier passage : 22 pages, 0 problème.

## Photos

Au build (`prebuild`), `scripts/fetch-photos.mjs` télécharge les photos de l'ancien site (liste dans `src/lib/photo-files.json`) vers `public/photos/`. Sans accès à gazflash.fr (cas du bac à sable), le site reste propre : cadres hachurés sans image cassée ; sur Vercel l'accès fonctionne.

**Trouvées sur l'ancien site : 31. Reprises : 30.** Toutes les images des pages d'origine (accueil, entreprise, services, installations, portfolio, contact) et les variantes d'upload `-1`/`-2` ont été relevées. Les crédits Firecrawl étant épuisés, la médiathèque WordPress (`wp-json/wp/v2/media`) n'a pas pu être listée : d'autres fichiers peuvent exister dans `wp-content/uploads` (2015/10, 2016/04, 2022).

Reprises : logo ; `gazflash-3` ; `Fotolia_64382080_L_1` ; `Fotolia_89246278_L-2` ; entretien (`62687917`, `62687938`, `62688027`) ; `contrat-entretien` ; dépannage (`51440838`, `68978465`, `68978414`) ; `gabarit-carré` ; installation (`56387826` et sa variante `-1`, `59245704`) ; `scale-ruler-on-blueprints` ; ramonage (`81678444`, `66419500`, `70049342`) ; quatre bandeaux de gamme (`107753993`, `house-interior`, `88069930`, `81333374`) ; cinq logos de marques ; logos Qualibat et Professionnel du Gaz.

Non reprise : l'icône `cropped-Favicon1-270x270.png` (favicon WordPress, redondant avec le logo ; le site a son propre `icon.svg`).

Fiche Google : l'outil n'expose ni photos, ni description, ni catégories secondaires (catégorie unique : « Heating contractor »). Rien n'a été inventé à leur place.

## Fiche Google reprise

Catégorie Chauffagiste, adresse, téléphone, horaires (lundi-vendredi 8 h-12 h 30 / 13 h 30-17 h), coordonnées, note **3,7 sur 63 avis** affichée avec sa source et sa date de relevé (22 octobre 2026), trois extraits 5 étoiles signés prénom + initiale. Les avis critiques (rendez-vous annulés sans prévenir, relation client) ne sont pas affichés ; aucune réponse du propriétaire à ce jour : piste d'accompagnement à proposer.

## Formulaire

`POST /api/contact` (Resend) : variables `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM` (facultatif). Sans elles, le formulaire affiche un message d'erreur avec téléphone et e-mail. Autres variables : `NEXT_PUBLIC_INDEXABLE`, `NEXT_PUBLIC_SITE_URL` (défaut `https://gazflash.fr`), `NEXT_PUBLIC_CONTACT_EMAIL`.

## À faire confirmer avec le dirigeant avant mise en ligne

- **Certifications** : « Professionnel du Gaz », « Qualibat RGE », « Station technique agréée » (titre sans texte sur l'ancien site, repris avec les cinq logos), « OPQCB n° 5511*** » (semble obsolète ou tronqué). Demander les attestations en cours de validité.
- **Garantie** « 2 ans pour les pièces », **« depuis 1965 »** (déduit aussi du RCS Paris 65 B 3524), « plus de 50 ans », « reconnue par les plus grandes marques » : repris de l'ancien site.
- **Permanence téléphonique**, **délais d'intervention** et **intervention rapide** : promesses de l'ancien site, modalités non précisées (le standard est fermé le week-end).
- **Tarifs** : repris à l'identique de `/index.php/service/nostarifs/` ; confirmer qu'ils sont à jour. Dépannage et installation : sur devis, aucun prix inventé.
- **Zone** : seuls les départements 75, 92, 93, 94 sont cités par l'ancien site ; aucune liste de communes n'est publiée.
- **Avis Google** : accord des trois clients cités à obtenir.
- **Repère d'accès** : place Jules-Joffrin et métro ligne 12 « à moins de 200 m à vol d'oiseau », déduits des coordonnées de la fiche Google et de la connaissance du quartier ; à faire relire par un habitant. Avant de venir sur place : consigne « appelez d'abord », à valider.
- **Numéros d'urgence** : 18 / 112 et urgence gaz GRDF 0 800 47 33 33 (pages Dépannage Paris, Questions fréquentes) : à vérifier.
- **Références générales** : décret n° 2009-649 du 9 juin 2009 (entretien annuel des chaudières de 4 à 400 kW), répartition locataire/propriétaire, valeurs indicatives (pression 1 à 2 bars, durée de vie de 15 à 20 ans, retour d'eau vers 55 °C pour condenser) : formulées prudemment, relecture par le dirigeant conseillée.
- **Photos Fotolia** : licences à vérifier pour la nouvelle version du site.
- **PDF des conditions d'abonnement** : lien vers l'ancien site à remplacer par une copie hébergée.
- **Hébergeur** des mentions légales à compléter (la maquette est sur Vercel).
- **Noms** : le dirigeant (direction de la publication) et le DPO ne sont cités que dans les pages légales, comme sur l'ancien site.

## Lancer

```bash
npm install
npm run dev
npm run build && npm start
NEXT_PUBLIC_INDEXABLE=true npm run build   # version indexable (mise en ligne réelle)
```
