const CHOICES = ['rock', 'paper', 'scissors']
const optionButtons = document.querySelectorAll('.option-button')

let round = 1
let humanScore = 0
let computerScore = 0

optionButtons.forEach((button) => {
  button.addEventListener('click', (e) => handleButtonClick(e))
})

function handleButtonClick(event) {
  const playerChoice = event.target.dataset.option
  const computerChoice = getComputerChoice()
  const result = playRound(playerChoice, computerChoice)
  displayChoices(playerChoice, computerChoice)
  displayResult(result)
  updateScore(result)
  displayScore()
  round++
  displayRound()
  if (round > 5) {
    gameOver()
  }
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3)
  return CHOICES[randomIndex]
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

function displayChoices(humanChoice, computerChoice) {
  const choicesDisplay = document.querySelector('.choices-display')
  choicesDisplay.textContent = `You chose ${humanChoice}, computer chose ${computerChoice}`
}

function displayResult(result) {
  const resultDisplay = document.querySelector('.result-display')
  if (result == -1) resultDisplay.textContent = 'You lose!'
  if (result == 0) resultDisplay.textContent = "It's a draw!"
  if (result == 1) resultDisplay.textContent = 'You win!'
}

function displayScore() {
  const scoreDisplay = document.querySelector('.score-display')
  scoreDisplay.textContent = `Human ${humanScore} - ${computerScore} Computer`
}

function displayRound() {
  const roundDisplay = document.querySelector('.round-display')
  roundDisplay.textContent = `Round ${round}`
}

function updateScore(result) {
  if (result == 1) humanScore++
  if (result == -1) computerScore++
}

function disableButtons() {
  optionButtons.forEach((button) => {
    button.removeEventListener('click', handleButtonClick)
    button.disabled = true
  })
}

function gameOver() {
  const resultDisplay = document.querySelector('.result-display')
  resultDisplay.textContent = 'GAME OVER - FINAL SCORE:'
  disableButtons()
}
