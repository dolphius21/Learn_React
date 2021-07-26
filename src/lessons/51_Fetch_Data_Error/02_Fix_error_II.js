import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

function App() {
  const [settings, setSettings] = useState();

  useEffect(() => {
    fetch('https://react-tutorial-demo.firebaseio.com/settings.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSettings(data);
      });
  }, []);

  if (!settings) {
    return null;
  }
  return (
    <p>
      Welcome {settings.type}. <br />
      You have {settings.push_notifications ? 'enabled' : 'disabled'} push
      notifications and {settings.dark_mode ? 'enabled' : 'disabled'} dark mode.
    </p>
  );
}

render(<App />, document.querySelector('#react-root'));
