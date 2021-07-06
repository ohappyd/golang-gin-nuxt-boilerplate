module.exports = async function (app) {
  const items = await app.service('events').find({ paginate: false })
  if (items.length > 0) return

  this.thisMonth = (d, h, m) => {
    const t = new Date()
    return new Date(t.getFullYear(), t.getMonth(), d, h || 0, m || 0)
  }

  const dataArr = [
    {
      startDate: '2018-01-05'
    },
    {
      startDate: this.thisMonth(15, 18, 30)
    },
    {
      startDate: this.thisMonth(15),
      title: 'Single-day event with a long title'
    },
    {
      startDate: this.thisMonth(7, 9, 25),
      endDate: this.thisMonth(10, 16, 30),
      title: 'Multi-day event with a long title and times'
    },
    {
      startDate: this.thisMonth(20),
      title: 'My Birthday!',
      classes: 'birthday',
      url: 'https://en.wikipedia.org/wiki/Birthday'
    },
    {
      startDate: this.thisMonth(5),
      endDate: this.thisMonth(12),
      title: 'Multi-day event',
      classes: 'purple'
    },
    {
      startDate: this.thisMonth(29),
      title: 'Same day 1'
    },
    {
      startDate: this.thisMonth(29),
      title: 'Same day 2',
      classes: 'orange'
    },
    {
      startDate: this.thisMonth(29),
      title: 'Same day 3'
    },
    {
      startDate: this.thisMonth(29),
      title: 'Same day 4',
      classes: 'orange'
    },
    {
      startDate: this.thisMonth(29),
      title: 'Same day 5'
    },
    {
      startDate: this.thisMonth(29),
      title: 'Same day 6',
      classes: 'orange'
    },
    {
      startDate: this.thisMonth(29),
      title: 'Same day 7'
    }
  ]

  dataArr.forEach((data) => app.service('events').create(data))
  console.log(`Created ${dataArr.length} events`)
}
