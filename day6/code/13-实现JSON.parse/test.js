const { myJsonParse } = require('./index.js')

let json1 = `{"a": "1","b": "2","c": "3"}`
let obj = myJsonParse(json1)
console.log(typeof obj)
console.log(obj)
