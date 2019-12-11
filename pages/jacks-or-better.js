import React, { useState, useEffect } from 'react'
import Page from "../layouts/Page"
import Deck from "../components/Deck"
import useDeck from "../src/hooks/useDeck"
import useSelectCard from "../src/hooks/useSelectCard"
import useSolver from "../src/hooks/useSolver"

export default () => {

  let { hand, getNewHand } = useDeck(10);
  let { result, solveHand, clearResult } = useSolver("jacksbetter");
  let { selectedCards, selectCard, clearSelectedCards } = useSelectCard();
  let [playableHand, setPlayableHand] = useState([]);
  let [isInProgress, setIsInProgress] = useState(false);

  useEffect(function () {
    if (hand.length) {
      setPlayableHand(hand.slice(0, 5));
      setIsInProgress(true);
    }
  }, [hand]);

  const handleDraw = () => {

    // Step 1: Pluck selected cards.
    let cardsToKeep = selectedCards.map(card => card.key);

    // Step 2: Replace discarded cards with new cards.
    let finalHand = playableHand.map((card, iteration) => {
      return (cardsToKeep.indexOf(card.key) > -1 ? card : hand[iteration + 5]);
    });

    solveHand(finalHand); // Find answer.
    setPlayableHand(finalHand); // Update Cards UI.
    setIsInProgress(false); // Update game workflow.
  }

  const startNewGame = () => {
    clearSelectedCards();
    getNewHand();
    clearResult();
  }

  const clickEventDecider = () => {
    return isInProgress ? selectCard : null;
  }

  return <Page title="Jacks or Better">
    <Deck hand={hand}></Deck>
    <Deck hand={playableHand} clickEvent={clickEventDecider()} selectedCards={selectedCards}></Deck>
    <div className="row text-center">
      <div className="col">
        {result ? null : <button className="btn btn-primary" onClick={handleDraw}>Draw</button>}
        {result ? <button className="btn btn-primary" onClick={startNewGame}>Start New Game</button> : null}
        <p>{result}</p>
      </div>
    </div>
  </Page>
}
