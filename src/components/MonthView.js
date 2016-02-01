import React from 'react'
import moment from 'moment'

import LineChart from './LineChart'

import {
  getAllOutgoing,
  getAllIncoming,
  sumAmount,
  getMonth,
  getDay
} from '../helpers/transaction-helper'

function MonthView({ transactions, date }) {
  const daysInMonth = date.daysInMonth();
  const days = []

  const filtered = getMonth(transactions, date)
  const incoming = getAllIncoming(filtered)
  const outgoing = getAllOutgoing(filtered)

  const dataIncoming = []
  const dataOutgoing = []

  for (let i = 0; i < daysInMonth; i++) {
    const newDate = date.clone().date(i)

    dataIncoming.push(sumAmount(getDay(incoming, newDate)))
    dataOutgoing.push(sumAmount(getDay(outgoing, newDate)))

    if (date.date() === i) {
      days.push(`>${newDate.format('DD')}<`)
    } else {
      days.push(newDate.format('DD'))
    }
  }

  const datasets = [
    { data: dataOutgoing },
    { data: dataIncoming }
  ]

  return (
    <div>
      <LineChart datasets={datasets} labels={days} />
    </div>
  )
}

export default MonthView
