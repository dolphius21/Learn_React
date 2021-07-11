import React, { useState } from 'react';
import { render } from 'react-dom';

function RegisterForm() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [motivation, setMotivation] = useState('');

  return (
    <>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>Choose a type</option>
          <option>client</option>
          <option>merchant</option>
        </select>
        <textarea
          name="motivation"
          placeholder="Your motivation to join"
          value={motivation}
          onChange={(e) => setMotivation(e.target.value)}
        />
        <input type="submit" value="Register" />
      </form>
      <p>
        Your name is {name}. You would like to register as {type} because{' '}
        {motivation}.
      </p>
    </>
  );
}

render(<RegisterForm />, document.querySelector('#react-root'));
