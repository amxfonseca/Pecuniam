import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import MonthView from '../components/MonthView'
import YearView from '../components/YearView'
import DateControl from '../components/DateControl'

import { getMonth, getYear } from '../helpers/transaction-helper'

import { setDate } from '../actions/ui'

function OverviewContainer({ transactions, ui, setDate }) {
  return (
    <div>
      <DateControl
        setDate={setDate}
        date={ui.date}
      />
      <YearView
        transactions={transactions}
        date={ui.date}
      />
      <MonthView
        transactions={transactions}
        date={ui.date}
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
