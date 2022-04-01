function flatten(obj) {
  let isObject = (val) => {
    return typeof val === 'object' && val !== null
  }
  if (!isObject(obj)) return
  let res = {}

  function dfs(cur, prefix) {
    if (isObject(cur)) {
      if (Array.isArray(cur)) {
        cur.forEach((item, index) => {
          dfs(item, `${prefix}[${index}]`)
        })
      } else {
        for (let k in cur) {
          let v = cur[k]
          dfs(v, `${prefix}${prefix ? '.' : ''}${k}`)
        }
      }
    } else {
      res[prefix] = cur
    }
  }

  dfs(obj, '')
  return res
}

module.exports = {
  flatten
}
