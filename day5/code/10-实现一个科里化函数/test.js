const { currying } = require('./index.js')

const add = (a, b, c) => a + b + c
const a = currying(add, 1)
console.log(a(2)(3))
