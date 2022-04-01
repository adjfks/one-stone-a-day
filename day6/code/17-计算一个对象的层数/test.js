const { loopGetLevel } = require('./index')

const obj = {
  a: { b: [1] },
  c: { d: { e: { f: 1 } } }
}

console.log(loopGetLevel(obj)) // 4
