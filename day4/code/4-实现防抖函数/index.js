/* 
  防抖函数，默认500ms内不再次触发则调用函数
*/

function debounce(fn, delay = 500) {
  let timer
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function () {
      let args = arguments
      fn.apply(this, args)
    }, delay)
  }
}
