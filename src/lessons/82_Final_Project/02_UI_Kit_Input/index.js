import React from 'react';
import { render } from 'react-dom';
import Input from './Input.js';

function App() {
  function handleLastNameInput() {
    console.log('Last name changed');
  }

  // here we provide you with sample usages of the Input component
  // feel free to add your own
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'wrap'
      }}
    >
      <Input placeholder="First name" />
      <Input placeholder="Last name" onInput={handleLastNameInput} />
      <Input placeholder="Email" type="email" required />
    </div>
  );
}

render(<App />, document.querySelector('#react-root'));
