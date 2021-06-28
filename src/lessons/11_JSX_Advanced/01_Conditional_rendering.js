import React from 'react';
import { render } from 'react-dom';

function WelcomeUser({ user }) {
  return user ? <h1>Welcome {user.name}</h1> : null;
}

const user = {
  id: 1,
  name: 'Sam Blue'
};
const root = document.querySelector('#react-root');

render(
  <>
    <WelcomeUser user={user} />
    <WelcomeUser />
  </>,
  root
);
