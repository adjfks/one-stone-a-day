const my_instanceof = require('./index.js')

const obj = {}
const arr = []
function Person(name) {
  this.name = name
}
const zs = new Person('zs')

console.log(my_instanceof(zs, Person))
console.log(my_instanceof(arr, Array))
console.log(my_instanceof(obj, Object))
console.log(my_instanceof([], Object))
console.log(my_instanceof(null, Object))
