import React from 'react';
import { render } from 'react-dom';

function User(props) {
  return (
    <form>
      <input type="number" defaultValue={props.age} name="age" />
    </form>
  );
}

render(
  <>
    <User age={23} />
    <User age={26} />
  </>,
  document.querySelector('#react-root')
);
