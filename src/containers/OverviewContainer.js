import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import LineChart from '../components/LineChart'

import { months } from '../constants/date-constants'

import {
  getAllOutgoing,
  getAllIncoming,
  sumAmount,
  getMonth,
  getYear,
  getDay
} from '../helpers/transaction-helper'

function OverviewContainer({ transactions }) {
  const year = 2015
  const month = 7

  const monthTransactions = getMonth(getYear(transactions, year), month)

  const daysInMonth = moment(`${year}-${month}`, 'YYYY-MM').daysInMonth();
  const days = []

  const incoming = getAllIncoming(monthTransactions)
  const outgoing = getAllOutgoing(monthTransactions)

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

function mapStateToProps(state) {
  return {
    transactions: state
  }
}

export default connect(
  mapStateToProps,
  {}
)(OverviewContainer)
