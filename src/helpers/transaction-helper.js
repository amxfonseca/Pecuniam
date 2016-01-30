import moment from 'moment'

export function getAllOutgoing(transactions) {
  return transactions.filter(transaction => transaction.outgoing)
}

export function getAllIncoming(transactions) {
  return transactions.filter(transaction => !transaction.outgoing)
}

export function sumAmount(transactions) {
  const cents = transactions.reduce((prev, next) => {
    return prev + (next.amount * 100)
  }, 0)

  return cents / 100
}

export function getYear(transactions, year) {
  return transactions.filter(transaction => {
    return moment(transaction.date).isSame(`${year}-01-01`, 'year')
  })
}

export function getMonth(transactions, year, month) {
  return transactions.filter(transaction => {
    return moment(transaction.date).isSame(`${year}-${month}-01`, 'month')
  })
}
