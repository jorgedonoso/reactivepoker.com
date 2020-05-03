import { useState, useEffect } from 'react'
import CardCountingStates from "../enums/CardCountingStates.ts"
import ButtonTypes from "../enums/ButtonTypes.ts"
import useDeck from "../hooks/useDeck"
import { calculateCardValue } from "../helpers"
import useWorkflowButton from './useWorkflowButton'
import { ButtonVerbiages, GenerateAnswerVerbiage } from "../enums/ButtonVerbiages.ts"

export default () => {

    let [cardIndex, setCardIndex] = useState(-1);
    let [gameState, setGameState] = useState(CardCountingStates.START_NEW_GAME);
    let { hand, getNewHand } = useDeck(5);
    let [visibleCard, setVisibleCard] = useState(null);
    let [answer, setAnswer] = useState(0);
    let { type, clickEvent, buttonText, label, createWorkflowButton } = useWorkflowButton(ButtonTypes.PRIMARY, startGame, ButtonVerbiages.START);

    useEffect(() => {
        // If game could be active.
        if (cardIndex < 5) {
            if (hand[cardIndex]) { // If game is active!
                setVisibleCard(hand[cardIndex]);
                setAnswer(cur => cur + calculateCardValue(hand[cardIndex]));
            }
        } else { // Dealing has ended.
            getNewHand();
            setGameState(CardCountingStates.ASK_COUNT);
            createWorkflowButton(ButtonTypes.WARNING, handleRevealAnswer, ButtonVerbiages.CLICK_TO_REVEAL_ANSWER, ButtonVerbiages.ASK_COUNT);
        }
    }, [cardIndex]);

    const getOneMore = () => setCardIndex(cur => cur + 1);

    // Hoist.
    function startGame() {
        setGameState(CardCountingStates.IN_PROGRESS);
        getOneMore();
        createWorkflowButton(ButtonTypes.SECONDARY, getOneMore, ButtonVerbiages.NEXT);
    }

    const handleStartOver = () => {
        setAnswer(0);
        setCardIndex(-1);
        startGame();
    }

    const handleRevealAnswer = () => {
        setGameState(CardCountingStates.REVEAL_ANSWER);
        createWorkflowButton(ButtonTypes.PRIMARY, handleStartOver, ButtonVerbiages.PLAY_AGAIN, GenerateAnswerVerbiage(answer));
    }

    return { visibleCard, gameState, type, clickEvent, buttonText, label };
}
