
export default function newCard(randomCart) {
    const elementCard = document.createElement('div');
    elementCard.className = 'card';


    const elementTopLeft = document.createElement('div');
    elementTopLeft.className = 'top-left';
    if (randomCart.suit === '♣️' || randomCart.suit === '♠️') {
        elementTopLeft.style.color = 'black';
    }
    elementTopLeft.innerText = randomCart.value;


    const elementBottomRight = document.createElement('div');
    elementBottomRight.className = 'bottom-right';
    if (randomCart.suit === '♣️' || randomCart.suit === '♠️') {
        elementBottomRight.style.color = 'black';
    }
    elementBottomRight.innerText = randomCart.value;


    const elementSuit = document.createElement('div');
    elementSuit.className = 'suit';
    if (randomCart.suit === '♣️' || randomCart.suit === '♠️') {
        elementSuit.style.color = 'black';
    }
    elementSuit.innerText = randomCart.suit;

    elementCard.appendChild(elementTopLeft);
    elementCard.appendChild(elementBottomRight);
    elementCard.appendChild(elementSuit);

    return elementCard;
}

