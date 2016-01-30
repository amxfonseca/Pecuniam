import request from 'superagent'

export function getAllTransactions() {
  return new Promise((resolve, reject) => {
    request.get('/all', (error, response) => {
      if (error) reject(error)
      resolve(response.body)
    })
  })
}
