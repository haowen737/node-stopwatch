class Timeter {
  constructor () {
    this.timer = null
  }
  current () {
    return new Date().getTime()
  }
  start () {
    this.timer = this.current()
  }
  lap () {
    if (!this.timer) {
      console.error('stopwatch is not active!')
      return
    }
    return this.current() - this.timer
  }
  stop () {
    if (!this.timer) {
      console.error('stopwatch is not active!')
      return
    }
    const result = this.current() - this.timer
    this.timer = null
    return result
  }
}

module.exports = Timeter