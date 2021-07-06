import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import auth from '@feathersjs/authentication-client'
import io from 'socket.io-client'
import { CookieStorage } from 'cookie-storage'
import feathersVuex, { initAuth } from 'feathers-vuex'
// Get the api url from the environment variable
const apiUrl = process.env.API_URL
let socket
// We won't use socket to comunicate from server to server

socket = io(apiUrl, { transports: ['websocket'] })

const transport = socketio(socket)
// const storage = new CookieStorage()

const appHooks = {
}

const feathersClient = feathers()
  .configure(transport)
  .configure(auth({ storage: window.localStorage }))
  // .configure(auth({ storage }))
  .hooks(appHooks)

socket.on('reconnecting', function (delay, attempt) {
  // console.log('On Disconnected ... trying to reconnect.')
})

socket.on('reconnect', function () {
  // console.log('On reconnect')
})

socket.on('connect', function () {
  // console.log('On connect', feathersClient)
})

socket.on('connect_error', function (e) {
  // Do something
  console.log('On connect_error', e)
})

export default feathersClient

// Setting up feathers-vuex
const { makeServicePlugin, makeAuthPlugin, BaseModel, models, FeathersVuex } = feathersVuex(
  feathersClient,
  {
    serverAlias: 'api', // optional for working with multiple APIs (this is the default value)
    idField: '_id', // Must match the id field in your database table/collection
    whitelist: ['$regex', '$options'],
    enableEvents: process.client // Prevent memory leak
  }
)

export { makeAuthPlugin, makeServicePlugin, BaseModel, models, FeathersVuex, initAuth }
