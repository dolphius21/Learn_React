import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import Product from './Product';

export default function StoreFront() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://react-tutorial-demo.firebaseio.com/products.json')
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setProducts(data);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="store-front">
      {isLoading && <Loader />}
      {products &&
        products.map((product) => (
          <Product key={product.id} details={product} />
        ))}
    </div>
  );
}
