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

//opacidad al hacer scroll

document.addEventListener('DOMContentLoaded', function() {
  var image = document.querySelector('.portada');
  if (image) {
      document.addEventListener('scroll', function() {
          var scrollTop = window.scrollY;
          var maxOpacity = 0.09; // Ajusta el valor máximo de opacidad
          var opacity = 1 - Math.pow(scrollTop / 100, 2) * maxOpacity;
          image.style.opacity = Math.max(opacity, 0);
      });
  } else {
      console.error('Elemento .portada no encontrado');
  }
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
    colors: ["#fff"],
    shapes: ["square"]
  });

  setTimeout(() => {
    window.location.href = "https://wa.link/371s5g";
  }, 1000);
}
