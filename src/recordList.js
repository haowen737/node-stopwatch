export default class RecordList extends Array {
  constructor(args) {
    super(...args)
  }
  print() {
    let str = ''
    this.forEach((el, index) => str += `${index}: ${el.record}: ${el._lap}\n`)
    return str
  }
}
