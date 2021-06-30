import React, { useState } from 'react';
import { render } from 'react-dom';

function Countdown() {
  const [count, setCount] = useState(10);

  const handleDecrementClick = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h2>{count} times remaining</h2>
      <button onClick={handleDecrementClick}>Countdown</button>
    </>
  );
}

render(<Countdown />, document.querySelector('#react-root'));
