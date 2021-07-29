import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import useFetch from './useFetch';

function App() {
  const [settings, setSettings] = useState({});
  const { get } = useFetch('https://react-tutorial-demo.firebaseio.com/');

  useEffect(() => {
    get('settings.json')
      .then((data) => setSettings(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <p>
      Welcome {settings.type}. <br />
      You have {settings.push_notifications ? 'enabled' : 'disabled'} push
      notifications and {settings.dark_mode ? 'enabled' : 'disabled'} dark mode.
    </p>
  );
}

render(<App />, document.querySelector('#react-root'));
