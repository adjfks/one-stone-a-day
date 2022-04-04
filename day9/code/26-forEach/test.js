require('./index.js')
const arr = [
  { name: 'sdn', skill: '唱歌干饭' },
  { name: 'wxl', skill: '唱歌干饭' },
  { name: '蜘蛛侠', skill: '吐丝' },
  { name: '美国队长', skill: '~~' }
]

arr.my_forEach((item) => {
  console.log(item)
})
