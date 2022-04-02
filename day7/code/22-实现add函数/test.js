const { add } = require('./index.js')

add(2, 3)(1)()

add(2, 3, 4)(2)(1)()

add(1, 2, 3)(4)()
