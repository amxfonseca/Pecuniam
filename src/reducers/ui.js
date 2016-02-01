import moment from 'moment'

const initialState = {
  date: moment()
}

export default function ui(state = initialState, action) {
  switch (action.type) {
    case Symbol.for('set-date'):
      return {
        ...state,
        date: action.date
      }

    default:
      return state
  }
}
