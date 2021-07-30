import React, { useContext } from 'react';
import clsx from 'clsx';
import { ThemeContext } from './ThemeContext.js';

export default function Card(props) {
  const context = useContext(ThemeContext);

  const classes = clsx({
    dark: context.theme === 'dark'
  });

  return <div className={classes}>{props.children}</div>;
}
