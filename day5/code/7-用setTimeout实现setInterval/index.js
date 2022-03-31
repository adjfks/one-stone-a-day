/* 
题目说明：setinterval 用来实现循环定时调用 可能会存在一定的问题 能用 settimeout 解决吗
*/

function mySetInterval(fn, delay) {
  let timer = null
  const interval = () => {
    fn()
    timer = setTimeout(interval, delay)
  }
  setTimeout(interval, delay)
  return {
    clear: () => {
      clearTimeout(timer)
    }
  }
}

module.exports = {
  mySetInterval
}
