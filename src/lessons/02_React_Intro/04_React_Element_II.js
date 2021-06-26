import React from 'react';

function createTitle() {
  return React.createElement(
    'h1',
    { className: 'hero-title' },
    'Welcome to our supermarket'
  );
}

// sample usage (do not modify)
console.log(createTitle());
