import React from 'react';

export default function TodoForm({ entry, onEntryChange, onFormSubmit }) {
  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="todo">Enter To do: </label>
      <input type="text" id="todo" value={entry} onChange={onEntryChange} />
      <input type="submit" value="Add todo" />
    </form>
  );
}
