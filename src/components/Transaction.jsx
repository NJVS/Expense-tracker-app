import { useContext } from 'react';
import { toCurrency } from '../utils';
import { ExpenseContext } from '../context/ExpenseContext';

const Transaction = ({ data }) => {

  const { deleteTransaction } = useContext(ExpenseContext);

  return (
    <li className={data.amount < 0 ? 'minus' : 'plus'}>
      {data.title} <span>{toCurrency(data.amount)}</span>
      <button className='delete-btn' onClick={() => deleteTransaction(data.id)}>x</button>
    </li>
  )
}

export default Transaction