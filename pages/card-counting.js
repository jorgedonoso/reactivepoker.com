import React, { useState, useEffect } from 'react'
import Page from "../layouts/Page"
import Card from "../components/Card"
import useDeck from "../src/hooks/useDeck"
import CardCountingStates from "../src/enums/CardCountingStates.ts"
import CardCountingWorkflow from "../components/CardCountingWorkflow"
import Instructions from "../components/Instructions"
import { calculateCardValue } from "../src/helpers"

export default () => {

    let { hand, getNewHand, backOfCard } = useDeck(5);
    let [visibleCard, setVisibleCard] = useState(null);
    let [count, setCount] = useState(-1);
    let [answer, setAnswer] = useState(0);
    let [gameState, setGameState] = useState(CardCountingStates.START_NEW_GAME);

    useEffect(() => {
        if (count < 5) {
            if (hand[count]) {
                setVisibleCard(hand[count]);
                setAnswer(cur => cur + calculateCardValue(hand[count]));
            }
        } else {
            getNewHand();
            setGameState(CardCountingStates.ASK_COUNT);
        }
    }, [count]);

    const startGame = () => {
        setGameState(CardCountingStates.IN_PROGRESS);
        getOneMore();
    }

    const handleStartOver = () => {
        setGameState(CardCountingStates.IN_PROGRESS);
        setAnswer(0);
        setCount(0);
    }

    const getOneMore = () => setCount(cur => cur + 1);

    const handleRevealAnswer = () => {
        setGameState(CardCountingStates.REVEAL_ANSWER);
    }

    return <Page title="Card Counting">
        <Instructions>High cards are worth -1, low cards +1, and [7, 8, 9] are worth 0</Instructions>
        <div className="d-flex flex-column text-center">
            <div>{visibleCard && gameState == CardCountingStates.IN_PROGRESS ? <Card card={visibleCard} /> : <Card card={backOfCard} />}</div>
            <div><CardCountingWorkflow gameState={gameState} answer={answer} startGame={startGame} getOneMore={getOneMore} handleRevealAnswer={handleRevealAnswer} handleStartOver={handleStartOver}></CardCountingWorkflow></div>
        </div>
    </Page>
}
