export const Button = ({randomQuote, color}) => {

    return(

        <button onClick={randomQuote} style={{background: color}}>
            <i className="fa-solid fa-angle-right"></i>
        </button>

    )
}