const Koa = require('koa')
// const ejs = require('ejs')
const pug = require('pug')
const app = new Koa()

const { normal, ejsTpl, pugTpl } = require('./tpl/')

app.use(async (ctx, next) => {
  ctx.type = 'text/html; charset="utf-8"'
  ctx.body = pug.render(pugTpl, {
    you: 'lp',
    me: 'pl'
  })
})

app.listen(9090)
