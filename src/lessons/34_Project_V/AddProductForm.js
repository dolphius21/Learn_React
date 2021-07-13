import React from 'react';

export default function AddProductForm(props) {
  const {
    name,
    setName,
    description,
    setDescription,
    validation,
    onFormSubmit
  } = props;

  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <label htmlFor="product-name">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="product-name"
          placeholder="Enter the name"
          className="textfield"
        />
      </div>
      <div>
        <label htmlFor="product-description">Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id="product-description"
          placeholder="Enter the description"
          className="textfield"
        />
      </div>
      <div className="form-footer">
        <div className="validation-message">{validation}</div>
        <input type="submit" className="btn btn-primary" value="Add product" />
      </div>
    </form>
  );
}
