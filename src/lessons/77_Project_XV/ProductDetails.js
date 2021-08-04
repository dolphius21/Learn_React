import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useFetch from './useFetch.js';

export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const params = useParams();
  const { get } = useFetch('https://react-tutorial-demo.firebaseio.com/');

  useEffect(() => {
    get(`productdetails/id${params.id}.json`)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Link to="/">Back home</Link>
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
          <img src={product.image} width="100" />
        </div>
      )}
    </div>
  );
}
