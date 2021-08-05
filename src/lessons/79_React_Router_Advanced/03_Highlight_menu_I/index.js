import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { render } from 'react-dom';
import Home from './Home.js';
import Products from './Products.js';
import Team from './Team.js';
import NotFound from './NotFound.js';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="nav-active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" activeClassName="nav-active">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/team" activeClassName="nav-active">
              Team
            </NavLink>
          </li>
          <li>
            <NavLink to="/non-existing-page" activeClassName="nav-active">
              Non existing page
            </NavLink>
          </li>
        </ul>
      </nav>

      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/team">
            <Team />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

render(<App />, document.querySelector('#react-root'));
