import React, { useState, useEffect } from 'react'

const PokerRulesPanel = ({ onAnswer, initRules }) => {

    const [rules, setRules] = useState(initRules);

    const handleClick = (rule) => {
        let updatedRules = rules.map(el => (el.id === rule.id ? { ...el, error: true } : el));
        setRules(updatedRules);
        onAnswer(rule.name);
    }
    useEffect(() => {
        setRules(initRules);
    }, [initRules])

    return <div className="row">{
        rules.map((rule) => {

            let disabled = rule.error ? "btn-danger" : "btn-dark";

            return <div className="col-6 pb-3" key={rule.id}>
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