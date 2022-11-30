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

//Function to generate number between 1 and 3 to allow getComputerChoice to choose rock/paper/scissors
function randomNumberGenerator() {
  return (ranNum = Math.floor(Math.random() * (3 - 1 + 1) + 1));
}

//Get computer choice of rock/paper/scissors
computerChoice = getComputerChoice(randomNumberGenerator());
console.log(computerChoice); //checks logic so far

//Prompt player to make their choice and store answer
playerChoice = prompt("Choose rock, paper, scissors:");
console.log(playerChoice);

//Convert player choice to all lowercase
playerChoice = playerChoice.toLowerCase();
console.log(playerChoice);

//Compare player and computer choices
// console.log(playRound(playerChoice, computerChoice));
