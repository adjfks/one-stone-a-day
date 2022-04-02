class Scheduler {
  constructor(limit) {
    this.limit = limit
    this.cur = 0
    this.queue = []
  }

  add(delay, content) {
    const task = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(content)
          resolve()
        }, delay)
      })
    }
    this.queue.push(task)
  }

  start() {
    for (let i = 0; i < this.limit; i++) {
      this.request()
    }
  }

  request() {
    if (!this.queue.length || this.cur >= 2) return
    this.cur++
    this.queue
      .shift()()
      .then(() => {
        this.cur--
        this.request()
      })
  }
}

const scheduler = new Scheduler(2)
const addTask = (delay, content) => {
  scheduler.add(delay, content)
}

module.exports = {
  scheduler,
  addTask
}
