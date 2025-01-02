document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos las tarjetas
    const cards = document.querySelectorAll('.card, .h2-portfolio, .h3-portfolio');

    // Función para mostrar las tarjetas con un pequeño retraso entre ellas
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Establecer el retraso de forma progresiva con el índice
                const delay = index * 200; // Retraso de 200ms entre cada tarjeta

                // Aplicar la animación con el retraso calculado
                entry.target.classList.remove('opacity-0', 'translate-y-12');
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.style.transitionDelay = `${delay}ms`; // Ajuste de retraso
                observer.unobserve(entry.target); // Dejar de observar una vez el elemento es visible
            }
        });
    }, {
        threshold: 0.5 // Activamos cuando el 50% del elemento sea visible
    });

    // Observamos todas las tarjetas
    cards.forEach((card, index) => observer.observe(card));
});



