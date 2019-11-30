const Deck = ({ hand }) => hand.map((card) => {
    // imageName is always unique.
    return <div className="col" key={card.imageName}>
        <img className="img-fluid" src={"/images/" + card.imageName + ".png"} />
    </div>
})

export default Deck