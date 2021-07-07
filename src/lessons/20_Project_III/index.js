import React, { useState } from 'react';
import { render } from 'react-dom';
import StoreFront from './StoreFront';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const userIsLoggedOut = (
    <>
      <h2>Please login</h2>
      <button className="btn btn-primary" onClick={() => setLoggedIn(true)}>
        Login
      </button>
    </>
  );

  const userIsLoggedIn = (
    <>
      <StoreFront />
      <button className="btn btn-outline" onClick={() => setLoggedIn(false)}>
        Logout
      </button>
    </>
  );

  return loggedIn ? userIsLoggedIn : userIsLoggedOut;
}

render(<App />, document.querySelector('#react-root'));
