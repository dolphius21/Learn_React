import React, { useState } from 'react';
import { render } from 'react-dom';

function Countdown() {
  const [count, setCount] = useState(5);

  function handleDecrementClick() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <h2>{count} times remaining</h2>
      <button onClick={handleDecrementClick}>Countdown</button>
    </>
  );
}

render(<Countdown />, document.querySelector('#react-root'));
