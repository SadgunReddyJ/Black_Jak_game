let player = {
    name : "Sadgun",
    chips : 145
}
let cards = []
let hasBlackJak = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": " + "£" + player.chips
function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13 ) + 1
    if (randomNumber > 10){
        return 10
    }
    if (randomNumber === 1){
        return 11
    }
    return randomNumber
}
function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame(){
if (sum <= 20) {
    message = "Do you want to draw a new card? 😊"
}
else if(sum === 21) {
   message = "Wohoo! You've got Blackjak! 🥳"
    hasBlackJak = true
   
}
else {
    message = "Sorry, You're out of game 😭"
    isAlive = false
    
}
messageEl.textContent = message
sumEl.textContent = "Sum: " + sum
cardsEl.textContent = "Cards: "
for(let i = 0; i < cards.length; i++){
    cardsEl.textContent += cards[i] + " "
}

}


function newCard() {
    if(isAlive === true && hasBlackJak === false){
    let thirdCard = getRandomCard()
    cards.push(thirdCard)
    sum += thirdCard
    renderGame()
    }
}
