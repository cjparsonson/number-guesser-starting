let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10); // Range 0 (inclusive) to 10 (exclusive)
}

function compareGuesses(humanGuess, computerGuess, target) {
    let humanDiff = Math.abs(target - humanGuess);
    let computerDiff = Math.abs(target - computerGuess);
    return humanDiff <= computerDiff;
}

const updateScore = winner => {
  winner === 'human' ? humanScore++ : computerScore++;
}

const advanceRound = () => currentRoundNumber++;
