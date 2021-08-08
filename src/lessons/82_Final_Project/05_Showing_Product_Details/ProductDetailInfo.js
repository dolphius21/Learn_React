import React from 'react';
import Button from './Button.js';

export default function ProductDetailInfo(props) {
  const { price } = props;

  return (
    <>
      <p>
        DESCRIPTION sold at <strong>${price}</strong> per piece.
      </p>
      <Button>${price}</Button>
    </>
  );
}
