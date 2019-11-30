import React, { useState, useEffect } from 'react'
import Page from "../layouts/Page"
import DeckModel from "../src/models/Deck"
import Deck from "../components/Deck"

export default () => {

  const howManyCards = 5;
  const [deck, setDeck] = useState([]);
  const [highlight, setHighlight] = useState([]);

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    var newHand = new DeckModel().getNewHand(howManyCards);
    setDeck(newHand);
  }

  const handleHoldCard = (card) => {
    // Toggle clicked card.
    if (highlight.indexOf(card) > -1) {
      const filteredItems = highlight.filter(item => item !== card);
      setHighlight(filteredItems);
    } else {
      setHighlight([...highlight, card]);
    }
  }

  return <Page title="Jacks or Better">
    <Deck hand={deck} clickEvent={handleHoldCard} highlight={highlight}></Deck>
  </Page>

} 
