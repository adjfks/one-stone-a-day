Object.prototype.my_fromEntries = function (arr) {
  var obj = {}
  for (let i = 0; i < arr.length; i++) {
    let k = arr[i][0]
    obj[k] = arr[i][1]
  }
  return obj
}
