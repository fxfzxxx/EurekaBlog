---
title: 了解node
description: 
toc: true
authors:
  - Aaron
tags:
  - 前端
  - node.js
  - recent
categories:
  - Technology
  - All
series:
  -  自学笔记
date: '2021-11-30'
lastmod: '2021-11-30'
featuredImage: images/nodejs.jpeg
draft: false
---

## node 定义

- 官方: 基于 V8 引擎的 js 运行时 环境 (2009)
- 私人: 一个软件, 能运行 js 代码

- node 和其他普通软件的区别
  - node 没有图标
  - node 运行的时候必须告诉软件需要运行哪一个文件
  - node 没有可视化区域, 只能在命令行里面运行

## 解析引擎

- js 的引擎只能 解析 js的语法
- 前端 js 三大核心
  - DOM 文档对象模型, 因为 js 是被引入到 html 文件里面
  - BOM 浏览器对象模型, 因为 js 是被运行在 浏览器 里面的
    - 需要用到浏览器内核中的 解析引擎 来解析 js 文件运行
  - ECMAScript 语法: js 的标准语法
- nodejs 核心
  - ECMAScript 语法
  - I / O: 输入输出流, 读写磁盘
  - system: 操作系统
- 代码的运行环境
  - 引入 html 文件 运行 就只能走前端三大核心
  - 引入 node 运行 就只能走 nodejs核心

## 环境变量

- 对于电脑操作系统, 开发的一些变量(一个个的文件夹)
- 环境变量就是, 设定哪些目录文件夹给命令行
  - 只要提前配置好
  - 在运行一个程序的时候, 就会先去配置的文件夹里面找
  - 如果有 程序对应的 xxx.exe 文件, 就直接执行
- node 也可以运行相对路径上的 文件

## 常用的操作命令

```shell
cd .. 上一目录
cd 当前目录下指定文件夹
dir 查看当前目录解构
f: 盘符
tree: 树状结构查看当前目录所有子目录
cls 清屏
systemninfo 系统信息
ping www.baidu.com 网速信息
ipconfig() 网关信息
```

## node 运行 js 文件

- 直接在 命令行 书写 js 代码
  - s输入指令 node
  - 进入输入状态，等价于 浏览器控制台
  - 缺点
    - 无法保存
  - 退出编辑模式
    - ctrl + c 连按两次
- 在命令行运行 js 文件
  - 打开命令行， 切换目录到要执行js 文件 所在的目录
    - 书写 node js 文件名 回车
  - 书写绝对路径 回车

## node 开发模式

### 模块化开发

- 必须要 模块化 开发
- node的模块化标准 叫做 CommonJS
  - 导入导出的语法
- **为什么要模块化**
  - 前端
    - 当 js 代码引入 html 页面使用的时候
    - 一个页面引入多个 js 文件
    - 这些 js 文件之间 会有一个共同的 window
    - 我想在别的文件使用的内容， 就挂载在别的 window 上
  - node
    - js 在命令行里 运行
    - 每一次只能运行一个 js 文件
      - node 文件名 回车
    - 多个 js 之间没有 关联
    - 也没有共同的顶级对象出现
      - 只能使用 模块的 模式
      - 导入 到处
- **什么是模块**
  - 一个独立的 js 文件 就是一个模块
    - 里面存储一类方法
  - 每一个js 文件都不能访问其他文件里面的变量
    - 挡在 node 环境下的时候， 每一个 js 文件就叫一个 模块作用域
    - 就一个独立的 作用域，不能访问别人的，别人的也不能访问我的
- **node 的模块分类**
  1. 自定义模块
     - 自己书写的 js 文件
  2. 内置模块
     - 就是node自带的一些模块
     - node 原生的模块
     - 每一个js 文件天生自带 Module 对象
       - 导出 module.exports = { timeA, timeB }
  3. 第三方模块
     - 其他人写好的 js 文件 ， 存在一些功能
     - 就像插件， 可以下载使用