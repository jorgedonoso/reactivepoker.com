import React, { useState, useEffect } from 'react'
import Page from "../layouts/Page"
import Deck from "../src/components/Deck"
import useDeck from "../src/hooks/useDeck"
import useSelectCard from "../src/hooks/useSelectCard"
import useSolver from "../src/hooks/useSolver"
import Instructions from "../src/components/Instructions"
import Button from "../src/components/Button"
import ButtonTypes from "../src/enums/ButtonTypes.ts"

export default () => {

  let { hand, getNewHand, deckId } = useDeck(10);
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
    <div className="row">
      <div className="col">
        <Instructions>Select some cards to keep and draw the remaining ones</Instructions>
        <Deck hand={playableHand} clickEvent={clickEventDecider()} selectedCards={selectedCards} deckId={deckId}></Deck>
        <div className="text-center">
          {result
            ? <Button clickEvent={startNewGame} buttonText="Start New Game!" label={result} type={ButtonTypes.PRIMARY}></Button>
            : <Button clickEvent={handleDraw} buttonText="Draw" type={ButtonTypes.PRIMARY}></Button>
          }
        </div>
      </div>
    </div>
  </Page>
}
