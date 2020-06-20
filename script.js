///// insight drawn from https://www.codemahal.com/video/javascript-quiz-tutorial/ tutorial /////




var startQuiz = document.querySelector("#startQuiz");
var quizBtn = document.querySelectorAll(".quizBtn");
var currentIndex = 0;

var score = 0;

startQuiz.addEventListener("click", function(event){
    event.stopPropagation();
    startTimer();
    console.log("Current Index at startQuiz click" + currentIndex);
    
    document.querySelector("#boxOne").style.display = "none"; 
    
    document.querySelector("#boxTwo").style.display = "block";
    
    showQs();
});

function showQs() {
    var question = quizQs[currentIndex];
    
    document.querySelector("#title").innerHTML = question.title;
    document.querySelector("#abC").innerHTML = question.choices[0];
    document.querySelector("#coD").innerHTML = question.choices[1];
    document.querySelector("#quI").innerHTML = question.choices[2];
    document.querySelector("#zeL").innerHTML = question.choices[3];
}

for (var i = 0; i < quizBtn.length; i++) {
    quizBtn[i].addEventListener("click", function userAnswer(event) {
        event.stopPropagation();
        
        if(event.currentTarget.innerText === quizQs[currentIndex].answer){
            score++;
            console.log(score);
            
            document.querySelector("#checkIng").innerHTML = "correct";
        } else {
             
            document.querySelector("#checkIng").innerHTML = "wrong";
            secondsLeft = secondsLeft -5;
        }
        console.log("Current Index before ++" + currentIndex);
        
        currentIndex++;
        
        if (currentIndex < 5) {
        
        showQs();
        }
    });
}