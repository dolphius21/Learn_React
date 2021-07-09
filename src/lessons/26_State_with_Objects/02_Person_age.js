import React, { useState } from 'react';
import { render } from 'react-dom';

function Person() {
  const [user, setUser] = useState({
    id: 1,
    first_name: 'Alex',
    age: 20
  });

  const handleIncrement = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  return (
    <div>
      <p>
        {user.first_name} is {user.age} years old.
      </p>
      <button onClick={handleIncrement}>Increment age</button>
    </div>
  );
}

render(<Person />, document.querySelector('#react-root'));
