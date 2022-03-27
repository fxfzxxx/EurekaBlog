---
title: react之 第三方 redux 的使用
description: 基本概念和用法,以及一些实例.
authors:
  - Aaron
tags:
  - All
categories:
  - Technology
series:
  - react
date: '2022-03-20'
lastmod: '2022-03-20'
featuredImage: images/react-logo.jpeg
toc: true
draft: false
---

## Redux

### redux是什么

1. redux是一个专门用于做**状态管理**的JS库(不是react插件库)。

2. 它可以用在react, angular, vue等项目中, 但基本与react配合使用。

3. 作用: 集中式管理react应用中多个组件**共享**的状态。

###  什么情况下需要使用redux

1. 某个组件的状态，需要让其他组件可以随时拿到（共享）。

2. 一个组件需要改变另一个组件的状态（通信）。

3. 总体原则：能不用就不用, 如果不用比较吃力才考虑使用。

![redux原理图的副本](https://raw.githubusercontent.com/fxfzxxx/MD-Images/master/redux%E5%8E%9F%E7%90%86%E5%9B%BE%E7%9A%84%E5%89%AF%E6%9C%AC.png)

## 使用 redux

安装: `yarn add redux`

### 精简版 - 求和案例

1. 去除 Count 自身组件状态

2. src 下建立目录

   - redux
     - store.js
     - count_reducer.js
   
3. store.js
   
   1. 引入 redux 中的 createStore 函数, 创建一个 store
   2. createStore 需要传入一个 reducer
   3. 默认暴露 store 对象
   
4. count_reducer.js
   
   1. reducer 的本质是一个函数, 接收: preState, action 两个参数, 返回加工后的状态
   2. reducer 有两个作用: 初始化状态, 加工状态
   3. reducer 被第一次调用时, 是 store 自动触发的
      1. 传递的 preState 是 undefined
      2. 传递的 action 是随机生成的 type
   
5. 在 index.js 中检测 store 中状态的改变, 一旦发生改变, 重选渲染 ` <App/>`
   
   1. subscribe 函数在 redux 中状态改变的时候后触发.
   2. 因为 redux 只负责管理状态, 没办法通知 react 去重新渲染页面, 只能间接触发.
   
### 完整版 - 求和案例

新增文件:

1. count_action.js 用来专门创建 action 对象, 直接在 需要 dispatch 的地方当做参数传入.

2.  constant.js 用来容易写错的 type 值

### 异步版 - 求和案例

- 需要提前引入一个中间件来使用异步:
  1. `yarn add redux-thunk`,
  2. 在 store.js 中`import thunk from 'redux-thunk'`

- action 作为一个对象, 可以是 `{type:'type',data:data }` , 也可以是一个函数. 当它是函数的时候, 就被称为**异步 action.**

- store 的 dispatch 可以做判断:

  1. 如果传入的是同步 action, 那么直接 dispatch 这个对象给 reducer 用.

  2. 如果传入的是异步 action, 那么会给这个函数传入一个 dispatch 函数, 让异步函数来完成及时或者 ajax 等异步工作后, 调用 dispatch , dispatch 需要传入一个同步 action 函数.

  

### react-redux
![react-redux模型图](https://raw.githubusercontent.com/fxfzxxx/MD-Images/master/react-redux%E6%A8%A1%E5%9E%8B%E5%9B%BE.png)

#### 1. 明确两个概念:

1. UI组件

   1) 只负责 UI 的呈现，不带有任何业务逻辑

   2) 通过props接收数据(一般数据和函数)

   3) 不使用任何 Redux 的 API

   4) 一般保存在components文件夹下

2. 容器组件

   1) 负责管理数据和业务逻辑，不负责UI的呈现

   2) 使用 Redux 的 API, 和 redux 通信, 将结果给 UI 组件

   3) 一般保存在containers文件夹下

#### 2. 如何创建容器组件

靠 react-redux 的 connect 函数

`connect(mapStateToProps, mapDispatchToProps)(UI组件)`

- mapStateToProps: 映射状态, 返回值是一个对象{key:state}
- mapDispatchToProps: 映射操作状态的方法, 返回值是一个对象{key:function}
  - 可以作为一个对象直接传, 对象就是操作状态的方法.
  - 由 react-redux 来调用 dispatch, 自己不用写(不然要在参数里传 dispatch, 然后在返回的对象里调用 dispatch)


#### 3. 容器组件中的 store

是靠 props 传进去的, 而不是在容器中直接引入的.

### react-redux 优化版本

1. 容器组件和 UI 组件混合成一个组件, UI 组件作为类通过 connect 传入容器, 然后暴露容器

2. 无需自己给容器传递 store, 不然多个容器每次都要在props键值对传同样的 `store={store}`, 属于重复性代码. 只需要给 `<App />` 外侧包裹一个 `<Provider store={store}>` , 就可以完成对所有容器的 store 传递. 主要要提前引入 Provider `import {Provider} from 'react-redux';`

3. 使用 react-redux 后也不需要自己 `subscribe` redux 中的状态的改变了, 容器组件可以自动完成这个工作.

4. `mapDispatchToProps` 可以简写成一个对象, 不用每次传入 dispatch 并返回函数.

5. 一个组件和 redux 的交互步骤

   1. 定义 UI 组件 -- 不暴露 no leakage

   2. 引入 connect 生成一个容器组件, 并暴露

      ```react
      connect(state => ({key:value})
             {key:xxxAction}
             )(UI 组件)
      ```

   3. 在 UI 组件中通过 this.props.xxx  来读写状态
