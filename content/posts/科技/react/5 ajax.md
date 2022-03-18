---
title: react之 AJAX
description: 利用 AJAX 的前后端交互
authors:
  - Aaron
tags:
  - All
categories:
  - Technology
series:
  - react
date: '2022-03-10'
lastmod: '2022-03-10'
featuredImage: images/react-logo.jpeg
toc: true
draft: false
---

## axios 的使用

react 主要使用 axios 来进行异步请求.

### 配置单个代理的注意事项

1. 代理服务器的域名和端口是和客户端相同的. 跨域的时候, 浏览器先给代理服务器发请求, 代理服务器再给目标服务器发请求. 服务器与服务器之间不存在跨域问题.

2. 可以在react脚手架目录中的 `package.json` 中配置代理服务器.  只需要加一行:
   - ` "proxy":"http://localhost:5000"`
   - 注意 5000 要与目标服务器的地址和端口相同, 这里容易混淆. 因为运行 react 的服务器实在端口 3000 上了, 指向的服务器为端口 5000. 
   - 这样理解: 代理服务器所有信息都给到了, 但是就差目标服务器的地址, 所以必须给.
3. 配置完成后, 在使用 axios 的时候, `get` 地址直接写 react 运行的地址和端口.
4. 跨域访问的时候, 优先访问本地 `public` 中的文件, 再通过代理去寻找目标服务器上的内容.
   1. 比如`axios.get('http://localhost:3000/index')` 返回的就是, `public` 下的主页 html 代码.
   2. 比如 `axios.get('http://localhost:3000/student')` ,如果 public下没有 `student` 文件, 并且目标服务器有响应以上地址的监听, 则通过目标服务器返回相应数据.

### 配置多个代理

1. 第一步：创建代理配置文件

   ```
   在src下创建配置文件：src/setupProxy.js
   ```

2. 编写setupProxy.js配置具体代理规则：

   ```js
   const proxy = require('http-proxy-middleware')
   
   module.exports = function(app) {
     app.use(
       proxy.createProxyMiddleware('/api1', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
         target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)
         changeOrigin: true, //控制服务器接收到的请求头中host字段的值,
          //用来欺骗服务器, 服务器收到请求头的就是本服务器地址
         /*
          changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
          changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
          changeOrigin默认值为false，但我们一般将changeOrigin值设为true
         */
         pathRewrite: {'^/api1': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
         // 不然的话服务器上接收的参数就是 api1/xxx
       }),
       proxy.createProxyMiddleware('/api2', { 
         target: 'http://localhost:5001',
         changeOrigin: true,
         pathRewrite: {'^/api2': ''}
       })
     )
   }
   ```

说明：

1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理。
2. 缺点：配置繁琐，前端请求资源时必须加前缀。

## Github 搜索案例

### 基本功能

由浏览器通过 AJAX 发送一个 get 请求, 来拿到 github 的用户数据.

### 构架分析

1. 浏览器直接可以通过 get `https://api.github.com/search/users` 地址来获取数据, 触发了跨域, 仍能收到返回信息是因为 github 设置了 cors. 
2. 短时间内多次请求, 容易被 github 封禁. 所以要设置一个服务器来 mock 被封禁后, 返回的数据. 同时服务器也负责转发来自浏览器的请求. 服务器的端口号设置为 5000.
3. 所以react需要设置代理来访问 5000, 设置 `api1` 为前缀识别.
4. 总体来说就是 react 浏览器3000 ->代理服务器3000 -> 数据服务器5000 -> github api

### 关键代码

#### react 请求

```js
search = () => {
      //连续解构赋值 + 重命名
      const {keyWordInput:{current:{value:value2}}} = this
      console.log(value2);
      //注意要给自己发
      axios.get(`http://localhost:3000/api1/search/users?q=${value2}`).then(
         response => {console.log('成功了',response.data)},
         error => {console.log('失败了',error)}
         )
   }
```



#### 设置代理

```js
const proxy = require('http-proxy-middleware')

module.exports = function (app) {
   app.use(
      proxy.createProxyMiddleware('/api1',{
         target: 'http://localhost:5000',
         changeOrigin:true, //用来欺骗服务器, 服务器收到请求头的就是本服务器地址
         pathRewrite:{'^/api1':''}
      })
   )
}
```



#### 数据服务器

```javascript
app.get("/search/users", function (req, res) {
  const {q} = req.query
  axios({
    url: 'https://api.github.com/search/users',
    params: {q}
  }).then(response => {
    res.json(response.data)
  })
})

app.listen(5000, "localhost", (err) => {
  if (!err){
  	console.log("服务器启动成功")
  	console.log("请求github真实数据请访问：http://localhost:5000/search/users")
  	console.log("请求本地模拟数据请访问：http://localhost:5000/search/users2")
  } 
  else console.log(err);
})
```

### 发布订阅模式

#### 基本概念:

监听消息, 并且做出反应, 典型的有js 自带的事件监听函数.

原生 js 的构造函数内:

- 属性: 消息队列对象:` {click:[fn,f1],abc:[fn1,fn2,fn3]}`

- 方法: 	
	
	1. 能向消息队列里添加 `subscribe('click',fn)` , 删除 `unSubscribe('click',fn)`; 
	
	2. 能触发消息队列的函数 `publish('click')`
#### 

  

