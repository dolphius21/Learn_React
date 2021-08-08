import React, { useState, useEffect } from 'react';
import useFetch from './useFetch.js';
import Product from './Product.js';
import Loader from './Loader.js';

export default function Products() {
  const [products, setProducts] = useState([]);
  const { get, loading } = useFetch(
    'https://react-tutorial-demo.firebaseio.com/'
  );

  useEffect(() => {
    get('supermarket.json')
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div class="products-layout">
      <h1>Products</h1>
      <p>Take a look at our products</p>
      <div class="products-grid">
        {loading && <Loader />}
        {products.map((product) => {
          return <Product key={product.id} details={product} />;
        })}
      </div>
    </div>
  );
}
