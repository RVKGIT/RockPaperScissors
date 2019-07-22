var UserScore = 0;
var ComputerScore = 0;
const u_score_span = document.getElementById("u-score");
const c_score_span = document.getElementById("c-score");
const ScoreBoard_div = document.querySelector(".ScoreBoard");
const Result_div = document.querySelector(".Result>h1");
const Rock_button = document.getElementById("r");
const Paper_button = document.getElementById("p");
const Scissors_button = document.getElementById("s");

function compChoice(){
 const choices = ['r', 'p', 's'];
 const choiceindex = Math.floor(Math.random()*3);
  return choices[choiceindex];
} 

function getWord(letter){
  if(letter === "r") return "Rock";
  if(letter === "p") return "Paper";
  return "Scissors";  
}


function win(userChoice, cchoice){
   UserScore++;
   u_score_span.innerHTML = UserScore;
   const sUserWord = "user".fontsize(3).sub();
   const sCompWord = "comp".fontsize(3).sub();
   Result_div.innerHTML = `${getWord(userChoice)}${sUserWord} beats ${getWord(cchoice)}${sCompWord} you win`;
   document.getElementById(userChoice).classList.add('win-glow');
   setTimeout(function() {document.getElementById(userChoice).classList.remove('win-glow')}, 500);
}

function loose(userChoice, cchoice){
   ComputerScore++;
   c_score_span.innerHTML = ComputerScore;
   const sUserWord = "user".fontsize(3).sub();
   const sCompWord = "comp".fontsize(3).sub();
   Result_div.innerHTML = `${getWord(userChoice)}${sUserWord} loses to ${getWord(cchoice)}${sCompWord}. You loose`;
   document.getElementById(userChoice).classList.add('loose-glow');
   setTimeout(function() {document.getElementById(userChoice).classList.remove('loose-glow')}, 500);
 }

function draw(userChoice, cchoice){
   const sUserWord = "user".fontsize(3).sub();
   const sCompWord = "comp".fontsize(3).sub();
   Result_div.innerHTML = `Computer chose >>${getWord(cchoice)}<< and you chose >>${getWord(userChoice)}<<. Its a draw`;
   document.getElementById(userChoice).classList.add('draw-glow');
   setTimeout(function() {document.getElementById(userChoice).classList.remove('draw-glow')}, 500);
 }

function gameFunction(userChoice){
  cmpchoice = compChoice();
  switch(userChoice+cmpchoice){
	case "rs" : 
    case "pr" :
    case "sp" :
	      win(userChoice, cmpchoice);
		  break;
	case "sr" : 
    case "rp" :
    case "ps" :
	      loose(userChoice, cmpchoice);
		  break;
	case "rr" : 
    case "pp" :
    case "ss" :
	      draw(userChoice, cmpchoice);
		  break;
  }
}

function main(){
  Rock_button.addEventListener('click', function() {
   gameFunction("r"); 
  })
 
  Paper_button.addEventListener('click', function() {
   gameFunction("p"); 
  })
 
  Scissors_button.addEventListener('click', function() {
   gameFunction("s"); 
  })
}
main();