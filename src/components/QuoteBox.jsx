export const QuoteBox = ({quote, color}) =>{

    return(
      <div id="quote">
        <i className="fa-solid fa-quote-left" style={{color: color}}></i>
        <p style={{color: color}}>
          {quote}
        </p>
      </div>
    );
}