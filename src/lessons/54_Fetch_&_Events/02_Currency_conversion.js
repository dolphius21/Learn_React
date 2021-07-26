import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

function CurrencyConversion() {
  const [currency, setCurrency] = useState('');
  const [rate, setRate] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (currency) {
      setIsLoading(true);
      fetch(
        `https://react-tutorial-demo.firebaseio.com/currencies/${currency}.json`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setRate(data);
          }
        })
        .catch((err) => console.error(err))
        .finally(() => setIsLoading(false));
    }
  }, [currency]);

  function handleCurrencyChange(event) {
    setCurrency(event.target.value);
  }

  return (
    <>
      <h2>Currency rates</h2>
      <select onChange={handleCurrencyChange} disabled={isLoading}>
        <option value="">Select a currency</option>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="cad">CAD</option>
      </select>
      <h3>
        1 {currency.toUpperCase()} = {rate} USD
      </h3>
    </>
  );
}

render(<CurrencyConversion />, document.querySelector('#react-root'));
