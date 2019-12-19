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
            createWorkflowButton(ButtonTypes.WARNING, handleRevealAnswer, "Click here to reveal...", "What's the count?");
        }
    }, [count]);

    const getOneMore = () => setCount(cur => cur + 1);

    // Hoist.
    function createWorkflowButton(type, clickEvent, text, label) {
        setType(type);
        setClickEvent(() => clickEvent);
        setButtonText(text);
        setLabel(label);
    }

    // Hoist.
    function startGame() {
        setGameState(CardCountingStates.IN_PROGRESS);
        getOneMore();
        createWorkflowButton(ButtonTypes.SECONDARY, getOneMore, "Draw one more card...");
    }

    const handleStartOver = () => {
        setAnswer(0);
        setCount(-1);
        startGame();
    }

    const handleRevealAnswer = () => {
        setGameState(CardCountingStates.REVEAL_ANSWER);
        createWorkflowButton(ButtonTypes.PRIMARY, handleStartOver, "Play again!", "The answer is " + answer + "!");
    }

    return { visibleCard, gameState, type, clickEvent, buttonText, label };
}
