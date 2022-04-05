Array.prototype.my_flat = function (level = Infinity) {
  let res = this
  while (res.some((item) => Array.isArray(item))) {
    if (level <= 0) break
    res = [].concat(...res)
    level--
  }
  return res
}
