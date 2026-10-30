# Maquette Houdry-Grenot (plomberie, Paris 17e)

Maquette multi-pages en Next.js 14 (App Router, TypeScript, Tailwind), police Plus Jakarta Sans. `noindex` tant que `NEXT_PUBLIC_INDEXABLE` n'est pas à `true`.

## Concept : le manomètre

- `Gauge.tsx` : un cadran fin, fixé dans l'angle de l'écran, sert d'indicateur de défilement. Les numéros de section (01, 02, 03…, repérés par `data-n`) sont ses graduations ; l'aiguille monte en pression section après section et un trait de pression se remplit derrière elle.
- `HeroDial.tsx` : sur l'accueil, la photo est le verre d'un manomètre ; au chargement l'aiguille monte en pression.
- `prefers-reduced-motion` respecté ; fonctionne sur mobile (cadran réduit, sans numéros).

## Données et à confirmer

Le site actuel (houdry-grenot.com) n'était pas lisible depuis l'environnement de travail. `scripts/fetch-site-photos.mjs` (prébuild Vercel) relève son texte dans le journal de build, télécharge logo et photos, calcule la couleur d'accent (`brand.generated.css`) et télécharge les photos Pexels. À vérifier : adresse de rue, horaires, liste réelle des prestations (chauffage ?), nom du dirigeant, mentions d'immatriculation, zone d'intervention, repères de quartier.
