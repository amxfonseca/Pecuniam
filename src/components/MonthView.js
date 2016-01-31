import React from 'react'
import moment from 'moment'

import LineChart from './LineChart'

import {
  getAllOutgoing,
  getAllIncoming,
  sumAmount,
  getDay
} from '../helpers/transaction-helper'

function MonthView({ transactions, year, month }) {
  const daysInMonth = moment(`${year}-${month}`, 'YYYY-MM').daysInMonth();
  const days = []

  const incoming = getAllIncoming(transactions)
  const outgoing = getAllOutgoing(transactions)

  const dataIncoming = []
  const dataOutgoing = []

  for (let i = 0; i < daysInMonth; i++) {
    const day = i + 1
    dataIncoming.push(sumAmount(getDay(incoming, day)))
    dataOutgoing.push(sumAmount(getDay(outgoing, day)))

    days.push(day)
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
