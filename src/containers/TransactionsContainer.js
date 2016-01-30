import React from 'react'
import { connect } from 'react-redux';

import {
  getAllOutgoing,
  getAllIncoming,
  sumAmount,
  getMonth
} from '../helpers/transaction-helper'

function TransactionsContainer(props) {
  const current = getMonth(props.transactions, 2015, 12)
  const spent = sumAmount(getAllOutgoing(current))
  const earned = sumAmount(getAllIncoming(current))

  return (
    <main>
      <h1> {spent} vs {earned} </h1>
    </main>
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
)(TransactionsContainer)
