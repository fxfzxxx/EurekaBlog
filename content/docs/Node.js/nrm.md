---
title: 5. 了解 nrm
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
  # -  自学笔记
date: '2021-11-30'
lastmod: '2021-11-30'
featuredImage: images/nodejs.jpeg
draft: false
---

- npm 的下载地址 默认在国外

- 下载会比较慢, 容易丢包

- 解决办法: 换一个国内的下载地址

  - npm 地址 npm 的原始地址
  - yarn 地址 国外的地址
  - cnpm 地址, 中国国家做的 镜像地址, 和npm服务器同步
  - taobao 地址, 阿里做的镜像地址, 每30mins 同步一次

- nrm 也是一个软件

  - 专门用来管理 npm 下载地址的软件
  - 测试网络延迟 切换下载地址

### **安装 nrm**

  - 因为是一个 javascript 工具
  - 所以可以使用 npm 进行安装
    - 因为不是某一个项目里面使用的
    - 需要安装在电脑的操作系统里
  - 使用 npm 安装全局工具第三方包
    - 打开命令行, 目录无所谓
    - `$ npm install nrm --global` 简写 $ npm i nrm -g
      - mac `$ sudo npm install nrm --global`

### **检测 nrm 安装**

    	- 打开命令行, 目录无所谓
    - 输入指令 $ nrm --version
    - 出现版本号就安装好了

### **卸载 全局 nrm 第三方工具**

    - 打开命令行, 目录无所谓
    - 输入指令 $ npm uninstall nrm --global
      - $ sudo npm install nrm --global


## **使用 nrm**

- 检测所有下载地址网络延迟

  - 打开命令行, 目录无所谓
  - 输入 $nrm test
    - *npm ---- 1978ms
      yarn --- 1222ms
      cnpm --- 2535ms
      taobao - 213ms
      nj ----- Fetch Error
      npmMirror  4814ms
      edunpm - Fetch Error
  - 带星号的是目前的下载地址
  - **package-lock.json** 里面 显示包的下载地址, 哈希值加密字符串

- 切换 npm 下载地址

  - 打开命令行, 目录无所谓

  - 输入指令 $ nrm use taobao

  - 再次使用 npm test 就是切换后的下载地址了(星号换位置)

    

