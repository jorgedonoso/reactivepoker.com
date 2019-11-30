import React, { useState, useEffect } from 'react';
import Page from "../layouts/Page"
import DeckModel from "../src/models/Deck"
import Deck from "../components/Deck"
import Rules from "../components/PokerRulesPanel"

export default () => {

  const howManyCards = 5,
    [deck, setDeck] = useState([]);

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    var newHand = new DeckModel().getNewHand(howManyCards);
    setDeck(newHand);
  }

  return <Page title="Poker Rules">
    <Deck hand={deck}></Deck>
    <Rules></Rules>
  </Page>

}
