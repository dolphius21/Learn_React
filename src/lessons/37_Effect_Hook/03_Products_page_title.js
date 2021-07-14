import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (products.length === 0) {
      document.title = 'Add your first product';
    }
    if (products.length === 1) {
      document.title = 'You have 1 product';
    }
    if (products.length > 1) {
      document.title = `You have ${products.length} products`;
    }
  });

  function handleButtonClick() {
    setProducts([
      ...products,
      {
        id: products.length
      }
    ]);
  }

  return (
    <>
      <h2>{products.length} times clicked</h2>
      <button onClick={handleButtonClick}>Add a product</button>
    </>
  );
}

render(<Products />, document.querySelector('#react-root'));
