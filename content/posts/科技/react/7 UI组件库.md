---
title: react之 UI 组件库
description: 通过 v5 的 react-router-dom 来创建前端路由.
authors:
  - Aaron
tags:
  - All
categories:
  - Technology
series:
  - react
date: '2022-03-15'
lastmod: '2022-03-15'
featuredImage: images/react-logo.jpeg
toc: true
draft: false
---

## 流行的开源 React UI 组件库

1. 国外: material-UI
2. 国内: ant-design

### antd

1. 安装: `yarn add antd`

2. 基本使用

   ```jsx
   import React, { Component } from "react"
   import { Button } from "antd"
   import { WechatOutlined } from '@ant-design/icons'
   import "antd/dist/antd.css"
   
   export default class App extends Component {
     render() {
       return (
         <div>
           <div>App</div>
           <button>点我</button>
           <Button type="primary">Primary Button</Button>
           <WechatOutlined />
         </div>
       )
     }
   }
   ```

3. 按需使用样式

   1. `yarn eject` 来暴露配置选项, 或者
   2. 通过官网不暴露的方式, 更安全

4. 自定义主题
   1. 直接去官网文档
   2. 配置因版本而不同