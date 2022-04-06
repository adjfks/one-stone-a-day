require('./index.js')

const a = {
  name: 'zs'
}

const b = a
const c = {
  name: 'zs'
}

console.log(Object.is(a, b))
console.log(Object.my_is(a, b))

console.log(Object.is(a, c))
console.log(Object.my_is(a, c))

console.log(Object.is(null, null))
console.log(Object.my_is(null, null))

console.log(Object.is(-0, +0))  //false
console.log(Object.my_is(-0, +0))

console.log(Object.is(-0, +0))

console.log(Object.is(-0, +0))

console.log(Object.is(-0,+0))



