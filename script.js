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
var questions = document.querySelector(".questions");
//Total of questions left to stop timer
var totalQuestions = 0; 
//Multiple Choice Buttons
var answerOne = document.querySelector(".one");
var answerTwo = document.querySelector(".two");
var answerThree = document.querySelector(".three");
var answerFour = document.querySelector(".four");
var correctAnswer = "";

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

var qAndA = [
    {
        questions: "Commonly used datatypes DO NOT include:",
        answerOne: "1. String",
        answerTwo: "2. Boolean",
        answerThree: "3. Alerts",
        answerFour: "4. Numbers",
        correctAnswer: answerThree,
      },
 
    {
        questions: "The condition in an if/else statement is enclosed with ____.",
        answerOne: "1. Quotes", 
        answerTwo: "2. Curly brackets",
        answerThree: "3. Parenthesis",
        answerFour: "4. Square brackets",
        correctAnswer: answerThree,
    },
 
    {
        questions: "Arrays in javascript can be used to store ___.",
        answerOne: "1. Numbers and strings", 
        answerTwo: "2. Other arrays", 
        answerThree: "3. Booleans",
        answerFour: "4. All of the above",
        CorrectAnswer: answerFour,
    },
 
    {
        questions: "String values must be enclosed within ___ when being assigned to variables.",
        answerOne: "1. Commas",
        answerTwo: "2. Curly brackets",
        answerThree: "3. Quotes",
        answerFour: "4. Parenthesis",
        correctAnswer: answerThree,
    },
 
    {
        questions: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answerOne: "1. Javascript",
        answerTwo: "2. Terminal/bash",
        answerThree: "3. For loops",
        answerFour: "4. Console.log",
        correctAnswer: answerFour,
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
    var i = 0;
    question.innerHTML = qAnda[i];
}


function yesNo() {
        if (correct) {
            //show correct! element
            } else {
            //show wrong! element and deduct 10 seconds from timer
            }
            console.log(userScore)
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