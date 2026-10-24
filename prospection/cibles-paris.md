# Cibles Paris — 10 premières entreprises du vivier Sirene (6-49 salariés, NAF 43.22A)

Données issues de recherches web (annuaires, registres légaux), mises à jour le 19/10/2026. Cet environnement n'a accès ni à Google Maps/Avis, ni à l'API Sirene, ni aux sites des prospects (hôtes bloqués par la politique réseau de la session). **Rien ci-dessous n'a été vérifié à la source : chaque ligne est à confirmer avant tout envoi.**

> Correction : une première version de ce fichier concluait qu'« aucune des 10 entreprises n'a de site web ». C'était faux : une recherche ciblée (nom + adresse + SIREN) retrouve un site pour 6 d'entre elles. Un moteur de recherche généraliste ne suffit pas pour conclure à l'absence de site.

## Tableau de recherche

| # | Entreprise | Arr. | Adresse / SIREN | Site web trouvé (non audité) | Avis (sources tierces, pas Google) | Effectif / ancienneté | Remarques |
|---|---|---|---|---|---|---|---|
| 1 | Entreprise Rousseau | 14e | 100 rue de la Tombe Issoire, 75014 | entreprise-rousseau.fr (tél. 01 45 38 91 91, contact@entreprise-rousseau.fr), sandrin-rousseau.com (Bourg-la-Reine, tél. 01 46 61 88 55), un site Wix et cuisine-rousseau.fr | 4,2/5, 20+ notes (plombier-express) ; PagesJaunes 4 avis dont 1 négatif répondu | 6-49 (Sirene) ; « depuis 1945 / plus de 80 ans » selon leurs sites (1948 dans le brief) | Homonyme au RCS d'Orléans à ne pas confondre. Téléphones divergents selon les annuaires. |
| 2 | Ets Fontaine Père et Fils | 10e | non confirmée à Paris | aucun | non confirmé | non confirmé | Nom très présent dans les Yvelines (78) ; homonymie à lever par SIRET. |
| 3 | Entreprise O Estrade | 15e | 104 rue de Sèvres, 75015 / SIREN 592 019 806 | o-estrade.com probable (« depuis 1958 », contact à Vanves) : lien à vérifier | non confirmé | depuis 1959 (INSEE) | Fiche e-pro : « site non communiqué ». |
| 4 | Somsou-Pons | 16e | 9 rue Gavarni, 75016 / SIREN 582 097 457 | somsoupons.fr (page agences en `http://…/agences.html`, ce qui suggère un site ancien) | Bottin 4,5/5 (10+) ; PagesJaunes 1/5 sur 2 avis (dont un de 2024) ; Eldo 0 avis | 20-49 (registre 2022) ; depuis 1958 ; établissements Paris 17e et La Garenne-Colombes | Entreprise familiale (Lebailly). Plomberie, chauffage, couverture. |
| 5 | CP Étoile | 17e | 14 avenue Carnot, 75017 / SIREN 429 529 811 | cpetoile.com (CMS type Drupal : `/content/plomberie-0`) **et** cpetoile.vercel.app (site récent apparemment déjà refait sur Vercel) | Kontakts 2,9/5 (43), plombier-express 2,7/5 (40+), PagesJaunes 1 avis 5/5 de 2018 | ~35 salariés (leur site), CA 4,4 à 6,5 M€ selon la source ; créée en 2000 (ex-HD Étoile, rebaptisée en 2014) | Réputation en ligne mitigée et refonte probablement déjà faite : mauvaise cible pilote. |
| 6 | Amtech | 11e | 9 rue Alexandre Dumas, 75011 / SIREN 338 912 694 | amtech.fr | aucun | non confirmé | Reprise récente par Groupe Batisante (mai 2026) : décision d'achat probablement au niveau du groupe. |
| 7 | Anciens Établissements Kuschnick | 11e | 54 rue Trousseau, 75011 / SIREN 572 182 178 | kuschnick.fr (cité par Verif) | aucun | 10-49 selon les sources ; SA, capital 121 800 € ; depuis 1957 | Couverture, plomberie, fumisterie, chauffage central. |
| 8 | SL2A | 15e | non localisée | aucun | aucun | non confirmé | Nom trop générique : retrouver le SIRET via Sirene. |
| 9 | Entreprise Charles Pereira | 15e | non confirmée | aucun | aucun | non confirmé | Un seul résultat, probablement un homonyme (75001). |
| 10 | VBC | 17e | non localisée | aucun | aucun | non confirmé | Nom trop générique : retrouver le SIRET via Sirene. |

## Classement provisoire (à revoir dès que Google Maps et les sites sont consultables)

Le critère « âge du site » et le critère « avis Google » n'ont pu être notés pour aucune entreprise. Ce classement repose donc sur ce qui est documenté : ancienneté, effectif, réputation tierce, signes d'un site ancien.

1. **Entreprise Rousseau (14e)** — **cible pilote retenue.** Meilleur signal de réputation (4,2/5 sur 20+ notes), très grande ancienneté, entreprise familiale, deux sites distincts (donc un argument d'unification de la marque), coordonnées trouvées. Réserve : adresse, téléphone et date de création à confirmer.
2. **Somsou-Pons (16e)** — 20-49 salariés, 3 établissements, site probablement ancien (`http`, `.html`). Réserve : peu d'avis, certains très négatifs (une relecture de la réputation fait partie de l'argumentaire).
3. **Anciens Établissements Kuschnick (11e)** — ancienne SA établie, site à auditer, aucun avis trouvé.
4. **Entreprise O Estrade (15e)** — ancienne (1959) ; confirmer que o-estrade.com est bien son site.
5. **Amtech (11e)** — à clarifier (rachat par un groupe).
6. **CP Étoile (17e)** — rétrogradé : avis tiers de 2,7 à 2,9/5 et site récent sur Vercel déjà en place ; reste intéressant pour une offre « avis + fiche Google » plutôt qu'une refonte.
7-10. Ets Fontaine Père et Fils, SL2A, Entreprise Charles Pereira, VBC — identités à confirmer par SIRET.

## Prochaines actions

1. Autoriser dans la politique réseau de l'environnement les domaines des prospects (voir la liste ci-dessus) et `pagespeed.web.dev`, pour auditer les sites, extraire les chartes et mesurer mobile/vitesse.
2. Consulter les fiches Google Maps (note, nombre d'avis, fraîcheur, photos) : critère n°1 de la grille.
3. Lever les homonymies et confirmer SIREN, adresse, téléphone, date de création sur Sirene/Pappers.
4. Étendre la liste à 30 entreprises (phase 2) : les 10 exemples du brief ne sont qu'un échantillon du vivier de 212.
5. Maquette pilote en cours : `maquettes/entreprise-rousseau/` (voir son README pour ce qui reste à confirmer).
