/* eslint-disable no-unused-vars */
const db = require('../models')

const callHistoryController = async () => {
  const data = await db.Call.findAll()
  return data
}

module.exports = {
  callHistoryController,
}
