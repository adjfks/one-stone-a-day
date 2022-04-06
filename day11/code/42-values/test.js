require('./index.js')

const obj = { name: 'zs', age: 19, score: 59 }

console.log(Object.values(obj));
console.log(Object.my_values(obj)); //[ 'zs', 19, 59 ]
