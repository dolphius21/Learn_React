import React, { useContext } from 'react';
import clsx from 'clsx';
import { ThemeContext } from './ThemeContext.js';

export default function Button(props) {
  // TODO: get the theme from the context rather than props
  const theme = useContext(ThemeContext);
  const classes = clsx({
    dark: theme === 'dark'
  });

  return <button className={classes}>{props.children}</button>;
}
