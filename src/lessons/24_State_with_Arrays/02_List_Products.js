import React, { useState } from 'react';
import { render } from 'react-dom';

function Wallet() {
  const [transactions, setTransactions] = useState([]);

  function handleDepositClick() {
    setTransactions([...transactions, 10]);
  }

  function handleWithdrawClick() {
    setTransactions([...transactions, -10]);
  }

  function handleClearClick() {
    setTransactions([]);
  }

  const transactionsList = transactions.map((transaction, index) => {
    return <li key={index}>{transaction}</li>;
  });

  return (
    <>
      <button onClick={handleDepositClick}>Deposit 10</button>
      <button onClick={handleWithdrawClick}>Withdraw 10</button>
      <h2>Total: {transactions.length}</h2>
      <button onClick={handleClearClick}>Reset</button>
      <ul>{transactionsList}</ul>
    </>
  );
}

render(<Wallet />, document.querySelector('#react-root'));
