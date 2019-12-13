import React, { useState, useEffect } from 'react';
import Page from "../layouts/Page"
import Deck from "../components/Deck"
import Rules from "../components/PokerRulesPanel"
import useDeck from "../src/hooks/useDeck"
import useSolver from "../src/hooks/useSolver"
import { getPokerRules } from "../src/helpers"
import Instructions from "../components/Instructions"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

toast.configure({ autoClose: 2000 });

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
      toast.success("Correct!");
      getNewHand();
      setRules(getPokerRules());
    } else {
      toast.error("Wrong!");
    }
  }

  const startGame = () => {
    if (hand.length) {
      solveHand(hand);
    }
  }

  return <Page title="Poker Rules">
    <ToastContainer></ToastContainer>
    <Instructions>Select the rule that describes the hand</Instructions>
    <Deck hand={hand}></Deck>
    <Rules onAnswer={onAnswer} initRules={rules}></Rules>
  </Page>

}
