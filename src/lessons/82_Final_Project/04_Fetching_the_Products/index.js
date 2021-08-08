import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar.js';
import Products from './Products.js';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          {/* Temporary rendering Products for homepage */}
          <Route exact path="/">
            <Products />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

render(<App />, document.querySelector('#react-root'));
