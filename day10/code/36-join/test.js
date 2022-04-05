require('./index.js')
const arr = [
  { name: 'sdn', skill: '唱歌干饭', age: 1 },
  { name: 'wxl', skill: '唱歌干饭', age: 2 },
  { name: '蜘蛛侠', skill: '吐丝', age: 3 },
  { name: '美国队长', skill: '盾牌', age: 4 }
]

console.log(arr.join(' | '), arr.my_join(' | '))
console.log([1, 2, 34, 5].join(' | '), [1, 2, 34, 5].my_join(' | '))
