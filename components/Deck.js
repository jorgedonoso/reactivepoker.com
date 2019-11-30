const Deck = ({ hand, clickEvent, highlight }) => {

    return <div className="row mb-4">
        {
            hand.map((card) => {
                let extra = "pt-4";

                if (highlight && highlight.indexOf(card) > -1) {
                    extra = "pb-4";
                }

                // imageName is always unique.
                return <div className="col p-0 text-center"
                    key={card.imageName}>
                    <img className={"img-fluid " + extra}
                        src={"/images/" + card.imageName + ".png"}
                        onClick={() => clickEvent && clickEvent(card)} />
                </div>
            })
        }
    </div>
}

export default Deck
