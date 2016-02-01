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

function YearView({ transactions, date }) {
  const incoming = getAllIncoming(transactions)
  const outgoing = getAllOutgoing(transactions)

  const dataIncoming = months.map((month, index) => {
    const newDate = date.clone().month(index)
    return sumAmount(getMonth(incoming, newDate))
  });

  const dataOutgoing = months.map((month, index) => {
    const newDate = date.clone().month(index)
    return sumAmount(getMonth(outgoing, newDate))
  });

  const labels = months.map((month, index) => {
    if (date.month() === index) {
      return `>${date.format('MMMM')}<`
    }
    const newDate = date.clone().month(index)
    return newDate.format('MMMM')
  })

  const datasets = [
    { data: dataOutgoing },
    { data: dataIncoming }
  ]

  return (
    <div>
      <LineChart datasets={datasets} labels={labels} />
    </div>
  )
}

export default YearView
