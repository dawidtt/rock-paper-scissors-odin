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
  } else {
    result = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  return result;
}

function displayResults(result) {
  const results = document.querySelector("#results");
  const resultP = document.createElement("p");
  resultP.id = "results";
  resultP.textContent = result;
  document.body.appendChild(resultP);
}

const buttons = document.querySelectorAll("button");
for (const button of buttons) {
  button.addEventListener("click", () => {
    const result = playRound(button.textContent, getComputerChoice());
    displayResults(result);
  });
}
