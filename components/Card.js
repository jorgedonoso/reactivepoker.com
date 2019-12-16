import cardImages from "../src/cardImages"

const Card = ({ clickEvent, extraClasses, card, index, deckId }) => {

    const delay = "delay-" + index;

    return (card && card.imageName)
        ? <img className={"img-fluid animated fadeIn " + delay + " " + extraClasses}
            src={cardImages[card.key]}
            onClick={() => clickEvent && clickEvent(card)}
            key={deckId} />
        :
        <img className={"img-fluid animated fadeIn " + delay + " " + extraClasses}
            src={cardImages["back"]}
            onClick={() => clickEvent && clickEvent(card)}
            key={deckId} />
}

export default Card
