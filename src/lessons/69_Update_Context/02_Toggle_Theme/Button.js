import React, { useContext } from 'react';
import clsx from 'clsx';
import { ThemeContext } from './ThemeContext.js';

export default function Button(props) {
  const context = useContext(ThemeContext);

  const classes = clsx({
    dark: context.theme === 'dark'
  });

  return (
    <button className={classes} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
