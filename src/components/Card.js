import cardImages from "../cardImages"

const Card = ({ clickEvent, extraClasses, card, index, deckId }) => {

    const delay = "delay-" + index;
    const imgSrc = card ? cardImages[card.key] : cardImages["back"];

    return <img className={"img-fluid animated fadeIn " + delay + " " + extraClasses}
        src={imgSrc}
        onClick={() => clickEvent && clickEvent(card)}
        key={deckId} />
}

export default Card
