require('./index.js')
const obj = {
  name: 'zs',
  age: 19,
  score: 59
}

console.log(Object.entries(obj)) //[ [ 'name', 'zs' ], [ 'age', 19 ], [ 'score', 59 ] ]
console.log(Object.my_entries(obj)) //[ [ 'name', 'zs' ], [ 'age', 19 ], [ 'score', 59 ] ]
