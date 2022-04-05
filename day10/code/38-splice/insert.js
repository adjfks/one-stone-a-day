function insert(arr, start, items, itemsStartIndex) {
  let insLen = items.length - itemsStartIndex
  // i指向原来数组末尾
  let i = arr.length - 1
  // 数组扩容
  arr.length += insLen
  // j指向当前数组末尾
  let j = arr.length - 1
  // 元素向后挪
  while (i >= start) {
    arr[j--] = arr[i--]
  }
  // 插入元素
  for (let i = itemsStartIndex; i < itemsStartIndex + insLen; i++) {
    arr[start++] = items[i]
  }
}

// let arr = [1, 2, 3]
// insert(arr, 9, [4, 5, 6, 7], 2)
// console.log(arr)

module.exports = {
  insert
}
