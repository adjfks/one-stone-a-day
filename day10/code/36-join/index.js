Array.prototype.my_join = function (sep = ',') {
  let str = ''
  for (let i = 0; i < this.length; i++){
    str += i === 0 ? `${this[i]}` : `${sep}${this[i]}`
  }
  return str
}
