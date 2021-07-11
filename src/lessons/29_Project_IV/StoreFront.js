import React, { useState } from 'react';
import Product from './Product.js';

export default function StoreFront() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [validation, setValidation] = useState('');

  const handleAddProduct = (e) => {
    e.preventDefault;

    if (!name && !description) {
      setValidation('Please enter a name & description');
      return;
    }

    if (!name) {
      setValidation('Please enter a name');
      return;
    }

    if (!description) {
      setValidation('Please enter a description');
      return;
    }

    setProducts([
      ...products,
      { id: products.length, name: name, description: description }
    ]);
    setName('');
    setDescription('');
    setValidation('');
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <>
      <form onSubmit={handleAddProduct}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Enter the name"
            className="textfield"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            id="description"
            type="text"
            placeholder="Enter the description"
            className="textfield"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-footer">
          <div className="validation-message">{validation}</div>
          <input
            type="submit"
            className="btn btn-primary"
            value="Add product"
          />
        </div>
      </form>
      {products.length === 0 && (
        <div>
          <p>Add your first product</p>
        </div>
      )}
      <ul className="store-front">
        {products.map((product) => (
          <li>
            <Product details={product} />
            <button
              className="btn-outline btn-delete"
              onClick={() => handleDeleteProduct(product.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
