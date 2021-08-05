import React from "react";
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import {render} from "react-dom";

function About() {
  return <>
      <h1>About</h1>
      <ul>
        <li><Link to="/about/us">About us</Link></li>
        <li><Link to="/about/team">About the team</Link></li>
      </ul>

      <Switch>
        <Route exact path="/about/us">
          <h2>About us</h2>
        </Route>
        <Route exact path="/about/team">
          <h2>About the Team</h2>
        </Route>
      </Switch>
    </>;
}

function App() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
                <Link to="/about">Go to /about page</Link>
            </Route>
            <Route path="/about">
                <About />
            </Route>
          </Switch>
        </BrowserRouter>
    );
}

render(<App />, document.querySelector("#react-root"));