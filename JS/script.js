import Player from '/JS/Player.js';
const suits = ['♣️', '♦️', '♥️', '♠️'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function createDeck() {  //function for creating deck and mixing them
    const deck = [];
    for (let suit of suits) {
        for (let value of values) {
            const card = {suit, value};
            deck.push(card);
        }
    }

    for (let i = 0; i < 1000; i++) {  //cycle mixing cards and using for it 2 random cards
        const randomNumber = Math.floor(Math.random() * deck.length);
        const randomNumber2 = Math.floor(Math.random() * deck.length);
        const tempCard = deck[randomNumber];
        deck[randomNumber] = deck[randomNumber2];
        deck[randomNumber2] = tempCard;
    }

    return deck
}

const deck = createDeck();  //declare variable which assign a function

//get access to classes and id
const startButton = document.querySelector('.start');
const inputContainer = document.getElementById('inputContainer');
const nameInput = document.querySelector('.nameInput');
const addPlayer = document.querySelector('.addPlayer');
const playerInfo = document.getElementById('playerInfo');
const startGame = document.querySelector('.startGame');

// add listener which hidden input


//add listener which
startButton.addEventListener('click', () => {
    startButton.classList.add('hidden');
    inputContainer.classList.remove('hidden');

});
//тест
const players = [];  //place for saving players



let activePlayer = null;
addPlayer.addEventListener('click', () => {  //add players
    const playerName = nameInput.value;

    const player = new Player(playerName, deck); // creating new player

    const playerMarkup = player.createMarkup(); // markup for new player
    playerInfo.appendChild(playerMarkup)
    players.push(player); // add to array with players
    if(activePlayer === null){
        activePlayer = players[0];
    }

    playerInfo.classList.remove('hidden');
});

console.log(players);


startGame.addEventListener('click', () =>{
    inputContainer.classList.add('hidden2');
    const cardDeck = document.createElement('button');
    cardDeck.setAttribute('class', 'backgroundDeck');
    const container = document.querySelector('.container');
    container.appendChild(cardDeck);
    const move = document.createElement('div');
    move.setAttribute('class', 'move');
    move.textContent = `Turn:${activePlayer.name}`;
    const takeCard = document.createElement('button');
    takeCard.setAttribute('class', 'takeCard');
    takeCard.innerText ='Take a card';
    const skip = document.createElement('button');
    skip.setAttribute('class', 'skip');
    skip.innerText = 'skip'

    playerInfo.appendChild(move)
    playerInfo.appendChild(takeCard)
    playerInfo.appendChild(skip)


    takeCard.addEventListener('click', () => { // adding cards
        activePlayer.takeCard(deck);       // new card
        activePlayer.calculateScore();     // new score
        winer(); // call winner

        // Update the turn display
        move.textContent = `Turn: ${activePlayer.name}`;  //update name
        
        const activeIndex = players.indexOf(activePlayer); // found  the player`s index
        activePlayer = players[(activeIndex + 1) % players.length]; // changing activePlayer

        // if player has more 21
        if (players.length === 1) {
            alert(`${players[0].name} winner`);
            return;
        }

        // Update the turn  for the next player
        move.textContent = `Turn: ${activePlayer.name}`;

    });

    skip.addEventListener('click', () => {
        // Move to the next player's turn
        const activeIndex = players.indexOf(activePlayer);
        activePlayer = players[(activeIndex + 1) % players.length]; //

        // Update the turn display
        move.textContent = `Turn: ${activePlayer.name}`;

    });

    function winer() {
        let score = activePlayer.calculateScore();
        if (score === 21) {
            alert(`${activePlayer.name} wins!`);
        } else if (score > 21) {

            players.splice(players.indexOf(activePlayer), 1);
            activePlayer = players[0];

            // if player has more 21
            if (players.length === 1) {
                alert(`${players[0].name} winner!`);
                return;
            }
        }
    }
});



