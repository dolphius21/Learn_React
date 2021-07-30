import React, { useContext } from 'react';
import { ThemeContext, ThemeProvider } from './ThemeContext.js';
import { render } from 'react-dom';

/* The entire file is setup for testing purposes
 * so please disregard it.js */

let contextValue;

function Child() {
  contextValue = useContext(ThemeContext);
  return null;
}

function App() {
  return (
    <ThemeProvider>
      <Child />
    </ThemeProvider>
  );
}

render(<App />, document.querySelector('#react-root'));
