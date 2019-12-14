const Button = ({ clickEvent, buttonText, label, type }) => {
    return <>
        <div className="font-weight-bold mt-3">{label}</div>
        <button className={"btn mt-3 " + type} onClick={clickEvent}>{buttonText}</button>
    </>
}

export default Button
