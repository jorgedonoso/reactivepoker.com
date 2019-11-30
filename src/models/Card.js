class Card {
    constructor(value, suit, imageName) {
        this.value = value;
        this.suit = suit;
        this.key = value + suit;
        this.imageName = imageName;
    }
}

export default Card;
