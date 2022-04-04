const { MyPromise } = require('./index.js')

let p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    let val1 = 10
    resolve(val1)
  }, 1000)
})
let p2 = p1
  .then((val1) => {
    return new MyPromise((resolve, reject) => {
      setTimeout(() => {
        let val2 = 3
        resolve(val1 + val2)
      }, 2000)
    })
  })
  .then((res) => console.log(res))
  .catch((err) => {
    console.log('error', err)
  })
