import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { render } from 'react-dom';
import Product from './Product.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <ul>
            <li>
              <Link to="/products/1">Go to /products/1 page</Link>
            </li>
            <li>
              <Link to="/products/2">Go to /products/2 page</Link>
            </li>
            <li>
              <Link to="/products/3">Go to /products/3 page</Link>
            </li>
          </ul>
        </Route>
        <Route path="/products/:id">
          <Product />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

render(<App />, document.querySelector('#react-root'));
