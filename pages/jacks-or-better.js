import React, { useState, useEffect } from 'react'
import Page from "../layouts/Page"
import Deck from "../components/Deck"
import useDeck from "../src/hooks/useDeck"
import useSelectCard from "../src/hooks/useSelectCard"
import useSolver from "../src/hooks/useSolver"
import DeckModel from "../src/models/DeckModel"

export default () => {

  let { hand, getNewHand } = useDeck(10);
  let { result, solveHand, clearResult } = useSolver("jacksbetter");
  let { selectedCards, selectCard } = useSelectCard();
  let [playableHand, setPlayableHand] = useState([]);

  useEffect(function () {
    // Must wait until Hand is initialized.
    if (hand.length) {
      setPlayableHand(hand.slice(0, 5));
    }
  }, [hand]);


  const handleDraw = () => {

    // Step 1: Pluck selected cards.
    let cardsToKeep = selectedCards.map(card => card.key);

    // Step 2: Replace discarded cards with "Back of Card" image.
    let mergedHand = playableHand.map((card, iteration) => {
      return (cardsToKeep.indexOf(card.key) > -1 ? card : new DeckModel().createCardBack(iteration));
    });

    setPlayableHand(mergedHand);

    // Step 3: Generate final hand.
    let finalHand = mergedHand.map((card, iteration) => {
      return (card.value === "0" ? hand[iteration + 5] : card);
    });

    solveHand(finalHand);

    setTimeout(function () {
      setPlayableHand(finalHand);
    }, 100);
  }

  const startNewGame = () => {
    getNewHand();
    clearResult();
  }

  return <Page title="Jacks or Better">
    <Deck hand={playableHand} clickEvent={selectCard} selectedCards={selectedCards}></Deck>
    <div className="row text-center">
      <div className="col">
        {result ? null : <button className="btn btn-primary" onClick={handleDraw}>Draw</button>}
        {result ? <button className="btn btn-primary" onClick={startNewGame}>Start New Game</button> : null}
        <p>{result}</p>
      </div>
    </div>

  </Page>

}
