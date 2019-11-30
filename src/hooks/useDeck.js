import { useState, useEffect } from 'react'
import DeckModel from "../models/Deck"

export default (howManyCards) => {

    const [deck, setDeck] = useState([]);

    useEffect(() => {
        startNewGame();
    }, []);

    const startNewGame = () => {
        var newHand = new DeckModel().getNewHand(howManyCards);
        setDeck(newHand);
    }

    return deck;
}
