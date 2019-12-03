import { useState } from 'react'
import pokersolver from "pokersolver"

export default (mode) => {

    const handSolver = pokersolver.Hand;
    const [result, setResult] = useState("");

    const solveHand = (hand) => {
        var flatHand = hand.map(card => card.key);

        let out;
        let results;

        if (mode) {
            out = "Nothing!";
            results = handSolver.solve(flatHand, mode);
            let exclusions = ["Pair, 2's", "Pair, 3's", "Pair, 4's", "Pair, 5's", "Pair, 6's", "Pair, 7's", "Pair, 8's", "Pair, 9's", "Pair, 10's"];

            if (results.rank > 1 && exclusions.indexOf(results.descr) === -1) {
                out = results.descr + "!";
            }

            out += " Play again?";

        } else {
            results = handSolver.solve(flatHand, mode);
            out = results.name;
        }

        setResult(out);
    }

    const clearResult = () => setResult("");

    return { result, solveHand, clearResult };
}
