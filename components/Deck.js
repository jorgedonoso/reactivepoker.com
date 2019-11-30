const Deck = ({ hand, clickEvent, highlight }) => {

    return <div className="row mb-3">
        {
            hand.map((card) => {
                let extra;

                if (highlight && highlight.indexOf(card) > -1) {
                    extra = " bg-success";
                }

                // imageName is always unique.
                return <div
                    className={"col rounded text-center " + extra}
                    key={card.imageName}
                    onClick={() => clickEvent && clickEvent(card)}>
                    <img className="img-fluid" src={"/images/" + card.imageName + ".png"} />
                </div>
            })
        }
    </div>
}

export default Deck
