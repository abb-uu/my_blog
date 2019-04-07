// 引包
const express = require('express')
const session = require('express-session')
const path = require('path')
const bodyParser = require('body-parser')
const router = require('./router')
const app = express()


// 开放公共资源
app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))

// 模版引擎
app.set('views', path.join(__dirname, './views/'))
app.engine('html', require('express-art-template'))


// 配置解析表单 POST 请求体插件
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

// 将路由挂载到app中
app.use(router)

// 设置端口号
app.listen(3000, () => {
  console.log('running...')
})
