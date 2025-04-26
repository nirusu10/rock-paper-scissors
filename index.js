const CHOICES = ['rock', 'paper', 'scissors']
let humanScore = 0
let computerScore = 0

const buttons = document.querySelectorAll('.choice-button')

buttons.forEach((button) =>
  button.addEventListener('click', (e) => {
    console.log(e.target.dataset.choice)
    const humanChoice = e.target.dataset.choice
    playRound(humanChoice, getComputerChoice())
  })
)

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * CHOICES.length)
  return CHOICES[randomIndex]
}

function getHumanChoice() {
  let humanChoice = ''
  while (!CHOICES.includes(humanChoice)) {
    humanChoice = prompt('Choose: Rock, paper or scissors.').toLowerCase()

    if (!CHOICES.includes(humanChoice)) {
      console.error('Choose either "rock", "paper" or "scissors".')
    }
  }
  return humanChoice
}

function updateDisplay(humanChoice, computerChoice) {
  const humanScoreDisplay = document.querySelector('#player-score')
  const computerScoreDisplay = document.querySelector('#computer-score')
  const choicesDisplay = document.querySelector('#choices-display')

  humanScoreDisplay.textContent = humanScore
  computerScoreDisplay.textContent = computerScore
  choicesDisplay.textContent = `Human chose ${humanChoice}. Computer chose ${computerChoice}.`
}

function playRound(humanChoice, computerChoice) {
  switch (humanChoice) {
    case 'rock':
      if (computerChoice === 'scissors') {
        humanScore++
        break
      } else if (computerChoice === 'paper') {
        computerScore++
        break
      } else {
        break
      }
    case 'paper':
      if (computerChoice === 'rock') {
        humanScore++
        break
      } else if (computerChoice === 'scissors') {
        computerScore++
        break
      } else {
        break
      }
    case 'scissors':
      if (computerChoice === 'paper') {
        humanScore++
        break
      } else if (computerChoice === 'rock') {
        computerScore++
        break
      } else {
        break
      }
    default:
      break
  }
  updateDisplay(humanChoice, computerChoice)
}
