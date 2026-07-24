// =====================
// Dark Mode Toggle
// =====================
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Récupérer le thème sauvegardé
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    htmlElement.setAttribute('data-theme', 'dark');
    updateThemeIcon();
}

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon();
});

function updateThemeIcon() {
    const theme = htmlElement.getAttribute('data-theme');
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
}

// =====================
// Navbar Dynamique
// =====================
const navbar = document.querySelector('.navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Menu hamburger
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fermer le menu au clic sur un lien
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// =====================
// Scroll to Top Button
// =====================
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// =====================
// Année Dynamique Footer
// =====================
const yearElements = document.querySelectorAll('#year');
yearElements.forEach(el => {
    el.textContent = new Date().getFullYear();
});

// =====================
// Countdown Timer
// =====================
function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    if (!countdownElement) return;

    // Date fictive: 15 novembre 2026 à 09:00
    const conferenceDate = new Date('2026-11-15T09:00:00').getTime();
    const now = new Date().getTime();
    const distance = conferenceDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Mettre à jour le countdown immédiatement et puis chaque seconde
updateCountdown();
setInterval(updateCountdown, 1000);

// =====================
// Animations au Scroll (IntersectionObserver)
// =====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Appliquer l'animation avec un délai
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer les éléments avec animation au scroll
document.querySelectorAll('.slide-in, .zoom-in').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = el.classList.contains('zoom-in') 
        ? 'scale(0.9)' 
        : 'translateY(30px)';
    observer.observe(el);
});

// =====================
// Compteurs Animés (Stats)
// =====================
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                if (!stat.classList.contains('animated')) {
                    const target = parseInt(stat.getAttribute('data-target'));
                    animateCounter(stat, target);
                    stat.classList.add('animated');
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// =====================
// Onglets Programme
// =====================
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

if (tabBtns.length > 0) {
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            // Retirer les classes active
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Ajouter active au bouton et au contenu cliqué
            btn.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// =====================
// Filtrage Dynamique Intervenants
// =====================
const filterBtns = document.querySelectorAll('.filter-btn');
const speakerCards = document.querySelectorAll('.full-speaker-card');

if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            // Retirer active de tous les boutons
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filtrer les cartes
            speakerCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// =====================
// Validation Formulaire
// =====================
const registrationForm = document.getElementById('registrationForm');

if (registrationForm) {
    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            // Afficher message de succès
            const successMsg = document.getElementById('successMessage');
            successMsg.style.display = 'block';
            
            // Réinitialiser le formulaire
            registrationForm.reset();
            
            // Retirer les classes de validation
            document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(field => {
                field.classList.remove('success', 'error');
                const errorMsg = field.parentElement.querySelector('.error-message');
                if (errorMsg) {
                    errorMsg.classList.remove('show');
                }
            });
            
            // Masquer le message après 5 secondes
            setTimeout(() => {
                successMsg.style.display = 'none';
            }, 5000);
        }
    });
}

function validateForm() {
    const fullname = document.getElementById('fullname');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const participation = document.getElementById('participation');
    const country = document.getElementById('country');
    const message = document.getElementById('message');
    
    let isValid = true;
    
    // Réinitialiser les classes
    [fullname, email, phone, participation, country, message].forEach(field => {
        field.classList.remove('success', 'error');
        const errorMsg = field.parentElement.querySelector('.error-message');
        if (errorMsg) {
            errorMsg.classList.remove('show');
        }
    });
    
    // Valider fullname
    if (fullname.value.trim() === '') {
        showFieldError(fullname, 'Le nom complet est requis');
        isValid = false;
    } else {
        fullname.classList.add('success');
    }
    
    // Valider email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        showFieldError(email, 'Email invalide');
        isValid = false;
    } else {
        email.classList.add('success');
    }
    
    // Valider téléphone (min 8 chiffres)
    const phoneRegex = /^\d{8,}$/;
    if (!phoneRegex.test(phone.value.replace(/\D/g, ''))) {
        showFieldError(phone, 'Téléphone invalide (minimum 8 chiffres)');
        isValid = false;
    } else {
        phone.classList.add('success');
    }
    
    // Valider participation
    if (participation.value === '') {
        showFieldError(participation, 'Veuillez choisir un type de participation');
        isValid = false;
    } else {
        participation.classList.add('success');
    }
    
    // Valider country
    if (country.value === '') {
        showFieldError(country, 'Veuillez choisir un pays');
        isValid = false;
    } else {
        country.classList.add('success');
    }
    
    // Valider message (min 20 caractères)
    if (message.value.trim().length < 20) {
        showFieldError(message, 'Le message doit faire au minimum 20 caractères');
        isValid = false;
    } else {
        message.classList.add('success');
    }
    
    return isValid;
}

function showFieldError(field, errorText) {
    field.classList.add('error');
    const errorMsg = field.parentElement.querySelector('.error-message');
    if (errorMsg) {
        errorMsg.textContent = errorText;
        errorMsg.classList.add('show');
    }
}

// =====================
// Boutons d'action (Hero)
// =====================
const heroButtons = document.querySelectorAll('.hero-buttons button');
heroButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.textContent.includes('S\'inscrire')) {
            window.location.href = 'contact.html';
        } else if (btn.textContent.includes('Découvrir')) {
            window.location.href = 'programme.html';
        }
    });
});

// Bouton dans la section Featured Speakers
const viewAllBtn = document.querySelector('.featured-speakers .btn');
if (viewAllBtn) {
    viewAllBtn.addEventListener('click', () => {
        window.location.href = 'intervenants.html';
    });
}
