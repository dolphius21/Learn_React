import React from 'react';
import clsx from 'clsx';

export default function Input(props) {
  const { placeholder, type = 'text', className, required, ...rest } = props;
  const classes = clsx(
    {
      input: true
    },
    className
  );

  // Implement Input
  return (
    <label class="label">
      {placeholder}
      {required && <span class="input-required">*</span>}
      <div>
        <input
          className={classes}
          type={type}
          placeholder={placeholder}
          required={required}
          {...rest}
        />
      </div>
    </label>
  );
}
