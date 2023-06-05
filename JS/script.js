const suits = ['♣️', '♦️', '♥️', '♠️'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];


function createDeck() {
    const deck = [];
    for (let suit of suits) {
        for (let value of values) {
            const card = {suit, value};
            deck.push(card);
        }
    }

    for (let i = 0; i < 1000; i++) {
        const randomNumber = Math.floor(Math.random() * deck.length);
        const randomNumber2 = Math.floor(Math.random() * deck.length);
        const tempCard = deck[randomNumber];
        deck[randomNumber] = deck[randomNumber2];
        deck[randomNumber2] = tempCard;
    }
    console.log(deck)
    return deck
}

const deck = createDeck();

function getRandomCard(cards) {
    const randomNumber = Math.floor(Math.random() * cards.length);
    return cards[randomNumber];
}

const randomCart = getRandomCard(deck)

function newCard(randomCart) {
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
const cardElement = newCard(randomCart);
container.appendChild(cardElement);

class Player {
    constructor(name, cardsHas, score) {
        this.name = name;
        this.cardsHas = cardsHas;
        this.score = score;
    }

    movingCard(deck) {

        const deleteCards = deck.splice(0, 3);
        this.cardsHas.push(...deleteCards);
    }

}

const player = new Player("Yasu", [], 0);
player.movingCard(deck);
console.log(player);

// for (deck.length = -1; i > 0 ; i--) {
//     console.log("hi")
// }
console.log(deck.length)


for (let i = 5; i > 0 ; i--) {
    console.log(i)

}