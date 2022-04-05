require('./index.js')
const arr = [
  { name: 'sdn', skill: '唱歌干饭' },
  { name: 'wxl', skill: '唱歌干饭' },
  { name: '蜘蛛侠', skill: '吐丝' },
  { name: '美国队长', skill: '盾牌' }
]

console.log(
  arr.my_some((item) => {
    return item.name
  })
)
