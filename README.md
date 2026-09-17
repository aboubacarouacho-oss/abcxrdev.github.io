# GameDev Portfolio

Un site web portfolio pour développeur de jeux vidéo avec gestion de projets, système de commentaires, et événements.

## Fonctionnalités

- **Gestion des jeux** : Catégorisation par statut (fini, en développement, arrêté)
- **Liens de téléchargement** : Intégration avec multiple plateformes (itch.io, Google Play, App Store, Microsoft Store)
- **Système de commentaires** : Commentaires publics/privés avec système de notation
- **Événements** : Game jams, recrutements, sorties de jeux
- **Blog** : Articles sur le développement de jeux
- **Galerie** : Showcase d'images et captures d'écran
- **Formulaire de contact** : Communication avec les visiteurs
- **Design responsive** : Adapté mobile et desktop

## Technologies

- HTML5
- CSS3 (avec variables CSS et Flexbox/Grid)
- JavaScript (ES6+)
- Font Awesome (icônes)

## Installation locale

1. Clonez ce repository
2. Ouvrez le fichier `index.html` dans votre navigateur
3. Ou utilisez un serveur local :
   ```bash
   # Avec Python
   python -m http.server 8000
   
   # Avec Node.js (si installé)
   npx serve
   ```

## Personnalisation

### Modifier les données

Les données du site sont stockées dans `js/data.js` :

- `games` : Liste des jeux avec leurs informations
- `events` : Liste des événements
- `blogPosts` : Articles de blog
- `galleryItems` : Images de la galerie

### Modifier le style

Le style est défini dans `css/style.css`. Les variables CSS principales sont définies au début du fichier :

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    --dark-bg: #0f172a;
    --light-bg: #1e293b;
    /* ... */
}
```

## Déploiement sur GitHub Pages

### Méthode 1 : Via l'interface GitHub

1. Créez un nouveau repository sur GitHub
2. Uploadez les fichiers du projet
3. Allez dans Settings > Pages
4. Sélectionnez la branche `main` et le dossier `/root`
5. Votre site sera disponible à `https://votre-username.github.io/nom-du-repo`

### Méthode 2 : Via Git CLI

```bash
# Ajoutez le remote
git remote add origin https://github.com/votre-username/game-portfolio.git

# Push les modifications
git branch -M main
git push -u origin main
```

Ensuite configurez GitHub Pages dans les settings du repository.

## Structure du projet

```
game-portfolio/
├── index.html          # Page principale
├── css/
│   └── style.css      # Styles
├── js/
│   ├── data.js        # Données du site
│   └── main.js        # Logique JavaScript
├── images/            # Images (à ajouter)
└── README.md          # Documentation
```

## Améliorations futures

- [ ] Backend pour sauvegarder les commentaires
- [ ] Système d'authentification
- [ ] Panel d'administration
- [ ] Multi-langue
- [ ] Système de recherche
- [ ] Integration avec véritable base de données

## Licence

Ce projet est libre d'utilisation pour votre portfolio personnel.

## Contact

Pour toute question ou suggestion, n'hésitez pas à me contacter via le formulaire sur le site.