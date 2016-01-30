const initialState = []

export default function transactions(state = initialState, action) {
  switch (action.type) {
    case Symbol.for('set-all-transactions'):
      return action.transactions

    default:
      return state
  }
}
