Object.prototype.my_values = function (obj) {
  let values = []
  for (let k in obj) {
    obj.hasOwnProperty(k) && values.push(obj[k])
  }
  return values
}
