# AfriConnect Summit 2026

## 📋 À propos du projet

Site vitrine complet pour **AfriConnect Summit 2026**, une conférence tech panafricaine qui réunit développeurs, entrepreneurs et investisseurs du continent africain.

Le projet a été développé en HTML5, CSS3 et JavaScript vanilla, sans framework, dans le respect des bonnes pratiques web modernes.

**Candidat:** [Votre Nom]  
**Classe:** [Votre Classe]  
**Durée:** 2 semaines  

---

## 🌐 Technologies Utilisées

- **HTML5** - Structure sémantique et hiérarchie logique
- **CSS3** - Flexbox, CSS Grid, variables CSS, animations, transitions
- **JavaScript Vanilla** - DOM manipulation, événements, localStorage
- **Google Fonts** - Poppins (titres) et Inter (corps)
- **Bootstrap Icons** - Icônes via CDN

---

## 📄 Pages du Site

### 1. **index.html** - Accueil
- ✅ Hero section avec titre accrocheur et CTA
- ✅ Compte à rebours en temps réel
- ✅ Section "Chiffres clés" avec compteurs animés
- ✅ 3 arguments "Pourquoi participer"
- ✅ 4 intervenants vedettes
- ✅ 3 niveaux de sponsors

### 2. **programme.html** - Programme
- ✅ 3 onglets (Jour 1, 2, 3) gérés en JavaScript
- ✅ Tableaux HTML avec sessions, intervenants, salles
- ✅ Section 4 thématiques en CSS Grid

### 3. **intervenants.html** - Intervenants
- ✅ 5 filtres dynamiques (Tous, IA & Tech, Business, Design, Data)
- ✅ Grille responsive de 9 intervenants
- ✅ Filtrage sans rechargement de page

### 4. **contact.html** - Inscription & Contact
- ✅ Formulaire avec 6 champs requis
- ✅ Validation JavaScript complète (email, téléphone, message)
- ✅ Retour visuel par champ (bordure rouge/verte)
- ✅ Message de succès après soumission
- ✅ FAQ accordéon en CSS pur
- ✅ Carte Google Maps intégrée

---

## ⚙️ Fonctionnalités JavaScript

### 1. Dark Mode / Light Mode
- Toggle dans la navbar
- Thème sauvegardé dans `localStorage`
- Persistant entre les pages et rechargements
- Géré via attribut `[data-theme="dark"]` et variables CSS

### 2. Navbar Dynamique
- Changement de style après 80px de défilement
- Menu hamburger fonctionnel sur mobile
- Fermeture automatique au clic sur un lien

### 3. Animations Scroll
- Fade-in, slide-in, zoom-in au scroll
- Utilise `IntersectionObserver` pour les performances
- Délai naturel entre les éléments

### 4. Onglets Programme
- Affichage/masquage du contenu au clic
- 3 jours avec tables HTML stylisées

### 5. Filtrage Intervenants
- 5 filtres thématiques
- Affichage/masquage sans rechargement
- Bouton actif mis en évidence

### 6. Validation Formulaire
- Validation complète à la soumission
- Email vérifié par regex
- Téléphone minimum 8 chiffres
- Message minimum 20 caractères
- Retour visuel par champ

### 7. Bouton Retour en Haut
- Apparaît après 300px de défilement
- Remontée en douceur avec `scrollTo` smooth

### 8. Année Dynamique
- `new Date().getFullYear()` injectée dans les footers

### 9. Countdown Timer
- Compte à rebours en temps réel
- Mise à jour chaque seconde
- Affichage jours/heures/minutes/secondes

### 10. Compteurs Animés
- Incrémentation animée des statistiques
- Déclenchement au scroll dans le viewport

---

## 🎨 Design & UX

### Palette de Couleurs
- **Primaire:** `#667eea` (bleu)
- **Secondaire:** `#764ba2` (violet)
- **Accent:** `#f5576c` (rose)
- **Dark mode** adapté

### Typographie
- **Poppins** (600, 700) - Titres expressifs
- **Inter** (400, 500, 600) - Corps lisible

### Responsive
- Desktop: 1200px+
- Tablette: 768px
- Mobile: 375px

### CSS
- ✅ 8+ variables CSS dans `:root`
- ✅ Minimum 3 usages Flexbox
- ✅ Minimum 2 usages CSS Grid
- ✅ Transitions sur tous les éléments interactifs
- ✅ Media queries complets

---

## 📁 Structure du Projet

```
NOM-Prenom-AfriConnectSummit/
├── index.html
├── programme.html
├── intervenants.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   └── (placeholders)
└── README.md
```

---

## 🚀 Déploiement

- **Hébergé sur:** GitHub Pages
- **Lien du site:** [Insérez votre URL GitHub Pages]
- **Dépôt:** `NOM-Prenom-AfriConnectSummit` (public)

---

## 📝 Commits Git

Minimum 8 commits répartis tout au long du développement:

1. `Structure HTML initiale et navbar`
2. `Hero section et animations CSS`
3. `Page programme avec onglets`
4. `Page intervenants avec filtrage`
5. `Page contact et formulaire`
6. `Validation formulaire JavaScript`
7. `Dark mode et localStorage`
8. `Finitions et optimisations responsive`

---

## ✨ Points Clés

- ✅ HTML5 sémantique (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- ✅ Un seul fichier CSS externe (`css/style.css`)
- ✅ Pas de CSS inline
- ✅ Attribut `alt` sur toutes les images
- ✅ Code commenté (HTML sections, CSS blocs, JS fonctions)
- ✅ Pas de frameworks JavaScript (React, Vue, etc.)
- ✅ Pas de jQuery
- ✅ Pas de Bootstrap CSS
- ✅ Tout code explicable ligne par ligne

---

## 📚 Ressources Consultées

- [MDN Web Docs](https://developer.mozilla.org/fr/)
- [W3Schools](https://www.w3schools.com/)
- [CSS-Tricks](https://css-tricks.com/)
- [Google Fonts](https://fonts.google.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)

---

## 👨‍💻 Développeur

Développé en HTML5, CSS3 et JavaScript vanilla - Examen Web L1

**Bon courage!**
