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
    const resetTransactions = transactions.slice(0, transactions.length);
    setTransactions([...resetTransactions]);
  }

  const transactionsList = transactions.map((transaction, index) => {
    return <li key={index}>{transaction}</li>;
  });

  return (
    <>
      <button onClick={handleDepositClick}>Deposit 10</button>
      <button onClick={handleWithdrawClick}>Withdraw 10</button>
      <h2>Total: </h2>
      <button onClick={handleClearClick}>Reset</button>
      <ul>{/*List transactions here*/}</ul>
    </>
  );
}

render(<Wallet />, document.querySelector('#react-root'));
