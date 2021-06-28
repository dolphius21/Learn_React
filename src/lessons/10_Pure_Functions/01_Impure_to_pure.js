import React from 'react';
import { render } from 'react-dom';

function Navbar(props) {
  const full_name = `${props.user.first_name} ${props.user.last_name}`;
  return (
    <div>
      Hello {full_name}.<br />
      You are now {props.user.age} years old.
    </div>
  );
}

const user = {
  first_name: 'Sam',
  last_name: 'Doe',
  age: 26
};

// does the Component render the same thing
// when given the same props?
render(
  <>
    <Navbar user={user} />
    <Navbar user={user} />
  </>,
  document.querySelector('#react-root')
);
