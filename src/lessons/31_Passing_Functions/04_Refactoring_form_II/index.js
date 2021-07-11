import React, { useState } from 'react';
import { render } from 'react-dom';
import NameForm from './NameForm';

function App() {
  const [name, setName] = useState('');

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    setName('');
  }

  return (
    <div>
      <h2>Hello {name}</h2>
      <NameForm
        name={name}
        onNameChange={handleNameChange}
        onFormSubmit={handleFormSubmit}
      />
    </div>
  );
}

render(<App />, document.querySelector('#react-root'));
