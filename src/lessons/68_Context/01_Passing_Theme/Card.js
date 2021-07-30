import React from 'react';
import clsx from 'clsx';

export default function Card(props) {
  const classes = clsx({
    dark: props.theme === 'dark'
  });

  return <div className={classes}>{props.children}</div>;
}
