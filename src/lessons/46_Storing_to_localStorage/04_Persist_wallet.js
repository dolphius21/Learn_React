import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

function Wallet() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  function handleDepositClick() {
    setTransactions([...transactions, 10]);
  }

  function handleWithdrawClick() {
    setTransactions([...transactions, -10]);
  }

  function handleClearClick() {
    setTransactions([]);
  }

  // https://codetogo.io/how-to-sum-items-of-array-in-javascript/
  const sum = transactions.reduce((total, current) => total + current, 0);

  return (
    <>
      <button onClick={handleDepositClick}>Deposit 10</button>
      <button onClick={handleWithdrawClick}>Withdraw 10</button>
      <h2>Total: {sum}</h2>
      <button onClick={handleClearClick}>Reset</button>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>{transaction}</li>
        ))}
      </ul>
    </>
  );
}

render(<Wallet />, document.querySelector('#react-root'));
