const questions = [
    {
        question: "¿Cuál es mi comida favorita?",
        options: ["Pizza", "Ñoquis", "Asado"],
        correctAnswer: 0
    },
    {
        question: "¿Qué estilo de música amo?",
        options: ["Metal", "Pop", "Cumbia"],
        correctAnswer: 0
    },
    {
        question: "¿Cuál es mi helado favorito?",
        options: ["Chocolate", "Pistacho", "Limón"],
        correctAnswer: 1
    },
    {
        question: "¿Qué deporte disfruto hacer?",
        options: ["Voley", "Tenis", "Ninguno"],
        correctAnswer: 2
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
        messageElement.textContent = "¡Perfecto! Conoces muy bien a la cumpleañera!.";
    } else {
        messageElement.textContent = "¡Gracias por participar!";
    }
}

loadQuestion();