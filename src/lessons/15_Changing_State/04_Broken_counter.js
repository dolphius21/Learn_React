import React, { useState } from 'react';
import { render } from 'react-dom';

function Counter() {
  let [count, setCount] = useState(0);

  return (
    <>
      <div>{count} times clicked</div>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
    </>
  );
}

render(<Counter />, document.querySelector('#react-root'));
