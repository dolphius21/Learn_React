import React from 'react';
import { render } from 'react-dom';

function Navbar({ theme }) {
  return <h1 className={`navbar ${theme}`}>Online supermarket</h1>;
}

const root = document.querySelector('#react-root');

render(
  <>
    <Navbar theme="light" />
    <Navbar theme="dark" />
  </>,
  root
);
