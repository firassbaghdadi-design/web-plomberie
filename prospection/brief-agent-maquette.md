# Brief commun : agent « maquette »

> Chaque agent construit **une** maquette pour **une** entreprise. Plusieurs agents travaillent en même temps dans le même repo : respecte les règles de cohabitation ci-dessous.

## 1. À lire avant d'écrire une ligne
- `prospection/gout-firas.md` : la charte de Firas. Elle prime sur tout le reste.
- `prospection/references-design.md`
- `prospection/standards-maquettes.md` : la Bible SEO, la règle Vercel–GitHub, le favicon et l'Open Graph.
- `prospection/photos-utilisees.md` : le registre des photos et les photos bannies.
- Les modèles de structure : `maquettes/kuschnick` et `maquettes/entreprise-clairon`. Ce sont des projets Next.js 14 App Router en TypeScript, avec Tailwind et fontsource.
- Pour un slider avant/après : `maquettes/somsou-pons` et `maquettes/martinet-thibault`.

## 2. Exigences (non négociables)
- **Épuré blanc, façon Apple**, avec des typographies fines (graisse 300 à 500).
  - Une seule couleur d'accent, tirée du logo.
  - Rien de « maternelle » : pas de manuscrit, pas de capitales grasses condensées, pas de badges, pas d'aplats vifs, pas de bulles.
- **Le test du directeur** : il faut un « waouh » en 3 secondes, dès le héros. **Le H1 = métier + zone géographique**, par exemple « Plombier chauffagiste à Paris 14e ».
- **La police et le concept créatif** sont **imposés par l'orchestrateur** (voir ton prompt).
  - Le concept est fin, élégant et lisible sur mobile. Il sert de fil conducteur à toute la page.
  - Les animations restent sobres.
- **Les pages.**
  - Reprends toutes les pages et tous les textes du site actuel, s'il existe.
  - Ajoute des pages métier × zone (l'arrondissement + 4 ou 5 arrondissements ou communes voisines), avec des textes **tous différents**.
  - Ajoute une page contact et une page de mentions légales.
- **Le favicon et le partage** : `src/app/icon.png`, `src/app/apple-icon.png` et les balises Open Graph.
  - L'image `og:image` doit pointer vers l'adresse Vercel de la maquette, pas vers le futur domaine du client, qui n'existe pas encore. Exemple de code : `SHARE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL ? "https://"+… : SITE_URL`, comme dans `maquettes/kuschnick/src/lib/site.ts`.
  - La balise canonical, elle, garde le vrai domaine du client.
- **Les photos.**
  - Celles de l'entreprise d'abord, téléchargées par un script de prébuild au moment du build Vercel. Le container local n'a pas internet ; il a WebFetch et WebSearch.
  - Sinon des photos Pexels d'artisans plausibles pour l'Île-de-France, ou des gros plans de mains et d'outils, choisies sur leur titre exact (WebSearch `site:pexels.com`).
  - **Jamais** une photo déjà présente dans le registre (fais `git pull` avant de choisir) ; jamais une photo bannie.
  - Les photos avant/après sont présentées en slider.
- **Aucun fait inventé.** Ce qui n'est pas sûr reste générique et va dans la liste « à confirmer ».
- **La validation.**
  - `npm run build` passe.
  - L'audit SEO donne 0 problème.
  - Captures Playwright du héros en 390 et 1440 px, enregistrées dans ton dossier du scratchpad.
  - Relis le héros comme un directeur exigeant ; s'il n'est pas « waouh », recommence.

## 3. Cohabitation (plusieurs agents en parallèle)
- Ne touche **qu'à** `maquettes/<ton-slug>/` et **à ta propre section** à la fin de `prospection/photos-utilisees.md`, sous un titre `## <ton-slug>`. Ne modifie aucun autre fichier.
- Commite **souvent**, avec seulement tes fichiers (`git add maquettes/<slug> prospection/photos-utilisees.md`). Pour pousser :
  `git pull --rebase --autostash origin claude/plumbing-outreach-idf-yw3jbm && git push origin HEAD:claude/plumbing-outreach-idf-yw3jbm`. Si tu travailles dans un worktree, fais un `npm install` dans ton dossier.
  - En cas de rejet, recommence. En cas de conflit sur le registre des photos, garde les deux versions.
- Le container peut redémarrer : un commit poussé ne se perd pas.
- **Sandbox Vercel** : 4 appels `run_session_command` au maximum, puis arrête. Préfère un script de prébuild.
- N'utilise jamais `pkill -f`. Passe par `ps` puis `kill <pid>`.
- `node_modules` et `.next` ne se commitent jamais.

## 4. La mise en ligne
1. Pousse le dossier.
2. **Ensuite seulement**, crée le projet avec `mcp__Vercel__create_project`, **sans teamId** :
   - name `<slug>-maquette` ;
   - `gitRepository: {repo:"firassbaghdadi-design/web-plomberie", type:"github"}` ;
   - `rootDirectory:"maquettes/<slug>"` ;
   - `framework:"nextjs"` ;
   - `enableAffectedProjectsDeployments:true`.
3. Déploie en production avec `create_deployment`, sans teamId.
4. Vérifie que le déploiement atteint l'état READY avec `get_deployment`. En cas d'échec, lis les événements avec `list_deployment_events`, corrige, puis pousse.

## 5. Le rapport final (court, en français)
- le concept ;
- l'URL ;
- le SHA du commit ;
- ce qui a été repris du site ;
- les photos à vérifier ;
- les faits à confirmer.
