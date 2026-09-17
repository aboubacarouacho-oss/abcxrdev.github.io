// Sample Data for Games
const games = [
    {
        id: 1,
        title: "Cosmic Adventure",
        description: "Un jeu d'aventure spatial où vous explorez des planètes mystérieuses et combattez des extraterrestres.",
        status: "finished",
        rating: 4.5,
        image: "🚀",
        platforms: [
            { name: "itch.io", url: "https://itch.io", icon: "fa-gamepad" },
            { name: "Google Play", url: "https://play.google.com", icon: "fa-google-play" }
        ],
        comments: [
            { author: "Player1", text: "Excellent jeu !", rating: 5, date: "2024-01-15", isPublic: true },
            { author: "Gamer123", text: "J'adore les graphismes", rating: 4, date: "2024-01-10", isPublic: true }
        ]
    },
    {
        id: 2,
        title: "Puzzle Master",
        description: "Un jeu de puzzle cérébral avec plus de 100 niveaux de difficulté progressive.",
        status: "development",
        rating: 0,
        image: "🧩",
        platforms: [
            { name: "itch.io", url: "https://itch.io", icon: "fa-gamepad" }
        ],
        comments: []
    },
    {
        id: 3,
        title: "Racing Champions",
        description: "Jeu de course arcade avec des voitures personnalisables et des circuits spectaculaires.",
        status: "stopped",
        rating: 3.5,
        image: "🏎️",
        platforms: [
            { name: "Microsoft Store", url: "https://microsoft.com/store", icon: "fa-windows" }
        ],
        comments: [
            { author: "RacerX", text: "Dommage que ce soit arrêté", rating: 3, date: "2024-01-05", isPublic: true }
        ]
    },
    {
        id: 4,
        title: "Fantasy Quest",
        description: "RPG épique dans un monde fantastique avec des quêtes et des combats stratégiques.",
        status: "finished",
        rating: 4.8,
        image: "⚔️",
        platforms: [
            { name: "App Store", url: "https://apple.com/app-store", icon: "fa-apple" },
            { name: "Google Play", url: "https://play.google.com", icon: "fa-google-play" },
            { name: "itch.io", url: "https://itch.io", icon: "fa-gamepad" }
        ],
        comments: [
            { author: "RPGFan", text: "Le meilleur RPG que j'ai joué !", rating: 5, date: "2024-01-20", isPublic: true }
        ]
    },
    {
        id: 5,
        title: "Tower Defense Pro",
        description: "Jeu de tower defense avec des graphismes soignés et une gameplay addictif.",
        status: "development",
        rating: 0,
        image: "🏰",
        platforms: [],
        comments: []
    },
    {
        id: 6,
        title: "Memory Challenge",
        description: "Jeu de mémoire pour entraîner votre cerveau avec différents modes de jeu.",
        status: "finished",
        rating: 4.2,
        image: "🧠",
        platforms: [
            { name: "itch.io", url: "https://itch.io", icon: "fa-gamepad" },
            { name: "Google Play", url: "https://play.google.com", icon: "fa-google-play" }
        ],
        comments: []
    }
];

// Sample Data for Events
const events = [
    {
        id: 1,
        type: "Game Jam",
        title: "Global Game Jam 2024",
        date: "2024-01-26 - 2024-01-28",
        description: "Participation à la Game Jam mondiale avec une équipe de 5 développeurs.",
        link: "https://globalgamejam.org"
    },
    {
        id: 2,
        type: "Recrutement",
        title: "Recherche d'artistes 2D",
        date: "Disponible maintenant",
        description: "Je recherche des artistes 2D talentueux pour collaborer sur mes projets futurs.",
        link: "#contact"
    },
    {
        id: 3,
        type: "Game Jam",
        title: "Ludum Dare 55",
        date: "2024-04-12 - 2024-04-15",
        description: "Préparation pour la prochaine Ludum Dare, thème à venir.",
        link: "https://ldjam.com"
    },
    {
        id: 4,
        type: "Événement",
        title: "Sortie de Cosmic Adventure 2.0",
        date: "2024-02-15",
        description: "Mise à jour majeure avec de nouveaux niveaux et fonctionnalités.",
        link: "#games"
    }
];

// Sample Data for Blog Posts
const blogPosts = [
    {
        id: 1,
        title: "Comment j'ai créé mon premier jeu",
        date: "2024-01-15",
        excerpt: "Retour sur mon parcours dans le développement de jeux vidéo et les leçons apprises.",
        image: "🎮",
        content: "Contenu complet de l'article..."
    },
    {
        id: 2,
        title: "Les meilleurs outils pour développeurs indépendants",
        date: "2024-01-10",
        excerpt: "Découverte des outils essentiels pour créer des jeux de qualité.",
        image: "🛠️",
        content: "Contenu complet de l'article..."
    },
    {
        id: 3,
        title: "Mon expérience à la Global Game Jam",
        date: "2024-01-05",
        excerpt: "Récit de ma participation à la Game Jam et ce que j'y ai appris.",
        image: "🎯",
        content: "Contenu complet de l'article..."
    }
];

// Sample Data for Gallery
const galleryItems = [
    { id: 1, image: "🎮", title: "Gameplay Screenshot 1" },
    { id: 2, image: "🎨", title: "Character Design" },
    { id: 3, image: "🌍", title: "Environment Art" },
    { id: 4, image: "⚔️", title: "Battle Scene" },
    { id: 5, image: "🏰", title: "Castle Concept" },
    { id: 6, image: "🚀", title: "Space Scene" },
    { id: 7, image: "🧩", title: "Puzzle Design" },
    { id: 8, image: "🎪", title: "UI Design" }
];