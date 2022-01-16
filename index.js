
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message_el")
let sumEl = document.getElementById("sum_el")
let cardsEl = document.getElementById("cards_el")
console.log(cardsEl)



function getRandomCard(){
    return Math.floor(Math.random()*13) + 1
    if(randomNumber > 10){
        return 10
    }
    else if (randomNumber === 1){
        return 11

    }
    else{
        return randomNumber

    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
let secondCard = getRandomCard()
cards = [firstCard, secondCard]
sum = firstCard + firstCard
    
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "cards : "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }



    sumEl.textContent = "sum : " + sum
    if (sum <=20){
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21){
        message = "you have got the black jack"
        hasBlackJack = true
    
    
    }
    else{
        message = "you are out of the game"
        isAlive = false
        
    }
    messageEl.textContent = message

}
function newCard(){
    if(isAlive === true && hasBlackJack === false){
        console.log("Drawing a new card")
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
   
}



