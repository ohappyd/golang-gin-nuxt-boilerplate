const defaultState = {
  routeHistory: []
}

const actions = {
  getRoutes: (context) => {
    return defaultState.routeHistory
  }
}

const mutations = {
  ADD_ROUTE: (state, route) => {
    defaultState.routeHistory.unshift(route)
  }
}

const getters = {
  routeHistory: state => {
    if (state) { return state.routeHistory } else {
      return [
        {
          fullPath: '/admin/dashboard/',
          name: 'admin-dashboard',
          params: {},
          path: '/admin/dashboard/',
          query: {}
        }
      ]
    }
  }
}

export default {
  namespaced: true,
  state: defaultState,
  getters,
  actions,
  mutations
}
