---
title: 通俗讲解 gulp 的使用方法
description: 了解 gulp 的使用和一些常用的插件.
toc: true
authors:
  - Aaron
tags:
  - All
categories:
  - Technology
series:
  - 打包工具
date: '2021-12-06'
lastmod: '2021-12-06'
featuredImage: images/gulp.jpeg
draft: false
---

## 了解 gulp

- 前端自动化打包构建工具

  - 打包就是把文件 压缩, 整合, 移动, 混淆

- 常用构建工具

  - gulp: 基于流的打包构建工具
  - webpack: 基于 js 文件的打包构建工具

- 什么是流

  - 流文件
    - 一种文件传输格式
    - 一段一段的文件传输
    - 网络在线视频
  - 流格式
    - 从头到尾的一个过程
    - 需要从 源 开始一步步经过加工
      - 每一个步骤依赖上一步的结果
      - 最终会出一个完整的成品
  - gulp 是基于 流格式 的打包工具
    - scss => css => 前缀 => 压缩 

- **gulp** **的依赖环境**

  - 依赖于 node 环境进行开发
  - 底层封装内容就是 node 里面的读写文件(fs 和 http 模块)

- **gulp 的作用**

  - 对于 css 文件
    - 压缩
    - 转码( 自动添加前缀, SCSS 转CSS)
  - 对于 JS 文件
    - 压缩
    - 转码( ES6 转 ES5 )
  - 对于 html 文件
    - 压缩
    - 转码( 对格式的转换 )
  - 对静态资源文件的处理
  - 对第三方文件的处理

- **gulp 的安装**

  - 是一个 js 相关的工具
  - 直接用 npm 安装
  - 需要安装在电脑环境里面, 一次安装 多次使用
  - 打开命令行, 输入指令
    - `$ npm install --global gulp`
    - mac: `$ sudo npm install --global gulp`

- **gulp 的检测**

  - `gulp --version`

- **gulp 的卸载**

  - `$ npm uninstall --global gulp`

- **gulp 的版本**

  - gulp @3.9.1

  - gulp @4 => gulp cli 2.2.0

    - 19年1月开始迭代

## gulp 的使用

### 源码和打包后的内容

- 源码一般放在 src 文件夹种
- 打包后一般在 dist 文件夹中
- 文件分开是因为打包后要上传服务器, 集中放在一起便于一起上传

### 1. 准备好一个项目

- 目录结构
- 源码和打包的分开
- 结构
  - xiaomi
    - src
      - pages
      - css  正常来说 css 和 sass 文件夹只需要一个
      - js
      - sass
      - images
      - videos
      - audios
      - lib 第三方(swiper, jQuery)
      - fonts

### 2. 准备一个 gulpfile.js 文件

- 是必需的
- 是 gulp 打包的依据
- 每一个项目都需要一个 gulpfile.js 文件
- 在这个文件里进行本项目的打包配置
- gulp 运行的时候, 会自动读取 gulpfile.js 文件里的配置
- 注意: 直接卸载与 src 同级的根目录

### 3. 在项目里再次安装 gulp

- 注意: 项目里的 gulp 是以第三方模块的形式出现的
- 是专门配置打包流程的 API
- 在 src 同级的项目文件夹打开命令行 输入 `npm init`

> gulp 分为两种
>
> 1. 全局依赖 gulp
>    - 一台电脑安装一次就够，以后使用就可以了
>    - 在命令行内提供 gulp xxx 的能力
>    - 任何地方安装 输入 `$ npm install --global gulp`
> 2. 项目依赖第三方 gulp
>    - 每个项目都要安装一次
>    - 作为第三方包引入, 再导入之后, 可以使用 `gulp.xxx()` 方法
>    - 需要切换到项目目录, 输入 `$ npm install gulp`

