import { getTransactions } from './transactions'

export function initialiseApp() {
  return dispatch => {
    dispatch({ type: Symbol.for('init') })
    dispatch(getTransactions())
  }
}
