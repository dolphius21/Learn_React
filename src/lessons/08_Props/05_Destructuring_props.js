import React from 'react';
import { render } from 'react-dom';

function Button({ className, children }) {
  return <button className={className}>{children}</button>;
}

const root = document.querySelector('#react-root');

render(<Button className="primary">Login</Button>, root);
