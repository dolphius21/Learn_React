import React, { useLayoutEffect } from 'react';
import mapboxgl from 'mapbox-gl';

export default function useMapboxMap(container) {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZG9scGhpdXMyMSIsImEiOiJja3IzN2loOXgweTZmMzFvamcycmVsYXcxIn0.1Ss_RPSTcRb1LqySGBYTjQ';

  useLayoutEffect(() => {
    const map = new mapboxgl.Map({
      container,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [12.567898, 55.67583],
      zoom: 9
    });
  }, []);
}
