/* 测试用例 */
const { mynew } = require('./index.js')

function Person(name, age) {
  this.name = name
  this.age = age
}

const zs = mynew(Person, 'zs', 19)
console.log(zs)
