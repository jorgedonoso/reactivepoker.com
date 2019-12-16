const Card = ({ clickEvent, extraClasses, card, index }) => {

    const delay = "delay-" + index;

    return card.imageName
        ? <img className={"img-fluid animated fadeIn " + delay + " " + extraClasses}
            src={"/images/" + card.imageName + ".png"}
            onClick={() => clickEvent && clickEvent(card)} />
        :
        null
}

export default Card
