import React from 'react';
import { render } from 'react-dom';

const root = document.querySelector('#react-root');
render(
  <p id="promo" className="selected">
    Hello World
  </p>,
  root
);
