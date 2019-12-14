const getPokerRules = () => [{ id: 'rule_1', name: 'High Card', error: false }
    , { id: 'rule_2', name: 'Pair', error: false }
    , { id: 'rule_3', name: 'Two Pair', error: false }
    , { id: 'rule_4', name: 'Three of a Kind', error: false }
    , { id: 'rule_5', name: 'Straight', error: false }
    , { id: 'rule_6', name: 'Flush', error: false }
    , { id: 'rule_7', name: 'Full House', error: false }
    , { id: 'rule_8', name: 'Four of a Kind', error: false }
    , { id: 'rule_9', name: 'Straight Flush', error: false }
    , { id: 'rule_10', name: 'Royal Flush', error: false }];

const calculateCardValue = (card) => {

    let result = 0;
    const { value } = card;
    const minusOnes = ['T', 'J', 'Q', 'K', 'A'];

    if (minusOnes.indexOf(value) > -1) {
        result = -1;
    } else if (value > 1 && value < 7) {
        result = 1;
    }

    return result;
}

export { getPokerRules, calculateCardValue }