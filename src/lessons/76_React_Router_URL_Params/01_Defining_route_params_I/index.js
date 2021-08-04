import React from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import {render} from "react-dom";
import Home from "./Home.js";
import Product from "./Product.js";

function App() {
  return (
    <BrowserRouter>
        <nav>
          <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/products/3">Product 1</Link>
            </li>
            <li>
                <Link to="/products/2">Product 2</Link>
            </li>
            <li>
                <Link to="/products/1">Product 3</Link>
            </li>
          </ul>
        </nav>

        <main>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/products/:id">
                    <Product />
                </Route>
            </Switch>
        </main>
    </BrowserRouter>
  );
}

render(<App />, document.querySelector("#react-root"));
