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
  var maxOpacity = 0.009; 
  var opacity = 1 - Math.pow(scrollTop / 100, 2) * maxOpacity; 
  video.style.opacity = Math.max(opacity, 0).toFixed(2); 
});


//efecto confeti

function handleButtonClick() {
  let canvas = document.createElement("canvas");
  let container = document.getElementsByClassName("confetti-container")[0];
  canvas.width = 600;
  canvas.height = 600;

  container.appendChild(canvas);

  let confetti_button = confetti.create(canvas);

  confetti_button({
    particleCount: 200, 
    spread: 180,
    colors: ["#c0802a"],
    shapes: ["square"]
  });

  setTimeout(() => {
    window.location.href = "https://web.whatsapp.com/";
  }, 1000);
}
  



 

 