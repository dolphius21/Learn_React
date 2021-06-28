import React from 'react';

export default function Button({ children, disabled, type }) {
  return (
    <button className="ui-button" type={type} disabled={disabled}>
      {children}
    </button>
  );
}
