class _LazyMan {
  constructor(name) {
    // 任务队列
    this.tasks = []
    // 默认第一个任务
    const task = () => {
      console.log(`Hi! This is ${name}!`)
      // 执行下一任务
      this.next()
    }
    //将第一个任务添加到任务队列
    this.tasks.push(task)
    // 执行第一个任务
    setTimeout(() => {
      // 取出任务执行
      let task = this.tasks.shift()
      task && task()
    }, 0)
  }

  // 定义next函数，用于执行下一任务
  next() {
    let task = this.tasks.shift()
    task && task()
  }

  // eat
  eat(food) {
    // 定义任务
    let task = () => {
      console.log(`Eat ${food}!`)
      // 执行下一任务
      this.next()
    }
    // 将任务添加到任务队列
    this.tasks.push(task)
    // 链式调用
    return this
  }

  // sleep
  sleep(time) {
    let task = () => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`)
        // 延迟后执行下一任务
        this.next()
      }, time * 1000)
    }
    this.tasks.push(task)
    // 链式调用
    return this
  }

  // sleepFirst
  sleepFirst(time) {
    let task = () => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`)
        // 延迟后执行下一任务
        this.next()
      }, time * 1000)
    }
    this.tasks.unshift(task)
    // 链式调用
    return this
  }
}

let LazyMan = (name) => {
  return new _LazyMan(name)
}

module.exports = {
  LazyMan
}
