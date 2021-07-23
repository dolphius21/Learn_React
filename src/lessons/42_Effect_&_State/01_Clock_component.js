import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    clearInterval(timeInterval);
  }, []);
  return <h2>{time.toLocaleTimeString()}</h2>;
}

render(<Clock />, document.querySelector('#react-root'));
