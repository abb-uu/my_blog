// 引包
const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/user')
const md5 = require('blueimp-md5')

// 设置中间件
const router = express.Router()

// 连接数据库
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
// 设置路由
// 首页渲染

router.get('/', (req, res) => {
  console.log(req.session)
  res.render('index.html')
})

router.get('/index', (req, res) => {
  console.log(req.session.isLogin)
  res.render('index.html')
})

// 登录页渲染
router.get('/login', (req, res) => {
  res.render('login.html')
})

// 登录业务
router.post('/login', (req, res) => {

})

// 注册页渲染
router.get('/register', (req, res) => {
  res.render('register.html')
})

// 注册业务
router.post('/register', (req, res) => {
  // 1. 获取表单提价的数据
  let body = req.body
  // 3. 发送响应
  // res.send(req.body)
  User.findOne({
    $or: [
      { email: body.email },
      { nickname: body.nickname }
    ]
  }, (err, data) => {
    // 查询错误
    if (err) {
      return res.status(500).send(JSON.stringify({
        err_code: 500,
        message: '服务器繁忙'
      }))
    }
    // 已存在
    if (data) {
      return res.status(200).send(JSON.stringify({
        err_code: 1,
        message: '用户名或邮箱已存在'
      }))
    }
    // 2. 操作数据库
    // 密码加密
    body.password = md5(md5(body.password))
    new User(body).save((err, User) => {
      if (err) {
        return res.status(500).send(JSON.stringify({
          err_code: 500,
          message: '服务器繁忙'
        }))
      }
      req.session.isLogin = true
      // 未存在
      res.status(200).send(JSON.stringify({
        err_code: 0,
        message: '注册成功'
      }))
    })
  })
})



// 导出
module.exports = router
