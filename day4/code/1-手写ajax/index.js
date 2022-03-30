/* 1.实现原生的ajax请求 */
const ajax = {
  get: function (url, fn) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, true) //第三个参数异步与否
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        fn(xhr.responseText)
      }
    }
    xhr.send()
  },
  post: function (url, data, fn) {
    const xhr = new XMLHttpRequest()
    xhr.open('POST', url, true)
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        fn(xhr.responseText)
      }
    }
    xhr.send(data)
  }
}
