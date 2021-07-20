// global variables
let score = 5;
let currentQues = 0; 
let timerId;
const maxQues = 10;

// reference variables
const startBtnEl = document.querySelector("#start-btn");
const scoreEl = document.querySelector("#score");
const questionTitleEl = document.querySelector("#question-title")
const questionChoicesEl = document.querySelector("#question-choices")


// questions
const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choice1: "<script>",
        choice2: "<scripting>",
        choice3: "<js>",
        choice4: "<javascript>",
        answer: "<script>",
    },
    {
        question: "How do you write \"Hello World\" in an alert box?",
        choice1: "alert(\"Hello World\");",
        choice2: "alertBox(\"Hello World\");",
        choice3: "msg(\"Hello World\");",
        choice4: "None of the above",
        answer: "alert(\"Hello World\");",
    },
    {
        question: "How to write an IF statement in JavaScript?",
        choice1: "if i == 5 then",
        choice2: "if i = 5 then",
        choice3: "if i = 5",
        choice4: "if (i == 5)",
        answer: "if (i == 5)",
    },
    {
        question: "How to write an IF statement for executing some code if \"i\" is NOT equal to 5?",
        choice1: "if i =! 5 then",
        choice2: "if (i != 5)",
        choice3: "if (i <> 5)",
        choice4: "if i <> 5",
        answer: "if (i != 5)",
    },
    {
        question: "How does a FOR loop start?",
        choice1: "for i = 1 to 5",
        choice2: "for (i = 0; i <= 5; i++)",
        choice3: "for (i = 0; i <= 5)",
        choice4: "for (i <= 5; i++)",
        answer: "for (i = 0; i <= 5; i++)",
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        choice1: "var colors = (1:\"red\", 2:\"green\", 3:\"blue\")",
        choice2: "var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")",
        choice3: "var colors = \"red\", \"green\", \"blue\"",
        choice4: "var colors = [\"red\", \"green\", \"blue\"]",
        answer: "var colors = [\"red\", \"green\", \"blue\"]",
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        choice1: "Math.round(7.25)",
        choice2: "round(7.25)",
        choice3: "Math.rnd(7.25)",
        choice4: "rnd(7.25)",
        answer: "Math.round(7.25)",
    },
    {
        question: "How do you find the number with the highest value of x and y?",
        choice1: "ceil(x, y)",
        choice2: "Math.max(x, y)",
        choice3: "top(x, y)",
        choice4: "Math.ceil(x, y)",
        answer: "Math.max(x, y)",
    },
    {
        question:  "Which event occurs when the user clicks on an HTML element?",
        choice1: "onchange",
        choice2: "onclick",
        choice3: "onmouseclick",
        choice4: "onmouseover",
        answer: "onclick",
    },
    {
        question:  "Which operator is used to assign a value to a variable?",
        choice1: "x",
        choice2: "=",
        choice3: "*",
        choice4: "-",
        answer: "=",
    },
];

scoreEl.textContent = score;



//event handlers
function startQuiz() {
    
    console.log("handling start quiz");

    //start timer
    timerId = setInterval(function() {
        score--;
        scoreEl.textContent = score;

        if(score <= 0) {
            score = 0;
            scoreEl.textContent = score;
            endQuiz();
        }

    }, 1000)



// show first question
    console.log("get first question");
    showQuestion();
};

function handleQuestionClick(event) {
const currentQuestionCorrect = questions[currentQues].answer;
const val =event.target.textContent

// if wrong
if(currentQuestionCorrect !== val){
score -= 10;
scoreEl.textContent = score;
} 

//check for next question
if(currentQues === questions.length -1) {
    endQuiz();
} else{
    currentQues++;
    showQuestion();
}

}


function showQuestion(){
    const currentQuestion = questions[currentQues];

    questionTitleEl.textContent = currentQuestion.question;

// show choices
const choices = [currentQuestion.choice1, currentQuestion.choice2, currentQuestion.choice3, currentQuestion.choice4]

questionChoicesEl.innerHTML = "";
choices.forEach(function(choice) {
    const choiceBtn = document.createElement("button");

    choiceBtn.textContent = choice;
    choiceBtn.setAttribute ("class", "choiceBtn")

    choiceBtn.onclick = handleQuestionClick;
    questionChoicesEl.appendChild(choiceBtn);
});
}
// event listeners
startBtnEl.addEventListener("click", startQuiz);

function endQuiz() {
clearInterval(timerId);

console.log("game over");
};









