import { useState, useEffect } from 'react'
import DeckModel from "../models/DeckModel"

export default (numberOfCards) => {

    const [hand, setDeck] = useState([]);

    useEffect(() => {
        getNewHand();
    }, []);

    const getNewHand = () => {
        var newHand = new DeckModel().getNewHand(numberOfCards);
        setDeck(newHand);
    }

    return { hand, getNewHand };
}
