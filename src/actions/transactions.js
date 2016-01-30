import { getAllTransactions } from '../services/api-service'

export function getTransactions() {
  return dispatch => {
    getAllTransactions().then(transactions => {
      dispatch({
        type: Symbol.for('set-all-transactions'),
        transactions
      })
    })
  }
}
