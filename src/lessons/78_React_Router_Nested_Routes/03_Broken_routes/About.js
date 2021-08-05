import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <h1>About page</h1>

      <p>We are a supermarket app.</p>

      <Link to="/">Back home</Link>
    </>
  );
}
