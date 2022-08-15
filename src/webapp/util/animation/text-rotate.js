const TxtRotate = {
  toRotate: null,
  el: null,
  loopNum: null,
  period: null,
  txt: null,
  isDeleting: null,
  deltaSub: 300,
  init (elObj, dataRotate, period, deltaSub = 300) {
    this.toRotate = dataRotate
    this.el = elObj
    this.loopNum = 0
    this.period = parseInt(period, 10) || 2000
    this.txt = ''
    this.tick()
    this.isDeleting = false
    this.deltaSub = deltaSub
  },
  tick () {
    var i = this.loopNum % this.toRotate.length
    var fullTxt = this.toRotate[i]

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1)
    }
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>'

    // var that = this
    var delta = this.deltaSub - Math.random() * 100

    if (this.isDeleting) { delta /= 2 }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period
      this.isDeleting = true
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false
      this.loopNum++
      delta = 500
    }

    setTimeout(() => {
      this.tick()
    }, delta)
  }
}

export default TxtRotate
