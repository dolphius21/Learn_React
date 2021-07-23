import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    localStorage.setItem('counter', counter);
  }, [counter]);

  function handleIncrementClick() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  function handleDecrementClick() {
    setCounter((prevCounter) => prevCounter - 1);
  }

  return (
    <>
      <h2>{counter}</h2>
      <button onClick={handleIncrementClick}>+</button>
      <button onClick={handleDecrementClick}>-</button>
    </>
  );
}

render(<Counter />, document.querySelector('#react-root'));
