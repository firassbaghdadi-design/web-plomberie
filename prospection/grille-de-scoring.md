# Grille de scoring des cibles

Objectif : noter chaque entreprise de plomberie repérée dans le vivier Sirene pour sortir un top 10 de cibles prioritaires, sans y passer des heures par prospect.

## Critères et pondération

| Critère | Poids | Détail |
|---|---:|---|
| Nombre d'avis Google | 20 | Plus il y en a, plus l'entreprise est établie et active. Seuil cible : 50+ avis. |
| Avis récents | 15 | Avis des 6-12 derniers mois → entreprise active, planning rempli, clientèle actuelle. Pas d'avis récents = signal faible même si le total est élevé. |
| Note Google | 10 | 4,0+ attendu. En dessous, le problème n'est pas (que) le site — prudence sur la prestation vendable. |
| Effectif salarié | 15 | 3 à 20 salariés = budget probable + besoin réel de remplir le planning. Hors cible : 0 salarié (pas de budget) ou 50+ (a déjà un service marketing). |
| Ancienneté de l'entreprise | 10 | Date de création ancienne (avant ~1980) → clientèle fidèle, réputation locale forte, argument « c'est nous mais en mieux » très efficace. |
| Âge / qualité du site actuel | 20 | Pas de site = 0 point (mais capte mal l'intérêt : rien à montrer en avant/après). Site non responsive, HTTPS absent, design pré-2015, pas de bouton d'appel cliquable, pas d'avis affichés = score élevé. |
| Présence d'un site du tout | 10 | Bonus/malus : un site existant (même daté) permet l'argument avant/après direct. Absence totale de site = cible à traiter différemment (pas de maquette comparative possible, mais toujours prospectable). |

Score sur 100. Seuils indicatifs :
- **80-100** : cible prioritaire (pilote).
- **60-79** : cible sérieuse, deuxième vague.
- **< 60** : à écarter ou traiter autrement (pas de site du tout → approche différente, cf. note ci-dessous).

## Note méthodologique importante (retour terrain)

Sur le premier échantillon de 10 entreprises recherchées, **la majorité n'a aucun site web identifiable** — seulement des fiches d'annuaires tiers (Pages Jaunes, Bottin, societe.com). C'est cohérent avec le profil recherché (entreprises anciennes, pas de budget marketing historique) mais ça change la mécanique de prospection pour ces cas :

- Pas de site = pas de comparatif avant/après possible → l'angle de vente devient *« vous n'existez pas en ligne alors que vous avez [X] avis et [Y] ans d'activité, voici ce que ça pourrait donner »*, maquette construite à partir de la fiche Google (logo, photos, avis, ton) plutôt que d'un site existant.
- Avec site daté = angle classique avant/après, le plus fort pour convaincre vite.

Pondération ajustée en conséquence : une entreprise sans site mais avec beaucoup d'avis récents et un bel effectif reste une cible de premier choix — elle garde un score élevé sur les critères avis/effectif/ancienneté même sans points sur « âge du site ».

## Outils pour noter chaque critère

- **Avis Google (note + nombre + fraîcheur)** : fiche Google Business de l'entreprise (recherche directe), ou annuaires agrégateurs (Bottin.fr affiche parfois une note/nombre d'avis proche de celle de Google).
- **Effectif + date de création** : Sirene / Pappers / societe.com (SIRET).
- **Site web (existence + qualité)** : recherche + vérification manuelle (HTTPS, responsive, bouton d'appel, avis affichés, date du design).
- **PageSpeed/mobile** : https://pagespeed.web.dev/ une fois un site identifié — à faire pour les cibles retenues en top 10 avant l'envoi de la maquette.
