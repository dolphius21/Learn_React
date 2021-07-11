import React, { useState } from 'react';
import { render } from 'react-dom';

function App() {
  const [name, setName] = useState('');

  return (
    <>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello {name}</p>
    </>
  );
}

render(<App />, document.querySelector('#react-root'));
