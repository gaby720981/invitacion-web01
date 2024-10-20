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
    console.log(scrollTop); // Para depurar, ver si el scrollTop se está actualizando correctamente
    var image = document.querySelector('.portada');
    var maxOpacity = 1; // Cambia el valor a 1 para más efecto visible
    var opacity = 1 - (scrollTop / 500); // Ajusta el divisor para mayor o menor sensibilidad

    if (image) {
      image.style.opacity = Math.max(opacity, 0); 
    }
  });
});


















 

 