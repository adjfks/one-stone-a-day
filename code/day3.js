Promise.resolve().then(() => {
  console.log('第一个回调函数：微任务1')
  setTimeout(() => {
    console.log('第三个回调函数：宏任务2')
  }, 0)
})
console.log(1)
setTimeout(() => {
  console.log('第二个回调函数：宏任务1')
  Promise.resolve().then(() => {
    console.log('第四个回调函数：微任务2')
  })
}, 0)
console.log(2)
// 第一个回调函数：微任务1
// 第二个回调函数：宏任务1
// 第四个回调函数：微任务2
// 第三个回调函数：宏任务2





// node
/* setTimeout(() => {
  console.log('setTimeout')
}, 0)
console.log(1);
setImmediate(() => {
  console.log('setImmediate')
})
console.log(2); */
