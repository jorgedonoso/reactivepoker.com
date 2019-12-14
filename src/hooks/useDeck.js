import { useState, useEffect } from 'react'
import DeckModel from "../models/DeckModel"

export default (numberOfCards) => {

    const deck = new DeckModel();
    const [hand, setDeck] = useState([]);
    const [backOfCard, setBackOfCard] = useState([]);

    useEffect(() => {
        getNewHand();
        getBackOfCard();
    }, []);

    const getNewHand = () => {
        var newHand = deck.getNewHand(numberOfCards);
        setDeck(newHand);
    }

    const getBackOfCard = () => {
        var backOfCard = deck.createCardBack(0);
        setBackOfCard(backOfCard);
    }

    return { hand, getNewHand, backOfCard };
}