- **package.json 记录的第三方依赖**
  - dependencies
    - 表示项目的 项目依赖
    - 例如 jQuery, Swiper
    - 项目运行需要用的的内容, 将来上线后也需要用到的内容
  - devDependencies
    - 表示项目的 开发依赖
    - 比如 gulp
    - 项目开发阶段会用到的, 上线之后不会用
  - 所以如果要把 gulp 放在 devDependencies 里面
    - 需要在命令行内输入
      - `$ npm install --dev gulp `, 或者
      - `$ npm install -D gulp`
    - <img src="C:\Users\Aaron\AppData\Roaming\Typora\typora-user-images\image-20210704003319241.png" alt="image-20210704003319241" style="zoom: 67%;" />

### 4. 在 gulpfile.js 里书写配置文件

- 书写该项目的打包流程
- 打包完毕之后, 按照打包流程去执行 gulp 指令, 运行 gulpfile.js 文件

## gulp 的常用 api

- `gulp.task()`
  - 语法: `gulp.task(任务名称, 任务处理函数)`

  - 作用: 创建一个基于流的任务

  - 例子

    - ```js
      gulp.task('htmlHandler', function () {
          // 找到 html 源文件, 进行压缩打包, 放入指定目录
      })
      ```

    -  

- `gulp.src()`

  - 语法: `gulp.src(路径信息)`
  - 作用：找到源文件
  - 书写方式: 
    - `gulp.src('./a/b.html')` 找到指定文件
    - `gulp.src('./a/*.html')` 指定目录下, 找到指定后缀文件
    - `gulp.src('./a/**')` 指定目录下, 所有文件
    - `gulp.scr('./a/** /*')` a 目录下, 所有子目录里的所有文件
    - `gulp.src('./a/** /*.html')` a 目录下, 所有子目录里所有 指定后缀文件

- `gulp.dest()`

  - 语法: `gulp.dest(路径信息)`
  - 作用: 把一个内容放到指定目录内
  - 一般是打包好之后, 用这个 api

- `gulp.watch()`

  - 语法: `gulp.watch(路径信息, 任务名称)`

  - 作用: 监控指定目录下的文件, 一旦发生变化, 从新执行后面的任务
  - 例子: `gulp.watch('./src/pages/*.html', htmlHandler)`
    - 监控指定目录下的 html 文件变化, 如有变化就执行 htmlHandler 任务

- `gulp.series()`

  - 语法: `gulp.series(任务1, 任务2, 任务3)`
  - 作用: 执行多个任务, 前一个结束 (流被 return 出去之后)), 后一个开始

- `gulp.parallel()`

  - 语法: `gulp.parallel(任务1, 任务2, 任务3)`
  - 作用: 并行执行多个任务

- `pipe()`

  - 管道函数

  - 所有的 gulp API 都是基于流

  - 接收当前流, 进入下一个流过程的管道函数

  - 例子

    - ```js
      gulp.src().pipe(压缩任务).pipe(转码).pipe(gulp.dest('./a'))
      ```

- 执行的时候直接在 gulpfile.js 目录下, 打开命令行, 输入`$ npm cssHandler`

## gulp 常用的插件

- gulp 的插件就是用来执行各种压缩转码任务的

### `gulp-cssmmin`

- 下载: `npm i gulp-cssmin -D`
- 导入: `const cssmin = require('gulp-cssmin')`
- 导入后得到一个处理流文件的函数
- 直接在管道函数里执行
- 压缩过程中会自动总结重复的样式

### `gulp-autoprefixer`

- 下载: `npm i gulp-autoprefixer`
- 导入: `const autoPrefixer = require('gulp-autoprefixer')`
- 导入后得到一个处理流文件的函数
- 在管道函数内使用, 需要传递参数 `{browsers:[需要兼容的浏览器]}`
- 可以不传递参数, 需要在 package.json 里面, 加一项 
  - `"browserlist"(小写) = ["last 2 versions","IOS < 7", "FireFox" <20]`

### `gulp-sass`

