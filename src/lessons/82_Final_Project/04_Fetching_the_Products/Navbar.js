import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand">
        SuperM
      </NavLink>
      <ul>
        <li className="nav-item">
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
