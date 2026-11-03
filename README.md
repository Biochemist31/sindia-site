# Site vitrine – Laboratoire SinDia (Oran)

Site statique HTML/CSS, sans framework ni étape de build. Un petit script (`js/site.js`) gère le menu mobile ; le site reste utilisable sans JavaScript.

## Pages
- `index.html` – Accueil
- `laboratoire.html` – Le laboratoire (nom, valeurs, équipe, qualité)
- `analyses.html` – Nos analyses
- `preparation.html` – Préparation aux prélèvements
- `services.html` – Services (accueil, domicile, résultats, professionnels de santé)
- `faq.html` – Questions fréquentes
- `contact.html` – Contact
- `mentions-legales.html` – Mentions légales et confidentialité
- `404.html` – Page introuvable (à déclarer comme page d'erreur chez l'hébergeur)

Styles communs : `css/style.css` (couleurs de la charte SinDia dans `:root`).
Logo : `assets/img/logo-sindia.png` (logo charte v2, 512 px).
Police : Poppins hébergée dans `assets/fonts/` (licence OFL, `assets/fonts/OFL.txt`) : aucune requête externe.

Benchmark des sites concurrents : `docs/benchmark-sites-laboratoires.md`.

## Contenu provisoire
Tous les passages à compléter sont marqués `[À COMPLÉTER : …]` (encadrés roses).
Pour les lister : `grep -o "À COMPLÉTER : [^]]*" *.html`

Aucun prix, délai ni liste d'analyses n'a été saisi : ces informations doivent être fournies et validées par le laboratoire.

## En-tête, menu et pied de page
Ils sont dupliqués à l'identique dans les 9 pages (pas d'include en HTML pur). Toute modification doit être reportée sur tous les fichiers.

## Avant mise en ligne
- Ajouter le nom de domaine dans `robots.txt` (ligne Sitemap) et créer `sitemap.xml`.
- Déclarer `404.html` comme page d'erreur.
- Ajouter une image de partage (`og:image`, URL absolue) une fois le domaine connu.

## Aperçu local
`python3 -m http.server` puis http://localhost:8000
(Ouvrir directement les fichiers fonctionne aussi, mais le navigateur peut alors signaler une erreur de préchargement de la police, sans conséquence.)
