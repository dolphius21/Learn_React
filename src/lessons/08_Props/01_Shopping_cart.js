import React from 'react';
import { render } from 'react-dom';

function ShoppingCart({ count }) {
  return <div>{count} items in your cart</div>;
}

const root = document.querySelector('#react-root');
render(<ShoppingCart count="5" />, root);
