import CardCountingStates from "../src/enums/CardCountingStates.ts"
import ButtonTypes from "../src/enums/ButtonTypes.ts"
import Button from "../components/Button"

const CardCountingWorkflow = ({ gameState, startGame, getOneMore, handleRevealAnswer, handleStartOver }) => {

    switch (gameState) {
        case CardCountingStates.ASK_COUNT:
            return <Button type={ButtonTypes.WARNING} clickEvent={handleRevealAnswer} buttonText="Click here to reveal..." label="What's the count?"></Button>
        case CardCountingStates.REVEAL_ANSWER:
            return <Button type={ButtonTypes.PRIMARY} clickEvent={handleStartOver} buttonText="Start Over!" label="The answer goes here!"></Button>
        case CardCountingStates.IN_PROGRESS:
            return <Button type={ButtonTypes.SECONDARY} clickEvent={getOneMore} buttonText="Draw one more card..."></Button>
        default:
            return <Button type={ButtonTypes.PRIMARY} clickEvent={startGame} buttonText="Start Counting!"></Button>
    }
}

export default CardCountingWorkflow;