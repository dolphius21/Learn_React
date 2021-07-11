import React from 'react';
import { render } from 'react-dom';

function Checkout(props) {
  return (
    <form>
      <input
        type="text"
        name="name"
        onChange={(e) => console.log(e.target.value)}
      />
    </form>
  );
}

render(<Checkout />, document.querySelector('#react-root'));
