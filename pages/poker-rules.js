import React, { useState, useEffect } from 'react';
import Page from "../layouts/Page"
import Deck from "../src/models/Deck"

export default () => {

  const howManyCards = 5,
    [deck, setDeck] = useState([]);

  useEffect(() => {
    startNewGame();
  }, [])

  const startNewGame = () => {
    var newHand = new Deck().getNewHand(howManyCards);
    setDeck(newHand);
  }

  return <Page title="Poker Rules">

    <div className="col-12">
      <div className="row">
        {deck.map((card) => {
          // imageName is always unique.
          return <div className="col" key={card.imageName}><img className="img-fluid" src={"/images/" + card.imageName + ".png"} /></div>
        })}
      </div>
    </div>
  </Page>

}