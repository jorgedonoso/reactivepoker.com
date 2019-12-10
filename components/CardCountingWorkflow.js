import CardCountingStates from "../src/enums/CardCountingStates.ts"

const CardCountingWorkflow = ({ gameState, startGame, getOneMore }) => {
    switch (gameState) {
        case CardCountingStates.ASK_COUNT: return <b>What's the count?</b>;
        case CardCountingStates.IN_PROGRESS: return <button className="btn btn-secondary" onClick={getOneMore}>Draw one more card...</button>;
        default: return <button className="btn btn-primary" onClick={startGame}>Start Counting!</button>;
    }
}

export default CardCountingWorkflow;