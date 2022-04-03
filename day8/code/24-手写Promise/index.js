// 定义三种状态的常量
const PENDING = 'pending'
const FULFILLEd = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  constructor(executor) {
    try {
      executor(this.resolve, this.reject)
    } catch (e) {
      this.reject(e)
    }
  }

  status = PENDING

  value = null
  reseason = null

  onFulfilledCallbacks = []
  onRejectedCallbacks = []

  // 普通函数直接调用，this会指向window或undefined
  // 使用箭头函数可以让this指向当前实例
  resolve = (value) => {
    if (this.status === PENDING) {
      this.status = FULFILLEd
      this.value = value
      while (this.onFulfilledCallbacks.length) {
        this.onFulfilledCallbacks.shift()(value)
      }
    }
  }

  reject = (reason) => {
    if (this.status === PENDING) {
      this.status = REJECTED
      this.reason = reason
      while (this.onRejectedCallbacks.length) {
        this.onRejectedCallbacks.shift()(reason)
      }
    }
  }

  then(onFulfilled, onRejected) {
    // 参数校验，确保是函数
    onFulfilled = typeof onFulfilled === 'Function' ? onFulfilled : (val) => val
    onRejected =
      typeof onRejected === 'Function'
        ? onRejected
        : (reason) => {
            throw reason
          }

    var thenPromise = new Promise((resolve, reject) => {
      // 判断状态，执行对应的函数
      if (this.status === FULFILLEd) {
        const res = onFulfilled(this.value)
        if (res instanceof MyPromise) {
          res.then(resolve, reject)
        } else {
          resolve(res)
        }
      } else if (this.status === REJECTED) {
        onRejected(onRejected)
      } else if (this.status === PENDING) {
        this.onFulfilledCallbacks.push(onFulfilled)
        this.onRejectedCallbacks.push(onRejected)
      }
    })

    return thenPromise
  }
}

module.exports = {
  MyPromise
}
