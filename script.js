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




//Starts the timer if START button is clicked
start.addEventListener('click', function() {
var secondsLeft = 75;
var secondsSubtract = 10;
	
var timerCountdown = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft;
	console.log("Timer has started");

    if(secondsLeft === 0) {
        clearInterval(timerCountdown);
        console.log("stopped");
    }

	}, 1000);
});



function codeQuiz() {
    multChoice.style.display = "none";
    submission.style.display = "none";

    firstQuestion();
}

function firstQuestion() {

}



     


codeQuiz();

//------------------------------------



//THEN I am presented with another question WHEN I answer a question incorrectly
//THEN time is subtracted from the clock WHEN all questions are answered or the timer reaches 0
//THEN the game is over WHEN the game is over
//THEN I can save my initials and score