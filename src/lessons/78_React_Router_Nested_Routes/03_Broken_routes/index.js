import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { render } from 'react-dom';
import About from './About.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Link to="/about">Go to /about page</Link>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

render(<App />, document.querySelector('#react-root'));
