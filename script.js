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
        correct: document.querySelector(".yes"),
        wrong: document.querySelector(".no"),
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

// High scores
var highScores = []

//Starts the timer if START button is clicked
function setTime() {
    timer.countdown = timer.seconds

    timer.interval = setInterval(function() {
        timer.countdown--;
        timer.element.textContent = timer.countdown;

        //Stop timer if there's 0 seconds left or all questions are answered
        if (timer.countdown <= 0) {
            timer.countdown = 0;
            timer.element.textContent = timer.countdown;
            setCompleted('You ran out of time :(')
            // Ran out of time
        } else if (quiz.position === quiz.questions.length) {
            // Finished quiz
            setCompleted('Congratulations you completed the quiz!')
        }
    }, 1000);
}

function setCompleted(message) {
    clearInterval(timer.interval);
    quiz.elements.container.style.display = 'none';
    quiz.elements.completed.style.display = 'block';

    quiz.elements.questionCount.innerText = quiz.questions.length;
    quiz.elements.message.innerText = message;
}

function initializeQuiz() {
    // Check local storage for scores
    getScores()

    if (quiz.elements.scoreBox && highScores.length > 0) {
        for (var i = 0; i < highScores.length; i++) {
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(`${highScores[i].initials} : ${highScores[i].score}`));
            quiz.elements.scoreBox.appendChild(li);
        }
    }

// Listen to start button
if (quiz.elements.start)
quiz.elements.start.addEventListener('click', function() {
    startQuiz()
})

// Listen to answer buttons
if (quiz.elements.container)
document.querySelectorAll('.answer').forEach(button => {
    button.addEventListener('click', event => {
        onCheckAnswer(event)
    })
})

// Listen to score submit
if (quiz.elements.save)
quiz.elements.save.addEventListener('click', function() {
    setScore()
})

// Listen to score clear
if (quiz.elements.clearScores)
quiz.elements.clearScores.addEventListener('click', function() {
    localStorage.removeItem('scores');
    quiz.elements.scoreBox.innerText = ''
})
}

function startQuiz() {
    quiz.score = 0;
    quiz.position = 0;

    quiz.elements.intro.style.display = "none";
    quiz.elements.completed.style.display = 'none';

    setTime();
    runQuestions();
}

function onCheckAnswer(usersAnswer) {
    var answer = quiz.questions[quiz.position].answer

    if (answer === usersAnswer.target.innerText) {
        console.log('Correct');
        document.querySelector('.yes').textContent = "Correct!";
        quiz.position++

        // Increment score
        quiz.score++
        // Visually Update Score elements
        quiz.elements.score.forEach(function (score) {
            score.innerText = quiz.score;
        })

        // Next Question
        runQuestions()
    } else {
        // Take a penalty
        timer.countdown = timer.countdown - timer.penalty
        usersAnswer.target.style.background = 'red';
        document.querySelector('.no').textContent = "Wrong!";
    }
}

function runQuestions() {
    if (quiz.elements.container.style.display !== 'block')
        quiz.elements.container.style.display = 'block';

    if (quiz.position < quiz.questions.length) {
        quiz.elements.question.textContent = quiz.questions[quiz.position].question;
        document.querySelectorAll('.answer').forEach(function (button, index) {
            button.textContent = quiz.questions[quiz.position].choice[index];
            button.removeAttribute('style');
        })
    }
}

//THEN I am presented with another question WHEN I answer a question incorrectly
//THEN time is subtracted from the clock WHEN all questions are answered or the timer reaches 0

//THEN the game is over WHEN the game is over
//THEN I can save my initials and score

function setScore() {
    var initials = document.getElementById('initials').value
    highScores.push({
        initials: initials,
        score: quiz.score
    })
    highScores.sort(function(a, b) {
        return b.score - a.score;
    });

    console.log(highScores)
    localStorage.setItem('scores', JSON.stringify(highScores));
}

function getScores() {
    var localScores = JSON.parse(localStorage.getItem('scores'));
    console.log(localScores)
    if (localScores)
        highScores = localScores;
}

initializeQuiz();






