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

/* 方法三：使用indexOf方法 */
function unique3(arr) {
  var newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

/* 方法四：利用filter和indexOf检测数组元素第一次出现位置与当前位置是否相等 */
function unique4(arr) {
  return arr.filter(function (item, index) {
    return arr.indexOf(item) === index
  })
}

module.exports = {
  unique1,
  unique2,
  unique3,
  unique4
}
