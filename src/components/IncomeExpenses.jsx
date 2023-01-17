import { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

const IncomeExpenses = () => {
  const { transactions } = useContext(ExpenseContext);
  const toCurrency = new Intl.NumberFormat("en-us", {
    currency: 'USD',
    style: 'currency'
  })

  const income = transactions.filter(item => item.amount > 0).map(item => item.amount).reduce((a, b) => a + b, 0);
  const expense = transactions.filter(item => item.amount < 0).map(item => item.amount).reduce((a, b) => a + b, 0);

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>
          +{toCurrency.format(income)}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>
          {toCurrency.format(expense)}
        </p>
      </div>
    </div>
  )
}

export default IncomeExpenses