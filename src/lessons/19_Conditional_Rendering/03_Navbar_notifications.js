import React from 'react';
import { render } from 'react-dom';

function Navbar(props) {
  return (
    <>
      <h2>Welcome user</h2>
      {props.notifications.length !== 0 && (
        <p>You've got {props.notifications.length} notifications</p>
      )}
    </>
  );
}

// Sample usage (do not modify)
const notifications = [
  {
    id: 1,
    text: 'Welcome to our supermarket'
  },
  {
    id: 2,
    text: 'Your order has shipped'
  },
  {
    id: 3,
    text: 'Your order has shipped'
  }
];
render(
  <>
    <Navbar notifications={[]} />
    <Navbar notifications={notifications} />
  </>,
  document.querySelector('#react-root')
);
