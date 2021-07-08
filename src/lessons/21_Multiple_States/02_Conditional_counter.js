import React, { useState } from 'react';
import { render } from 'react-dom';

function Counter(props) {
  let [count, setCount] = useState(5);

  function handleCounterClick() {
    if (props.enabled) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <h2>Attempts remaining: {count}</h2>
      <button onClick={handleCounterClick}>Count down</button>
    </>
  );
}

// Sample usage (do not modify)
render(
  <>
    <Counter enabled={true} />
    <Counter enabled={false} />
  </>,
  document.querySelector('#react-root')
);
