import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

function Stopwatch() {
  const [counter, setCounter] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (running) {
      const timerId = setTimeout(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
      return () => {
        clearTimeout(timerId);
      };
    }
  });

  const handleTimerToggleClick = () => {
    setRunning((prevRunning) => !prevRunning);
  };

  const handleStopClick = () => {
    setCounter(0);
    setRunning(false);
  };

  return (
    <>
      <h2>{counter}</h2>
      <button onClick={handleTimerToggleClick}>Start / Pause</button>
      <button onClick={handleStopClick}>Stop</button>
    </>
  );
}

render(<Stopwatch />, document.querySelector('#react-root'));
