import React from 'react';
import { render } from 'react-dom';

function Navbar({ user, notifications }) {
  return (
    <>
      <div>
        Welcome {user.first_name} {user.last_name}
      </div>
      <p>You've got {notifications.length} notifications</p>
    </>
  );
}

let notifications = [
  {
    id: 1,
    text: 'Order delivered'
  },
  {
    id: 2,
    text: 'Order received'
  }
];

const user = {
  first_name: 'Sam',
  last_name: 'Wolf'
};

const root = document.querySelector('#react-root');
render(<Navbar notifications={notifications} user={user} />, root);
