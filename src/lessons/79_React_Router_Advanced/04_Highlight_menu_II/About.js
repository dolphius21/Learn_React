import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutMission from './AboutMission.js';
import AboutUs from './AboutUs.js';

export default function About() {
  return (
    <>
      <h1>About</h1>

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
