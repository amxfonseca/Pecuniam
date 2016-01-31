import React from 'react'
import { connect } from 'react-redux'


function TransactionsContainer(props) {
  return (
    <div>
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
)(TransactionsContainer)
