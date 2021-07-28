import React, { useState } from 'react';
import ProductsList from './ProductsList.js';
import AddProductForm from './AddProductForm.js';

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

    fetch('https://api.learnjavascript.online/demo/react/admin/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        description
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
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
      })
      .catch((err) => console.error(err));
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleDeleteClick(id) {
    setProducts(products.filter((product) => product.id !== id));
  }

  return (
    <>
      <AddProductForm
        name={name}
        description={description}
        validation={validation}
        onNameChange={handleNameChange}
        onDescriptionChange={handleDescriptionChange}
        onFormSubmit={handleFormSubmit}
      />
      <div>{products.length === 0 && <p>Add your first product</p>}</div>
      <ProductsList products={products} onDeleteClick={handleDeleteClick} />
    </>
  );
}
