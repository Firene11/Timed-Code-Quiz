var scoreBox = document.getElementById("#scoreBox");
var localScores = JSON.parse(localStorage.getItem('scores')) || [];

console.log(localScores)
document.querySelector("#scorebox").textContent = localStorage.scores
