# Benchmark : sites web de laboratoires d'analyses (novembre 2026)

Objectif : identifier ce que proposent les sites de laboratoires concurrents ou de référence, pour définir une version plus complète du site SinDia.

Méthode : recherches web en français, en arabe (« مخبر التحاليل الطبية وهران ») et par nom de domaine, puis lecture des pages d'accueil le 3 novembre 2026. Seules les pages d'accueil (et l'espace patient de Biogroup) ont été lues : les fonctions absentes de l'accueil peuvent exister ailleurs sur ces sites.

## 1. Paysage local (Oran)

- **Constat** : la plupart des laboratoires d'Oran repérés communiquent par **Facebook, Instagram et annuaires** (addalile.com, sihhatech.com, bledweb.com, mapcarta, med.tn), sans site propre. Exemples : Dr Nasri (Hai Louz), Dr Guella (Es Senia), Dr Lahouel Laouni, Dr Tabet Derraz, InnovaLab (Dr Berrabah).
- **Deux laboratoires d'Oran ont un vrai site** (détail ci-dessous) : Biogene Diagnostic et BPR Bioalliance.
- Les **arguments mis en avant** dans les publications locales sont récurrents : prélèvement à domicile, résultats en ligne ou sur téléphone, rapidité, ouverture les jours fériés.

## 2. Sites analysés

| | Biogene Diagnostic | BPR Bioalliance | Bioval | Cerballiance (FR) | Biogroup (FR) |
|---|---|---|---|---|---|
| Ville | Oran (déduit : indicatif 041 et coordonnées GPS) | Bir El Djir, Oran (en face de l'hôpital pédiatrique de Canastel) | El Biar, Alger | Réseau national | Réseau national |
| Site propre | Oui (WordPress) | Oui (WordPress) | Pas de site trouvé : Facebook + application | Oui | Oui |
| Résultats en ligne | Oui (portail Laboonline) | Oui (« MesAnalyses ») + application | Oui (application BiovalAPP) | Oui (Espace patient) | Oui |
| Rendez-vous en ligne | Oui | Oui | Oui (application) | Pré-enregistrement en ligne | Pré-enregistrement + créneau |
| Prélèvement à domicile | Oui | Mentionné sur les réseaux, pas sur l'accueil | Oui, 24h/24 et 7j/7 selon leur page Facebook | Non vu sur l'accueil | Non vu sur l'accueil |
| Préparation aux examens | Non vu | Non vu | – | Non vu sur l'accueil | Oui (« Préparez votre visite ») |
| FAQ | Partielle | Non vu | – | Non vu | Oui |
| Catalogue d'analyses | Pôles techniques (3 blocs) | Non vu | – | Non vu | Domaines d'expertise |
| Qualité | Mention « certifiés CE-IVDR » | Page « Politique qualité » | – | – | « Portail de transparence » |
| Avis patients | Notes affichées | Avis affichés | – | Note Google affichée | – |
| Recrutement | « Nous rejoindre » | – | – | – | – |
| Contenus santé / blog | Section actualités (images de démonstration restées en place) | – | – | Blog santé, campagnes | Actualités santé |

Sources (consultées le 3/11/2026) : [biogene-diagnostic.com](https://biogene-diagnostic.com/), [bioalliancelab.com](https://bioalliancelab.com/), [Bioval – Facebook](https://www.facebook.com/laboratoiresbioval/), [BIOVAL APP – App Store](https://apps.apple.com/lt/app/bioval-app/id1626303144), [cerballiance.fr](https://www.cerballiance.fr/), [biogroup.fr](https://biogroup.fr/), [biogroup.fr/patients](https://biogroup.fr/patients/), [annuaire addalile – Oran](https://addalile.com/tib/oran.php?a=laboratoire-analyse).

## 3. Enseignements

1. **Le niveau de base à Oran** est désormais : résultats en ligne, prise de rendez-vous ou demande de prélèvement à domicile, et téléphone visible. Ces trois fonctions exigent un **outil métier** (portail résultats du SIL, module de rendez-vous) : un site statique ne peut pas les fournir seul. Il peut en revanche y renvoyer dès qu'elles existent.
2. **Les sites locaux ont des lacunes** : peu ou pas de préparation aux examens, de FAQ, de délais ou d'informations pour les médecins. C'est là que SinDia peut se distinguer sans investissement technique, à condition de remplir ces contenus avec des informations validées.
3. **Les références françaises** structurent tout autour du parcours patient : préparer sa visite, trouver le laboratoire, obtenir ses résultats, FAQ, transparence et qualité.
4. **Aucun concurrent local lu n'a de version arabe** de son site. C'est un différenciateur possible pour Oran, mais la traduction devra être faite et relue par un humain.

## 4. Ce qui a été ajouté au site SinDia

- Nouvelles pages : **Le laboratoire** (nom, emblème, valeurs, équipe, qualité, partenaires), **Services** (accueil 24h/24, domicile, résultats, conseil, professionnels de santé, entreprises), **FAQ**, **Mentions légales et confidentialité**, **page 404**.
- Accueil : **accès rapides** (préparer, résultats, domicile, FAQ), bloc « Entre le jour et la nuit », bouton **Itinéraire**, encart **médecins prescripteurs**.
- Menu repliable sur mobile (7 entrées), qui reste utilisable sans JavaScript.
- Référencement : **données structurées schema.org `DiagnosticLab`** (nom, adresse, téléphone, ouverture 24h/24 et 7j/7), balises Open Graph, `robots.txt`.
- Confidentialité : **police Poppins hébergée sur le site** (plus aucune requête vers Google), mention de la loi n° 18-07 modifiée par la loi n° 25-11 du 24 juillet 2025.

## 5. Atout SinDia confirmé : la fiche Google

Le 3 novembre 2026, la fiche Google de SinDia affichait **4,7/5 sur 844 avis** (lecture directe de la fiche). Le site la met désormais en avant : note dans le bandeau d'accueil, bloc « Nos patients en parlent », liens « Lire les avis » et « Donner mon avis ». Les notes Google des concurrents n'ont pas été relevées.

## 6. À décider par le laboratoire (hors de portée d'un site statique)

- Portail de résultats (BMVie, sindia.bmvie.net) : la connexion se fait par une API qui enregistre le jeton dans le navigateur, sur le domaine du portail. Des champs intégrés au site vitrine ne peuvent donc pas ouvrir la session. Il faut que l'éditeur fournisse un point d'entrée prévu pour ça (SSO). En attendant, le site renvoie vers le portail par un lien.
- Rendez-vous ou demande de prélèvement à domicile en ligne : par lien WhatsApp (simple) ou par module dédié ?
- Version arabe du site.
- Nom de domaine et hébergement : ils sont nécessaires pour le `sitemap.xml`, l'image de partage Open Graph et la mise en ligne.


## 7. Catalogue d'examens (ajout nov. 2026)

« Ubilab » (ubilab.io) est une plateforme française qui héberge le manuel de prélèvement / catalogue d'examens de laboratoires (B2A, CHU d'Angers…). La demande « catalogue comme BPR / Ubilab » = un référentiel d'examens recherchable.

Réalisé : moteur de catalogue sur la page « Nos analyses » (recherche instantanée, filtres par domaine, 9 domaines), alimenté par `data/analyses.json`.

Décision assumée : le catalogue est rempli avec une **nomenclature standard** (noms d'examens génériques, communs à tous les laboratoires), pas avec les données reprises de BPR/Ubilab. Copier le catalogue d'un concurrent et le publier comme celui de SinDia poserait un double problème — médical (afficher des examens/conditions non validés pour nos méthodes) et juridique/concurrentiel. Le laboratoire confirme et complète la liste.
