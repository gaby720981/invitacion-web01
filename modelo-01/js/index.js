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


//color clickeado

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

//opacidad

document.addEventListener('scroll', function() {
  var scrollTop = window.scrollY;
  var video = document.querySelector('.mobile-video');
  var maxOpacity = 0.009; // Ajusta el valor máximo de opacidad
  var opacity = 1 - Math.pow(scrollTop / 100, 2) * maxOpacity; // Utiliza Math.pow para aplicar una función no lineal

  video.style.opacity = Math.max(opacity, 0).toFixed(2); // Garantiza que la opacidad no sea inferior a 0
});


//efecto confeti

document.getElementsByClassName("confetti-button")[0].addEventListener("click", () => {
  let canvas = document.createElement("canvas");
  let container = document.getElementsByClassName("confetti-container")[0];
  canvas.width = 600;
  canvas.height = 600;

  container.appendChild(canvas);

  let confetti_button = confetti.create(canvas);
  
  confetti_button({
    colors: ["#c0802a"]
  }).then(() => {
    setTimeout(() => {
      container.removeChild(canvas);
     
      window.open("https://pinterest.com/", "_blank");
    }, 100);
  });
});






 

 