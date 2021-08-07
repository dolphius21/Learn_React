import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripeLoadedPromise = loadStripe(
  'PK_REPLACE_WITH_STRIPE_PUBLISHABLE_KEY'
);

export default function App() {
  function handleClick(event) {
    stripeLoadedPromise.then((stripe) => {
      stripe
        .redirectToCheckout({
          lineItems: [
            {
              price: 'REPLACE_WITH_PRICE_ID_HERE',
              quantity: 1
            }
          ],
          mode: 'payment',
          successUrl: 'https://react-tutorial.app/app.html',
          cancelUrl: 'https://react-tutorial.app/app.html'
        })
        .then((response) => {
          // this will only log if the redirect did not work
          console.log(response.error);
        })
        .catch((error) => {
          // wrong API key? you will see the error message here
          console.log(error);
        });
    });
  }

  return <button onClick={handleClick}>Pay</button>;
}
