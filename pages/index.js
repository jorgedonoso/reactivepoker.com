import React from 'react'
import Page from "../layouts/Page"
import heroImage from "../src/images/hero.png"
import useMenu from "../src/hooks/useMenu"
import CTA from "../src/components/UI/CTA";

export default () => {

  const { menuData } = useMenu();

  return <Page title="Reactive Poker">
    <div className="row">
      <div className="col">
        <p className="text-center lead">
          A collection of card game resources for beginners
          <img src={heroImage} className="img-fluid" />
        </p>
      </div>
    </div>
    <div className="row">
      {
        menuData.map((cta, $key) => {
          if (!cta.excludeFromMobile) {
            return <CTA key={$key} label={cta.ctaLabel} href={cta.path} />
          }
        })
      }
    </div>
  </Page>
}     