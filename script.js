//GIVEN I am taking a code quiz WHEN I click the start button
//THEN a timer starts and I am presented with a question WHEN I answer a question


document.getElementById("timer").addEventListener("click", function(){
    var secondsLeft = 75;

    function setTimer() {
    var timerCountdown = setInterval(function() {
    document.getElementById("timer").innerHTML = secondsLeft;

        if (secondsLeft <= 0) {
            start.addEventListener("click", setTimer);
            clearInterval(timerCountdown);
    }
    }, 1000);
}}
setTimer();

//------------------------------------



//THEN I am presented with another question WHEN I answer a question incorrectly
//THEN time is subtracted from the clock WHEN all questions are answered or the timer reaches 0
//THEN the game is over WHEN the game is over
//THEN I can save my initials and score