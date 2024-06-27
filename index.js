const choices = ['rock', 'paper', 'scissors']

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length)
  return choices[randomIndex]
}

function getPlayerChoice() {
  let choice = ''
  while (!choices.includes(choice)) {
    choice = prompt(
      'What is your choice? Rock, paper or scissors?'
    ).toLowerCase()
  }
  return choice
}

function playGame() {
  let playerScore = 0
  let computerScore = 0
  let round = 1

  const playRound = (playerChoice, computerChoice) => {
    console.log(
      `Player chooses ${playerChoice}. Computer chooses ${computerChoice}`
    )
    if (playerChoice === 'rock') {
      if (computerChoice === 'paper') {
        console.log('Player loses!')
        computerScore++
        return
      } else if (computerChoice === 'scissors') {
        console.log('Player wins')
        playerScore++
        return
      }
    }

    if (playerChoice === 'paper') {
      if (computerChoice === 'scissors') {
        console.log('Player loses!')
        computerScore++
        return
      } else if (computerChoice === 'rock') {
        console.log('Player wins')
        playerScore++
        return
      }
    }

    if (playerChoice === 'scissors') {
      if (computerChoice === 'rock') {
        console.log('Player loses!')
        computerScore++
        return
      } else if (computerChoice === 'paper') {
        console.log('Player wins')
        playerScore++
        return
      }
    }

    console.log("It's a draw.")
  }

  while (round <= 5) {
    console.log('ROUND', round)
    const computerChoice = getComputerChoice()
    const playerChoice = getPlayerChoice()
    playRound(playerChoice, computerChoice)
    console.log('SCORE:', playerScore, computerScore)
    round++
  }

  console.log(`FINAL SCORE: Player ${playerScore} - ${computerScore} Computer`)
}
