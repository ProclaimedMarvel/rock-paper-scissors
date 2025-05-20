function getComputerChoice() {
  let randomChance = Math.floor(Math.random() * 3);

  if (randomChance == 0) {
    return "rock";
  }

  if (randomChance == 1) {
    return "paper";
  }

  if (randomChance == 2) {
    return "scissors";
  }
}

function getHumanChoice() {
  let userChoice = prompt("What do you choose: ");
  let choice = userChoice.toLowerCase();
  return choice;
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock") {
      if (computerChoice == "rock") {
        console.log(`It's a tie! Rock stalemates ${computerChoice}`);
        console.log(`Human: ${humanScore} || Computer: ${computerScore}`);
      } else if (computerChoice == "paper") {
        console.log(`You lose! ${computerChoice} beats Rock`);
        ++computerScore;
        console.log(`Human: ${humanScore} || Computer: ${computerScore}`);
      } else if (computerChoice == "scissors") {
        console.log(`You win! Rock beats ${computerChoice}`);
        ++humanScore;
        console.log(`Human: ${humanScore} || Computer: ${computerScore}`);
      }
    }

    if (humanChoice == "paper") {
      if (computerChoice == "paper") {
        console.log(`It's a tie! Paper stalemates ${computerChoice}`);
        console.log(`Human: ${humanScore} || Computer: ${computerScore}`);
      } else if (computerChoice == "scissors") {
        console.log(`You lose! ${computerChoice} beats Paper`);
        ++computerScore;
        console.log(`Human: ${humanScore} || Computer: ${computerScore}`);
      } else if (computerChoice == "rock") {
        console.log(`You win! Paper beats ${computerChoice}`);
        ++humanScore;
        console.log(`Human: ${humanScore} || Computer: ${computerScore}`);
      }
    }

    if (humanChoice == "scissors") {
      if (computerChoice == "scissors") {
        console.log(`It's a tie! Scissors stalemate ${computerChoice}`);
        console.log(`Human: ${humanScore} || Computer: ${computerScore}`);
      } else if (computerChoice == "rock") {
        console.log(`You lose! ${computerChoice} beats Scissors`);
        ++computerScore;
        console.log(`Human: ${humanScore} || Computer: ${computerScore}`);
      } else if (computerChoice == "paper") {
        console.log(`You win! Scissors beat ${computerChoice}`);
        ++humanScore;
        console.log(`Human: ${humanScore} || Computer: ${computerScore}`);
      }
    }
  }

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  if (humanScore > computerScore) {
    console.log(
      `You win the game! The score was: ${humanScore} to ${computerScore}`
    );
  } else if (computerScore > humanScore) {
    console.log(`You lose... The score was ${computerScore} to ${humanScore}`);
  } else if (humanScore == computerScore) {
    console.log(`Welp... That was a tie! Go again.`);
  }
}

playGame();
