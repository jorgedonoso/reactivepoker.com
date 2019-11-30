import React, { useState, useEffect } from 'react'

const PokerRulesPanel = () => {

    const getBaseRules = () => [{ id: 'rule_1', name: 'High Card', error: false }
        , { id: 'rule_2', name: 'Pair', error: false }
        , { id: 'rule_3', name: 'Two Pair', error: false }
        , { id: 'rule_4', name: 'Three of a Kind', error: false }
        , { id: 'rule_5', name: 'Straight', error: false }
        , { id: 'rule_6', name: 'Flush', error: false }
        , { id: 'rule_7', name: 'Full House', error: false }
        , { id: 'rule_8', name: 'Four of a Kind', error: false }
        , { id: 'rule_9', name: 'Straight Flush', error: false }
        , { id: 'rule_10', name: 'Royal Flush', error: false }]

    const [rules, setRules] = useState(getBaseRules());

    const handleClick = (rule) => {
        let updatedRules = rules.map(el => (el.id === rule.id ? { ...el, error: true } : el));
        setRules(updatedRules);
    }

    return <div className="row">{
        rules.map((rule) => {

            let disabled = rule.error ? "btn-secondary" : "btn-primary";

            return <div className="col-6 p-1" key={rule.id}>
                <button
                    className={"btn btn-block " + disabled}
                    onClick={() => handleClick(rule)}
                    disabled={rule.error}>
                    {rule.name}
                </button>
            </div>
        })}
    </div>

}

export default PokerRulesPanel;