// DOM Elements
const gamesGrid = document.getElementById('gamesGrid');
const eventsGrid = document.getElementById('eventsGrid');
const blogGrid = document.getElementById('blogGrid');
const galleryGrid = document.getElementById('galleryGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('gameModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close');
const contactForm = document.getElementById('contactForm');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderGames('all');
    renderEvents();
    renderBlog();
    renderGallery();
    setupEventListeners();
});

// Render Games
function renderGames(filter) {
    gamesGrid.innerHTML = '';
    
    const filteredGames = filter === 'all' 
        ? games 
        : games.filter(game => game.status === filter);
    
    filteredGames.forEach(game => {
        const gameCard = createGameCard(game);
        gamesGrid.appendChild(gameCard);
    });
}

function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.dataset.status = game.status;
    
    const statusClass = `status-${game.status}`;
    const statusText = game.status === 'finished' ? 'Fini' : 
                      game.status === 'development' ? 'En développement' : 'Arrêté';
    
    const stars = game.rating > 0 ? generateStars(game.rating) : 'Pas encore noté';
    
    card.innerHTML = `
        <div class="game-image">${game.image}</div>
        <div class="game-info">
            <h3 class="game-title">${game.title}</h3>
            <p class="game-description">${game.description}</p>
            <span class="game-status ${statusClass}">${statusText}</span>
            <div class="game-rating">
                <i class="fas fa-star"></i>
                <span>${stars}</span>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => openGameModal(game));
    
    return card;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Render Events
function renderEvents() {
    eventsGrid.innerHTML = '';
    
    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        
        eventCard.innerHTML = `
            <div class="event-type">${event.type}</div>
            <h3 class="event-title">${event.title}</h3>
            <div class="event-date">${event.date}</div>
            <p class="event-description">${event.description}</p>
            <a href="${event.link}" class="event-link">En savoir plus →</a>
        `;
        
        eventsGrid.appendChild(eventCard);
    });
}

// Render Blog
function renderBlog() {
    blogGrid.innerHTML = '';
    
    blogPosts.forEach(post => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';
        
        blogCard.innerHTML = `
            <div class="blog-image">${post.image}</div>
            <div class="blog-content">
                <h3 class="blog-title">${post.title}</h3>
                <div class="blog-date">${post.date}</div>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="#" class="blog-link">Lire l'article →</a>
            </div>
        `;
        
        blogGrid.appendChild(blogCard);
    });
}

// Render Gallery
function renderGallery() {
    galleryGrid.innerHTML = '';
    
    galleryItems.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.title = item.title;
        
        galleryItem.innerHTML = item.image;
        
        galleryItem.addEventListener('click', () => {
            alert(`Image: ${item.title}`);
        });
        
        galleryGrid.appendChild(galleryItem);
    });
}

// Setup Event Listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderGames(btn.dataset.filter);
        });
    });
    
    // Close modal
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Contact form
    contactForm.addEventListener('submit', handleContactForm);
    
    // Mobile menu
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                navMenu.classList.remove('active');
            }
        });
    });
}

// Modal Functions
function openGameModal(game) {
    const statusClass = `status-${game.status}`;
    const statusText = game.status === 'finished' ? 'Fini' : 
                      game.status === 'development' ? 'En développement' : 'Arrêté';
    
    const downloadButtons = game.platforms.map(platform => `
        <a href="${platform.url}" target="_blank" class="download-btn">
            <i class="fab ${platform.icon}"></i>
            ${platform.name}
        </a>
    `).join('');
    
    const commentsHTML = game.comments.map(comment => `
        <div class="comment">
            <div class="comment-header">
                <span class="comment-author">${comment.author}</span>
                <span class="comment-date">${comment.date}</span>
            </div>
            <p class="comment-text">${comment.text}</p>
            <div class="comment-rating">
                ${generateStars(comment.rating)}
            </div>
        </div>
    `).join('');
    
    modalBody.innerHTML = `
        <div class="modal-game-header">
            <div class="modal-game-image">${game.image}</div>
            <div class="modal-game-info">
                <h2>${game.title}</h2>
                <span class="game-status ${statusClass}">${statusText}</span>
                <p class="modal-game-description">${game.description}</p>
                <div class="game-rating">
                    <i class="fas fa-star"></i>
                    <span>${generateStars(game.rating)}</span>
                </div>
            </div>
        </div>
        
        <h3>Téléchargements</h3>
        <div class="download-links">
            ${downloadButtons || '<p>Aucun lien de téléchargement disponible</p>'}
        </div>
        
        <div class="comments-section">
            <h3>Commentaires</h3>
            <form class="comment-form" id="commentForm">
                <div class="form-group">
                    <input type="text" id="commentAuthor" placeholder="Votre nom" required>
                    <select id="commentVisibility">
                        <option value="public">Public</option>
                        <option value="private">Privé</option>
                    </select>
                    <select id="commentRating">
                        <option value="5">⭐⭐⭐⭐⭐</option>
                        <option value="4">⭐⭐⭐⭐</option>
                        <option value="3">⭐⭐⭐</option>
                        <option value="2">⭐⭐</option>
                        <option value="1">⭐</option>
                    </select>
                </div>
                <textarea id="commentText" placeholder="Votre commentaire..." rows="3" required></textarea>
                <button type="submit" class="btn btn-primary">Publier</button>
            </form>
            
            <div class="comments-list">
                ${commentsHTML || '<p>Aucun commentaire pour le moment</p>'}
            </div>
        </div>
    `;
    
    // Setup comment form handler
    const commentForm = document.getElementById('commentForm');
    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addComment(game.id);
    });
    
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

// Add Comment
function addComment(gameId) {
    const author = document.getElementById('commentAuthor').value;
    const text = document.getElementById('commentText').value;
    const visibility = document.getElementById('commentVisibility').value;
    const rating = parseInt(document.getElementById('commentRating').value);
    
    const game = games.find(g => g.id === gameId);
    if (game) {
        const newComment = {
            author: author,
            text: text,
            rating: rating,
            date: new Date().toISOString().split('T')[0],
            isPublic: visibility === 'public'
        };
        
        game.comments.push(newComment);
        
        // Recalculate average rating
        const totalRating = game.comments.reduce((sum, c) => sum + c.rating, 0);
        game.rating = Math.round((totalRating / game.comments.length) * 10) / 10;
        
        // Refresh modal and grid
        openGameModal(game);
        renderGames(document.querySelector('.filter-btn.active').dataset.filter);
        
        alert('Commentaire ajouté avec succès !');
    }
}

// Contact Form Handler
function handleContactForm(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // In a real application, you would send this data to a server
    console.log('Contact form submitted:', { name, email, subject, message });
    
    alert('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.');
    contactForm.reset();
}

// Navigation active state
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});