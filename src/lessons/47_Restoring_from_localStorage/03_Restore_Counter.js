import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Counter() {
  const [counter, setCounter] = useState(() => {
    const value = localStorage.getItem('counter');
    if (value === undefined) {
      return 0;
    }
    return Number.parseInt(value, 10);
  });

  useEffect(() => {
    localStorage.setItem('counter', counter);
  }, [counter]);

  function handleIncrementClick() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  function handleDecrementClick() {
    setCounter((prevCounter) => prevCounter - 1);
  }

  return (
    <>
      <h2>{counter}</h2>
      <button onClick={handleIncrementClick}>+</button>
      <button onClick={handleDecrementClick}>-</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </>
  );
}

// Specific to this chapter: makes it possible for you to reload the page
const reload = () => {
  console.log('Page reloaded');
  ReactDOM.unmountComponentAtNode(document.querySelector('#react-root'));
  ReactDOM.render(<Counter />, document.querySelector('#react-root'));
};
reload();
const button = document.createElement('button');
button.textContent = 'Reload page';
button.addEventListener('click', reload);
document.body.appendChild(button);
