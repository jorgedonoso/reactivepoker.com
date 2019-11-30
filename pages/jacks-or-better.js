import React, { useState, useEffect } from 'react'
import Page from "../layouts/Page"
import Deck from "../components/Deck"
import useDeck from "../src/hooks/useDeck"
import useSelectCard from "../src/hooks/useSelectCard"

export default () => {

  let deck = useDeck(5);
  let { selectedCards, selectCard } = useSelectCard();

  return <Page title="Jacks or Better">
    <Deck hand={deck} clickEvent={selectCard} selectedCards={selectedCards}></Deck>
  </Page>

}
