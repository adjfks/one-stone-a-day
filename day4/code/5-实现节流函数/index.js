function throttle(fn, delay = 500) {
  // 定义一个节流阀
  let flag = false
  return function () {
    if (flag) {
      return
    }
    let args = arguments
    fn.apply(this, args)
    flag = true
    setTimeout(function () {
      flag = false
    }, delay)
  }
}
