const Card = ({ clickEvent, extraClasses, card }) => {
    return <img
        className={"img-fluid animated fadeIn " + extraClasses}
        src={"/images/" + card.imageName + ".png"}
        onClick={() => clickEvent && clickEvent(card)} />
}

export default Card
