# Lire un site sans Firecrawl : le bac à sable Vercel

L'environnement de travail de Claude ne peut pas joindre les sites des prospects, et Firecrawl est payant. Solution utilisée depuis le 25 octobre 2026 : un **bac à sable Vercel** (Vercel Sandbox), une petite machine avec accès internet, pilotée par l'outil Vercel.

1. Créer le bac à sable (`create_sandboxes_v4`, `networkPolicy: allow-all`, rattaché au projet Vercel de la maquette).
2. Y lancer `curl` sur les pages du site (`run_session_command`), puis lire le résultat (`get_session_command_logs`, ou `read_session_file` par morceaux de 1 500 octets).
3. Lister les images (`grep src=`), les télécharger, les inspecter avec Python (dimensions).
4. Dans la maquette, un script `prebuild` télécharge les images au moment du build Vercel (le build a accès à internet) : voir `maquettes/somsou-pons/scripts/fetch-site-photos.mjs`.

Coût : compris dans le compte Vercel, sans crédits Firecrawl. Arrêter le bac à sable après usage (`stop_session`).
