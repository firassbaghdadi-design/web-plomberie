# Site d'agence : Atelier Truelle

Site de l'agence Atelier Truelle : agence web et de marketing digital spécialisée dans les entreprises du bâtiment. Next.js 14, TypeScript, Tailwind. Remplace l'ancien projet « Carré Noir » (`v0-agence-web-premium`), dont le nom appartient à une agence de Publicis Groupe et dont les références étaient fictives.

## Pages

| URL | Contenu |
|---|---|
| `/` | Accueil : promesse, anneau « 360° » animé, six services, pourquoi nous, avant/après illustré, métiers, étapes, engagements, FAQ |
| `/services` et `/services/[slug]` | Six services : création de site, référencement local et IA, fiche Google et avis, publicité en ligne, contenus de chantier, suivi des demandes |
| `/metiers` | Plombiers et chauffagistes, électriciens, couvreurs, maçons et rénovation, autres corps de métier |
| `/methode` | Les sept étapes de travail |
| `/contact` | Formulaire (maquette gratuite, point sur la visibilité, question), envoi par e-mail |
| `/mentions-legales`, `/confidentialite` | Pages légales, alimentées par des variables d'environnement |

Aussi : `robots.txt`, `sitemap.xml`, `llms.txt`, page 404, image de partage, données structurées par page.

## Contenu : ce qui est volontairement absent

Aucun client, résultat chiffré ni avis n'est affiché : l'agence n'en a pas encore, et l'ancien site en affichait de fictifs. Le comparateur avant/après est une illustration signalée comme telle (entreprise fictive). Ajouter des références seulement quand elles existent et avec l'accord écrit du client.

**Aucun prix n'est affiché** : choix assumé, le devis personnalisé suit la maquette gratuite. Le contenu des services est dans `src/lib/site.ts` (rubrique `services`).

## Variables d'environnement (Vercel, Settings, Environment Variables)

| Variable | Rôle |
|---|---|
| `NEXT_PUBLIC_INDEXABLE` | `true` pour autoriser Google. Absente : le site est `noindex` et `Disallow: /` |
| `NEXT_PUBLIC_SITE_URL` | domaine canonique (défaut `https://www.ateliertruelle.fr`) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | adresse de contact affichée (défaut `contact@ateliertruelle.fr`) |
| `NEXT_PUBLIC_CONTACT_PHONE` | téléphone professionnel (masqué s'il est absent) |
| `NEXT_PUBLIC_LEGAL_NAME` | dénomination ou nom de l'entreprise |
| `NEXT_PUBLIC_LEGAL_FORM` | forme juridique |
| `NEXT_PUBLIC_LEGAL_SIREN` | numéro SIREN |
| `NEXT_PUBLIC_LEGAL_ADDRESS` | adresse professionnelle ou de domiciliation |
| `NEXT_PUBLIC_LEGAL_DIRECTOR` | directeur de la publication |
| `NEXT_PUBLIC_LEGAL_VAT` | TVA intracommunautaire (facultatif) |
| `RESEND_API_KEY` | clé Resend pour l'envoi du formulaire |
| `CONTACT_TO_EMAIL` | destinataire des demandes (plusieurs adresses séparées par une virgule) |
| `CONTACT_FROM` | expéditeur (facultatif ; défaut `onboarding@resend.dev`, qui n'envoie qu'au titulaire du compte Resend) |

**Garde-fou :** avec `NEXT_PUBLIC_INDEXABLE=true`, le build échoue tant que la dénomination, la forme juridique, le SIREN, l'adresse, le directeur de publication et l'e-mail ne sont pas renseignés (`scripts/check-legal.mjs`). On ne peut donc pas publier un site référencé avec des mentions légales vides.

## À compléter avant la mise en ligne publique

1. Statut juridique, SIREN, adresse (ou domiciliation) : variables `NEXT_PUBLIC_LEGAL_*`.
2. Adresse postale et coordonnées de l'hébergeur (Vercel) dans `src/app/mentions-legales/page.tsx`, d'après ses informations légales officielles.
3. Domaine `ateliertruelle.fr` relié au projet Vercel, puis `NEXT_PUBLIC_SITE_URL`.
4. Clé Resend et adresse de réception du formulaire.
5. Conditions générales de vente à faire relire. Vérifier que les services affichés correspondent à ce que vous pouvez réellement livrer (publicité en ligne, contenus de chantier).
6. Numéro de téléphone professionnel (`NEXT_PUBLIC_CONTACT_PHONE`).

## Développement

```bash
npm install
npm run dev
npm run build && npm start
NEXT_PUBLIC_INDEXABLE=true npm run build   # exige les variables légales
```

## Mesures locales (Lighthouse, build de préparation)

Performance 97 à 100, accessibilité 100, bonnes pratiques 100 sur les pages principales. Le score SEO atteint 100 sur la version indexable ; il est plafonné à 66 sur la version de préparation, à cause du `noindex` voulu.
