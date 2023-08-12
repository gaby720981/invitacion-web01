window.sr = ScrollReveal();

 sr.reveal('.frase, .dia, .hora, .lugar, .dresscode, .asistencia, .cancion, .insta, .tips, .fotos, .despedida', {
    duration: 4000,
    origin: 'bottom', // Animación desde abajo
    distance: '50px' 
});

const backgroundMusic = document.getElementById('backgroundMusic');
const playButton = document.getElementById('playButton');

playButton.addEventListener('click', () => {
  backgroundMusic.play();
  playButton.disabled = true; // Deshabilitar el botón al hacer clic en él
});

backgroundMusic.addEventListener('ended', () => {
  playButton.disabled = false; // Habilitar el botón cuando la música termine de reproducirse
});


  
  
  
  
  
  
  
  