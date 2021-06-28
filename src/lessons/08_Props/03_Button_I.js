import React from 'react';
import { render } from 'react-dom';

function Button({ size = 'medium' }) {
  return <button className={`btn-${size}`}>Text here</button>;
}

const root = document.querySelector('#react-root');
render(<Button size="small" />, root);
