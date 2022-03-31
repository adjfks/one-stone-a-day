/* 
题目描述:实现一个发布订阅模式拥有on emit once off方法
*/

class EventEmitter {
  constructor() {
    // 事件调度中心
    this.cache = {}
  }

  // 订阅事件
  on(name, fn) {
    const tasks = this.cache[name]
    if (tasks) {
      this.cache[name].push(fn)
    } else {
      this.cache[name] = [fn]
    }
  }

  // 触发事件
  emit(name, ...args) {
    // 复制一份回调队列，防止回调里继续on导致死循环
    const tasks = this.cache[name].slice()
    if (tasks) {
      for (let fn of tasks) {
        fn(...args)
      }
    }
  }

  // 解除事件订阅
  off(name, fn) {
    const tasks = this.cache[name]
    if (tasks) {
      const index = tasks.findIndex((item) => item === fn)
      if (index >= 0) {
        // splice修改原数组，slice不修改原数组
        this.cache[name].splice(index, 1)
      }
    }
  }

  // 单次事件
  once(name, fn) {
    function cb(...args) {
      fn(...args)
      this.off(name, cb)
    }
    this.on(name, cb)
  }
}

// class EventEmitter {
//   constructor() {
//     // 单例模式
//     if (!EventEmitter.instance) {
//       EventEmitter.instance = this
//       this.handleMap = {}
//     }
//     //map结构，用于储存事件与其对应的回调
//     return EventEmitter.instance
//   }

//   //事件订阅，需要接收订阅事件名和对应的回调函数
//   on(eventName, callback) {
//     this.handleMap[eventName] = this.handleMap[eventName] ?? []
//     this.handleMap[eventName].push(callback)
//   }

//   //事件发布，需要接收发布事件名和对应的参数
//   emit(eventName, ...args) {
//     if (this.handleMap[eventName]) {
//       //这里需要浅拷贝一下handleMap[eventName],因为在once添加订阅时会修改this.handleMap,若once绑定在前就会导致后一个监听被移除
//       const handlers = [...this.handleMap[eventName]]
//       handlers.forEach((callback) => callback(...args))
//     }
//   }

//   //移除订阅，需要移除的订阅事件名及指定的回调函数
//   remove(eventName, callback) {
//     const callBacks = this.handleMap[eventName]
//     const index = callBacks.indexOf(callback)
//     if (index !== -1) {
//       callBacks.splice(index, 1)
//     }
//   }

//   //添加单次订阅，触发一次订阅事件后取消订阅，需要添加的订阅事件名及指定的回调函数
//   once(eventName, callback) {
//     const warpper = (...args) => {
//       callback(...args)
//       this.remove(eventName, warpper)
//     }
//     this.on(eventName, warpper)
//   }
// }

module.exports = {
  EventEmitter
}
