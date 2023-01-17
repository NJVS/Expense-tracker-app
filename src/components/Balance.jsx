import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { toCurrency } from '../utils';

const Balance = () => {

  const { transactions } = useContext(ExpenseContext);
  const balance = transactions.map(transaction => transaction.amount).reduce((a, b) => a + b, 0);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>{toCurrency(balance)}</h1>
    </>
  )
}

export default Balance