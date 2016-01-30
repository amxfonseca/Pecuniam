import React from 'react'
import { connect } from 'react-redux';

function renderTransactions(transactions) {
  return transactions.map(transaction => (
    <div>{transaction.name}</div>
  ))
}

function TransactionsContainer(props) {
  return (
    <main>
      {renderTransactions(props.transactions)}
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
