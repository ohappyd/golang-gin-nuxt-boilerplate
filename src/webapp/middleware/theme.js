import layoutList from '@@/config/layouts.json'

export default ({ route, store }) => {
  let skin = 'default'
  // Take the last value (latest route child)
  if (route.query.skin) { skin = route.query.skin } else if (route.meta[0] && route.meta[0].layout) {
    skin = layoutList.layouts[route.meta[0].layout].skin
  }

  store.commit('theme/SET_SKIN', skin)
}
