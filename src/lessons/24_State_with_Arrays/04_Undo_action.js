import React, { useState } from 'react';
import { render } from 'react-dom';

function Wallet() {
  const [transactions, setTransactions] = useState([]);

  function handleDepositClick() {
    setTransactions([...transactions, transactions.length + 1]);
  }

  function handleUndoClick() {
    const undoTransacations = transactions.slice(0, transactions.length - 1);
    setTransactions(undoTransacations);
  }

  return (
    <>
      <button onClick={handleDepositClick}>Deposit</button>
      <button onClick={handleUndoClick}>Undo</button>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>{transaction}</li>
        ))}
      </ul>
    </>
  );
}

render(<Wallet />, document.querySelector('#react-root'));
