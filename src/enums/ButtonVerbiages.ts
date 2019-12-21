enum ButtonVerbiages {
    START = "Start counting!",
    ASK_COUNT = "What's the count?",
    CLICK_TO_REVEAL_ANSWER = "Click here to reveal...",
    DRAW_ONE_MORE = "Draw one more card...",
    PLAY_AGAIN = "Play again!"
}

const GenerateAnswerVerbiage = (answer: number) =>
    "The answer is " + answer + "!";

export { ButtonVerbiages, GenerateAnswerVerbiage };
