import pluginStore from './store/'

export default ({ app, store }) => {
  // Dynamic register store module
  store.registerModule('history', pluginStore)

  // Before every route feed history store
  app.router.beforeEach(
    (to, from, next) => {
      store.commit('history/ADD_ROUTE', to)

      next()
    }
  )
}
