const { compose1, compose2 } = require('./index.js')

function fn1(x) {
  return x + 1
}
function fn2(x) {
  return x + 2
}
function fn3(x) {
  return x + 3
}
function fn4(x) {
  return x + 4
}
const a = compose1(fn1, fn2, fn3, fn4)
console.log(a)
console.log(a(1)) // 1+1+2+3+4=11
console.log(a(2)) // 2+2+3+4=12
console.log(a(10)) // 10+1+2+3+4=20

const b = compose1(fn1)
console.log(b)
console.log(b(1))

const c = compose2(fn1, fn2, fn3, fn4)
console.log(a)
console.log(a(1)) // 1+1+2+3+4=11
console.log(a(2)) // 2+2+3+4=12
console.log(a(10)) // 10+1+2+3+4=20

const d = compose2(fn1)
console.log(b)
console.log(b(1))
