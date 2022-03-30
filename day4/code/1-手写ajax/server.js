// const http = require('http')

// const server = http.createServer()

// server.on('request', function (req, res) {
//   const method = req.method
//   res.setHeader('Content-Type', 'text/html;charset=utf-8')
//   res.setHeader('Access-Control-Allow-Origin', '*')
//   res.setHeader('Access-Control-Allow-Headers', '*')
//   if (method === 'GET') {
//     res.end('接收到get请求')
//   }
//   if (method === 'POST') {
//     res.end('接收到post请求')
//   }
// })

// server.listen('3000', function () {
//   console.log('服务已启动...')
// })

const http = require('http')

const port = 8000
const hostname = '127.0.0.1'

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain;charset=utf-8')
  res.setHeader('Access-Control-Allow-Origin', '*')

  if (req.method === 'GET') {
    res.end('接收到get请求！')
  }
  if (req.method === 'POST') {
    res.end('接收到post请求！')
  }
})

server.listen(port, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`)
})
