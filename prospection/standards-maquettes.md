# Standards à respecter pour chaque nouvelle maquette

Règles fixées par Firas le 24 octobre 2026. Elles s'appliquent à tous les prochains secteurs. Aucune page ne part sans les avoir toutes passées.

## 1. Référencement (Bible SEO / GEO / AEO)

- **H1** : le métier + la ville, mot-clé en premier (« Plombier Paris 14e : urgence, fuite et dépannage », « Rénovation de salle de bains à Bourg-la-Reine »). Un seul H1 par page.
- **Title** 50 à 60 caractères, **description** 150 à 160, **canonical** auto-référent, **og:image** sur chaque page.
- **Aucune page vide** : au moins 500 mots utiles sur une page de service (objectif 900 et plus), mot-clé principal dans les 100 premiers mots.
- **Bloc « En bref »** de 40 à 60 mots en tête de page.
- **H2 en questions** (technique Question-H2) : chaque H2 est suivi d'une réponse directe de 40 à 60 mots, puis du détail.
- **FAQ** visible, identique mot pour mot au JSON-LD FAQPage, avec des questions locales (prix, adresse, copropriété, délais sans promesse).
- **Bloc local** : adresse, téléphone, horaires, itinéraire, repères du quartier (institutionnels seulement, à faire relire par un habitant).
- **Avis** réels de la fiche Google, avec la note, le nombre d'avis et la date de relevé. Jamais d'`aggregateRating` issu d'avis tiers.
- **Maillage interne** : « Voir aussi », liens contextuels, fil d'Ariane (visible et JSON-LD).
- **Données structurées** : LocalBusiness avec `@id`, WebPage, BreadcrumbList, Service, FAQPage.
- Contenu **unique** par page et par site (deux établissements d'une même société = deux textes différents).
- **Intégrité** : aucun prix, délai, chiffre, certification ou avis inventé. Ce qui vient du site d'origine est repris et listé « à faire confirmer ».

## 2. Formulaire sur chaque page

Tout site créé doit proposer, sur **chaque page de service et sur l'accueil**, pas seulement sur la page contact, un formulaire avec :

- type de demande, **prénom**, **nom**, **téléphone**, e-mail (facultatif), **adresse du lieu concerné**, code postal et ville ;
- **photos** (4 maximum, compressées dans le navigateur, jointes à l'e-mail) ;
- **message** ;
- case de consentement, champ piège anti-spam, bouton **Envoyer**.

Envoi par Resend (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`). Modèle : `maquettes/gaz-flash` et `maquettes/entreprise-rousseau` (`ContactForm.tsx`, `PhotoPicker.tsx`, `api/contact/route.ts`).

## 3. Boutons d'appel à l'action

Sur **chaque** site, sans exception :

- un bouton **« Demander un devis ou une intervention »** dans le héros de l'accueil **et** dans le héros de chaque page de service, vers la page contact (avec le type de demande en paramètre quand c'est utile) ;
- un bouton **« Devis gratuit »** dans l'en-tête (menu), visible sur ordinateur et sur téléphone, vers la page contact ;
- le numéro de téléphone cliquable à côté.

## 4. Mise en page

- Jamais de zone vide sous le héros : le contenu doit s'afficher même si les animations ne démarrent pas (filet de sécurité de 3 secondes).
- Aucun défilement horizontal à 390 px.
- Ton de la marque : un commerce de quartier ne ressemble pas à un site « template » (pas de grille de cartes identiques, pas de gadgets).

## 5. Contrôle avant d'annoncer qu'un site est prêt

1. `npm run typecheck` et `npm run build`.
2. `npm run audit:seo` sur le serveur local : **zéro problème**.
3. Capture d'écran de chaque type de page à 1440 px et 390 px.
4. Déploiement Vercel, état READY vérifié.
