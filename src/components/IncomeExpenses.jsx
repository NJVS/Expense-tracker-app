import { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { toCurrency } from '../utils';

const IncomeExpenses = () => {
  const { transactions } = useContext(ExpenseContext);
  const amounts = transactions.map(item => item.amount);
  const income = amounts.filter(amount => amount > 0).reduce((a, b) => a + b, 0);
  const expense = amounts.filter(amount => amount < 0).reduce((a, b) => a + b, 0);

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>
          +{toCurrency(income)}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>
          {toCurrency(expense)}
        </p>
      </div>
    </div>
  )
}

export default IncomeExpenses