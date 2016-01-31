import React from 'react'
import { connect } from 'react-redux'

import LineChart from '../components/LineChart'

import { months } from '../constants/date-constants'

import {
  getAllOutgoing,
  getAllIncoming,
  sumAmount,
  getMonth,
  getYear
} from '../helpers/transaction-helper'

function OverviewContainer({ transactions }) {
  const yearTransactions = getYear(transactions, 2015)

  const incoming = getAllIncoming(yearTransactions)
  const outgoing = getAllOutgoing(yearTransactions)

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

function mapStateToProps(state) {
  return {
    transactions: state
  }
}

export default connect(
  mapStateToProps,
  {}
)(OverviewContainer)
