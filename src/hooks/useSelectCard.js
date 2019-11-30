import { useState } from 'react'

export default () => {

    const [selectedCards, toggleCard] = useState([]);

    const selectCard = (card) => {

        // Toggle card from array.
        if (selectedCards.indexOf(card) > -1) {
            const filteredItems = selectedCards.filter(item => item !== card);
            toggleCard(filteredItems);
        } else {
            toggleCard([...selectedCards, card]);
        }

    }

    return { selectedCards, selectCard };
}
