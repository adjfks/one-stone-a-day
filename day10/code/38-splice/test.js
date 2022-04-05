require('./index.js')
const arr1 = [1,2]

console.log(arr1.my_splice(0, 1)) // [1]
console.log(arr1) // [2]
console.log(arr1.my_splice(1, 1 , 2)) // []
console.log(arr1) // [2,2]
console.log(arr1.my_splice(1, 1, 3, 4, 5, 6)); // [2]
console.log(arr1); // [2,3,4,5,6]
console.log(arr1.my_splice(0, 0, 0 , 1)); // []
console.log(arr1); // [0,1,2,3,4,5,6]


