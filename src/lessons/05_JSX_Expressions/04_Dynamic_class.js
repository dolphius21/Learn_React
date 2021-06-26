import React from 'react';

function getPaymentButton(user) {
  let name = 'disabled';
  if (user.is_loggedin) {
    name = 'clickable';
  }
  return <button className={name}>Pay</button>;
}

// sample usage (do not modify)
const user = {
  id: 1,
  is_loggedin: true
};
console.log(getPaymentButton(user));
