import React from 'react';
import { render } from 'react-dom';
import Button from './Button.js';

function App() {
  return (
    <>
      <Button tabIndex="2" disabled={true}>
        Login
      </Button>
      <Button className="ui-button" disabled={false}>
        Register
      </Button>
    </>
  );
}

render(<App />, document.querySelector('#react-root'));
