import React, { useState } from 'react';
import { render } from 'react-dom';

function Countdown() {
  const [count, setCount] = useState(10);

  return <h2>{count} times remaining</h2>;
}

render(<Countdown />, document.querySelector('#react-root'));
