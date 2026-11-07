# Atelier OS

Le suivi commercial de l'Atelier Truelle : prospects, maquettes, e-mails, ouvertures, clics, relances, appels, rendez-vous, devis, signatures. Remplace le tableau Excel. Une seule personne se connecte ; Claude le pilote par l'API.

Pages : tableau de bord (activité du jour et de la semaine, chiffre d'affaires signé, en devis pondéré, récurrent, objectif du mois), prospects (filtres par étape, métier, vague), pipeline en colonnes (glisser-déposer), agenda (rendez-vous, rappels, .ics), e-mails, réglages (objectif, import et export CSV). Recherche globale : ⌘K ou la loupe.

Next.js 14 (App Router), TypeScript, Tailwind 3. Interface en français, mode sombre automatique, pensée pour l'iPhone.

## Variables d'environnement

| Variable | Rôle |
|---|---|
| `ADMIN_PASSWORD` | mot de passe de la page de connexion |
| `API_TOKEN` | jeton de l'API (`Authorization: Bearer ...`) |
| `SESSION_SECRET` | signature du cookie de session (32 caractères au moins) |
| `BLOB_READ_WRITE_TOKEN` | ajouté par Vercel quand un magasin Blob est relié au projet. Absent : les données vont dans `data/db.json` |
| `EMAIL_SENDING_ENABLED` | `true` pour autoriser l'envoyeur (désactivé par défaut) |
| `APP_URL` | facultatif : adresse publique utilisée dans les liens suivis |

Voir `.env.example`. Aucun secret n'est dans le dépôt.

## Développement

```bash
npm install
ADMIN_PASSWORD=essai API_TOKEN=essai SESSION_SECRET=une-longue-phrase-secrete npm run dev   # http://localhost:3100
npm run build && npm run test:e2e   # voir scripts/e2e.mjs (Playwright, captures dans captures/)
```

## Stockage

Tout passe par `src/lib/db.ts` (`readDb`, `updateDb`). En production : un document JSON dans un magasin Vercel Blob privé (`atelier-os-data`), écrit avec contrôle d'ETag. En développement : `data/db.json`. Pour passer à Postgres ou KV, réécrire les deux fonctions du `backend` de ce fichier ; rien d'autre ne change. Au premier lancement, la base est remplie avec les 20 prospects de `prospection/classement-20-prochaines.md` et les 4 maquettes (Gaz Flash, Entreprise Rousseau, Sandrin-Rousseau, Somsou-Pons). Seules les adresses e-mail publiques déjà relevées dans le dépôt y figurent.

Migration douce : `src/lib/migration.ts` complète à la lecture les champs ajoutés après coup (métier, note Google, formule, montants, agenda, réglages…). La base n'est jamais réinitialisée ; un document existant reste valide.

## Suivi des ouvertures et des clics

- Pixel : `/t/o/<id>.gif` (l'identifiant est celui de l'e-mail du journal).
- Lien : `/t/c/<id>` enregistre le clic puis redirige vers la maquette de l'e-mail (la destination vient du journal, jamais de l'adresse appelée).
- Sont ignorés : les robots connus et toute ouverture dans les 10 s suivant l'envoi. Ces deux routes sont les seules publiques.
- Limites : les e-mails partent en texte simple, donc le pixel n'existe que si le message est en HTML ; le clic est le signal le plus fiable. Apple Mail et Gmail préchargent parfois les images : une ouverture n'est qu'un indice.

## Envoyeur

`src/lib/sender.ts`, fonction `send(emailId)`. Désactivée par défaut, aucun transport branché : `transport()` lève une erreur. Garde-fous : 15 e-mails par jour, jamais le week-end, uniquement 8 h – 9 h 30 et 13 h 30 – 14 h 30 (heure de Paris), pas de prospect qui a répondu ou demandé l'arrêt. Pour brancher Gmail ou Resend : remplir `transport()` puis mettre `EMAIL_SENDING_ENABLED=true`.

## API

Voir `API.md` (lisible par un agent). Exemples :

```bash
URL=https://atelier-os.vercel.app ; T="Authorization: Bearer $API_TOKEN"

curl -s -H "$T" $URL/api/v1/tableau-de-bord
curl -s -H "$T" $URL/api/v1/a-faire
curl -s -H "$T" "$URL/api/v1/prospects?statut=a_contacter&vague=1"
curl -s -X POST -H "$T" -H "Content-Type: application/json" \
  -d '{"entreprise":"Dupont Plomberie","arrondissement":"11e","emails":"contact@exemple.fr"}' $URL/api/v1/prospects
curl -s -X POST -H "$T" -H "Content-Type: application/json" \
  -d '{"type":"appel","detail":"À rappeler jeudi"}' $URL/api/v1/prospects/gaz-flash/evenements
curl -s -X POST -H "$T" -H "Content-Type: application/json" \
  -d '{"prospectId":"gaz-flash","modeleId":"m1"}' $URL/api/v1/emails
curl -s -X POST -H "$T" -H "Content-Type: application/json" \
  -d '{"prospectId":"gaz-flash","modeleId":"m2","echeance":"2026-11-03"}' $URL/api/v1/relances
curl -s -X DELETE -H "$T" $URL/api/v1/relances/<id>
```

## Plus tard

Espace dirigeants (rapports, réseaux sociaux, avis clients), connecteur d'envoi, rappels par notification.
