// Implement Button here
import React from 'react';
import clsx from 'clsx';

export default function Button(props) {
  const { className, outline, children, ...rest } = props;
  const classes = clsx(
    {
      btn: true,
      'btn-default': !outline,
      'btn-outline': outline
    },
    className
  );

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
