const cardArray = [
    {
    name: 'clouds',
    img: '/Users/katharinerobinson/Documents/Fly/Assets/Image 03-07-2024 at 21.13.png',
    },
    
    {
    name: 'bluecar',
    img: '/Users/katharinerobinson/Documents/FIRST GAME/Assets/Car 3.png',
        },   
    {
    name: 'yellowcar',
    img: '/Users/katharinerobinson/Documents/FIRST GAME/Assets/Car 2.png',
    },

    {
        name: 'pinkcar',
        img: '/Users/katharinerobinson/Documents/FIRST GAME/Assets/Car 1.png',
     },

     {
        name: 'trees',
        img: '/Users/katharinerobinson/Documents/FIRST GAME/Assets/Tree 4.png',
     },

     {
        name: 'rocks',
        img: '/Users/katharinerobinson/Documents/FIRST GAME/Assets/Rocks 1.png',
     },
     {
        name: 'clouds',
        img: '/Users/katharinerobinson/Documents/Fly/Assets/Image 03-07-2024 at 21.13.png',
        },
        
        {
        name: 'bluecar',
        img: '/Users/katharinerobinson/Documents/FIRST GAME/Assets/Car 3.png',
            },   
        {
        name: 'yellowcar',
        img: '/Users/katharinerobinson/Documents/FIRST GAME/Assets/Car 2.png',
        },
    
        {
            name: 'pinkcar',
            img: '/Users/katharinerobinson/Documents/FIRST GAME/Assets/Car 1.png',
         },
    
         {
            name: 'trees',
            img: '/Users/katharinerobinson/Documents/FIRST GAME/Assets/Tree 4.png',
         },
    
         {
            name: 'rocks',
            img: '/Users/katharinerobinson/Documents/FIRST GAME/Assets/Rocks 1.png',
         }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = [] // array for card/image selected
let cardsChosenIds = [] // array of cards/image's ID
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {

const card = document.createElement('img')
   card.setAttribute('src', '/Users/katharinerobinson/Documents/Fly/Assets/Image 02-07-2024 at 22.39.png')
card.setAttribute('data-id', i)
card.addEventListener('click', flipCard)
gridDisplay.append(card)
}
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img') // selects all images within the grid array
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds [1]
    console.log('check for match!')
if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', '/Users/katharinerobinson/Documents/Fly/Assets/Image 02-07-2024 at 22.39.png') // turns tile back to unflipped image
    cards[optionTwoId].setAttribute('src', '/Users/katharinerobinson/Documents/Fly/Assets/Image 02-07-2024 at 22.39.png') // turns tile back to unflipped image
    alert ('You picked the same card...')
}
if (cardsChosen[0] == cardsChosen[1]) { // turns matches tiles white checks for match
    alert('Your found a match!')
    cards[optionOneId].setAttribute('src', '/Users/katharinerobinson/Documents/Fly/Library/PackageCache/com.unity.2d.sprite@1.0.0/Editor/ObjectMenuCreation/DefaultAssets/Textures/v2/Square.png') // turns matches tiles white
    cards[optionTwoId].setAttribute('src', '/Users/katharinerobinson/Documents/Fly/Library/PackageCache/com.unity.2d.sprite@1.0.0/Editor/ObjectMenuCreation/DefaultAssets/Textures/v2/Square.png') // turns matches tiles white
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)
} else {
    cards[optionOneId].setAttribute('src', '/Users/katharinerobinson/Documents/Fly/Assets/Image 02-07-2024 at 22.39.png') // turns tile back to unflipped image
    cards[optionTwoId].setAttribute('src', '/Users/katharinerobinson/Documents/Fly/Assets/Image 02-07-2024 at 22.39.png') // turns tile back to unflipped image
alert('Sorry.. try again yeah?')
}
resultDisplay.textContent = cardsWon.length
cardsChosen =[]
cardsChosenIds = []
//length is number of attribute and we divide by 2 because a win is a match so half the total
if (cardsWon.length == cardArray.length/2) {
    resultDisplay.textContent = 'Yasss you did it, you found them all'
}

}

function flipCard() { 
    const cardId = this.getAttribute('data-id') //allows us to info from what we clicked
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }

}
