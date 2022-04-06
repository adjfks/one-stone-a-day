function my_instanceof(obj, Fn) {
  if (typeof obj !== 'object' || !obj) return false
  if (obj.__proto__ !== Fn.prototype) {
    return my_instanceof(obj.__proto__, Fn)
  } else {
    return true
  }
}

module.exports = my_instanceof