- 下载: `npm i gulp-sass -D`

  - 很容易报错, 下载不成功

  - 原因

    - gulp-sass 依赖另一个第三方 node-sass
    - node-sass 很难下载成功

  - 解决
      - 需要给 node-sass 单独配置一个下载地址
      - `$ set sass_binary_site=https://npm.taobao.org/mirrors/node-sass/`
      - `$ npm i node-sass -D`
      - `$ npm i gulp-sass -D` 
  
- 导入: `const sass = require('gulp-sass')`

  - 导入后管道函数内直接执行就可以了

- **sass** **转码的使用**

  - 如果需要导入 sass 文件的时候
  - 就把 变量 混合器 定义在 .sass 文件中
    - gulp 配置只会转码 .scss 文件
    - sass 中的 变量和混合器不会被转码
  - 当转码 .scss 文件的时候, 会自动读取和解析 .sass 文件里面的变量

### `gulp-uglify`

- 下载: `npm i -D gulp-uglify`
- 导入: `const uglify = require('gulp-uglify')`

- 作用: 压缩 js 文件的, 但是不认识 ES6
  - 需要用 gulp-babel: 把 ES6 转换成 ES5
    - 但有坑

### `gulp-babel`

- 专门进行 ES6 转 ES5 的插件
- 版本问题
  - gulp-babel@7: 使用在 gulp@3 里面
  - gulp-babel@8: 使用在 gulp@4 里面
- 下载:
  - gulp-babel  需要依赖另外两个包, 都需要下载
    - @babel/core 和 @ babel/preset-env
- 导入: 导入一个就够, 其它会自动导入
- 在管道函数内使用, 需要传递参数
  - 8版本: `{ presets:['@babel/env'] }`
  - 7版本: `{ presets:['es2015']}`

### `gulp-htmlmin`

- 下载: `npm i -D gulp-htmlmin`
- 导入: `const htmlmin = require('gulp-htmlmin')`
- 管道函数内使用需要传参, 来决定如何压缩
  - 
  -  `{collapseWhitespace: true}` 移除空格
  - `{removeEmptyAttributes: true}` 去除空的属性, 仅限于原生属性
  - `{collapseBooleanAttributes: true}` checked = "checked"  会变成 checked
  - `removeAttributesQuotes: true}` 移除双引号, 一般 属性 = 后面的值可以不加双引号, 只有多个属性同时存在才必须加
  - `{minifyCSS: true}` 压缩内嵌式 css 代码, 只能是基本压缩, 不能其它处理
  - `{minifyJS: true}` 压缩内嵌式 js 代码, 基本压缩, 不能 ES6

### 

#### 图片问题

- 在开发环境中, 图片不需要自己压缩
- 大图片都是线上地址
- UI 处理好的图片, 压缩过了
- 直接`src().pipe(gulp.dest())`
  - 没必要 下载 gulp-image7
  - 7级压缩,无损压缩, 压缩效果不大, 甚至有时候文件变大

#### 视频, 音频和图片一样

- 直接`src().pipe(gulp.dest())`

#### 第三方包, 字体等

- 都不需要压缩转码, 直接移到 dist
- 因为 dist 需要是一个完整的项目

## 配置默认任务

- 默认任务的作用就是把所有任务一起执行
- 是否有先后顺序为判断依据
  - 有先后 用 gulp.series()
  - 没先后 用 gulp.parallel()
  - 两个方法的返回值都是函数, 返回值都可以直接当任务函数使用

- 两种方式创建 default 任务
  - `gulp.task('default', () => {})`
  - `module.exports.default = () => {}`
- 之所以 需要命名为 `default`, 是因为可以直接 `$gulp`  后面不用接任何关键字, 直接运行

## 创建一个删除任务

- 如果每次打包不删除 dist 文件夹
- 在更改 src 中文件的文件名后, 会重新在 dist 中打包一个新文件名的文件, 而旧文件依然存在
- 所以每次打包之前, 需要执行一个删除 dist 文件夹的任务

### 插件 `del`

