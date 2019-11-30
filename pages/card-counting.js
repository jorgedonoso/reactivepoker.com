import React from 'react'
import Page from "../layouts/Page"
import Deck from "../components/Deck"
import useDeck from "../src/hooks/useDeck"

export default () => {

  let deck = useDeck(1);

  return <Page title="Card Counting">
    <Deck hand={deck}></Deck>
  </Page>

}

