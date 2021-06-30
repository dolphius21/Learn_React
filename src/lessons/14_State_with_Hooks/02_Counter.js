import React, { useState } from 'react';
import { render } from 'react-dom';

function Counter() {
  const [seconds, setSeconds] = useState(0);

  return <h2>{seconds} seconds elapsed</h2>;
}

render(<Counter />, document.querySelector('#react-root'));
