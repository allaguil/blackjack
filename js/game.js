// Variables
let deck = [];
const types = ['C', 'D', 'H', 'S'];
const specials = ['A', 'J', 'Q', 'K'];

let playerPoints = 0,
    computerPoints = 0;

// References
const btnPedir = document.querySelector('#btnPedir');
const pointsHTML = document.querySelectorAll('small');
const divPlayerCards = document.querySelector('#jugador-cartas');

// Create Deck Function
const createDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let type of types) {
            deck.push(i + type);
        }
    }
    for (let special of specials) {
        for (let type of types) {
            deck.push(special + type);
        }
    }
    deck = _.shuffle(deck);
    return deck;
}
createDeck();

// Request a Card Function
const requestCard = () => {
    if (deck.length === 0) {
        throw 'The Deck is empty!';
    }
    const card = deck.pop();
    return card;
}

// Check Card Value Function
const cardValue = (card) => {
    const value = card.substring(0, card.length - 1);
    return (isNaN(value)) ?
        (value === 'A') ? 11 : 10
        : value * 1;
}

cardValue(requestCard());

// Request Card - Click Event
btnPedir.addEventListener('click', () => {
    const card = requestCard();
    playerPoints = playerPoints + cardValue(card);
    pointsHTML[0].innerText = playerPoints;

    // Create and Append Card Imgs - to HTML
    const cardImg = document.createElement('img');
    cardImg.src = `../assets/cartas/${card}.png`;
    cardImg.classList.add('carta');
    divPlayerCards.append(cardImg);

    if (playerPoints > 21) {
        console.warn('You Lost!');
        btnPedir.disabled = true;
    } else if (playerPoints === 21) {
        console.warn('21, Great!');
        btnPedir.disabled = true;
    }
});



