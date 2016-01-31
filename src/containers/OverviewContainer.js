import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import MonthView from '../components/MonthView'
import YearView from '../components/YearView'
import DateControl from '../components/DateControl'

import { getMonth, getYear } from '../helpers/transaction-helper'

import { setDate } from '../actions/ui'

function OverviewContainer({ transactions, ui, setDate }) {
  const { year, month, day } = ui

  const yearTransactions = getYear(transactions, year)
  const monthTransactions = getMonth(yearTransactions, month)

  return (
    <div>
      <YearView
        transactions={yearTransactions}
        year={year}
      />
      <MonthView
        transactions={monthTransactions}
        year={year}
        month={month}
      />
      <DateControl
        setDate={setDate}
        year={year}
        month={month}
      />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    transactions: state.transactions,
    ui: state.ui
  }
}

export default connect(
  mapStateToProps,
  { setDate }
)(OverviewContainer)
