import React, { useEffect } from 'react';
import { render } from 'react-dom';

function App() {
  useWelcomeGreeting();
  return <h1>My App</h1>;
}

function useWelcomeGreeting() {
  useEffect(() => {
    console.log('Welcome to my app');
  }, []);
}

render(<App />, document.querySelector('#react-root'));
