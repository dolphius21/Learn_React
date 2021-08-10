import React from 'react';

export default function Cart({ cart }) {
  return (
    <div className="cart-layout">
      {cart.length < 1 ? (
        <div>
          <h1>Your Cart</h1>
          <p>You have not added any product to your cart yet.</p>
        </div>
      ) : (
        <table class="table table-cart">
          <thead>
            <tr>
              <th width="25%" class="th-product">
                Product
              </th>
              <th width="20%">Unit price</th>
              <th width="10%">Quanity</th>
              <th width="25%">Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => {
              const { id, name, image, price, quantity } = product;
              return (
                <tr key={id}>
                  <td>
                    <img src={image} width="30" height="30" alt={name} />
                    {name}
                  </td>
                  <td>${price}</td>
                  <td>{quantity}</td>
                  <td>
                    <strong>${price * quantity}</strong>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="2"></th>
              <th class="cart-highlight">Total</th>
              <th class="cart-highlight">
                $
                {cart.reduce((total, currProduct) => {
                  return (total += currProduct.price * currProduct.quantity);
                }, 0)}
              </th>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
}
