import React from 'react'
import { months } from '../constants/date-constants'

function prevMonth(date, setDate) {
  setDate(date.clone().add(-1, 'month'))
}

function nextMonth(date, setDate) {
  setDate(date.clone().add(1, 'month'))
}

function prevYear(date, setDate) {
  setDate(date.clone().add(-1, 'year'))
}

function nextYear(date, setDate) {
  setDate(date.clone().add(1, 'year'))
}

function DateControl({ date, setDate }) {
  return (
    <div>
      <strong>{date.format('YYYY MM DD dddd')}</strong> <br />
      <button onClick={() => prevMonth(date, setDate)}>prev month</button>
      <button onClick={() => nextMonth(date, setDate)}>next month</button>
      <button onClick={() => prevYear(date, setDate)}>prev year</button>
      <button onClick={() => nextYear(date, setDate)}>next year</button>
    </div>
  )
}

export default DateControl
