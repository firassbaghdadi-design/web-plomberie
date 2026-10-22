# Maquette privée — Gaz Flash (Paris 18e)

Refonte multi-pages de gazflash.fr (Next.js 14, App Router, TypeScript, Tailwind). Maquette privée : `noindex` et `Disallow: /` par défaut.

## URL conservées (identiques à l'ancien site WordPress)

`trailingSlash: true` : toutes les URL gardent leur « / » final.

| URL | Contenu |
|---|---|
| `/` | Accueil |
| `/index.php/entreprise/` | L'entreprise, valeurs, certifications |
| `/index.php/service/` | Services |
| `/index.php/service/entretien/` · `depannage/` · `installation/` · `ramonage/` · `nostarifs/` | Pages de service et tarifs |
| `/index.php/installations/` | Gammes d'installation |
| `/index.php/portfolio-item/regulation/` · `project-2-modern-house/` · `project-6-living-room-design/` · `project-1-interior-design/` | Régulation, chauffe-eau, condensation, basse température |
| `/index.php/contact/` | Contact + formulaire |
| `/index.php/mentions-legales/` · `/index.php/donnees-personnelles/` | Pages légales |

## Lancer

```bash
npm install
npm run dev
npm run build && npm start
NEXT_PUBLIC_INDEXABLE=true npm run build   # version indexable (mise en ligne réelle)
```

## Photos

Au build (`prebuild`), `scripts/fetch-photos.mjs` télécharge les photos et logos de l'ancien site (liste dans `src/lib/photo-files.json`) vers `public/photos/`. En cas d'échec, le site retombe sur les URL d'origine.

## Formulaire

`POST /api/contact` (Resend) : variables `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM` (facultatif). Sans elles, le formulaire affiche un message d'erreur avec téléphone et e-mail.

Autres variables : `NEXT_PUBLIC_INDEXABLE`, `NEXT_PUBLIC_SITE_URL` (défaut `https://gazflash.fr`), `NEXT_PUBLIC_CONTACT_EMAIL`.

## À valider avec le dirigeant avant mise en ligne

- **Certifications** : « Professionnel du Gaz » et « Qualibat RGE » reprises du site actuel ; demander les attestations en cours de validité. La mention « OPQCB n° 5511*** » des mentions légales semble obsolète ou tronquée.
- **Garantie** « 2 ans pour les pièces » et ancienneté « depuis 1965 » (RCS Paris 65 B) : reprises du site actuel.
- **Tarifs** : repris à l'identique de `/index.php/service/nostarifs/` ; confirmer qu'ils sont à jour.
- **Avis Google** : note 3,7/5 (63 avis) affichée avec sa source ; trois extraits 5 étoiles sont cités (prénom + initiale) : accord à obtenir. Aucun `aggregateRating` dans les données structurées. Aucune réponse du propriétaire aux avis à ce jour, dont deux avis négatifs sur la relation client (rendez-vous annulés sans prévenir) : piste d'accompagnement.
- **Photos Fotolia** : licences à vérifier pour la nouvelle version du site.
- **PDF des conditions d'abonnement** : lien vers l'ancien site à remplacer par une copie hébergée.
- **Hébergeur** des mentions légales à compléter (la maquette est sur Vercel).
- Contenus de la page « L'entreprise » : le titre « Station technique agréée » n'a pas de texte sur l'ancien site (logos de marques).
