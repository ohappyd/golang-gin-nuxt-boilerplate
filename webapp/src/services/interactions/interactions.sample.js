const { getRandomUserList } = require('../../util/sampleData/user/index.js')
const faker = require('faker')

function randomIntFromInterval (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

module.exports = async function (app) {
  const items = await app.service('interactions').find({ paginate: false })
  if (items.length > 0) return

  const totalRows = 50
  const currentDate = new Date()
  const interactionTypes = ['phone', 'chat', 'email', 'sms', 'social']

  for (let i = 1; i <= totalRows; i++) {
    const newDate = new Date(currentDate)
    const idxType = randomIntFromInterval(0, interactionTypes.length - 1)
    let randomHour = randomIntFromInterval(0, 23)
    let randomMinute = randomIntFromInterval(0, 59)
    if (randomHour.toString().length === 1) randomHour = '0' + randomHour
    if (randomMinute.toString().length === 1) randomMinute = '0' + randomMinute
    app.service('interactions').create({
      type: interactionTypes[idxType],
      subject: faker.name.firstName() + ' ' + faker.name.lastName(),
      content: faker.hacker.phrase(), // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      date: newDate,
      time: randomHour + ':' + randomMinute,
      users: getRandomUserList(3)
    })
    currentDate.setDate(currentDate.getDate() - 1)
  }

  console.log(`Created ${totalRows} interactions`)
}
