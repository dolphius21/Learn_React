import React from 'react';
import clsx from 'clsx';

export default function Button({ children, className, ...rest }) {
  const classes = clsx('ui-button', className);
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
