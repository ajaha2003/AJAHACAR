// Configuration Tailwind
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#6366f1',
                secondary: '#8b5cf6',
                accent: '#06b6d4',
                dark: '#0f172a',
                light: '#f1f5f9'
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'slide-up': 'slideUp 0.5s ease-out forwards',
                'fade-in': 'fadeIn 0.8s ease-out forwards',
                'pulse-slow': 'pulse 3s ease-in-out infinite',
                'text-glow': 'textGlow 2s ease-in-out infinite alternate'
            }
        }
    }
}

// Fonction pour afficher les détails de la biographie
function showBioDetail(section) {
    // Masquer tous les détails d'abord
    document.querySelectorAll('[id$="-detail"]').forEach(el => {
        el.classList.add('hidden');
    });
    
    // Afficher la section demandée
    const detailElement = document.getElementById(`${section}-detail`);
    detailElement.classList.toggle('hidden');
    
    // Animation
    if (!detailElement.classList.contains('hidden')) {
        detailElement.classList.add('animate-fade-in');
    }
}

// Fonction pour afficher une section
function showSection(sectionName) {
    // Masquer l'interface principale
    document.getElementById('main-interface').classList.add('hidden');
    
    // Masquer toutes les sections
    const sections = ['accueil-section', 'biographie-section', 'projets-section', 'contact-section'];
    sections.forEach(section => {
        document.getElementById(section).classList.add('hidden');
    });
    
    // Afficher la section demandée
    document.getElementById(sectionName + '-section').classList.remove('hidden');
    
    // Animation d'entrée
    setTimeout(() => {
        document.getElementById(sectionName + '-section').classList.add('animate-fade-in');
    }, 100);
}

// Fonction pour revenir à l'interface principale
function showMain() {
    // Masquer toutes les sections
    const sections = ['accueil-section', 'biographie-section', 'projets-section', 'contact-section'];
    sections.forEach(section => {
        document.getElementById(section).classList.add('hidden');
    });
    
    // Afficher l'interface principale
    document.getElementById('main-interface').classList.remove('hidden');
}

// Fonction pour scroller vers les compétences
function scrollToCompetences() {
    showSection('biographie');
    setTimeout(() => {
        document.getElementById('competences-btn').scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
        });
        // Ouvrir automatiquement la section compétences
        showBioDetail('competences');
        // Animation de surbrillance
        const btn = document.getElementById('competences-btn');
        btn.classList.add('bg-white', 'bg-opacity-20');
        setTimeout(() => {
            btn.classList.remove('bg-white', 'bg-opacity-20');
        }, 2000);
    }, 500);
}

// Animation au chargement de la page
window.addEventListener('load', function() {
    document.body.classList.add('animate-fade-in');
});

// Tous les éléments cliquables
document.querySelectorAll('.clickable').forEach(button => {
    button.addEventListener('click', function() {
        this.style.transform = 'translateY(0)';
    });
});