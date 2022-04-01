const { EventEmitter } = require('./index.js')

let ee = new EventEmitter()
ee.on('eat', function (food) {
  console.log(`吃${food}`)
})

ee.once('exam', function (score) {
  console.log(`考了${score}分`)
})

ee.emit('eat', '屎')
ee.emit('eat', '屎')

ee.emit('exam' , 0)
ee.emit('exam' , 0)
ee.emit('exam' , 0)
