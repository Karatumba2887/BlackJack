import newCard from '/bj/JS/newCard.js';

export default class Player {
    constructor(name, deck) {
        this.name = name;
        this.hand = deck.splice(0, 2);
        this.score = this.calculateScore();
    }
    takeCard(deck){
        const deleteCards = deck.splice(0, 1);
        this.hand.push(...deleteCards);

    }

    createMarkup() {
        const playerMarkup = document.createDocumentFragment();
        const playerName = document.createElement('h2');
        playerName.setAttribute('id', 'playerName');
        const playerCards = document.createElement('div');
        playerCards.setAttribute('id', 'playerCards');
        playerCards.setAttribute('class', 'card-container');
        const playerScore = document.createElement('p');
        playerScore.setAttribute('id', 'playerScore');
        playerName.textContent = `Player name: ${this.name}`;
        playerScore.textContent = `Player score: ${this.score}`;

        this.hand.forEach(card => {
            const cardElement = newCard(card);
            playerCards.appendChild(cardElement);
        });
        playerMarkup.appendChild(playerName)
        playerMarkup.appendChild(playerCards)
        playerMarkup.appendChild(playerScore)

        return playerMarkup;
    }


    calculateScore() {
        let score = 0;
        for (let i = 0; i < this.hand.length; i++) {
            const card = this.hand[i];
            if ('JQK'.includes(card.value)) {   //card.value === 'J' || card.value === 'Q' || card.value === 'K'
                score += 10;
            } else if (card.value === 'A') {
                score += 1;
            } else {
                score += parseInt(card.value);
            }
        }
        this.score = score;
        return score;
    }



};
