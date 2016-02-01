import { getTransactions } from './transactions'

export function initialiseApp() {
  return dispatch => {
    dispatch({ type: Symbol.for('init') })
    dispatch(getTransactions())
  }
}

export function setDate(date) {
  return dispatch => {
    dispatch({
      type: Symbol.for('set-date'),
      date
    })
  }
}
