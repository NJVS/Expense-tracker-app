import { useEffect, createContext, useReducer } from 'react';
import { ExpenseReducer } from './ExpenseReducer';

// inital state 
const initialState = {
  isLoading: true,
  transactions: [
    // { id: 1, title: 'Flowers', amount: -20 },
    // { id: 2, title: 'Salary', amount: 300 },
    // { id: 3, title: 'Book', amount: -10 },
    // { id: 4, title: 'Camera', amount: 150 }
  ]
}

// create context
export const ExpenseContext = createContext(initialState);

// provider component
export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ExpenseReducer, initialState);

  useEffect(() => {
    fetch('https://todo-app-881d2-default-rtdb.asia-southeast1.firebasedatabase.app/expenses.json')
      .then(res => res.json())
      .then(data => {
        const _transactions = [];

        Object.entries(data).forEach(item => {
          _transactions.push({ id: item[0], ...item[1] });
        });

        dispatch({
          type: 'FETCH_SUCCESS',
          payload: _transactions.reverse()
        })
      })
  }, [])

  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }

  function addTransaction(item) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: item
    })
  }

  return (
    <ExpenseContext.Provider value={{
      isLoading: state.isLoading,
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
    }}>
      {children}
    </ExpenseContext.Provider>
  )
}