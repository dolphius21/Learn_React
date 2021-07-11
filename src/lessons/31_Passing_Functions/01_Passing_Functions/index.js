import React from 'react';
import { render } from 'react-dom';
import Card from './Card.js';

function App() {
  function handleCardLoad() {
    console.log('Card has loaded');
  }

  return <Card onCardLoad={handleCardLoad} />;
}

render(<App />, document.querySelector('#react-root'));
