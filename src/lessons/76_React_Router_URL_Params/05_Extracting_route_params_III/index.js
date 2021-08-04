import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { render } from 'react-dom';
import Home from './Home.js';
import Book from './Book.js';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books/fiction/2">Digital fortress</Link>
          </li>
          <li>
            <Link to="/books/nonfiction/5">Why we sleep</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/books/:type/:id">
            <Book />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

render(<App />, document.querySelector('#react-root'));
