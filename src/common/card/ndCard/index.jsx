import "./style.css"

function NdCard(props) {
    return(
        <div className="ndCard">
            {props.sale ? <div className="saleBox"><p>{props.sale}</p></div>:null}
            <span></span>
            <img src={props.img} alt="cardImg" />
            <div className="ndTexts">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <button value={props.value}>view</button>
            </div>
        </div>
    )
}
export default NdCard