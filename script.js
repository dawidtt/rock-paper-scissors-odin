function getComputerChoice() {
  let computerChoice;
  const randomNumber = Math.random();
  if (randomNumber < 0.33) {
    computerChoice = "Rock";
  } else if (randomNumber < 0.66) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Choose Rock, Paper or Scissors");
  humanChoice = humanChoice.toLowerCase();
  const remainder = humanChoice.slice(1);
  let firstLetter = humanChoice.charAt(0);
  firstLetter = firstLetter.toUpperCase();
  humanChoice = firstLetter + remainder;
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  let result = "";
  if (humanChoice === computerChoice) {
    result = "Tie!";
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    result = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else {
    result = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  }
  console.clear();
  console.log(result);
  console.log(`Human score: ${humanScore}`);
  console.log(`Computer score: ${computerScore}`);
}
function playGame() {
  let winnerMessage;
  for (let i = 0; i <= 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  if (humanScore === computerScore) {
    winnerMessage = "There was a tie in whole game";
  } else if (humanScore > computerScore) {
    winnerMessage = "You won the game!";
  } else {
    winnerMessage = "Computer won the game!";
  }
  console.log(winnerMessage);
}
let computerScore = 0;
let humanScore = 0;
playGame();
