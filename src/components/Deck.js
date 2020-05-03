import Card from "./Card"

const Deck = ({ hand, clickEvent, selectedCards, deckId }) => {

    return <div className="row my-sm-0 my-md-4 no-gutters">
        {
            hand.map((card, index) => {

                let extraClasses = "pt-2"; // To create "pull up" effect.
                let holdMessage = "invisible"; // To toggle "Hold" text.

                if (selectedCards && selectedCards.indexOf(card) > -1) {
                    extraClasses = "";
                    holdMessage = "font-weight-bold lead";
                }

                return <div className="col text-center" key={card.key}>
                    <Card card={card} extraClasses={extraClasses} clickEvent={clickEvent} index={index} deckId={deckId} />
                    <p className={holdMessage}>Hold</p>
                </div>
            })
        }
    </div>
}

export default Deck
