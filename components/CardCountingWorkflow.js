import CardCountingStates from "../src/enums/CardCountingStates.ts"

const CardCountingWorkflow = ({ gameState, startGame, getOneMore, handleRevealAnswer }) => {
    switch (gameState) {
        case CardCountingStates.ASK_COUNT:
            return <>
                <b className="d-block">What's the count?</b>
                <button className="btn btn-warning" onClick={handleRevealAnswer}>Click here to reveal...</button>
            </>;
        case CardCountingStates.REVEAL_ANSWER:
            return <b>The answer goes here!</b>;
        case CardCountingStates.IN_PROGRESS:
            return <button className="btn btn-secondary" onClick={getOneMore}>Draw one more card...</button>;
        default:
            return <button className="btn btn-primary" onClick={startGame}>Start Counting!</button>;
    }
}

export default CardCountingWorkflow;