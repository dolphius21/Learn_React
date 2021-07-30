import React from 'react';
import { render } from 'react-dom';
import Navbar from './Navbar.js';
import Main from './Main.js';
import Footer from './Footer.js';
import { ThemeProvider } from './ThemeContext.js';

function App() {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Main />
        <Footer />
      </ThemeProvider>
    </>
  );
}

render(<App />, document.querySelector('#react-root'));
