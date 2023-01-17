import { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

const TransactionList = () => {

  const transaction = useContext(ExpenseContext);

  console.log(transaction)

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        <li className='minus'>
          Cash <span>-$400</span><button className='delete-btn'>x</button>
        </li>
      </ul>
    </>
  )
}

export default TransactionList