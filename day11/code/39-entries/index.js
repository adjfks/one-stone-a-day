Object.prototype.my_entries = function (obj) {
  var res = []
  for (var key in obj) {
    obj.hasOwnProperty(key) && res.push([key, obj[key]])
  }
  return res
}
