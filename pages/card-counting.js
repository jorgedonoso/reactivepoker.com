import React, { useState, useEffect } from 'react'
import Page from "../layouts/Page"
import Card from "../components/Card"
import useDeck from "../src/hooks/useDeck"
import CardCountingStates from "../src/enums/CardCountingStates.ts"
import CardCountingWorkflow from "../components/CardCountingWorkflow"

export default () => {

    let { hand, getNewHand } = useDeck(5);
    let [visibleCard, setVisibleCard] = useState(null);
    let [count, setCount] = useState(-1);
    let [gameState, setGameState] = useState(CardCountingStates.START_NEW_GAME);

    useEffect(() => {
        if (count < 5) {
            setVisibleCard(hand[count]);
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
        setCount(0);
    }

    const getOneMore = () => setCount(cur => cur + 1);

    const handleRevealAnswer = () => {
        setGameState(CardCountingStates.REVEAL_ANSWER);
    }

    return <Page title="Card Counting">
        <p className="text-center">Keep track of the count. High cards are worth -1, low cards +1, and [7, 8, 9] are worth 0.</p>
        <p className="text-center"><CardCountingWorkflow gameState={gameState} startGame={startGame} getOneMore={getOneMore} handleRevealAnswer={handleRevealAnswer} handleStartOver={handleStartOver}></CardCountingWorkflow></p>
        <p className="text-center">{visibleCard && gameState == CardCountingStates.IN_PROGRESS ? <Card card={visibleCard} /> : null}</p>
    </Page>
}
