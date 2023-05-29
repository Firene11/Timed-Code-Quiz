var scoreBox = document.getElementById("#scoreBox");
var localScores = JSON.parse(localStorage.getItem('scores')) || [];


document.querySelector("#scorebox").innerHTML = localScores
    .map(score => {
        return '<li class="high-scores">${score.initials}</li>';
    })
    .join("");

