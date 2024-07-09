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
  console.log(randomNumber);
  return computerChoice;
}
console.log(getComputerChoice());
function getHumanChoice() {
  const humanChoice = prompt("Choose Rock, Paper or Scissors");
  console.log(humanChoice);
}
getHumanChoice();
