const { replace } = require('./replace.js')
function del(arr, start, count) {
  if (start < 0 || start >= arr.length) return []
  if (count > arr.length) count = arr.length
  let delItems = replace(arr, start, arr, start + count)
  arr.length -= count
  return delItems
}

module.exports = {
  del
}

// let arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(del(arr, 1, 2))
// console.log(arr)
