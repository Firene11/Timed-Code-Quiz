//GIVEN I am taking a code quiz WHEN I click the start button
//THEN a timer starts and I am presented with a question WHEN I answer a question



//The countdown timer
var timer = document.querySelector("#timer");
//Intro section
var intro = document.querySelector(".intro");
//Heading and questions
var heading = document.querySelectorAll(".header");
//All paragraphs
var description = document.querySelector(".describe");
//The Start Button
var start = document.querySelector("#start");

//Multiple Choice section
var multChoice = document.querySelector(".mult-choice");
//Questions
var questionBttn = document.querySelector(".questions");
//Total of questions left to stop timer
var totalQuestions = 0; 
//Multiple Choice Buttons
var ansOneBttn = document.querySelector("#one");
var ansTwoBttn = document.querySelector("#two");
var ansThreeBttn = document.querySelector("#three");
var ansFourBttn = document.querySelector("#four");
var correctAnswer = document.querySelector(".answer");

// Correct or Incorrect section
var yesNo = document.querySelector(".yes-no");
//Correct or wrong text that shows up after answer selected
var correct = document.querySelector(".correct");
var wrong = document.querySelector(".wrong");

//Results
var score = document.querySelector("#score");
//Contains the Form section
var submission = document.querySelector("#submission");
//form to enter user's Inititals at end of quiz
var enterInitials = document.querySelector("#initials");
//The empty input box
var submitButton = document.querySelector("#submit");

//scorebox on high scores page
var scorebox = document.querySelector("#scorebox");
//Empty string to declare user's score
var userScore = "";
//Empty array to declare high scores
var highScores = [];
//Clear High Scores Button
var clearScore = document.querySelector(".clear-high-scores");

////////////////////////////////////////////////////////////////////////////

//Questions and Answers

var qAndA = [{
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
        answer: "4. All of the above,"
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
    }];

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
        askQuestions();      
        }
})
}

function askQuestions() {
    multChoice.style.display = "block";
    var i = 0;
    if (i <= qAndA.length) {
    questionBttn.textContent = qAndA[i].question;
    ansOneBttn.textContent = qAndA[i].choice[0];
    ansTwoBttn.textContent = qAndA[i].choice[1];
    ansThreeBttn.textContent = qAndA[i].choice[2];
    ansFourBttn.textContent = qAndA[i].choice[3];
}
}


function enterInit() {
    enterInitials.innerHTML = ""
    enterInitials.innerHTML = enterInitials.value;
}


startQuiz();

//submitButton.addEventListener('click', showResults);





//THEN I am presented with another question WHEN I answer a question incorrectly
//THEN time is subtracted from the clock WHEN all questions are answered or the timer reaches 0
//THEN the game is over WHEN the game is over
//THEN I can save my initials and score