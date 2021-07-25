import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Wallet() {
  const [transactions, setTransactions] = useState(() =>
    JSON.parse(localStorage.getItem('transactions'))
  );

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

// Specific to this chapter: makes it possible for you to reload the page
const reload = () => {
  console.log('Page reloaded');
  ReactDOM.unmountComponentAtNode(document.querySelector('#react-root'));
  ReactDOM.render(<Wallet />, document.querySelector('#react-root'));
};
reload();
const button = document.createElement('button');
button.textContent = 'Reload page';
button.addEventListener('click', reload);
document.body.appendChild(button);
