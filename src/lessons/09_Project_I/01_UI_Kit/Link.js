import React from 'react';

export default function Link({ children, href }) {
  return (
    <a className="ui-link" href={href}>
      {children}
    </a>
  );
}
