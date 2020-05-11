import React, { useState, useEffect } from 'react'
import Page from "../layouts/Page"
import Card from "../src/components/cards/Card"
import CardCountingStates from "../src/enums/CardCountingStates.ts"
import Instructions from "../src/components/UI/Instructions"
import useCardCounting from '../src/hooks/useCardCounting'
import Button from "../src/components/UI/Button"

export default () => {

    let { visibleCard, gameState, type, clickEvent, buttonText, label } = useCardCounting();

    return <Page title="Card Counting">
        <Instructions>High cards are worth -1, low cards +1, and [7, 8, 9] are worth 0</Instructions>
        <div className="d-flex flex-column text-center">
            <div>{visibleCard && gameState == CardCountingStates.IN_PROGRESS ? <Card card={visibleCard} /> : <Card />}</div>
            <div>
                <Button type={type} clickEvent={clickEvent} buttonText={buttonText} label={label}></Button>
            </div>
        </div>
    </Page>
}
