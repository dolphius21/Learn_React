import React, { useState } from 'react';
import { render } from 'react-dom';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [entry, setEntry] = useState('');

  function handleEntryChange(event) {
    setEntry(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    // add the new entry
    setTodos([...todos, entry]);
    // reset/empty the textbox
    setEntry('');
  }

  return (
    <div>
      <TodoForm
        entry={entry}
        onEntryChange={handleEntryChange}
        onFormSubmit={handleFormSubmit}
      />
      <TodoList todos={todos} />
    </div>
  );
}

render(<TodoApp />, document.querySelector('#react-root'));
