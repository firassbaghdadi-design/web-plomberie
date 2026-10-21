# Stratégie avant de contacter les entreprises : identité, site d'agence, canaux

## Verdict sur le site d'agence existant (`v0-agence-web-premium`)

Observé le 20/10/2026 sur le projet Vercel et ses fichiers.

**Ce qu'il y a de bien :** structure complète (accueil, services, offres, méthode, réalisations, villes, à propos, contact, mentions légales, confidentialité), formulaire de contact, données structurées, base technique solide.

**Pourquoi on ne peut pas l'utiliser tel quel :**

1. **Il n'est pas public.** Le projet est protégé par la connexion Vercel et n'a aucun nom de domaine : seul le lien `.vercel.app` existe. Un prospect qui cherche l'agence ne la trouve pas.
2. **Le nom pose un risque.** « Carré Noir » est le nom de l'agence de design de marque de Publicis Groupe (carrenoir.com). Reprendre ce nom pour une agence web, même sous un autre domaine, expose à un risque de confusion et de contestation de marque. À changer avant toute prospection.
3. **Des preuves semblent inventées.** La page d'accueil affiche des cas clients (« Maison de Luxe Paris +47 % de demandes de rendez-vous », « Cabinet Juridique Lyon top 3 du pack local Google », « Table Étoilée Bordeaux -45 % de commissions ») et des chiffres (« 95+ score Lighthouse moyen », « 100 % Core Web Vitals », « 8 semaines de délai moyen »). Nous n'avons aucun client correspondant. Présenter des résultats qu'on n'a pas obtenus est une pratique commerciale trompeuse (sanctionnée par la DGCCRF) et se retourne contre nous dès qu'un prospect vérifie. À supprimer ou remplacer par de vrais éléments.
4. **Les mentions légales contiennent des champs vides** (forme juridique, adresse, SIREN). C'est obligatoire et visible : un prospect méfiant regarde d'abord cette page.
5. **Le positionnement ne correspond pas à la cible.** « Studio digital premium », « à partir de 4 500 € » : trop cher et trop abstrait pour un plombier. Notre offre de départ est de 1 200 à 2 500 € pour la refonte. Le site doit parler à une cible précise : « sites web pour plombiers et chauffagistes ».

**Conclusion :** oui, il faut un site d'agence, parce qu'un prospect cherche toujours l'expéditeur avant de répondre. Mais il faut le réécrire pour cette cible, avec de vrais éléments, un autre nom et un domaine à nous.

## Ne pas s'exposer : ce qui est possible, et ce qui ne l'est pas

**Possible**
- Une marque d'agence (nom commercial), un domaine, une adresse e-mail et un numéro de téléphone professionnels, distincts de ceux de la vie privée.
- Signer « Firas » ou « l'équipe [Agence] », sans nom de famille dans les messages de prospection.
- Une adresse de domiciliation pour ne pas publier le domicile (à vérifier selon le statut choisi : micro-entreprise, EURL ou SASU).
- Les liens de maquettes sur le domaine de l'agence, sans le nom « firas » dans l'adresse.

**Impossible ou risqué**
- Vendre sans identité légale. Un devis, une facture et un contrat doivent porter l'identité de l'entreprise (nom ou dénomination, adresse, SIREN). Les mentions légales du site aussi.
- Inventer une équipe, des clients ou des références : trompeur et sanctionnable.
- Utiliser une marque existante.

La discrétion s'obtient donc avec une structure (micro-entreprise ou société) et un nom commercial, pas avec l'anonymat.

## Ce qu'il faut mettre en place avant le premier contact (dans l'ordre)

1. **Entité juridique** : micro-entreprise ou société, avec adresse professionnelle ou domiciliation. Sans elle, pas de devis ni de facture possibles.
2. **Nom d'agence** : **Atelier Truelle** retenu (voir `marque/atelier-truelle/identite.md`). Vérifications faites : aucune marque ni société du même nom, domaines `ateliertruelle.fr` et `.com` libres. Reste à réserver le domaine.
3. **Domaine et boîte e-mail** professionnels (par exemple `contact@[agence].fr`) avec SPF, DKIM et DMARC configurés, pour que les e-mails n'arrivent pas en indésirables.
4. **Numéro de téléphone professionnel** dédié, avec messagerie au nom de l'agence.
5. **Site d'agence réécrit** : une page d'accueil claire pour les plombiers et chauffagistes, une page offres avec les 3 niveaux, une page « comment ça se passe », mentions légales complètes, formulaire et téléphone. Références : les maquettes Rousseau et Sandrin-Rousseau, présentées comme des maquettes de démonstration, avec accord de l'entreprise si on les nomme.
6. **Hébergement des maquettes** : domaine de l'agence, accès par mot de passe ou lien non devinable, jamais indexé. Retirer le nom personnel de l'adresse Vercel (nom d'équipe).
7. **Outils de suivi** : un tableau des prospects (date de chaque contact, canal, réponse), désinscription simple, registre des refus à ne plus contacter.
8. **Modèles de documents** : devis, conditions générales, bon de commande, accord écrit d'utilisation des avis et des photos.

## Canaux de contact selon le niveau d'exposition

| Canal | Exposition | Efficacité sur cette cible | Recommandation |
|---|---|---|---|
| E-mail depuis le domaine de l'agence, avec lien de la maquette | Faible | Moyenne : lu si l'objet est concret | Premier contact |
| Courrier papier avec capture et QR code | Faible | Bonne pour les dirigeants peu actifs en ligne | À J+7, pour les 5 à 10 meilleures cibles |
| Appel téléphonique (numéro pro, prénom seul) | Moyenne | Forte : le standard décroche, le dirigeant rappelle | À J+3, c'est le moment où les réponses arrivent |
| Passage sur place | Forte | Très forte pour la signature | À réserver aux prospects qui ont déjà réagi |
| Appel confié à un tiers (commercial indépendant) | Aucune pour vous | Variable | Option si l'exposition vocale est bloquante |

Sans téléphone ni visite, le taux de réponse sera plus faible sur des dirigeants de 50 à 75 ans qui traitent beaucoup par téléphone. Un compromis : e-mail et courrier d'abord, téléphone uniquement pour ceux qui ont ouvert ou répondu.

## Décisions à prendre

1. Statut : micro-entreprise ou société ? Domiciliation ?
2. Nom d'agence : tranché, **Atelier Truelle** (à confirmer par une recherche d'antériorités complète avant dépôt de marque).
3. Appel téléphonique assumé sous un prénom, ou délégué ?
4. Maquettes : lien libre non devinable, ou mot de passe ?

Dès que ces points sont tranchés, la réécriture du site d'agence, le sous-domaine des maquettes et les modèles de documents peuvent être livrés.
