import React from 'react';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import { render } from 'react-dom';
import About from './About.js';

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <NavLink exact activeClassName="nav-active" to="/">
            Home page
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="nav-active" to="/about">
            About pages
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="nav-active" to="/about/us">
            About us
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="nav-active" to="/about/mission">
            About our mission
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <h1>Homepage</h1>
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

render(<App />, document.querySelector('#react-root'));
