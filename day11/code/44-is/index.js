Object.prototype.my_is = function (a, b) {
  if (a === b) {
    return a !== 0
  }
  // Na结果应该为true
  return a !== a && b !== b
}
