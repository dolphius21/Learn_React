import React, { useState, useLayoutEffect } from 'react';
import { render } from 'react-dom';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

function App() {
  const [random, setRandom] = useState(Math.random());
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZG9scGhpdXMyMSIsImEiOiJja3IzN2loOXgweTZmMzFvamcycmVsYXcxIn0.1Ss_RPSTcRb1LqySGBYTjQ';

  useLayoutEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map', // matches <div id="map" />
      style: 'mapbox://styles/mapbox/dark-v10', // sets the dark mode
      center: [12.567898, 55.67583], // Sets the center of the map (long, lat)
      zoom: 9
    });
  }, []);

  return (
    <>
      <button id="re-render" onClick={() => setRandom(Math.random())}>
        Re-render
      </button>
      <div id="map"></div>
    </>
  );
}

// Do NOT modify the code below
// Special map loading setup
// specific to react-tutorial.app
const script = document.createElement('script');
script.src = 'https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.js';
script.onload = () => {
  render(<App />, document.querySelector('#react-root'));
};

document.body.appendChild(script);
