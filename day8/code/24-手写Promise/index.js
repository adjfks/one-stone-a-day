class MyPromise {
  constructor(executor) {
    // 状态和值的初始化
    this.status = 'pending'
    this.value = null
    this.reason = null

    // 存放onFulfilled和onRejected函数调用的数组
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []

    // resolve reject
    let resolve = (value) => {
      if (this.status === 'pending') {
        this.status = 'fulfilled'
        this.value = value
        // 状态确定，调用数组里的回调函数
        this.onFulfilledCallbacks.forEach((fn) => fn())
      }
    }

    let reject = (reason) => {
      if (this.status === 'pending') {
        this.status = 'rejected'
        this.reason = reason
        // 状态确定，调用数组里的回调函数
        this.onRejectedCallbacks.forEach((fn) => fn())
      }
    }

    // 立即执行
    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  then(onFulfilled, onRejected) {
    // onFulfilled如果不是函数，就忽略onFulfilled，直接返回value
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value
    // onRejected如果不是函数，就忽略onRejected，直接扔出错误
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (err) => {
            throw err
          }
    let promise2 = new MyPromise((resolve, reject) => {
      if (this.status === 'fulfilled') {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (err) {
            reject(err)
          }
        }, 0)
      } else if (this.status === 'rejected') {
        try {
          let x = onRejected(this.reason)
          resolvePromise(promise2, x, resolve, reject)
        } catch (err) {
          reject(err)
        }
      } else if (this.status === 'pending') {
        this.onFulfilledCallbacks.push(() => {
          try {
            let x = onFulfilled(this.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (err) {
            reject(err)
          }
        })
        this.onRejectedCallbacks.push(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (err) {
            reject(err)
          }
        })
      }
    })

    function resolvePromise(promise2, x, resolve, reject) {
      if (x === promise2) {
        return reject(new TypeError('chaining cycyle detected for promise'))
      }

      if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        try {
          let then = x.then

          let called = false
          if (typeof then === 'function') {
            then.call(
              x,
              (val) => {
                if (called) return
                called = true
                resolvePromise(promise2, val, resolve, reject)
              },
              (err) => {
                if (called) return
                called = true
                reject(err)
              }
            )
          } else {
            resolve(x)
          }
        } catch (err) {
          if (called) return
          called = true
          reject(err)
        }
      } else {
        resolve(x)
      }
    }

    return promise2
  }

  catch(fn) {
    this.then(null, fn)
  }
}

// resolve
MyPromise.resolve = function (val) {
  return new MyPromise((resolve, reject) => {
    resolve(val)
  })
}

// reject方法
MyPromise.reject = function (err) {
  return new MyPromise((resolve, reject) => {
    reject(err)
  })
}

// race方法
MyPromise.race = function (promises) {
  return new MyPromise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(resolve, reject)
    }
  })
}

// all方法
MyPromise.all = function (promises) {
  let result = []
  let count = 0
  let processData = function (idx, data) {
    result[idx] = data
    count++
    if (count === promises.length) {
      resolve(result)
    }
  }
  return new MyPromise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then((data) => {
        processData(data)
      }, reject)
    }
  })
}

module.exports = {
  MyPromise
}
