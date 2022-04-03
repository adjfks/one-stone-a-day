const { MyPromise } = require('./index.js')

// let p1 = new MyPromise((resolve, reject) => {
//   resolve('p1成功')
// })

// let p2 = new MyPromise((resolve, reject) => {
//   reject('p2失败')
// })

// let p3 = new MyPromise((resolve, reject) => {
//   reject('p3')
//   resolve('p3')
// })

// let p4 = new MyPromise((resolve, reject) => {
//   throw '错误'
// })

// let p5 = new MyPromise((resolve, reject) => {
//   resolve('p5成功了!')
// }).then(
//   (val) => {
//     console.log(val)
//   },
//   (err) => {
//     console.log(err)
//   }
// )

// let p6 = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('p6在2秒后成功！')
//   }, 2000)
// }).then(
//   (val) => {
//     console.log(val)
//   },
//   (reason) => {
//     console.log(reason)
//   }
// )

// let p7 = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('p7成功啦~')
//   }, 2000)
// })

// p7.then((val) => {
//   console.log(1)
//   console.log(val)
// })

// let promise1 = new Promise((resolve, reject) => {
//   resolve('success')
// })

// promise1
//   .then((val) => {
//     console.log(1)
//     console.log('resolve', val)
//     return new Promise((resolve, reject) => {
//       resolve('other')
//     })
//   })
//   .then((val) => {
//     console.log(2)
//     console.log('resolve', val)
//   })

new Promise((resolve, reject) => {
  resolve(1)
})
  .then((val) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(++val)
      }, 2000)
    })
  })
  .then((val) => {
    console.log(val)
  })

// console.log(p1)
// console.log(p2)
// console.log(p3)
// console.log(p4)
