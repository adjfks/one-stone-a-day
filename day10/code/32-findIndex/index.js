Array.prototype.my_findIndex = function (callback) {
  for (let i = 0; i < this.length; i++){
    if (callback(this[i], i, this)) return i
  }
  return -1
}
