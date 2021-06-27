import React from 'react';

function getDropdownMenu() {
  return (
    <ul id="dropdown-menu" className="dropdown">
      <li>Profile</li>
      <li>Orders</li>
      <li className="separator"></li>
      <li>Logout</li>
    </ul>
  );
}

// sample usage (do not modify)
console.log(getDropdownMenu());
