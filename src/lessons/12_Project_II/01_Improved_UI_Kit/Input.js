// Input.js
import React from 'react';
import clsx from 'clsx';

export default function Input({ type = 'text', className, ...rest }) {
  const classes = clsx('ui-textfield', className);
  return <input className={classes} type={type} {...rest} />;
}
