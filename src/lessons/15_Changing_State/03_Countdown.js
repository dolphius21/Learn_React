import React, { useState } from 'react';
import { render } from 'react-dom';

function Countdown() {
  const [count, setCount] = useState(10);

  return (
    <>
      <h2>{count} times remaining</h2>
      <button onClick={() => setCount(count - 1)}>Count down</button>
    </>
  );
}

render(<Countdown />, document.querySelector('#react-root'));
