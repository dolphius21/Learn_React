import React from 'react';
import { render } from 'react-dom';
import useWelcomeGreeting from './useWelcomeGreeting';

function App() {
  useWelcomeGreeting();
  return <h1>My App</h1>;
}

render(<App />, document.querySelector('#react-root'));
