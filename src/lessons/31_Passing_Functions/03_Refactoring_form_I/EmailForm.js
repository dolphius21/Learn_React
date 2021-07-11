import React from 'react';

export default function EmailForm({ email, onEmailChange }) {
  return (
    <form>
      <label htmlFor="email">Email: </label>
      <input type="email" id="email" value={email} onChange={onEmailChange} />
    </form>
  );
}
