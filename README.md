# Site vitrine – Laboratoire SinDia (Oran)

Site statique HTML/CSS, sans framework ni étape de build.

## Pages
- `index.html` – Accueil
- `analyses.html` – Nos analyses
- `preparation.html` – Préparation aux prélèvements
- `contact.html` – Contact

Styles communs : `css/style.css` (couleurs centralisées dans `:root`).
Logo : `assets/img/logo-sindia.png` (logo charte v2, 512 px).

## Contenu provisoire
Tous les passages à compléter sont marqués `[À COMPLÉTER : …]` (surlignés en jaune).
Pour les lister : `grep -o "À COMPLÉTER : [^]]*" *.html`

Aucun prix, délai ni liste d'analyses n'a été saisi : ces informations doivent être fournies et validées par le laboratoire.

## Menu commun
Le menu, l'en-tête et le pied de page sont dupliqués à l'identique dans les 4 pages (pas d'include en HTML pur). Toute modification doit être reportée sur les 4 fichiers.

## Aperçu local
Ouvrir `index.html` dans un navigateur, ou : `python3 -m http.server` puis http://localhost:8000
