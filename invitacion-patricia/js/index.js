//Animación

window.sr = ScrollReveal();

 sr.reveal('.inicio, .dia, .hora, .lugar, .dresscode, .asistencia, .cancion, .insta', {
    duration: 1200,
    origin: 'bottom', // Animación desde abajo
    distance: '100px' 
});
sr.reveal('.despedida', {
  duration: 5000,
  origin: 'bottom', // Animación desde abajo
  distance: '100px' 
});

//Boton flotante musica

const backgroundMusic = document.getElementById('backgroundMusic');
const playButton = document.getElementById('playButton');
let isMusicPlaying = false;

playButton.addEventListener('click', () => {
  if (isMusicPlaying) {
    backgroundMusic.pause();
  } else {
    backgroundMusic.play();
  }
  isMusicPlaying = !isMusicPlaying;
  updatePlayButtonState();
});

backgroundMusic.addEventListener('ended', () => {
  isMusicPlaying = false;
  updatePlayButtonState();
});

function updatePlayButtonState() {
  const playIcon = playButton.querySelector('i');
  playIcon.className = isMusicPlaying ? 'fa-solid fa-pause' : 'fa-solid fa-play';
  playIcon.style.color = '#CC9E6D';
}



//Boton clickeado

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('button');

  buttons.forEach(button => {
    // Verificar si el botón no tiene el id "playButton"
    if (button.id !== 'playButton') {
      button.addEventListener('click', function () {
        this.classList.toggle('clicked');
      });
    }
  });
});

//Opacidad al hacer scroll

document.addEventListener('scroll', function() {
  var scrollTop = window.scrollY;
  var video = document.querySelector('.mobile-video');
  var maxOpacity = 0.009; // Ajusta el valor máximo de opacidad
  var opacity = 1 - Math.pow(scrollTop / 100, 2) * maxOpacity; 
  video.style.opacity = Math.max(opacity, 0).toFixed(2); 
});


//efecto fixed

// Selecciona el elemento header
const header = document.querySelector('header');

// Crea un nuevo div que actuará como el fondo fijo
const fixedBackground = document.createElement('div');
fixedBackground.style.position = 'fixed';
fixedBackground.style.left = '0';
fixedBackground.style.top = '0';
fixedBackground.style.width = '100%';
fixedBackground.style.height = '100%';
fixedBackground.style.backgroundImage = 'url("/img/fondo.webp"), url("/img/fondo.png"), url("/img/fondo.jpg"), url("/img/fondo.jpeg")';
fixedBackground.style.backgroundSize = 'cover';
fixedBackground.style.backgroundPosition = 'center';
fixedBackground.style.zIndex = '-1';

// Inserta el fondo fijo detrás del elemento header
header.parentNode.insertBefore(fixedBackground, header);

// Función para actualizar la posición del fondo en el desplazamiento
function updateBackgroundPosition() {
  fixedBackground.style.backgroundPosition = 'center ' + (window.scrollY * 0.5) + 'px';
}

// Evento de desplazamiento que actualiza la posición del fondo
window.addEventListener('scroll', updateBackgroundPosition);






 

 