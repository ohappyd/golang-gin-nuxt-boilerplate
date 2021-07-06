module.exports = async function (app) {
  const items = await app.service('users').find({ paginate: false })
  if (items.length > 0) return

  app.service('users').create({
    email: 'admin@domain.com',
    password: 'admin',
    fname: 'Anderson'
  })
}
