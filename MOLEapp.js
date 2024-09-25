//606 chosen in css to fit 3 by 3 size

const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition // hit a mole
let currentTime = 30
let timerId = null

function startGame(){

function randomSquare() {
    squares.forEach(square => {
square.classList.remove('mole') //remove mole so starts fresh each game
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
        result++ //adds 1 to you score
        score.textContent = result // makes it display on screen
        hitPosition = null // resets mole position
        }
    })
})

function moveMole(){
    timerId = setInterval(randomSquare, 500)
}

moveMole()

function countDown() {
currentTime--
timeLeft.textContent = currentTime

if (currentTime == 0) {
    clearInterval(countDownTimerId)
    clearInterval(timerId)
alert('GAME OVER 💀 Your final score is ' + result + ' 🔥')
}
}

let countDownTimerId = setInterval(countDown, 1000)
}
