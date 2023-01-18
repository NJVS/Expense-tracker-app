import { createContext, useReducer } from 'react';
import { ExpenseReducer } from './ExpenseReducer';

// inital state 
const initialState = {
  transactions: [
    { id: 1, title: 'Flowers', amount: -20 },
    { id: 2, title: 'Salary', amount: 300 },
    { id: 3, title: 'Book', amount: -10 },
    { id: 4, title: 'Camera', amount: 150 }
  ]
}

// create context
export const ExpenseContext = createContext(initialState);

// provider component
export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ExpenseReducer, initialState);

  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }

  return (
    <ExpenseContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction
    }}>
      {children}
    </ExpenseContext.Provider>
  )
}