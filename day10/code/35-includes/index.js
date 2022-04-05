Array.prototype.my_includes = function (value, start) {
  if (start < 0) start = this.length - start
  const isNaN = Number.isNaN(value)
  for (let i = start; i < this.length; i++) {
    if (this[i] === value || (isNaN && Number.isNaN(this[i]))) return true
  }
  return false
}
