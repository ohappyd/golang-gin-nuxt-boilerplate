export default function (context) {
  const { from, redirect, route } = context
  if (!route.query.skin && from && from.query && from.query.skin) {
    return redirect(route.path + '?skin=' + from.query.skin)
  }
}
