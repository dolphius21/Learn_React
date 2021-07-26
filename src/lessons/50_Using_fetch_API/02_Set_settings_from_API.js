import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

function App() {
  const [settings, setSettings] = useState();

  useEffect(() => {
    fetch('https://react-tutorial-demo.firebaseio.com/settings.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSettings(data);
      });
  }, []);

  // only for this chapter (do not modify)
  return JSON.stringify(settings || '');
}

render(<App />, document.querySelector('#react-root'));
