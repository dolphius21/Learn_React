import React, { useContext } from 'react';
import { render } from 'react-dom';
import StoreFront from './StoreFront.js';
import Navbar from './Navbar.js';
import { AppContext, AppContextProvider } from './AppContext.js';
import clsx from 'clsx';

function App() {
  const context = useContext(AppContext);

  const classes = clsx({
    dark: context.theme === 'dark'
  });

  return (
    <div className={classes}>
      <Navbar />
      <StoreFront />
    </div>
  );
}

function AppWrapper() {
  return (
    <AppContextProvider>
      <App />
    </AppContextProvider>
  );
}

render(<AppWrapper />, document.querySelector('#react-root'));
