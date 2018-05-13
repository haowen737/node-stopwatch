const tmr = require('../')
const log = console.log
const RecordList = require('../src/recordList')
const Lap = require('../src/lap')

tmr.start()
const lap1 = tmr.lap()
const lap2 = tmr.lap()
log(lap1)
log(lap2)

const rec = tmr.records()
tmr.records().print()

log('rec', rec)

// const rc = new RecordList()
// console.log('rc', rc.print())