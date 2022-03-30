function instanceOf(father, child) {
  const fp = father.prototype

  var pro = child.__proto__

  while (pro) {
    if (pro === fp) {
      return true
    }
    pro = pro.__proto__
  }

  return false
}

var arr = []
console.log(instanceOf(Array, arr))
console.log(instanceOf(Object , arr));
console.log(instanceOf(Function , arr));