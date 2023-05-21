//GIVEN I am taking a code quiz WHEN I click the start button
//THEN a timer starts and I am presented with a question WHEN I answer a question

function codeQuiz() {

var timer = document.querySelector("#timer");
var start = document.querySelector("#start");

start.addEventListener('click', function() {
var secondsLeft = 75;
var secondsSubtract = 10;
	
var timerCountdown = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft;
	console.log('!');

    if(secondsLeft === 0) {
        clearInterval(timerCountdown);
        console.log("stopped");
    }

	}, 1000);
});

}

codeQuiz();

//------------------------------------



//THEN I am presented with another question WHEN I answer a question incorrectly
//THEN time is subtracted from the clock WHEN all questions are answered or the timer reaches 0
//THEN the game is over WHEN the game is over
//THEN I can save my initials and score