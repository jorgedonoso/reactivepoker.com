import { useState } from 'react'

export default (initialType, initialClickEvent, initialButtonText) => {

    let [type, setType] = useState(initialType);
    let [clickEvent, setClickEvent] = useState(() => initialClickEvent);
    let [buttonText, setButtonText] = useState(initialButtonText);
    let [label, setLabel] = useState(null);

    const createWorkflowButton = (type, clickEvent, text, label) => {
        setType(type);
        setClickEvent(() => clickEvent);
        setButtonText(text);
        setLabel(label);
    }

    return { type, clickEvent, buttonText, label, createWorkflowButton };
}
