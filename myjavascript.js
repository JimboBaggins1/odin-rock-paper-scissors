//myjavascript.js

//Initialise variables to store player and computer choices
let playerChoice = 0;
let computerChoice = 0;
let computerScore = 0;
let playerScore = 0;

const container = document.querySelector('#container');
const results = document.createElement('div');
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

//Function to compare computer and player choices
function playRound(playerChoice, computerChoice) {

if ((playerChoice === 'rock' && computerChoice === 'scissors') || 
    (playerChoice === 'paper' && computerChoice === 'rock') || 
    (playerChoice === 'scissors' && computerChoice === 'paper')) {
      playerScore++;
      results.textContent = `You win that round! Player Score: ${playerScore} Computer Score: ${computerScore}`;
      if (playerScore === 5) {
        results.textContent = `You win! Player Score: ${playerScore} Computer Score: ${computerScore}`;
        disableButton();
      }
    } else if ((playerChoice === 'rock' && computerChoice ==='rock') || 
                (playerChoice === 'paper' && computerChoice === 'paper') || 
                (playerChoice === 'scissors' && computerChoice === 'scissors')) {
                  results.textContent = `It's a draw! Player Score: ${playerScore} Computer Score: ${computerScore}`;
                } else {
                  computerScore++;
                  results.textContent = `Computer wins that round! Player Score: ${playerScore} Computer Score: ${computerScore}`;
                  if (computerScore === 5) {
                    results.textContent = `Computer wins! Player Score: ${playerScore} Computer Score: ${computerScore}`;
                    disableButton();
                  }
                }
  container.appendChild(results);
  
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerChoice = button.id;
    computerChoice = getComputerChoice(randomNumberGenerator());
    console.log(playerChoice);
    console.log(computerChoice);
    playRound(playerChoice, computerChoice);
  });
});

// Once game is complete, player can't click buttons
function disableButton() {
  buttons.forEach((button) => {
    button.disabled = true;
  })
}
