import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <h2>Page not found</h2>
      <p>
        The page could not be found. <Link to="/">Go back</Link> to the home
        page?
      </p>
    </>
  );
}
