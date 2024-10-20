//Animación

window.sr = ScrollReveal();

 sr.reveal('.dia, .hora, .lugar', {
    duration: 1200,
    origin: 'bottom', // Animación desde abajo
    distance: '100px' 
});
sr.reveal('.despedida', {
  duration: 5000,
  origin: 'bottom', // Animación desde abajo
  distance: '100px' 
});

//Opacidad al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('scroll', function() {
    var scrollTop = window.scrollY;
    var image = document.querySelector('.portada');
    var maxOpacity = 0.04; // Cambia el valor a 1 para más efecto visible
    var opacity = 1 - (scrollTop / 900); // Ajusta el divisor para mayor o menor sensibilidad

    if (image) {
      image.style.opacity = Math.max(opacity, 0); 
    }
  });
});


















 

 