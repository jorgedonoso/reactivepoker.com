import React from 'react'
import Page from "../layouts/Page"
import heroImage from "../src/images/hero.png"
import Link from "next/link"
import useMenu from "../src/hooks/useMenu"

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
            return <div className="col-md mb-2" key={$key}>
              <Link prefetch={false} href={cta.path}>
                <a className="btn btn-danger shadow py-3 btn-block text-uppercase">{cta.ctaLabel}</a>
              </Link>
            </div>
          }
        })
      }
    </div>
  </Page>
}     