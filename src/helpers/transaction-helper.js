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

export function getYear(transactions, date) {
  return transactions.filter(transaction => {
    return date.isSame(transaction.date * 1000, 'year')
  })
}

export function getMonth(transactions, date) {
  return transactions.filter(transaction => {
    return date.isSame(transaction.date * 1000, 'month')
  })
}

export function getWeek(transactions, date) {
  return transactions.filter(transaction => {
    return date.isSame(transaction.date * 1000, 'week')
  })
}

export function getDay(transactions, date) {
  return transactions.filter(transaction => {
    return date.isSame(transaction.date * 1000, 'day')
  })
}
