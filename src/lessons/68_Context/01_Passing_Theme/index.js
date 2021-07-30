import React, { useState } from 'react';
import { render } from 'react-dom';
import Navbar from './Navbar.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <>
      <Navbar theme={theme} />
      <Main theme={theme} />
      <Footer theme={theme} />
    </>
  );
}

render(<App />, document.querySelector('#react-root'));
