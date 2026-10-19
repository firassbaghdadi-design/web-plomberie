# Maquette — Entreprise Rousseau (Paris 14e)

Page d'accueil Next.js 14 (App Router, TypeScript, Tailwind) construite selon la « Bible SEO / GEO / AEO ». Maquette privée : par défaut elle est en `noindex` et `Disallow: /`.

## Lancer

```bash
npm install
npm run dev                      # développement
npm run build && npm start       # production locale
NEXT_PUBLIC_INDEXABLE=true npm run build   # version indexable (mise en ligne réelle)
```

Variables : `NEXT_PUBLIC_INDEXABLE` (true en production), `NEXT_PUBLIC_SITE_URL` (domaine canonique, défaut `https://www.entreprise-rousseau.fr`), `NEXT_PUBLIC_GA_ID` (GA4, chargé seulement s'il est défini et indexable).

Toutes les données de l'entreprise sont dans `src/lib/site.ts`. Un bloc dont la donnée est `null` (avis, e-mail) n'est pas affiché.

## Mesures locales (Lighthouse, build indexable)

| | Performance | Accessibilité | Bonnes pratiques | SEO |
|---|---:|---:|---:|---:|
| Mobile | 99 | 100 | 100 | 100 |
| Desktop | 100 | 100 | 100 | 100 |

CLS 0, aucun débordement horizontal à 360, 390, 768 et 1280 px.

## Bible SEO / GEO / AEO : ce qui est appliqué

- Canonical auto-référent absolu, title 50-60 car., description 150-160 car., un seul H1, hiérarchie H2/H3 sans saut.
- H2 formulés en questions, avec réponse directe de 40-60 mots juste dessous ; bloc « En bref » sous le H1 (citable par les IA, `speakable`).
- FAQ de 5 questions (la première cite l'arrondissement), alignée mot pour mot avec le JSON-LD `FAQPage`.
- JSON-LD en un seul `@graph` : une entité `LocalBusiness`/`Plumber`/`HVACBusiness` avec `@id` stable, `WebSite`, `WebPage`, `FAQPage`. Pas de `priceRange`, pas de `sameAs`, pas de `aggregateRating` sans source.
- `robots.txt` (crawlers IA autorisés, scrapers bloqués) et `sitemap.xml` en mode indexable ; `llms.txt` ; 404 réelle ; headers de sécurité.
- Polices auto-hébergées (woff2, `font-display: swap`), aucun script tiers bloquant, 0 image bitmap (illustration SVG), image OG générée 1200×630.
- Barre d'appel collée en bas sur mobile, cibles tactiles ≥ 44 px, `overflow-x: hidden`, `prefers-reduced-motion`.
- Persistance UTM (sessionStorage) et événement GA4 `phone_call_click`.

## Intégrité du contenu (chap. 16.4 de la bible)

Aucune preuve inventée : pas d'avis, de note, de prix, de délai, de certification ni de nombre de chantiers affichés. Éléments à confirmer avec l'entreprise avant toute mise en ligne :

| Donnée | Source | Statut |
|---|---|---|
| Adresse 100 rue de la Tombe Issoire, 75014 | sites officiels (via moteur de recherche) | à confirmer (un annuaire cite le n° 85) |
| Téléphone 01 46 61 88 55 | site officiel (via moteur de recherche) | à confirmer (un annuaire cite le 01 45 38 91 91) |
| Fondée en 1948 | registre cité dans le brief | à confirmer (un site de l'entreprise dit « depuis 1945 ») |
| SIREN 552 034 704 | dérivé d'un SIRET d'annuaire | à confirmer sur Sirene |
| Astreinte 7j/7, contrats d'entretien chaudières gaz | site du showroom salles de bains | à confirmer |
| Établissements Bourg-la-Reine, Châtillon | annuaire Verif | à confirmer |
| Services, déroulé d'intervention | rédigés à partir des sites trouvés | à valider |

Manquent aussi : logo, couleurs et typographies réels, photos publiées par l'entreprise, avis Google (note, nombre, lien d'avis), horaires, e-mail, coordonnées GPS.

## À faire avant l'envoi au prospect

1. Autoriser le réseau vers `entreprise-rousseau.fr` et `sandrin-rousseau.com` (ou fournir une capture) : extraire logo, couleurs, typos, photos ; auditer l'existant (mobile, vitesse, HTTPS).
2. Crawler le site actuel et remplir `redirects.json` (`[{ "from": "/ancienne", "to": "/nouvelle" }]`, redirections 301).
3. Brancher les avis Google réels (`business.reviews`, `business.googleReviewUrl`) ; le JSON-LD `aggregateRating` s'ajoute alors automatiquement.
4. Remplacer la palette et les typographies par celles de l'entreprise (`tailwind.config.ts`, `src/app/layout.tsx`).
5. Déployer en privé (Vercel avec protection par mot de passe), jamais en public.
