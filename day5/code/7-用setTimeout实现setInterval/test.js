const { mySetInterval } = require('./index.js')

let timer = mySetInterval(() => {
  console.log('时间到')
}, 500)

setTimeout(() => {
  timer.clear()
}, 5000)
