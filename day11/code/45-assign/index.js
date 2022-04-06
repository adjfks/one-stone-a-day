Object.prototype.my_assign = function (target, ...args) {
  if (target === null || target === undefined) {
    console.error('Uncaught TypeError: Cannot convert undefined or null to object')
  }
  target = Object(target)
  for (let obj of args) {
    for (let key in obj) {
      obj.hasOwnProperty(key) && (target[key] = obj[key])
    }
  }
  return target
}
