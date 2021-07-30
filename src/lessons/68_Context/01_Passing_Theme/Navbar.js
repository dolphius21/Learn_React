import React from 'react';
import Button from './Button.js';

export default function Navbar(props) {
  return (
    <>
      <Button theme={props.theme}>Login</Button>
      <Button theme={props.theme}>Register</Button>
    </>
  );
}
