//The countdown timer
var timer = {
    seconds: 75,
    penalty: 10,
    countdown: null,
    interval: null,
    element: document.querySelector("#timer")
};

// The Quiz
var quiz = {
    score: 0,
    position: 0,
    elements: {
        intro: document.querySelector(".intro"),
        heading: document.querySelector(".header"),
        description: document.querySelector(".describe"),
        start: document.querySelector("#start"),
        container: document.querySelector("#quiz"),
        question: document.querySelector(".question"),
        buttons: document.querySelector(".answer"),
        score: document.querySelectorAll(".score"),
        completed: document.querySelector("#completed"),
        timeout: document.querySelector("#timeout"),
        message: document.querySelector("#message"),
        questionCount: document.querySelector("#questionCount"),
        save: document.querySelector("#save"),
        scoreBox: document.querySelector("#scoreBox"),
        clearScores: document.querySelector("#clearScores"),
    },
    questions: [
        {
            question: "Commonly used datatypes DO NOT include:",
            choice: ["1. String", "2. Boolean", "3. Alerts", "4. Numbers"],
            answer: "3. Alerts",
        },
        {
            question: "The condition in an if/else statement is enclosed with ____.",
            choice: ["1. Quotes", "2. Curly brackets", "3. Parenthesis", "4. Square brackets"],
            answer: "3. Parenthesis",
        },
        {
            question: "Arrays in javascript can be used to store ___.",
            choice: ["1. Numbers and strings", "2. Other arrays", "3. Booleans", "4. All of the above"],
            answer: "4. All of the above"
        },
        {
            question: "String values must be enclosed within ___ when being assigned to variables.",
            choice: ["1. Commas", "2. Curly brackets", "3. Quotes", "4. Parenthesis"],
            answer: "3. Quotes",
        },
        {
            question: "A very useful tool used during development and debugging for printing content to the debugger is:",
            choice: ["1. Javascript", "2. Terminal/bash", "3. For loops", "4. Console.log"],
            answer: "4. Console.log",
        }
    ]
}




//Starts the timer if START button is clicked
function setTime() {
var secondsLeft = 75;
var secondsSubtract = secondsLeft -10;
	
var timerCountdown = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft;
	console.log("Timer has started");
//Stop timer if there's 0 seconds left or all questions are answered
    if(secondsLeft === 0 || totalQuestions === totalQuestions.length) {
        clearInterval(timerCountdown);
        console.log("stopped");
    }
	}, 1000);
};

function startQuiz() {
    multChoice.style.display = "none";
    submission.style.display = "none";
    start.addEventListener('click', function() {
        if (start) { 
        intro.style.display = "none";
        setTime();
        runQuestions();      
        }
})
}

//GIVEN I am taking a code quiz WHEN I click the start button
//THEN a timer starts and I am presented with a question WHEN I answer a question

function askQuestion() {
    for (var i = 0; i <= qAndA.length; i++)
        console.log("ask a question");
        runQuestions();
    }

function runQuestions() {
    multChoice.style.display = "block";
    var i = 0;
    if (i <= qAndA.length) {
    questionBttn.innerHTML = qAndA[i].question;
    ansOneBttn.innerHTML = qAndA[i].choice[0];
    ansTwoBttn.innerHTML = qAndA[i].choice[1];
    ansThreeBttn.innerHTML = qAndA[i].choice[2];
    ansFourBttn.innerHTML = qAndA[i].choice[3];
}

}

function correctAnswer() {
    if (qAndA.choice === qAndA.answer) {
        console.log("Correct!");
        correctAnswer.innerHTML = "Correct!";
    } else {
        console.log("Wrong");
        wrong.innerHTML = "Wrong";
    }
}



//THEN I am presented with another question WHEN I answer a question incorrectly
//THEN time is subtracted from the clock WHEN all questions are answered or the timer reaches 0

//THEN the game is over WHEN the game is over
//THEN I can save my initials and score

function enterInit() {
    enterInitials.innerHTML = ""
    enterInitials.innerHTML = enterInitials.value;
}


startQuiz();





