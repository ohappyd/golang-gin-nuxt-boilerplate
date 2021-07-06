const faker = require('faker')

module.exports = async function (app) {
  const items = await app.service('mails').find({ paginate: false })
  if (items.length > 0) return

  const totalRows = 300
  const currentDate = new Date()
  const idxAlert = [3, 10, 16, 46, 100, 150, 270]
  const idxUrgent = [7, 11, 35, 146, 210, 250, 227]
  const idxAttachment = [1, 3, 4, 7, 11, 13, 27, 35, 146, 210, 250, 227]

  for (let i = 1; i <= totalRows; i++) {
    const newDate = new Date(currentDate)
    const state = idxAlert.includes(i) ? 'warning' : idxUrgent.includes(i) ? 'danger' : ''
    app.service('mails').create({
      fromName: faker.name.findName(),
      fromMail: faker.internet.email(),
      from: faker.company.companyName(),
      subject: faker.company.catchPhrase(),
      content: faker.lorem.paragraphs() + '<br /><br />' + faker.lorem.paragraphs(),
      state: state,
      date: newDate,
      hasAttachment: idxAttachment.includes(i),
      isUnread: (i <= 5)
    })
    currentDate.setDate(currentDate.getDate() - 1)
  }

  // console.log(`Created ${totalRows} messages`)
}
