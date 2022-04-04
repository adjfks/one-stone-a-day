Array.prototype.my_filter = function (callback) {
  const newArr = []
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArr.push(this[i])
    }
  }
  return newArr
}
