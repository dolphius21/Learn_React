import React, { useState } from 'react';
import { render } from 'react-dom';

function Clock() {
  const [seconds, setSeconds] = useState(0);

  function handleIncrementClick() {
    if (seconds === 59) {
      setSeconds(0);
    } else {
      setSeconds(seconds + 1);
    }
  }

  return (
    <>
      <h1>{seconds} seconds</h1>
      <button onClick={handleIncrementClick}>Add 1</button>
    </>
  );
}

render(<Clock />, document.querySelector('#react-root'));
