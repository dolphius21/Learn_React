import React, { useState } from 'react';
import { render } from 'react-dom';

function Countdown() {
  const [count, setCount] = useState(5);
  const [lives, setLives] = useState(3);

  function handleCountdownClick() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setLives(lives - 1);
      setCount(5);
    }
  }

  return (
    <>
      <h2>Attempts remaining: {count}</h2>
      <button onClick={handleCountdownClick}>Count down</button>
      <h3>Lives remaining: {lives}</h3>
    </>
  );
}

render(<Countdown />, document.querySelector('#react-root'));
