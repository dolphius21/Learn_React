import React, { useState } from 'react';
import { render } from 'react-dom';

function OrderInsurance() {
  const [order, setOrder] = useState({
    id: 1,
    items: [1, 4, 10]
  });

  const handleAdd = () => {
    setOrder({ ...order, insurance: 'basic' });
  };

  const handleRemove = () => {
    const { insurance, ...rest } = order;
    setOrder(rest);
  };

  return (
    <div>
      <h1>Your order</h1>
      {order.insurance ? <p>Order is insured</p> : <p>Order is not insured</p>}
      <button onClick={handleAdd} disabled={order.insurance === 'basic'}>
        Add insurance
      </button>
      <button onClick={handleRemove} disabled={order.insurance === undefined}>
        Remove insurance
      </button>
    </div>
  );
}

render(<OrderInsurance />, document.querySelector('#react-root'));
