import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './Home.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home loggedIn={false} />
          <Home loggedIn={true} />
        </Route>
        <Route exact path="/login">
          <h1>Login page</h1>
          <Link to="/">Back home</Link>
        </Route>
        <Route exact path="/dashboard">
          <h1>Dashboard page</h1>
          <Link to="/">Back home</Link>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

render(<App />, document.querySelector('#react-root'));
