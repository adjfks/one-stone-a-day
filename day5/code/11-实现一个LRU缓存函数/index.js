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

module.exports = {
  LRUCache
}
