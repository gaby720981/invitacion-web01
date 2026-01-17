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
  const playIcon = playButton.querySelector('img');
  const playText = playButton.querySelector('.play');
  
  if (isMusicPlaying) {
    playIcon.src = './img/pause.png';
    playIcon.style.width = '30%'; 
    playIcon.style.height = '30%'; 
    playIcon.style.marginRight = '1px';
    playText.style.display = 'none';
    playButton.style.backgroundColor = 'transparent';
  } else {
    playIcon.src = './img/play.png';
    playText.style.display = 'inline-block';
  }
}

//Boton clickeado

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('button');

  buttons.forEach(button => {
    // Excluir botones que tengan la clase "arrow"
    if (!button.classList.contains('arrow')) {
      button.addEventListener('click', function () {
        this.classList.toggle('clicked');
      });
    }
  });
});


//Opacidad al hacer scroll

document.addEventListener('scroll', function() {
  var scrollTop = window.scrollY;
  var image = document.querySelector('.portada');
  var maxOpacity = 0.04; // Ajusta el valor máximo de opacidad
  var opacity = 1 - Math.pow(scrollTop / 100, 2) * maxOpacity; 
  if (image) {
    image.style.opacity = Math.max(opacity, 0); 
  }
});

//efecto confeti y confirmar asistencia

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
    colors: ["#C4863B"],
    shapes: ["square"]
  });

  setTimeout(() => {
    window.location.href = "https://web.whatsapp.com/";
  }, 1000);
}

//slider

const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const images = slider.querySelectorAll('img');

let currentIndex = 0;
const imageCount = images.length - 1; // la última es la imagen duplicada (fantasma)

function updateSlider(animate = true) {
  if (!animate) {
    slider.style.transition = 'none';
  } else {
    slider.style.transition = 'transform 0.5s ease-in-out';
  }
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Botón ➡️
rightArrow.addEventListener('click', () => {
  currentIndex++;
  updateSlider();

  if (currentIndex === imageCount) {
    setTimeout(() => {
      currentIndex = 0;
      updateSlider(false); // sin animación
    }, 500);
  }
});

// Botón ⬅️
leftArrow.addEventListener('click', () => {
  if (currentIndex === 0) {
    currentIndex = imageCount;
    updateSlider(false);
    setTimeout(() => {
      currentIndex = imageCount - 1;
      updateSlider();
    }, 10);
  } else {
    currentIndex--;
    updateSlider();
  }
});

//trivia
const questions = [
    {
        question: "¿Dónde se conocieron los novios?",
        options: ["En la universidad", "En un viaje", "Por amigos en común"],
        correctAnswer: 0
    },
    {
        question: "¿Cuál es el mes de la boda?",
        options: ["Junio", "Septiembre", "Diciembre"],
        correctAnswer: 1
    },
    {
        question: "¿Cuál es el color temático de la boda?",
        options: ["Azul marino", "Verde esmeralda", "Borgoña"],
        correctAnswer: 2
    },
    {
        question: "¿Qué actividad disfrutan más hacer juntos?",
        options: ["Viajar", "Cocinar", "Ver películas"],
        correctAnswer: 0
    }
];

let currentQuestion = 0;
let score = 0;

const quizElement = document.getElementById('quiz');
const resultsElement = document.getElementById('results');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const scoreElement = document.getElementById('score');
const messageElement = document.getElementById('message');

function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    
    optionsElement.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option');
        button.addEventListener('click', () => selectOption(index));
        optionsElement.appendChild(button);
    });
    
    nextButton.disabled = true;
}

function selectOption(index) {
    const options = optionsElement.children;
    for (let i = 0; i < options.length; i++) {
        options[i].classList.remove('selected');
    }
    options[index].classList.add('selected');
    nextButton.disabled = false;
}

function checkAnswer() {
    const selectedOption = optionsElement.querySelector('.selected');
    if (selectedOption) {
        const selectedAnswer = Array.from(optionsElement.children).indexOf(selectedOption);
        if (selectedAnswer === questions[currentQuestion].correctAnswer) {
            score++;
        }
    }
}

nextButton.addEventListener('click', () => {
    checkAnswer();
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    quizElement.style.display = 'none';
    resultsElement.style.display = 'block';
    scoreElement.textContent = `Acertaste ${score} de ${questions.length} preguntas`;
    
    if (score === questions.length) {
        messageElement.textContent = "¡Perfecto! Conoces muy bien a la pareja.";
    } else {
        messageElement.textContent = "¡Gracias por participar! Nos vemos en la boda.";
    }
}

loadQuestion();
















 

 