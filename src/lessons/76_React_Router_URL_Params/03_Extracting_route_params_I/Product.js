import React from 'react';
import { useParams } from 'react-router-dom';

export default function Product() {
  const params = useParams();

  return (
    <>
      <h2>Product</h2>
      <p>Description for the product with id: {params.id}</p>
    </>
  );
}
