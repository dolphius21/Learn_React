import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [darkTheme, setDarkTheme] = useState(
    () => localStorage.getItem('dark_theme') === 'true'
  );
  console.log(darkTheme);

  useEffect(() => {
    localStorage.setItem('dark_theme', darkTheme);
  }, [darkTheme]);

  const className = darkTheme ? 'dark' : 'light';

  function handleToggleClick() {
    setDarkTheme((prevTheme) => !prevTheme);
  }

  return (
    <div className={className}>
      <h1>Welcome</h1>
      <button onClick={handleToggleClick}>Toggle theme</button>
    </div>
  );
}

// Specific to this chapter: makes it possible for you to reload the page
const reload = () => {
  console.log('Page reloaded');
  ReactDOM.unmountComponentAtNode(document.querySelector('#react-root'));
  ReactDOM.render(<App />, document.querySelector('#react-root'));
};
reload();
const button = document.createElement('button');
button.textContent = 'Reload page';
button.addEventListener('click', reload);
document.body.appendChild(button);
