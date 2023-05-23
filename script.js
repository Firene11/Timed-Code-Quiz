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
var question = document.querySelector(".questions");
//Total of questions left to stop timer
var totalQuestions = 0; 
//Multiple Choice Buttons
var firstChoice = document.querySelector(".one");
var secondChoice = document.querySelector(".two");
var thirdChoice = document.querySelector(".three");
var fourthChoice = document.querySelector(".four");

// Correct or Incorrect section
var yesNo = document.querySelector(".yes-no");
//Correct or wrong text tha shows up after answer selected
var correctAnswer = document.querySelector(".correct");
var wrongAnswer = document.querySelector(".wrong");

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
//Empty array to declare high scores
var highScores = [];
//Clear High Scores Button
var clearScore = document.querySelector(".clear-high-scores");

////////////////////////////////////////////////////////////////////////////

//Questions and Answers

var qAndA = [
    {
        question: "Commonly used datatypes DO NOT include:",
        answers: {
          1: "1. String",
          2: "2. Boolean",
          3: "3. Alerts",
          4: "4. Numbers",
        },
        correctAnswer: "3"
      },
 
    {
        question: "The condition in an if/else statement is enclosed with ____.",
        answers: {
            1: "1. Quotes", 
            2: "2. Curly brackets",
            3: "3. Parenthesis",
            4: "4. Square brackets",
        },
        correctAnswer: "3",
    },
 
    {
        question: "Arrays in javascript can be used to store ___.",
        answers: {
            1: "1. Numbers and strings", 
            2: "2. Other arrays", 
            3: "3. Booleans",
            4: "4. All of the above",
        },
        CorrectAnswer: "4",
    },
 
    {
        question: "String values must be enclosed within ___ when being assigned to variables.",
        answers: {
            1: "1. Commas",
            2: "2. Curly brackets",
            3: "3. Quotes",
            4: "4. Parenthesis",
        },
        correctAnswer: "3"
    },
 
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            1: "1. Javascript",
            2: "2. Terminal/bash",
            3: "3. For loops",
            4: "4. Console.log",
        },
        correctAnswer: "4. Console.log"
    }
 ];

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
    yesNo.style.display = "none";
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