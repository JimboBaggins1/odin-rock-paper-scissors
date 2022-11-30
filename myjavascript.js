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

//Function to compare computer and player choices
function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    playerScore = playerScore;
    computerScore = computerScore;
    return `It\'s a tie! Time to play again! Player Score: ${playerScore} Computer Score: ${computerScore}`;
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    playerScore++;
    return `Rock beats scissors - you win! Player Score: ${playerScore} Computer Score: ${computerScore}`;
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    return `Paper beats rock - you lose! Player Score: ${playerScore} Computer Score: ${computerScore}`;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    playerScore++;
    return `Paper beats rock - you win! Player Score: ${playerScore} Computer Score: ${computerScore}`;
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    return `Scissors beat paper - you lose! Player Score: ${playerScore} Computer Score: ${computerScore}`;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    playerScore++;
    return `Scissors beat paper - you win! Player Score: ${playerScore} Computer Score: ${computerScore}`;
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    return `Rock beats scissors - you lose! Player Score: ${playerScore} Computer Score: ${computerScore}`;
  } else {
    return "Invalid choice - you must choose rock, paper, or scissors";
  }
}

//Function to loop for five rounds
function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playerScore);
    console.log(computerScore);

    //Get computer choice of rock/paper/scissors
    computerChoice = getComputerChoice(randomNumberGenerator());
    console.log(computerChoice); //checks logic so far

    //Prompt player to make their choice and store answer
    playerChoice = prompt("Choose rock, paper, scissors:");
    // console.log(playerChoice);

    //Convert player choice to all lowercase
    playerChoice = playerChoice.toLowerCase();
    // console.log(playerChoice);
    console.log(playRound(playerChoice, computerChoice));
  }

  if (playerScore > computerScore) {
    console.log(
      `Player Score: ${playerScore} Computer Score: ${computerScore} You win!`
    );
  } else if (playerScore < computerScore) {
    console.log(
      `Player Score: ${playerScore} Computer Score: ${computerScore} You lose!`
    );
  } else {
    console.log(
      `Player Score: ${playerScore} Computer Score: ${computerScore} It's a tie!`
    );
  }
}

// //Get computer choice of rock/paper/scissors
// computerChoice = getComputerChoice(randomNumberGenerator());
// console.log(computerChoice); //checks logic so far

// //Prompt player to make their choice and store answer
// playerChoice = prompt("Choose rock, paper, scissors:");
// console.log(playerChoice);

// //Convert player choice to all lowercase
// playerChoice = playerChoice.toLowerCase();
// console.log(playerChoice);

// //Compare player and computer choices
// console.log(playRound(playerChoice, computerChoice));

game();