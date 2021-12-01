---
title: 4. 了解 npm
description: 
toc: true
authors:
  - Aaron
tags:
  - 前端
  - node.js
categories:
  # - Technology
series:
  -  自学笔记
date: '2021-11-30'
lastmod: '2021-11-30'
featuredImage: images/nodejs.jpeg
draft: false
---

- 包管理器
- 包
  - 每一个插件 类库 框架 叫做一个包 jQuery bootstrap
- 安装下载第三方内容
  - 官网下载
  - 找人要
  - npm下载
- **专门用来下载第三方包的 工具**
  - 也是电脑中的一个软件
  - 没有图标
- **npm 的安装**
  - 当安装好 node 以后, 就已经自动安装好 npm 了
- **npm 的检测**
  - 打开命令行
  - 输入 `$ npm --version`
- **npm** **的写在**
  - 卸载 node 的时候就卸载了

## npm 的基本使用

### **下载第三方包**

- 打开命令行, 切换到需要下载的第三方包的目录
- 输入指令 `$npm install 包名`
- 会在当前目录下 生成 node_modules 文件夹
- 第三方包就再 文件夹里面
  - 下载包的最新版本

### **下载指定版本的第三方包**

- 打开命令行, 切换到需要下载的目录
- 输入指令 `$ npm install @版本号`
- 会下载指定版本的 包
  - 在一个 node_modules 的文件夹里面
  - 一个包 只能存在一个版本
  - 第二次下载后覆盖前一个版本

### 卸载第三方包

- `$ npm un 包名`

### **npm 初始化**

- 会按照你的要求 在当前目录下生成一个 package.json 的文件
- 用来记录 整个 项目的描述文件
- 如果初始化以后, 使用 npm 安装的 每一个包 都会在里面记录
- 打开 命令行, 切换到项目目录
  - 输入指令` $ npm init`
  - 会进入选择输入列表
  - 按照列表规则填写

