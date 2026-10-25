# API Atelier OS (pour un agent)

Base : `https://<application>/api/v1`. Toutes les réponses sont du JSON, les textes sont en français.

## Authentification

Chaque requête porte l'en-tête `Authorization: Bearer <API_TOKEN>`. Sans lui : `401`.
Erreurs : `{ "erreur": "message" }` avec le code HTTP `400` (données invalides), `404` (introuvable), `409` (action impossible dans l'état actuel).

## Vocabulaire

- Étapes d'un prospect (`statut`) : `a_contacter`, `maquette_envoyee`, `ouverte`, `appel_fait`, `rendez_vous`, `devis`, `signe`, `perdu`.
- Types d'événement : `note`, `appel`, `email_envoye`, `email_ouvert`, `clic`, `reponse`, `rendez_vous`, `devis`, `signature`, `statut`, `relance`, `maquette`.
- Les dates sont des chaînes ISO 8601 (UTC). Les échéances de relance sont des jours `AAAA-MM-JJ` (heure de Paris).

## Règles automatiques (à connaître avant d'écrire)

- Un événement `appel`, `rendez_vous`, `devis` ou `email_envoye` fait avancer l'étape du prospect, jamais reculer. `signature` passe à `signe`.
- Un événement `reponse`, une signature, `stop: true` ou l'étape `perdu` annulent toutes les relances planifiées. Créer une relance pour un prospect qui a répondu ou ne veut plus être contacté renvoie `409`.
- Quand un e-mail du modèle `m1` passe à « envoyé », deux relances sont planifiées : modèle `m2` à J+4 et `m3` à J+10 (reportées au jour ouvré suivant).
- Les ouvertures (pixel) et clics (lien suivi) sont enregistrés par l'application ; les robots connus et les ouvertures dans les 10 s suivant l'envoi sont ignorés.
- L'API n'envoie aucun e-mail réel. `POST /emails/{id}/envoyer` passe par `send()` et ses garde-fous, et répond `envoye: false` tant que l'envoyeur est désactivé.

## Routes

### Prospects
- `GET /prospects?q=&statut=&vague=` : `{ total, prospects[] }`
- `POST /prospects` : crée. Champs : `entreprise` (obligatoire), `dirigeant`, `emails` (tableau ou chaîne séparée par des virgules ; ne jamais inventer d'adresse), `telephone`, `ville`, `arrondissement`, `siteActuel`, `maquetteUrl` (http/https), `score` (0-100), `statut`, `vague`, `offre` (texte libre), `notes`, et la vente : `formule` (`essentiel`, `visibilite`, `croissance`, `personnalise` ou vide), `montantDevis` et `montantMensuel` (euros HT, nombre ou chaîne « 1 490,50 »), `signeLe` (`AAAA-MM-JJ`). Réponse `201 { prospect }`.
- `GET /prospects/{id}` : `{ prospect, evenements[], emails[], relances[] }`
- `PATCH /prospects/{id}` : mêmes champs, plus `stop` (booléen). `{ prospect }`
- `DELETE /prospects/{id}` : supprime le prospect et son historique.

### Argent et réglages
- Formules : Essentiel 1 490 € + 49 €/mois, Visibilité 2 490 € + 99 €/mois, Croissance 3 490 € + 199 €/mois, Personnalisé (montants libres). Choisir une formule remplit `montantDevis` et `montantMensuel` s'ils ne sont pas fournis dans la même requête. Passer à `signe` (ou un événement `signature`) remplit `signeLe` avec le jour même s'il est vide.
- Valeur d'un prospect : `montantDevis`, sinon le prix de sa formule, sinon 0.
- `GET /argent` : `{ mois, caSigneMois, signesDuMois, caSigneTotal, caDevis, caDevisPondere, revenuMensuel, objectifMensuel, progression (0-1), parEtape[{statut, ponderation, nombre, montant, pondere}] }`. Pondération par étape : à contacter 5 %, maquette envoyée 10 %, ouverte 20 %, appel fait 30 %, rendez-vous 50 %, devis 70 %. Le revenu mensuel récurrent additionne les abonnements des prospects signés. Aussi renvoyé dans `GET /tableau-de-bord` sous `argent`.
- `GET /reglages` : `{ reglages: { objectifMensuel } }` ; `PATCH /reglages` : `{ "objectifMensuel": 8000 }`.

### Agenda (rendez-vous et rappels)
- Objet : `{ id, prospectId|null, genre: "rendez_vous"|"rappel", titre, debut (ISO UTC), dureeMin, lieu, detail, fait, creeLe, modifieLe }`.
- `GET /agenda?du=AAAA-MM-JJ&au=AAAA-MM-JJ&prospectId=&fait=true|false` : `{ total, rendezVous[] }` triés par début (jours en heure de Paris).
- `POST /agenda` : `{ "prospectId": "gaz-flash", "genre": "rendez_vous", "jour": "2026-10-29", "heure": "10:00", "dureeMin": 60, "lieu": "Sur place", "titre": "Présentation de la maquette" }` → `201 { rendezVous }`. `jour` + `heure` sont en heure de Paris (heure d'été gérée) ; on peut donner `debut` (ISO) à la place. Titre par défaut « Rendez-vous · Entreprise ». Un rendez-vous lié à un prospect est inscrit dans son historique (`rendez_vous`) et fait avancer l'étape à « Rendez-vous » ; un rappel ajoute une note.
- `GET /agenda/{id}` : `{ rendezVous, prospect }` ; `PATCH /agenda/{id}` : mêmes champs (`fait: true` pour cocher) ; `DELETE /agenda/{id}`.
- `GET /agenda/{id}/ics` : fichier `.ics` (text/calendar, alerte 30 min avant un rendez-vous, à l'heure pour un rappel) à ouvrir dans Calendrier, Google Agenda ou Outlook.

### Pipeline (kanban)
- `GET /pipeline` : `{ colonnes[{ statut, label, nombre, prospects[] }] }`, une colonne par étape, dans l'ordre du parcours.
- `POST /pipeline/deplacer` : `{ "prospectId": "...", "statut": "devis" }` → `{ prospect }`. Change l'étape (dans les deux sens, contrairement aux règles automatiques) et journalise un événement `statut` (« Déplacé dans le pipeline »). Passer à `perdu` ou `signe` annule les relances.

### Recherche globale
- `GET /recherche?q=texte` : `{ q, prospects[], emails[], notes[] }` (8 au plus par groupe). Chaque résultat : `{ genre, id, prospectId, titre, extrait, lien }`. Tous les mots doivent apparaître (casse et accents ignorés). Prospects : nom, dirigeant, ville, e-mails, téléphone, site, offre, étape. E-mails : objet, texte, destinataire. Notes : notes de la fiche et historique (notes, appels, réponses, rendez-vous, devis).

### Import et export CSV
- `GET /prospects/export` : fichier CSV (UTF-8 avec BOM, séparateur `;`, s'ouvre dans Excel), toutes les colonnes, une ligne par prospect. Les e-mails sont séparés par des virgules dans leur cellule.
- `POST /prospects/import` : `{ "csv": "<contenu>", "apercu": true }` (ou le CSV brut avec `Content-Type: text/csv` et `?apercu=1`). Séparateur `;`, `,` ou tabulation détecté. Colonne `entreprise` obligatoire (synonymes acceptés : société, nom…) ; les autres colonnes sont celles de l'export ou leurs synonymes (e-mail, téléphone, site, étape…). `statut` et `formule` acceptent la clé ou le libellé (« Devis », « Visibilité »). Un site sans `http` reçoit `https://`.
- Réponse : `{ apercu, nouveaux, doublons, erreurs, colonnesIgnorees[], lignes[{ ligne, entreprise, emails, etat: "nouveau"|"doublon"|"erreur", motif, doublonDe? }] }`, plus `importes` et `prospects[{id, entreprise}]` quand `apercu` est faux. Doublon = même nom d'entreprise (sans accents, ponctuation ni forme juridique) ou une adresse e-mail déjà connue, dans la base ou plus haut dans le fichier : il est ignoré, jamais fusionné. Toujours appeler d'abord avec `apercu: true` (rien n'est écrit). 2 000 lignes au plus.

### Événements
- `GET /prospects/{id}/evenements`
- `POST /prospects/{id}/evenements` : `{ "type": "appel", "titre": "optionnel", "detail": "texte", "date": "optionnel ISO" }` → `201 { evenement }`
- `DELETE /evenements/{id}`

### Tableau de bord et à faire
- `GET /tableau-de-bord` : `{ date, jour{emailsEnvoyes,ouvertures,clics,reponses,appelsFaits,rendezVous}, semaine{...}, appelsAFaire, relancesDues, entonnoir[{statut,nombre}], totaux, aFaire[] }`
- `GET /a-faire` : `{ actions[] }` avec `genre` = `rendez_vous` | `rappel` | `relance` | `appel` | `envoi`, `prospectId` (vide pour un rendez-vous sans prospect), `entreprise`, `titre`, `detail`, `urgence`, `relanceId` pour une relance, `agendaId` et `heure` (HH:MM, Paris) pour un rendez-vous ou rappel du jour non fait. Les rendez-vous du jour viennent en tête, par heure.

### E-mails
- `GET /emails?prospectId=&statut=` ; `GET /emails/{id}`
- `POST /emails` : `{ "prospectId": "...", "modeleId": "m1" }` crée un brouillon rempli depuis le modèle (nom du dirigeant, arrondissement, lien suivi `/t/c/<id>`). On peut fournir `objet`, `corps`, `destinataire`, `cible` à la place. `statut: "envoye"` (avec `envoyeLe` facultatif) enregistre un e-mail déjà parti.
- `POST /emails/{id}/marquer-envoye` : journalise l'envoi (envoi manuel hors application) et planifie les relances.
- `POST /emails/{id}/envoyer` : envoi via `send()` (désactivé par défaut). Réponse `{ envoye: boolean, raison? }`.
- `POST /emails/{id}/annuler`
- `GET /modeles` : les 8 modèles (`m1`, `m2`, `m3`, `m-confirmation`, `m4` à `m7`).
- `GET /envoyeur` : état de l'envoyeur (activé, quota du jour, créneaux, stockage).

### Relances
- `GET /relances?statut=planifiee&prospectId=`
- `POST /relances` : `{ "prospectId": "...", "modeleId": "m2", "echeance": "2026-11-03" }` → `201 { relance }`
- `DELETE /relances/{id}` : annule (statut `annulee`, conservée dans l'historique).

## Exemple de séquence

```bash
curl -s -H "Authorization: Bearer $API_TOKEN" $URL/api/v1/a-faire
curl -s -X POST -H "Authorization: Bearer $API_TOKEN" -H "Content-Type: application/json" \
  -d '{"type":"appel","detail":"Il a regardé la maquette, rappeler jeudi"}' $URL/api/v1/prospects/gaz-flash/evenements
```
