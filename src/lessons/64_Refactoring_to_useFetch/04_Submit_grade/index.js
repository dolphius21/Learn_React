import React, { useState } from 'react';
import { render } from 'react-dom';
import useFetch from './useFetch';

function GradeForm() {
  const [grade, setGrade] = useState(0);
  const { post } = useFetch('https://api.learnjavascript.online/demo/react/');

  function handleFormSubmit(event) {
    event.preventDefault();
    post('grades', { grade })
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
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
