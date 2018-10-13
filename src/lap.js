export default class Lap extends String {
  constructor(args) {
    super(args)
  }
  print(record) {
    const content = `${record}: ${this.valueOf()}`
    return content
  }
}
