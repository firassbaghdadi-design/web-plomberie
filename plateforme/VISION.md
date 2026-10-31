# Atelier OS — vision produit

> Le cœur numérique d'une entreprise du bâtiment. Un seul outil, piloté par l'IA, validé par l'humain.
> Fini Outlook, Excel et les logiciels séparés. Style épuré « à la Apple », API first, IA partout.

## Pour qui

- **Le dirigeant** : il voit tout, décide et valide.
- **Les chargés d'affaires** : ils gèrent les clients, les appels, les devis et les chantiers.
- **L'ADV (administration des ventes)** : elle gère les devis, les factures et les relances.

Premier client : Atelier Truelle lui-même. L'outil est utilisé en interne avant d'être vendu aux artisans avec leur site.

## Les modules

### 1. Boîte mail intelligente (remplace Outlook)
- Adresse e-mail de l'entreprise branchée directement dans le CRM (Gmail / Microsoft 365 en OAuth, ou domaine propre).
- Chaque e-mail est rattaché automatiquement au bon client, chantier ou devis.
- L'IA propose des réponses, prêtes à envoyer après relecture.
- Alertes : nouvel e-mail important, e-mail sans réponse depuis X heures, demande de devis entrante.

### 2. Devis connectés au téléphone
- Téléphonie intégrée (numéro de l'entreprise, appels depuis le CRM ou l'iPhone).
- Transcription de l'appel ; l'IA extrait le besoin, l'adresse, les quantités et les contraintes.
- À la fin de l'appel, le devis est déjà pré-rempli à partir du catalogue de prestations de l'entreprise. Le chargé d'affaires le peaufine, puis l'envoie.
- Signature électronique, suivi d'ouverture, relances automatiques.
- Règle : le client est informé que l'appel est enregistré (RGPD).

### 3. Facturation
- Facture en un clic depuis le devis signé : acomptes, situations de travaux, solde.
- Numérotation continue et mentions légales du BTP (TVA 10 % / 5,5 % / 20 %, autoliquidation en sous-traitance).
- Relances d'impayés, suivi de trésorerie.
- Facture électronique (Factur-X, via une plateforme agréée) : la réception devient obligatoire pour toutes les entreprises dès septembre 2026, l'émission pour les PME en septembre 2027.

### 4. Marketing
- **Réseaux sociaux** : Facebook, Instagram, LinkedIn, Google Business Profile (posts sur la fiche Google). L'IA crée les posts (texte + visuel) et les programme ; l'humain valide.
- **Calendrier éditorial** : tout ce qui est programmé, sur tous les canaux, au même endroit.
- **Campagnes e-mailing** : modèle aux couleurs de l'entreprise (en-tête, visuel, texte, pied de page, bouton vers le site). L'IA suggère les sujets et rédige ; il ne reste qu'à appuyer sur « Programmer » ou « Envoyer ».
- **Avis clients** : demande d'avis après chantier, réponses aux avis proposées par l'IA.

### 5. Contenu
- Source n° 1 : les rapports d'intervention faits dans le CRM (photos avant/après, description).
- Source n° 2 : photos et rapports de chantier envoyés par l'entreprise.
- L'IA trie les photos, rédige les publications et les programme dans le calendrier.

### 6. Statistiques partout
- Commercial : demandes, devis envoyés, taux de signature, CA signé, panier moyen.
- Facturation : CA facturé, encaissé, impayés.
- Réseaux sociaux : vues, abonnés, interactions par publication.
- Site web : trafic, demandes de devis, appels générés, positions Google.
- E-mailing : ouvertures, clics, demandes générées.

## Principes

1. **IA propose, humain valide.** Rien ne part sans un clic humain, sauf ce que le dirigeant a explicitement automatisé.
2. **API first.** Chaque action de l'interface existe dans l'API. L'IA (et nous) pilotons l'outil par l'API.
3. **Épuré.** Une action principale par écran, pensé iPhone d'abord.
4. **Une seule source de vérité.** Client, chantier, e-mails, appels, devis, factures et publications sont reliés.

## Feuille de route

| Phase | Contenu | État |
|---|---|---|
| 0 | Atelier OS v1 : prospection interne d'Atelier Truelle (prospects, e-mails, suivi, pipeline, argent, agenda, import CSV) | en cours |
| 1 | **Fondations** : vraie base de données (Postgres), plusieurs entreprises, utilisateurs et rôles (dirigeant / chargé d'affaires / ADV), clients, contacts, chantiers, API v2, journal d'activité | prochaine étape |
| 2 | Boîte mail intelligente : connexion Gmail / Microsoft 365, rattachement automatique, réponses proposées, alertes « sans réponse » | |
| 3 | Devis : catalogue de prestations, devis PDF, signature électronique ; puis téléphonie + transcription → devis pré-rempli | |
| 4 | Facturation : factures depuis devis, acomptes, relances, Factur-X | |
| 5 | Marketing : réseaux sociaux + Google Business Profile, calendrier éditorial, e-mailing, avis clients | |
| 6 | Contenu : rapports d'intervention, extraction de photos, publications automatiques | |
| 7 | Statistiques transverses + site web (trafic, demandes de devis) | |

Chaque phase est livrée utilisable, testée sur Atelier Truelle, puis proposée aux clients.
