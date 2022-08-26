import { useState } from 'react';
import { QuoteBox } from './components/QuoteBox';
import { Button } from './components/Button';
import quotes from './quotes.json';
import colors from './colors.json';
import './App.css';

function App() {

  const randomIndex  = (array) =>  {

    return Math.floor(Math.random() * array.length);

  }

  const [indexQuote, setIndexQuote] = useState(randomIndex(quotes));

  const [indexColor, setIndexColor] = useState(randomIndex(colors));

  const randomColor = () => {

    setIndexColor(randomIndex(colors));

  }

  const randomQuote = () => {

    randomColor();

    setIndexQuote(randomIndex(quotes));

  }

  const color = `#${colors[indexColor].color}`;

  document.body.style['background-color'] = color;

  return (

    <div className="App">
      <div id="card">
        <QuoteBox color={color} quote={quotes[indexQuote].quote}/>
        <span id="author" style={{color: color}}>{quotes[indexQuote].author}</span>
        <Button randomQuote={randomQuote} color={color}/>
      </div>
    </div>

  )
}

export default App;