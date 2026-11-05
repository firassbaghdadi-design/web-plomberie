# Brief commun : refonte v2 d'une maquette (niveau Bastien & Trebulle)

1. `git pull --rebase --autostash origin claude/plumbing-outreach-idf-yw3jbm`.
2. Lire `prospection/gout-firas.md` en ENTIER. Les sections datées du 30/10, du 31/10 et du 04/11 priment, ainsi que « Réflexe page contact ».
   Regarder la référence `prospection/references/bastien-trebulle-valide-par-firas.png`.
3. Refaire **tout le style visuel** de la maquette, sur toutes les pages, dans la direction imposée par ton prompt :
   - **Héros** : une composition de magazine, digne d'Awwwards. Il est construit autour d'une **vraie grande photo** (celles de l'entreprise d'abord) ou d'un objet signature travaillé avec un soin d'orfèvre. Le H1 dit le métier et la zone, en très grand.
   - **Photos** : de vraies photos en grand partout. Le concept dessiné reste un accent fin.
   - **Page contact** : le formulaire est visible sans défiler.
   - **Ne pas copier** une autre maquette.
   - **Garder** : textes, SEO, pages, scripts de prébuild, sliders avant/après.
4. **Vérifier le rendu.**
   - `npm run build`, puis `git checkout --` des `*.generated.json` modifiés.
   - Lancer `npx next start` sur un port libre.
   - Faire des captures Playwright du héros et de la page entière en 1440 et 390 px, dans `/home/user/web-plomberie/captures/<slug>-v2-*.png` (en local, les photos manquent : juge la composition).
   - Arrêter le serveur avec `ps` + `kill`, jamais `pkill -f`.
5. **Livrer.**
   - Ne commiter que `maquettes/<slug>`.
   - `git pull --rebase --autostash origin claude/plumbing-outreach-idf-yw3jbm && git push origin HEAD:claude/plumbing-outreach-idf-yw3jbm`.
   - Ne pas appeler `create_deployment`.
6. **Rapport** en 4 lignes : la direction, ce qui a changé, le SHA, les captures.
