# DAY5 手写js系列（二）

## 7. 用setTimeout实现setInterval

```javascript
/* 
题目说明：setinterval 用来实现循环定时调用 可能会存在一定的问题 能用 settimeout 解决吗
*/
function mySetInterval(fn, delay) {
  let timer = null
  const interval = () => {
    fn()
    timer = setTimeout(interval, delay)
  }
  setTimeout(interval, delay)
  return {
    clear: () => {
      clearTimeout(timer)
    }
  }
}
```



## 8. 用setInterval实现setTimeout

```javascript
function mySetTimeout(fn, delay) {
  let timer = null
  timer = setInterval(() => {
    fn()
    clearInterval(timer)
  }, delay)

  return {
    clear: () => {
      clearInterval(timer)
    }
  }
}
```



## 9. 实现一个compose函数

```javascript
/* 第一种实现 */
function compose1(...fn) {
  return function (x) {
    for (let i = 0; i < fn.length; i++) {
      x = fn[i](x)
    }
    return x
  }
}

/* 第二种实现：使用reduce */
function compose2(...fn) {
  if (fn.length === 0) return (x) => x
  if (fn.length === 1) {
    return fn[0]
  }
  return function (x) {
    return fn.reduce((pre, cur) => {
      return cur(pre(x))
    })
  }
}
```



## 10. 实现一个科里化函数

```javascript
function currying(fn, ...args1) {
  let len = fn.length
  let allArgs = [...args1]

  res = (...args2) => {
    allArgs = [...allArgs, ...args2]
    // 判断参数个数是否等于fn需要的参数个数
    if (len === allArgs.length) {
      return fn(...allArgs)
    } else {
      // 不相等继续返回函数
      return res
    }
  }

  return res
}
```





## 11. 实现一个LRU缓存函数

```javascript
class LRUCache {
  constructor(size) {
    this.size = size
    this.cache = new Map()
  }

  get(key) {
    // 找不到该键，返回-1
    if (!this.cache.has(key)) {
      return -1
    } else {
      const val = this.cache.get(key)
      // 删除旧的键，更新其位置
      this.cache.delete(key)
      this.cache.set(key, val)
      // 返回键值
      return val
    }
  }

  put(key, val) {
    const hasKey = this.cache.has(key)
    // 存在该键，删除旧键
    if (hasKey) {
      this.cache.delete(key)
    }
    // 设置新键
    this.cache.set(key, val)

    // 设置完键，检查是否长度越界
    if (this.cache.size > this.size) {
      // 删除最久未使用的键
      // keys()获得所有键的iterator,next()获得最早设置的键的对象，通过value获得键
      this.cache.delete(this.cache.keys().next().value)
    }
  }
}


/* 测试 */
cache = new LRUCache(2)
console.log(cache.put(1, 1))
console.log(cache.put(2, 2))
console.log(cache.get(1))
console.log(cache.put(3, 3)) //2作废
console.log(cache.get(2)) // -1
console.log(cache.put(4, 4)) //1作废
console.log(cache.get(1)) //-1
console.log(cache.get(3))
console.log(cache.get(4))
```



## 12. 简单实现 发布订阅模式

题目描述:实现一个发布订阅模式拥有`on emit once off`方法

```javascript

```

