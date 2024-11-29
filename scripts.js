document.addEventListener('wheel', function(event) {
    if (event.ctrlKey) {
        event.preventDefault(); 
    }
}, { passive: false });


// Fonction pour détecter si un élément est visible dans la fenêtre
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Appliquer l'effet d'apparition aux éléments avec la classe "scroll-animation"
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.scroll-animation');
    elements.forEach((el) => {
        if (isInViewport(el)) {
            el.classList.add('show');
        } else {
            el.classList.remove('show');
        }
    });
}

// Écouter l'événement de défilement
window.addEventListener('scroll', handleScrollAnimation);

// Appeler la fonction une fois au chargement de la page
document.addEventListener('DOMContentLoaded', handleScrollAnimation);
