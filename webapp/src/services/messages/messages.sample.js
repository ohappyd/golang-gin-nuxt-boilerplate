const faker = require('faker')

module.exports = async function (app) {
  const items = await app.service('messages').find({ paginate: false })
  if (items.length > 0) return

  this.thisMonth = (d, h, m) => {
    const t = new Date()
    return new Date(t.getFullYear(), t.getMonth(), d, h || 0, m || 0)
  }

  const currentDate = new Date()
  const totalRoomsRows = 20
  const totalMessagesRowsByIdx = [7, 11, 35, 7, 11, 35, 7, 11, 35, 7, 11, 35]
  const statusList = [ 'online', 'chatting', 'busy', 'dnd', 'disconnected' ]

  for (let i = 1; i <= totalRoomsRows; i++) {
    const newDate = new Date(currentDate)
    currentDate.setDate(currentDate.getDate() - 1)
    const modVal = i % 5
    const modVal2 = (i + 2) % 10
    const lastName = faker.name.lastName()
    app
      .service('rooms')
      .create({
        fromName: faker.name.firstName() + ' ' + lastName.charAt(0) + '.',
        date: newDate,
        lastMessage: faker.hacker.phrase(),
        avatar: modVal2 + '.jpg',
        status: statusList[modVal]
      })
      .then(room => {
        for (let x = 1; x < totalMessagesRowsByIdx[x]; x++) {
          const newMessage = {
            room: room._id,
            date: newDate,
            message: faker.lorem.sentences(),
            isFromThird: x % 2 === 0,
            avatar: modVal + '.jpg'
          }
          app.service('messages').create(newMessage)
        }
      })
  }
}
