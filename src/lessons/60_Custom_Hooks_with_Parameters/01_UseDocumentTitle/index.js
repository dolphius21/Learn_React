import React, { useState } from 'react';
import { render } from 'react-dom';
import useDocumentTitle from './useDocumentTitle';

function App() {
  const [count, setCount] = useState(0);

  useDocumentTitle(`${count} products in your shopping list`);

  function handleIncrementClick() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleDecrementClick() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <>
      <h2>{count}</h2>
      <button onClick={handleIncrementClick}>+</button>
      <button onClick={handleDecrementClick}>-</button>
    </>
  );
}

render(<App />, document.querySelector('#react-root'));
