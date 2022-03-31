function mySetTimeout(fn, delay) {
  let timer = null
  timer = setInterval(() => {
    fn()
    clearInterval(timer)
  }, delay)

  return {
    clear: () => {
      clearInterval(timer)
    }
  }
}

module.exports = {
  mySetTimeout
}
