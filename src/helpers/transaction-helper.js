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
    return moment(transaction.date * 1000)
      .isSame(`${year}-01-01`, 'year')
  })
}

export function getMonth(transactions, month) {
  return transactions.filter(transaction => {
    const year = moment(transaction.date * 1000).get('year')
    const monthFormatted = month.toString().length === 1 ? `0${month}` : month

    return moment(transaction.date * 1000)
      .isSame(`${year}-${monthFormatted}-01`, 'month')
  })
}

export function getWeek(transactions, week) {
  return transactions.filter(transaction => {
    return moment(transaction.date * 1000).isoWeek() === week
  })
}
