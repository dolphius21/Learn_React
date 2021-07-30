import React from 'react';
import clsx from 'clsx';

export default function Button(props) {
  const classes = clsx({
    dark: props.theme === 'dark'
  });

  return <button className={classes}>{props.children}</button>;
}
