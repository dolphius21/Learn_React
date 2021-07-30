// TODO
import React, { useState, createContext } from 'react';

const AppContext = createContext();

function AppContextProvider(props) {
  const [theme, setTheme] = useState('dark');
  const [currency, setCurrency] = useState('USD');

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  const value = {
    theme,
    currency,
    setCurrency,
    toggleTheme
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
