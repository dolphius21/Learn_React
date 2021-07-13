import React, { useState } from 'react';
import AddProductForm from './AddProductForm.js';
import ProductsList from './ProductsList.js';

export default function StoreFront() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [validation, setValidation] = useState('');

  function handleFormSubmit(event) {
    event.preventDefault();

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
      {
        id: products.length + 1,
        name,
        description
      }
    ]);
    setName('');
    setDescription('');
    setValidation('');
  }

  function handleDeleteClick(id) {
    setProducts(products.filter((product) => product.id !== id));
  }

  return (
    <>
      <AddProductForm
        onFormSubmit={handleFormSubmit}
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
        validation={validation}
      />
      <div>{products.length === 0 && <p>Add your first product</p>}</div>
      <ProductsList products={products} onDeleteClick={handleDeleteClick} />
    </>
  );
}
