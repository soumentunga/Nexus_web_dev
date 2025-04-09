

function Card(props){
    return(

    <div className="card">
        <img src={props.Image} height="200px" width="200px"/>
        <div style={{textAlign:"center"}}>
            <h2>{props.cloth}</h2>
            <h1>{props.Offer}</h1>
            <h2>Shop Now</h2>
        </div>

    </div>

    )

}

export default Card;