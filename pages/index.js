import React from 'react'
import Page from "../layouts/Page"
import heroImage from "../src/images/hero.png"

export default () => (
  <Page title="Reactive Poker">
    <div className="row">
      <div className="col">
        <p className="text-center lead">
          A collection of card game resources for beginners
          <img src={heroImage} className="img-fluid" />
        </p>
      </div>
    </div>
  </Page>
)
