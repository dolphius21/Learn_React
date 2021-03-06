import React, { useState } from 'react';
import { render } from 'react-dom';

function GradeForm() {
  const [grade, setGrade] = useState(0);

  function handleFormSubmit(event) {
    event.preventDefault();
    fetch('https://api.learnjavascript.online/demo/react/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ grade })
    })
      .then((res) => res.json())
      .then((data) => console.log('Grade added!'));
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="number"
        value={grade}
        name="grade"
        onChange={(event) => setGrade(event.target.value)}
        placeholder="Enter the grade"
      />
      <input type="submit" />
    </form>
  );
}

render(<GradeForm />, document.querySelector('#react-root'));
