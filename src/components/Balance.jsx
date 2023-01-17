import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

const Balance = () => {

  const { transactions } = useContext(ExpenseContext);
  const balance = transactions.map(transaction => transaction.amount).reduce((a, b) => a + b, 0);
  const currency = new Intl.NumberFormat("en-us", {
    currency: "USD",
    style: "currency",
  })

  return (
    <>
      <h4>Your Balance</h4>
      <h1>{currency.format(balance)}</h1>
    </>
  )
}

export default Balance