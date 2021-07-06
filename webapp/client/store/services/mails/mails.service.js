 import feathersClient, {
   makeServicePlugin,
   BaseModel
 } from '@@/client/plugins/feathers'

 class Mail extends BaseModel {
   constructor(data, options) {
     super(data, options)
   }
   // Required for $FeathersVuex plugin to work after production transpile.
   static modelName = 'Mail'
   // Define default properties here
   static instanceDefaults() {
     return {}
   }
   static setupInstance(data) {
     return data
   }
 }
 const servicePath = 'mails'
 const servicePlugin = makeServicePlugin({
   idField: '_id',
   Model: Mail,
   service: feathersClient.service(servicePath),
   nameStyle: 'path',
   servicePath
 })

 // Setup the client-side Feathers hooks.
 feathersClient.service(servicePath).hooks({
   before: {
     all: [],
     find: [],
     get: [],
     create: [],
     update: [],
     patch: [],
     remove: []
   },
   after: {
     all: [],
     find: [],
     get: [],
     create: [],
     update: [],
     patch: [],
     remove: []
   },
   error: {
     all: [],
     find: [],
     get: [],
     create: [],
     update: [],
     patch: [],
     remove: []
   }
 })

 export default servicePlugin
