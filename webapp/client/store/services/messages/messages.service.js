 import feathersClient, {
   makeServicePlugin,
   BaseModel
 } from '@@/client/plugins/feathers'

 class Message extends BaseModel {
   constructor(data, options) {
     super(data, options)
   }
   // Required for $FeathersVuex plugin to work after production transpile.
   static modelName = 'Message'
   // Define default properties here
   static instanceDefaults() {
     return {}
   }
   static setupInstance(data) {
     return data
   }
 }
 const servicePath = 'messages'
 const servicePlugin = makeServicePlugin({
   idField: '_id',
   Model: Message,
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
