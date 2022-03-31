const { LRUCache } = require('./index.js')

cache = new LRUCache(2)
console.log(cache.put(1, 1))
console.log(cache.put(2, 2))
console.log(cache.get(1))
console.log(cache.put(3, 3)) //2作废
console.log(cache.get(2)) // -1
console.log(cache.put(4, 4)) //1作废
console.log(cache.get(1)) //-1
console.log(cache.get(3))
console.log(cache.get(4))
