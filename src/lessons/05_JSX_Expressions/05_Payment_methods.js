import React from 'react';

function getPaymentMethod(name) {
  return <li className={`payment-method option-${name}`}>{name}</li>;
}

// sample usage (do not modify)
console.log(getPaymentMethod('card'));
console.log(getPaymentMethod('paypal'));
