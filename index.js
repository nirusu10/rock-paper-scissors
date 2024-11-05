const CHOICES = ['rock', 'paper', 'scissors']

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
