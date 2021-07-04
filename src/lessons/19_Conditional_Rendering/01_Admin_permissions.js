import React from 'react';
import { render } from 'react-dom';
import NoPermission from './NoPermission.js';

function Admin({ userType }) {
  return userType === 'admin' ? (
    <div>
      <h1>Welcome Admin</h1>
      <p>The Admin portal allows you to manage all your items</p>
    </div>
  ) : (
    <NoPermission />
  );
}

// Sample usage (do not modify)
render(
  <>
    <Admin userType="admin" />
    <Admin userType="client" />
  </>,
  document.querySelector('#react-root')
);
