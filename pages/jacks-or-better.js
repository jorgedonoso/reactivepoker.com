import React, { useState, useEffect } from 'react'
import Page from "../layouts/Page"
import Deck from "../components/Deck"
import useDeck from "../src/hooks/useDeck"

export default () => {

  let deck = useDeck(4);

  const [highlight, setHighlight] = useState([]);

  const handleHoldCard = (card) => {
    // Toggle clicked card.
    if (highlight.indexOf(card) > -1) {
      const filteredItems = highlight.filter(item => item !== card);
      setHighlight(filteredItems);
    } else {
      setHighlight([...highlight, card]);
    }
  }

  return <Page title="Jacks or Better">
    <Deck hand={deck} clickEvent={handleHoldCard} highlight={highlight}></Deck>
  </Page>

} 
