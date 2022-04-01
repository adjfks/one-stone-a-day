/* 实现(a == 1 && a == 2 && a == 3)为true */

/* 方法一 */
var a1 = {
  i: 1,
  valueOf: function () {
    return a1.i++
  }
}

/* 方法二 */
var a2 = [1, 2, 3]
a2.i = 0
a2.valueOf = function () {
  return a2[a2.i++]
}

/* 方法三 */
var a3 = [1, 2, 3]
a3.join = a3.shift

/* 方法四 */
var val = 0
Object.defineProperty(window, 'a4', {
  get: function () {
    return ++val
  }
})

module.exports = {
  a1,
  a2,
  a3
}
