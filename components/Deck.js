const Deck = ({ hand, clickEvent, selectedCards }) => {

    return <div className="row mb-4">
        {
            hand.map((card) => {

                let extra = "pt-4"; // To create "pull up" effect.
                let holdMessage = "invisible"; // To toggle "Hold" text.

                if (selectedCards && selectedCards.indexOf(card) > -1) {
                    extra = "";
                    holdMessage = "font-weight-bold lead";
                }

                return <div className="col p-0 text-center" key={card.key}>
                    <img className={"img-fluid " + extra}
                        src={"/images/" + card.imageName + ".png"}
                        onClick={() => clickEvent && clickEvent(card)} />
                    <p className={holdMessage}>Hold</p>
                </div>
            })
        }
    </div>
}

export default Deck
