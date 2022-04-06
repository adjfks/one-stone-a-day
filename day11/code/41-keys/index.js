Object.prototype.my_keys = function (obj) {
  let keys = []
  for (let k in obj) {
    obj.hasOwnProperty(k) && keys.push(k)
  }
  return keys
}
