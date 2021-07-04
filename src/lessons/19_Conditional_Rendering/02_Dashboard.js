import React from 'react';
import { render } from 'react-dom';

function Dashboard(props) {
  const userIsLoggedIn = <h1>Welcome back!</h1>;
  const userIsLoggedOut = <h1>Welcome.</h1>;

  return (
    <div className="container">
      {props.loggedIn ? userIsLoggedIn : userIsLoggedOut}
    </div>
  );
}

render(
  <>
    <Dashboard loggedIn={true} />
    <Dashboard loggedIn={false} />
  </>,
  document.querySelector('#react-root')
);
