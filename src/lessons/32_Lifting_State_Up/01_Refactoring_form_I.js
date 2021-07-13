import React, { useState } from 'react';
import { render } from 'react-dom';
import EmailForm from './EmailForm';

function App() {
  const [email, setEmail] = useState('');

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  return (
    <div>
      <h2>Logged in as {email}</h2>
      <EmailForm email={email} onEmailChange={handleEmailChange} />
    </div>
  );
}

render(<App />, document.querySelector('#react-root'));
