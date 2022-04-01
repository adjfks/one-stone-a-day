/* 题目描述：验证一个对象有无环引用 */
/* 
思路：用一个数组存储所有遍历过的对象，每遍历一个新对象查看数组里是否存在该对象
*/
function cycleDetector(obj) {
  let arr = [obj]
  let flag = false

  function cycle(o) {
    for (let key in o) {
      if (typeof o[key] === 'object') {
        if (arr.indexOf(o[key]) >= 0) {
          return (flag = true)
        }
        arr.push(o[key])
        cycle(o[key])
      }
    }
  }

  cycle(obj)
  return flag
}

module.exports = {
  cycleDetector
}
