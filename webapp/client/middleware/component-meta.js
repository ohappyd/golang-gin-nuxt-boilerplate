export default ({ route, store }) => {
  // Take the last value (latest route child)

  const component = route.meta.reduce(
    (component, meta) => meta.component || meta || component,
    null
  )
  store.commit('theme/SET_COMPONENT_META', component)
}
