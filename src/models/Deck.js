import Card from "./Card"

class Deck {

    allCards = [];

    constructor() {
        const _suits = ["S", "H", "D", "C"];

        for (var suit in _suits) {
            let currentSuit = _suits[suit];

            //Ace
            this.allCards.push(new Card("A", currentSuit, "A" + currentSuit));

            //Low cards
            for (let i = 2; i < 10; i++) {
                this.allCards.push(new Card(i, currentSuit, i + currentSuit));
            }

            //High cards
            this.allCards.push(new Card("T", currentSuit, "T" + currentSuit));
            this.allCards.push(new Card("J", currentSuit, "J" + currentSuit));
            this.allCards.push(new Card("Q", currentSuit, "Q" + currentSuit));
            this.allCards.push(new Card("K", currentSuit, "K" + currentSuit));
        }

    }

    getNewHand(howManyCards) {
        var shuffledDeck = this.shuffle();
        return shuffledDeck.slice(0, howManyCards);
    }

    shuffle() {
        var array = this.allCards;
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

}

export default Deck;