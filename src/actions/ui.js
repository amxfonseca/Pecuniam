import { getTransactions } from './transactions'

export function initialiseApp() {
  return dispatch => {
    dispatch({ type: Symbol.for('init') })
    dispatch(getTransactions())
  }
}

export function setDate(year, month) {
  return dispatch => {
    dispatch({
      type: Symbol.for('set-date'),
      year,
      month
    })
  }
}
