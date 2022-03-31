const { mySetTimeout } = require('./index.js')

let timer = mySetTimeout(() => {
  console.log('时间到')
}, 1000)

setTimeout(() => {
  timer.clear()
}, 500)
