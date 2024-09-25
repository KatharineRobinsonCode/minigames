const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => { userChoice = e.target.id
 userChoiceDisplay.innerHTML = userChoice
 generateComputerChoice()
 getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoice.length which is 3 and adding plus one to make it 1+3 not 0

    if (randomNumber === 1) {
computerChoice = 'Rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'Scissors'
            }
            if (randomNumber === 3) {
                computerChoice = 'Paper'
                    }
computerChoiceDisplay.innerHTML = computerChoice
        }

        function getResult() {
            if (computerChoice === userChoice) {
                result = "It's a draw..."
            }

            if (computerChoice === 'Rock' && userChoice === "Paper") {
                result = "You won! Congratz babe"
            }
            if (computerChoice === 'Rock' && userChoice === "Scissors") {
                result = "Ya lost... awkz"
            }
            if (computerChoice === 'paper' && userChoice === "rock") {
                result = "Ya lost... awkz"
            }

            if (computerChoice === 'Paper' && userChoice === "Scissors") {
                result = "You won! Congratz babe"
            }

            if (computerChoice === 'Scissors' && userChoice === "Rock") {
                result = "You won! Congratz babe"
            }
            if (computerChoice === 'Scissors' && userChoice === "Paper") {
                result = "Ya lost... awkz"
            }
        resultDisplay.innerHTML = result
        }
     