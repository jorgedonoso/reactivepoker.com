import { useState, useEffect } from 'react'
import CardCountingStates from "../enums/CardCountingStates.ts"
import ButtonTypes from "../enums/ButtonTypes.ts"
import useDeck from "../hooks/useDeck"
import { calculateCardValue } from "../helpers"

export default () => {

    let [count, setCount] = useState(-1);
    let [gameState, setGameState] = useState(CardCountingStates.START_NEW_GAME);
    let { hand, getNewHand } = useDeck(5);
    let [visibleCard, setVisibleCard] = useState(null);
    let [answer, setAnswer] = useState(0);

    // Setup initial workflow.
    let [type, setType] = useState(ButtonTypes.PRIMARY);
    let [clickEvent, setClickEvent] = useState(() => startGame);
    let [buttonText, setButtonText] = useState("Start counting!");
    let [label, setLabel] = useState(null);

    useEffect(() => {
        if (count < 5) {
            if (hand[count]) {
                setVisibleCard(hand[count]);
                setAnswer(cur => cur + calculateCardValue(hand[count]));
            }
        } else {
            getNewHand();
            setGameState(CardCountingStates.ASK_COUNT);

            // Workflow.
            setType(ButtonTypes.WARNING);
            setClickEvent(() => handleRevealAnswer);
            setButtonText("Click here to reveal...");
            setLabel("What's the count?");
        }
    }, [count]);

    const getOneMore = () => setCount(cur => cur + 1);

    // Hoist.
    function startGame() {
        setGameState(CardCountingStates.IN_PROGRESS);
        getOneMore();

        // Workflow.
        setType(ButtonTypes.SECONDARY);
        setClickEvent(() => getOneMore);
        setButtonText("Draw one more card...");
        setLabel(null);
    }

    const handleStartOver = () => {
        setGameState(CardCountingStates.IN_PROGRESS);
        setAnswer(0);
        setCount(0);

        // Workflow.
        setType(ButtonTypes.SECONDARY);
        setClickEvent(() => getOneMore);
        setButtonText("Draw one more card...");
        setLabel(null);
    }

    const handleRevealAnswer = () => {
        setGameState(CardCountingStates.REVEAL_ANSWER);

        // Workflow.
        setType(ButtonTypes.PRIMARY);
        setClickEvent(() => handleStartOver);
        setButtonText("Play again!");
        setLabel("The answer is " + answer + "!");
    }

    return { visibleCard, gameState, type, clickEvent, buttonText, label };
}
