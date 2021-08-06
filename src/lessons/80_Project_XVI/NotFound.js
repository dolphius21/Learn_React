import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <Link to="/">back to homepage</Link>
      <h2>Page not found</h2>
      <p>The page could not be found</p>
    </>
  );
}
