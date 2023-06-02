

const suits = ['♣️', '♦️', '♥️', '♠️'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']; //arrays


const deck = [];    //array for the deck

for (let suit of suits) {           //cycle that creating objects for cards
    for (let value of values) {
        const card = { suit, value };
        deck.push(card);
    }
}

function getRandomObject(cards) {       //function for mixing cards
    const randomObject = Math.floor(Math.random() * cards.length);
    return cards[randomObject];
}

const randomCart = getRandomObject(deck)



function newCard(){
    const elementCard = document.createElement("div");
    elementCard.className = "card";


    const elementTopLeft = document.createElement("div");
    elementTopLeft.className = "top-left";
    if (randomCart.suit === '♣️' || randomCart.suit === '♠️') {
        elementTopLeft.style.color = 'black';
    }
    elementTopLeft.innerText = randomCart.value;


    const elementBottomRight = document.createElement("div");
    elementBottomRight.className = "bottom-right";
    if (randomCart.suit === '♣️' || randomCart.suit === '♠️') {
        elementBottomRight.style.color = 'black';
    }
    elementBottomRight.innerText = randomCart.value;


    const elementSuit = document.createElement("div");
    elementSuit.className = "suit";
    if (randomCart.suit === '♣️' || randomCart.suit === '♠️') {
        elementSuit.style.color = 'black';
    }
    elementSuit.innerText = randomCart.suit;

    elementCard.appendChild(elementTopLeft);
    elementCard.appendChild(elementBottomRight);
    elementCard.appendChild(elementSuit);

    return elementCard;

}
const container = document.getElementById('cards-container');
const cardElement = newCard();
container.appendChild(cardElement);

