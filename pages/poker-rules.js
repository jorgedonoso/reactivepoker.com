import React, { useState, useEffect } from 'react';
import Page from "../layouts/Page"
import Deck from "../components/Deck"
import Rules from "../components/PokerRulesPanel"
import useDeck from "../src/hooks/useDeck"
import useSolver from "../src/hooks/useSolver"
import { getPokerRules } from "../src/helpers"

export default () => {

  let { hand, getNewHand } = useDeck(5);
  let { result, solveHand } = useSolver();
  let [rules, setRules] = useState(getPokerRules());

  useEffect(function () {
    startGame();
  }, [hand]);

  const onAnswer = (ruleName) => {
    // Compare user selection with actual result.
    if (ruleName == result) {
      alert("Correct. Start new game.");
      getNewHand();
      setRules(getPokerRules());
    }
  }

  const startGame = () => {
    if (hand.length) {
      solveHand(hand);
    }
  }

  return <Page title="Poker Rules">
    <Deck hand={hand}></Deck>
    <Rules onAnswer={onAnswer} initRules={rules}></Rules>
  </Page>

}
