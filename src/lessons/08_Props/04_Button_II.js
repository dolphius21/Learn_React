import React from 'react';
import { render } from 'react-dom';

function Button({ children }) {
  return <button>{children}</button>;
}

const root = document.querySelector('#react-root');

render(<Button>Login</Button>, root);
