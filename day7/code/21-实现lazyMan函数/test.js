const { LazyMan } = require('./index.js')

// LazyMan('Hank')

// LazyMan('Hank').sleep(10).eat('dinner')

// LazyMan('Hank').eat('dinner').eat('supper')

LazyMan('Hank').eat('dinner').sleepFirst(5)
