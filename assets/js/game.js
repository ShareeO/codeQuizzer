// global variables
let score = 10;
let timerId;

// reference variables
const startBtnEl = document.querySelector("#start-btn");
const scoreEl = document.querySelector("#score");

scoreEl.textContent = score;

//event handlers
function startQuiz() {
    console.log("handling start quiz");

    //start timer
    timerId = setInterval(function() {
        score--;
        scoreEl.textContent = score

    }, 1000)

    //show first question
    console.log("get first question");
};

// event listeners
startBtnEl.addEventListener("click");










