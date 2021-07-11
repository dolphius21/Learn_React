import React from 'react';
import { render } from 'react-dom';
import Card from './Card.js';

function App() {
  function handleCardClick() {
    console.log('Card got clicked');
  }

  return <Card onCardClick={handleCardClick} />;
}

render(<App />, document.querySelector('#react-root'));
