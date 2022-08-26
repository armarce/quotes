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

  const randomQuote = () => {

    setIndexQuote(randomIndex(quotes));

  }

  const color = `#${colors[randomIndex(colors)].color}`;

  document.body.style['background-color'] = color;

  return (
    <div id="card">
      <QuoteBox color={color} quote={quotes[indexQuote].quote}/>
      <span id="author" style={{color: color}}>{quotes[indexQuote].author}</span>
      <Button randomQuote={randomQuote} color={color}/>
    </div>
  )
}

export default App;