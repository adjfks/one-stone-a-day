/* 第一种实现 */
function compose1(...fn) {
  return function (x) {
    for (let i = 0; i < fn.length; i++) {
      x = fn[i](x)
    }
    return x
  }
}

/* 第二种实现：使用reduce */
function compose2(...fn) {
  if (fn.length === 0) return (x) => x
  if (fn.length === 1) {
    return fn[0]
  }
  return function (x) {
    return fn.reduce((pre, cur) => {
      return cur(pre(x))
    })
  }
}

module.exports = {
  compose1,
  compose2
}
