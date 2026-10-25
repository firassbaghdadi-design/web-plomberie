# Atelier OS Pro — phase 1 (fondations)

Le CRM cœur de l'entreprise du bâtiment : clients, contacts, adresses, chantiers, notes, tâches, équipe et rôles, journal d'activité, API v2.
Vision complète : [`../VISION.md`](../VISION.md). Architecture détaillée : [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## Lancer en local

```bash
npm install
npm run dev            # http://localhost:3200
```

Aucun service à installer : sans `DATABASE_URL`, l'application utilise **PGlite** (Postgres compilé en WASM) dans `.data/pglite`.
Au premier démarrage, les migrations sont appliquées et les données de démonstration chargées.

| Compte | E-mail | Mot de passe (local) |
|---|---|---|
| Admin plateforme (Atelier Truelle) | `firas@ateliertruelle.fr` | `ADMIN_PASSWORD`, sinon `atelier-admin-2026` hors production |
| Dirigeant (démo) | `karim@plomberie-demo.fr` | `DEMO_PASSWORD`, sinon `demo-plomberie-2026` |
| Chargés d'affaires (démo) | `julie@…`, `thomas@plomberie-demo.fr` | idem |
| ADV (démo) | `sophie@plomberie-demo.fr` | idem |

Repartir de zéro : `rm -rf .data`.

## Commandes

| Commande | Rôle |
|---|---|
| `npm run dev` / `build` / `start` | Next.js (le build embarque les migrations) |
| `npm test` | Tests vitest : services, permissions, isolation multi-entreprise, API |
| `npm run test:e2e` | Parcours complet dans Chromium + captures 390/1440 px clair/sombre dans `captures/` (après `npm run build`) |
| `npm run db:generate` | Après modification de `src/db/schema.ts` : nouvelle migration SQL versionnée dans `drizzle/` |
| `npm run db:migrate` | Applique les migrations sur `DATABASE_URL` (ou PGlite local) |
| `npm run db:seed` | Données de démonstration (idempotent) |
| `npm run typecheck` | TypeScript |

## Variables d'environnement

Voir [`.env.example`](.env.example).

| Variable | Obligatoire | Rôle |
|---|---|---|
| `DATABASE_URL` | en production | Postgres (Neon / Vercel Postgres). Absente → PGlite (en mémoire sur Vercel = **mode démo**, bandeau affiché) |
| `SESSION_SECRET` | en production | Signature HMAC des cookies de session (≥ 32 caractères) |
| `ADMIN_PASSWORD` | en production | Mot de passe du compte admin plateforme, réappliqué à chaque seed |
| `DEMO_PASSWORD` | non | Mot de passe des comptes de démonstration |
| `PGLITE_DIR` | non | Dossier PGlite (`memory://` pour une base éphémère) |
| `ATELIER_MIGRER_AU_DEMARRAGE` | non | `0` pour ne pas migrer au démarrage (migrations lancées par la CI) |

Les secrets vivent uniquement dans les variables Vercel « sensitive », jamais dans le dépôt.

## Passer en production avec Postgres (Neon)

1. Vercel → projet `atelier-os-pro` → **Storage** → **Create Database** → **Neon** (Marketplace) → connecter au projet : `DATABASE_URL` est ajoutée automatiquement.
2. Redéployer. Au démarrage, les migrations s'appliquent (verrou consultatif : sûr même avec plusieurs instances).
3. Charger les données de base une fois : `DATABASE_URL=… ADMIN_PASSWORD=… npm run db:seed` (crée Atelier Truelle, le compte admin et l'organisation de démo — supprimable ensuite).
4. Le bandeau « mode démo » disparaît dès que `DATABASE_URL` est présente.

## Architecture en bref

```
src/
  db/            schéma Drizzle, accès unique (PGlite ou Postgres), migrations embarquées, seed
  lib/
    services/    TOUTE la logique métier : crud.ts (fabrique), crm.ts, comptes.ts, journal.ts
    permissions.ts  matrice des droits par rôle + portées des jetons
    schemas.ts   validation zod (partagée interface / API / OpenAPI)
    api/         auth (cookie ou Bearer), idempotence, registre des ressources, OpenAPI
    modules.ts   navigation et modules « bientôt »
  app/
    (app)/       écrans connectés (server components)
    actions.ts   server actions de l'interface → mêmes services que l'API
    api/v2/      routes REST génériques pilotées par le registre
    docs/        documentation lisible de l'API
drizzle/         migrations SQL versionnées
tests/           vitest
scripts/         e2e Playwright, migrer, seed, embarquement des migrations
```

Règle d'or : **l'interface et l'API appellent les mêmes services**, qui reçoivent un `Contexte` (organisation, utilisateur, rôle, origine). L'organisation ne vient jamais de la requête : elle vient de la session ou du jeton.

## Ajouter un module (ex. phase 3 « Devis »)

1. **Schéma** : compléter la table d'extension `devis` dans `src/db/schema.ts` (elle porte déjà `organisation_id`, `client_id`, `chantier_id`), puis `npm run db:generate` → nouvelle migration `drizzle/000X_*.sql` à committer.
2. **Validation** : ajouter `devisCreation` / `devisModification` dans `src/lib/schemas.ts`.
3. **Droits** : ajouter la ressource `devis` dans `src/lib/permissions.ts` (une ligne par rôle : l'ADV en écriture, le chargé d'affaires sur ses clients…).
4. **Service** : `export const devisService = creerCrud({...})` dans un nouveau `src/lib/services/devis.ts` (filtres, recherche, références, propriété) ; ajouter les opérations propres (envoyer, signer) comme fonctions qui prennent un `Contexte` et journalisent.
5. **API** : une entrée dans `REGISTRE` (`src/lib/api/registre.ts`) → routes `/api/v2/devis` et documentation OpenAPI automatiques.
6. **Interface** : retirer `bientot: true` dans `src/lib/modules.ts`, changer `href`, créer `src/app/(app)/devis/…` ; les formulaires appellent des server actions qui appellent le service.
7. **Tests** : isolation (une organisation ne voit pas les devis d'une autre), droits par rôle, et un pas dans `scripts/e2e.mjs`.
