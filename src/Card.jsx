
function Card ({name, number}){
    return(
        <div className="headerCont">
            <div className="cardCont">
                <h2>{name}</h2>
                <p>{number}</p>
            </div>
        </div>
    )
}

export default Card