# Standards à respecter pour chaque nouvelle maquette

Règles fixées par Firas les 24 et 25 octobre 2026. Elles s'appliquent à tous les prochains secteurs, adaptées à la charte de chaque entreprise. Aucune page ne part sans les avoir toutes passées.

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

## 2. Un seul formulaire, sur la page contact

Un seul formulaire par site : la **page contact**. Les autres pages (accueil, services, gammes) n'en contiennent pas : elles proposent des **boutons** (« Demander un devis ou une intervention », téléphone) qui mènent à la page contact, avec le type de demande en paramètre (`?demande=chauffage`).

Le formulaire contient :

- type de demande, **prénom**, **nom**, **téléphone**, e-mail (facultatif), **adresse du lieu concerné**, code postal et ville ;
- **photos** (4 maximum, compressées dans le navigateur, jointes à l'e-mail) ;
- **message**, case de consentement, champ piège anti-spam, bouton **Envoyer ma demande**.

Style de référence : le formulaire de `maquettes/entreprise-rousseau` (champs arrondis, grands, aérés, jamais tassés), adapté à la charte de l'entreprise. Envoi par Resend (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`). Fichiers modèles : `ContactForm.tsx`, `PhotoPicker.tsx`, `api/contact/route.ts`.

## 3. Boutons d'appel à l'action

Sur **chaque** site, sans exception :

- un bouton **« Demander un devis ou une intervention »** dans le héros de l'accueil **et** dans le héros de chaque page de service, vers la page contact (avec le type de demande en paramètre quand c'est utile) ;
- un bouton **« Devis gratuit »** dans l'en-tête (menu), visible sur ordinateur et sur téléphone, vers la page contact ;
- le numéro de téléphone cliquable à côté.

## 4. Avis Google : pas d'extraits sur le site

- **Aucun avis cité** (ni carrousel, ni extraits, ni nom de client dans les textes).
- Au plus **une ligne légère** : « Note de X/5 sur Google (N avis, relevé du ... ) » avec le lien vers la fiche Google.
- Jamais d'`aggregateRating` dans les données structurées.

## 5. Mise en page

- **Jamais de zone vide.** Cause trouvée sur Rousseau : le script d'animation ne s'exécutait qu'au premier chargement, donc les éléments d'une page ouverte par un lien du menu restaient invisibles. Le script (`Motion.tsx`) doit se relancer à chaque changement de page (`usePathname`) et un filet de sécurité CSS doit tout afficher après 3 secondes.
- **Aucune zone blanche sur les côtés** : une photo ou un bloc ne reste jamais masqué ; une section texte + photo est toujours équilibrée.
- **Boutons toujours sur une seule ligne** (`white-space: nowrap`), y compris le numéro de téléphone, sur ordinateur et à 360 px.
- Aucun défilement horizontal à 390 px.
- Ton de la marque : un commerce de quartier ne ressemble pas à un site « template » (pas de grille de cartes identiques, pas de gadgets).

## 6. Contrôle avant d'annoncer qu'un site est prêt

1. `npm run typecheck` et `npm run build`.
2. `npm run audit:seo` sur le serveur local : **zéro problème** (le script vérifie aussi : un seul formulaire, boutons vers le contact, aucun extrait d'avis).
   Test de navigation : cliquer sur chaque lien du menu, défiler jusqu'en bas, vérifier qu'aucun élément `[data-reveal]` ne reste invisible.
3. Capture d'écran de chaque type de page à 1440 px et 390 px.
4. Déploiement Vercel, état READY vérifié.
