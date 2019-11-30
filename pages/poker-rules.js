import React, { useState, useEffect } from 'react';
import Page from "../layouts/Page"
import Deck from "../components/Deck"
import Rules from "../components/PokerRulesPanel"
import useDeck from "../src/hooks/useDeck"

export default () => {

  let deck = useDeck(6);

  return <Page title="Poker Rules">
    <Deck hand={deck}></Deck>
    <Rules></Rules>
  </Page>

}
