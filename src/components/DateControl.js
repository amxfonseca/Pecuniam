import React from 'react'
import { months } from '../constants/date-constants'

function prevMonth(year, month, setDate) {
  const newMonth = month - 1
  setDate(year, newMonth)
}

function nextMonth(year, month, setDate) {
  const newMonth = month + 1
  setDate(year, newMonth)
}

function prevYear(year, month, setDate) {
  const newYear = year - 1
  setDate(newYear, month)
}

function nextYear(year, month, setDate) {
  const newYear = year + 1
  setDate(newYear, month)
}

function DateControl({ year, month, setDate }) {
  const now = `${months[month - 1]} ${year}`

  return (
    <div>
      <strong>{now}</strong>
      <button onClick={() => prevMonth(year, month, setDate)}>prev month</button>
      <button onClick={() => nextMonth(year, month, setDate)}>next month</button>
      <button onClick={() => prevYear(year, month, setDate)}>prev year</button>
      <button onClick={() => nextYear(year, month, setDate)}>next year</button>
    </div>
  )
}

export default DateControl
