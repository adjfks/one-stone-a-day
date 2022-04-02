/* 黄金段位 */
function deepClone1(obj) {
  return JSON.parse(JSON.stringify(obj))
}

/* 铂金段位：递归 */
function deepClone2(target) {
  const newObj = {}
  if (typeof target !== 'object') return target

  for (let k in target) {
    newObj[k] = deepClone2(target[k])
  }

  return newObj
}

/* 钻石版本： 考虑拷贝的是数组 */
function deepClone3(target) {
  const temp = Array.isArray(target) ? [] : {}
  if (typeof target !== 'object') return target

  for (let k in target) {
    temp[k] = deepClone3(target[k])
  }

  return temp
}

/* 星耀版本：解决环引用问题 */
function deepClone4(target, map = new Map()) {
  const temp = Array.isArray(target) ? [] : {}
  if (typeof target !== 'object') return target

  if (map.get(target)) return map.get(target)

  map.set(target, temp)
  for (let k in target) {
    temp[k] = deepClone4(target[k], map)
  }

  return temp
}

/* 王者版本 */
function deepClone5(target) {
  // 可遍历对象
  const setTag = '[object Set]'
  const mapTag = '[object Map]'
  const arrTag = '[object Array]'
  const objTag = '[object Object]'
  // 不可遍历对象
  const funcTag = '[object Function]'
  const symbolTag = '[object Symbol]'
  const regTag = '[object RegExp]'

  const canForArr = [setTag, mapTag, arrTag, objTag]
  const noForArr = [funcTag, symbolTag, regTag]

  // 返回类型
  function getType(target) {
    return Object.prototype.toString.call(target)
  }

  // 返回相应空结构
  function createTemp(target) {
    const fn = target.constructor
    return new fn()
  }

  // 递归拷贝函数
  function deep(target, map = new Map()) {
    let type = getType(target)
    // 不是对象类型直接返回
    if (!canForArr.concat(noForArr).includes(type)) return target

    // 生成对应空结构
    let temp = createTemp(target)

    // 检查map
    if (map.get(target)) return map.get(target)

    map.set(target, temp)

    // 处理Set类型
    if (type === setTag) {
      target.forEach((v, k) => {
        temp.add(k, v)
      })
      return temp
    }

    // 处理Map类型
    if (type === mapTag) {
      target.forEach((v, k) => {
        temp.set(k, v)
      })
      return temp
    }

    //处理数据和对象
    for (let k in target) {
      temp[k] = deep(target[k], map)
    }

    return temp
  }

  return deep(target)
}

module.exports = {
  deepClone1,
  deepClone2,
  deepClone3,
  deepClone4,
  deepClone5
}
