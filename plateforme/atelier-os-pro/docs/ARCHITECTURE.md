# Architecture — Atelier OS Pro

## Principes

1. **Une seule couche métier.** `src/lib/services/*` contient validation, droits, écriture et journal. Les server actions de l'interface (`src/app/actions.ts`) et l'API v2 (`src/lib/api/gestionnaires.ts`) ne font que traduire formulaire / HTTP vers ces services.
2. **Multi-entreprise par construction.** Chaque table métier porte `organisation_id`. Chaque service reçoit un `Contexte` dont l'`organisationId` provient de la session signée ou du jeton API — jamais d'un paramètre de requête. Toute lecture/écriture filtre sur cet identifiant, et toute référence (client, chantier, adresse, membre, étiquette) est vérifiée dans la même organisation avant écriture.
3. **Tout est journalisé.** Chaque création, modification (avec le détail `{ champ: [avant, après] }`), suppression, invitation, révocation… écrit une ligne dans `activites`, dans la même transaction.
4. **API first.** Le registre `src/lib/api/registre.ts` décrit les ressources ; les routes génériques et la documentation OpenAPI 3.1 en découlent.
5. **IA propose, humain valide** (phases suivantes) : les tables d'extension prévoient des statuts `brouillon` / `a_valider`.

## Base de données

Postgres via Drizzle ORM. `src/db/index.ts` choisit le pilote :

| Environnement | Pilote | Données |
|---|---|---|
| Production avec `DATABASE_URL` | `postgres` (postgres-js), Neon / Vercel Postgres | persistantes |
| Vercel sans `DATABASE_URL` | PGlite en mémoire | **mode démo**, réinitialisé à chaque démarrage d'instance |
| Local | PGlite fichier `.data/pglite` | persistantes en local |
| Tests | PGlite `memory://` | une base neuve par fichier de test |

Les migrations SQL générées par drizzle-kit (`drizzle/`) sont **embarquées** dans `src/db/migrations.generated.ts` au build, puis appliquées au démarrage sous verrou consultatif (`pg_advisory_xact_lock`) et tracées dans `__migrations`.

Identifiants : texte préfixé lisible (`cli_…`, `chn_…`, `tch_…`). Montants : entiers en centimes. Dates de calendrier : `date` ; horodatages : `timestamptz`.

### Schéma

```
organisations ─┬─< membres >── utilisateurs
               ├─< invitations            (jeton_hash, expire_le)
               ├─< jetons_api             (prefixe visible, hash, portees[], revoque_le)
               ├─< clients ─┬─< contacts
               │            ├─< sites (adresses d'intervention)
               │            ├─< chantiers ── site, charge_affaires (utilisateur)
               │            ├─< notes      (client et/ou chantier, auteur)
               │            ├─< taches     (client/chantier, assigné, échéance)
               │            └─< pieces_jointes (métadonnées + cle_stockage)
               ├─< etiquettes ─< etiquetages (polymorphe : clients | chantiers)
               ├─< activites               (journal : acteur, jeton, origine, changements jsonb)
               ├─< cles_idempotence        (24 h)
               └─ extensions (vides, phases 2-5) :
                    messages_email (phase 2) · appels, devis (phase 3) · factures (phase 4) · publications (phase 5)
```

Clés étrangères en cascade depuis l'organisation (suppression d'une organisation = suppression de ses données). Le journal n'a pas de clé vers la ressource : la trace survit à la suppression.

## Rôles et droits

Matrice dans `src/lib/permissions.ts`. « proprio » = autorisé seulement sur ce qui lui appartient.

| Ressource | Dirigeant | Chargé d'affaires | ADV |
|---|---|---|---|
| Clients | tout | lire tout, créer, modifier **ses** clients | lire, créer, modifier |
| Contacts, adresses | tout | sur **ses** clients | tout |
| Chantiers | tout | lire tout, créer/modifier **ses** chantiers (ou ceux de ses clients) | lire |
| Notes | tout | créer sur ses dossiers, modifier/supprimer les siennes | créer, modifier/supprimer les siennes |
| Tâches | tout | les siennes et celles de ses dossiers | créer, modifier celles qui lui sont assignées / qu'elle a créées |
| Équipe, invitations, réglages, jetons API | tout | lecture de l'équipe | lecture de l'équipe |

