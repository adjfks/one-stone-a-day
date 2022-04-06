require('./index.js')
const arr = [
  ['name', 'zs'],
  ['age', 19],
  ['score', 59]
]

console.log(Object.fromEntries(arr))
console.log(Object.my_fromEntries(arr)) //{ name: 'zs', age: 19, score: 59 }
