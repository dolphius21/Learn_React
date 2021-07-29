import React, { useState } from 'react';
import { render } from 'react-dom';
import useMapboxMap from './useMapboxMap';

function App() {
  const [random, setRandom] = useState(Math.random());

  useMapboxMap('map');

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
