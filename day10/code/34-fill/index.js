Array.prototype.my_fill = function (value, start = 0, end = this.length) {
  for (let i = start; i < end; i++) {
    this[i] = value
  }
  return this
}