- **Admin plateforme** (`utilisateurs.est_admin_plateforme`, équipe Atelier Truelle) : agit comme dirigeant dans n'importe quelle organisation, liste et crée des organisations (`/organisations`).
- Garde-fous : impossible de retirer le dernier dirigeant actif ; désactiver un membre coupe ses sessions.
- L'interface masque ce qui n'est pas permis, mais seuls les services décident (tests `tests/permissions.test.ts`).

## Authentification

- **Mots de passe** : scrypt (N=16384, r=8, p=1, sel 16 octets), comparaison à temps constant, hash factice si le compte n'existe pas.
- **Session** : cookie `aos_session` httpOnly, `SameSite=Lax`, `Secure` en production, signé HMAC-SHA256 (Web Crypto, vérifiable dans le middleware). Contenu : utilisateur, organisation active, `version_session`, expiration (30 j). La version est revérifiée en base à chaque requête → changement de mot de passe ou désactivation = déconnexion immédiate partout.
- **Invitations** : lien `/invitation/<jeton>` (aléatoire 192 bits, seul son SHA-256 est stocké), valable 7 jours, usage unique, annulable.
- **Jetons API** : `aos_<préfixe>_<secret>` ; préfixe visible et indexé, secret affiché une seule fois, SHA-256 en base, révocable, expiration optionnelle. Le jeton agit avec le rôle de son créateur, restreint par ses portées (`clients:lecture`, `*:ecriture`…).

## API v2

- `GET/POST /api/v2/{ressource}`, `GET/PATCH/DELETE /api/v2/{ressource}/{id}` pour clients, contacts, sites, chantiers, notes, taches, pieces-jointes, etiquettes, activites (lecture), membres, invitations, jetons ; plus `/moi`, `/organisation`, `/etiquetages`.
- Pagination par curseur opaque (`cree_le desc, id desc`), `limite` ≤ 100, filtres d'égalité déclarés par ressource, `q` (recherche ILIKE), `majDepuis` (synchronisation).
- `Idempotency-Key` sur les POST : même clé + même corps = réponse rejouée (`Idempotency-Replayed: true`) ; corps différent = 422. Les secrets (jeton, lien d'invitation) ne sont pas conservés pour le rejeu.
- Erreurs : `{ "erreur": { "code", "message", "details"? } }` — 400 `json_invalide`, 401 `non_authentifie`, 403 `interdit`, 404 `introuvable`, 405, 409 `conflit`, 422 `validation` / `idempotence_conflit`.
- Spécification : `/api/v2/openapi.json` (générée depuis zod + tables Drizzle) ; lecture humaine : `/docs`.

## Interface

Next.js 14 App Router, server components + server actions, Tailwind. Langage visuel repris de la v1 (fonds gris clair / noir, cartes arrondies, typographie système Apple). Mobile d'abord : barre d'onglets en bas (Accueil, Clients, Chantiers, Ma journée, Plus) ; barre latérale sur ordinateur. La couleur principale de l'organisation (Réglages) devient l'accent de l'interface, éclaircie en mode sombre. Les modules futurs (Boîte mail, Devis, Factures, Marketing, Statistiques) sont déclarés dans `src/lib/modules.ts` avec leur page de présentation.

## Choix et limites connues

- **PGlite en mode démo sur Vercel** : chaque instance serverless a sa propre base en mémoire ; deux requêtes peuvent tomber sur des instances différentes. Acceptable pour une démo (bandeau affiché), pas pour l'usage réel → brancher Neon.
- **Fichiers** : seules les métadonnées existent ; l'interface `Stockage` (`src/lib/stockage.ts`) attend l'implémentation Vercel Blob.
- **E-mails sortants** (invitations) : le lien est affiché pour être transmis ; l'envoi automatique viendra avec la phase 2.
- Recherche : ILIKE simple ; passer à `tsvector` + `unaccent` quand les volumes le justifieront.
