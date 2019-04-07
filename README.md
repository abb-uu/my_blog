# Node综合Web案例

## 1.目录结构

```
.
├─ app.js
├─ controllers
├─ models
├─ node_modules            第三方包
├─ package.json            包描述文件
├─ package-lock.json       第三方包版本锁定文件
├─ public                  公共静态资源
├─ README.md               项目说明文档
├─ routes                  
└─ views                   存储视图目录
```

## 2.模版页

* [art-template 子模版](<https://aui.github.io/art-template/zh-cn/docs/syntax.html#%E5%AD%90%E6%A8%A1%E6%9D%BF>)
* [art-template 继承模版](<https://aui.github.io/art-template/zh-cn/docs/syntax.html#%E6%A8%A1%E6%9D%BF%E7%BB%A7%E6%89%BF>)

## 3.路由设计

| 路径      | 方法 | get参数 | post参数                  | 是否需要登录权限 | 备注         |
| --------- | ---- | ------- | ------------------------- | ---------------- | ------------ |
| /         | GET  |         |                           | 否               | 渲染首页     |
| /register | GET  |         |                           | 否               | 渲染注册页面 |
| /register | POST |         | email、nickname、password | 否               | 处理注册请求 |
| /login    | GET  |         |                           | 否               | 渲染登录页   |
| /login    | POST |         | email, password           | 否               | 处理登录请求 |
| /logout   | GET  |         |                           | 是               | 处理登录请求 |

