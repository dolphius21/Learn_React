import React, { useState } from 'react';
import { render } from 'react-dom';

function Counter() {
  const [count, setCount] = useState(0);

  const handleAddCountClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h2>{count} times clicked</h2>
      <button onClick={handleAddCountClick}>Add 1</button>
    </>
  );
}

render(<Counter />, document.querySelector('#react-root'));
