const Card = ({ clickEvent, extraClasses, card }) => {
    return card.imageName ? <img className={"img-fluid animated fadeIn " + extraClasses}
        src={"/images/" + card.imageName + ".png"}
        onClick={() => clickEvent && clickEvent(card)} />
        :
        null
}

export default Card
