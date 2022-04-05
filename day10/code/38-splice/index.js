const { insert } = require('./insert.js')
const { replace } = require('./replace.js')
const { del } = require('./del.js')

Array.prototype.my_splice = function (startIndex, delnum, ...args) {
  // startIndex非法，直接结束
  if (typeof startIndex !== 'number' && typeof startIndex !== 'string') return []
  // 获取数组长度
  let len = this.length

  // 处理开始索引,保证索引为正数
  if (typeof startIndex === 'string') startIndex = Number(startIndex)
  if (startIndex < 0) startIndex += len

  // 处理删除数量，保证 0 <= delnum <= len - startIndex
  if (typeof delnum === 'string') delnum = Number(delnum)
  if (delnum < 0 || typeof delnum !== 'number') delnum = 0
  if (delnum > len - startIndex) delnum = len - startIndex

  let res = []
  if (delnum === args.length) {
    res = replace(this, startIndex, args, 0)
  } else if (delnum > args.length) {
    res = replace(this, startIndex, args, 0)
    res.push(...del(this, startIndex + args.length, delnum - args.length))
  } else {
    let args1 = [...args]
    args1.length = delnum
    res = replace(this , startIndex , args1 , 0)
    insert(this , startIndex + delnum , args , delnum)
  }

  return res
}
