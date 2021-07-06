// Initializes the `rooms` service on path `/rooms`
const { Interactions } = require('./interactions.class')
const createModel = require('../../models/interactions.model')
const hooks = require('./interactions.hooks')

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  }

  // Initialize our service with any options it requires
  app.use('/interactions', new Interactions(options, app))

  // Get our initialized service so that we can register hooks
  const service = app.service('interactions')

  service.hooks(hooks)
}
