import React from 'react';

export default function Input({ children, name, type = 'text', placeholder }) {
  return (
    <input
      className="ui-textfield"
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );
}
