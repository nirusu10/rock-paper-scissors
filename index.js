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

  switch (humanChoice) {
    case 'rock':
      if (computerChoice === 'scissors') {
        return 1
      } else if (computerChoice === 'paper') {
        return -1
      }
    case 'paper':
      if (computerChoice === 'rock') {
        return 1
      } else if (computerChoice === 'scissors') {
        return -1
      }
    case 'scissors':
      if (computerChoice === 'paper') {
        result = 1
        break
      } else if (computerChoice === 'rock') {
        return -1
      }
  }

  return 0
}

const playGame = (rounds) => {
  let round = 1
  while (round <= rounds) {
    console.log('ROUND ' + round + ':')
    const humanChoice = getHumanChoice()
    const computerChoice = getComputerChoice()
    console.log('Player chose ' + humanChoice)
    console.log('Computer chose ' + computerChoice)
    const result = playRound(humanChoice, computerChoice)

    if (result == 0) {
      console.log(`It's a draw. Both players chose ${humanChoice}`)
    } else if (result == -1) {
      computerScore++
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
    } else {
      humanScore++
      console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    }

    if (round != rounds)
      console.log(
        `CURRENT SCORE: Human ${humanScore} - ${computerScore} Computer`
      )

    round++
  }
  console.log(`FINAL SCORE: HUMAN ${humanScore} - ${computerScore} COMPUTER`)
}
