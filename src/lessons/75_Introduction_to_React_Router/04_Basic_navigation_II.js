import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { render } from 'react-dom';
import Home from './Home.js';
import Team from './Team.js';
import Products from './Products.js';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
        </ul>
      </nav>

      <main>
        {/* TODO: Render correct component based on URL */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/team">
            <Team />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

render(<App />, document.querySelector('#react-root'));
