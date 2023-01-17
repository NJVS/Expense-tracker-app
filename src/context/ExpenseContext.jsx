import { createContext, useReducer } from 'react';
import { ExpenseReducer } from './ExpenseReducer';

// inital state 
const initialState = {
  transactions: [
    { id: 1, title: 'Flowers', amout: -20 },
    { id: 2, title: 'Salary', amout: 300 },
    { id: 3, title: 'Book', amout: -10 },
    { id: 4, title: 'Camera', amout: 150 }
  ]
}

// create context
export const ExpenseContext = createContext(initialState);

// provider component
export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ExpenseReducer, initialState);

  return (
    <ExpenseContext.Provider value={{
      transactions: state.transactions
    }}>
      {children}
    </ExpenseContext.Provider>
  )
}