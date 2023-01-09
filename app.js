const cardArray = [{
        name: 'cherries',
        img: 'images/cherries.png'
    },
    {
        name: 'kiwi',
        img: 'images/kiwi.png'
    },
    {
        name: 'lemon',
        img: 'images/lemon.png'
    },
    {
        name: 'orange',
        img: 'images/orange.png'
    },
    {
        name: 'passion-fruit',
        img: 'images/passion-fruit.png'
    },
    {
        name: 'watermelon',
        img: 'images/watermelon.png'
    },
    {
        name: 'cherries',
        img: 'images/cherries.png'
    },
    {
        name: 'kiwi',
        img: 'images/kiwi.png'
    },
    {
        name: 'lemon',
        img: 'images/lemon.png'
    },
    {
        name: 'orange',
        img: 'images/orange.png'
    },
    {
        name: 'passion-fruit',
        img: 'images/passion-fruit.png'
    },
    {
        name: 'watermelon',
        img: 'images/watermelon.png'
    },
    {
        name: 'dragon-fruit',
        img: 'images/dragon-fruit.png'
    },
    {
        name: 'grapes',
        img: 'images/grapes.png'
    },
    {
        name: 'dragon-fruit',
        img: 'images/dragon-fruit.png'
    },
    {
        name: 'grapes',
        img: 'images/grapes.png'
    }
];
cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }
}
createBoard();

function checkMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if (cardsChosen[0] == cardsChosen[1]) {
        cards[optionOneId].style.opacity = '0';
        cards[optionTwoId].style.opacity = '0';
        //cards[optionOneId].setAttribute('src', 'images/verified.png');
        //cards[optionTwoId].setAttribute('src', 'images/verified.png');

        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
    }
    resultDisplay.textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length == (cardArray.length / 2)) {
        resultDisplay.textContent = 'Congratulations';
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}