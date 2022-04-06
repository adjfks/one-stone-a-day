require('./index.js')

const a = { name: 'zs' }
const b = { name: 'ls', age: 22 }
const c = { age: 18, gender: '男' }

Object.my_assign()
const d = Object.assign(a, b, c)
const e = Object.my_assign(a, b, c)

console.log(d)
console.log(d === a) // true
console.log(e)
console.log(e === a) // true
