const CHOICES = ['rock', 'paper', 'scissors']

let humanScore = 0
let computerScore = 0

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3)
  return CHOICES[randomIndex]
}

function getHumanChoice() {
  let choice = ''
  while (!CHOICES.includes(choice)) {
    choice = window
      .prompt('What will your choice be? Rock, paper or scissors?')
      .toLowerCase()
  }
  return choice
}

function playRound(humanChoice, computerChoice) {
  // result is 0 for a draw, 1 for a human win and -1 for a computer win
  console.log(`Player chose ${humanChoice}. Computer chose ${computerChoice}`)
  let result = 0

  switch (humanChoice) {
    case 'rock':
      if (computerChoice === 'scissors') {
        result = 1
        break
      } else if (computerChoice === 'paper') {
        result = -1
        break
      }
    case 'paper':
      if (computerChoice === 'rock') {
        result = 1
        break
      } else if (computerChoice === 'scissors') {
        result = -1
        break
      }
    case 'scissors':
      if (computerChoice === 'paper') {
        result = 1
        break
      } else if (computerChoice === 'rock') {
        result = -1
        break
      }
  }

  if (result == 0) {
    console.log(`It's a draw. Both players chose ${humanChoice}`)
  } else if (result == -1) {
    computerScore++
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
  } else {
    humanScore++
    console.log(`You win! ${humanChoice} beats ${computerChoice}`)
  }

  console.log(`CURRENT SCORE: Human ${humanScore} - ${computerScore} Computer`)
}
