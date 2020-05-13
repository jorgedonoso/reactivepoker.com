import { useState } from 'react';
import pokersolver from "pokersolver";

export default (mode) => {

    const handSolver = pokersolver.Hand;

    // This value is used to validate the user answer.
    const [result, setResult] = useState("");

    // This value is used to provide a more specific success message.
    // Ex: Instead of "Pair is correct!" display "Pair of A's is correct!"
    const [detailedResults, setDetailedResults] = useState("");

    const solveHand = (hand) => {
        var flatHand = hand.map(card => card.key);

        let out;
        let results;
        let details;

        // JacksOrBetter.
        if (mode) {

            out = "Sorry, you have nothing!";
            results = handSolver.solve(flatHand, mode);
            details = results.descr;

            const exclusions = ["Pair, 2's", "Pair, 3's", "Pair, 4's", "Pair, 5's", "Pair, 6's", "Pair, 7's", "Pair, 8's", "Pair, 9's", "Pair, 10's"];

            if (results.rank > 1 && exclusions.indexOf(results.descr) === -1) {
                out = "Congrats! " + results.descr + "!";
            }

        } else {
            // Poker.
            results = handSolver.solve(flatHand, mode);
            details = results.descr;
            out = results.name;
        }

        setDetailedResults(details);
        setResult(out);
    }

    const clearResult = () => setResult("");

    return { result, solveHand, clearResult, detailedResults };
}
