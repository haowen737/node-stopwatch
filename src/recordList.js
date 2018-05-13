class RecordList extends Array {
  constructor(args) {
    super(...args)
  }
  print() {
    let str = ''
    this.forEach((el, index) => str += `${index}: ${el}\n`)
    console.log(str)
  }
}

module.exports = RecordList
