import cardImages from "../src/cardImages"

const Card = ({ clickEvent, extraClasses, card, index }) => {

    const delay = "delay-" + index;

    return (card && card.imageName)
        ? <img className={"img-fluid animated fadeIn " + delay + " " + extraClasses}
            src={cardImages[card.key]}
            onClick={() => clickEvent && clickEvent(card)}
            key={Date.now()} />
        :
        <img className={"img-fluid animated fadeIn " + delay + " " + extraClasses}
            src={cardImages["back"]}
            onClick={() => clickEvent && clickEvent(card)}
            key={Date.now()} />
}

export default Card
