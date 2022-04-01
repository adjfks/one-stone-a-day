const { cycleDetector } = require('./index.js')

var obj = {
  a: {
    c: [1, 2]
  },
  b: 1
}
obj.a.c.d = obj
console.log(cycleDetector(obj)) // true
