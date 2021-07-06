const initMailsSampleData = require('./mails/mails.sample.js')
const initEventsSampleData = require('./events/events.sample.js')
const initRoomsSampleData = require('./rooms/rooms.sample.js')
const initMessagesSampleData = require('./messages/messages.sample.js')
const initInteractionsSampleData = require('./interactions/interactions.sample.js')
const initUsersSampleData = require('./users/users.sample.js')

module.exports = function (app) {
  // Inject all mock data, you can comment next lines
  initMailsSampleData(app)
  initEventsSampleData(app)
  initRoomsSampleData(app)
  initMessagesSampleData(app)
  initInteractionsSampleData(app)
  initUsersSampleData(app)
}
