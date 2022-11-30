//myjavascript.js

//Initialise variables to store player and computer choices
let playerChoice = 0;
let computerChoice = 0;
let computerScore = 0;
let playerScore = 0;

//Get computer choice
function getComputerChoice(compChoice) {
  if (compChoice === 1) {
    return "rock";
  } else if (compChoice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}
