import React, { useState } from 'react';
import { render } from 'react-dom';

function Counter({ incrementBy }) {
  const [counter, setCounter] = useState(0);

  function handleIncrementClick() {
    setCounter(counter + incrementBy);
  }

  return (
    <>
      <h2>{counter} times clicked</h2>
      <button onClick={handleIncrementClick}>Add {incrementBy}</button>
    </>
  );
}

// Sample usage (do not modify)
render(
  <>
    <Counter incrementBy={1} />
    <Counter incrementBy={2} />
    <Counter incrementBy={5} />
  </>,
  document.querySelector('#react-root')
);
