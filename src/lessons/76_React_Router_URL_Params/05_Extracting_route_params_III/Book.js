import React from 'react';
import { useParams } from 'react-router-dom';

export default function Book() {
  const params = useParams();

  return (
    <>
      <h2>Book</h2>
      <p>
        Description of a {params.type} book with id {params.id}
      </p>
    </>
  );
}
