import React, { useState } from 'react';
import { render } from 'react-dom';

function App() {
  const [name, setName] = useState('');

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        value={name}
        placeholder="Your name"
        onChange={(e) => setName(e.target.value)}
      />

      <input type="submit" />
      <p>Hello {name}</p>
    </form>
  );
}

render(<App />, document.querySelector('#react-root'));
