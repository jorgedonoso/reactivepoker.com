import Card from "./Card"

const Deck = ({ hand, clickEvent, selectedCards }) => {

    return <div className="row mb-4">
        {
            hand.map((card) => {

                let extraClasses = "pt-4"; // To create "pull up" effect.
                let holdMessage = "invisible"; // To toggle "Hold" text.

                if (selectedCards && selectedCards.indexOf(card) > -1) {
                    extraClasses = "";
                    holdMessage = "font-weight-bold lead";
                }

                return <div className="col p-0 text-center" key={card.key}>
                    <Card card={card} extraClasses={extraClasses} clickEvent={clickEvent} />
                    <p className={holdMessage}>Hold</p>
                </div>
            })
        }
    </div>
}

export default Deck
