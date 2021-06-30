import React from 'react';
import { render } from 'react-dom';

function Counter() {
  const handleLogClick = () => {
    console.log('Button clicked');
  };

  return <button onClick={handleLogClick}>Add 1</button>;
}

render(<Counter />, document.querySelector('#react-root'));
