var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
var highScoreShow = document.querySelector("#highScoreShow");
var clearHighScore = document.querySelector("#clear");

window.addEventListener("load", function(){printHighScore()});

function printHighScore() {
    highscores = scoresSorted(highscores, 'score');
    
    for (var i = 0; i < highscores.length; i++) {
      console.log(highscores[i].score);
      var home = document.createElement("li"); 
      var words = document.createTextNode(highscores[i].initials + ": " + highscores[i].score)  ; //content of p
      home.appendChild(words);
      highScoreShow.appendChild(home);
    }
}

function scoresSorted(array, key) {
  return array.sort(function(a,b) {
    if (a.score < b.score) {
      return 1;
    }
    return -1;
  });
}

clearHighScore.addEventListener("click", function() {
    localStorage.removeItem("highscores");
    window.location.reload();
});