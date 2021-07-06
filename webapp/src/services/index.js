const users = require('./users/users.service.js')
const mails = require('./mails/mails.service.js')
const events = require('./events/events.service.js')
const rooms = require('./rooms/rooms.service.js')
const messages = require('./messages/messages.service.js')
const interactions = require('./interactions/interactions.service.js')

const sample = require('./index.sample')

module.exports = function (app) {
  // Configure all backend services
  app.configure(users)
  app.configure(mails)
  app.configure(events)
  app.configure(rooms)
  app.configure(messages)
  app.configure(interactions)

  // Generate sample data
  sample(app)
}
