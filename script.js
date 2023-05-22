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

//Contains the Form section
var submission = document.querySelector("#submission");
//form to enter user's Inititals at end of quiz
var enterInitials = document.querySelector("form");
//The empty input box
var input = document.querySelector(".submit");

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
        choices: ["1. string", "2. boolean", "3. alerts", "4. numbers"],
        answer: 2
    },
 
    {
        question: "The condition in an if/else statement is enclosed with ____.",
        choices: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        answer: 2
    },
 
    {
        question: "Arrays in javascript can be used to store ___.",
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: 3
    },
 
    {
        question: "String values must be enclosed within ___ when being assigned to variables.",
        choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        answer: 2
    },
 
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
        answer: 3
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

function decreaseTime() {
    timer.textContent = secondsSubtract;
    timerCountdown = setInterval(timerCountdown);
}


function codeQuiz() {
    multChoice.style.display = "none";
    submission.style.display = "none";
    yesNo.style.display = "none";
    document.addEventListener('click', function(event) {
        if (event.target === start) 
        setTime();
        showQuestions();
        totalQuestions = 0;
})}



function showQuestions() {

}




     

codeQuiz();

//------------------------------------



//THEN I am presented with another question WHEN I answer a question incorrectly
//THEN time is subtracted from the clock WHEN all questions are answered or the timer reaches 0
//THEN the game is over WHEN the game is over
//THEN I can save my initials and score