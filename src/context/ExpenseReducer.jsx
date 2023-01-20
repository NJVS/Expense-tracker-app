export function ExpenseReducer(state, action) {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        isLoading: false,
        transactions: action.payload
      }
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(item => item.id !== action.payload)
      }
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      }
    default:
      return state
  }
}