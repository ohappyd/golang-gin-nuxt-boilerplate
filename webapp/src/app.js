const path = require('path')
const favicon = require('serve-favicon')
const compress = require('compression')
const helmet = require('helmet')
const cors = require('cors')
const logger = require('./logger')

const feathers = require('@feathersjs/feathers')
const configuration = require('@feathersjs/configuration')
const express = require('@feathersjs/express')
const socketio = require('@feathersjs/socketio')

const middleware = require('./middleware')
const services = require('./services')
const appHooks = require('./app.hooks')
const channels = require('./channels')

const authentication = require('./authentication')
const app = express(feathers())

const { loadNuxt, build } = require('nuxt')
const isDev = process.env.NODE_ENV !== 'production'

async function start () {
  // Load app configuration
  app.configure(configuration())
  // Enable security, CORS, compression, favicon and body parsing
  app.use(helmet({ frameguard: false }))
  app.use(cors())
  app.use(compress())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(favicon(path.join(app.get('public'), 'favicon.ico')))

  // Set up Plugins and providers
  app.configure(express.rest())
  app.configure(socketio())

  // Configure other middleware (see `middleware/index.js`)
  // app.configure(middleware)

  // We get Nuxt instance
  const nuxt = await loadNuxt(isDev ? 'dev' : 'start')
  // Build only in dev mode with hot-reloading
  if (isDev) {
    build(nuxt)
  }

  // Set up our services (see `services/index.js`)
  app.configure(services)
  app.configure(authentication)
  // Set up event channels (see channels.js)
  app.configure(channels)

  // Render every route with Nuxt.js
  app.use(nuxt.render)

  // Configure a middleware for 404s and the error handler
  app.use(express.notFound())
  app.use(express.errorHandler({ logger }))

  app.hooks(appHooks)
}
start()
module.exports = app
