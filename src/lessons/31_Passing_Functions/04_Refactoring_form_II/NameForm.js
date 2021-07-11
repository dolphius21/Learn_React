import React from 'react';

export default function NameForm({ name, onNameChange, onFormSubmit }) {
  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" value={name} onChange={onNameChange} />
      <input type="submit" value="Save" />
    </form>
  );
}
