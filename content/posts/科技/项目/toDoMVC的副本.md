---
title: ES6 模块化开发的谈吃蛇小游戏
description: 一个通过原生 JavaScript 实现的模块化的贪吃蛇小游戏
authors:
  - Aaron
tags:
  - All
categories:
  - Technology
  - Projects
series:
  - 前端项目展示
tags:
  - 项目
date: '2022-02-08'
lastmod: '2022-02-08'
featuredImage: images/snakeGame.jpg
toc: true
draft: false
---

## 项目特点

- 原生 js 实现的交互功能

- ES6 模块化开发

- 分成四个类
	- 食物类: 生成一个食物, 随机位置.
	- 蛇类: 生成一个蛇, 给蛇加一节, 移动, 判断死亡.
	- 游戏规则类: 速度, 积分, 开始, 结束, 吃食物和撞墙的逻辑, 依赖于食物类和蛇类.
	- 入口类: 相当于 java 的 main 函数类, 依赖于游戏规则类, 仅在 html 中导入此类.

## 项目的技术栈

- html, CSS, JS

## 项目源码

详情请检查页面及加载项

### [查看项目请点击](/snake/index.html)
