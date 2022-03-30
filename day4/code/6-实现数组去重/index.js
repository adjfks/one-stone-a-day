/* 方法一：利用Set */
function unique1(arr) {
  return [...new Set(arr)]
}

/* 方法二：利用数组的reduce方法+Map */
function unique2(arr) {
  var newArr = []
  arr.reduce(function (pre, cur) {
    if (!pre.has(cur)) {
      newArr.push(cur)
      pre.set(cur, 1)
    }
    return pre
  }, new Map())

  return newArr
}

module.exports = {
  unique1,
  unique2
}
