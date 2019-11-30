import React, { useState, useEffect } from 'react';
import Page from "../layouts/Page"
import DeckModel from "../src/models/Deck"
import Deck from "../components/Deck"

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
    <div className="col-12">
      <div className="row">
        <Deck hand={deck}></Deck>
      </div>
    </div>
  </Page>

}
