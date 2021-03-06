// 中间件
const express = require('express');
const app = express();

// 验证
let username = (req, res, next) => {
  console.log(req.query)
  if (req.query.username === 'jj') {
    // 继续执行
    next()
  } else {
    res.send('username is not found')
  }
}

app.use(username)

// 中间件
app.use((req, res, next) => {
  // 在req到res的生命周期中做出一些业务处理
  console.log("01")
  req.test = 1
  // 处理完成后使用 next() 传入下一个中间件
  next()
})

app.use((req, res) => {
  console.log('02')
  res.send(`express, ${req.test}`)
})

app.listen(9090)

