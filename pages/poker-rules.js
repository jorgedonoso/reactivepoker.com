import React, { useState, useEffect } from 'react';
import Page from "../layouts/Page"
import Deck from "../src/components/cards/Deck"
import Rules from "../src/components/UI/PokerRulesPanel"
import useDeck from "../src/hooks/useDeck"
import useSolver from "../src/hooks/useSolver"
import { getPokerRules } from "../src/helpers"
import Instructions from "../src/components/UI/Instructions"
import { useToasts } from 'react-toast-notifications';

export default () => {

  let { hand, getNewHand, deckId } = useDeck(5);
  let { result, solveHand, detailedResults } = useSolver();
  let [rules, setRules] = useState(getPokerRules());
  const { addToast } = useToasts();

  useEffect(function () {
    startGame();
  }, [hand]);

  const onAnswer = (ruleName) => {

    // Compare user selection with actual result.
    if (ruleName == result) {
      addToast(detailedResults + " is correct!", { appearance: 'success', autoDismiss: true, });
      getNewHand();
      setRules(getPokerRules());
    } else {
      addToast("Sorry, try again!", { appearance: 'error', autoDismiss: true, });
    }

  }

  const startGame = () => {
    if (hand.length) {
      solveHand(hand);
    }
  }

  return <Page title="Poker Rules">
    <Instructions>Select the rule that describes the hand</Instructions>
    <Deck hand={hand} deckId={deckId}></Deck>
    <Rules onAnswer={onAnswer} initRules={rules}></Rules>
  </Page>

}
