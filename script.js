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


function codeQuiz() {
    multChoice.style.display = "none";
    submission.style.display = "none";
    start.addEventListener('click', function() {
        if(start) 
        setTime();
        firstQuestion();
})}

function firstQuestion() {
    multChoice.style.display = "block";
    intro.style.display = "none";
    question.textContent = "Commonly used data types DO NOT include:";
    firstChoice.textContent = "1. Strings";
    secondChoice.textContent = "2. Booleans";
    thirdChoice.textContent = "3. Alerts";
    fourthChoice.textContent = "4. Numbers";

    thirdChoice.addEventListener('click', function() {
        if(thirdChoice) {
        secondQuestion();
    } 
})
    firstChoice.addEventListener('click', function() {
    if(firstChoice) {
    firstQuestion();
    decreaseTime();
} 
})
    
}

function secondQuestion() {
    multChoice.style.display = "block";
    intro.style.display = "none";
    question.textContent = "The condition in an if/else statement is enclosed with __________";
    firstChoice.textContent = "1. Quotes";
    secondChoice.textContent = "2. Curly Brackets";
    thirdChoice.textContent = "3. Parenthesis";
    fourthChoice.textContent = "4. Square Brackets";
}


function decreaseTime() {
    timer.textContent = secondsSubtract;
}
     

codeQuiz();

//------------------------------------



//THEN I am presented with another question WHEN I answer a question incorrectly
//THEN time is subtracted from the clock WHEN all questions are answered or the timer reaches 0
//THEN the game is over WHEN the game is over
//THEN I can save my initials and score