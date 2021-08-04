import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import StoreFront from './StoreFront.js';
import ProductDetails from './ProductDetails.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <StoreFront />
        </Route>
        <Route exact path="/products/:id">
          <ProductDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

render(<App />, document.querySelector('#react-root'));
