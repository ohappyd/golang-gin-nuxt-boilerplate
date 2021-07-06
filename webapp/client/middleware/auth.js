const isPublicRoute = (route, auth) => {
  for (let i = 0; i < auth.publicPages.length; i++) {
    const publicPageName = auth.publicPages[i]
    if (route.name.indexOf(publicPageName) > -1) return true
  }
  return false
}

export default function ({ store, redirect, route }) {
  const { auth } = store.state
  if (
    !process.env.disableAuth &&
    !isPublicRoute(route, auth) &&
    !auth.payload
  ) {
    const prefixRoute = route.meta[0] && route.meta[0].layout ? '/' + route.meta[0].layout : ''
    return redirect(prefixRoute + '/frontend/user/login/')
  }
}
