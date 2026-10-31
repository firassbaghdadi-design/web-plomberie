# Maquette : EBL, Entreprise Bernard Lemaître (Paris 14e)

Site multi-pages pour une entreprise de plomberie sans site actuel, en Next.js 14 (App Router, TypeScript, Tailwind). Maquette privée : `noindex` et `Disallow: /` tant que `NEXT_PUBLIC_INDEXABLE` n'est pas à `true`. `og:image` pointe vers l'URL Vercel (`SHARE_URL`), le canonical garde le domaine du client.

## Concept : la coupe d'immeuble

`Immeuble.tsx` : un immeuble parisien dessiné en coupe, en traits fins (cave voûtée, rez-de-chaussée, trois étages, toit en zinc avec lucarnes et cheminées), et la colonne d'eau qui monte du compteur de la cave jusqu'aux toits. Chaque section est un étage (`data-floor`, de 0 à 5) : la colonne se remplit au défilement, l'étage atteint est teinté et son branchement et son appareil (robinet, radiateur, évier, baignoire, chauffe-eau) passent à la couleur d'accent. Le trait se dessine au chargement. Sur téléphone, seule la moitié droite du dessin est visible (colonne et appareils), par recadrage. `prefers-reduced-motion` respecté.

## Charte

- Police : Public Sans (variable), titres en 250-300.
- Fond blanc, encre presque noire, une seule couleur d'accent : bleu d'eau `rgb(31 111 139)`. Aucun logo publié : couleur choisie pour la colonne d'eau, à confirmer.
- Logo : sigle « EBL » en capitales espacées (aucun logo d'origine).

## Sources des contenus

Pages Jaunes (adresse, téléphone 01 43 31 26 77, horaires, « Professionnel du Gaz », prestation « fuite de gaz »), registre (SIREN 312 906 126, SARL à associé unique, création 1978, NAF 4322A), fiche Google (3,7/5, 3 avis, relevé du classement de prospection). Rien d'autre n'est affirmé : pas de prix, délai, client ni avis cité.

## À faire confirmer par l'entreprise

- Date de création : 1er janvier 1978 (Pages Jaunes, registre) ou inscription au greffe le 2 juin 1978 (autre annuaire).
- Certification Professionnel du Gaz (numéro à demander) et périmètre exact des appareils au gaz pris en charge.
- Chauffage : le code NAF est « installation d'eau et de gaz » ; la page Chauffage est un prolongement prudent, à valider.
- Zone d'intervention (15e, 6e, 13e, Montrouge, Malakoff) ; repères de quartier à faire relire par un habitant.
- Second numéro 01 45 87 06 41 (fax sur Pages Jaunes) non publié ; adresse e-mail à fournir (variable `CONTACT_TO_EMAIL`, envoi par Resend).
- Gérant (le registre donne J.-P. Lemaitre selon une source, Jean Lemaitre selon une autre) : nom du responsable de publication.
- Numéro d'urgence gaz cité (0 800 47 33 33) : à vérifier avant mise en ligne.
- Horaires : lundi-jeudi 8 h-12 h 30 / 13 h 30-18 h, vendredi jusqu'à 17 h (Pages Jaunes).
- Photos : trois photos Pexels de mains et d'outils (pas de photo de l'entreprise).

## Pages

`/`, `/plomberie`, `/gaz`, `/chauffage`, `/contact` (seul formulaire), `/mentions-legales`, `/plan-du-site`, et métier × zone : `/plombier-paris-14`, `/plombier-paris-15`, `/plombier-paris-6`, `/plombier-paris-13`, `/plombier-montrouge`, `/plombier-malakoff`.

## Commandes

`npm run build` (prébuild : téléchargement des photos), `npm run audit:seo` sur un serveur lancé (`node scripts/audit-seo.mjs http://localhost:3111 https://ebl-plomberie.fr`).
