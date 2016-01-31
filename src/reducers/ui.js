import moment from 'moment'

const initialState = {
  year: moment().year(),
  month: moment().month() + 1,
  day: moment().day() + 1
}

export default function ui(state = initialState, action) {
  switch (action.type) {
    case Symbol.for('set-date'):
      return {
        ...state,
        year: action.year,
        month: action.month
      }

    default:
      return state
  }
}
