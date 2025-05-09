const questions = [
    {
        question: "Which HTML tag is used to define a paragraph?",
        answers: [
            { text: "<par>", correct: false },
            { text: "<paragraph>", correct: false },
            { text: "<div>", correct: false },
            { text: "<p>", correct: true }
        ]
    },
    {
        question: "Which of these is a version control system?",
        answers: [
            { text: "git", correct: true },
            { text: "PHP", correct: false },
            { text: "CSS", correct: false },
            { text: "C++", correct: false }
        ]
    },
    {
        question: "In software engineering, what does API stand for?",
        answers: [
            { text: "Advanced programming interface", correct: false },
            { text: "Automated process integration", correct: false },
            { text: "Active process instructions", correct: false },
            { text: "Application programming interface", correct: true }
        ]
    },
    {
        question: "Which CSS property makes text bold?",
        answers: [
            { text: "bold", correct: false },
            { text: "font-weight", correct: true },
            { text: "weight", correct: false },
            { text: "text-bold", correct: false }
        ]
    },
    {
      question: "which of the following is used to define the structure of a web page?",
      answers: [
        {text: "HTML", correct:true },
        {text: "javascript", correct:false },
        {text: "CSS", correct:false },
        {text: "python", correct:false},
      ]
    },
    {
        question: "Which of the following tags is used to define a table cell?",
        answers: [
            {text: "<tr>", correct:false},
            {text: "<table>", correct:false},
            {text: "<th>", correct:false},
            {text: "<td>",correct:true},
        ]
    },
    {
        question: "Which of the following is used to specify the size of the text in CSS?",
        answers:[
            {text: "font-height", correct:false},
            {text: "font-size", correct:true},
            {text: "font-weight", correct:false},
            {text: "font-style", correct:false},
        ]
    },
    {
        question: "what does <div> tag do in HTML?",
        answers: [
            {text: "creates a hyperlink", correct:false},
            {text: "adds a table", correct:false},
            {text: "defines a devision or a section in HTML document", correct:true},
        ]
    },

    {
        question: "What is the default value of the position property in CSS?",
        answers:[
            {text: "relative", correct:false},
            {text: "static", correct:true},
        ]
            
        },
    {
        question: "Which tag is used to define an unordered list in HTML",
        answers:[
            {text: "<ul>", correct:true},
            {text: "<list>", correct:false},
            {text: "<ol>", correct:false},
            {text: "<li>", correct:false},
        ]
    }, 
    {
        question: "which of the following is the correct HTML element for the largest heading?",
        answers:[
            {text: "<h7>", correct:false},
            {text: "<h1>", correct:true},
            {text: "<h4>", correct:false},
        ]
    },
    {
        question: "which CSS property is used to set the distance between the content and the border of an element",
        answers:[
            {text: "margin", correct:false},
            {text: "outline", correct:false},
            {text: "padding", correct:true},
            {text: "border-spacing", correct:false},

        ]
    },

    
    
    {
        question: "Which CSS property is used to change the background color of an element?",
        answers: [
            {text: "background-color", correct:true},
            {text: "color", correct:false},
            {text: "background-image", correct:false},
        ]
    },
    {
        question: "Which HTML is used to define a hyperlink?",
        answers: [
            {text: "<href>", correct:false},
            {text: "<link>", correct:false},
            {text: "<a>", correct:true},
        ]
    },
    {
        question: "What is the correct HTML tag for inserting a line break?",
        answers: [
            {text: "<break>", correct:false},
            {text: "<br>", correct:true},
            {text: "<hr>", correct:false},
            {text: "<lb>", correct:false},
        ]
    },
{
    question: "Which of the following is used to define the structure of a web page?",
    answers: [
    {text: "CSS", correct:false},
    {text: "Python", correct:false},
    {text: "HTML", correct:true},
    ]
        
    },
    {
        question: "What does the CSS border-radius property do?",
        answers: [
            {text: "adds shadow around the element", correct:false},
            {text: "defines the width of the border", correct:false},
            {text: "Rounds the corner of an element", correct:true},
            {text: "sets the backgruond color", correct:false},

        ]
    },
    {
        question: "Which HTML tag is uded to define paragraph?",
        answers: [
            {text: "<p>", correct:true},
            {text: "<pr>", correct:false},
            {text: "<para>", correct:false}
        ]
    },

    {
        question: "Which of the following is used to align the text in CSS?",
        answers:[
            {text: "align-text", correct:false},
            {text: "align", correct:false},
            {text: "text-align", correct:true},
            {text: "text-position", correct:false},
        ]
    },
    {
        question: "Which of the following is the correct HTML tag for an inline frame?",
        answers: [
            {text: "inline", correct:false},
            {text: "<object>", correct:false},
            {text: "frame", correct:false},
            {text: "<iframe>", correct:true},
        ]
    }

    
];


const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score-display");
const resultMessage = document.getElementById("result-message");

let currentQuestionIndex = 0;
console.log("showing quetion:",currentQuestionIndex);
let score = 0;
const pointsPerQuestion = 5;
const passingScore = 70;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreDisplay.textContent = "Score: 0";
    resultMessage.textContent = "";
    nextButton.textContent = "Next";
    nextButton.removeEventListener("click", startQuiz);
    nextButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(button, answer.correct, currentQuestion.answers));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    answerButtons.innerHTML = "";
}

function selectAnswer(button, isCorrect, answers) {
    const buttons = answerButtons.querySelectorAll(".btn");
    buttons.forEach(btn => btn.disabled = true);

    if (isCorrect) {
        button.classList.add("correct");
        score += pointsPerQuestion;
    } else {
        button.classList.add("wrong");

        // Highlight the correct answer
        answers.forEach(answer => {
            if (answer.correct) {
                const correctButton = [...buttons].find(btn => btn.textContent === answer.text);
                correctButton.classList.add("correct-answer");
            }
        });
    }

    scoreDisplay.textContent = `Score: ${score}`;
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    questionElement.textContent = "Quiz Completed!";
    answerButtons.innerHTML = "";
    nextButton.textContent = "Restart";
    nextButton.style.display = "block";
    nextButton.addEventListener("click", startQuiz);

    if (score >= passingScore) {
        resultMessage.textContent = `Congratulations! You scored ${score}. You get a certificate! 🎉`;
        resultMessage.style.color = "green";
    } else {
        resultMessage.textContent = `You scored ${score}. You need at least ${passingScore} to get a certificate. Try again!`;
        resultMessage.style.color = "red";
    }
}

startQuiz();