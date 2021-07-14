import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

function Counter() {
  const [times, setTimes] = useState(0);

  useEffect(() => {
    if (times === 0) {
      document.title = 'Welcome';
    }
    if (times > 0) {
      document.title = `${times} times clicked`;
    }
  });

  return (
    <>
      <h2>{times} times clicked</h2>
      <button onClick={() => setTimes((prevTimes) => prevTimes + 1)}>
        Add 1
      </button>
    </>
  );
}

render(<Counter />, document.querySelector('#react-root'));
