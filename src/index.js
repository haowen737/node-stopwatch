const RecordList = require('./recordList')
const Lap = require('./lap')

class Timeter {
  constructor () {
    this.timer = null
    this.recordList = []
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
    const _lap = new Lap(
      this.current() - this.timer
    )
    // const _lap = this.current() - this.timer
    this.recordList.push(_lap)
    return _lap
  }
  stop () {
    if (!this.timer) {
      console.error('stopwatch is not active!')
      return
    }
    const result = this.current() - this.timer
    this.timer = null
    this.recordList = []
    return result
  }
  records () {
    return new RecordList(
      this.recordList
    )
  }
}

module.exports = Timeter