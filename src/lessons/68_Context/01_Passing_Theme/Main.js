import React from 'react';
import Card from './Card.js';

export default function Main(props) {
  return (
    <>
      <Card theme={props.theme}>Hero card</Card>
      <Card theme={props.theme}>Details card</Card>
    </>
  );
}
