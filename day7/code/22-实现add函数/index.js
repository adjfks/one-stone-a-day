/* 
题目描述：实现一个 add 方法 使计算结果能够满足如下预期：
  add(1)(2)(3)()=6
  add(1,2,3)(4)()=10
*/
function add(...args) {
  let allArgs = []

  function fn(...args) {
    if (args.length === 0) {
      if (!allArgs.length) return console.log('没有找到参数！')
      return console.log(
        allArgs.reduce((pre, cur) => {
          return pre + cur
        })
      )
    }

    allArgs.push(...args)
    return fn
  }

  return fn(...args)
}

module.exports = {
  add
}
