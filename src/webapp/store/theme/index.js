
const state = () => ({
  componentMeta: null,
  skin: 'default'
})

const mutations = {
  SET_COMPONENT_META (state, payload) {
    state.componentMeta = payload
  },
  SET_SKIN (state, skin) {
    state.skin = skin
  }
}

const actions = {
  setComponentMeta (context, payload) {
    context.commit('SET_COMPONENT_META', payload)
  }
}

const getters = {
  getComponentMeta (state) {
    return state.componentMeta
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
