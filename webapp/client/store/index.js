import { makeAuthPlugin, initAuth, models } from '~/plugins/feathers'
const auth = makeAuthPlugin({
  userService: 'users',
  state: {
    publicPages: [
      'frontend-user-login',
      'frontend'
    ]
  },
  actions: {
    onInitAuth ({ state, dispatch }, payload) {
      if (payload) {
        dispatch('authenticate', { strategy: 'jwt', accessToken: state.accessToken })
          .then((result) => {
            // handle success like a boss
            console.log('loged in')
          })
          .catch((error) => {
            // handle error like a boss
            console.log(error)
          })
      }
    }
  }
})

const requireServices = require.context(
  // The path where the service modules live
  './services',
  // Whether to look in subfolders
  true,
  // Only include .js files (prevents duplicate imports`)
  /.js$/
)
const servicePlugins = requireServices
  .keys()
  .map(modulePath => requireServices(modulePath).default)

export const modules = {
  // ...customModules
}

export const state = () => ({
  // Custom state
})

export const mutations = {
  // Custom mutations
}

export const actions = {
  // Custom actions
  nuxtServerInit ({ commit, dispatch }, { req }) {
    return initAuth({
      commit,
      dispatch,
      req,
      moduleName: 'auth',
      cookieName: 'feathers-jwt'
    })
  },
  nuxtClientInit ({ state, dispatch, commit }, context) {
    // hydrateApi({ api: models.api })

    if (state.auth.accessToken) {
      return dispatch('auth/onInitAuth', state.auth.payload)
    }
  }
}

export const getters = {
  // Custom getters
}

export const plugins = [ ...servicePlugins, auth ]
