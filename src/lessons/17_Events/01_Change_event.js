import React from 'react';
import { render } from 'react-dom';

function Navbar() {
  return (
    <select
      className="countries"
      onChange={() => console.log('Country changed')}
    >
      <option>Netherlands</option>
      <option>Belgium</option>
      <option>France</option>
    </select>
  );
}

render(<Navbar />, document.querySelector('#react-root'));
