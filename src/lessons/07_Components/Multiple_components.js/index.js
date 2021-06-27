import React from 'react';
import { render } from 'react-dom';
import Button from './Button';
import Link from './Link';

function App() {
  return (
    <>
      <Button />
      <Button />
      <Link />
    </>
  );
}

// Sample usage (do not modify)
render(<App />, document.querySelector('#react-root'));
