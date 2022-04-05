function replace(arr, start, items, itemsStartIndex) {
  let delItems = []
  if (start > arr.length) start = arr.length
  // 替换的数量
  let repLen = items.length - itemsStartIndex
  // 计算得到删除元素的数量
  let count
  if (arr === items) {
    count = itemsStartIndex - start
  } else {
    count = items.length
  }

  let i = start,
    j = itemsStartIndex
  while (j < items.length) {
    if (arr[i] && count !== 0) {
      delItems.push(arr[i])
      --count
    }
    arr[i++] = items[j++]
  }
  return delItems
}

// let arr = [1, 2, 3, 4, 5]
// console.log(replace(arr, 5, [11, 12, 13, 14, 15, 16], 4))
// console.log(arr)

module.exports = {
  replace
}
