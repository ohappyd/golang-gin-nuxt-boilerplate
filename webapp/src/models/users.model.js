const NeDB = require('nedb')
const path = require('path')
/*
You can easily change the database server to anyone (which has native connector to feathers.
See more at https://docs.feathersjs.com/guides/basics/databases.html)
*/
module.exports = function (app) {
  const dbPath = app.get('nedb')
  const Model = new NeDB({
    filename: path.join(dbPath, 'users.db'),
    autoload: true
  })

  Model.ensureIndex({ fieldName: 'email', unique: true })

  return Model
}
