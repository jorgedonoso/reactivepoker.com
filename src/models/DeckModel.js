import CardModel from "./CardModel"

class DeckModel {

    allCards = [];

    constructor() {
        const _suits = ["S", "H", "D", "C"];

        for (var suit in _suits) {
            let currentSuit = _suits[suit];

            //Ace
            this.allCards.push(new CardModel("A", currentSuit, "A" + currentSuit));

            //Low cards
            for (let i = 2; i < 10; i++) {
                this.allCards.push(new CardModel(i, currentSuit, i + currentSuit));
            }

            //High cards
            this.allCards.push(new CardModel("T", currentSuit, "T" + currentSuit));
            this.allCards.push(new CardModel("J", currentSuit, "J" + currentSuit));
            this.allCards.push(new CardModel("Q", currentSuit, "Q" + currentSuit));
            this.allCards.push(new CardModel("K", currentSuit, "K" + currentSuit));
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

    createCardBack(key) {
        let cardBack = new CardModel("0", "-", "back");
        cardBack.key = "back_" + key;

        return cardBack;
    }
}

export default DeckModel;
