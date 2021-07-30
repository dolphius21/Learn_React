// define the context and provider here
import React, { createContext } from 'react';

const ThemeContext = createContext();

function ThemeProvider(props) {
  const theme = 'light';

  return (
    <ThemeContext.Provider value={theme}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
