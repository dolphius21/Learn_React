import React from 'react';
import { render } from 'react-dom';

// do not modify
function Navbar() {
  return (
    <>
      <h3>Supermarket</h3>
      <p>Start shopping</p>
    </>
  );
}

const root = document.querySelector('#react-root');
render(<Navbar />, root);
