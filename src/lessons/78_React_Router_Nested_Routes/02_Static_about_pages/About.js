import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import AboutUs from './AboutUs.js';
import AboutMission from './AboutMission.js';

export default function About() {
  return (
    <>
      <h1>About</h1>
      <ul>
        <li>
          <Link to="/about/us">About us</Link>
        </li>
        <li>
          <Link to="/about/mission">About our mission</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/about/us">
          <AboutUs />
        </Route>
        <Route exact path="/about/mission">
          <AboutMission />
        </Route>
      </Switch>
    </>
  );
}
