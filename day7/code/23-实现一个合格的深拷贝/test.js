const { deepClone1, deepClone2, deepClone3, deepClone4 , deepClone5 } = require('./index.js')

const a = {
  name: 'zs',
  age: 23,
  arr: [1, 2],
  b: undefined,
  reg: /[0-9]/,
  nan: NaN,
  i: +Infinity,
  n: null
}
let b = deepClone1(a)

console.log(b) // { name: 'zs', age: 23, arr: [ 1, 2 ], reg: {}, nan: null, i: null }
console.log(b === a) // false
console.log(b.arr === a.arr) //false

console.log('----------------')

b = deepClone2(a)

console.log(b) // { name: 'zs', age: 23, arr: [ 1, 2 ], reg: {}, nan: null, i: null }
console.log(b === a) // false
console.log(b.arr === a.arr) //false

console.log('----------------')
let c = [{ name: 'zs', age: 20 }, 0, 'a']
b = deepClone3(c)

console.log(b) // { name: 'zs', age: 23, arr: [ 1, 2 ], reg: {}, nan: null, i: null }
console.log(b === c) // false
console.log(b[0] === c[0]) //false

console.log('-----------------')
let d = {
  arr: [1, 2, 3]
}
d.self = d
let dd = deepClone4(d)
console.log(dd)

console.log('--------------');
const e = {
  name: 'sunshine_lin',
  age: 23,
  hobbies: { sports: '篮球', tv: '雍正王朝' },
  works: ['2020', '2021'],
  map: new Map([['haha', 111], ['xixi', 222]]),
  set: new Set([1, 2, 3]),
}
e.key = e // 环引用
const f = deepClone5(e)

console.log(f)