- 下载: `npm i -D del`
- 作用：删除文件目录
- 导入：`const del = require('del')`
- 以数组的形式传递要删除的文件夹

## gulp 启动服务器

### 利用 gulp 启动一个服务器

- gulp 是基于 node 环境的工具
- node 可以作为服务器语言
- 所以 gulp 可以启动一个 基于 node 的服务器
- 根目录为 dist 
  - 如果 src 为根目录, sass 文件没有被转码, 无法使用 `'../sass/index.css'` , 无法被找到

### 插件 `gulp-webserver`

- 作用:  启动一个基于 node 的服务器

- 下载: `npm i -D gulp-webserver` 还是在项目根目录

- 导入: `const webserver = require('gulp-webserver')`

- 导入后得到一个处理流文件的函数

- 管道函数内调用, 需要传递参数, 来配置服务器

  - ```js
    const webHandler = function () {
        return gulp
        .src('./dist')
        .pipe(webserver({
            host: 'localhost',
            port: '8080',
            livereload: true,
            open: './pages/login.html' // 起始页
        }))
    }
    ```

    

- 启动服务配置自定义域名
  - 找到电脑中 hosts 文件
    - `C:/windows/system32/drivers/etc/hosts`
    - 注意: 找到那个没有后缀的 hosts 文件
    - 添加一行内容 `127.0.0.1    www.xx.com`

#### `gulp-webserver` 配置代理

- ```js
  proxy: [
            {
              source: "/td", // 代理标识符
              target: "https://xxx.com/server", // 代理目标地址
            },
          ],
  ```

- 注意:

  - 如果没有多余代理, 不要写空对象
  - 如果想用代理, 那么必须是在 gulp-websever 启动的服务器上
  - 可以代理一个目录, 目录中所有文件都可以跨域访问

### 添加监控任务检测文件变化

- ```js
  const watchHandler = function () {
      gulp.watch('./src/sass/*.scss', sassHandler)
      gulp.watch('./src/css/*.css', cssHandler4)
      gulp.watch('./src/js/*.js', jsHandler)
      gulp.watch('./src/pages/*.html', htmlHandler)
  }
  ```

## gulp 打包组件

### 场景

- 把重复的 html 单独拿出来, 写成 html 片段
- 单独拿出来的片段可以包含 css 和 js
  - 也可以不包含
- 当压缩 html 的时候
  - 在固定位置把写好的 html 片段引入进来

### 组件

- 一段可以包含 (css / js) 的一整套 html 结构片段
- 把页面的每一部分分成一段一段的 html 片段
- 最后组装在一起

### 插件 `gulp-file-include`

- 作用: 在一个 html 页面里导入另一个 html 片段

- 下载: `npm i -D gulp-file-include` 还是在项目根目录

- 导入: `const webserver = require('gulp-file-include')`

- 导入后得到一个处理流文件的函数

- 管道函数内调用, 压缩之前, 需要传递参数

  - ```js
    .pipe(fileInclude({ 
        prefix:'@-@', // 标识符
        basepath: './src/components/' // 组件目录
    }))
    ```

- 在 html 文件里导入时

  - 语法: `自定义标识符include('要导入的文件路径', 'json格式自定义变量')`  **存疑, 应该是对象格式**, key+双引号无法渲染

  - 文件路径从 basepath以后开始书写

  - ```html
    <!-- index.html -->
    <body>
        @-@include('./header.html',{ title: '首页', show: 'active'})
        <hr>
        <h1>Index</h1>
        <hr>
        @-@include('./footer.html')
    </body>
    
    <!-- header.html -->
    <div class="header @-@active">  样式的套用
        header
        <h1>@-@title</h1>
    </div>
    ```

  - 常把`<head>`标签也单独拿出来作为组件

  - ```html
    <!-- index.html -->
    <head>
        @-@include('./src/components/head.html', { title: "index"})
    </head>
    
    <!-- head.html -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@-@title</title>
    ```

  - 还可以用于 js, css 的引入

