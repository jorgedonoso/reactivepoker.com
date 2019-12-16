import { useState, useEffect } from 'react'
import DeckModel from "../models/DeckModel"

export default (numberOfCards) => {

    const deck = new DeckModel();
    const [hand, setDeck] = useState([]);
    const [deckId, setDeckId] = useState();
    const [backOfCard, setBackOfCard] = useState([]);

    useEffect(() => {
        setDeckId(Date.now());
        getNewHand();
        getBackOfCard();
    }, []);

    const getNewHand = () => {
        var newHand = deck.getNewHand(numberOfCards);
        setDeck(newHand);
        setDeckId(Date.now());
    }

    const getBackOfCard = () => {
        var backOfCard = deck.createCardBack(0);
        setBackOfCard(backOfCard);
    }

    return { hand, getNewHand, backOfCard, deckId };
}
