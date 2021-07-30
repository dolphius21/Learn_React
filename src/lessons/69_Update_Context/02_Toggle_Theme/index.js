import React, { useContext } from 'react';
import { render } from 'react-dom';
import Navbar from './Navbar.js';
import Main from './Main.js';
import Button from './Button.js';
import Footer from './Footer.js';
import { ThemeProvider, ThemeContext } from './ThemeContext.js';

// App component is wrapped with <ThemeProvider /> (check render() call below)
function App() {
  const context = useContext(ThemeContext);

  return (
    <>
      <Button onClick={context.toggleTheme}>Toggle theme</Button>
      <hr />
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.querySelector('#react-root')
);
