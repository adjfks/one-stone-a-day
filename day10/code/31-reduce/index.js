Array.prototype.my_reduce = function (callback, ...args) {
  let startIndex = 0
  let pre
  if (args.length) {
    pre = args[0]
  } else {
    pre = this[0]
    startIndex = 1
  }
  for (let i = startIndex; i < this.length; i++) {
    pre = callback(pre, this[i], i, this)
  }
  return pre
}
