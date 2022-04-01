function loopGetLevel(obj) {
  let res = 1

  function getLevel(obj, level) {
    for (let k in obj) {
      let temp = obj[k]
      if (typeof temp === 'object') {
        getLevel(temp, level + 1)
      } else {
        res = res >= level ? res : level
      }
    }
  }

  getLevel(obj, 1)
  return res
}

module.exports = {
  loopGetLevel
}
