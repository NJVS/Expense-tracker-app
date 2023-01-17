import { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import Transaction from './Transaction';

const TransactionList = () => {

  const { transactions } = useContext(ExpenseContext);

  console.log(transactions)

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transactions.map(transaction => (
          <Transaction key={transaction.id} data={transaction} />
        ))}


      </ul>
    </>
  )
}

export default TransactionList