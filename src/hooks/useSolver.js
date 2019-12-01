import { useState } from 'react'
import pokersolver from "pokersolver"

export default () => {

    const handSolver = pokersolver.Hand;
    const [result, setResult] = useState("");

    const solveHand = (hand) => {
        var flatHand = hand.map(card => card.key);
        const results = handSolver.solve(flatHand);
        setResult(results.name);
    }

    return { result, solveHand };
}
