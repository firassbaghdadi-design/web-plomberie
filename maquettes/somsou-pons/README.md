# Maquette — Somsou-Pons (Paris 16e, Paris 17e, La Garenne-Colombes)

Refonte multi-pages de somsoupons.fr (Next.js 14, App Router, TypeScript, Tailwind). Maquette privée : `noindex` et `Disallow: /` tant que `NEXT_PUBLIC_INDEXABLE` n'est pas à `true`.

## Charte

Reprise du logo d'origine (fichiers dans `public/brand/`, fournis par Firas) : orange `#FF4100` et vert `#085627`, relevés au pixel sur le logo. Typographie à empattements (Playfair Display) pour rappeler le wordmark, Inter pour le texte. Pour le texte blanc sur fond orange, on utilise `#D63C00` (contraste 4,7:1). Signature graphique : la silhouette de la maison du logo, utilisée comme cadre des photos, avec les deux traits orange et vert décalés.

## Pages

| URL | Contenu |
|---|---|
| `/` | Accueil (même adresse que le site actuel) |
| `/presentation.html` | Présentation et frise historique (même adresse) |
| `/metier.html` | Nos métiers (même adresse) |
| `/qualification.html` | Nos qualifications (même adresse) |
| `/agences.html` | Nos agences (même adresse) |
| `/plombier-paris`, `/chauffagiste-paris`, `/depannage-plomberie-paris`, `/renovation-appartement-paris` | Nouvelles pages métier |
| `/plombier-paris-16`, `/plombier-paris-17`, `/chauffagiste-paris-16`, `/chauffagiste-paris-17`, `/depannage-plomberie-paris-16`, `/depannage-plomberie-paris-17`, `/renovation-appartement-paris-16`, `/renovation-appartement-paris-17` | Nouvelles pages métier par arrondissement, textes tous différents |
| `/menuiserie-la-garenne-colombes` | Atelier de menuiserie Transvaal |
| `/nous-contacter` | Seul formulaire du site (photos jointes, envoi Resend) |

Pas de page « Hauts-de-Seine » pour la plomberie ou le chauffage : rien sur le site actuel ne dit que l'entreprise intervient dans le 92 pour ces métiers (l'adresse de La Garenne-Colombes est l'atelier de menuiserie). À ajouter si l'entreprise le confirme.

## Contenus à faire confirmer par l'entreprise

Les textes du site actuel n'ont pas pu être copiés mot pour mot (site injoignable depuis l'environnement de travail, crédits Firecrawl épuisés) : ils sont repris fidèlement à partir de ce que les pages disent, puis développés. À vérifier :

- Historique : 1876 Établissements Piquot, 1880 Exposition universelle, 1924 Maison Pons, 1958 nom SOMSOU, 1975 L'Héritier, 1992 SOMSOU-PONS et menuiserie, 1997 COLBAL et DUROUCHOUX, 1999 Théuloup (rue Gavarni), 2006 rue Ampère, 2013 CPR.
- Qualifications : Qualibat 5111, 5112 (confirmée, mention gaz), 5311 (mention gaz), 6311, 2141 ; Professionnel du Gaz ; RGE (aucun numéro de certificat affiché).
- Aucun horaire n'est affiché (le site actuel n'en donne pas). Aucun prix, aucun délai.
- Note Google 4,0/5 (13 avis, relevé du 20 octobre 2026) : une ligne, sans extrait d'avis.
- Photos : provisoires, libres de droits (Pexels), téléchargées au build. À remplacer par celles de l'entreprise.

## Lancer

```bash
npm install
npm run build && npm start
npm run audit:seo -- http://localhost:3000 https://www.somsoupons.fr Paris
```

Variables pour le formulaire : `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM`.
