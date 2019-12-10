import React, { useState, useEffect } from 'react'
import Page from "../layouts/Page"
import Card from "../components/Card"
import useDeck from "../src/hooks/useDeck"
import CardCountingStates from "../src/enums/CardCountingStates.ts"

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

    const getOneMore = () => setCount(cur => cur + 1);

    const Workflow = () => {
        switch (gameState) {
            case CardCountingStates.ASK_COUNT: return <b>What's the count?</b>;
            case CardCountingStates.IN_PROGRESS: return <button className="btn btn-secondary" onClick={getOneMore}>Draw one more card...</button>;
            default: return <button className="btn btn-primary" onClick={startGame}>Start Counting!</button>;
        }
    }

    return <Page title="Card Counting">
        <p className="text-center">Keep track of the count. High cards are worth -1, low cards +1, and [7, 8, 9] are worth 0.</p>
        <p className="text-center">{Workflow()}</p>
        <p className="text-center">{visibleCard && gameState == CardCountingStates.IN_PROGRESS ? <Card card={visibleCard} /> : null}</p>
    </Page>
}
