# Maquette SMAP (Maintenance, Aménagement, Plomberie), Paris 12e

Refonte multi-pages de smap-renovation.fr (site Wix), en Next.js 14 (App Router, TypeScript, Tailwind), police Outfit (`@fontsource-variable/outfit`). Maquette privée : `noindex` tant que `NEXT_PUBLIC_INDEXABLE` n'est pas à `true`.

**Concept : du plan au chantier.** Chaque section s'ouvre sur un trait de cote (numéro, intitulé, échelle) qui se trace ; chaque photo est présentée dans un cadre de plan d'architecte (quadrillage, axes en trait mixte, bulles d'axe, lignes de cote) dans lequel la photo finie se dévoile de gauche à droite au défilement (au chargement pour le héros). Composant : `src/components/PlanFigure.tsx`, pilotage : `src/components/Motion.tsx`, styles : fin de `src/app/globals.css`.

## Pages
`/`, `/plomberie`, `/renovation`, `/maintenance`, `/contact`, `/mentions-legales`, `/plan-du-site`, et les pages métier × zone : `/plombier-paris-12`, `/renovation-appartement-paris-12`, `/plombier-paris-11`, `/plombier-paris-13`, `/plombier-paris-20`, `/plombier-saint-mande`, `/plombier-charenton-le-pont`.

## Build et données
`npm run build` lance d'abord `scripts/fetch-site-photos.mjs` (Vercel a internet, pas l'environnement de travail) : il lit smap-renovation.fr et ses pages liées (journal de build : textes, couleurs, polices, images), télécharge le logo et les photos de l'entreprise, tire la couleur d'accent du logo (`brand.generated.css`), garde les paragraphes de l'accueil (`original.generated.json`) et télécharge les photos Pexels (`pexels.json`). Un échec n'arrête jamais le build.

`og:image` pointe vers l'URL Vercel (`SHARE_URL`), le canonical vers le domaine du client.

## À confirmer par l'entreprise
Adresse de rue, horaires, liste exacte des prestations, zone d'intervention, nom du dirigeant et numéro d'immatriculation (mentions légales), déroulé exact d'un chantier. Le site actuel n'a pas pu être lu depuis l'environnement de travail : ses textes sont à comparer avec le journal du premier build.
