import RecordList from './recordList'
import Lap from './lap'

export default class Timeter {
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
  lap (record) {
    if (!this.timer) {
      console.error('stopwatch is not active!')
      return
    }
    const _lap = new Lap(
      this.current() - this.timer,
    )
    // const _lap = this.current() - this.timer
    this.recordList.push({ record, _lap })
    return _lap.print(record)
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
    const _recordList = new RecordList(
      this.recordList
    )
    return _recordList.print()
  }
}
