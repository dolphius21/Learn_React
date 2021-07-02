import React, { useState } from 'react';
import { render } from 'react-dom';

function Counter(props) {
  const [counter, setCounter] = useState(0);

  function handleButtonClick() {
    //
    if (props.mode === 'increment') {
      setCounter(counter + 1);
    }
    if (props.mode === 'decrement') {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h2>{props.mode}ing counter</h2>
      <h3>{counter} times</h3>
      <button onClick={handleButtonClick}>{props.mode}</button>
    </>
  );
}

// Sample usage (do not modify)
render(
  <>
    <Counter mode="increment" />
    <Counter mode="decrement" />
  </>,
  document.querySelector('#react-root')
);
