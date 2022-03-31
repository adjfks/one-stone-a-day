const { unique1, unique2, unique3, unique4 } = require('./index.js')

var arr1 = [1, 2, 3, 3, 1, 6, 5, 5, 8, 4, 4]
var arr2 = ['a', 'a', 'b', 'd', 'k', 'b']
var arr3 = ['1', 1, 4, 1, 'b']
var arr4 = [
  [1, 2],
  [1, 2],
  [2, 3]
]

console.log(unique1(arr1))
console.log(unique1(arr2))
console.log(unique1(arr3))
console.log(unique1(arr4))

console.log('------------------------')
console.log(unique2(arr1))
console.log(unique2(arr2))
console.log(unique2(arr3))
console.log(unique2(arr4))
// console.log(unique(arr5))

console.log('----------方法三---------------')
console.log(unique3(arr1))
console.log(unique3(arr2))
console.log(unique3(arr3))
console.log(unique3(arr4))

console.log('----------方法四----------------')
console.log(unique4(arr1))
console.log(unique4(arr2))
console.log(unique4(arr3))
console.log(unique4(arr4))
