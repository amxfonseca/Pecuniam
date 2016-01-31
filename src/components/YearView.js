import React from 'react'
import moment from 'moment'

import LineChart from './LineChart'

import { months } from '../constants/date-constants'

import {
  getAllOutgoing,
  getAllIncoming,
  sumAmount,
  getMonth
} from '../helpers/transaction-helper'

function YearView({ transactions, year, month }) {
  const incoming = getAllIncoming(transactions)
  const outgoing = getAllOutgoing(transactions)

  const dataIncoming = months.map((month, index) => {
    const monthIndex = index + 1
    return sumAmount(getMonth(incoming, monthIndex))
  });

  const dataOutgoing = months.map((month, index) => {
    const monthIndex = index + 1
    return sumAmount(getMonth(outgoing, monthIndex))
  });

  const datasets = [
    { data: dataOutgoing },
    { data: dataIncoming }
  ]

  return (
    <div>
      <LineChart datasets={datasets} labels={months} />
    </div>
  )
}

export default YearView
