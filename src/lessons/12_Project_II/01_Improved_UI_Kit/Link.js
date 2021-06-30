import React from 'react';
import clsx from 'clsx';

export default function Link({ children, className, ...rest }) {
  const classes = clsx('ui-link', className);
  return (
    <a className={classes} {...rest}>
      {children}
    </a>
  );
}
