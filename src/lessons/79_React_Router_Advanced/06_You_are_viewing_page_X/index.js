import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import Home from './Home.js';

function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

render(<App />, document.querySelector('#react-root'));
