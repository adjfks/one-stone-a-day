function currying(fn, ...args1) {
  let len = fn.length
  let allArgs = [...args1]

  res = (...args2) => {
    allArgs = [...allArgs, ...args2]
    // 判断参数个数是否等于fn需要的参数个数
    if (len === allArgs.length) {
      return fn(...allArgs)
    } else {
      // 不相等继续返回函数
      return res
    }
  }

  return res
}

module.exports = {
  currying
}
