window.sr = ScrollReveal();

 sr.reveal('.frase, .dia, .hora, .lugar, .dresscode, .asistencia, .cancion, .insta, .tips, .fotos', {
    duration: 1500,
    origin: 'bottom', // Animación desde abajo
    distance: '80px' 
});
sr.reveal('.despedida', {
  duration: 5000,
  origin: 'bottom', // Animación desde abajo
  distance: '100px' 
});


const backgroundMusic = document.getElementById('backgroundMusic');
const playButton = document.getElementById('playButton');
let isMusicPlaying = false;

document.addEventListener('DOMContentLoaded', function() {
  playMusic();
});

playButton.addEventListener('click', () => {
  if (isMusicPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
});

backgroundMusic.addEventListener('ended', () => {
  isMusicPlaying = false;
  updatePlayButtonState();
});

function playMusic() {
  backgroundMusic.play();
  isMusicPlaying = true;
  updatePlayButtonState();
}

function pauseMusic() {
  backgroundMusic.pause();
  isMusicPlaying = false;
  updatePlayButtonState();
}

function updatePlayButtonState() {
  const playIcon = playButton.querySelector('i');
  playIcon.className = isMusicPlaying ? 'fa-solid fa-pause' : 'fa-solid fa-play';
  playIcon.style.color = '#AD664D'; 
}



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

document.addEventListener('scroll', function() {
  var scrollTop = window.scrollY;
  var video = document.querySelector('.mobile-video');
  var maxOpacity = 0.009; // Ajusta el valor máximo de opacidad
  var opacity = 1 - Math.pow(scrollTop / 100, 2) * maxOpacity; 
  video.style.opacity = Math.max(opacity, 0).toFixed(2); 
});







 

 